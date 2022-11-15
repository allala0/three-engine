/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';

import './tools/functions/ThreeFunctions.js';
import './tools/functions/WindowFunctions.js';

import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {FXAAShader} from 'three/addons/shaders/FXAAShader.js';
import {SMAAPass} from 'three/addons/postprocessing/SMAAPass.js';

import {OrbitControls} from 'three/addons/controls/OrbitControls.js';
import {TrackballControls} from 'three/addons/controls/TrackballControls.js';

import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import Stats from 'three/addons/libs/stats.module.js';

import WebGL from 'three/addons/capabilities/WebGL.js';

import Transition from './tools/transitions/Transition.js';
import TransitionObject from './tools/transitions/TransitionObject.js';
import transitionFunctions from './tools/transitions/transitionFunctions.js';

// SAMPLE TEXTURE SHADER
const VS = /* glsl */ `
varying vec2 vUv;
void main(){
    vUv = uv;
    vec4 mvPosition = modelViewMatrix * vec4(position.x, position.y, position.z, 1.0);
    gl_Position = projectionMatrix * mvPosition;
}
`;

const FS = /* glsl */ `
varying vec2 vUv;
uniform sampler2D uTexture;

void main(){
    vec4 pixel = texture2D(uTexture, vUv);
    gl_FragColor = pixel;
}
`;

function setTextureQuality(textureQualitySizes={
        'ultra': 14580,
        'high': 10240,
        'medium': 7290,
        'low': 4860,
        'very-low': 2048
    }){
    
    const renderer = new THREE.WebGLRenderer;
    ThreeEngine.prototype.maxTextureSize = renderer.capabilities.maxTextureSize;
    ThreeEngine.prototype.maxTextures = renderer.capabilities.maxTextures;
    
    let textureQuality = 'very-low';
    for(const [_textureQuality, textureSize] of Object.entries(textureQualitySizes)){
        if(textureSize > textureQualitySizes[ThreeEngine.textureQuality] && textureSize <= ThreeEngine.maxTextureSize){
            textureQuality = _textureQuality;
        }
    }
    if(window.mobileCheck()) textureQuality = 'very-low';

    ThreeEngine.prototype.textureQuality = textureQuality;
}

