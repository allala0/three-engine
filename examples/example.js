/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';
import ThreeEngine from 'three-engine';
import Texture from 'three-engine/tools/assets/Texture.js';
import Json from 'three-engine/tools/assets/Json.js';
import Sound from 'three-engine/tools/assets/Sound.js';
import SpriteSheet from 'three-engine/tools/assets/SpriteSheet.js';
import Font from 'three-engine/tools/assets/Font.js';

import EquilateralTriangleGeometry from 'three-engine/tools/objects/geometries/EquilateralTriangleGeometry.js';
import TextMesh from 'three-engine/tools/objects/meshes/TextMesh.js';
import AnimatedMaterial from 'three-engine/tools/objects/materials/AnimatedMaterial.js';
import TexturedMaterial from 'three-engine/tools/objects/materials/TexturedMaterial.js';

import TransitionChain from 'three-engine/tools/transitions/TransitionChain.js';
import Transition from 'three-engine/tools/transitions/Transition.js';
import TransitionObject from 'three-engine/tools/transitions/TransitionObject.js';
import transitionFunctions from 'three-engine/tools/transitions/transitionFunctions.js';


let box, transitionChain, triangle, animatedPlane;

new ThreeEngine({
    domContainer: document.body, 
    callbacks: {
        init: threeEngine => {

        },
        initLoaded: threeEngine => {
            box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial());
            box.setupClickable();
            threeEngine.scene.add(box);
            box.material.map = threeEngine.assets.texture.data;

            threeEngine.assets.texture.data.magFilter = threeEngine.assets.texture.data.minFilter = THREE.NearestFilter;
            threeEngine.assets.spriteSheet.data.magFilter = threeEngine.assets.spriteSheet.data.minFilter = THREE.NearestFilter;

            transitionChain = new TransitionChain([
                new Transition([
                    new TransitionObject(box.rotation, 'x', {1: Math.PI * 2})
                ], {
                    // function: transitionFunctions.easeInOutCubic,
                    duration: 3,
                    function: transitionFunctions.easeInOutCubic
                }),
                new Transition([
                    new TransitionObject(box.rotation, 'y', {1: Math.PI * 2})
                ], {
                    duration:3,
                    function: transitionFunctions.easeInOutCubic
                }),
            ], {
                loop: true
            });      
            
            threeEngine.gui.add({skipTransitionChain: () => transitionChain.skip()}, 'skipTransitionChain');
            threeEngine.gui.add({resetTransitionChain: () => transitionChain.reset()}, 'resetTransitionChain');
            threeEngine.gui.add({playTransitionChain: () => transitionChain.play()}, 'playTransitionChain');
            threeEngine.gui.add({pauseTransitionChain: () => transitionChain.pause()}, 'pauseTransitionChain');

            const textMesh = new TextMesh('dirt', threeEngine.assets.font.data, {size: 0.1});
            textMesh.position.y = 0.3;
            textMesh.position.z = 0.01;
            threeEngine.scene.add(textMesh);

            animatedPlane = new THREE.Mesh(new THREE.PlaneGeometry(2, 1), new AnimatedMaterial(threeEngine.assets.spriteSheet.data, {loop: true, aspectRatio: 2, fps: 1, repeat: 2, repeatTexture: true}, {side: THREE.DoubleSide, transparent: true}));
            animatedPlane.position.y = -0.5;
            animatedPlane.material.play();
            threeEngine.scene.add(animatedPlane);

            const material = new TexturedMaterial(threeEngine.assets.spriteSheet.data, {repeat: 2, offset: new THREE.Vector2(0, 0)}, {side: THREE.DoubleSide, transparent: true});
            material.setAspectRatio(2);
            const plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 1), material);
            plane.position.y = 0.5;
            threeEngine.scene.add(plane);

        },
        update: threeEngine => {
        },
        updateLoaded: threeEngine => {
            if(box.isHovered) box.material.color.set(0xcccccc);
            else box.material.color.set(0xffffff);
            // if(transitionChain.paused) transitionChain.reset().play();
            transitionChain.update();
            animatedPlane.material.update();
            // console.log(box.rotation.x)
        },
        mouseDown: (event, threeEngine) => {
            // transitionChain.reset().play()
        }
    },
    setup: {
        enableTestLights: true,
        useAntialias: true,
        disableContextMenu: true,
        enableLoadingCircle: true,
        DEV_MODE: true,
        enableControls: true,
        cameraPosition: new THREE.Vector3(0, 0, 5),
        cameraType: 'orthographic',
        orthographicCameraMinWidth: 4,
        backgroundColor: 0x111111
    },
    assets: {
        texture: new Texture('./assets/img/texture.png'),
        spriteSheet: new SpriteSheet('./assets/img/spritesheet.png', new THREE.Vector2(3, 3)),
        json: new Json('./assets/json/json.json'),
        font: new Font('./assets/fonts/font.json'),
        // font: new SpriteSheet('./assets/img/texture.png'),
    }
});  
