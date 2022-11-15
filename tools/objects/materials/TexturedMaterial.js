/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';

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
uniform float repeat;
uniform vec2 offset;
uniform bool repeatTexture;
uniform bool centerTexture;
uniform float aspectRatio;
uniform float textureAspectRatio;
uniform vec4 colorMultiplier;
uniform vec4 colorAdd;

void main(){
    vec2 uv = vUv;
    bool hidden = false;

    uv *= repeat;

    if(centerTexture){
        uv.y -= (uv.x - vUv.x) / vUv.x / 2.;
        uv.x -= (aspectRatio * repeat - textureAspectRatio) / (aspectRatio) / 2.;
    }

    uv.x -= offset.x / aspectRatio;
    uv.y -= offset.y;

    if(!repeatTexture){
        if(uv.x * aspectRatio > 1. || uv.x * aspectRatio < 0. || uv.y > 1. || uv.y < 0.) hidden = true;
    }
    
    vec4 pixel;

    if(hidden) pixel = vec4(0., 0., 0., 0.);
    else{
        uv.x = mod(uv.x * aspectRatio, 1.) / aspectRatio; 
        uv.y = mod(uv.y, 1.);

        vec2 pos = vec2(uv.x * aspectRatio, uv.y);
        pixel = texture2D(uTexture, pos) * colorMultiplier + colorAdd;
    } 

    gl_FragColor = pixel;
}
`;

class TexturedMaterial extends THREE.ShaderMaterial{
    constructor(texture, parameters={}, materialParameters={}){
        super(materialParameters);

        this.isTexturedMaterial = true;

        this.colorMultiplier = parameters.colorMultiplier !== undefined ? parameters.colorMultiplier : new THREE.Vector4(1, 1, 1, 1);
        this.colorAdd = parameters.colorAdd !== undefined ? parameters.colorAdd : new THREE.Vector4(0, 0, 0, 0);
        this.repeat = parameters.repeat !== undefined ? parameters.repeat : 1;
        this.offset = parameters.offset !== undefined ? parameters.offset : new THREE.Vector2();
        this.aspectRatio = parameters.aspectRatio !== undefined ? parameters.aspectRatio : 1;
        this.repeatTexture = parameters.repeatTexture !== undefined ? parameters.repeatTexture : false;
        this.centerTexture = parameters.centerTexture !== undefined ? parameters.centerTexture : true;

        this.vertexShader = VS; 
        this.fragmentShader = FS;
        this.uniforms = {
            uTexture: {value: null},
            textureAspectRatio: {value: null},
            colorMultiplier: {value: this.colorMultiplier},
            colorAdd: {value: this.colorAdd},
            repeat: {value: this.repeat},
            offset: {value: this.offset},
            aspectRatio: {value: this.aspectRatio},
            repeatTexture: {value: this.repeatTexture},
            centerTexture: {value: this.centerTexture}
        };

        this.texture = texture;
        this.parameters = parameters;
    }

    set texture(texture){
        this.uniforms.uTexture.value = texture;
        this.uniforms.textureAspectRatio.value = this.texture.source.data.width / this.texture.source.data.height;
    }

    get texture(){
        return this.uniforms.uTexture.value;
    }

    setAspectRatio(aspectRatio){
        this.aspectRatio = this.uniforms.aspectRatio.value = aspectRatio;
    }

    clone(){
        return new TexturedMaterial(this.texture, {...this.parameters});
    }
}

export default TexturedMaterial;
