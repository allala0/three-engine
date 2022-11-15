/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';

class EquilateralTriangle extends THREE.BufferGeometry{
    constructor(sideLength=1){
        super();

        this.isEquilateralTriangle = true;

        this.sideLength = sideLength;

        const vertecies = new Float32Array([
            this.sideLength / 2, -this.sideLength * Math.sqrt(3) / 4, 0,
            -this.sideLength / 2, -this.sideLength * Math.sqrt(3) / 4, 0,
            0,  this.sideLength * Math.sqrt(3) / 4, 0,
        ]);

        this.setAttribute('position', new THREE.BufferAttribute(vertecies, 3));
    }
}

export default EquilateralTriangle;
