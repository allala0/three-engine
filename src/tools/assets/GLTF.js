/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {GLTFLoader} from 'three/addons/loaders/GLTFLoader.js';

import Asset from './Asset.js';

class GLTF extends Asset{
    constructor(path, loadCallback=null, parameters={}){
        super(path, new GLTFLoader, loadCallback, parameters);
        
        this.isGLTF = true;
    }
}

export default GLTF;
