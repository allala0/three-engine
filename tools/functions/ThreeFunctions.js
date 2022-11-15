/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

import * as THREE from 'three';

Number.prototype.clone = function(){
    return this;
}

Number.prototype.moveTo = function(to, amount){
    const from = this;
    const relNumber = to - from;
    const newNumber = from + relNumber * amount;
    
    return newNumber;
}

THREE.Color.prototype.moveTo = function(to, amount){
    const r = this.r.moveTo(to.r, amount);
    const g = this.g.moveTo(to.g, amount);
    const b = this.b.moveTo(to.b, amount);

    return new THREE.Color(r, g, b);
}

THREE.Vector2.prototype.moveTo = function(to, amount){
    const from = this;
    const relVector = new THREE.Vector2(to.x - from.x, to.y - from.y);

    return new THREE.Vector2(from.x + relVector.x * amount, from.y + relVector.y * amount)
}

THREE.Vector3.prototype.moveTo = function(to, amount){
    const from = this;
    const relVector = new THREE.Vector3(to.x - from.x, to.y - from.y, to.z - from.z);

    return new THREE.Vector3(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount)
}

THREE.Vector4.prototype.moveTo = function(to, amount){
    const from = this;
    const relVector = new THREE.Vector4(to.x - from.x, to.y - from.y, to.z - from.z, to.w - from.w);

    return new THREE.Vector3(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount, from.w + relVector.w * amount)
}

THREE.Euler.prototype.moveTo = function(to, amount){
    const from = this;
    const relVector = new THREE.Vector3(to.x - from.x, to.y - from.y, to.z - from.z);

    return new THREE.Euler(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount, from.order)
}

THREE.Object3D.prototype.getSurface = function(){
    let surface = 0;

    this.traverse(object => {
        if(object.isMesh && object.geometry && object.geometry.isBufferGeometry){
            const geometry = object.geometry;
            const face = new THREE.Triangle(); 
            const index = geometry.getIndex();
            if(index){
                for (let i = 0; i < index.count; i += 3){
                    face.a.fromBufferAttribute(geometry.attributes.position, index.getX(i));
                    face.b.fromBufferAttribute(geometry.attributes.position, index.getX(i + 1));
                    face.c.fromBufferAttribute(geometry.attributes.position, index.getX(i + 2));
        
                    surface += face.getArea();
                }
            }
            else{
                for (let i = 0; i < geometry.attributes.position.count; i += 3){
                    face.a.fromBufferAttribute(geometry.attributes.position, i);
                    face.b.fromBufferAttribute(geometry.attributes.position, i + 1);
                    face.c.fromBufferAttribute(geometry.attributes.position, i + 2);
            
                    surface += face.getArea();
                }
            }
        }
    });

    return surface;
}

THREE.Object3D.prototype.getVolume = function(){
    let volume = 0;

    const signedVolumeOfTriangle = (p1, p2, p3) => p1.dot(p2.cross(p3)) / 6.0;

    this.traverse(object => {
        if(object.isMesh && object.geometry && object.geometry.isBufferGeometry){
            const geometry = object.geometry;
            let isIndexed = geometry.index !== null;
            let position = geometry.attributes.position;
            let p1 = new THREE.Vector3(),
            p2 = new THREE.Vector3(),
            p3 = new THREE.Vector3();
            if (!isIndexed){
                let faces = position.count / 3;
                for (let i = 0; i < faces; i++){
                    p1.fromBufferAttribute(position, i * 3 + 0);
                    p2.fromBufferAttribute(position, i * 3 + 1);
                    p3.fromBufferAttribute(position, i * 3 + 2);
                    volume += Math.abs(signedVolumeOfTriangle(p1, p2, p3));
                }
            }
            else {
            let index = geometry.index;
            let faces = index.count / 3;
                for (let i = 0; i < faces; i++){
                    p1.fromBufferAttribute(position, index.array[i * 3 + 0]);
                    p2.fromBufferAttribute(position, index.array[i * 3 + 1]);
                    p3.fromBufferAttribute(position, index.array[i * 3 + 2]);
                    volume += Math.abs(signedVolumeOfTriangle(p1, p2, p3));
                }
            }
        }
    });

    return volume;
}

THREE.Object3D.prototype.getSize = function(){
    const bbox = new THREE.Box3();
    bbox.setFromObject(this);

    return new THREE.Vector3(bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z);
}