class ThreeEngine{
    constructor(props){
        this.props = props;

        if(!WebGL.isWebGLAvailable()){
            const errorMessage = 'WebGL is not supported by your browser';
            if(window.mobileCheck()) alert(errorMessage);
            else console.error(errorMessage);

            return;
        }

        const setParameter = (name, defaultValue, object=this.props.setup) => this[name] = object[name] !== undefined ? object[name] : defaultValue;

        setParameter('domContainer', document.body);
        this.domElement = document.createElement('div');
        this.domContainer.appendChild(this.domElement);
        this.domElement.style.width = '100%';
        this.domElement.style.height = '100%';
        this.domElement.style.position = 'relative';

        this.loaded = false;
        this.inited = false;
        this.initedLoaded = false;
        this.renderInited = false;

        setParameter('DEV_MODE', false);
        setParameter('disableContextMenu', false);
        setParameter('usePostprocessing', false);
        setParameter('useControls', false);
        setParameter('useLoadingBar', false);
        setParameter('useLoadingCircle', false);
        setParameter('cameraType', 'perspective');
        setParameter('controlsType', 'orbit');
        setParameter('useSampleLights', false);
        setParameter('useShadows', false);
        setParameter('useAlpha', false);
        setParameter('useAntialias', false);
        setParameter('useFullscreenOnMobile', false);
        setParameter('backgroundColor', undefined);
        setParameter('useFXAA', false);
        setParameter('useSMAA', false);
        setParameter('cameraPosition', new THREE.Vector3(1, 1, 1));
        setParameter('cameraLookAt', new THREE.Vector3(0, 0, 0));
        setParameter('cameraUp', THREE.Object3D.DefaultUp.clone());
        setParameter('cameraZoom', 1);
        setParameter('perspectiveCameraFov', 30);
        setParameter('perspectiveCameraNear', 0.01);
        setParameter('perspectiveCameraFar', 1000);
        setParameter('orthographicCameraMinWidth', 1);
        setParameter('orthographicCameraMinHeight', 1);        
        setParameter('orthographicCameraNear', -1000);
        setParameter('orthographicCameraFar', 1000);
        setParameter('cameraTransitionDuration', 1.5);
        setParameter('cameraTransitionFunction', transitionFunctions.easeInOutQuad);
        setParameter('useSRGBEncoding', false);

        setParameter('assets', {}, this.props);
        setParameter('objectsToUpdate', [], this.props);

        for(const [name, prop] of Object.entries(this.props.callbacks || {})) ThreeEngine.prototype[name] = prop;

        this.loadCss();

        this.isMouseDown = false;

        this._cameraUp = this.cameraUp.clone();
        this._cameraLookAt = this.cameraLookAt.clone();

        this.cameraTransiton = null;

        if(this.useLoadingCircle) this.addLoadingCircle();
        if(this.useLoadingBar) this.addLoadingBar();
        
        this.clock = new THREE.Clock();
        this.mouse = new THREE.Vector2(1, 1);
        this.raycaster = new THREE.Raycaster();
        this.scene = new THREE.Scene();
                
        this.addRenderer();
        this.addCamera();
        this.addEventListeners();
        
        if(this.useControls) this.addControls();
        if(this.DEV_MODE) this.addStats();
        if(this.DEV_MODE) this.addGui();
        
        if(this.usePostprocessing) this.addPostProcessing();

        if(this.useSampleLights) this.addSampleLights();

        if(this.init)this.init(this);
        this.inited = true;

        this.domElement.size = new THREE.Vector2(this.domElement.clientWidth, this.domElement.clientHeight);

        this.GameLoop();
    }

    loadCss(){
        const link = document.createElement( "link" );
        link.href = "./assets/styles/style.css";
        link.type = "text/css";
        link.rel = "stylesheet";
        link.media = "screen,print";

        document.getElementsByTagName( "head" )[0].appendChild( link );
    }

    addLoadingBar(){
        this.loadingScreen = document.createElement('div');
        this.loadingScreen.classList.add('loadingScreen');
        this.loadingBar = document.createElement('div');
        this.loadingBar.classList.add('loadingBar');
        this.loadingBarProgress = document.createElement('div');
        this.loadingBarProgress.classList.add('loadingBarProgress');
        this.loadingBar.appendChild(this.loadingBarProgress);
        this.loadingScreen.appendChild(this.loadingBar);
        this.domElement.appendChild(this.loadingScreen);
    }

    setLoadingBarVisibility(value){
        if(value) this.loadingScreen.classList.remove('hidden');
        else this.loadingScreen.classList.add('hidden');
    }

    setLoadingBarProgress(progress){
        if(this.useLoadingBar) this.loadingBarProgress.style.width = 100 * progress + '%';
    }

    addLoadingCircle(){
        this.loadingScreen = document.createElement('div');
        this.loadingScreen.classList.add('loadingScreen');
        this.loadingCircle = document.createElement('div');
        this.loadingCircle.classList.add('loadingCircle');
        this.loadingScreen.appendChild(this.loadingCircle);
        this.domElement.appendChild(this.loadingScreen);
    }

    setLoadingCircleVisibility(value){
        if(value) this.loadingScreen.classList.remove('hidden');
        else this.loadingScreen.classList.add('hidden');
    }
    
    addPostProcessing(){
        this.composer = new EffectComposer(this.renderer);

        this.renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(this.renderPass);

        if(this.useFXAA){
            this.fxaaPass = new ShaderPass(FXAAShader);
            this.composer.addPass(this.fxaaPass);
        }
        if(this.useSMAA){
            this.smaaPass = new SMAAPass(this.domElement.clientWidth * this.renderer.getPixelRatio(), this.domElement.clientHeight * this.renderer.getPixelRatio());
            this.composer.addPass(this.smaaPass);
        }
    }

