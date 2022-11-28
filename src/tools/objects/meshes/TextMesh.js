/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import {
    Mesh,
    MeshBasicMaterial
} from 'three';
import {TextGeometry} from 'three/addons/geometries/TextGeometry.js';


class TextMesh extends Mesh{
    constructor(text, font, parameters={}){

        const size = parameters.size !== undefined ? parameters.size : 0.5;
        const height = parameters.height !== undefined ? parameters.height : 0;
        const material = parameters.material !== undefined ? parameters.material : new MeshBasicMaterial();

        super(new TextGeometry(text, {font: font, size: size, height: height}), material);
        
        this.isTextMesh = true;

        this.font = font;
        this.size = size;
        this.height = height;
        
        this._text = text;
        this.text = text;
        
        this._position = this.position.clone();
        this.centerGeometry();
    }

    update(){
        if(this.text !== this._text){
            this._text = this.text;
            this.geometry.dispose();
            this.geometry = new TextGeometry(this.text, {font: this.font, height: this.height, size: this.size});
            this.position.copy(this._position);
            this.centerGeometry();
        }
    }
}

export default TextMesh;
