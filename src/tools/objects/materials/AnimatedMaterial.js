/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {
    Vector2,
    Vector4,
    Clock,
    ShaderMaterial,

} from 'three';

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
uniform vec2 tileCount;
uniform vec2 tileOffset;
uniform vec4 colorMultiplier;
uniform vec4 colorAdd;

void main(){
    vec2 uv = vUv;
    bool hidden = false;

    uv *= repeat;

    if(centerTexture){
        uv.y -= (uv.x - vUv.x) / vUv.x / 2.;
        uv.x -= (aspectRatio * repeat - textureAspectRatio * tileCount.y / tileCount.x) / (aspectRatio) / 2.;
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

        vec2 pos = vec2(uv.x / tileCount.x * aspectRatio + tileOffset.x, uv.y / tileCount.y + tileOffset.y);
        pixel = texture2D(uTexture, pos) * colorMultiplier + colorAdd;
    } 

    gl_FragColor = pixel;
}
`;

class AnimatedMaterial extends ShaderMaterial{
    constructor(spriteSheet, parameters={}, materialParameters={}){
        super(materialParameters);

        this.isAnimatedMaterial = true;

        this.colorMultiplier = parameters.colorMultiplier !== undefined ? parameters.colorMultiplier : new Vector4(1, 1, 1, 1);
        this.colorAdd = parameters.colorAdd !== undefined ? parameters.colorAdd : new Vector4(0, 0, 0, 0);
        this.aspectRatio = parameters.aspectRatio !== undefined ? parameters.aspectRatio : 1;
        this.repeat = parameters.repeat !== undefined ? parameters.repeat : 1;
        this.offset = parameters.offset !== undefined ? parameters.offset : new Vector2();
        this.repeatTexture = parameters.repeatTexture !== undefined ? parameters.repeatTexture : false;
        this.centerTexture = parameters.centerTexture !== undefined ? parameters.centerTexture : true;

        this.reverse = parameters.reverse !== undefined ? parameters.reverse : false;
        this.loop = parameters.loop !== undefined ? parameters.loop : false;
        this.bounce = parameters.bounce !== undefined ? parameters.bounce : false;
        this.hideAfterPause = parameters.hideAfterPause !== undefined ? parameters.hideAfterPause : true;
        this.autoplay = parameters.autoplay !== undefined ? parameters.autoplay : false;
        this.fps = parameters.fps !== undefined ? parameters.fps : 30;
        this.numOfBlankTiles =  parameters.numOfBlankTiles !== undefined ? parameters.numOfBlankTiles : 0;
        this.playCount = parameters.playCount !== undefined ? parameters.playCount : 0;

        this.tileOffset = new Vector2();
        
        this.vertexShader = VS; 
        this.fragmentShader = FS;
        this.uniforms = {
            uTexture: {value: null},
            textureAspectRatio: {value: null},
            tileCount: {value: null},
            colorMultiplier: {value: this.colorMultiplier},
            colorAdd: {value: this.colorAdd},
            tileOffset: {value: this.tileOffset},
            offset: {value: this.offset},
            aspectRatio: {value: this.aspectRatio},
            repeat: {value: this.repeat},
            repeatTexture: {value: this.repeatTexture},
            centerTexture: {value: this.centerTexture},
        };

        this.spriteSheet = spriteSheet;
        this.parameters = parameters;

        this.hidden = false;
        this.x = 0;
        this.y = 0;
        this.clock = new Clock();
        this.lastFrameChange = this.clock.getElapsedTime();
        this.paused = true;
        this.startedReverse = this.reverse;

        if(this.autoplay) this.play();
        else this.hidden = true;
    }

    get frameIndex(){
        return this.y * this.spriteSheet.tileCount.x + this.x;
    }

    set frameIndex(index){
        this.x = index % this.spriteSheet.tileCount.x;
        this.y = Math.floor(index / this.spriteSheet.tileCount.x);
    }

    set spriteSheet(spriteSheet){
        this.uniforms.uTexture.value = spriteSheet;
        this.uniforms.tileCount.value = this.spriteSheet.tileCount;
        this.uniforms.textureAspectRatio.value = this.spriteSheet.source.data.width / this.spriteSheet.source.data.height;
    }

    get spriteSheet(){
        return this.uniforms.uTexture.value;
    }

    setAspectRatio(aspectRatio){
        this.aspectRatio = this.uniforms.aspectRatio.value = aspectRatio;
    }

    nextFrame(){
        if(this.frameIndex + 1 >= this.spriteSheet.tileCount.x * this.spriteSheet.tileCount.y - this.numOfBlankTiles){
            if(this.bounce) this.reverse = true;
            else{
                if(!this.loop && this.playCount <= 0) this.pause();
                else this.frameIndex = 0;
                if(this.startedReverse) this.playCount--;
            } 
        }
        else this.frameIndex += 1;
    }

    previousFrame(){
        if(this.frameIndex - 1 < 0){
            if(this.bounce) this.reverse = false;
            else if (this.loop || this.playCount > 0) this.frameIndex = this.spriteSheet.tileCount.x * this.spriteSheet.tileCount.y - this.numOfBlankTiles - 1;
            if(!this.loop && this.playCount <= 0) this.pause();
            if(!this.startedReverse) this.playCount--;
        }
        else this.frameIndex -= 1;
    }

    play(){
        if(!this.reverse) this.frameIndex = 0;
        else this.frameIndex = this.spriteSheet.tileCount.x * this.spriteSheet.tileCount.y - this.numOfBlankTiles - 1;
        this.paused = false;
        this.hidden = false;
        this.startedReverse = this.reverse;
    }

    pause(){
        this.paused = true;
    }

    update(){
        if(this.hideAfterPause && this.paused) this.hidden = true;
        
        this.uniforms.colorMultiplier.value = this.colorMultiplier;
        this.uniforms.colorAdd.value = this.colorAdd;

        this.uniforms.tileOffset.value.x = this.x / this.spriteSheet.tileCount.x;
        this.uniforms.tileOffset.value.y = 1 - (this.y + 1) / this.spriteSheet.tileCount.y;
        
        if(this.paused) return;
        const currTime = this.clock.getElapsedTime();
        if(currTime >= this.lastFrameChange + 1 / this.fps){
            this.lastFrameChange = currTime;
            if(this.reverse) this.previousFrame();
            else this.nextFrame();
        }
    }

    clone(){
        return new AnimatedMaterial(this.spriteSheet, this.spriteSheet.tileCount.clone(), {...this.parameters});
    }
}

export default AnimatedMaterial;
