/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';

import Texture from './Texture.js';

class SpriteSheet extends Texture{
    constructor(path, tileCount=new THREE.Vector2(1, 1), loadCallback=null, parameters={}){
        super(path, data => {
            data.tileCount = tileCount; if(loadCallback) loadCallback(data);
        }, parameters);
        
        this.isSpriteSheet = true;

        this.tileCount = tileCount;
    }
}

export default SpriteSheet;
