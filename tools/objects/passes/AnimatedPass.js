/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import TextureShader from '../shaders/TextureShader.js';

class AnimatedPass extends ShaderPass{
    constructor(animatedMaterial, cameraAspect=1){
        super(TextureShader(animatedMaterial.spriteSheet, cameraAspect));

        this.isAnimatedPass = true;

        this.animatedMaterial = animatedMaterial;
        
        this.uniforms.repeatX.value = this.animatedMaterial.tilesSize.x;
        this.uniforms.repeatY.value = this.animatedMaterial.tilesSize.y;
    } 

    update(cameraAspect=1){
        this.uniforms.uCameraAspect.value = cameraAspect;
        this.uniforms.x.value = this.animatedMaterial.x;
        this.uniforms.y.value = this.animatedMaterial.y;
        this.uniforms.hidden.value = this.animatedMaterial.hidden;
        this.animatedMaterial.update();
    }
}

export default AnimatedPass;