THREE.Object3D.prototype.centerGeometry = function(centerPosition=new THREE.Vector3){
    this.updateMatrix();
    centerPosition = centerPosition.clone();
    const bbox = new THREE.Box3;
    bbox.setFromObject(this);
    const positionDelta = new THREE.Vector3;
    positionDelta.x -= (bbox.max.x + bbox.min.x) / 2;
    positionDelta.y -= (bbox.max.y + bbox.min.y) / 2;
    positionDelta.z -= (bbox.max.z + bbox.min.z) / 2;

    this.traverse(function(object){
        if(object.isMesh && object.geometry && object.geometry.attributes && object.geometry.attributes.position && object.geometry.attributes.position.array){
            const position = object.geometry.attributes.position.array;
            for(let i=0; i<position.length; i+=3){
                position[i] += positionDelta.x;
                position[i + 1] += positionDelta.y;
                position[i + 2] += positionDelta.z;
            }
            object.geometry.computeBoundingBox();
            object.geometry.computeBoundingSphere();
        }
    });

    return this;
}

THREE.Object3D.prototype.center = function(centerPosition=new THREE.Vector3){
    const parent = this.parent;
    this.removeFromParent();
    this.updateMatrix();
    centerPosition = centerPosition.clone();
    this.position.copy(new THREE.Vector3);
    const bbox = new THREE.Box3;
    bbox.setFromObject(this);
    this.position.x += -(bbox.max.x + bbox.min.x) / 2 + centerPosition.x;
    this.position.y += -(bbox.max.y + bbox.min.y) / 2 + centerPosition.y;
    this.position.z += -(bbox.max.z + bbox.min.z) / 2 + centerPosition.z;

    if(parent !== null) parent.add(this);

    this.updateMatrix();

    this.traverse(object => {
        if(object.geometry){
            object.geometry.computeBoundingBox();
            object.geometry.computeBoundingSphere();
        }
    });

    return this;
}

THREE.Object3D.prototype.normalize = function(axis='y'){
    this.setSize(1, axis);

    return this;
}

THREE.Object3D.prototype.setSize = function(size, axis='y'){
    this.updateMatrix();
    const bbox = new THREE.Box3();
    bbox.setFromObject(this);
    const sizeOld = bbox.max[axis] - bbox.min[axis];
    const newScale = size / sizeOld * this.scale[axis];
    this.scale.copy(new THREE.Vector3(newScale, newScale, newScale));
    
    this.updateMatrix();
    this.geometry.computeBoundingBox();
    this.geometry.computeBoundingSphere();
    
    return this;
}

THREE.Object3D.prototype.hoverCheck = function(mouse, camera){
    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mouse, camera);
    const intersection = raycaster.intersectObject(this);
    if(intersection.length > 0) this.hoverDistance = intersection[0].distance;
    else this.hoverDistance = Infinity;
    
    return intersection.length > 0;
}

THREE.Object3D.prototype.dispose = function(disposeTextures=false){
    this.disposed = true;
    this.removeFromParent();
    this.traverse(object => {
        if(object.isObject3D){
            if(object.geometry) object.geometry.dispose();
            if(object.material){ if(disposeTextures && object.material.map) object.material.map.dispose(); object.material.dispose();}
        }
    });
}

THREE.Object3D.prototype.setupClickable = function(clickableObject=undefined){
    this.clickableObject = clickableObject;

    this.isClickDisabled = false;
    this.isClickable = true;

    this.isHovered = false;

    this.isLeftClicked = false;
    this.isWheelClicked = false;
    this.isRightClicked = false;
    this.__defineGetter__('isClicked', function(){return this.isRightClicked || this.isLeftClicked || this.isWheelClicked});
    
    this.isPressed = false;
    this.__defineGetter__('isLeftPressed', function(){return this.isPressed && this.isLeftClicked});
    this.__defineGetter__('isRightPressed', function(){return this.isPressed && this.isRightClicked});
    this.__defineGetter__('isWheelPressed', function(){return this.isPressed && this.isWheelClicked});

    this.isDragged = false;
    this.__defineGetter__('isLeftDragged', function(){return this.isDragged && this.isLeftClicked});
    this.__defineGetter__('isRightDragged', function(){return this.isDragged && this.isRightClicked});
    this.__defineGetter__('isWheelDragged', function(){return this.isDragged && this.isWheelClicked});

    this.hoverDistance = Infinity;
    
    this.isLeftClickCallbacked = true;
    this.isRightClickCallbacked = true;
    this.isWheelClickCallbacked = true;
}
