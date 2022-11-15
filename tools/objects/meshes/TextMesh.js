/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js';


class TextMesh extends THREE.Mesh{
    constructor(text, font, parameters={}){

        const size = parameters.size !== undefined ? parameters.size : 0.5;
        const height = parameters.height !== undefined ? parameters.height : 0;
        const material = parameters.material !== undefined ? parameters.material : new THREE.MeshBasicMaterial();

        super(new TextGeometry(text, {font: font, size: size, height: height}), material);
        
        this.isTextMesh = true;

        this.font = font;
        this.size = size;
        this.height = height;
        
        this._text = text;
        this.text = text;
        
        this._position = this.position.clone();
        this.center(this.getWorldPosition(new THREE.Vector3));
    }

    update(){
        if(this.text !== this._text){
            this._text = this.text;
            this.geometry.dispose();
            this.geometry = new TextGeometry(this.text, {font: this.font, height: this.height, size: this.size});
            this.position.copy(this._position);
            this.center(this._position);
        }
    }
}

export default TextMesh;