    updateFxaaPass(){
        const pixelRatio = this.renderer.getPixelRatio();
        const uniforms = this.fxaaPass.material.uniforms;

        uniforms[ 'resolution' ].value.x = 1 / ( Math.ceil(this.domElement.clientWidth * pixelRatio) );
        uniforms[ 'resolution' ].value.y = 1 / ( Math.ceil(this.domElement.clientHeight * pixelRatio) );
    }
    
    addRenderer(){
        this.renderer = new THREE.WebGLRenderer({alpha: this.useAlpha, antialias: this.useAntialias});
        if(this.useShadows){
            this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
            this.renderer.shadowMap.enabled = true;
        }
        this.renderer.setSize(this.domElement.clientWidth, this.domElement.clientHeight);
        if(this.backgroundColor) this.renderer.setClearColor(this.backgroundColor);
        if(this.useSRGBEncoding) this.renderer.outputEncoding = THREE.sRGBEncoding;

        this.domElement.appendChild(this.renderer.domElement);
    }

    addCamera(){
        if(this.cameraType === 'perspective'){
            this.addPerspectiveCamera();
        }
        else if(this.cameraType === 'orthographic'){
            this.addOrthographicCamera();
        }
        else{
            return;
        }
        
        this.setCameraPosition();
    }

    addPerspectiveCamera(){
        this.camera = new THREE.PerspectiveCamera(this.perspectiveCameraFov, this.domElement.clientWidth / this.domElement.clientHeight, this.perspectiveCameraNear, this.perspectiveCameraFar);
    }
    
    calculateOrtographicCameraSize(){
        const cameraSize = new THREE.Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
        if(this.orthographicCameraMinWidth / this.orthographicCameraMinHeight > cameraSize.x / cameraSize.y){
            return new THREE.Vector2(this.orthographicCameraMinWidth, this.orthographicCameraMinWidth / cameraSize.x * cameraSize.y)
        }
        else{
            return new THREE.Vector2(this.orthographicCameraMinHeight * cameraSize.x / cameraSize.y, this.orthographicCameraMinHeight)
        }
    }

    addOrthographicCamera(){
        const cameraSize = this.calculateOrtographicCameraSize();

        this.camera = new THREE.OrthographicCamera(cameraSize.x / - 2, cameraSize.x / 2, cameraSize.y / 2, cameraSize.y / - 2, this.orthographicCameraNear, this.orthographicCameraFar);
    }
    
    addControls(){
        if(this.controlsType === 'orbit'){
            this.addOrbitControls();
        }
        else if(this.controlsType === 'trackball'){
            this.addTrackballControls();
        }
    }

    addTrackballControls(){
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.rotateSpeed = 3.5;
        this.controls.panSpeed = 0.2;
        this.controls.dynamicDampingFactor = 0.1;
    }
    
    addOrbitControls(){
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
    }
    
    addStats(){
        this.stats = new Stats();
        this.stats.showPanel(0);
        this.domElement.appendChild(this.stats.dom);
    }
    
    addGui(){ 
        this.gui = new GUI({autoPlace: false});
        
        this.gui.domElement.style.position = 'absolute';
        this.gui.domElement.style.right = 0;
        this.gui.domElement.style.top = 0;
        
        this.domElement.appendChild(this.gui.domElement);
    }

    assetsLoadedCheck(){
        let loaded = true;
        const totalCount = Object.entries(this.assets).length;
        let loadedCount = 0;
        if(!this.assets) loaded = false;
        else{
            for(const [assetName, asset] of Object.entries(this.assets)){
                if(!asset.loaded) loaded = false;
                else loadedCount++;
            }
        }
        if(this.useLoadingBar) this.setLoadingBarProgress(loadedCount / totalCount);
        return loaded;
    }

    GameLoop(){
        if(this.stats){this.stats.begin()}
        requestAnimationFrame(() => this.GameLoop());
        this._update();
        this.renderScene();
        if(this.stats){this.stats.end()}
    }

