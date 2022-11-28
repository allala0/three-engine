/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {FontLoader} from 'three/addons/loaders/FontLoader.js';

import Asset from './Asset.js';

class Font extends Asset{
    constructor(path, loadCallback=null, parameters={}){
        super(path, new FontLoader, loadCallback, parameters);
        
        this.isFont = true;
    }
}

export default Font;