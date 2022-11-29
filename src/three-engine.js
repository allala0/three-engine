/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {
    Vector2,
    Vector3,
    WebGLRenderer,
    Object3D,
    Group,
    Clock,
    Raycaster,
    Scene,
    PCFSoftShadowMap,
    sRGBEncoding,
    PerspectiveCamera,
    OrthographicCamera,
    REVISION,
    AmbientLight,
    DirectionalLight,
    HemisphereLight,
    PointLight,
    RectAreaLight,
    SpotLight,
    Color
} from 'three';

import './tools/functions/ThreeFunctions.js';
import './tools/functions/WindowFunctions.js';

import stylesheet from './assets/styles/stylesheet.js';

import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {ShaderPass} from 'three/addons/postprocessing/ShaderPass.js';
import {FXAAShader} from 'three/addons/shaders/FXAAShader.js';
import {SMAAPass} from 'three/addons/postprocessing/SMAAPass.js';

import {OrbitControls} from './tools/controls/OrbitControls.js';
import {TrackballControls} from 'three/addons/controls/TrackballControls.js';
import {PointerLockControls} from 'three/addons/controls/PointerLockControls.js';
import {ArcballControls} from 'three/addons/controls/ArcballControls.js';

import {GUI} from 'three/addons/libs/lil-gui.module.min.js';
import Stats from 'three/addons/libs/stats.module.js';

import WebGL from 'three/addons/capabilities/WebGL.js';

import Transition from './tools/transitions/Transition.js';
import TransitionObject from './tools/transitions/TransitionObject.js';
import transitionFunctions from './tools/transitions/transitionFunctions.js';

class ThreeEngine{
    constructor(parameters={}){
        this.parameters = parameters;

        if(!WebGL.isWebGLAvailable()){
            const errorMessage = 'WebGL is not supported by your browser';
            alert(errorMessage);

            return;
        }

        this.loadCss();

        this.setupDomElement();

        this.setParameter('DEV_MODE', false);
        this.setParameter('enableControls', this.DEV_MODE);
        this.setParameter('controlsEnabled', true);
        this.setParameter('enableStats', this.DEV_MODE);
        this.setParameter('enableGui', this.DEV_MODE);
        this.setParameter('disableContextMenu', false);
        this.setParameter('enablePostprocessing', false);
        this.setParameter('enableLoadingBar', false);
        this.setParameter('enableLoadingCircle', false);
        this.setParameter('cameraType', 'perspective');
        this.setParameter('controlsType', 'orbit');
        this.setParameter('enableControlsPan', false);
        this.setParameter('enableControlsDamping', true);
        this.setParameter('enableOrbitControlsZoomToCursor', false);
        this.setParameter('enableTestLights', false);
        this.setParameter('enableShadows', false);
        this.setParameter('enableAlpha', false);
        this.setParameter('enableAntialias', false);
        this.setParameter('enableAutoFullscreenOnMobile', false);
        this.setParameter('backgroundColor', undefined);
        this.setParameter('enableFXAA', false);
        this.setParameter('enableSMAA', false);
        this.setParameter('cameraPosition', new Vector3(1, 1, 1));
        this.setParameter('cameraLookAt', new Vector3(0, 0, 0));
        this.setParameter('cameraUp', Object3D.DefaultUp.clone());
        this.setParameter('cameraZoom', 1);
        this.setParameter('perspectiveCameraFov', 30);
        this.setParameter('perspectiveCameraNear', 0.01);
        this.setParameter('perspectiveCameraFar', 1000);
        this.setParameter('orthographicCameraMinWidth', 1);
        this.setParameter('orthographicCameraMinHeight', 1);        
        this.setParameter('orthographicCameraNear', -1000);
        this.setParameter('orthographicCameraFar', 1000);
        this.setParameter('cameraTransitionDuration', 1.5);
        this.setParameter('cameraTransitionFunction', transitionFunctions.easeInOutQuad);
        this.setParameter('enableSRGBEncoding', false);

        this.setParameter('assets', {}, this.parameters);
        this.setParameter('objectsToUpdate', [], this.parameters);

        for(const [name, parameter] of Object.entries(this.parameters.callbacks || {})) ThreeEngine.prototype[name] = parameter;

        this.loaded = false;
        this.inited = false;
        this.initedLoaded = false;
        this.renderInited = false;

        this.isMouseDown = false;
        this.lastTouch = null;

        this._cameraUp = this.cameraUp.clone();
        this._cameraLookAt = this.cameraLookAt.clone();
        this._cameraPosition = this.cameraPosition.clone();
        this._cameraZoom = this.cameraZoom.clone();

        this.cameraTransition = null;

        this.clock = new Clock();
        this.mouse = new Vector2(1, 1);
        this.raycaster = new Raycaster();
        this.scene = new Scene();

        if(this.enableLoadingCircle) this.addLoadingCircle();
        if(this.enableLoadingBar) this.addLoadingBar();
                
        this.addRenderer();
        this.addCamera();
        this.addEventListeners();
        
        if(this.enableControls) this.addControls();
        if(this.enableStats) this.addStats();
        if(this.enableGui) this.addGui();
        
        if(this.enablePostprocessing) this.addPostProcessing();

        if(this.enableTestLights) this.addTestLights();

        if(this.init){
            this.init(this); this.inited = true;
        };

        this.GameLoop();
    }