    updateCamera(){
        if(this.cameraTransiton) this.cameraTransiton.update();
        if(this.cameraTransiton && this.cameraTransiton.ended) this.cameraTransiton = null;

        if(this.useControls && this.controls.enabled){
            this._cameraLookAt.copy(this.controls.target);
            
            return;
        }

        const isCameraPositionReady = this.camera.position.equals(this.cameraPosition);
        const isCameraUpReady = this._cameraUp.equals(this.cameraUp);
        const isCameraLookAtReady = this._cameraLookAt.equals(this.cameraLookAt);
        const isCameraZooomReady = this.cameraZoom === this.camera.zoom;

        if(this.cameraTransiton === null && (!isCameraLookAtReady || !isCameraUpReady || !isCameraPositionReady || !isCameraZooomReady)) this.addCameraTransition();
    }

    resetCamera(){
        this.addCameraTransition();
    }

    addCameraTransition(){
        this.camera.up.copy(THREE.Object3D.DefaultUp);
        this._cameraUp.copy(THREE.Object3D.DefaultUp);
        if(this.useControls && this.controls.enabled){
            this._cameraLookAt.copy(this.controls.target);
        }
        const up = this.camera.localToWorld(this.camera.up.clone()).sub(this.camera.position);
        this._cameraUp.copy(up);
        this.camera.up.copy(up);

        this.cameraTransiton = new Transition([
            new TransitionObject(this, '_cameraLookAt', {1: this.cameraLookAt}),
            new TransitionObject(this.camera, 'position', {1: this.cameraPosition}),
            new TransitionObject(this, '_cameraUp', {1: this.cameraUp}),
            new TransitionObject(this.camera, 'zoom', {1: this.cameraZoom})
        ], {
            autoplay: true, 
            duration: this.cameraTransitionDuration, 
            function: this.cameraTransitionFunction, 
            callbackEveryUpdate: () => {
                this.camera.up.copy(this._cameraUp); 
                this.camera.lookAt(this._cameraLookAt); 
                if(this.useControls) this.controls.target.copy(this._cameraLookAt);
                
                this.camera.updateProjectionMatrix();
            }
        });
    }

    setCameraPosition(){
        this.camera.position.copy(this.cameraPosition);
        this.camera.up.copy(this.cameraUp);
        this.camera.lookAt(this.cameraLookAt);
        this.camera.zoom = this.cameraZoom;
    }
    
    updateObjects(){
        for(const object of this.objectsToUpdate){
            const argumentsConverted = [];
            if(object.function){
                object.function();
            }
            else if(object.arguments){
                for(const argument of object.arguments){
                    argumentsConverted.push(argument.object[argument.property]);
                }
            }
            object.object.update(...argumentsConverted);
        }
    }

    get clickableObjects(){
        const clickableObjects = [];
        if(this.scene){
            this.scene.traverse(node => {
                if(node.isClickable) clickableObjects.push(node);
            });
        }
        return [...clickableObjects].sort((a, b) => a.hoverDistance - b.hoverDistance);
    }

    handleClickableObjectsClick(event){
        const button = event.button;
        this.clickableObjects.reduce((isClicked, object) => {
            object.isPressed = object.isDragged = object.isHovered;
            object.isLeftClicked = button === 0 && object.isHovered;
            object.isRightClicked = button === 2 && object.isHovered;
            object.isWheelClicked = button === 1 && object.isHovered;
            
            if(isClicked) object.isLeftClicked = object.isRightClicked = object.isWheelClicked = object.isPressed = object.isDragged = false;
            else if(object.isHovered){
                if(object.isLeftClicked) object.isLeftClickCallbacked = false;
                else if(object.isRightClicked) object.isRightClickCallbacked = false;
                else if(object.isWheelClicked) object.isWheelClickCallbacked = false;
            }
            
            return object.isHovered || isClicked;
        }, false);
    }

    handleClickableObjectsUnClick(){
        this.clickableObjects.map(object => object.isPressed = object.isDragged = false);
    }

