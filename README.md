<h1 align="center"><b>three-engine</b></h1>
<p align="center">
    <img src="https://global.discourse-cdn.com/standard17/uploads/threejs/optimized/2X/e/e4f86d2200d2d35c30f7b1494e96b9595ebc2751_2_1016x1024.png" style="width: 200px;">
</p>
<br>

<h2>What is <b>three-engine</b>?</h2>
three-engine is framework/engine for three.js.
<br>
<br>

## How to install
    npm install three-engine

## How to use
    import * as THREE from 'three-engine';
    import ThreeEngine from 'three-engine';
    new ThreeEngine({
        callbacks: {
            init: threeEngine => {
                const box = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.5), new THREE.MeshStandardMaterial);
                box.setupClickable();
                threeEngine.scene.add(box);
                box.onClick = function(){console.log('Clicked')};
                box.onHover = function(){console.log('Hovered')};
            }
        },
        setup: {
            enableControls: true,
            enableTestLights: true,
            enableAntialias: true,
            DEV_MODE: true
        }
    });

## Example

You can find example in <b>/examples/example.js</b>.
To run example:

    git clone https://github.com/allala0/three-engine.git
    cd three-engine
    npm install
    npm run example

## TODO
- [ ] **Export all tools in ThreeEngine**
- [ ] **Axes helper with signed axes**
- [ ] **Screenshots**
- [ ] **Thick lines**
- [ ] **Built in shaders**
    - [ ] **Outline shader**
- [ ] **Particle system**
- [ ] **Geometry sprites**
- [ ] **Physics engine**
- [ ] **3D models**
- [ ] **3D models animations**
- [ ] **PerspectiveCamera min width**
- [ ] **Builtin custom geometries**
- [ ] **Geometry editor**
- [ ] **Postprocessing pipeline manager**
- [ ] **3D Editor with UI (adding, moving and rotating, scaling objects, lights, cameras etc. with mouse)**
- [ ] **Material editor**
- [ ] **Zoom to cursor in controls**
- [ ] **First person camera**
- [ ] **Third person camera**
- [ ] **Keyboard and mouse controls**
- [ ] **Multiplayer engine (Colyseus)**
- [ ] **AI**
- [ ] **Helpers for test lights**
- [ ] **Custom loading screens**
- [ ] **Shadow config in gui**
- [ ] **Keyboard input**
- [ ] **UI system**
- [ ] **Sound system**
- [ ] **Settings template**
- [ ] **Mobile touch controls (pinch)**

<br>
Creator: <b>Artur Brytkowski</b> 
<br>

 - <a target="_blank" href="https://www.fiverr.com/arturbrytkowski">Fiverr</a>
 - <a target="_blank" href="https://github.com/allala0">GitHub</a>
 