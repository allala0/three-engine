/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';

import Asset from "./Asset.js";

class Json extends Asset{
    constructor(path, loadCallback=null, parameters={}){
        super(path, new THREE.FileLoader, data => {this.data = JSON.parse(data); if(loadCallback) loadCallback(data);}, parameters);
        
        this.isJson = true;
    }
}

export default Json;