    updateClickableObjects(){
        let isHovered = false;
        for(const object of this.clickableObjects){
            if(object.isClickDisabled){
                object.isHovered = false;
                object.isLeftClicked = object.isRightClicked = object.isWheelClicked = false;
                object.isDragged = false;
                object.isPressed = false;
                object.isLeftClickCallbacked = object.isRightClickCallbacked = object.isWheelClickCallbacked = true;
                continue;
            }
            const clickableObject = object.clickableObject !== undefined ? object.clickableObject : object;
            object.isHovered = clickableObject.hoverCheck(this.mouse, this.camera) && !isHovered;
            if(object.isPressed && !object.isHovered) object.isPressed = false;
            if(object.isHovered) isHovered = true;
        }

        if(isHovered) window.cursorPointer();
        else window.cursorArrow();
    }

    _initLoaded(){
        if(this.DEV_MODE) this.promptTestingData();
        if(this.DEV_MODE) this.addTestingGuiFields();
    }

    _update(){
        if(!this.domElement.size.clone().equals(this.domElement.size.set(this.domElement.clientWidth, this.domElement.clientHeight))) this.resize();

        if(this.useLoadingCircle) this.setLoadingCircleVisibility(!this.initedLoaded);
        if(this.useLoadingBar) this.setLoadingBarVisibility(!this.initedLoaded);

        this.loaded = this.assetsLoadedCheck();

        this.updateCamera();

        this.updateClickableObjects();
        this.updateObjects(); 
        if(this.update) this.update(this);
        if(this.loaded && !this.initedLoaded && this.initLoaded){this._initLoaded(); this.initLoaded(this); this.initedLoaded = true;}
        if(this.initedLoaded && this.updateLoaded && this.renderInited) this.updateLoaded(this);
        if(this.initedLoaded && this.updateLoaded) this.renderInited = true;


        if(this.hover) this.hover(this);
        if(this.useControls) this.controls.update();
        if(this.usePostprocessing && this.useFXAA) this.updateFxaaPass();
    }

    renderScene(){
        if(this.usePostprocessing) this.composer.render();
        else this.renderer.render(this.scene, this.camera);
    }
    
    addSampleLights(){
        this.lightsGroup = new THREE.Group();
        let power = 0.5;
        let power2 = 0.6;
        let power3 = 0.7;
        let color = 0xffffff;
        let distance = 100;
        
        let lightsProperties = [[distance, 0, 0, power3, true], [-distance, 0, 0, power3, true], [0, 0, distance, power, true], [0, 0, -distance, power, true], [0, distance, 0, power2, true], [0, -distance, 0, power2, true]];

        for(let i=0; i < lightsProperties.length; i++){
            let light = new THREE.DirectionalLight(color, lightsProperties[i][3]);
            
            // let lightSize = 100;
            // light.shadow.camera.left = -lightSize;
            // light.shadow.camera.right = lightSize;
            // light.shadow.camera.top = lightSize;
            // light.shadow.camera.bottom = -lightSize;
            light.shadow.mapSize.width = light.shadow.mapSize.height = 2500;

            light.position.set(lightsProperties[i][0], lightsProperties[i][1], lightsProperties[i][2]);
            if(lightsProperties[i][4]) light.castShadow = true;
         
            this.lightsGroup.add(light);
        }
     
        this.lightsGroup.add(new THREE.AmbientLight(0x404040));

        this.scene.add(this.lightsGroup);
        
        return this.lightsGroup;
    }
    