    setParameter(name, defaultValue, object=this.parameters.setup) {
        this[name] = (object !== undefined && object[name] !== undefined) ? object[name] : defaultValue;
    }

    loadCss(){
        const domElement = document.createElement('style');
        domElement.innerHTML = stylesheet;

        document.getElementsByTagName('head')[0].appendChild(domElement);
    }

    setupDomElement(){
        this.setParameter('domContainer', document.body);
        this.domElement = document.createElement('div');
        this.domElement.id = 'scene';
        this.domElement.style.width = '100%';
        this.domElement.style.height = '100%';
        this.domElement.style.position = 'relative';
        this.domElement.style.left = 0;
        this.domElement.style.top = 0;
        this.domContainer.appendChild(this.domElement);
        this.domElement.size = new Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
    }

    addLoadingBar(){
        if(this.loadingScreen === undefined){
            this.loadingScreen = document.createElement('div');
            this.loadingScreen.classList.add('loadingScreen');
        }

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
        this.loadingBarProgress.style.width = 100 * progress + '%';
    }

    addLoadingCircle(){
        if(this.loadingScreen === undefined){
            this.loadingScreen = document.createElement('div');
            this.loadingScreen.classList.add('loadingScreen');
        }

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

        if(this.enableFXAA){
            this.fxaaPass = new ShaderPass(FXAAShader);
            this.composer.addPass(this.fxaaPass);
        }

        if(this.enableSMAA){
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
        this.renderer = new WebGLRenderer({alpha: this.enableAlpha, antialias: this.enableAntialias});
        if(this.enableShadows){
            this.renderer.shadowMap.enabled = true;
            this.renderer.shadowMap.type = PCFSoftShadowMap;
        }
        this.renderer.setSize(this.domElement.clientWidth, this.domElement.clientHeight);
        if(this.backgroundColor) this.renderer.setClearColor(this.backgroundColor);
        if(this.enableSRGBEncoding) this.renderer.outputEncoding = sRGBEncoding;

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
        this.camera = new PerspectiveCamera(this.perspectiveCameraFov, this.domElement.clientWidth / this.domElement.clientHeight, this.perspectiveCameraNear, this.perspectiveCameraFar);
    }
    
    calculateOrtographicCameraSize(){
        const cameraSize = new Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
        if(this.orthographicCameraMinWidth / this.orthographicCameraMinHeight > cameraSize.x / cameraSize.y){
            return new Vector2(this.orthographicCameraMinWidth, this.orthographicCameraMinWidth / cameraSize.x * cameraSize.y);
        }
        else{
            return new Vector2(this.orthographicCameraMinHeight * cameraSize.x / cameraSize.y, this.orthographicCameraMinHeight);
        }
    }

    addOrthographicCamera(){
        const cameraSize = this.calculateOrtographicCameraSize();
        this.camera = new OrthographicCamera(cameraSize.x / - 2, cameraSize.x / 2, cameraSize.y / 2, cameraSize.y / - 2, this.orthographicCameraNear, this.orthographicCameraFar);
    }
    
    addControls(){
        if(this.controlsType === 'orbit'){
            this.addOrbitControls();
        }
        else if(this.controlsType === 'trackball'){
            this.addTrackballControls();
        }
        else if(this.controlsType === 'pointerlock'){
            this.addPointerLockControls();
        }
        else if(this.controlsType === 'arcball'){
            this.addArcballControls();
        }

        this.controls.enabled = this.controlsEnabled;
    }

    addTrackballControls(){
        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.staticMoving = !this.enableControlsDamping;
        this.controls.noPan = !this.enableControlsPan;
        this.controls.rotateSpeed = 3.5;
        this.controls.panSpeed = 0.2;
        this.controls.dynamicDampingFactor = 0.1;

        this.controls.target.copy(this.cameraLookAt);
    }
    
    addOrbitControls(){
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = this.enableControlsDamping;
        this.controls.enablePan = this.enableControlsPan;
        this.controls.enableZoomToCursor = this.enableOrbitControlsZoomToCursor;

        this.controls.target.copy(this.cameraLookAt);
    }
    
    addPointerLockControls(){
        this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
    }

    addArcballControls(){
        this.controls = new ArcballControls(this.camera, this.renderer.domElement);
    }

    addStats(){
        this.stats = new Stats();
        this.stats.showPanel(0);

        this.stats.dom.style.position = 'absolute';
        
        this.domElement.appendChild(this.stats.dom);
    }
    
    addGui(){ 
        this.gui = new GUI({autoPlace: false});
        this.gui.close();
        
        this.gui.domElement.style.position = 'absolute';
        this.gui.domElement.style.right = 0;
        this.gui.domElement.style.top = 0;
        
        this.domElement.appendChild(this.gui.domElement);
    }

    assetsLoadedCheck(){
        let loaded = true;
        const totalAssetCount = Object.entries(this.assets).length;
        let loadedAssetCount = 0;
        if(!this.assets) loaded = false;
        else{
            for(const [assetName, asset] of Object.entries(this.assets)){
                if(!asset.loaded) loaded = false;
                else loadedAssetCount++;
            }
        }
        if(this.enableLoadingBar) this.setLoadingBarProgress(loadedAssetCount / totalAssetCount);

        return loaded;
    }

    resizeCheck(){
        return !this.domElement.size.clone().equals(this.domElement.size.set(this.domElement.clientWidth, this.domElement.clientHeight));
    }

    GameLoop(){
        if(this.enableStats) this.stats.begin();
        
        requestAnimationFrame(() => this.GameLoop());
        
        if(this.resizeCheck()) this._onResize();

        this.renderScene();
        this._update();

        if(this.enableStats) this.stats.end();
    }

    updateCamera(){
        if(this.cameraTransition !== null) this.cameraTransition.update();
        if(this.cameraTransition !== null && this.cameraTransition.ended) this.cameraTransition = null;

        if(this.enableControls && this.controls.enabled){
            this.cameraUp.copy(Object3D.DefaultUp);

            if(this.controls.target) this._cameraLookAt.copy(this.controls.target);
            this._cameraPosition.copy(this.camera.position);
            this._cameraUp.copy(this.camera.up);
            this._cameraZoom =  this.camera.zoom;
            
            return;
        }

        const isCameraPositionReady = this.camera.position.equals(this.cameraPosition);
        const isCameraUpReady = this.camera.up.equals(this.cameraUp);
        const isCameraLookAtReady = this._cameraLookAt.equals(this.cameraLookAt);
        const isCameraZooomReady = this.camera.zoom === this.cameraZoom;

        if(this.cameraTransition === null && (!isCameraLookAtReady || !isCameraUpReady || !isCameraPositionReady || !isCameraZooomReady)) this.addCameraTransition();
    }

    addCameraTransition(){
        this.camera.up.copy(Object3D.DefaultUp);
        this._cameraUp.copy(Object3D.DefaultUp);

        if(this.enableControls && this.controls.enabled && this.controls.target){
            this._cameraLookAt.copy(this.controls.target);
        }

        const up = this.camera.localToWorld(this._cameraUp.clone()).sub(this._cameraPosition);
        this._cameraUp.copy(up);
        this.camera.up.copy(up);

        this.cameraTransition = new Transition([
            new TransitionObject(this, '_cameraPosition', {1: this.cameraPosition}),
            new TransitionObject(this, '_cameraUp', {1: this.cameraUp}),
            new TransitionObject(this, '_cameraLookAt', {1: this.cameraLookAt}),
            new TransitionObject(this, '_cameraZoom', {1: this.cameraZoom})
        ], {
            autoplay: true, 
            duration: this.cameraTransitionDuration, 
            function: this.cameraTransitionFunction, 
            callbackEveryUpdate: () => {
                this.camera.position.copy(this._cameraPosition);
                this.camera.up.copy(this._cameraUp);
                this.camera.lookAt(this._cameraLookAt);
                this.camera.zoom = this._cameraZoom;

                if(this.enableControls && this.controls.target) this.controls.target.copy(this._cameraLookAt);
                
                this.camera.updateProjectionMatrix();
            }
        });
    }

    setCameraPosition(){
        this.cameraTransition = null;

        this.camera.position.copy(this.cameraPosition);
        this.camera.up.copy(this.cameraUp);
        this.camera.lookAt(this.cameraLookAt);
        this.camera.zoom = this.cameraZoom;
    }
    
    updateObjects(){
        for(const objectToUpdate of this.objectsToUpdate){
            const argumentsConverted = [];
            if(objectToUpdate.arguments){
                for(const argument of objectToUpdate.arguments){
                    argumentsConverted.push(argument.object[argument.property]);
                }
            }
            if(objectToUpdate.object.update !== undefined) objectToUpdate.object.update(...argumentsConverted);
        }
    }

    get clickableObjects(){
        const clickableObjects = [];
        if(this.scene){
            this.scene.traverse(object => {
                if(object.isClickable) clickableObjects.push(object);
            });
        }
        return clickableObjects.sort((a, b) => a.hoverDistance - b.hoverDistance);
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
                if(object.isLeftClicked) object.isLeftClickNeedCallback = true;
                else if(object.isRightClicked) object.isRightClickNeedCallback = true;
                else if(object.isWheelClicked) object.isWheelClickNeedCallback = true;
            }
            
            return object.isHovered || isClicked;
        }, false);
    }

    handleClickableObjectsMouseUp(){
        this.clickableObjects.map(object => object.isPressed = object.isDragged = false);
    }

    updateClickableObjects(){
        let isHovered = false;
        for(const object of this.clickableObjects){
            const lastIsHovered = object.isHovered;
            if(object.isClickDisabled){
                object.isHovered = false;
                object.isLeftClicked = object.isRightClicked = object.isWheelClicked = false;
                object.isDragged = false;
                object.isPressed = false;
                object.isLeftClickNeedCallback = object.isRightClickNeedCallback = object.isWheelClickNeedCallback = false;
                continue;
            }

            if(object.isLeftClickNeedCallback){
                object.isLeftClickNeedCallback = false; 
                object.onClick();
            }
            if(object.isRightClickNeedCallback){
                object.isRightClickNeedCallback = false; 
                object.onRightClick();
            }
            if(object.isWheelClickNeedCallback){
                object.isWheelClickNeedCallback = false; 
                object.onWheelClick();
            }

            const clickableObject = object.clickableObject !== undefined ? object.clickableObject : object;
            object.isHovered = !isHovered && clickableObject.hoverCheck(this.mouse, this.camera);

            if(object.isHovered){
                if(!lastIsHovered){
                    object.onHover();
                }
                object.onHoverUpdate();
            }
            else if(lastIsHovered){
                object.onHoverEnd();
            }

            if(!object.isHovered) object.isPressed = false;
            if(object.isHovered) isHovered = true;
        }

        if(isHovered) window.cursorPointer();
        else window.cursorArrow();
    }

    _initLoaded(){
        if(this.DEV_MODE) this.promptDebugInfo();
        if(this.DEV_MODE) this.addDebugGuiFields();
    }

    _update(){
        this.loaded = this.assetsLoadedCheck();

        const DPR = window.devicePixelRatio.toFixed(5) * 1;
        if(getComputedStyle(document.documentElement).getPropertyValue('--DPR') != DPR) document.documentElement.style.setProperty('--DPR', DPR);

        if(this.enableLoadingCircle) this.setLoadingCircleVisibility(!this.initedLoaded);
        if(this.enableLoadingBar) this.setLoadingBarVisibility(!this.initedLoaded);

        this.updateCamera();

        this.updateClickableObjects();
        this.updateObjects();
        if(this.update) this.update(this);
        if(this.loaded && !this.initedLoaded){
            this._initLoaded(); if(this.initLoaded) this.initLoaded(this); this.initedLoaded = true;
        }
        if(this.initedLoaded && this.updateLoaded && this.renderInited) this.updateLoaded(this);
        if(this.initedLoaded && this.updateLoaded) this.renderInited = true;

        if(this.hover) this.hover(this);
        if(this.enableControls && this.controls.update) this.controls.update();
        if(this.enablePostprocessing && this.enableFXAA) this.updateFxaaPass();
    }

    renderScene(){
        if(this.enablePostprocessing) this.composer.render();
        else this.renderer.render(this.scene, this.camera);
    }
    
    addTestLights(){
        const minPos = -10;
        const maxPos = 10;
        const step = 0.05;

        const lightsGroup = new Group();
        const lightsFolder = this.gui?.addFolder('Lights');
        lightsFolder?.close();

        const ambientLight = new AmbientLight();
        ambientLight.intensity = 0.6235;
        const ambientLightFolder = lightsFolder?.addFolder('AmbientLight');
        const ambientLightEnableObject = new (class{})();
        ambientLightEnableObject._enabled = true;
        ambientLightEnableObject.__defineGetter__('enabled', function(){
            return this._enabled || false;
        });
        ambientLightEnableObject.__defineSetter__('enabled', function(val){
            this._enabled = val; if(val) lightsGroup.add(ambientLight); else ambientLight.removeFromParent();
        });
        ambientLightFolder?.add(ambientLightEnableObject, 'enabled').listen();
        ambientLightFolder?.add(ambientLight, 'intensity').min(0).max(1).listen().setValue(0.6235).step(step * 0.01);
        ambientLightFolder?.addColor(ambientLight, 'color');
        ambientLightEnableObject.enabled = true;
        ambientLightFolder?.close();

        const directionalLight = new DirectionalLight();
        directionalLight.intensity = 0.4;
        directionalLight.position.set(-8, -9, -10);
        const directionalLightFolder = lightsFolder?.addFolder('DirectionalLight');
        const directionalLightEnableObject = new (class{})();
        directionalLightEnableObject.__defineGetter__('enabled', function(){
            return this._enabled || false;
        });
        directionalLightEnableObject.__defineSetter__('enabled', function(val){
            this._enabled = val; if(val) lightsGroup.add(directionalLight); else directionalLight.removeFromParent();
        });
        directionalLightFolder?.add(directionalLightEnableObject, 'enabled').listen();
        directionalLightFolder?.add(directionalLight, 'intensity').min(0).max(1).step(step * 0.01).listen().setValue(0.4);
        directionalLightFolder?.addColor(directionalLight, 'color');
        directionalLightFolder?.add(directionalLight, 'castShadow');
        directionalLightFolder?.add(directionalLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(-8);
        directionalLightFolder?.add(directionalLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(-9);
        directionalLightFolder?.add(directionalLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(-10);
        directionalLightFolder?.add(directionalLight.target.position, 'x').min(minPos).max(maxPos).name('target x').step(step * 0.01);
        directionalLightFolder?.add(directionalLight.target.position, 'y').min(minPos).max(maxPos).name('target y').step(step * 0.01);
        directionalLightFolder?.add(directionalLight.target.position, 'z').min(minPos).max(maxPos).name('target z').step(step * 0.01);
        directionalLightFolder?.close();
        directionalLightEnableObject.enabled = true;
        lightsGroup.add(directionalLight.target);

        const hemisphereLight = new HemisphereLight();
        hemisphereLight.intensity = 1;
        hemisphereLight.color.set(0x1c1c1c);
        hemisphereLight.groundColor.set(0x000000);
        const hemisphereLightFolder = lightsFolder?.addFolder('HemisphereLight');
        const hemisphereLightEnableObject = new (class{})();
        hemisphereLightEnableObject.__defineGetter__('enabled', function(){
            return this._enabled || false;
        });
        hemisphereLightEnableObject.__defineSetter__('enabled', function(val){
            this._enabled = val; if(val) lightsGroup.add(hemisphereLight); else hemisphereLight.removeFromParent();
        });
        hemisphereLightFolder?.add(hemisphereLightEnableObject, 'enabled').listen();
        hemisphereLightFolder?.add(hemisphereLight, 'intensity').min(0).max(1).step(step * 0.01).listen().setValue(1);
        hemisphereLightFolder?.addColor(hemisphereLight, 'color').listen().setValue(new Color(0x1c1c1c));
        hemisphereLightFolder?.addColor(hemisphereLight, 'groundColor').listen().setValue(new Color(0x000000));
        hemisphereLightFolder?.add(hemisphereLight.position, 'x').min(-1).max(1).step(step * 0.01);
        hemisphereLightFolder?.add(hemisphereLight.position, 'y').min(-1).max(1).step(step * 0.01);
        hemisphereLightFolder?.add(hemisphereLight.position, 'z').min(-1).max(1).step(step * 0.01);
        hemisphereLightFolder?.close();
        hemisphereLightEnableObject.enabled = true;

        const pointLight = new PointLight();
        pointLight.intensity = 0.4;
        pointLight.distance = 0;
        pointLight.decay = 1;
        pointLight.position.set(8.95, 10, 10);
        const pointLightFolder = lightsFolder?.addFolder('PointLight');
        const pointLightEnableObject = new (class{})();
        pointLightEnableObject.__defineGetter__('enabled', function(){
            return this._enabled || false;
        });
        pointLightEnableObject.__defineSetter__('enabled', function(val){
            this._enabled = val; if(val) lightsGroup.add(pointLight); else pointLight.removeFromParent();
        });
        pointLightFolder?.add(pointLightEnableObject, 'enabled').listen();
        pointLightFolder?.add(pointLight, 'intensity').min(0).max(1).step(step * 0.01).listen().setValue(0.4);
        pointLightFolder?.addColor(pointLight, 'color');
        pointLightFolder?.add(pointLight, 'castShadow');
        pointLightFolder?.add(pointLight, 'power').min(0).max(50).step(step * 0.01).listen();
        pointLightFolder?.add(pointLight, 'distance').min(0).max(10).step(step * 0.01).listen().setValue(0);
        pointLightFolder?.add(pointLight, 'decay').min(0).max(10).step(step * 0.01).listen().setValue(1);
        pointLightFolder?.add(pointLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(8.95);
        pointLightFolder?.add(pointLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(10);
        pointLightFolder?.add(pointLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(10);
        pointLightFolder?.close();
        pointLightEnableObject.enabled = true;

        const rectAreaLight = new RectAreaLight();
        const rectAreaLightFolder = lightsFolder?.addFolder('RectAreaLight');
        const rectAreaLightEnableObject = new (class{})();
        rectAreaLightEnableObject.__defineGetter__('enabled', function(){
            return this._enabled || false;
        });
        rectAreaLightEnableObject.__defineSetter__('enabled', function(val){
            this._enabled = val; if(val) lightsGroup.add( rectAreaLight); else rectAreaLight.removeFromParent();
        });
        rectAreaLightFolder?.add(rectAreaLightEnableObject, 'enabled').listen();
        rectAreaLightFolder?.add(rectAreaLight, 'intensity').min(0).max(1).step(step * 0.01);
        rectAreaLightFolder?.addColor(rectAreaLight, 'color');
        rectAreaLightFolder?.add(rectAreaLight, 'power').min(0).max(50).step(step * 0.01);
        rectAreaLightFolder?.add(rectAreaLight, 'width').min(0).max(5).step(step * 0.01);
        rectAreaLightFolder?.add(rectAreaLight, 'height').min(0).max(5).step(step * 0.01);
        rectAreaLightFolder?.add(rectAreaLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01);
        rectAreaLightFolder?.add(rectAreaLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01);
        rectAreaLightFolder?.add(rectAreaLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01);
        const rectAreaLightLookAt = new Vector3();
        rectAreaLightFolder?.add(rectAreaLightLookAt, 'x').min(minPos).max(maxPos).step(step * 0.01).onChange(() => rectAreaLight.lookAt(rectAreaLightLookAt)).name('lookAt x');
        rectAreaLightFolder?.add(rectAreaLightLookAt, 'y').min(minPos).max(maxPos).step(step * 0.01).onChange(() => rectAreaLight.lookAt(rectAreaLightLookAt)).name('lookAt y');
        rectAreaLightFolder?.add(rectAreaLightLookAt, 'z').min(minPos).max(maxPos).step(step * 0.01).onChange(() => rectAreaLight.lookAt(rectAreaLightLookAt)).name('lookAt z');
        rectAreaLightFolder?.close();

        const spotLight = new SpotLight();
        const spotLightFolder = lightsFolder?.addFolder('SpotLight');
        const spotLightEnableObject = new (class{})();
        spotLightEnableObject.__defineGetter__('enabled', function(){
            return this._enabled || false;
        });
        spotLightEnableObject.__defineSetter__('enabled', function(val){
            this._enabled = val; if(val) lightsGroup.add(spotLight); else spotLight.removeFromParent();
        });
        spotLightFolder?.add(spotLightEnableObject, 'enabled').listen();
        spotLightFolder?.add(spotLight, 'intensity').min(0).max(1).step(step * 0.01);
        spotLightFolder?.addColor(spotLight, 'color');
        spotLightFolder?.add(spotLight, 'castShadow');
        spotLightFolder?.add(spotLight, 'power').min(0).max(50).step(step * 0.01);
        spotLightFolder?.add(spotLight, 'distance').min(0).max(10).step(step * 0.01);
        spotLightFolder?.add(spotLight, 'decay').min(0).max(10).step(step * 0.01);
        spotLightFolder?.add(spotLight, 'angle').min(0).max(Math.PI / 2).step(step * 0.01);
        spotLightFolder?.add(spotLight, 'penumbra').min(0).max(1).step(step * 0.01);
        spotLightFolder?.add(spotLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01);
        spotLightFolder?.add(spotLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01);
        spotLightFolder?.add(spotLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01);
        spotLightFolder?.add(spotLight.target.position, 'x').min(minPos).max(maxPos).name('target x').step(step * 0.01);
        spotLightFolder?.add(spotLight.target.position, 'y').min(minPos).max(maxPos).name('target y').step(step * 0.01);
        spotLightFolder?.add(spotLight.target.position, 'z').min(minPos).max(maxPos).name('target z').step(step * 0.01);
        spotLightFolder?.close();
        lightsGroup.add(spotLight.target);

        this.scene.add(lightsGroup);

        return lightsGroup;
    }
    
    requestFullscreen(){
        if(window.mobileCheck() && !window.isIOS){
            try{
                if (!document.fullscreenElement){
                    document.documentElement.requestFullscreen();
                }
            }
            catch(e){

            }
        }
    }

    addEventListeners(){
        this.domElement.addEventListener('mousemove', event => {
            if(this.enableControls && this.controls.enabled && this.isMouseDown) this.cameraTransition = null;
            this._onMouseMove(event, this);
            if(this.onMouseMove) this.onMouseMove(event, this);
        });
        
        this.domElement.addEventListener('mousedown', event => {
            if(this.enableControls && this.controls.enabled) this.cameraTransition = null;
            if(this.enableControls && this.controlsType === 'pointerlock') this.controls.lock();
            this.isMouseDown = true;
            if(this.onMouseDown) this.onMouseDown(event, this);
            this.handleClickableObjectsClick(event);

            if(this.enableAutoFullscreenOnMobile) this.requestFullscreen();
        }, false);
        
        this.domElement.addEventListener('mouseup', event => {
            this.isMouseDown = false;
            if(this.onMouseUp) this.onMouseUp(event, this);
            this.handleClickableObjectsMouseUp();
        });

        this.domElement.addEventListener('touchstart', event => {
            if(this.enableControls && this.controls.enabled) this.cameraTransition = null;
            if(event.touches && event.touches.length > 0) this._onMouseMove({clientX: event.touches[0].clientX, clientY: event.touches[0].clientY});
            if(this.onTouchStart) this.onTouchStart(event, this, this.lastTouch);
            if(event.touches && event.touches.length > 0) this.lastTouch = event.touches[0];
            
            if(this.enableAutoFullscreenOnMobile) this.requestFullscreen();

        });

        this.domElement.addEventListener('touchmove', event => {
            if(event.touches && event.touches.length > 0) this._onMouseMove({clientX: event.touches[0].clientX, clientY: event.touches[0].clientY});
            if(this.onTouchMove) this.onTouchMove(event, this, this.lastTouch);
            if(event.touches && event.touches.length > 0) this.lastTouch = event.touches[0];

        });

        this.domElement.addEventListener('touchend', event => {
            if(this.onTouchEnd) this.onTouchEnd(event, this, this.lastTouch);
            if(event.touches && event.touches.length > 0) this.lastTouch = event.touches[0];

        });

        this.domElement.addEventListener('wheel', (event) => {
            if(this.enableControls && this.controls.enabled) this.cameraTransition = null;
            if(this.onWheel) this.onWheel(event, this);
        });
        
        this.domElement.addEventListener('scroll', (event) => {
            if(this.onScroll) this.onScroll(event, this);
        });

        this.domElement.addEventListener('keydown', (event) => {
            if(this.onKeydown) this.onKeydown(event, this);
        });

        if(this.disableContextMenu) this.domElement.addEventListener('contextmenu', event => event.preventDefault());
    }

    _onResize(){
        this.renderer.setPixelRatio(window.devicePixelRatio);
        if(this.enablePostprocessing) this.composer.setPixelRatio(window.devicePixelRatio);
        const width = this.domElement.clientWidth;
        const height = this.domElement.clientHeight;
        this.renderer.setSize(width, height);
        if(this.enablePostprocessing) this.composer.setSize(width, height);
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

    _onMouseMove(event){
        this.mouseLast = {...this.mouse};
        
        this.mouse.x = ((event.clientX - this.domElement.getBoundingClientRect().left) / this.domElement.clientWidth) * 2 - 1;
        this.mouse.y = - ((event.clientY - this.domElement.getBoundingClientRect().top) / this.domElement.clientHeight) * 2 + 1;
    }

    promptDebugInfo(){
        const capabilities = {};
        for(const [property, value] of Object.entries(this.renderer.capabilities)){
            if(value instanceof Function){
                capabilities[property] = value();
            }
            else{
                capabilities[property] = value;
            }
        }
        
        console.log('three.js version: ' + REVISION);
        console.log('renderer capabilities', capabilities);
    }

    randomCameraPosition(){
        this.cameraTransition = null;
        this.cameraLookAt.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
        this.cameraPosition.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
        this.cameraUp.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
        this.cameraZoom = Math.random() + 1;
    }

    addDebugGuiFields(){
        const debugFolder = this.gui?.addFolder('Debug');
        debugFolder.add({promptRendererInfo: () => console.log(this.renderer.info)}, 'promptRendererInfo').name('Prompt renderer info');
        debugFolder.add(this, 'addCameraTransition').name('Add camera transition');
        debugFolder.add(this, 'setCameraPosition').name('Set camera position');
        debugFolder.add(this.controls, 'enabled').listen().name('Controls enabled').listen();
        debugFolder.close();
    }
}

function setTextureQuality(textureQualitySizes={
    'ultra': 14580,
    'high': 10240,
    'medium': 7290,
    'low': 4860,
    'very-low': 2048
}){
    const renderer = new WebGLRenderer;
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

setTextureQuality();

export default ThreeEngine;
