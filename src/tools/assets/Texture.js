/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {TextureLoader} from 'three';

import Asset from './Asset.js';

class Texture extends Asset{
    constructor(path, loadCallback=null, parameters={}){
        super(path, new TextureLoader, loadCallback, parameters);

        this.isTexture = true;
    }
}

export default Texture;