    addEventListeners(){
        if(this.useFullscreenOnMobile) document.body.addEventListener('mousedown', event => {
            if(window.mobileCheck() && !window.isIOS){
                try{
                    if (!document.fullscreenElement) {
                        document.documentElement.requestFullscreen();
                    }
                }
                catch(e){

                }
            }
        });

        this.domElement.addEventListener('mousemove', event => {
            if(this.useControls && this.controls.enabled && this.isMouseDown) this.cameraTransiton = null;
            if(this.mouseMove) this.mouseMove(event, this);
            this._mouseMove(event, this);
        });

        this.domElement.addEventListener('mousedown', event => {
            this.isMouseDown = true;
            if(this.mouseDown) this.mouseDown(event, this);
            this.handleClickableObjectsClick(event);
        });
        
        this.domElement.addEventListener('mouseup', event => {
            this.isMouseDown = false;
            if(this.mouseUp) this.mouseUp(event, this);
            this.handleClickableObjectsUnClick();
        });

        this.domElement.addEventListener('touchstart', event => {
            if(event.touches && event.touches.length > 0) this._mouseMove({clientX: event.touches[0].clientX, clientY: event.touches[0].clientY});
            if(this.touchStart) this.touchStart(event, this);
            
            this.lastTouch = event.touches[0];
        });

        this.domElement.addEventListener('touchmove', event => {
            if(event.touches && event.touches.length > 0) this._mouseMove({clientX: event.touches[0].clientX, clientY: event.touches[0].clientY});
            if(event.touches.length === 1){
                const touch = event.touches[0];
                const touchCoordinates = new THREE.Vector2(touch.screenX, touch.screenY)
                this.lastTouch = touch;
            }
        });

        this.domElement.addEventListener('touchend', event => {
            if(this.touchEnd) this.touchEnd(event, this);
        });

        this.domElement.addEventListener('wheel', (event) => {
            if(this.useControls && this.controls.enabled) this.cameraTransiton = null;
            if(this.onWheel) this.onWheel(event, this);
        });
        
        this.domElement.addEventListener('scroll', (event) => {
            if(this.onScroll) this.onScroll(event, this);
        });

        this.domElement.addEventListener("keydown", (event) => {
            if(this.onKeydown) this.onKeydown(event, this);
        });

        if(this.disableContextMenu) this.domElement.addEventListener("contextmenu", event => event.preventDefault());
    }

    resize(){
        this.renderer.setPixelRatio(window.devicePixelRatio);
        if(this.usePostprocessing) this.composer.setPixelRatio(window.devicePixelRatio);
        const width = this.domElement.clientWidth;
        const height = this.domElement.clientHeight;
        this.renderer.setSize(width, height);
        if(this.usePostprocessing) this.composer.setSize(width, height);
        this.camera.aspect = width / height;

        if(this.camera.isOrthographicCamera){
            const cameraSize = this.calculateOrtographicCameraSize();

            this.camera.left = -cameraSize.x / 2;
            this.camera.right = cameraSize.x / 2;
            this.camera.top = cameraSize.y / 2;
            this.camera.bottom = -cameraSize.y / 2;
        }
        this.camera.updateProjectionMatrix();
    }

    _mouseMove(event){
        this.mouseLast = {...this.mouse}
        
        this.mouse.x = ((event.clientX - this.domElement.parentNode.offsetLeft) / this.domElement.clientWidth) * 2 - 1;
        this.mouse.y = - ((event.clientY- this.domElement.parentNode.offsetTop) / this.domElement.clientHeight) * 2 + 1;
    }

    promptTestingData(){
        const capabilities = {};
        for(const [property, value] of Object.entries(this.renderer.capabilities)){
            if(value instanceof Function){
                capabilities[property] = value();
            }
            else{
                capabilities[property] = value;
            }
        }
        
        console.log('three.js version: ' + THREE.REVISION);
        console.log('renderer capabilities', capabilities);
    }

    randomCameraPosition(){
        this.cameraTransiton = null;
        this.cameraLookAt.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
        this.cameraPosition.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
        this.cameraUp.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        this.cameraZoom = Math.random() + 1;
    }

    addTestingGuiFields(){
        this.gui.add({promptRendererInfo: () => console.log(this.renderer.info)}, 'promptRendererInfo');
        this.gui.add({resetCamera: () => this.resetCamera()}, 'resetCamera');
        if(this.useControls) this.gui.add(this.controls, 'enabled');
        this.gui.add({randomCameraPosition: () => this.randomCameraPosition()}, 'randomCameraPosition');
    }
}

setTextureQuality();

export default ThreeEngine;
