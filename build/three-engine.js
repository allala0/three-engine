/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 405:
/***/ (() => {

/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

window.cursorPointer = function () {
  return document.body.style.cursor = 'pointer';
};
window.cursorArrow = function () {
  return document.body.style.cursor = 'default';
};
window.mobileCheck = function () {
  var check = false;
  (function (a) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};
window.isIOS = typeof navigator.standalone === 'boolean';

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ three_engine)
});

;// CONCATENATED MODULE: external "THREE"
const external_THREE_namespaceObject = THREE;
;// CONCATENATED MODULE: ./src/tools/functions/ThreeFunctions.js
/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/


Number.prototype.clone = function () {
  return this;
};
Number.prototype.moveTo = function (to, amount) {
  var from = this;
  var relNumber = to - from;
  var newNumber = from + relNumber * amount;
  return newNumber;
};
external_THREE_namespaceObject.Color.prototype.moveTo = function (to, amount) {
  var r = this.r.moveTo(to.r, amount);
  var g = this.g.moveTo(to.g, amount);
  var b = this.b.moveTo(to.b, amount);
  return new external_THREE_namespaceObject.Color(r, g, b);
};
external_THREE_namespaceObject.Vector2.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_THREE_namespaceObject.Vector2(to.x - from.x, to.y - from.y);
  return new external_THREE_namespaceObject.Vector2(from.x + relVector.x * amount, from.y + relVector.y * amount);
};
external_THREE_namespaceObject.Vector3.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_THREE_namespaceObject.Vector3(to.x - from.x, to.y - from.y, to.z - from.z);
  return new external_THREE_namespaceObject.Vector3(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount);
};
external_THREE_namespaceObject.Vector4.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_THREE_namespaceObject.Vector4(to.x - from.x, to.y - from.y, to.z - from.z, to.w - from.w);
  return new external_THREE_namespaceObject.Vector3(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount, from.w + relVector.w * amount);
};
external_THREE_namespaceObject.Euler.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_THREE_namespaceObject.Vector3(to.x - from.x, to.y - from.y, to.z - from.z);
  return new external_THREE_namespaceObject.Euler(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount, from.order);
};
external_THREE_namespaceObject.Object3D.prototype.getSurface = function () {
  var surface = 0;
  this.traverse(function (object) {
    if (object.isMesh && object.geometry && object.geometry.isBufferGeometry) {
      var geometry = object.geometry;
      var face = new external_THREE_namespaceObject.Triangle();
      var index = geometry.getIndex();
      if (index) {
        for (var i = 0; i < index.count; i += 3) {
          face.a.fromBufferAttribute(geometry.attributes.position, index.getX(i));
          face.b.fromBufferAttribute(geometry.attributes.position, index.getX(i + 1));
          face.c.fromBufferAttribute(geometry.attributes.position, index.getX(i + 2));
          surface += face.getArea();
        }
      } else {
        for (var _i = 0; _i < geometry.attributes.position.count; _i += 3) {
          face.a.fromBufferAttribute(geometry.attributes.position, _i);
          face.b.fromBufferAttribute(geometry.attributes.position, _i + 1);
          face.c.fromBufferAttribute(geometry.attributes.position, _i + 2);
          surface += face.getArea();
        }
      }
    }
  });
  return surface;
};
external_THREE_namespaceObject.Object3D.prototype.getVolume = function () {
  var volume = 0;
  var signedVolumeOfTriangle = function signedVolumeOfTriangle(p1, p2, p3) {
    return p1.dot(p2.cross(p3)) / 6.0;
  };
  this.traverse(function (object) {
    if (object.isMesh && object.geometry && object.geometry.isBufferGeometry) {
      var geometry = object.geometry;
      var isIndexed = geometry.index !== null;
      var position = geometry.attributes.position;
      var p1 = new external_THREE_namespaceObject.Vector3(),
        p2 = new external_THREE_namespaceObject.Vector3(),
        p3 = new external_THREE_namespaceObject.Vector3();
      if (!isIndexed) {
        var faces = position.count / 3;
        for (var i = 0; i < faces; i++) {
          p1.fromBufferAttribute(position, i * 3 + 0);
          p2.fromBufferAttribute(position, i * 3 + 1);
          p3.fromBufferAttribute(position, i * 3 + 2);
          volume += Math.abs(signedVolumeOfTriangle(p1, p2, p3));
        }
      } else {
        var index = geometry.index;
        var _faces = index.count / 3;
        for (var _i2 = 0; _i2 < _faces; _i2++) {
          p1.fromBufferAttribute(position, index.array[_i2 * 3 + 0]);
          p2.fromBufferAttribute(position, index.array[_i2 * 3 + 1]);
          p3.fromBufferAttribute(position, index.array[_i2 * 3 + 2]);
          volume += Math.abs(signedVolumeOfTriangle(p1, p2, p3));
        }
      }
    }
  });
  return volume;
};
external_THREE_namespaceObject.Object3D.prototype.getSize = function () {
  var bbox = new external_THREE_namespaceObject.Box3();
  bbox.setFromObject(this);
  return new external_THREE_namespaceObject.Vector3(bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z);
};
external_THREE_namespaceObject.Object3D.prototype.centerGeometry = function () {
  var centerPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new external_THREE_namespaceObject.Vector3();
  // not working properly
  this.updateMatrix();
  centerPosition = centerPosition.clone();
  var bbox = new external_THREE_namespaceObject.Box3();
  bbox.setFromObject(this);
  var positionDelta = new external_THREE_namespaceObject.Vector3();
  positionDelta.x -= (bbox.max.x + bbox.min.x) / 2;
  positionDelta.y -= (bbox.max.y + bbox.min.y) / 2;
  positionDelta.z -= (bbox.max.z + bbox.min.z) / 2;
  this.traverse(function (object) {
    if (object.isMesh && object.geometry && object.geometry.attributes && object.geometry.attributes.position && object.geometry.attributes.position.array) {
      var position = object.geometry.attributes.position.array;
      for (var i = 0; i < position.length; i += 3) {
        position[i] += positionDelta.x;
        position[i + 1] += positionDelta.y;
        position[i + 2] += positionDelta.z;
      }
      object.geometry.computeBoundingBox();
      object.geometry.computeBoundingSphere();
      object.updateMatrix();
    }
  });
  this.updateMatrix();
  return this;
};
external_THREE_namespaceObject.Object3D.prototype.center = function () {
  var centerPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new external_THREE_namespaceObject.Vector3();
  var parent = this.parent;
  this.removeFromParent();
  this.updateMatrix();
  centerPosition = centerPosition.clone();
  this.position.copy(new external_THREE_namespaceObject.Vector3());
  var bbox = new external_THREE_namespaceObject.Box3();
  bbox.setFromObject(this);
  this.position.x += -(bbox.max.x + bbox.min.x) / 2 + centerPosition.x;
  this.position.y += -(bbox.max.y + bbox.min.y) / 2 + centerPosition.y;
  this.position.z += -(bbox.max.z + bbox.min.z) / 2 + centerPosition.z;
  if (parent !== null) parent.add(this);
  this.updateMatrix();
  this.traverse(function (object) {
    if (object.geometry) {
      object.geometry.computeBoundingBox();
      object.geometry.computeBoundingSphere();
    }
  });
  return this;
};
external_THREE_namespaceObject.Mesh.prototype.centerGeometry = function () {
  var centerPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new external_THREE_namespaceObject.Vector3();
  this.updateMatrix();
  centerPosition = centerPosition.clone();
  var bbox = new external_THREE_namespaceObject.Box3();
  bbox.setFromObject(this);
  var positionDelta = new external_THREE_namespaceObject.Vector3();
  positionDelta.x -= (bbox.max.x + bbox.min.x) / 2 + centerPosition.x;
  positionDelta.y -= (bbox.max.y + bbox.min.y) / 2 + centerPosition.y;
  positionDelta.z -= (bbox.max.z + bbox.min.z) / 2 + centerPosition.z;
  var position = this.geometry.attributes.position.array;
  for (var i = 0; i < position.length; i += 3) {
    position[i] += positionDelta.x;
    position[i + 1] += positionDelta.y;
    position[i + 2] += positionDelta.z;
  }
  this.updateMatrix();
  return this;
};
external_THREE_namespaceObject.Object3D.prototype.normalize = function () {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
  this.setSize(1, axis);
  return this;
};
external_THREE_namespaceObject.Object3D.prototype.setSize = function (size) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
  this.updateMatrix();
  var bbox = new external_THREE_namespaceObject.Box3();
  bbox.setFromObject(this);
  var sizeOld = bbox.max[axis] - bbox.min[axis];
  var newScale = size / sizeOld * this.scale[axis];
  this.scale.copy(new external_THREE_namespaceObject.Vector3(newScale, newScale, newScale));
  this.updateMatrix();
  this.traverse(function (object) {
    if (object.geometry) {
      object.geometry.computeBoundingBox();
      object.geometry.computeBoundingSphere();
    }
  });
  return this;
};
external_THREE_namespaceObject.Object3D.prototype.hoverCheck = function (mouse, camera) {
  var raycaster = new external_THREE_namespaceObject.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  var intersection = raycaster.intersectObject(this);
  if (intersection.length > 0) this.hoverDistance = intersection[0].distance;else this.hoverDistance = Infinity;
  return intersection.length > 0;
};
external_THREE_namespaceObject.Object3D.prototype.dispose = function () {
  var disposeTextures = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  this.disposed = true;
  this.removeFromParent();
  this.traverse(function (object) {
    if (object.isObject3D) {
      if (object.geometry) object.geometry.dispose();
      if (object.material) {
        if (disposeTextures && object.material.map) object.material.map.dispose();
        object.material.dispose();
      }
    }
  });
};
external_THREE_namespaceObject.Object3D.prototype.setupClickable = function () {
  var clickableObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
  this.clickableObject = clickableObject;
  this.isClickDisabled = false;
  this.isClickable = true;
  this.isHovered = false;
  this.isLeftClicked = false;
  this.isWheelClicked = false;
  this.isRightClicked = false;
  this.__defineGetter__('isClicked', function () {
    return this.isRightClicked || this.isLeftClicked || this.isWheelClicked;
  });
  this.isPressed = false;
  this.__defineGetter__('isLeftPressed', function () {
    return this.isPressed && this.isLeftClicked;
  });
  this.__defineGetter__('isRightPressed', function () {
    return this.isPressed && this.isRightClicked;
  });
  this.__defineGetter__('isWheelPressed', function () {
    return this.isPressed && this.isWheelClicked;
  });
  this.isDragged = false;
  this.__defineGetter__('isLeftDragged', function () {
    return this.isDragged && this.isLeftClicked;
  });
  this.__defineGetter__('isRightDragged', function () {
    return this.isDragged && this.isRightClicked;
  });
  this.__defineGetter__('isWheelDragged', function () {
    return this.isDragged && this.isWheelClicked;
  });
  this.hoverDistance = Infinity;
  this._isLeftClickNeedCallback = false;
  this._isRightClickNeedCallback = false;
  this._isWheelClickNeedCallback = false;
  this.__defineGetter__('isLeftClickNeedCallback', function () {
    var val = this._isLeftClickNeedCallback;
    this._isLeftClickNeedCallback = false;
    return val;
  });
  this.__defineGetter__('isRightClickNeedCallback', function () {
    var val = this._isRightClickNeedCallback;
    this._isRightClickNeedCallback = false;
    return val;
  });
  this.__defineGetter__('isWheelClickNeedCallback', function () {
    var val = this._isWheelClickNeedCallback;
    this._isWheelClickNeedCallback = false;
    return val;
  });
  this.__defineSetter__('isLeftClickNeedCallback', function (val) {
    this._isLeftClickNeedCallback = val;
  });
  this.__defineSetter__('isRightClickNeedCallback', function (val) {
    this._isRightClickNeedCallback = val;
  });
  this.__defineSetter__('isWheelClickNeedCallback', function (val) {
    this._isWheelClickNeedCallback = val;
  });
  this.onClick = function () {};
  this.onRightClick = function () {};
  this.onWheelClick = function () {};
  this.onHover = function () {};
  this.onHoverUpdate = function () {};
  this.onHoverEnd = function () {};
};
// EXTERNAL MODULE: ./src/tools/functions/WindowFunctions.js
var WindowFunctions = __webpack_require__(405);
;// CONCATENATED MODULE: ./src/assets/styles/stylesheet.js
var stylesheet = /* css */"\n:root{ \n  --DPR: 1;\n}\n\n.loadingCircle{\n  --size: calc(min(20vh, 20vw) / var(--DPR));\n  --border-width: calc(min(2vh, 2vw) / var(--DPR));\n\n  border: 10px solid #777777;\n  border-top: 10px solid #fff;\n  border-width: var(--border-width);\n  border-radius: 50%;\n  width: var(--size);\n  height: var(--size);\n  /* padding-top: var(--size); */\n  animation: loadingSpin 1s linear infinite;\n  position: absolute;\n  left: calc(50% - var(--size) / 2 - var(--border-width));\n  top: calc(50% - var(--size) / 2 - var(--border-width));\n  /* box-sizing: border-box; */\n  z-index: 50001;\n}\n\n.loadingBar{\n  width: 60vw;\n  height: 4vw;\n  left: calc(50vw - 60vw / 2);\n  top: calc(50vh - 4vw / 2);\n  position: absolute;\n  border: 3px solid white;\n  border-width: calc(3px / var(--DPR));\n  box-sizing: border-box;\n}\n\n.loadingBarProgress{\n  background-color: white;\n  height: 100%;\n}\n\n.loadingScreen{\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  position: absolute;\n  background-color: #000;\n  z-index: 50000;\n}\n\n.hidden{\n  display: none;\n}\n\n@keyframes loadingSpin{\n  0%{ transform: rotate(0deg); }\n  100%{ transform: rotate(360deg); }\n}\n\n*:focus{\n  outline: none;\n}\n  \n::-moz-selection{background: rgba(0,0,0,0);}\n::selection{background: rgba(0,0,0,0);}\n::-webkit-selection{background: rgba(0,0,0,0);}\n:not(input){\n  -webkit-tap-highlight-color:  rgba(0,0,0,0); \n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n  \n::-webkit-scrollbar{\n  width: calc(10px / var(--DPR));\n  background-color: transparent;\n}\n::-webkit-scrollbar-track {\n  background-color: white;\n\n}\n::-webkit-scrollbar-thumb{\n  background-color: #aaa;\n  border-radius: calc(5px / var(--DPR));\n}\n::-webkit-scrollbar-thumb:hover{\n  background-color: #ccc;\n}\n  \ninput[type=number]::-webkit-inner-spin-button,\ninput[type=number]::-webkit-outer-spin-button{\n  -webkit-appearance: none; \n  margin: 0; \n  width: 0;\n  height: 0;\n  opacity: 0\n}\n  \ninput[type=number]{ \n  appearance: textfield;\n  margin: 0; \n}\n\ninput[type=\"number\"]{\n  appearance: none;\n}\n\ninput[type=\"number\"]:focus, \ninput[type=\"number\"]:hover{\n  appearance: auto;\n}\n\ninput::-webkit-outer-spin-button, input::-webkit-inner-spin-button{\n  -webkit-appearance: none !important;\n}\n\ninput[type=\"number\"]{\n  -moz-appearance: textfield;\n}\n";
/* harmony default export */ const styles_stylesheet = (stylesheet);
;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/shaders/CopyShader.js
/**
 * Full-screen textured quad shader
 */

const CopyShader = {

	uniforms: {

		'tDiffuse': { value: null },
		'opacity': { value: 1.0 }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`

};



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/postprocessing/Pass.js


class Pass {

	constructor() {

		// if set to true, the pass is processed by the composer
		this.enabled = true;

		// if set to true, the pass indicates to swap read and write buffer after rendering
		this.needsSwap = true;

		// if set to true, the pass clears its buffer before rendering
		this.clear = false;

		// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
		this.renderToScreen = false;

	}

	setSize( /* width, height */ ) {}

	render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

		console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

	}

	dispose() {}

}

// Helper for passes that need to fill the viewport with a single quad.

const _camera = new external_THREE_namespaceObject.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

// https://github.com/mrdoob/three.js/pull/21358

const _geometry = new external_THREE_namespaceObject.BufferGeometry();
_geometry.setAttribute( 'position', new external_THREE_namespaceObject.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
_geometry.setAttribute( 'uv', new external_THREE_namespaceObject.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

class FullScreenQuad {

	constructor( material ) {

		this._mesh = new external_THREE_namespaceObject.Mesh( _geometry, material );

	}

	dispose() {

		this._mesh.geometry.dispose();

	}

	render( renderer ) {

		renderer.render( this._mesh, _camera );

	}

	get material() {

		return this._mesh.material;

	}

	set material( value ) {

		this._mesh.material = value;

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/postprocessing/ShaderPass.js



class ShaderPass extends Pass {

	constructor( shader, textureID ) {

		super();

		this.textureID = ( textureID !== undefined ) ? textureID : 'tDiffuse';

		if ( shader instanceof external_THREE_namespaceObject.ShaderMaterial ) {

			this.uniforms = shader.uniforms;

			this.material = shader;

		} else if ( shader ) {

			this.uniforms = external_THREE_namespaceObject.UniformsUtils.clone( shader.uniforms );

			this.material = new external_THREE_namespaceObject.ShaderMaterial( {

				defines: Object.assign( {}, shader.defines ),
				uniforms: this.uniforms,
				vertexShader: shader.vertexShader,
				fragmentShader: shader.fragmentShader

			} );

		}

		this.fsQuad = new FullScreenQuad( this.material );

	}

	render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

		if ( this.uniforms[ this.textureID ] ) {

			this.uniforms[ this.textureID ].value = readBuffer.texture;

		}

		this.fsQuad.material = this.material;

		if ( this.renderToScreen ) {

			renderer.setRenderTarget( null );
			this.fsQuad.render( renderer );

		} else {

			renderer.setRenderTarget( writeBuffer );
			// TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
			if ( this.clear ) renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );
			this.fsQuad.render( renderer );

		}

	}

	dispose() {

		this.material.dispose();

		this.fsQuad.dispose();

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/postprocessing/MaskPass.js


class MaskPass extends Pass {

	constructor( scene, camera ) {

		super();

		this.scene = scene;
		this.camera = camera;

		this.clear = true;
		this.needsSwap = false;

		this.inverse = false;

	}

	render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

		const context = renderer.getContext();
		const state = renderer.state;

		// don't update color or depth

		state.buffers.color.setMask( false );
		state.buffers.depth.setMask( false );

		// lock buffers

		state.buffers.color.setLocked( true );
		state.buffers.depth.setLocked( true );

		// set up stencil

		let writeValue, clearValue;

		if ( this.inverse ) {

			writeValue = 0;
			clearValue = 1;

		} else {

			writeValue = 1;
			clearValue = 0;

		}

		state.buffers.stencil.setTest( true );
		state.buffers.stencil.setOp( context.REPLACE, context.REPLACE, context.REPLACE );
		state.buffers.stencil.setFunc( context.ALWAYS, writeValue, 0xffffffff );
		state.buffers.stencil.setClear( clearValue );
		state.buffers.stencil.setLocked( true );

		// draw into the stencil buffer

		renderer.setRenderTarget( readBuffer );
		if ( this.clear ) renderer.clear();
		renderer.render( this.scene, this.camera );

		renderer.setRenderTarget( writeBuffer );
		if ( this.clear ) renderer.clear();
		renderer.render( this.scene, this.camera );

		// unlock color and depth buffer for subsequent rendering

		state.buffers.color.setLocked( false );
		state.buffers.depth.setLocked( false );

		// only render where stencil is set to 1

		state.buffers.stencil.setLocked( false );
		state.buffers.stencil.setFunc( context.EQUAL, 1, 0xffffffff ); // draw if == 1
		state.buffers.stencil.setOp( context.KEEP, context.KEEP, context.KEEP );
		state.buffers.stencil.setLocked( true );

	}

}

class ClearMaskPass extends Pass {

	constructor() {

		super();

		this.needsSwap = false;

	}

	render( renderer /*, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

		renderer.state.buffers.stencil.setLocked( false );
		renderer.state.buffers.stencil.setTest( false );

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/postprocessing/EffectComposer.js






class EffectComposer {

	constructor( renderer, renderTarget ) {

		this.renderer = renderer;

		if ( renderTarget === undefined ) {

			const size = renderer.getSize( new external_THREE_namespaceObject.Vector2() );
			this._pixelRatio = renderer.getPixelRatio();
			this._width = size.width;
			this._height = size.height;

			renderTarget = new external_THREE_namespaceObject.WebGLRenderTarget( this._width * this._pixelRatio, this._height * this._pixelRatio );
			renderTarget.texture.name = 'EffectComposer.rt1';

		} else {

			this._pixelRatio = 1;
			this._width = renderTarget.width;
			this._height = renderTarget.height;

		}

		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();
		this.renderTarget2.texture.name = 'EffectComposer.rt2';

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

		this.renderToScreen = true;

		this.passes = [];

		// dependencies

		if ( CopyShader === undefined ) {

			console.error( 'THREE.EffectComposer relies on CopyShader' );

		}

		if ( ShaderPass === undefined ) {

			console.error( 'THREE.EffectComposer relies on ShaderPass' );

		}

		this.copyPass = new ShaderPass( CopyShader );

		this.clock = new external_THREE_namespaceObject.Clock();

	}

	swapBuffers() {

		const tmp = this.readBuffer;
		this.readBuffer = this.writeBuffer;
		this.writeBuffer = tmp;

	}

	addPass( pass ) {

		this.passes.push( pass );
		pass.setSize( this._width * this._pixelRatio, this._height * this._pixelRatio );

	}

	insertPass( pass, index ) {

		this.passes.splice( index, 0, pass );
		pass.setSize( this._width * this._pixelRatio, this._height * this._pixelRatio );

	}

	removePass( pass ) {

		const index = this.passes.indexOf( pass );

		if ( index !== - 1 ) {

			this.passes.splice( index, 1 );

		}

	}

	isLastEnabledPass( passIndex ) {

		for ( let i = passIndex + 1; i < this.passes.length; i ++ ) {

			if ( this.passes[ i ].enabled ) {

				return false;

			}

		}

		return true;

	}

	render( deltaTime ) {

		// deltaTime value is in seconds

		if ( deltaTime === undefined ) {

			deltaTime = this.clock.getDelta();

		}

		const currentRenderTarget = this.renderer.getRenderTarget();

		let maskActive = false;

		for ( let i = 0, il = this.passes.length; i < il; i ++ ) {

			const pass = this.passes[ i ];

			if ( pass.enabled === false ) continue;

			pass.renderToScreen = ( this.renderToScreen && this.isLastEnabledPass( i ) );
			pass.render( this.renderer, this.writeBuffer, this.readBuffer, deltaTime, maskActive );

			if ( pass.needsSwap ) {

				if ( maskActive ) {

					const context = this.renderer.getContext();
					const stencil = this.renderer.state.buffers.stencil;

					//context.stencilFunc( context.NOTEQUAL, 1, 0xffffffff );
					stencil.setFunc( context.NOTEQUAL, 1, 0xffffffff );

					this.copyPass.render( this.renderer, this.writeBuffer, this.readBuffer, deltaTime );

					//context.stencilFunc( context.EQUAL, 1, 0xffffffff );
					stencil.setFunc( context.EQUAL, 1, 0xffffffff );

				}

				this.swapBuffers();

			}

			if ( MaskPass !== undefined ) {

				if ( pass instanceof MaskPass ) {

					maskActive = true;

				} else if ( pass instanceof ClearMaskPass ) {

					maskActive = false;

				}

			}

		}

		this.renderer.setRenderTarget( currentRenderTarget );

	}

	reset( renderTarget ) {

		if ( renderTarget === undefined ) {

			const size = this.renderer.getSize( new external_THREE_namespaceObject.Vector2() );
			this._pixelRatio = this.renderer.getPixelRatio();
			this._width = size.width;
			this._height = size.height;

			renderTarget = this.renderTarget1.clone();
			renderTarget.setSize( this._width * this._pixelRatio, this._height * this._pixelRatio );

		}

		this.renderTarget1.dispose();
		this.renderTarget2.dispose();
		this.renderTarget1 = renderTarget;
		this.renderTarget2 = renderTarget.clone();

		this.writeBuffer = this.renderTarget1;
		this.readBuffer = this.renderTarget2;

	}

	setSize( width, height ) {

		this._width = width;
		this._height = height;

		const effectiveWidth = this._width * this._pixelRatio;
		const effectiveHeight = this._height * this._pixelRatio;

		this.renderTarget1.setSize( effectiveWidth, effectiveHeight );
		this.renderTarget2.setSize( effectiveWidth, effectiveHeight );

		for ( let i = 0; i < this.passes.length; i ++ ) {

			this.passes[ i ].setSize( effectiveWidth, effectiveHeight );

		}

	}

	setPixelRatio( pixelRatio ) {

		this._pixelRatio = pixelRatio;

		this.setSize( this._width, this._height );

	}

	dispose() {

		this.renderTarget1.dispose();
		this.renderTarget2.dispose();

		this.copyPass.dispose();

	}

}


class EffectComposer_Pass {

	constructor() {

		// if set to true, the pass is processed by the composer
		this.enabled = true;

		// if set to true, the pass indicates to swap read and write buffer after rendering
		this.needsSwap = true;

		// if set to true, the pass clears its buffer before rendering
		this.clear = false;

		// if set to true, the result of the pass is rendered to screen. This is set automatically by EffectComposer.
		this.renderToScreen = false;

	}

	setSize( /* width, height */ ) {}

	render( /* renderer, writeBuffer, readBuffer, deltaTime, maskActive */ ) {

		console.error( 'THREE.Pass: .render() must be implemented in derived pass.' );

	}

}

// Helper for passes that need to fill the viewport with a single quad.

const EffectComposer_camera = new external_THREE_namespaceObject.OrthographicCamera( - 1, 1, 1, - 1, 0, 1 );

// https://github.com/mrdoob/three.js/pull/21358

const EffectComposer_geometry = new external_THREE_namespaceObject.BufferGeometry();
EffectComposer_geometry.setAttribute( 'position', new external_THREE_namespaceObject.Float32BufferAttribute( [ - 1, 3, 0, - 1, - 1, 0, 3, - 1, 0 ], 3 ) );
EffectComposer_geometry.setAttribute( 'uv', new external_THREE_namespaceObject.Float32BufferAttribute( [ 0, 2, 0, 0, 2, 0 ], 2 ) );

class EffectComposer_FullScreenQuad {

	constructor( material ) {

		this._mesh = new Mesh( EffectComposer_geometry, material );

	}

	dispose() {

		this._mesh.geometry.dispose();

	}

	render( renderer ) {

		renderer.render( this._mesh, EffectComposer_camera );

	}

	get material() {

		return this._mesh.material;

	}

	set material( value ) {

		this._mesh.material = value;

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/postprocessing/RenderPass.js



class RenderPass extends Pass {

	constructor( scene, camera, overrideMaterial, clearColor, clearAlpha ) {

		super();

		this.scene = scene;
		this.camera = camera;

		this.overrideMaterial = overrideMaterial;

		this.clearColor = clearColor;
		this.clearAlpha = ( clearAlpha !== undefined ) ? clearAlpha : 0;

		this.clear = true;
		this.clearDepth = false;
		this.needsSwap = false;
		this._oldClearColor = new external_THREE_namespaceObject.Color();

	}

	render( renderer, writeBuffer, readBuffer /*, deltaTime, maskActive */ ) {

		const oldAutoClear = renderer.autoClear;
		renderer.autoClear = false;

		let oldClearAlpha, oldOverrideMaterial;

		if ( this.overrideMaterial !== undefined ) {

			oldOverrideMaterial = this.scene.overrideMaterial;

			this.scene.overrideMaterial = this.overrideMaterial;

		}

		if ( this.clearColor ) {

			renderer.getClearColor( this._oldClearColor );
			oldClearAlpha = renderer.getClearAlpha();

			renderer.setClearColor( this.clearColor, this.clearAlpha );

		}

		if ( this.clearDepth ) {

			renderer.clearDepth();

		}

		renderer.setRenderTarget( this.renderToScreen ? null : readBuffer );

		// TODO: Avoid using autoClear properties, see https://github.com/mrdoob/three.js/pull/15571#issuecomment-465669600
		if ( this.clear ) renderer.clear( renderer.autoClearColor, renderer.autoClearDepth, renderer.autoClearStencil );
		renderer.render( this.scene, this.camera );

		if ( this.clearColor ) {

			renderer.setClearColor( this._oldClearColor, oldClearAlpha );

		}

		if ( this.overrideMaterial !== undefined ) {

			this.scene.overrideMaterial = oldOverrideMaterial;

		}

		renderer.autoClear = oldAutoClear;

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/shaders/FXAAShader.js


/**
 * NVIDIA FXAA by Timothy Lottes
 * https://developer.download.nvidia.com/assets/gamedev/files/sdk/11/FXAA_WhitePaper.pdf
 * - WebGL port by @supereggbert
 * http://www.glge.org/demos/fxaa/
 * Further improved by Daniel Sturk
 */

const FXAAShader = {

	uniforms: {

		'tDiffuse': { value: null },
		'resolution': { value: new external_THREE_namespaceObject.Vector2( 1 / 1024, 1 / 512 ) }

	},

	vertexShader: /* glsl */`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: `
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-kepler\FXAA\assets\shaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`

};



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/shaders/SMAAShader.js


/**
 * WebGL port of Subpixel Morphological Antialiasing (SMAA) v2.8
 * Preset: SMAA 1x Medium (with color edge detection)
 * https://github.com/iryoku/smaa/releases/tag/v2.8
 */

const SMAAEdgesShader = {

	defines: {

		'SMAA_THRESHOLD': '0.1'

	},

	uniforms: {

		'tDiffuse': { value: null },
		'resolution': { value: new external_THREE_namespaceObject.Vector2( 1 / 1024, 1 / 512 ) }

	},

	vertexShader: /* glsl */`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`

};

const SMAAWeightsShader = {

	defines: {

		'SMAA_MAX_SEARCH_STEPS': '8',
		'SMAA_AREATEX_MAX_DISTANCE': '16',
		'SMAA_AREATEX_PIXEL_SIZE': '( 1.0 / vec2( 160.0, 560.0 ) )',
		'SMAA_AREATEX_SUBTEX_SIZE': '( 1.0 / 7.0 )'

	},

	uniforms: {

		'tDiffuse': { value: null },
		'tArea': { value: null },
		'tSearch': { value: null },
		'resolution': { value: new external_THREE_namespaceObject.Vector2( 1 / 1024, 1 / 512 ) }

	},

	vertexShader: /* glsl */`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`

};

const SMAABlendShader = {

	uniforms: {

		'tDiffuse': { value: null },
		'tColor': { value: null },
		'resolution': { value: new external_THREE_namespaceObject.Vector2( 1 / 1024, 1 / 512 ) }

	},

	vertexShader: /* glsl */`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,

	fragmentShader: /* glsl */`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`

};



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/postprocessing/SMAAPass.js






class SMAAPass extends Pass {

	constructor( width, height ) {

		super();

		// render targets

		this.edgesRT = new external_THREE_namespaceObject.WebGLRenderTarget( width, height, {
			depthBuffer: false
		} );
		this.edgesRT.texture.name = 'SMAAPass.edges';

		this.weightsRT = new external_THREE_namespaceObject.WebGLRenderTarget( width, height, {
			depthBuffer: false
		} );
		this.weightsRT.texture.name = 'SMAAPass.weights';

		// textures
		const scope = this;

		const areaTextureImage = new Image();
		areaTextureImage.src = this.getAreaTexture();
		areaTextureImage.onload = function () {

			// assigning data to HTMLImageElement.src is asynchronous (see #15162)
			scope.areaTexture.needsUpdate = true;

		};

		this.areaTexture = new external_THREE_namespaceObject.Texture();
		this.areaTexture.name = 'SMAAPass.area';
		this.areaTexture.image = areaTextureImage;
		this.areaTexture.minFilter = external_THREE_namespaceObject.LinearFilter;
		this.areaTexture.generateMipmaps = false;
		this.areaTexture.flipY = false;

		const searchTextureImage = new Image();
		searchTextureImage.src = this.getSearchTexture();
		searchTextureImage.onload = function () {

			// assigning data to HTMLImageElement.src is asynchronous (see #15162)
			scope.searchTexture.needsUpdate = true;

		};

		this.searchTexture = new external_THREE_namespaceObject.Texture();
		this.searchTexture.name = 'SMAAPass.search';
		this.searchTexture.image = searchTextureImage;
		this.searchTexture.magFilter = external_THREE_namespaceObject.NearestFilter;
		this.searchTexture.minFilter = external_THREE_namespaceObject.NearestFilter;
		this.searchTexture.generateMipmaps = false;
		this.searchTexture.flipY = false;

		// materials - pass 1

		if ( SMAAEdgesShader === undefined ) {

			console.error( 'THREE.SMAAPass relies on SMAAShader' );

		}

		this.uniformsEdges = external_THREE_namespaceObject.UniformsUtils.clone( SMAAEdgesShader.uniforms );

		this.uniformsEdges[ 'resolution' ].value.set( 1 / width, 1 / height );

		this.materialEdges = new external_THREE_namespaceObject.ShaderMaterial( {
			defines: Object.assign( {}, SMAAEdgesShader.defines ),
			uniforms: this.uniformsEdges,
			vertexShader: SMAAEdgesShader.vertexShader,
			fragmentShader: SMAAEdgesShader.fragmentShader
		} );

		// materials - pass 2

		this.uniformsWeights = external_THREE_namespaceObject.UniformsUtils.clone( SMAAWeightsShader.uniforms );

		this.uniformsWeights[ 'resolution' ].value.set( 1 / width, 1 / height );
		this.uniformsWeights[ 'tDiffuse' ].value = this.edgesRT.texture;
		this.uniformsWeights[ 'tArea' ].value = this.areaTexture;
		this.uniformsWeights[ 'tSearch' ].value = this.searchTexture;

		this.materialWeights = new external_THREE_namespaceObject.ShaderMaterial( {
			defines: Object.assign( {}, SMAAWeightsShader.defines ),
			uniforms: this.uniformsWeights,
			vertexShader: SMAAWeightsShader.vertexShader,
			fragmentShader: SMAAWeightsShader.fragmentShader
		} );

		// materials - pass 3

		this.uniformsBlend = external_THREE_namespaceObject.UniformsUtils.clone( SMAABlendShader.uniforms );

		this.uniformsBlend[ 'resolution' ].value.set( 1 / width, 1 / height );
		this.uniformsBlend[ 'tDiffuse' ].value = this.weightsRT.texture;

		this.materialBlend = new external_THREE_namespaceObject.ShaderMaterial( {
			uniforms: this.uniformsBlend,
			vertexShader: SMAABlendShader.vertexShader,
			fragmentShader: SMAABlendShader.fragmentShader
		} );

		this.needsSwap = false;

		this.fsQuad = new FullScreenQuad( null );

	}

	render( renderer, writeBuffer, readBuffer/*, deltaTime, maskActive*/ ) {

		// pass 1

		this.uniformsEdges[ 'tDiffuse' ].value = readBuffer.texture;

		this.fsQuad.material = this.materialEdges;

		renderer.setRenderTarget( this.edgesRT );
		if ( this.clear ) renderer.clear();
		this.fsQuad.render( renderer );

		// pass 2

		this.fsQuad.material = this.materialWeights;

		renderer.setRenderTarget( this.weightsRT );
		if ( this.clear ) renderer.clear();
		this.fsQuad.render( renderer );

		// pass 3

		this.uniformsBlend[ 'tColor' ].value = readBuffer.texture;

		this.fsQuad.material = this.materialBlend;

		if ( this.renderToScreen ) {

			renderer.setRenderTarget( null );
			this.fsQuad.render( renderer );

		} else {

			renderer.setRenderTarget( writeBuffer );
			if ( this.clear ) renderer.clear();
			this.fsQuad.render( renderer );

		}

	}

	setSize( width, height ) {

		this.edgesRT.setSize( width, height );
		this.weightsRT.setSize( width, height );

		this.materialEdges.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );
		this.materialWeights.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );
		this.materialBlend.uniforms[ 'resolution' ].value.set( 1 / width, 1 / height );

	}

	getAreaTexture() {

		return 'data:image/png;base64,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';

	}

	getSearchTexture() {

		return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII=';

	}

	dispose() {

		this.edgesRT.dispose();
		this.weightsRT.dispose();

		this.areaTexture.dispose();
		this.searchTexture.dispose();

		this.materialEdges.dispose();
		this.materialWeights.dispose();
		this.materialBlend.dispose();

		this.fsQuad.dispose();

	}

}



;// CONCATENATED MODULE: ./src/tools/controls/OrbitControls.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


// This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
//
//    Orbit - left mouse / touch: one-finger move
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - right mouse, or left mouse + ctrl/meta/shiftKey, or arrow keys / touch: two-finger move

var _changeEvent = {
  type: 'change'
};
var _startEvent = {
  type: 'start'
};
var _endEvent = {
  type: 'end'
};
var OrbitControls = /*#__PURE__*/function (_EventDispatcher) {
  _inherits(OrbitControls, _EventDispatcher);
  var _super = _createSuper(OrbitControls);
  function OrbitControls(object, domElement) {
    var _this;
    _classCallCheck(this, OrbitControls);
    _this = _super.call(this);
    _this.object = object;
    _this.domElement = domElement;
    _this.domElement.style.touchAction = 'none'; // disable touch scroll

    // Set to false to disable this control
    _this.enabled = true;

    // "target" sets the location of focus, where the object orbits around
    _this.target = new external_THREE_namespaceObject.Vector3();

    // How far you can dolly in and out ( PerspectiveCamera only )
    _this.minDistance = 0;
    _this.maxDistance = Infinity;

    // How far you can zoom in and out ( OrthographicCamera only )
    _this.minZoom = 0;
    _this.maxZoom = Infinity;

    // How far you can orbit vertically, upper and lower limits.
    // Range is 0 to Math.PI radians.
    _this.minPolarAngle = 0; // radians
    _this.maxPolarAngle = Math.PI; // radians

    // How far you can orbit horizontally, upper and lower limits.
    // If set, the interval [ min, max ] must be a sub-interval of [ - 2 PI, 2 PI ], with ( max - min < 2 PI )
    _this.minAzimuthAngle = -Infinity; // radians
    _this.maxAzimuthAngle = Infinity; // radians

    // Set to true to enable damping (inertia)
    // If damping is enabled, you must call controls.update() in your animation loop
    _this.enableDamping = false;
    _this.dampingFactor = 0.05;

    // This option actually enables dollying in and out; left as "zoom" for backwards compatibility.
    // Set to false to disable zooming
    _this.enableZoom = true;
    _this.zoomSpeed = 1.0;

    // Set to false to disable rotating
    _this.enableRotate = true;
    _this.rotateSpeed = 1.0;

    // Set to false to disable panning
    _this.enablePan = true;
    _this.panSpeed = 1.0;
    _this.screenSpacePanning = true; // if false, pan orthogonal to world-space direction camera.up
    _this.keyPanSpeed = 7.0; // pixels moved per arrow key push

    // Set to true to automatically rotate around the target
    // If auto-rotate is enabled, you must call controls.update() in your animation loop
    _this.autoRotate = false;
    _this.autoRotateSpeed = 2.0; // 30 seconds per orbit when fps is 60

    // The four arrow keys
    _this.keys = {
      LEFT: 'ArrowLeft',
      UP: 'ArrowUp',
      RIGHT: 'ArrowRight',
      BOTTOM: 'ArrowDown'
    };

    // Mouse buttons
    _this.mouseButtons = {
      LEFT: external_THREE_namespaceObject.MOUSE.ROTATE,
      MIDDLE: external_THREE_namespaceObject.MOUSE.DOLLY,
      RIGHT: external_THREE_namespaceObject.MOUSE.PAN
    };

    // Touch fingers
    _this.touches = {
      ONE: external_THREE_namespaceObject.TOUCH.ROTATE,
      TWO: external_THREE_namespaceObject.TOUCH.DOLLY_PAN
    };

    // for reset
    _this.target0 = _this.target.clone();
    _this.position0 = _this.object.position.clone();
    _this.zoom0 = _this.object.zoom;

    // the target DOM element for key events
    _this._domElementKeyEvents = null;

    // ZOOM-TO-CURSOR
    _this.cursorScreen = new external_THREE_namespaceObject.Vector3();
    _this.cursorWorld = new external_THREE_namespaceObject.Vector3();
    _this.enableZoomToCursor = false;
    _this.adjustmentAfterZoomNeeded = false;
    _this.maxTargetDistanceFromOrigin = Infinity;
    //

    //
    // public methods
    //

    // ZOOM-TO-CURSOR
    _this.adjustAfterZoom = function () {
      var lastTarget = scope.target.clone();
      var newCursorWorld = new external_THREE_namespaceObject.Vector3(scope.cursorScreen.x, scope.cursorScreen.y, scope.target.clone().project(scope.object).z).clone().unproject(scope.object);
      var delta = new external_THREE_namespaceObject.Vector3().subVectors(scope.cursorWorld, newCursorWorld);
      var target = null;
      if (!scope.screenSpacePanning) {
        var plane = new external_THREE_namespaceObject.Plane(scope.object.up.clone());
        var ray = new external_THREE_namespaceObject.Ray(scope.object.position.clone(), new external_THREE_namespaceObject.Vector3().subVectors(scope.target.clone().add(delta), scope.object.position).normalize());
        target = ray.intersectPlane(plane, new external_THREE_namespaceObject.Vector3());
        if (target === null || new external_THREE_namespaceObject.Vector3().subVectors(scope.object.position, scope.target).normalize().multiply(scope.object.up.clone().normalize()).length() < 0.00001) {
          scope.target.add(delta);
          if (scope.target.length() > this.maxTargetDistanceFromOrigin) scope.target.setLength(this.maxTargetDistanceFromOrigin);
          scope.object.position.add(new external_THREE_namespaceObject.Vector3().subVectors(scope.target, lastTarget));
          var mulVector = new external_THREE_namespaceObject.Vector3(1 - scope.object.up.x, 1 - scope.object.up.y, 1 - scope.object.up.z);
          scope.target.multiply(mulVector);
          scope.object.position.multiply(mulVector);
        } else {
          if (target.length() > this.maxTargetDistanceFromOrigin) target.setLength(this.maxTargetDistanceFromOrigin);
          scope.target.copy(target);
          scope.object.position.add(new external_THREE_namespaceObject.Vector3().subVectors(scope.target, lastTarget));
        }
      } else {
        scope.target.add(delta);
        scope.object.position.add(delta);
      }
    };
    _this.setCursorWorld = function () {
      scope.cursorWorld.copy(new external_THREE_namespaceObject.Vector3(scope.cursorScreen.x, scope.cursorScreen.y, scope.target.clone().project(scope.object).z).unproject(scope.object));
    };
    //

    _this.getPolarAngle = function () {
      return spherical.phi;
    };
    _this.getAzimuthalAngle = function () {
      return spherical.theta;
    };
    _this.getDistance = function () {
      return this.object.position.distanceTo(this.target);
    };
    _this.listenToKeyEvents = function (domElement) {
      domElement.addEventListener('keydown', onKeyDown);
      this._domElementKeyEvents = domElement;
    };
    _this.saveState = function () {
      scope.target0.copy(scope.target);
      scope.position0.copy(scope.object.position);
      scope.zoom0 = scope.object.zoom;
    };
    _this.reset = function () {
      scope.target.copy(scope.target0);
      scope.object.position.copy(scope.position0);
      scope.object.zoom = scope.zoom0;
      scope.object.updateProjectionMatrix();
      scope.dispatchEvent(_changeEvent);
      scope.update();
      state = STATE.NONE;
    };

    // this method is exposed, but perhaps it would be better if we can make it private...
    _this.update = function () {
      var offset = new external_THREE_namespaceObject.Vector3();

      // so camera.up is the orbit axis
      var quat = new external_THREE_namespaceObject.Quaternion().setFromUnitVectors(object.up, new external_THREE_namespaceObject.Vector3(0, 1, 0));
      var quatInverse = quat.clone().invert();
      var lastPosition = new external_THREE_namespaceObject.Vector3();
      var lastQuaternion = new external_THREE_namespaceObject.Quaternion();
      var twoPI = 2 * Math.PI;
      return function update() {
        var position = scope.object.position;
        offset.copy(position).sub(scope.target);

        // rotate offset to "y-axis-is-up" space
        offset.applyQuaternion(quat);

        // angle from z-axis around y-axis
        spherical.setFromVector3(offset);
        if (scope.autoRotate && state === STATE.NONE) {
          rotateLeft(getAutoRotationAngle());
        }
        if (scope.enableDamping) {
          spherical.theta += sphericalDelta.theta * scope.dampingFactor;
          spherical.phi += sphericalDelta.phi * scope.dampingFactor;
        } else {
          spherical.theta += sphericalDelta.theta;
          spherical.phi += sphericalDelta.phi;
        }

        // restrict theta to be between desired limits

        var min = scope.minAzimuthAngle;
        var max = scope.maxAzimuthAngle;
        if (isFinite(min) && isFinite(max)) {
          if (min < -Math.PI) min += twoPI;else if (min > Math.PI) min -= twoPI;
          if (max < -Math.PI) max += twoPI;else if (max > Math.PI) max -= twoPI;
          if (min <= max) {
            spherical.theta = Math.max(min, Math.min(max, spherical.theta));
          } else {
            spherical.theta = spherical.theta > (min + max) / 2 ? Math.max(min, spherical.theta) : Math.min(max, spherical.theta);
          }
        }

        // restrict phi to be between desired limits
        spherical.phi = Math.max(scope.minPolarAngle, Math.min(scope.maxPolarAngle, spherical.phi));
        spherical.makeSafe();
        spherical.radius *= scale;

        // restrict radius to be between desired limits
        spherical.radius = Math.max(scope.minDistance, Math.min(scope.maxDistance, spherical.radius));

        // move target to panned location

        if (scope.enableDamping === true) {
          scope.target.addScaledVector(panOffset, scope.dampingFactor);
        } else {
          scope.target.add(panOffset);
        }
        offset.setFromSpherical(spherical);

        // rotate offset back to "camera-up-vector-is-up" space
        offset.applyQuaternion(quatInverse);
        position.copy(scope.target).add(offset);
        scope.object.lookAt(scope.target);
        if (scope.enableDamping === true) {
          sphericalDelta.theta *= 1 - scope.dampingFactor;
          sphericalDelta.phi *= 1 - scope.dampingFactor;
          panOffset.multiplyScalar(1 - scope.dampingFactor);
        } else {
          sphericalDelta.set(0, 0, 0);
          panOffset.set(0, 0, 0);
        }
        scale = 1;

        // update condition is:
        // min(camera displacement, camera rotation in radians)^2 > EPS
        // using small-angle approximation cos(x/2) = 1 - x^2 / 8

        // ZOOM-TO-CURSOR
        if (scope.target.length() > this.maxTargetDistanceFromOrigin) {
          var lastTarget = scope.target.clone();
          scope.target.setLength(this.maxTargetDistanceFromOrigin);
          scope.object.position.add(new external_THREE_namespaceObject.Vector3().subVectors(scope.target, lastTarget));
        }
        //

        if (zoomChanged || lastPosition.distanceToSquared(scope.object.position) > EPS || 8 * (1 - lastQuaternion.dot(scope.object.quaternion)) > EPS) {
          scope.dispatchEvent(_changeEvent);

          // ZOOM-TO-CURSOR
          if (scope.enableZoomToCursor && scope.adjustmentAfterZoomNeeded) {
            scope.adjustmentAfterZoomNeeded = false;
            this.adjustAfterZoom();
          }
          //

          lastPosition.copy(scope.object.position);
          lastQuaternion.copy(scope.object.quaternion);
          zoomChanged = false;
          return true;
        }
        return false;
      };
    }();
    _this.dispose = function () {
      scope.domElement.removeEventListener('contextmenu', onContextMenu);
      scope.domElement.removeEventListener('pointerdown', onPointerDown);
      scope.domElement.removeEventListener('pointercancel', onPointerCancel);
      scope.domElement.removeEventListener('wheel', onMouseWheel);
      scope.domElement.removeEventListener('pointermove', onPointerMove);
      scope.domElement.removeEventListener('pointerup', onPointerUp);
      if (scope._domElementKeyEvents !== null) {
        scope._domElementKeyEvents.removeEventListener('keydown', onKeyDown);
      }

      //scope.dispatchEvent( { type: 'dispose' } ); // should this be added here?
    };

    //
    // internals
    //

    var scope = _assertThisInitialized(_this);
    var STATE = {
      NONE: -1,
      ROTATE: 0,
      DOLLY: 1,
      PAN: 2,
      TOUCH_ROTATE: 3,
      TOUCH_PAN: 4,
      TOUCH_DOLLY_PAN: 5,
      TOUCH_DOLLY_ROTATE: 6
    };
    var state = STATE.NONE;
    var EPS = 0.000001;

    // current position in spherical coordinates
    var spherical = new external_THREE_namespaceObject.Spherical();
    var sphericalDelta = new external_THREE_namespaceObject.Spherical();
    var scale = 1;
    var panOffset = new external_THREE_namespaceObject.Vector3();
    var zoomChanged = false;
    var rotateStart = new external_THREE_namespaceObject.Vector2();
    var rotateEnd = new external_THREE_namespaceObject.Vector2();
    var rotateDelta = new external_THREE_namespaceObject.Vector2();
    var panStart = new external_THREE_namespaceObject.Vector2();
    var panEnd = new external_THREE_namespaceObject.Vector2();
    var panDelta = new external_THREE_namespaceObject.Vector2();
    var dollyStart = new external_THREE_namespaceObject.Vector2();
    var dollyEnd = new external_THREE_namespaceObject.Vector2();
    var dollyDelta = new external_THREE_namespaceObject.Vector2();
    var pointers = [];
    var pointerPositions = {};
    function getAutoRotationAngle() {
      return 2 * Math.PI / 60 / 60 * scope.autoRotateSpeed;
    }
    function getZoomScale() {
      return Math.pow(0.95, scope.zoomSpeed);
    }
    function rotateLeft(angle) {
      sphericalDelta.theta -= angle;
    }
    function rotateUp(angle) {
      sphericalDelta.phi -= angle;
    }
    var panLeft = function () {
      var v = new external_THREE_namespaceObject.Vector3();
      return function panLeft(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();
    var panUp = function () {
      var v = new external_THREE_namespaceObject.Vector3();
      return function panUp(distance, objectMatrix) {
        if (scope.screenSpacePanning === true) {
          v.setFromMatrixColumn(objectMatrix, 1);
        } else {
          v.setFromMatrixColumn(objectMatrix, 0);
          v.crossVectors(scope.object.up, v);
        }
        v.multiplyScalar(distance);
        panOffset.add(v);
      };
    }();

    // deltaX and deltaY are in pixels; right and down are positive
    var pan = function () {
      var offset = new external_THREE_namespaceObject.Vector3();
      return function pan(deltaX, deltaY) {
        var element = scope.domElement;
        if (scope.object.isPerspectiveCamera) {
          // perspective
          var position = scope.object.position;
          offset.copy(position).sub(scope.target);
          var targetDistance = offset.length();

          // half of the fov is center to top of screen
          targetDistance *= Math.tan(scope.object.fov / 2 * Math.PI / 180.0);

          // we use only clientHeight here so aspect ratio does not distort speed
          panLeft(2 * deltaX * targetDistance / element.clientHeight, scope.object.matrix);
          panUp(2 * deltaY * targetDistance / element.clientHeight, scope.object.matrix);
        } else if (scope.object.isOrthographicCamera) {
          // orthographic
          panLeft(deltaX * (scope.object.right - scope.object.left) / scope.object.zoom / element.clientWidth, scope.object.matrix);
          panUp(deltaY * (scope.object.top - scope.object.bottom) / scope.object.zoom / element.clientHeight, scope.object.matrix);
        } else {
          // camera neither orthographic nor perspective
          console.warn('WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.');
          scope.enablePan = false;
        }
      };
    }();
    function dollyOut(dollyScale) {
      // ZOOM-TO-CURSOR
      if (scope.enableZoomToCursor) scope.setCursorWorld();
      //

      if (scope.object.isPerspectiveCamera) {
        scale /= dollyScale;
      } else if (scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom * dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;
      }

      // ZOOM-TO-CURSOR
      if (scope.enableZoomToCursor) {
        if (scope.object.isOrthographicCamera) scope.adjustAfterZoom();else if (scope.object.isPerspectiveCamera) scope.adjustmentAfterZoomNeeded = true;
      }
      //
    }

    function dollyIn(dollyScale) {
      // ZOOM-TO-CURSOR
      if (scope.enableZoomToCursor) scope.setCursorWorld();
      //

      if (scope.object.isPerspectiveCamera) {
        scale *= dollyScale;
      } else if (scope.object.isOrthographicCamera) {
        scope.object.zoom = Math.max(scope.minZoom, Math.min(scope.maxZoom, scope.object.zoom / dollyScale));
        scope.object.updateProjectionMatrix();
        zoomChanged = true;
      } else {
        console.warn('WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.');
        scope.enableZoom = false;
      }

      // ZOOM-TO-CURSOR
      if (scope.enableZoomToCursor) {
        if (scope.object.isOrthographicCamera) scope.adjustAfterZoom();else if (scope.object.isPerspectiveCamera) scope.adjustmentAfterZoomNeeded = true;
      }
      //
    }

    //
    // event callbacks - update the object state
    //

    function handleMouseDownRotate(event) {
      rotateStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownDolly(event) {
      dollyStart.set(event.clientX, event.clientY);
    }
    function handleMouseDownPan(event) {
      panStart.set(event.clientX, event.clientY);
    }
    function handleMouseMoveRotate(event) {
      rotateEnd.set(event.clientX, event.clientY);
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      var element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      rotateStart.copy(rotateEnd);
      scope.update();
    }
    function handleMouseMoveDolly(event) {
      dollyEnd.set(event.clientX, event.clientY);
      dollyDelta.subVectors(dollyEnd, dollyStart);
      if (dollyDelta.y > 0) {
        dollyOut(getZoomScale());
      } else if (dollyDelta.y < 0) {
        dollyIn(getZoomScale());
      }
      dollyStart.copy(dollyEnd);
      scope.update();
    }
    function handleMouseMovePan(event) {
      panEnd.set(event.clientX, event.clientY);
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
      scope.update();
    }
    function handleMouseWheel(event) {
      if (event.deltaY < 0) {
        dollyIn(getZoomScale());
      } else if (event.deltaY > 0) {
        dollyOut(getZoomScale());
      }
      scope.update();
    }
    function handleKeyDown(event) {
      var needsUpdate = false;
      switch (event.code) {
        case scope.keys.UP:
          pan(0, scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.BOTTOM:
          pan(0, -scope.keyPanSpeed);
          needsUpdate = true;
          break;
        case scope.keys.LEFT:
          pan(scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
        case scope.keys.RIGHT:
          pan(-scope.keyPanSpeed, 0);
          needsUpdate = true;
          break;
      }
      if (needsUpdate) {
        // prevent the browser from scrolling on cursor keys
        event.preventDefault();
        scope.update();
      }
    }
    function handleTouchStartRotate() {
      if (pointers.length === 1) {
        rotateStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        var x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        var y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        rotateStart.set(x, y);
      }
    }
    function handleTouchStartPan() {
      if (pointers.length === 1) {
        panStart.set(pointers[0].pageX, pointers[0].pageY);
      } else {
        var x = 0.5 * (pointers[0].pageX + pointers[1].pageX);
        var y = 0.5 * (pointers[0].pageY + pointers[1].pageY);
        panStart.set(x, y);
      }
    }
    function handleTouchStartDolly() {
      var dx = pointers[0].pageX - pointers[1].pageX;
      var dy = pointers[0].pageY - pointers[1].pageY;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyStart.set(0, distance);
    }
    function handleTouchStartDollyPan() {
      if (scope.enableZoom) handleTouchStartDolly();
      if (scope.enablePan) handleTouchStartPan();
    }
    function handleTouchStartDollyRotate() {
      if (scope.enableZoom) handleTouchStartDolly();
      if (scope.enableRotate) handleTouchStartRotate();
    }
    function handleTouchMoveRotate(event) {
      if (pointers.length == 1) {
        rotateEnd.set(event.pageX, event.pageY);
      } else {
        var position = getSecondPointerPosition(event);
        var x = 0.5 * (event.pageX + position.x);
        var y = 0.5 * (event.pageY + position.y);
        rotateEnd.set(x, y);
      }
      rotateDelta.subVectors(rotateEnd, rotateStart).multiplyScalar(scope.rotateSpeed);
      var element = scope.domElement;
      rotateLeft(2 * Math.PI * rotateDelta.x / element.clientHeight); // yes, height

      rotateUp(2 * Math.PI * rotateDelta.y / element.clientHeight);
      rotateStart.copy(rotateEnd);
    }
    function handleTouchMovePan(event) {
      if (pointers.length === 1) {
        panEnd.set(event.pageX, event.pageY);
      } else {
        var position = getSecondPointerPosition(event);
        var x = 0.5 * (event.pageX + position.x);
        var y = 0.5 * (event.pageY + position.y);
        panEnd.set(x, y);
      }
      panDelta.subVectors(panEnd, panStart).multiplyScalar(scope.panSpeed);
      pan(panDelta.x, panDelta.y);
      panStart.copy(panEnd);
    }
    function handleTouchMoveDolly(event) {
      var position = getSecondPointerPosition(event);
      var dx = event.pageX - position.x;
      var dy = event.pageY - position.y;
      var distance = Math.sqrt(dx * dx + dy * dy);
      dollyEnd.set(0, distance);
      dollyDelta.set(0, Math.pow(dollyEnd.y / dollyStart.y, scope.zoomSpeed));
      dollyOut(dollyDelta.y);
      dollyStart.copy(dollyEnd);
    }
    function handleTouchMoveDollyPan(event) {
      if (scope.enableZoom) handleTouchMoveDolly(event);
      if (scope.enablePan) handleTouchMovePan(event);
    }
    function handleTouchMoveDollyRotate(event) {
      if (scope.enableZoom) handleTouchMoveDolly(event);
      if (scope.enableRotate) handleTouchMoveRotate(event);
    }

    //
    // event handlers - FSM: listen for events and reset state
    //

    function onPointerDown(event) {
      if (scope.enabled === false) return;
      if (pointers.length === 0) {
        scope.domElement.setPointerCapture(event.pointerId);
        scope.domElement.addEventListener('pointermove', onPointerMove);
        scope.domElement.addEventListener('pointerup', onPointerUp);
      }

      //

      addPointer(event);
      if (event.pointerType === 'touch') {
        onTouchStart(event);
      } else {
        onMouseDown(event);
      }
    }
    function onPointerMove(event) {
      if (scope.enabled === false) return;
      if (event.pointerType === 'touch') {
        onTouchMove(event);
      } else {
        onMouseMove(event);
      }
    }
    function onPointerUp(event) {
      removePointer(event);
      if (pointers.length === 0) {
        scope.domElement.releasePointerCapture(event.pointerId);
        scope.domElement.removeEventListener('pointermove', onPointerMove);
        scope.domElement.removeEventListener('pointerup', onPointerUp);
      }
      scope.dispatchEvent(_endEvent);
      state = STATE.NONE;
    }
    function onPointerCancel(event) {
      removePointer(event);
    }
    function onMouseDown(event) {
      var mouseAction;
      switch (event.button) {
        case 0:
          mouseAction = scope.mouseButtons.LEFT;
          break;
        case 1:
          mouseAction = scope.mouseButtons.MIDDLE;
          break;
        case 2:
          mouseAction = scope.mouseButtons.RIGHT;
          break;
        default:
          mouseAction = -1;
      }
      switch (mouseAction) {
        case external_THREE_namespaceObject.MOUSE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case external_THREE_namespaceObject.MOUSE.ROTATE:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          } else {
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          }
          break;
        case external_THREE_namespaceObject.MOUSE.PAN:
          if (event.ctrlKey || event.metaKey || event.shiftKey) {
            if (scope.enableRotate === false) return;
            handleMouseDownRotate(event);
            state = STATE.ROTATE;
          } else {
            if (scope.enablePan === false) return;
            handleMouseDownPan(event);
            state = STATE.PAN;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }
    function onMouseMove(event) {
      switch (state) {
        case STATE.ROTATE:
          if (scope.enableRotate === false) return;
          handleMouseMoveRotate(event);
          break;
        case STATE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseMoveDolly(event);
          break;
        case STATE.PAN:
          if (scope.enablePan === false) return;
          handleMouseMovePan(event);
          break;
      }
    }
    function onMouseWheel(event) {
      if (scope.enabled === false || scope.enableZoom === false || state !== STATE.NONE) return;
      event.preventDefault();
      scope.dispatchEvent(_startEvent);
      handleMouseWheel(event);
      scope.dispatchEvent(_endEvent);
    }
    function onKeyDown(event) {
      if (scope.enabled === false || scope.enablePan === false) return;
      handleKeyDown(event);
    }
    function onTouchStart(event) {
      trackPointer(event);
      switch (pointers.length) {
        case 1:
          switch (scope.touches.ONE) {
            case external_THREE_namespaceObject.TOUCH.ROTATE:
              if (scope.enableRotate === false) return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;
            case external_THREE_namespaceObject.TOUCH.PAN:
              if (scope.enablePan === false) return;
              handleTouchStartPan();
              state = STATE.TOUCH_PAN;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        case 2:
          switch (scope.touches.TWO) {
            case external_THREE_namespaceObject.TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false) return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case external_THREE_namespaceObject.TOUCH.DOLLY_ROTATE:
              if (scope.enableZoom === false && scope.enableRotate === false) return;
              handleTouchStartDollyRotate();
              state = STATE.TOUCH_DOLLY_ROTATE;
              break;
            default:
              state = STATE.NONE;
          }
          break;
        default:
          state = STATE.NONE;
      }
      if (state !== STATE.NONE) {
        scope.dispatchEvent(_startEvent);
      }
    }
    function onTouchMove(event) {
      trackPointer(event);
      switch (state) {
        case STATE.TOUCH_ROTATE:
          if (scope.enableRotate === false) return;
          handleTouchMoveRotate(event);
          scope.update();
          break;
        case STATE.TOUCH_PAN:
          if (scope.enablePan === false) return;
          handleTouchMovePan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_PAN:
          if (scope.enableZoom === false && scope.enablePan === false) return;
          handleTouchMoveDollyPan(event);
          scope.update();
          break;
        case STATE.TOUCH_DOLLY_ROTATE:
          if (scope.enableZoom === false && scope.enableRotate === false) return;
          handleTouchMoveDollyRotate(event);
          scope.update();
          break;
        default:
          state = STATE.NONE;
      }
    }
    function onContextMenu(event) {
      if (scope.enabled === false) return;
      event.preventDefault();
    }
    function addPointer(event) {
      pointers.push(event);
    }
    function removePointer(event) {
      delete pointerPositions[event.pointerId];
      for (var i = 0; i < pointers.length; i++) {
        if (pointers[i].pointerId == event.pointerId) {
          pointers.splice(i, 1);
          return;
        }
      }
    }
    function trackPointer(event) {
      var position = pointerPositions[event.pointerId];
      if (position === undefined) {
        position = new external_THREE_namespaceObject.Vector2();
        pointerPositions[event.pointerId] = position;
      }
      position.set(event.pageX, event.pageY);
    }
    function getSecondPointerPosition(event) {
      var pointer = event.pointerId === pointers[0].pointerId ? pointers[1] : pointers[0];
      return pointerPositions[pointer.pointerId];
    }

    //

    scope.domElement.addEventListener('contextmenu', onContextMenu);
    scope.domElement.addEventListener('pointerdown', onPointerDown);
    scope.domElement.addEventListener('pointercancel', onPointerCancel);
    scope.domElement.addEventListener('wheel', onMouseWheel, {
      passive: false
    });

    // ZOOM-TO-CURSOR
    scope.domElement.addEventListener('mousemove', function (event) {
      if (!scope.enableZoomToCursor) return;
      scope.cursorScreen.copy(new external_THREE_namespaceObject.Vector3((event.clientX - scope.domElement.getBoundingClientRect().left) / scope.domElement.clientWidth * 2 - 1, -((event.clientY - scope.domElement.getBoundingClientRect().top) / scope.domElement.clientHeight) * 2 + 1, scope.target.clone().project(scope.object).z));
    });
    var handleTouch = function handleTouch(event) {
      var touches = event.touches;
      var touch;
      if (touches.length === 1) {
        touch = new external_THREE_namespaceObject.Vector2(touches[0].clientX, touches[0].clientY);
      } else if (touches.length === 2) {
        touch = new external_THREE_namespaceObject.Vector2((touches[0].clientX + touches[1].clientX) / 2, (touches[0].clientY + touches[1].clientY) / 2);
      }
      if (touch !== undefined) {
        scope.cursorScreen.copy(new external_THREE_namespaceObject.Vector3((touch.x - scope.domElement.getBoundingClientRect().left) / scope.domElement.clientWidth * 2 - 1, -((touch.y - scope.domElement.getBoundingClientRect().top) / scope.domElement.clientHeight) * 2 + 1, scope.target.clone().project(scope.object).z));
      }
    };
    scope.domElement.addEventListener('touchstart', handleTouch);
    scope.domElement.addEventListener('touchmove', handleTouch);
    //

    // force an update at start

    _this.update();
    return _this;
  }
  return _createClass(OrbitControls);
}(external_THREE_namespaceObject.EventDispatcher); // This set of controls performs orbiting, dollying (zooming), and panning.
// Unlike TrackballControls, it maintains the "up" direction object.up (+Y by default).
// This is very similar to OrbitControls, another set of touch behavior
//
//    Orbit - right mouse, or left mouse + ctrl/meta/shiftKey / touch: two-finger rotate
//    Zoom - middle mouse, or mousewheel / touch: two-finger spread or squish
//    Pan - left mouse, or arrow keys / touch: one-finger move
var MapControls = /*#__PURE__*/(/* unused pure expression or super */ null && (function (_OrbitControls) {
  _inherits(MapControls, _OrbitControls);
  var _super2 = _createSuper(MapControls);
  function MapControls(object, domElement) {
    var _this2;
    _classCallCheck(this, MapControls);
    _this2 = _super2.call(this, object, domElement);
    _this2.screenSpacePanning = false; // pan orthogonal to world-space direction camera.up

    _this2.mouseButtons.LEFT = MOUSE.PAN;
    _this2.mouseButtons.RIGHT = MOUSE.ROTATE;
    _this2.touches.ONE = TOUCH.PAN;
    _this2.touches.TWO = TOUCH.DOLLY_ROTATE;
    return _this2;
  }
  return _createClass(MapControls);
}(OrbitControls)));

;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/controls/TrackballControls.js


const TrackballControls_changeEvent = { type: 'change' };
const TrackballControls_startEvent = { type: 'start' };
const TrackballControls_endEvent = { type: 'end' };

class TrackballControls extends external_THREE_namespaceObject.EventDispatcher {

	constructor( object, domElement ) {

		super();

		const scope = this;
		const STATE = { NONE: - 1, ROTATE: 0, ZOOM: 1, PAN: 2, TOUCH_ROTATE: 3, TOUCH_ZOOM_PAN: 4 };

		this.object = object;
		this.domElement = domElement;
		this.domElement.style.touchAction = 'none'; // disable touch scroll

		// API

		this.enabled = true;

		this.screen = { left: 0, top: 0, width: 0, height: 0 };

		this.rotateSpeed = 1.0;
		this.zoomSpeed = 1.2;
		this.panSpeed = 0.3;

		this.noRotate = false;
		this.noZoom = false;
		this.noPan = false;

		this.staticMoving = false;
		this.dynamicDampingFactor = 0.2;

		this.minDistance = 0;
		this.maxDistance = Infinity;

		this.keys = [ 'KeyA' /*A*/, 'KeyS' /*S*/, 'KeyD' /*D*/ ];

		this.mouseButtons = { LEFT: external_THREE_namespaceObject.MOUSE.ROTATE, MIDDLE: external_THREE_namespaceObject.MOUSE.DOLLY, RIGHT: external_THREE_namespaceObject.MOUSE.PAN };

		// internals

		this.target = new external_THREE_namespaceObject.Vector3();

		const EPS = 0.000001;

		const lastPosition = new external_THREE_namespaceObject.Vector3();
		let lastZoom = 1;

		let _state = STATE.NONE,
			_keyState = STATE.NONE,

			_touchZoomDistanceStart = 0,
			_touchZoomDistanceEnd = 0,

			_lastAngle = 0;

		const _eye = new external_THREE_namespaceObject.Vector3(),

			_movePrev = new external_THREE_namespaceObject.Vector2(),
			_moveCurr = new external_THREE_namespaceObject.Vector2(),

			_lastAxis = new external_THREE_namespaceObject.Vector3(),

			_zoomStart = new external_THREE_namespaceObject.Vector2(),
			_zoomEnd = new external_THREE_namespaceObject.Vector2(),

			_panStart = new external_THREE_namespaceObject.Vector2(),
			_panEnd = new external_THREE_namespaceObject.Vector2(),

			_pointers = [],
			_pointerPositions = {};

		// for reset

		this.target0 = this.target.clone();
		this.position0 = this.object.position.clone();
		this.up0 = this.object.up.clone();
		this.zoom0 = this.object.zoom;

		// methods

		this.handleResize = function () {

			const box = scope.domElement.getBoundingClientRect();
			// adjustments come from similar code in the jquery offset() function
			const d = scope.domElement.ownerDocument.documentElement;
			scope.screen.left = box.left + window.pageXOffset - d.clientLeft;
			scope.screen.top = box.top + window.pageYOffset - d.clientTop;
			scope.screen.width = box.width;
			scope.screen.height = box.height;

		};

		const getMouseOnScreen = ( function () {

			const vector = new external_THREE_namespaceObject.Vector2();

			return function getMouseOnScreen( pageX, pageY ) {

				vector.set(
					( pageX - scope.screen.left ) / scope.screen.width,
					( pageY - scope.screen.top ) / scope.screen.height
				);

				return vector;

			};

		}() );

		const getMouseOnCircle = ( function () {

			const vector = new external_THREE_namespaceObject.Vector2();

			return function getMouseOnCircle( pageX, pageY ) {

				vector.set(
					( ( pageX - scope.screen.width * 0.5 - scope.screen.left ) / ( scope.screen.width * 0.5 ) ),
					( ( scope.screen.height + 2 * ( scope.screen.top - pageY ) ) / scope.screen.width ) // screen.width intentional
				);

				return vector;

			};

		}() );

		this.rotateCamera = ( function () {

			const axis = new external_THREE_namespaceObject.Vector3(),
				quaternion = new external_THREE_namespaceObject.Quaternion(),
				eyeDirection = new external_THREE_namespaceObject.Vector3(),
				objectUpDirection = new external_THREE_namespaceObject.Vector3(),
				objectSidewaysDirection = new external_THREE_namespaceObject.Vector3(),
				moveDirection = new external_THREE_namespaceObject.Vector3();

			return function rotateCamera() {

				moveDirection.set( _moveCurr.x - _movePrev.x, _moveCurr.y - _movePrev.y, 0 );
				let angle = moveDirection.length();

				if ( angle ) {

					_eye.copy( scope.object.position ).sub( scope.target );

					eyeDirection.copy( _eye ).normalize();
					objectUpDirection.copy( scope.object.up ).normalize();
					objectSidewaysDirection.crossVectors( objectUpDirection, eyeDirection ).normalize();

					objectUpDirection.setLength( _moveCurr.y - _movePrev.y );
					objectSidewaysDirection.setLength( _moveCurr.x - _movePrev.x );

					moveDirection.copy( objectUpDirection.add( objectSidewaysDirection ) );

					axis.crossVectors( moveDirection, _eye ).normalize();

					angle *= scope.rotateSpeed;
					quaternion.setFromAxisAngle( axis, angle );

					_eye.applyQuaternion( quaternion );
					scope.object.up.applyQuaternion( quaternion );

					_lastAxis.copy( axis );
					_lastAngle = angle;

				} else if ( ! scope.staticMoving && _lastAngle ) {

					_lastAngle *= Math.sqrt( 1.0 - scope.dynamicDampingFactor );
					_eye.copy( scope.object.position ).sub( scope.target );
					quaternion.setFromAxisAngle( _lastAxis, _lastAngle );
					_eye.applyQuaternion( quaternion );
					scope.object.up.applyQuaternion( quaternion );

				}

				_movePrev.copy( _moveCurr );

			};

		}() );


		this.zoomCamera = function () {

			let factor;

			if ( _state === STATE.TOUCH_ZOOM_PAN ) {

				factor = _touchZoomDistanceStart / _touchZoomDistanceEnd;
				_touchZoomDistanceStart = _touchZoomDistanceEnd;

				if ( scope.object.isPerspectiveCamera ) {

					_eye.multiplyScalar( factor );

				} else if ( scope.object.isOrthographicCamera ) {

					scope.object.zoom /= factor;
					scope.object.updateProjectionMatrix();

				} else {

					console.warn( 'THREE.TrackballControls: Unsupported camera type' );

				}

			} else {

				factor = 1.0 + ( _zoomEnd.y - _zoomStart.y ) * scope.zoomSpeed;

				if ( factor !== 1.0 && factor > 0.0 ) {

					if ( scope.object.isPerspectiveCamera ) {

						_eye.multiplyScalar( factor );

					} else if ( scope.object.isOrthographicCamera ) {

						scope.object.zoom /= factor;
						scope.object.updateProjectionMatrix();

					} else {

						console.warn( 'THREE.TrackballControls: Unsupported camera type' );

					}

				}

				if ( scope.staticMoving ) {

					_zoomStart.copy( _zoomEnd );

				} else {

					_zoomStart.y += ( _zoomEnd.y - _zoomStart.y ) * this.dynamicDampingFactor;

				}

			}

		};

		this.panCamera = ( function () {

			const mouseChange = new external_THREE_namespaceObject.Vector2(),
				objectUp = new external_THREE_namespaceObject.Vector3(),
				pan = new external_THREE_namespaceObject.Vector3();

			return function panCamera() {

				mouseChange.copy( _panEnd ).sub( _panStart );

				if ( mouseChange.lengthSq() ) {

					if ( scope.object.isOrthographicCamera ) {

						const scale_x = ( scope.object.right - scope.object.left ) / scope.object.zoom / scope.domElement.clientWidth;
						const scale_y = ( scope.object.top - scope.object.bottom ) / scope.object.zoom / scope.domElement.clientWidth;

						mouseChange.x *= scale_x;
						mouseChange.y *= scale_y;

					}

					mouseChange.multiplyScalar( _eye.length() * scope.panSpeed );

					pan.copy( _eye ).cross( scope.object.up ).setLength( mouseChange.x );
					pan.add( objectUp.copy( scope.object.up ).setLength( mouseChange.y ) );

					scope.object.position.add( pan );
					scope.target.add( pan );

					if ( scope.staticMoving ) {

						_panStart.copy( _panEnd );

					} else {

						_panStart.add( mouseChange.subVectors( _panEnd, _panStart ).multiplyScalar( scope.dynamicDampingFactor ) );

					}

				}

			};

		}() );

		this.checkDistances = function () {

			if ( ! scope.noZoom || ! scope.noPan ) {

				if ( _eye.lengthSq() > scope.maxDistance * scope.maxDistance ) {

					scope.object.position.addVectors( scope.target, _eye.setLength( scope.maxDistance ) );
					_zoomStart.copy( _zoomEnd );

				}

				if ( _eye.lengthSq() < scope.minDistance * scope.minDistance ) {

					scope.object.position.addVectors( scope.target, _eye.setLength( scope.minDistance ) );
					_zoomStart.copy( _zoomEnd );

				}

			}

		};

		this.update = function () {

			_eye.subVectors( scope.object.position, scope.target );

			if ( ! scope.noRotate ) {

				scope.rotateCamera();

			}

			if ( ! scope.noZoom ) {

				scope.zoomCamera();

			}

			if ( ! scope.noPan ) {

				scope.panCamera();

			}

			scope.object.position.addVectors( scope.target, _eye );

			if ( scope.object.isPerspectiveCamera ) {

				scope.checkDistances();

				scope.object.lookAt( scope.target );

				if ( lastPosition.distanceToSquared( scope.object.position ) > EPS ) {

					scope.dispatchEvent( TrackballControls_changeEvent );

					lastPosition.copy( scope.object.position );

				}

			} else if ( scope.object.isOrthographicCamera ) {

				scope.object.lookAt( scope.target );

				if ( lastPosition.distanceToSquared( scope.object.position ) > EPS || lastZoom !== scope.object.zoom ) {

					scope.dispatchEvent( TrackballControls_changeEvent );

					lastPosition.copy( scope.object.position );
					lastZoom = scope.object.zoom;

				}

			} else {

				console.warn( 'THREE.TrackballControls: Unsupported camera type' );

			}

		};

		this.reset = function () {

			_state = STATE.NONE;
			_keyState = STATE.NONE;

			scope.target.copy( scope.target0 );
			scope.object.position.copy( scope.position0 );
			scope.object.up.copy( scope.up0 );
			scope.object.zoom = scope.zoom0;

			scope.object.updateProjectionMatrix();

			_eye.subVectors( scope.object.position, scope.target );

			scope.object.lookAt( scope.target );

			scope.dispatchEvent( TrackballControls_changeEvent );

			lastPosition.copy( scope.object.position );
			lastZoom = scope.object.zoom;

		};

		// listeners

		function onPointerDown( event ) {

			if ( scope.enabled === false ) return;

			if ( _pointers.length === 0 ) {

				scope.domElement.setPointerCapture( event.pointerId );

				scope.domElement.addEventListener( 'pointermove', onPointerMove );
				scope.domElement.addEventListener( 'pointerup', onPointerUp );

			}

			//

			addPointer( event );

			if ( event.pointerType === 'touch' ) {

				onTouchStart( event );

			} else {

				onMouseDown( event );

			}

		}

		function onPointerMove( event ) {

			if ( scope.enabled === false ) return;

			if ( event.pointerType === 'touch' ) {

				onTouchMove( event );

			} else {

				onMouseMove( event );

			}

		}

		function onPointerUp( event ) {

			if ( scope.enabled === false ) return;

			if ( event.pointerType === 'touch' ) {

				onTouchEnd( event );

			} else {

				onMouseUp();

			}

			//

			removePointer( event );

			if ( _pointers.length === 0 ) {

				scope.domElement.releasePointerCapture( event.pointerId );

				scope.domElement.removeEventListener( 'pointermove', onPointerMove );
				scope.domElement.removeEventListener( 'pointerup', onPointerUp );

			}


		}

		function onPointerCancel( event ) {

			removePointer( event );

		}

		function keydown( event ) {

			if ( scope.enabled === false ) return;

			window.removeEventListener( 'keydown', keydown );

			if ( _keyState !== STATE.NONE ) {

				return;

			} else if ( event.code === scope.keys[ STATE.ROTATE ] && ! scope.noRotate ) {

				_keyState = STATE.ROTATE;

			} else if ( event.code === scope.keys[ STATE.ZOOM ] && ! scope.noZoom ) {

				_keyState = STATE.ZOOM;

			} else if ( event.code === scope.keys[ STATE.PAN ] && ! scope.noPan ) {

				_keyState = STATE.PAN;

			}

		}

		function keyup() {

			if ( scope.enabled === false ) return;

			_keyState = STATE.NONE;

			window.addEventListener( 'keydown', keydown );

		}

		function onMouseDown( event ) {

			if ( _state === STATE.NONE ) {

				switch ( event.button ) {

					case scope.mouseButtons.LEFT:
						_state = STATE.ROTATE;
						break;

					case scope.mouseButtons.MIDDLE:
						_state = STATE.ZOOM;
						break;

					case scope.mouseButtons.RIGHT:
						_state = STATE.PAN;
						break;

				}

			}

			const state = ( _keyState !== STATE.NONE ) ? _keyState : _state;

			if ( state === STATE.ROTATE && ! scope.noRotate ) {

				_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
				_movePrev.copy( _moveCurr );

			} else if ( state === STATE.ZOOM && ! scope.noZoom ) {

				_zoomStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
				_zoomEnd.copy( _zoomStart );

			} else if ( state === STATE.PAN && ! scope.noPan ) {

				_panStart.copy( getMouseOnScreen( event.pageX, event.pageY ) );
				_panEnd.copy( _panStart );

			}

			scope.dispatchEvent( TrackballControls_startEvent );

		}

		function onMouseMove( event ) {

			const state = ( _keyState !== STATE.NONE ) ? _keyState : _state;

			if ( state === STATE.ROTATE && ! scope.noRotate ) {

				_movePrev.copy( _moveCurr );
				_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );

			} else if ( state === STATE.ZOOM && ! scope.noZoom ) {

				_zoomEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

			} else if ( state === STATE.PAN && ! scope.noPan ) {

				_panEnd.copy( getMouseOnScreen( event.pageX, event.pageY ) );

			}

		}

		function onMouseUp() {

			_state = STATE.NONE;

			scope.dispatchEvent( TrackballControls_endEvent );

		}

		function onMouseWheel( event ) {

			if ( scope.enabled === false ) return;

			if ( scope.noZoom === true ) return;

			event.preventDefault();

			switch ( event.deltaMode ) {

				case 2:
					// Zoom in pages
					_zoomStart.y -= event.deltaY * 0.025;
					break;

				case 1:
					// Zoom in lines
					_zoomStart.y -= event.deltaY * 0.01;
					break;

				default:
					// undefined, 0, assume pixels
					_zoomStart.y -= event.deltaY * 0.00025;
					break;

			}

			scope.dispatchEvent( TrackballControls_startEvent );
			scope.dispatchEvent( TrackballControls_endEvent );

		}

		function onTouchStart( event ) {

			trackPointer( event );

			switch ( _pointers.length ) {

				case 1:
					_state = STATE.TOUCH_ROTATE;
					_moveCurr.copy( getMouseOnCircle( _pointers[ 0 ].pageX, _pointers[ 0 ].pageY ) );
					_movePrev.copy( _moveCurr );
					break;

				default: // 2 or more
					_state = STATE.TOUCH_ZOOM_PAN;
					const dx = _pointers[ 0 ].pageX - _pointers[ 1 ].pageX;
					const dy = _pointers[ 0 ].pageY - _pointers[ 1 ].pageY;
					_touchZoomDistanceEnd = _touchZoomDistanceStart = Math.sqrt( dx * dx + dy * dy );

					const x = ( _pointers[ 0 ].pageX + _pointers[ 1 ].pageX ) / 2;
					const y = ( _pointers[ 0 ].pageY + _pointers[ 1 ].pageY ) / 2;
					_panStart.copy( getMouseOnScreen( x, y ) );
					_panEnd.copy( _panStart );
					break;

			}

			scope.dispatchEvent( TrackballControls_startEvent );

		}

		function onTouchMove( event ) {

			trackPointer( event );

			switch ( _pointers.length ) {

				case 1:
					_movePrev.copy( _moveCurr );
					_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
					break;

				default: // 2 or more

					const position = getSecondPointerPosition( event );

					const dx = event.pageX - position.x;
					const dy = event.pageY - position.y;
					_touchZoomDistanceEnd = Math.sqrt( dx * dx + dy * dy );

					const x = ( event.pageX + position.x ) / 2;
					const y = ( event.pageY + position.y ) / 2;
					_panEnd.copy( getMouseOnScreen( x, y ) );
					break;

			}

		}

		function onTouchEnd( event ) {

			switch ( _pointers.length ) {

				case 0:
					_state = STATE.NONE;
					break;

				case 1:
					_state = STATE.TOUCH_ROTATE;
					_moveCurr.copy( getMouseOnCircle( event.pageX, event.pageY ) );
					_movePrev.copy( _moveCurr );
					break;

				case 2:
					_state = STATE.TOUCH_ZOOM_PAN;

					for ( let i = 0; i < _pointers.length; i ++ ) {

						if ( _pointers[ i ].pointerId !== event.pointerId ) {

							const position = _pointerPositions[ _pointers[ i ].pointerId ];
							_moveCurr.copy( getMouseOnCircle( position.x, position.y ) );
							_movePrev.copy( _moveCurr );
							break;

						}

					}

					break;

			}

			scope.dispatchEvent( TrackballControls_endEvent );

		}

		function contextmenu( event ) {

			if ( scope.enabled === false ) return;

			event.preventDefault();

		}

		function addPointer( event ) {

			_pointers.push( event );

		}

		function removePointer( event ) {

			delete _pointerPositions[ event.pointerId ];

			for ( let i = 0; i < _pointers.length; i ++ ) {

				if ( _pointers[ i ].pointerId == event.pointerId ) {

					_pointers.splice( i, 1 );
					return;

				}

			}

		}

		function trackPointer( event ) {

			let position = _pointerPositions[ event.pointerId ];

			if ( position === undefined ) {

				position = new external_THREE_namespaceObject.Vector2();
				_pointerPositions[ event.pointerId ] = position;

			}

			position.set( event.pageX, event.pageY );

		}

		function getSecondPointerPosition( event ) {

			const pointer = ( event.pointerId === _pointers[ 0 ].pointerId ) ? _pointers[ 1 ] : _pointers[ 0 ];

			return _pointerPositions[ pointer.pointerId ];

		}

		this.dispose = function () {

			scope.domElement.removeEventListener( 'contextmenu', contextmenu );

			scope.domElement.removeEventListener( 'pointerdown', onPointerDown );
			scope.domElement.removeEventListener( 'pointercancel', onPointerCancel );
			scope.domElement.removeEventListener( 'wheel', onMouseWheel );

			scope.domElement.removeEventListener( 'pointermove', onPointerMove );
			scope.domElement.removeEventListener( 'pointerup', onPointerUp );

			window.removeEventListener( 'keydown', keydown );
			window.removeEventListener( 'keyup', keyup );

		};

		this.domElement.addEventListener( 'contextmenu', contextmenu );

		this.domElement.addEventListener( 'pointerdown', onPointerDown );
		this.domElement.addEventListener( 'pointercancel', onPointerCancel );
		this.domElement.addEventListener( 'wheel', onMouseWheel, { passive: false } );


		window.addEventListener( 'keydown', keydown );
		window.addEventListener( 'keyup', keyup );

		this.handleResize();

		// force an update at start
		this.update();

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/controls/PointerLockControls.js


const _euler = new external_THREE_namespaceObject.Euler( 0, 0, 0, 'YXZ' );
const _vector = new external_THREE_namespaceObject.Vector3();

const PointerLockControls_changeEvent = { type: 'change' };
const _lockEvent = { type: 'lock' };
const _unlockEvent = { type: 'unlock' };

const _PI_2 = Math.PI / 2;

class PointerLockControls extends external_THREE_namespaceObject.EventDispatcher {

	constructor( camera, domElement ) {

		super();

		this.domElement = domElement;
		this.isLocked = false;

		// Set to constrain the pitch of the camera
		// Range is 0 to Math.PI radians
		this.minPolarAngle = 0; // radians
		this.maxPolarAngle = Math.PI; // radians

		this.pointerSpeed = 1.0;

		const scope = this;

		function onMouseMove( event ) {

			if ( scope.isLocked === false ) return;

			const movementX = event.movementX || event.mozMovementX || event.webkitMovementX || 0;
			const movementY = event.movementY || event.mozMovementY || event.webkitMovementY || 0;

			_euler.setFromQuaternion( camera.quaternion );

			_euler.y -= movementX * 0.002 * scope.pointerSpeed;
			_euler.x -= movementY * 0.002 * scope.pointerSpeed;

			_euler.x = Math.max( _PI_2 - scope.maxPolarAngle, Math.min( _PI_2 - scope.minPolarAngle, _euler.x ) );

			camera.quaternion.setFromEuler( _euler );

			scope.dispatchEvent( PointerLockControls_changeEvent );

		}

		function onPointerlockChange() {

			if ( scope.domElement.ownerDocument.pointerLockElement === scope.domElement ) {

				scope.dispatchEvent( _lockEvent );

				scope.isLocked = true;

			} else {

				scope.dispatchEvent( _unlockEvent );

				scope.isLocked = false;

			}

		}

		function onPointerlockError() {

			console.error( 'THREE.PointerLockControls: Unable to use Pointer Lock API' );

		}

		this.connect = function () {

			scope.domElement.ownerDocument.addEventListener( 'mousemove', onMouseMove );
			scope.domElement.ownerDocument.addEventListener( 'pointerlockchange', onPointerlockChange );
			scope.domElement.ownerDocument.addEventListener( 'pointerlockerror', onPointerlockError );

		};

		this.disconnect = function () {

			scope.domElement.ownerDocument.removeEventListener( 'mousemove', onMouseMove );
			scope.domElement.ownerDocument.removeEventListener( 'pointerlockchange', onPointerlockChange );
			scope.domElement.ownerDocument.removeEventListener( 'pointerlockerror', onPointerlockError );

		};

		this.dispose = function () {

			this.disconnect();

		};

		this.getObject = function () { // retaining this method for backward compatibility

			return camera;

		};

		this.getDirection = function () {

			const direction = new external_THREE_namespaceObject.Vector3( 0, 0, - 1 );

			return function ( v ) {

				return v.copy( direction ).applyQuaternion( camera.quaternion );

			};

		}();

		this.moveForward = function ( distance ) {

			// move forward parallel to the xz-plane
			// assumes camera.up is y-up

			_vector.setFromMatrixColumn( camera.matrix, 0 );

			_vector.crossVectors( camera.up, _vector );

			camera.position.addScaledVector( _vector, distance );

		};

		this.moveRight = function ( distance ) {

			_vector.setFromMatrixColumn( camera.matrix, 0 );

			camera.position.addScaledVector( _vector, distance );

		};

		this.lock = function () {

			this.domElement.requestPointerLock();

		};

		this.unlock = function () {

			scope.domElement.ownerDocument.exitPointerLock();

		};

		this.connect();

	}

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/controls/ArcballControls.js


//trackball state
const STATE = {

	IDLE: Symbol(),
	ROTATE: Symbol(),
	PAN: Symbol(),
	SCALE: Symbol(),
	FOV: Symbol(),
	FOCUS: Symbol(),
	ZROTATE: Symbol(),
	TOUCH_MULTI: Symbol(),
	ANIMATION_FOCUS: Symbol(),
	ANIMATION_ROTATE: Symbol()

};

const INPUT = {

	NONE: Symbol(),
	ONE_FINGER: Symbol(),
	ONE_FINGER_SWITCHED: Symbol(),
	TWO_FINGER: Symbol(),
	MULT_FINGER: Symbol(),
	CURSOR: Symbol()

};

//cursor center coordinates
const _center = {

	x: 0,
	y: 0

};

//transformation matrices for gizmos and camera
const _transformation = {

	camera: new external_THREE_namespaceObject.Matrix4(),
	gizmos: new external_THREE_namespaceObject.Matrix4()

};

//events
const ArcballControls_changeEvent = { type: 'change' };
const ArcballControls_startEvent = { type: 'start' };
const ArcballControls_endEvent = { type: 'end' };

const _raycaster = new external_THREE_namespaceObject.Raycaster();
const _offset = new external_THREE_namespaceObject.Vector3();

const _gizmoMatrixStateTemp = new external_THREE_namespaceObject.Matrix4();
const _cameraMatrixStateTemp = new external_THREE_namespaceObject.Matrix4();
const _scalePointTemp = new external_THREE_namespaceObject.Vector3();
/**
 *
 * @param {Camera} camera Virtual camera used in the scene
 * @param {HTMLElement} domElement Renderer's dom element
 * @param {Scene} scene The scene to be rendered
 */
class ArcballControls extends external_THREE_namespaceObject.EventDispatcher {

	constructor( camera, domElement, scene = null ) {

		super();
		this.camera = null;
		this.domElement = domElement;
		this.scene = scene;
		this.target = new external_THREE_namespaceObject.Vector3();
		this._currentTarget = new external_THREE_namespaceObject.Vector3();
		this.radiusFactor = 0.67;

		this.mouseActions = [];
		this._mouseOp = null;


		//global vectors and matrices that are used in some operations to avoid creating new objects every time (e.g. every time cursor moves)
		this._v2_1 = new external_THREE_namespaceObject.Vector2();
		this._v3_1 = new external_THREE_namespaceObject.Vector3();
		this._v3_2 = new external_THREE_namespaceObject.Vector3();

		this._m4_1 = new external_THREE_namespaceObject.Matrix4();
		this._m4_2 = new external_THREE_namespaceObject.Matrix4();

		this._quat = new external_THREE_namespaceObject.Quaternion();

		//transformation matrices
		this._translationMatrix = new external_THREE_namespaceObject.Matrix4(); //matrix for translation operation
		this._rotationMatrix = new external_THREE_namespaceObject.Matrix4(); //matrix for rotation operation
		this._scaleMatrix = new external_THREE_namespaceObject.Matrix4(); //matrix for scaling operation

		this._rotationAxis = new external_THREE_namespaceObject.Vector3(); //axis for rotate operation


		//camera state
		this._cameraMatrixState = new external_THREE_namespaceObject.Matrix4();
		this._cameraProjectionState = new external_THREE_namespaceObject.Matrix4();

		this._fovState = 1;
		this._upState = new external_THREE_namespaceObject.Vector3();
		this._zoomState = 1;
		this._nearPos = 0;
		this._farPos = 0;

		this._gizmoMatrixState = new external_THREE_namespaceObject.Matrix4();

		//initial values
		this._up0 = new external_THREE_namespaceObject.Vector3();
		this._zoom0 = 1;
		this._fov0 = 0;
		this._initialNear = 0;
		this._nearPos0 = 0;
		this._initialFar = 0;
		this._farPos0 = 0;
		this._cameraMatrixState0 = new external_THREE_namespaceObject.Matrix4();
		this._gizmoMatrixState0 = new external_THREE_namespaceObject.Matrix4();

		//pointers array
		this._button = - 1;
		this._touchStart = [];
		this._touchCurrent = [];
		this._input = INPUT.NONE;

		//two fingers touch interaction
		this._switchSensibility = 32;	//minimum movement to be performed to fire single pan start after the second finger has been released
		this._startFingerDistance = 0; //distance between two fingers
		this._currentFingerDistance = 0;
		this._startFingerRotation = 0; //amount of rotation performed with two fingers
		this._currentFingerRotation = 0;

		//double tap
		this._devPxRatio = 0;
		this._downValid = true;
		this._nclicks = 0;
		this._downEvents = [];
		this._downStart = 0;	//pointerDown time
		this._clickStart = 0;	//first click time
		this._maxDownTime = 250;
		this._maxInterval = 300;
		this._posThreshold = 24;
		this._movementThreshold = 24;

		//cursor positions
		this._currentCursorPosition = new external_THREE_namespaceObject.Vector3();
		this._startCursorPosition = new external_THREE_namespaceObject.Vector3();

		//grid
		this._grid = null; //grid to be visualized during pan operation
		this._gridPosition = new external_THREE_namespaceObject.Vector3();

		//gizmos
		this._gizmos = new external_THREE_namespaceObject.Group();
		this._curvePts = 128;


		//animations
		this._timeStart = - 1; //initial time
		this._animationId = - 1;

		//focus animation
		this.focusAnimationTime = 500; //duration of focus animation in ms

		//rotate animation
		this._timePrev = 0; //time at which previous rotate operation has been detected
		this._timeCurrent = 0; //time at which current rotate operation has been detected
		this._anglePrev = 0; //angle of previous rotation
		this._angleCurrent = 0; //angle of current rotation
		this._cursorPosPrev = new external_THREE_namespaceObject.Vector3();	//cursor position when previous rotate operation has been detected
		this._cursorPosCurr = new external_THREE_namespaceObject.Vector3();//cursor position when current rotate operation has been detected
		this._wPrev = 0; //angular velocity of the previous rotate operation
		this._wCurr = 0; //angular velocity of the current rotate operation


		//parameters
		this.adjustNearFar = false;
		this.scaleFactor = 1.1;	//zoom/distance multiplier
		this.dampingFactor = 25;
		this.wMax = 20;	//maximum angular velocity allowed
		this.enableAnimations = true; //if animations should be performed
		this.enableGrid = false; //if grid should be showed during pan operation
		this.cursorZoom = false;	//if wheel zoom should be cursor centered
		this.minFov = 5;
		this.maxFov = 90;

		this.enabled = true;
		this.enablePan = true;
		this.enableRotate = true;
		this.enableZoom = true;
		this.enableGizmos = true;

		this.minDistance = 0;
		this.maxDistance = Infinity;
		this.minZoom = 0;
		this.maxZoom = Infinity;

		//trackball parameters
		this._tbRadius = 1;

		//FSA
		this._state = STATE.IDLE;

		this.setCamera( camera );

		if ( this.scene != null ) {

			this.scene.add( this._gizmos );

		}

		this.domElement.style.touchAction = 'none';
		this._devPxRatio = window.devicePixelRatio;

		this.initializeMouseActions();

		this.domElement.addEventListener( 'contextmenu', this.onContextMenu );
		this.domElement.addEventListener( 'wheel', this.onWheel );
		this.domElement.addEventListener( 'pointerdown', this.onPointerDown );
		this.domElement.addEventListener( 'pointercancel', this.onPointerCancel );

		window.addEventListener( 'resize', this.onWindowResize );

	}

	//listeners

	onWindowResize = () => {

		const scale = ( this._gizmos.scale.x + this._gizmos.scale.y + this._gizmos.scale.z ) / 3;
		this._tbRadius = this.calculateTbRadius( this.camera );

		const newRadius = this._tbRadius / scale;
		const curve = new external_THREE_namespaceObject.EllipseCurve( 0, 0, newRadius, newRadius );
		const points = curve.getPoints( this._curvePts );
		const curveGeometry = new external_THREE_namespaceObject.BufferGeometry().setFromPoints( points );


		for ( const gizmo in this._gizmos.children ) {

			this._gizmos.children[ gizmo ].geometry = curveGeometry;

		}

		this.dispatchEvent( ArcballControls_changeEvent );

	};

	onContextMenu = ( event ) => {

		if ( ! this.enabled ) {

			return;

		}

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			if ( this.mouseActions[ i ].mouse == 2 ) {

				//prevent only if button 2 is actually used
				event.preventDefault();
				break;

			}

		}

	};

	onPointerCancel = () => {

		this._touchStart.splice( 0, this._touchStart.length );
		this._touchCurrent.splice( 0, this._touchCurrent.length );
		this._input = INPUT.NONE;

	};

	onPointerDown = ( event ) => {

		if ( event.button == 0 && event.isPrimary ) {

			this._downValid = true;
			this._downEvents.push( event );
			this._downStart = performance.now();

		} else {

			this._downValid = false;

		}

		if ( event.pointerType == 'touch' && this._input != INPUT.CURSOR ) {

			this._touchStart.push( event );
			this._touchCurrent.push( event );

			switch ( this._input ) {

				case INPUT.NONE:

					//singleStart
					this._input = INPUT.ONE_FINGER;
					this.onSinglePanStart( event, 'ROTATE' );

					window.addEventListener( 'pointermove', this.onPointerMove );
					window.addEventListener( 'pointerup', this.onPointerUp );

					break;

				case INPUT.ONE_FINGER:
				case INPUT.ONE_FINGER_SWITCHED:

					//doubleStart
					this._input = INPUT.TWO_FINGER;

					this.onRotateStart();
					this.onPinchStart();
					this.onDoublePanStart();

					break;

				case INPUT.TWO_FINGER:

					//multipleStart
					this._input = INPUT.MULT_FINGER;
					this.onTriplePanStart( event );
					break;

			}

		} else if ( event.pointerType != 'touch' && this._input == INPUT.NONE ) {

			let modifier = null;

			if ( event.ctrlKey || event.metaKey ) {

				modifier = 'CTRL';

			} else if ( event.shiftKey ) {

				modifier = 'SHIFT';

			}

			this._mouseOp = this.getOpFromAction( event.button, modifier );
			if ( this._mouseOp != null ) {

				window.addEventListener( 'pointermove', this.onPointerMove );
				window.addEventListener( 'pointerup', this.onPointerUp );

				//singleStart
				this._input = INPUT.CURSOR;
				this._button = event.button;
				this.onSinglePanStart( event, this._mouseOp );

			}

		}

	};

	onPointerMove = ( event ) => {

		if ( event.pointerType == 'touch' && this._input != INPUT.CURSOR ) {

			switch ( this._input ) {

				case INPUT.ONE_FINGER:

					//singleMove
					this.updateTouchEvent( event );

					this.onSinglePanMove( event, STATE.ROTATE );
					break;

				case INPUT.ONE_FINGER_SWITCHED:

					const movement = this.calculatePointersDistance( this._touchCurrent[ 0 ], event ) * this._devPxRatio;

					if ( movement >= this._switchSensibility ) {

						//singleMove
						this._input = INPUT.ONE_FINGER;
						this.updateTouchEvent( event );

						this.onSinglePanStart( event, 'ROTATE' );
						break;

					}

					break;

				case INPUT.TWO_FINGER:

					//rotate/pan/pinchMove
					this.updateTouchEvent( event );

					this.onRotateMove();
					this.onPinchMove();
					this.onDoublePanMove();

					break;

				case INPUT.MULT_FINGER:

					//multMove
					this.updateTouchEvent( event );

					this.onTriplePanMove( event );
					break;

			}

		} else if ( event.pointerType != 'touch' && this._input == INPUT.CURSOR ) {

			let modifier = null;

			if ( event.ctrlKey || event.metaKey ) {

				modifier = 'CTRL';

			} else if ( event.shiftKey ) {

				modifier = 'SHIFT';

			}

			const mouseOpState = this.getOpStateFromAction( this._button, modifier );

			if ( mouseOpState != null ) {

				this.onSinglePanMove( event, mouseOpState );

			}

		}

		//checkDistance
		if ( this._downValid ) {

			const movement = this.calculatePointersDistance( this._downEvents[ this._downEvents.length - 1 ], event ) * this._devPxRatio;
			if ( movement > this._movementThreshold ) {

				this._downValid = false;

			}

		}

	};

	onPointerUp = ( event ) => {

		if ( event.pointerType == 'touch' && this._input != INPUT.CURSOR ) {

			const nTouch = this._touchCurrent.length;

			for ( let i = 0; i < nTouch; i ++ ) {

				if ( this._touchCurrent[ i ].pointerId == event.pointerId ) {

					this._touchCurrent.splice( i, 1 );
					this._touchStart.splice( i, 1 );
					break;

				}

			}

			switch ( this._input ) {

				case INPUT.ONE_FINGER:
				case INPUT.ONE_FINGER_SWITCHED:

					//singleEnd
					window.removeEventListener( 'pointermove', this.onPointerMove );
					window.removeEventListener( 'pointerup', this.onPointerUp );

					this._input = INPUT.NONE;
					this.onSinglePanEnd();

					break;

				case INPUT.TWO_FINGER:

					//doubleEnd
					this.onDoublePanEnd( event );
					this.onPinchEnd( event );
					this.onRotateEnd( event );

					//switching to singleStart
					this._input = INPUT.ONE_FINGER_SWITCHED;

					break;

				case INPUT.MULT_FINGER:

					if ( this._touchCurrent.length == 0 ) {

						window.removeEventListener( 'pointermove', this.onPointerMove );
						window.removeEventListener( 'pointerup', this.onPointerUp );

						//multCancel
						this._input = INPUT.NONE;
						this.onTriplePanEnd();

					}

					break;

			}

		} else if ( event.pointerType != 'touch' && this._input == INPUT.CURSOR ) {

			window.removeEventListener( 'pointermove', this.onPointerMove );
			window.removeEventListener( 'pointerup', this.onPointerUp );

			this._input = INPUT.NONE;
			this.onSinglePanEnd();
			this._button = - 1;

		}

		if ( event.isPrimary ) {

			if ( this._downValid ) {

				const downTime = event.timeStamp - this._downEvents[ this._downEvents.length - 1 ].timeStamp;

				if ( downTime <= this._maxDownTime ) {

					if ( this._nclicks == 0 ) {

						//first valid click detected
						this._nclicks = 1;
						this._clickStart = performance.now();

					} else {

						const clickInterval = event.timeStamp - this._clickStart;
						const movement = this.calculatePointersDistance( this._downEvents[ 1 ], this._downEvents[ 0 ] ) * this._devPxRatio;

						if ( clickInterval <= this._maxInterval && movement <= this._posThreshold ) {

							//second valid click detected
							//fire double tap and reset values
							this._nclicks = 0;
							this._downEvents.splice( 0, this._downEvents.length );
							this.onDoubleTap( event );

						} else {

							//new 'first click'
							this._nclicks = 1;
							this._downEvents.shift();
							this._clickStart = performance.now();

						}

					}

				} else {

					this._downValid = false;
					this._nclicks = 0;
					this._downEvents.splice( 0, this._downEvents.length );

				}

			} else {

				this._nclicks = 0;
				this._downEvents.splice( 0, this._downEvents.length );

			}

		}

	};

	onWheel = ( event ) => {

		if ( this.enabled && this.enableZoom ) {

			let modifier = null;

			if ( event.ctrlKey || event.metaKey ) {

				modifier = 'CTRL';

			} else if ( event.shiftKey ) {

				modifier = 'SHIFT';

			}

			const mouseOp = this.getOpFromAction( 'WHEEL', modifier );

			if ( mouseOp != null ) {

				event.preventDefault();
				this.dispatchEvent( ArcballControls_startEvent );

				const notchDeltaY = 125; //distance of one notch of mouse wheel
				let sgn = event.deltaY / notchDeltaY;

				let size = 1;

				if ( sgn > 0 ) {

					size = 1 / this.scaleFactor;

				} else if ( sgn < 0 ) {

					size = this.scaleFactor;

				}

				switch ( mouseOp ) {

					case 'ZOOM':

						this.updateTbState( STATE.SCALE, true );

						if ( sgn > 0 ) {

							size = 1 / ( Math.pow( this.scaleFactor, sgn ) );

						} else if ( sgn < 0 ) {

							size = Math.pow( this.scaleFactor, - sgn );

						}

						if ( this.cursorZoom && this.enablePan ) {

							let scalePoint;

							if ( this.camera.isOrthographicCamera ) {

								scalePoint = this.unprojectOnTbPlane( this.camera, event.clientX, event.clientY, this.domElement ).applyQuaternion( this.camera.quaternion ).multiplyScalar( 1 / this.camera.zoom ).add( this._gizmos.position );

							} else if ( this.camera.isPerspectiveCamera ) {

								scalePoint = this.unprojectOnTbPlane( this.camera, event.clientX, event.clientY, this.domElement ).applyQuaternion( this.camera.quaternion ).add( this._gizmos.position );

							}

							this.applyTransformMatrix( this.scale( size, scalePoint ) );

						} else {

							this.applyTransformMatrix( this.scale( size, this._gizmos.position ) );

						}

						if ( this._grid != null ) {

							this.disposeGrid();
							this.drawGrid();

						}

						this.updateTbState( STATE.IDLE, false );

						this.dispatchEvent( ArcballControls_changeEvent );
						this.dispatchEvent( ArcballControls_endEvent );

						break;

					case 'FOV':

						if ( this.camera.isPerspectiveCamera ) {

							this.updateTbState( STATE.FOV, true );


							//Vertigo effect

							//	  fov / 2
							//		|\
							//		| \
							//		|  \
							//	x	|	\
							//		| 	 \
							//		| 	  \
							//		| _ _ _\
							//			y

							//check for iOs shift shortcut
							if ( event.deltaX != 0 ) {

								sgn = event.deltaX / notchDeltaY;

								size = 1;

								if ( sgn > 0 ) {

									size = 1 / ( Math.pow( this.scaleFactor, sgn ) );

								} else if ( sgn < 0 ) {

									size = Math.pow( this.scaleFactor, - sgn );

								}

							}

							this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
							const x = this._v3_1.distanceTo( this._gizmos.position );
							let xNew = x / size;	//distance between camera and gizmos if scale(size, scalepoint) would be performed

							//check min and max distance
							xNew = external_THREE_namespaceObject.MathUtils.clamp( xNew, this.minDistance, this.maxDistance );

							const y = x * Math.tan( external_THREE_namespaceObject.MathUtils.DEG2RAD * this.camera.fov * 0.5 );

							//calculate new fov
							let newFov = external_THREE_namespaceObject.MathUtils.RAD2DEG * ( Math.atan( y / xNew ) * 2 );

							//check min and max fov
							if ( newFov > this.maxFov ) {

								newFov = this.maxFov;

							} else if ( newFov < this.minFov ) {

								newFov = this.minFov;

							}

							const newDistance = y / Math.tan( external_THREE_namespaceObject.MathUtils.DEG2RAD * ( newFov / 2 ) );
							size = x / newDistance;

							this.setFov( newFov );
							this.applyTransformMatrix( this.scale( size, this._gizmos.position, false ) );

						}

						if ( this._grid != null ) {

							this.disposeGrid();
							this.drawGrid();

						}

						this.updateTbState( STATE.IDLE, false );

						this.dispatchEvent( ArcballControls_changeEvent );
						this.dispatchEvent( ArcballControls_endEvent );

						break;

				}

			}

		}

	};

	onSinglePanStart = ( event, operation ) => {

		if ( this.enabled ) {

			this.dispatchEvent( ArcballControls_startEvent );

			this.setCenter( event.clientX, event.clientY );

			switch ( operation ) {

				case 'PAN':

					if ( ! this.enablePan ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

						this.activateGizmos( false );
						this.dispatchEvent( ArcballControls_changeEvent );

					}

					this.updateTbState( STATE.PAN, true );
					this._startCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ) );
					if ( this.enableGrid ) {

						this.drawGrid();
						this.dispatchEvent( ArcballControls_changeEvent );

					}

					break;

				case 'ROTATE':

					if ( ! this.enableRotate ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

					}

					this.updateTbState( STATE.ROTATE, true );
					this._startCursorPosition.copy( this.unprojectOnTbSurface( this.camera, _center.x, _center.y, this.domElement, this._tbRadius ) );
					this.activateGizmos( true );
					if ( this.enableAnimations ) {

						this._timePrev = this._timeCurrent = performance.now();
						this._angleCurrent = this._anglePrev = 0;
						this._cursorPosPrev.copy( this._startCursorPosition );
						this._cursorPosCurr.copy( this._cursorPosPrev );
						this._wCurr = 0;
						this._wPrev = this._wCurr;

					}

					this.dispatchEvent( ArcballControls_changeEvent );
					break;

				case 'FOV':

					if ( ! this.camera.isPerspectiveCamera || ! this.enableZoom ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

						this.activateGizmos( false );
						this.dispatchEvent( ArcballControls_changeEvent );

					}

					this.updateTbState( STATE.FOV, true );
					this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
					this._currentCursorPosition.copy( this._startCursorPosition );
					break;

				case 'ZOOM':

					if ( ! this.enableZoom ) {

						return;

					}

					if ( this._animationId != - 1 ) {

						cancelAnimationFrame( this._animationId );
						this._animationId = - 1;
						this._timeStart = - 1;

						this.activateGizmos( false );
						this.dispatchEvent( ArcballControls_changeEvent );

					}

					this.updateTbState( STATE.SCALE, true );
					this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
					this._currentCursorPosition.copy( this._startCursorPosition );
					break;

			}

		}

	};

	onSinglePanMove = ( event, opState ) => {

		if ( this.enabled ) {

			const restart = opState != this._state;
			this.setCenter( event.clientX, event.clientY );

			switch ( opState ) {

				case STATE.PAN:

					if ( this.enablePan ) {

						if ( restart ) {

							//switch to pan operation

							this.dispatchEvent( ArcballControls_endEvent );
							this.dispatchEvent( ArcballControls_startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ) );
							if ( this.enableGrid ) {

								this.drawGrid();

							}

							this.activateGizmos( false );

						} else {

							//continue with pan operation
							this._currentCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ) );
							this.applyTransformMatrix( this.pan( this._startCursorPosition, this._currentCursorPosition ) );

						}

					}

					break;

				case STATE.ROTATE:

					if ( this.enableRotate ) {

						if ( restart ) {

							//switch to rotate operation

							this.dispatchEvent( ArcballControls_endEvent );
							this.dispatchEvent( ArcballControls_startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.copy( this.unprojectOnTbSurface( this.camera, _center.x, _center.y, this.domElement, this._tbRadius ) );

							if ( this.enableGrid ) {

								this.disposeGrid();

							}

							this.activateGizmos( true );

						} else {

							//continue with rotate operation
							this._currentCursorPosition.copy( this.unprojectOnTbSurface( this.camera, _center.x, _center.y, this.domElement, this._tbRadius ) );

							const distance = this._startCursorPosition.distanceTo( this._currentCursorPosition );
							const angle = this._startCursorPosition.angleTo( this._currentCursorPosition );
							const amount = Math.max( distance / this._tbRadius, angle ); //effective rotation angle

							this.applyTransformMatrix( this.rotate( this.calculateRotationAxis( this._startCursorPosition, this._currentCursorPosition ), amount ) );

							if ( this.enableAnimations ) {

								this._timePrev = this._timeCurrent;
								this._timeCurrent = performance.now();
								this._anglePrev = this._angleCurrent;
								this._angleCurrent = amount;
								this._cursorPosPrev.copy( this._cursorPosCurr );
								this._cursorPosCurr.copy( this._currentCursorPosition );
								this._wPrev = this._wCurr;
								this._wCurr = this.calculateAngularSpeed( this._anglePrev, this._angleCurrent, this._timePrev, this._timeCurrent );

							}

						}

					}

					break;

				case STATE.SCALE:

					if ( this.enableZoom ) {

						if ( restart ) {

							//switch to zoom operation

							this.dispatchEvent( ArcballControls_endEvent );
							this.dispatchEvent( ArcballControls_startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
							this._currentCursorPosition.copy( this._startCursorPosition );

							if ( this.enableGrid ) {

								this.disposeGrid();

							}

							this.activateGizmos( false );

						} else {

							//continue with zoom operation
							const screenNotches = 8;	//how many wheel notches corresponds to a full screen pan
							this._currentCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );

							const movement = this._currentCursorPosition.y - this._startCursorPosition.y;

							let size = 1;

							if ( movement < 0 ) {

								size = 1 / ( Math.pow( this.scaleFactor, - movement * screenNotches ) );

							} else if ( movement > 0 ) {

								size = Math.pow( this.scaleFactor, movement * screenNotches );

							}

							this._v3_1.setFromMatrixPosition( this._gizmoMatrixState );

							this.applyTransformMatrix( this.scale( size, this._v3_1 ) );

						}

					}

					break;

				case STATE.FOV:

					if ( this.enableZoom && this.camera.isPerspectiveCamera ) {

						if ( restart ) {

							//switch to fov operation

							this.dispatchEvent( ArcballControls_endEvent );
							this.dispatchEvent( ArcballControls_startEvent );

							this.updateTbState( opState, true );
							this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
							this._currentCursorPosition.copy( this._startCursorPosition );

							if ( this.enableGrid ) {

								this.disposeGrid();

							}

							this.activateGizmos( false );

						} else {

							//continue with fov operation
							const screenNotches = 8;	//how many wheel notches corresponds to a full screen pan
							this._currentCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );

							const movement = this._currentCursorPosition.y - this._startCursorPosition.y;

							let size = 1;

							if ( movement < 0 ) {

								size = 1 / ( Math.pow( this.scaleFactor, - movement * screenNotches ) );

							} else if ( movement > 0 ) {

								size = Math.pow( this.scaleFactor, movement * screenNotches );

							}

							this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
							const x = this._v3_1.distanceTo( this._gizmos.position );
							let xNew = x / size; //distance between camera and gizmos if scale(size, scalepoint) would be performed

							//check min and max distance
							xNew = external_THREE_namespaceObject.MathUtils.clamp( xNew, this.minDistance, this.maxDistance );

							const y = x * Math.tan( external_THREE_namespaceObject.MathUtils.DEG2RAD * this._fovState * 0.5 );

							//calculate new fov
							let newFov = external_THREE_namespaceObject.MathUtils.RAD2DEG * ( Math.atan( y / xNew ) * 2 );

							//check min and max fov
							newFov = external_THREE_namespaceObject.MathUtils.clamp( newFov, this.minFov, this.maxFov );

							const newDistance = y / Math.tan( external_THREE_namespaceObject.MathUtils.DEG2RAD * ( newFov / 2 ) );
							size = x / newDistance;
							this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );

							this.setFov( newFov );
							this.applyTransformMatrix( this.scale( size, this._v3_2, false ) );

							//adjusting distance
							_offset.copy( this._gizmos.position ).sub( this.camera.position ).normalize().multiplyScalar( newDistance / x );
							this._m4_1.makeTranslation( _offset.x, _offset.y, _offset.z );

						}

					}

					break;

			}

			this.dispatchEvent( ArcballControls_changeEvent );

		}

	};

	onSinglePanEnd = () => {

		if ( this._state == STATE.ROTATE ) {


			if ( ! this.enableRotate ) {

				return;

			}

			if ( this.enableAnimations ) {

				//perform rotation animation
				const deltaTime = ( performance.now() - this._timeCurrent );
				if ( deltaTime < 120 ) {

					const w = Math.abs( ( this._wPrev + this._wCurr ) / 2 );

					const self = this;
					this._animationId = window.requestAnimationFrame( function ( t ) {

						self.updateTbState( STATE.ANIMATION_ROTATE, true );
						const rotationAxis = self.calculateRotationAxis( self._cursorPosPrev, self._cursorPosCurr );

						self.onRotationAnim( t, rotationAxis, Math.min( w, self.wMax ) );

					} );

				} else {

					//cursor has been standing still for over 120 ms since last movement
					this.updateTbState( STATE.IDLE, false );
					this.activateGizmos( false );
					this.dispatchEvent( ArcballControls_changeEvent );

				}

			} else {

				this.updateTbState( STATE.IDLE, false );
				this.activateGizmos( false );
				this.dispatchEvent( ArcballControls_changeEvent );

			}

		} else if ( this._state == STATE.PAN || this._state == STATE.IDLE ) {

			this.updateTbState( STATE.IDLE, false );

			if ( this.enableGrid ) {

				this.disposeGrid();

			}

			this.activateGizmos( false );
			this.dispatchEvent( ArcballControls_changeEvent );


		}

		this.dispatchEvent( ArcballControls_endEvent );

	};

	onDoubleTap = ( event ) => {

		if ( this.enabled && this.enablePan && this.scene != null ) {

			this.dispatchEvent( ArcballControls_startEvent );

			this.setCenter( event.clientX, event.clientY );
			const hitP = this.unprojectOnObj( this.getCursorNDC( _center.x, _center.y, this.domElement ), this.camera );

			if ( hitP != null && this.enableAnimations ) {

				const self = this;
				if ( this._animationId != - 1 ) {

					window.cancelAnimationFrame( this._animationId );

				}

				this._timeStart = - 1;
				this._animationId = window.requestAnimationFrame( function ( t ) {

					self.updateTbState( STATE.ANIMATION_FOCUS, true );
					self.onFocusAnim( t, hitP, self._cameraMatrixState, self._gizmoMatrixState );

				} );

			} else if ( hitP != null && ! this.enableAnimations ) {

				this.updateTbState( STATE.FOCUS, true );
				this.focus( hitP, this.scaleFactor );
				this.updateTbState( STATE.IDLE, false );
				this.dispatchEvent( ArcballControls_changeEvent );

			}

		}

		this.dispatchEvent( ArcballControls_endEvent );

	};

	onDoublePanStart = () => {

		if ( this.enabled && this.enablePan ) {

			this.dispatchEvent( ArcballControls_startEvent );

			this.updateTbState( STATE.PAN, true );

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );
			this._startCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement, true ) );
			this._currentCursorPosition.copy( this._startCursorPosition );

			this.activateGizmos( false );

		}

	};

	onDoublePanMove = () => {

		if ( this.enabled && this.enablePan ) {

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );

			if ( this._state != STATE.PAN ) {

				this.updateTbState( STATE.PAN, true );
				this._startCursorPosition.copy( this._currentCursorPosition );

			}

			this._currentCursorPosition.copy( this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement, true ) );
			this.applyTransformMatrix( this.pan( this._startCursorPosition, this._currentCursorPosition, true ) );
			this.dispatchEvent( ArcballControls_changeEvent );

		}

	};

	onDoublePanEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.dispatchEvent( ArcballControls_endEvent );

	};


	onRotateStart = () => {

		if ( this.enabled && this.enableRotate ) {

			this.dispatchEvent( ArcballControls_startEvent );

			this.updateTbState( STATE.ZROTATE, true );

			//this._startFingerRotation = event.rotation;

			this._startFingerRotation = this.getAngle( this._touchCurrent[ 1 ], this._touchCurrent[ 0 ] ) + this.getAngle( this._touchStart[ 1 ], this._touchStart[ 0 ] );
			this._currentFingerRotation = this._startFingerRotation;

			this.camera.getWorldDirection( this._rotationAxis ); //rotation axis

			if ( ! this.enablePan && ! this.enableZoom ) {

				this.activateGizmos( true );

			}

		}

	};

	onRotateMove = () => {

		if ( this.enabled && this.enableRotate ) {

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );
			let rotationPoint;

			if ( this._state != STATE.ZROTATE ) {

				this.updateTbState( STATE.ZROTATE, true );
				this._startFingerRotation = this._currentFingerRotation;

			}

			//this._currentFingerRotation = event.rotation;
			this._currentFingerRotation = this.getAngle( this._touchCurrent[ 1 ], this._touchCurrent[ 0 ] ) + this.getAngle( this._touchStart[ 1 ], this._touchStart[ 0 ] );

			if ( ! this.enablePan ) {

				rotationPoint = new external_THREE_namespaceObject.Vector3().setFromMatrixPosition( this._gizmoMatrixState );

			} else {

				this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );
				rotationPoint = this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement ).applyQuaternion( this.camera.quaternion ).multiplyScalar( 1 / this.camera.zoom ).add( this._v3_2 );

			}

			const amount = external_THREE_namespaceObject.MathUtils.DEG2RAD * ( this._startFingerRotation - this._currentFingerRotation );

			this.applyTransformMatrix( this.zRotate( rotationPoint, amount ) );
			this.dispatchEvent( ArcballControls_changeEvent );

		}

	};

	onRotateEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.activateGizmos( false );
		this.dispatchEvent( ArcballControls_endEvent );

	};

	onPinchStart = () => {

		if ( this.enabled && this.enableZoom ) {

			this.dispatchEvent( ArcballControls_startEvent );
			this.updateTbState( STATE.SCALE, true );

			this._startFingerDistance = this.calculatePointersDistance( this._touchCurrent[ 0 ], this._touchCurrent[ 1 ] );
			this._currentFingerDistance = this._startFingerDistance;

			this.activateGizmos( false );

		}

	};

	onPinchMove = () => {

		if ( this.enabled && this.enableZoom ) {

			this.setCenter( ( this._touchCurrent[ 0 ].clientX + this._touchCurrent[ 1 ].clientX ) / 2, ( this._touchCurrent[ 0 ].clientY + this._touchCurrent[ 1 ].clientY ) / 2 );
			const minDistance = 12; //minimum distance between fingers (in css pixels)

			if ( this._state != STATE.SCALE ) {

				this._startFingerDistance = this._currentFingerDistance;
				this.updateTbState( STATE.SCALE, true );

			}

			this._currentFingerDistance = Math.max( this.calculatePointersDistance( this._touchCurrent[ 0 ], this._touchCurrent[ 1 ] ), minDistance * this._devPxRatio );
			const amount = this._currentFingerDistance / this._startFingerDistance;

			let scalePoint;

			if ( ! this.enablePan ) {

				scalePoint = this._gizmos.position;

			} else {

				if ( this.camera.isOrthographicCamera ) {

					scalePoint = this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement )
						.applyQuaternion( this.camera.quaternion )
						.multiplyScalar( 1 / this.camera.zoom )
						.add( this._gizmos.position );

				} else if ( this.camera.isPerspectiveCamera ) {

					scalePoint = this.unprojectOnTbPlane( this.camera, _center.x, _center.y, this.domElement )
						.applyQuaternion( this.camera.quaternion )
						.add( this._gizmos.position );

				}

			}

			this.applyTransformMatrix( this.scale( amount, scalePoint ) );
			this.dispatchEvent( ArcballControls_changeEvent );

		}

	};

	onPinchEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.dispatchEvent( ArcballControls_endEvent );

	};

	onTriplePanStart = () => {

		if ( this.enabled && this.enableZoom ) {

			this.dispatchEvent( ArcballControls_startEvent );

			this.updateTbState( STATE.SCALE, true );

			//const center = event.center;
			let clientX = 0;
			let clientY = 0;
			const nFingers = this._touchCurrent.length;

			for ( let i = 0; i < nFingers; i ++ ) {

				clientX += this._touchCurrent[ i ].clientX;
				clientY += this._touchCurrent[ i ].clientY;

			}

			this.setCenter( clientX / nFingers, clientY / nFingers );

			this._startCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );
			this._currentCursorPosition.copy( this._startCursorPosition );

		}

	};

	onTriplePanMove = () => {

		if ( this.enabled && this.enableZoom ) {

			//	  fov / 2
			//		|\
			//		| \
			//		|  \
			//	x	|	\
			//		| 	 \
			//		| 	  \
			//		| _ _ _\
			//			y

			//const center = event.center;
			let clientX = 0;
			let clientY = 0;
			const nFingers = this._touchCurrent.length;

			for ( let i = 0; i < nFingers; i ++ ) {

				clientX += this._touchCurrent[ i ].clientX;
				clientY += this._touchCurrent[ i ].clientY;

			}

			this.setCenter( clientX / nFingers, clientY / nFingers );

			const screenNotches = 8;	//how many wheel notches corresponds to a full screen pan
			this._currentCursorPosition.setY( this.getCursorNDC( _center.x, _center.y, this.domElement ).y * 0.5 );

			const movement = this._currentCursorPosition.y - this._startCursorPosition.y;

			let size = 1;

			if ( movement < 0 ) {

				size = 1 / ( Math.pow( this.scaleFactor, - movement * screenNotches ) );

			} else if ( movement > 0 ) {

				size = Math.pow( this.scaleFactor, movement * screenNotches );

			}

			this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
			const x = this._v3_1.distanceTo( this._gizmos.position );
			let xNew = x / size; //distance between camera and gizmos if scale(size, scalepoint) would be performed

			//check min and max distance
			xNew = external_THREE_namespaceObject.MathUtils.clamp( xNew, this.minDistance, this.maxDistance );

			const y = x * Math.tan( external_THREE_namespaceObject.MathUtils.DEG2RAD * this._fovState * 0.5 );

			//calculate new fov
			let newFov = external_THREE_namespaceObject.MathUtils.RAD2DEG * ( Math.atan( y / xNew ) * 2 );

			//check min and max fov
			newFov = external_THREE_namespaceObject.MathUtils.clamp( newFov, this.minFov, this.maxFov );

			const newDistance = y / Math.tan( external_THREE_namespaceObject.MathUtils.DEG2RAD * ( newFov / 2 ) );
			size = x / newDistance;
			this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );

			this.setFov( newFov );
			this.applyTransformMatrix( this.scale( size, this._v3_2, false ) );

			//adjusting distance
			_offset.copy( this._gizmos.position ).sub( this.camera.position ).normalize().multiplyScalar( newDistance / x );
			this._m4_1.makeTranslation( _offset.x, _offset.y, _offset.z );

			this.dispatchEvent( ArcballControls_changeEvent );

		}

	};

	onTriplePanEnd = () => {

		this.updateTbState( STATE.IDLE, false );
		this.dispatchEvent( ArcballControls_endEvent );
		//this.dispatchEvent( _changeEvent );

	};

	/**
	 * Set _center's x/y coordinates
	 * @param {Number} clientX
	 * @param {Number} clientY
	 */
	setCenter = ( clientX, clientY ) => {

		_center.x = clientX;
		_center.y = clientY;

	};

	/**
	 * Set default mouse actions
	 */
	initializeMouseActions = () => {

		this.setMouseAction( 'PAN', 0, 'CTRL' );
		this.setMouseAction( 'PAN', 2 );

		this.setMouseAction( 'ROTATE', 0 );

		this.setMouseAction( 'ZOOM', 'WHEEL' );
		this.setMouseAction( 'ZOOM', 1 );

		this.setMouseAction( 'FOV', 'WHEEL', 'SHIFT' );
		this.setMouseAction( 'FOV', 1, 'SHIFT' );


	};

	/**
	 * Compare two mouse actions
	 * @param {Object} action1
	 * @param {Object} action2
	 * @returns {Boolean} True if action1 and action 2 are the same mouse action, false otherwise
	 */
	compareMouseAction = ( action1, action2 ) => {

		if ( action1.operation == action2.operation ) {

			if ( action1.mouse == action2.mouse && action1.key == action2.key ) {

				return true;

			} else {

				return false;

			}

		} else {

			return false;

		}

	};

	/**
	 * Set a new mouse action by specifying the operation to be performed and a mouse/key combination. In case of conflict, replaces the existing one
	 * @param {String} operation The operation to be performed ('PAN', 'ROTATE', 'ZOOM', 'FOV)
	 * @param {*} mouse A mouse button (0, 1, 2) or 'WHEEL' for wheel notches
	 * @param {*} key The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed
	 * @returns {Boolean} True if the mouse action has been successfully added, false otherwise
	 */
	setMouseAction = ( operation, mouse, key = null ) => {

		const operationInput = [ 'PAN', 'ROTATE', 'ZOOM', 'FOV' ];
		const mouseInput = [ 0, 1, 2, 'WHEEL' ];
		const keyInput = [ 'CTRL', 'SHIFT', null ];
		let state;

		if ( ! operationInput.includes( operation ) || ! mouseInput.includes( mouse ) || ! keyInput.includes( key ) ) {

			//invalid parameters
			return false;

		}

		if ( mouse == 'WHEEL' ) {

			if ( operation != 'ZOOM' && operation != 'FOV' ) {

				//cannot associate 2D operation to 1D input
				return false;

			}

		}

		switch ( operation ) {

			case 'PAN':

				state = STATE.PAN;
				break;

			case 'ROTATE':

				state = STATE.ROTATE;
				break;

			case 'ZOOM':

				state = STATE.SCALE;
				break;

			case 'FOV':

				state = STATE.FOV;
				break;

		}

		const action = {

			operation: operation,
			mouse: mouse,
			key: key,
			state: state

		};

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			if ( this.mouseActions[ i ].mouse == action.mouse && this.mouseActions[ i ].key == action.key ) {

				this.mouseActions.splice( i, 1, action );
				return true;

			}

		}

		this.mouseActions.push( action );
		return true;

	};

	/**
	 * Remove a mouse action by specifying its mouse/key combination
	 * @param {*} mouse A mouse button (0, 1, 2) or 'WHEEL' for wheel notches
	 * @param {*} key The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed
	 * @returns {Boolean} True if the operation has been succesfully removed, false otherwise
	 */
	unsetMouseAction = ( mouse, key = null ) => {

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			if ( this.mouseActions[ i ].mouse == mouse && this.mouseActions[ i ].key == key ) {

				this.mouseActions.splice( i, 1 );
				return true;

			}

		}

		return false;

	};

	/**
	 * Return the operation associated to a mouse/keyboard combination
	 * @param {*} mouse A mouse button (0, 1, 2) or 'WHEEL' for wheel notches
	 * @param {*} key The keyboard modifier ('CTRL', 'SHIFT') or null if key is not needed
	 * @returns The operation if it has been found, null otherwise
	 */
	getOpFromAction = ( mouse, key ) => {

		let action;

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			action = this.mouseActions[ i ];
			if ( action.mouse == mouse && action.key == key ) {

				return action.operation;

			}

		}

		if ( key != null ) {

			for ( let i = 0; i < this.mouseActions.length; i ++ ) {

				action = this.mouseActions[ i ];
				if ( action.mouse == mouse && action.key == null ) {

					return action.operation;

				}

			}

		}

		return null;

	};

	/**
	 * Get the operation associated to mouse and key combination and returns the corresponding FSA state
	 * @param {Number} mouse Mouse button
	 * @param {String} key Keyboard modifier
	 * @returns The FSA state obtained from the operation associated to mouse/keyboard combination
	 */
	getOpStateFromAction = ( mouse, key ) => {

		let action;

		for ( let i = 0; i < this.mouseActions.length; i ++ ) {

			action = this.mouseActions[ i ];
			if ( action.mouse == mouse && action.key == key ) {

				return action.state;

			}

		}

		if ( key != null ) {

			for ( let i = 0; i < this.mouseActions.length; i ++ ) {

				action = this.mouseActions[ i ];
				if ( action.mouse == mouse && action.key == null ) {

					return action.state;

				}

			}

		}

		return null;

	};

	/**
	 * Calculate the angle between two pointers
	 * @param {PointerEvent} p1
	 * @param {PointerEvent} p2
	 * @returns {Number} The angle between two pointers in degrees
	 */
	getAngle = ( p1, p2 ) => {

		return Math.atan2( p2.clientY - p1.clientY, p2.clientX - p1.clientX ) * 180 / Math.PI;

	};

	/**
	 * Update a PointerEvent inside current pointerevents array
	 * @param {PointerEvent} event
	 */
	updateTouchEvent = ( event ) => {

		for ( let i = 0; i < this._touchCurrent.length; i ++ ) {

			if ( this._touchCurrent[ i ].pointerId == event.pointerId ) {

				this._touchCurrent.splice( i, 1, event );
				break;

			}

		}

	};

	/**
	 * Apply a transformation matrix, to the camera and gizmos
	 * @param {Object} transformation Object containing matrices to apply to camera and gizmos
	 */
	applyTransformMatrix( transformation ) {

		if ( transformation.camera != null ) {

			this._m4_1.copy( this._cameraMatrixState ).premultiply( transformation.camera );
			this._m4_1.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );
			this.camera.updateMatrix();

			//update camera up vector
			if ( this._state == STATE.ROTATE || this._state == STATE.ZROTATE || this._state == STATE.ANIMATION_ROTATE ) {

				this.camera.up.copy( this._upState ).applyQuaternion( this.camera.quaternion );

			}

		}

		if ( transformation.gizmos != null ) {

			this._m4_1.copy( this._gizmoMatrixState ).premultiply( transformation.gizmos );
			this._m4_1.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );
			this._gizmos.updateMatrix();

		}

		if ( this._state == STATE.SCALE || this._state == STATE.FOCUS || this._state == STATE.ANIMATION_FOCUS ) {

			this._tbRadius = this.calculateTbRadius( this.camera );

			if ( this.adjustNearFar ) {

				const cameraDistance = this.camera.position.distanceTo( this._gizmos.position );

				const bb = new external_THREE_namespaceObject.Box3();
				bb.setFromObject( this._gizmos );
				const sphere = new external_THREE_namespaceObject.Sphere();
				bb.getBoundingSphere( sphere );

				const adjustedNearPosition = Math.max( this._nearPos0, sphere.radius + sphere.center.length() );
				const regularNearPosition = cameraDistance - this._initialNear;

				const minNearPos = Math.min( adjustedNearPosition, regularNearPosition );
				this.camera.near = cameraDistance - minNearPos;


				const adjustedFarPosition = Math.min( this._farPos0, - sphere.radius + sphere.center.length() );
				const regularFarPosition = cameraDistance - this._initialFar;

				const minFarPos = Math.min( adjustedFarPosition, regularFarPosition );
				this.camera.far = cameraDistance - minFarPos;

				this.camera.updateProjectionMatrix();

			} else {

				let update = false;

				if ( this.camera.near != this._initialNear ) {

					this.camera.near = this._initialNear;
					update = true;

				}

				if ( this.camera.far != this._initialFar ) {

					this.camera.far = this._initialFar;
					update = true;

				}

				if ( update ) {

					this.camera.updateProjectionMatrix();

				}

			}

		}

	}

	/**
	 * Calculate the angular speed
	 * @param {Number} p0 Position at t0
	 * @param {Number} p1 Position at t1
	 * @param {Number} t0 Initial time in milliseconds
	 * @param {Number} t1 Ending time in milliseconds
	 */
	calculateAngularSpeed = ( p0, p1, t0, t1 ) => {

		const s = p1 - p0;
		const t = ( t1 - t0 ) / 1000;
		if ( t == 0 ) {

			return 0;

		}

		return s / t;

	};

	/**
	 * Calculate the distance between two pointers
	 * @param {PointerEvent} p0 The first pointer
	 * @param {PointerEvent} p1 The second pointer
	 * @returns {number} The distance between the two pointers
	 */
	calculatePointersDistance = ( p0, p1 ) => {

		return Math.sqrt( Math.pow( p1.clientX - p0.clientX, 2 ) + Math.pow( p1.clientY - p0.clientY, 2 ) );

	};

	/**
	 * Calculate the rotation axis as the vector perpendicular between two vectors
	 * @param {Vector3} vec1 The first vector
	 * @param {Vector3} vec2 The second vector
	 * @returns {Vector3} The normalized rotation axis
	 */
	calculateRotationAxis = ( vec1, vec2 ) => {

		this._rotationMatrix.extractRotation( this._cameraMatrixState );
		this._quat.setFromRotationMatrix( this._rotationMatrix );

		this._rotationAxis.crossVectors( vec1, vec2 ).applyQuaternion( this._quat );
		return this._rotationAxis.normalize().clone();

	};

	/**
	 * Calculate the trackball radius so that gizmo's diamater will be 2/3 of the minimum side of the camera frustum
	 * @param {Camera} camera
	 * @returns {Number} The trackball radius
	 */
	calculateTbRadius = ( camera ) => {

		const distance = camera.position.distanceTo( this._gizmos.position );

		if ( camera.type == 'PerspectiveCamera' ) {

			const halfFovV = external_THREE_namespaceObject.MathUtils.DEG2RAD * camera.fov * 0.5; //vertical fov/2 in radians
			const halfFovH = Math.atan( ( camera.aspect ) * Math.tan( halfFovV ) ); //horizontal fov/2 in radians
			return Math.tan( Math.min( halfFovV, halfFovH ) ) * distance * this.radiusFactor;

		} else if ( camera.type == 'OrthographicCamera' ) {

			return Math.min( camera.top, camera.right ) * this.radiusFactor;

		}

	};

	/**
	 * Focus operation consist of positioning the point of interest in front of the camera and a slightly zoom in
	 * @param {Vector3} point The point of interest
	 * @param {Number} size Scale factor
	 * @param {Number} amount Amount of operation to be completed (used for focus animations, default is complete full operation)
	 */
	focus = ( point, size, amount = 1 ) => {

		//move center of camera (along with gizmos) towards point of interest
		_offset.copy( point ).sub( this._gizmos.position ).multiplyScalar( amount );
		this._translationMatrix.makeTranslation( _offset.x, _offset.y, _offset.z );

		_gizmoMatrixStateTemp.copy( this._gizmoMatrixState );
		this._gizmoMatrixState.premultiply( this._translationMatrix );
		this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

		_cameraMatrixStateTemp.copy( this._cameraMatrixState );
		this._cameraMatrixState.premultiply( this._translationMatrix );
		this._cameraMatrixState.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );

		//apply zoom
		if ( this.enableZoom ) {

			this.applyTransformMatrix( this.scale( size, this._gizmos.position ) );

		}

		this._gizmoMatrixState.copy( _gizmoMatrixStateTemp );
		this._cameraMatrixState.copy( _cameraMatrixStateTemp );

	};

	/**
	 * Draw a grid and add it to the scene
	 */
	drawGrid = () => {

		if ( this.scene != null ) {

			const color = 0x888888;
			const multiplier = 3;
			let size, divisions, maxLength, tick;

			if ( this.camera.isOrthographicCamera ) {

				const width = this.camera.right - this.camera.left;
				const height = this.camera.bottom - this.camera.top;

				maxLength = Math.max( width, height );
				tick = maxLength / 20;

				size = maxLength / this.camera.zoom * multiplier;
				divisions = size / tick * this.camera.zoom;

			} else if ( this.camera.isPerspectiveCamera ) {

				const distance = this.camera.position.distanceTo( this._gizmos.position );
				const halfFovV = external_THREE_namespaceObject.MathUtils.DEG2RAD * this.camera.fov * 0.5;
				const halfFovH = Math.atan( ( this.camera.aspect ) * Math.tan( halfFovV ) );

				maxLength = Math.tan( Math.max( halfFovV, halfFovH ) ) * distance * 2;
				tick = maxLength / 20;

				size = maxLength * multiplier;
				divisions = size / tick;

			}

			if ( this._grid == null ) {

				this._grid = new external_THREE_namespaceObject.GridHelper( size, divisions, color, color );
				this._grid.position.copy( this._gizmos.position );
				this._gridPosition.copy( this._grid.position );
				this._grid.quaternion.copy( this.camera.quaternion );
				this._grid.rotateX( Math.PI * 0.5 );

				this.scene.add( this._grid );

			}

		}

	};

	/**
	 * Remove all listeners, stop animations and clean scene
	 */
	dispose = () => {

		if ( this._animationId != - 1 ) {

			window.cancelAnimationFrame( this._animationId );

		}

		this.domElement.removeEventListener( 'pointerdown', this.onPointerDown );
		this.domElement.removeEventListener( 'pointercancel', this.onPointerCancel );
		this.domElement.removeEventListener( 'wheel', this.onWheel );
		this.domElement.removeEventListener( 'contextmenu', this.onContextMenu );

		window.removeEventListener( 'pointermove', this.onPointerMove );
		window.removeEventListener( 'pointerup', this.onPointerUp );

		window.removeEventListener( 'resize', this.onWindowResize );

		if ( this.scene !== null ) this.scene.remove( this._gizmos );
		this.disposeGrid();

	};

	/**
	 * remove the grid from the scene
	 */
	disposeGrid = () => {

		if ( this._grid != null && this.scene != null ) {

			this.scene.remove( this._grid );
			this._grid = null;

		}

	};

	/**
	 * Compute the easing out cubic function for ease out effect in animation
	 * @param {Number} t The absolute progress of the animation in the bound of 0 (beginning of the) and 1 (ending of animation)
	 * @returns {Number} Result of easing out cubic at time t
	 */
	easeOutCubic = ( t ) => {

		return 1 - Math.pow( 1 - t, 3 );

	};

	/**
	 * Make rotation gizmos more or less visible
	 * @param {Boolean} isActive If true, make gizmos more visible
	 */
	activateGizmos = ( isActive ) => {

		const gizmoX = this._gizmos.children[ 0 ];
		const gizmoY = this._gizmos.children[ 1 ];
		const gizmoZ = this._gizmos.children[ 2 ];

		if ( isActive ) {

			gizmoX.material.setValues( { opacity: 1 } );
			gizmoY.material.setValues( { opacity: 1 } );
			gizmoZ.material.setValues( { opacity: 1 } );

		} else {

			gizmoX.material.setValues( { opacity: 0.6 } );
			gizmoY.material.setValues( { opacity: 0.6 } );
			gizmoZ.material.setValues( { opacity: 0.6 } );

		}

	};

	/**
	 * Calculate the cursor position in NDC
	 * @param {number} x Cursor horizontal coordinate within the canvas
	 * @param {number} y Cursor vertical coordinate within the canvas
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @returns {Vector2} Cursor normalized position inside the canvas
	 */
	getCursorNDC = ( cursorX, cursorY, canvas ) => {

		const canvasRect = canvas.getBoundingClientRect();
		this._v2_1.setX( ( ( cursorX - canvasRect.left ) / canvasRect.width ) * 2 - 1 );
		this._v2_1.setY( ( ( canvasRect.bottom - cursorY ) / canvasRect.height ) * 2 - 1 );
		return this._v2_1.clone();

	};

	/**
	 * Calculate the cursor position inside the canvas x/y coordinates with the origin being in the center of the canvas
	 * @param {Number} x Cursor horizontal coordinate within the canvas
	 * @param {Number} y Cursor vertical coordinate within the canvas
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @returns {Vector2} Cursor position inside the canvas
	 */
	getCursorPosition = ( cursorX, cursorY, canvas ) => {

		this._v2_1.copy( this.getCursorNDC( cursorX, cursorY, canvas ) );
		this._v2_1.x *= ( this.camera.right - this.camera.left ) * 0.5;
		this._v2_1.y *= ( this.camera.top - this.camera.bottom ) * 0.5;
		return this._v2_1.clone();

	};

	/**
	 * Set the camera to be controlled
	 * @param {Camera} camera The virtual camera to be controlled
	 */
	setCamera = ( camera ) => {

		camera.lookAt( this.target );
		camera.updateMatrix();

		//setting state
		if ( camera.type == 'PerspectiveCamera' ) {

			this._fov0 = camera.fov;
			this._fovState = camera.fov;

		}

		this._cameraMatrixState0.copy( camera.matrix );
		this._cameraMatrixState.copy( this._cameraMatrixState0 );
		this._cameraProjectionState.copy( camera.projectionMatrix );
		this._zoom0 = camera.zoom;
		this._zoomState = this._zoom0;

		this._initialNear = camera.near;
		this._nearPos0 = camera.position.distanceTo( this.target ) - camera.near;
		this._nearPos = this._initialNear;

		this._initialFar = camera.far;
		this._farPos0 = camera.position.distanceTo( this.target ) - camera.far;
		this._farPos = this._initialFar;

		this._up0.copy( camera.up );
		this._upState.copy( camera.up );

		this.camera = camera;
		this.camera.updateProjectionMatrix();

		//making gizmos
		this._tbRadius = this.calculateTbRadius( camera );
		this.makeGizmos( this.target, this._tbRadius );

	};

	/**
	 * Set gizmos visibility
	 * @param {Boolean} value Value of gizmos visibility
	 */
	setGizmosVisible( value ) {

		this._gizmos.visible = value;
		this.dispatchEvent( ArcballControls_changeEvent );

	}

	/**
	 * Set gizmos radius factor and redraws gizmos
	 * @param {Float} value Value of radius factor
	 */
	setTbRadius( value ) {

		this.radiusFactor = value;
		this._tbRadius = this.calculateTbRadius( this.camera );

		const curve = new external_THREE_namespaceObject.EllipseCurve( 0, 0, this._tbRadius, this._tbRadius );
		const points = curve.getPoints( this._curvePts );
		const curveGeometry = new external_THREE_namespaceObject.BufferGeometry().setFromPoints( points );


		for ( const gizmo in this._gizmos.children ) {

			this._gizmos.children[ gizmo ].geometry = curveGeometry;

		}

		this.dispatchEvent( ArcballControls_changeEvent );

	}

	/**
	 * Creates the rotation gizmos matching trackball center and radius
	 * @param {Vector3} tbCenter The trackball center
	 * @param {number} tbRadius The trackball radius
	 */
	makeGizmos = ( tbCenter, tbRadius ) => {

		const curve = new external_THREE_namespaceObject.EllipseCurve( 0, 0, tbRadius, tbRadius );
		const points = curve.getPoints( this._curvePts );

		//geometry
		const curveGeometry = new external_THREE_namespaceObject.BufferGeometry().setFromPoints( points );

		//material
		const curveMaterialX = new external_THREE_namespaceObject.LineBasicMaterial( { color: 0xff8080, fog: false, transparent: true, opacity: 0.6 } );
		const curveMaterialY = new external_THREE_namespaceObject.LineBasicMaterial( { color: 0x80ff80, fog: false, transparent: true, opacity: 0.6 } );
		const curveMaterialZ = new external_THREE_namespaceObject.LineBasicMaterial( { color: 0x8080ff, fog: false, transparent: true, opacity: 0.6 } );

		//line
		const gizmoX = new external_THREE_namespaceObject.Line( curveGeometry, curveMaterialX );
		const gizmoY = new external_THREE_namespaceObject.Line( curveGeometry, curveMaterialY );
		const gizmoZ = new external_THREE_namespaceObject.Line( curveGeometry, curveMaterialZ );

		const rotation = Math.PI * 0.5;
		gizmoX.rotation.x = rotation;
		gizmoY.rotation.y = rotation;


		//setting state
		this._gizmoMatrixState0.identity().setPosition( tbCenter );
		this._gizmoMatrixState.copy( this._gizmoMatrixState0 );

		if ( this.camera.zoom !== 1 ) {

			//adapt gizmos size to camera zoom
			const size = 1 / this.camera.zoom;
			this._scaleMatrix.makeScale( size, size, size );
			this._translationMatrix.makeTranslation( - tbCenter.x, - tbCenter.y, - tbCenter.z );

			this._gizmoMatrixState.premultiply( this._translationMatrix ).premultiply( this._scaleMatrix );
			this._translationMatrix.makeTranslation( tbCenter.x, tbCenter.y, tbCenter.z );
			this._gizmoMatrixState.premultiply( this._translationMatrix );

		}

		this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

		//

		this._gizmos.traverse( function ( object ) {

			if ( object.isLine ) {

				object.geometry.dispose();
				object.material.dispose();

			}

		} );

		this._gizmos.clear();

		//

		this._gizmos.add( gizmoX );
		this._gizmos.add( gizmoY );
		this._gizmos.add( gizmoZ );

	};

	/**
	 * Perform animation for focus operation
	 * @param {Number} time Instant in which this function is called as performance.now()
	 * @param {Vector3} point Point of interest for focus operation
	 * @param {Matrix4} cameraMatrix Camera matrix
	 * @param {Matrix4} gizmoMatrix Gizmos matrix
	 */
	onFocusAnim = ( time, point, cameraMatrix, gizmoMatrix ) => {

		if ( this._timeStart == - 1 ) {

			//animation start
			this._timeStart = time;

		}

		if ( this._state == STATE.ANIMATION_FOCUS ) {

			const deltaTime = time - this._timeStart;
			const animTime = deltaTime / this.focusAnimationTime;

			this._gizmoMatrixState.copy( gizmoMatrix );

			if ( animTime >= 1 ) {

				//animation end

				this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

				this.focus( point, this.scaleFactor );

				this._timeStart = - 1;
				this.updateTbState( STATE.IDLE, false );
				this.activateGizmos( false );

				this.dispatchEvent( ArcballControls_changeEvent );

			} else {

				const amount = this.easeOutCubic( animTime );
				const size = ( ( 1 - amount ) + ( this.scaleFactor * amount ) );

				this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );
				this.focus( point, size, amount );

				this.dispatchEvent( ArcballControls_changeEvent );
				const self = this;
				this._animationId = window.requestAnimationFrame( function ( t ) {

					self.onFocusAnim( t, point, cameraMatrix, gizmoMatrix.clone() );

				} );

			}

		} else {

			//interrupt animation

			this._animationId = - 1;
			this._timeStart = - 1;

		}

	};

	/**
	 * Perform animation for rotation operation
	 * @param {Number} time Instant in which this function is called as performance.now()
	 * @param {Vector3} rotationAxis Rotation axis
	 * @param {number} w0 Initial angular velocity
	 */
	onRotationAnim = ( time, rotationAxis, w0 ) => {

		if ( this._timeStart == - 1 ) {

			//animation start
			this._anglePrev = 0;
			this._angleCurrent = 0;
			this._timeStart = time;

		}

		if ( this._state == STATE.ANIMATION_ROTATE ) {

			//w = w0 + alpha * t
			const deltaTime = ( time - this._timeStart ) / 1000;
			const w = w0 + ( ( - this.dampingFactor ) * deltaTime );

			if ( w > 0 ) {

				//tetha = 0.5 * alpha * t^2 + w0 * t + tetha0
				this._angleCurrent = 0.5 * ( - this.dampingFactor ) * Math.pow( deltaTime, 2 ) + w0 * deltaTime + 0;
				this.applyTransformMatrix( this.rotate( rotationAxis, this._angleCurrent ) );
				this.dispatchEvent( ArcballControls_changeEvent );
				const self = this;
				this._animationId = window.requestAnimationFrame( function ( t ) {

					self.onRotationAnim( t, rotationAxis, w0 );

				} );

			} else {

				this._animationId = - 1;
				this._timeStart = - 1;

				this.updateTbState( STATE.IDLE, false );
				this.activateGizmos( false );

				this.dispatchEvent( ArcballControls_changeEvent );

			}

		} else {

			//interrupt animation

			this._animationId = - 1;
			this._timeStart = - 1;

			if ( this._state != STATE.ROTATE ) {

				this.activateGizmos( false );
				this.dispatchEvent( ArcballControls_changeEvent );

			}

		}

	};


	/**
	 * Perform pan operation moving camera between two points
	 * @param {Vector3} p0 Initial point
	 * @param {Vector3} p1 Ending point
	 * @param {Boolean} adjust If movement should be adjusted considering camera distance (Perspective only)
	 */
	pan = ( p0, p1, adjust = false ) => {

		const movement = p0.clone().sub( p1 );

		if ( this.camera.isOrthographicCamera ) {

			//adjust movement amount
			movement.multiplyScalar( 1 / this.camera.zoom );

		} else if ( this.camera.isPerspectiveCamera && adjust ) {

			//adjust movement amount
			this._v3_1.setFromMatrixPosition( this._cameraMatrixState0 );	//camera's initial position
			this._v3_2.setFromMatrixPosition( this._gizmoMatrixState0 );	//gizmo's initial position
			const distanceFactor = this._v3_1.distanceTo( this._v3_2 ) / this.camera.position.distanceTo( this._gizmos.position );
			movement.multiplyScalar( 1 / distanceFactor );

		}

		this._v3_1.set( movement.x, movement.y, 0 ).applyQuaternion( this.camera.quaternion );

		this._m4_1.makeTranslation( this._v3_1.x, this._v3_1.y, this._v3_1.z );

		this.setTransformationMatrices( this._m4_1, this._m4_1 );
		return _transformation;

	};

	/**
	 * Reset trackball
	 */
	reset = () => {

		this.camera.zoom = this._zoom0;

		if ( this.camera.isPerspectiveCamera ) {

			this.camera.fov = this._fov0;

		}

		this.camera.near = this._nearPos;
		this.camera.far = this._farPos;
		this._cameraMatrixState.copy( this._cameraMatrixState0 );
		this._cameraMatrixState.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );
		this.camera.up.copy( this._up0 );

		this.camera.updateMatrix();
		this.camera.updateProjectionMatrix();

		this._gizmoMatrixState.copy( this._gizmoMatrixState0 );
		this._gizmoMatrixState0.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );
		this._gizmos.updateMatrix();

		this._tbRadius = this.calculateTbRadius( this.camera );
		this.makeGizmos( this._gizmos.position, this._tbRadius );

		this.camera.lookAt( this._gizmos.position );

		this.updateTbState( STATE.IDLE, false );

		this.dispatchEvent( ArcballControls_changeEvent );

	};

	/**
	 * Rotate the camera around an axis passing by trackball's center
	 * @param {Vector3} axis Rotation axis
	 * @param {number} angle Angle in radians
	 * @returns {Object} Object with 'camera' field containing transformation matrix resulting from the operation to be applied to the camera
	 */
	rotate = ( axis, angle ) => {

		const point = this._gizmos.position; //rotation center
		this._translationMatrix.makeTranslation( - point.x, - point.y, - point.z );
		this._rotationMatrix.makeRotationAxis( axis, - angle );

		//rotate camera
		this._m4_1.makeTranslation( point.x, point.y, point.z );
		this._m4_1.multiply( this._rotationMatrix );
		this._m4_1.multiply( this._translationMatrix );

		this.setTransformationMatrices( this._m4_1 );

		return _transformation;

	};

	copyState = () => {

		let state;
		if ( this.camera.isOrthographicCamera ) {

			state = JSON.stringify( { arcballState: {

				cameraFar: this.camera.far,
				cameraMatrix: this.camera.matrix,
				cameraNear: this.camera.near,
				cameraUp: this.camera.up,
				cameraZoom: this.camera.zoom,
				gizmoMatrix: this._gizmos.matrix

			} } );

		} else if ( this.camera.isPerspectiveCamera ) {

			state = JSON.stringify( { arcballState: {
				cameraFar: this.camera.far,
				cameraFov: this.camera.fov,
				cameraMatrix: this.camera.matrix,
				cameraNear: this.camera.near,
				cameraUp: this.camera.up,
				cameraZoom: this.camera.zoom,
				gizmoMatrix: this._gizmos.matrix

			} } );

		}

		navigator.clipboard.writeText( state );

	};

	pasteState = () => {

		const self = this;
		navigator.clipboard.readText().then( function resolved( value ) {

			self.setStateFromJSON( value );

		} );

	};

	/**
	 * Save the current state of the control. This can later be recover with .reset
	 */
	saveState = () => {

		this._cameraMatrixState0.copy( this.camera.matrix );
		this._gizmoMatrixState0.copy( this._gizmos.matrix );
		this._nearPos = this.camera.near;
		this._farPos = this.camera.far;
		this._zoom0 = this.camera.zoom;
		this._up0.copy( this.camera.up );

		if ( this.camera.isPerspectiveCamera ) {

			this._fov0 = this.camera.fov;

		}

	};

	/**
	 * Perform uniform scale operation around a given point
	 * @param {Number} size Scale factor
	 * @param {Vector3} point Point around which scale
	 * @param {Boolean} scaleGizmos If gizmos should be scaled (Perspective only)
	 * @returns {Object} Object with 'camera' and 'gizmo' fields containing transformation matrices resulting from the operation to be applied to the camera and gizmos
	 */
	scale = ( size, point, scaleGizmos = true ) => {

		_scalePointTemp.copy( point );
		let sizeInverse = 1 / size;

		if ( this.camera.isOrthographicCamera ) {

			//camera zoom
			this.camera.zoom = this._zoomState;
			this.camera.zoom *= size;

			//check min and max zoom
			if ( this.camera.zoom > this.maxZoom ) {

				this.camera.zoom = this.maxZoom;
				sizeInverse = this._zoomState / this.maxZoom;

			} else if ( this.camera.zoom < this.minZoom ) {

				this.camera.zoom = this.minZoom;
				sizeInverse = this._zoomState / this.minZoom;

			}

			this.camera.updateProjectionMatrix();

			this._v3_1.setFromMatrixPosition( this._gizmoMatrixState );	//gizmos position

			//scale gizmos so they appear in the same spot having the same dimension
			this._scaleMatrix.makeScale( sizeInverse, sizeInverse, sizeInverse );
			this._translationMatrix.makeTranslation( - this._v3_1.x, - this._v3_1.y, - this._v3_1.z );

			this._m4_2.makeTranslation( this._v3_1.x, this._v3_1.y, this._v3_1.z ).multiply( this._scaleMatrix );
			this._m4_2.multiply( this._translationMatrix );


			//move camera and gizmos to obtain pinch effect
			_scalePointTemp.sub( this._v3_1 );

			const amount = _scalePointTemp.clone().multiplyScalar( sizeInverse );
			_scalePointTemp.sub( amount );

			this._m4_1.makeTranslation( _scalePointTemp.x, _scalePointTemp.y, _scalePointTemp.z );
			this._m4_2.premultiply( this._m4_1 );

			this.setTransformationMatrices( this._m4_1, this._m4_2 );
			return _transformation;

		} else if ( this.camera.isPerspectiveCamera ) {

			this._v3_1.setFromMatrixPosition( this._cameraMatrixState );
			this._v3_2.setFromMatrixPosition( this._gizmoMatrixState );

			//move camera
			let distance = this._v3_1.distanceTo( _scalePointTemp );
			let amount = distance - ( distance * sizeInverse );

			//check min and max distance
			const newDistance = distance - amount;
			if ( newDistance < this.minDistance ) {

				sizeInverse = this.minDistance / distance;
				amount = distance - ( distance * sizeInverse );

			} else if ( newDistance > this.maxDistance ) {

				sizeInverse = this.maxDistance / distance;
				amount = distance - ( distance * sizeInverse );

			}

			_offset.copy( _scalePointTemp ).sub( this._v3_1 ).normalize().multiplyScalar( amount );

			this._m4_1.makeTranslation( _offset.x, _offset.y, _offset.z );


			if ( scaleGizmos ) {

				//scale gizmos so they appear in the same spot having the same dimension
				const pos = this._v3_2;

				distance = pos.distanceTo( _scalePointTemp );
				amount = distance - ( distance * sizeInverse );
				_offset.copy( _scalePointTemp ).sub( this._v3_2 ).normalize().multiplyScalar( amount );

				this._translationMatrix.makeTranslation( pos.x, pos.y, pos.z );
				this._scaleMatrix.makeScale( sizeInverse, sizeInverse, sizeInverse );

				this._m4_2.makeTranslation( _offset.x, _offset.y, _offset.z ).multiply( this._translationMatrix );
				this._m4_2.multiply( this._scaleMatrix );

				this._translationMatrix.makeTranslation( - pos.x, - pos.y, - pos.z );

				this._m4_2.multiply( this._translationMatrix );
				this.setTransformationMatrices( this._m4_1, this._m4_2 );


			} else {

				this.setTransformationMatrices( this._m4_1 );

			}

			return _transformation;

		}

	};

	/**
	 * Set camera fov
	 * @param {Number} value fov to be setted
	 */
	setFov = ( value ) => {

		if ( this.camera.isPerspectiveCamera ) {

			this.camera.fov = external_THREE_namespaceObject.MathUtils.clamp( value, this.minFov, this.maxFov );
			this.camera.updateProjectionMatrix();

		}

	};

	/**
	 * Set values in transformation object
	 * @param {Matrix4} camera Transformation to be applied to the camera
	 * @param {Matrix4} gizmos Transformation to be applied to gizmos
	 */
	 setTransformationMatrices( camera = null, gizmos = null ) {

		if ( camera != null ) {

			if ( _transformation.camera != null ) {

				_transformation.camera.copy( camera );

			} else {

				_transformation.camera = camera.clone();

			}

		} else {

			_transformation.camera = null;

		}

		if ( gizmos != null ) {

			if ( _transformation.gizmos != null ) {

				_transformation.gizmos.copy( gizmos );

			} else {

				_transformation.gizmos = gizmos.clone();

			}

		} else {

			_transformation.gizmos = null;

		}

	}

	/**
	 * Rotate camera around its direction axis passing by a given point by a given angle
	 * @param {Vector3} point The point where the rotation axis is passing trough
	 * @param {Number} angle Angle in radians
	 * @returns The computed transormation matix
	 */
	zRotate = ( point, angle ) => {

		this._rotationMatrix.makeRotationAxis( this._rotationAxis, angle );
		this._translationMatrix.makeTranslation( - point.x, - point.y, - point.z );

		this._m4_1.makeTranslation( point.x, point.y, point.z );
		this._m4_1.multiply( this._rotationMatrix );
		this._m4_1.multiply( this._translationMatrix );

		this._v3_1.setFromMatrixPosition( this._gizmoMatrixState ).sub( point );	//vector from rotation center to gizmos position
		this._v3_2.copy( this._v3_1 ).applyAxisAngle( this._rotationAxis, angle );	//apply rotation
		this._v3_2.sub( this._v3_1 );

		this._m4_2.makeTranslation( this._v3_2.x, this._v3_2.y, this._v3_2.z );

		this.setTransformationMatrices( this._m4_1, this._m4_2 );
		return _transformation;

	};


	getRaycaster() {

		return _raycaster;

	}


	/**
	 * Unproject the cursor on the 3D object surface
	 * @param {Vector2} cursor Cursor coordinates in NDC
	 * @param {Camera} camera Virtual camera
	 * @returns {Vector3} The point of intersection with the model, if exist, null otherwise
	 */
	unprojectOnObj = ( cursor, camera ) => {

		const raycaster = this.getRaycaster();
		raycaster.near = camera.near;
		raycaster.far = camera.far;
		raycaster.setFromCamera( cursor, camera );

		const intersect = raycaster.intersectObjects( this.scene.children, true );

		for ( let i = 0; i < intersect.length; i ++ ) {

			if ( intersect[ i ].object.uuid != this._gizmos.uuid && intersect[ i ].face != null ) {

				return intersect[ i ].point.clone();

			}

		}

		return null;

	};

	/**
	 * Unproject the cursor on the trackball surface
	 * @param {Camera} camera The virtual camera
	 * @param {Number} cursorX Cursor horizontal coordinate on screen
	 * @param {Number} cursorY Cursor vertical coordinate on screen
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @param {number} tbRadius The trackball radius
	 * @returns {Vector3} The unprojected point on the trackball surface
	 */
	unprojectOnTbSurface = ( camera, cursorX, cursorY, canvas, tbRadius ) => {

		if ( camera.type == 'OrthographicCamera' ) {

			this._v2_1.copy( this.getCursorPosition( cursorX, cursorY, canvas ) );
			this._v3_1.set( this._v2_1.x, this._v2_1.y, 0 );

			const x2 = Math.pow( this._v2_1.x, 2 );
			const y2 = Math.pow( this._v2_1.y, 2 );
			const r2 = Math.pow( this._tbRadius, 2 );

			if ( x2 + y2 <= r2 * 0.5 ) {

				//intersection with sphere
				this._v3_1.setZ( Math.sqrt( r2 - ( x2 + y2 ) ) );

			} else {

				//intersection with hyperboloid
				this._v3_1.setZ( ( r2 * 0.5 ) / ( Math.sqrt( x2 + y2 ) ) );

			}

			return this._v3_1;

		} else if ( camera.type == 'PerspectiveCamera' ) {

			//unproject cursor on the near plane
			this._v2_1.copy( this.getCursorNDC( cursorX, cursorY, canvas ) );

			this._v3_1.set( this._v2_1.x, this._v2_1.y, - 1 );
			this._v3_1.applyMatrix4( camera.projectionMatrixInverse );

			const rayDir = this._v3_1.clone().normalize(); //unprojected ray direction
			const cameraGizmoDistance = camera.position.distanceTo( this._gizmos.position );
			const radius2 = Math.pow( tbRadius, 2 );

			//	  camera
			//		|\
			//		| \
			//		|  \
			//	h	|	\
			//		| 	 \
			//		| 	  \
			//	_ _ | _ _ _\ _ _  near plane
			//			l

			const h = this._v3_1.z;
			const l = Math.sqrt( Math.pow( this._v3_1.x, 2 ) + Math.pow( this._v3_1.y, 2 ) );

			if ( l == 0 ) {

				//ray aligned with camera
				rayDir.set( this._v3_1.x, this._v3_1.y, tbRadius );
				return rayDir;

			}

			const m = h / l;
			const q = cameraGizmoDistance;

			/*
			 * calculate intersection point between unprojected ray and trackball surface
			 *|y = m * x + q
			 *|x^2 + y^2 = r^2
			 *
			 * (m^2 + 1) * x^2 + (2 * m * q) * x + q^2 - r^2 = 0
			 */
			let a = Math.pow( m, 2 ) + 1;
			let b = 2 * m * q;
			let c = Math.pow( q, 2 ) - radius2;
			let delta = Math.pow( b, 2 ) - ( 4 * a * c );

			if ( delta >= 0 ) {

				//intersection with sphere
				this._v2_1.setX( ( - b - Math.sqrt( delta ) ) / ( 2 * a ) );
				this._v2_1.setY( m * this._v2_1.x + q );

				const angle = external_THREE_namespaceObject.MathUtils.RAD2DEG * this._v2_1.angle();

				if ( angle >= 45 ) {

					//if angle between intersection point and X' axis is >= 45°, return that point
					//otherwise, calculate intersection point with hyperboloid

					const rayLength = Math.sqrt( Math.pow( this._v2_1.x, 2 ) + Math.pow( ( cameraGizmoDistance - this._v2_1.y ), 2 ) );
					rayDir.multiplyScalar( rayLength );
					rayDir.z += cameraGizmoDistance;
					return rayDir;

				}

			}

			//intersection with hyperboloid
			/*
			 *|y = m * x + q
			 *|y = (1 / x) * (r^2 / 2)
			 *
			 * m * x^2 + q * x - r^2 / 2 = 0
			 */

			a = m;
			b = q;
			c = - radius2 * 0.5;
			delta = Math.pow( b, 2 ) - ( 4 * a * c );
			this._v2_1.setX( ( - b - Math.sqrt( delta ) ) / ( 2 * a ) );
			this._v2_1.setY( m * this._v2_1.x + q );

			const rayLength = Math.sqrt( Math.pow( this._v2_1.x, 2 ) + Math.pow( ( cameraGizmoDistance - this._v2_1.y ), 2 ) );

			rayDir.multiplyScalar( rayLength );
			rayDir.z += cameraGizmoDistance;
			return rayDir;

		}

	};


	/**
	 * Unproject the cursor on the plane passing through the center of the trackball orthogonal to the camera
	 * @param {Camera} camera The virtual camera
	 * @param {Number} cursorX Cursor horizontal coordinate on screen
	 * @param {Number} cursorY Cursor vertical coordinate on screen
	 * @param {HTMLElement} canvas The canvas where the renderer draws its output
	 * @param {Boolean} initialDistance If initial distance between camera and gizmos should be used for calculations instead of current (Perspective only)
	 * @returns {Vector3} The unprojected point on the trackball plane
	 */
	unprojectOnTbPlane = ( camera, cursorX, cursorY, canvas, initialDistance = false ) => {

		if ( camera.type == 'OrthographicCamera' ) {

			this._v2_1.copy( this.getCursorPosition( cursorX, cursorY, canvas ) );
			this._v3_1.set( this._v2_1.x, this._v2_1.y, 0 );

			return this._v3_1.clone();

		} else if ( camera.type == 'PerspectiveCamera' ) {

			this._v2_1.copy( this.getCursorNDC( cursorX, cursorY, canvas ) );

			//unproject cursor on the near plane
			this._v3_1.set( this._v2_1.x, this._v2_1.y, - 1 );
			this._v3_1.applyMatrix4( camera.projectionMatrixInverse );

			const rayDir = this._v3_1.clone().normalize(); //unprojected ray direction

			//	  camera
			//		|\
			//		| \
			//		|  \
			//	h	|	\
			//		| 	 \
			//		| 	  \
			//	_ _ | _ _ _\ _ _  near plane
			//			l

			const h = this._v3_1.z;
			const l = Math.sqrt( Math.pow( this._v3_1.x, 2 ) + Math.pow( this._v3_1.y, 2 ) );
			let cameraGizmoDistance;

			if ( initialDistance ) {

				cameraGizmoDistance = this._v3_1.setFromMatrixPosition( this._cameraMatrixState0 ).distanceTo( this._v3_2.setFromMatrixPosition( this._gizmoMatrixState0 ) );

			} else {

				cameraGizmoDistance = camera.position.distanceTo( this._gizmos.position );

			}

			/*
			 * calculate intersection point between unprojected ray and the plane
			 *|y = mx + q
			 *|y = 0
			 *
			 * x = -q/m
			*/
			if ( l == 0 ) {

				//ray aligned with camera
				rayDir.set( 0, 0, 0 );
				return rayDir;

			}

			const m = h / l;
			const q = cameraGizmoDistance;
			const x = - q / m;

			const rayLength = Math.sqrt( Math.pow( q, 2 ) + Math.pow( x, 2 ) );
			rayDir.multiplyScalar( rayLength );
			rayDir.z = 0;
			return rayDir;

		}

	};

	/**
	 * Update camera and gizmos state
	 */
	updateMatrixState = () => {

		//update camera and gizmos state
		this._cameraMatrixState.copy( this.camera.matrix );
		this._gizmoMatrixState.copy( this._gizmos.matrix );

		if ( this.camera.isOrthographicCamera ) {

			this._cameraProjectionState.copy( this.camera.projectionMatrix );
			this.camera.updateProjectionMatrix();
			this._zoomState = this.camera.zoom;

		} else if ( this.camera.isPerspectiveCamera ) {

			this._fovState = this.camera.fov;

		}

	};

	/**
	 * Update the trackball FSA
	 * @param {STATE} newState New state of the FSA
	 * @param {Boolean} updateMatrices If matriices state should be updated
	 */
	updateTbState = ( newState, updateMatrices ) => {

		this._state = newState;
		if ( updateMatrices ) {

			this.updateMatrixState();

		}

	};

	update = () => {

		const EPS = 0.000001;

		if ( this.target.equals( this._currentTarget ) === false ) {

			this._gizmos.position.copy( this.target );	//for correct radius calculation
			this._tbRadius = this.calculateTbRadius( this.camera );
			this.makeGizmos( this.target, this._tbRadius );
			this._currentTarget.copy( this.target );

		}

		//check min/max parameters
		if ( this.camera.isOrthographicCamera ) {

			//check zoom
			if ( this.camera.zoom > this.maxZoom || this.camera.zoom < this.minZoom ) {

				const newZoom = external_THREE_namespaceObject.MathUtils.clamp( this.camera.zoom, this.minZoom, this.maxZoom );
				this.applyTransformMatrix( this.scale( newZoom / this.camera.zoom, this._gizmos.position, true ) );

			}

		} else if ( this.camera.isPerspectiveCamera ) {

			//check distance
			const distance = this.camera.position.distanceTo( this._gizmos.position );

			if ( distance > this.maxDistance + EPS || distance < this.minDistance - EPS ) {

				const newDistance = external_THREE_namespaceObject.MathUtils.clamp( distance, this.minDistance, this.maxDistance );
				this.applyTransformMatrix( this.scale( newDistance / distance, this._gizmos.position ) );
				this.updateMatrixState();

			 }

			//check fov
			if ( this.camera.fov < this.minFov || this.camera.fov > this.maxFov ) {

				this.camera.fov = external_THREE_namespaceObject.MathUtils.clamp( this.camera.fov, this.minFov, this.maxFov );
				this.camera.updateProjectionMatrix();

			}

			const oldRadius = this._tbRadius;
			this._tbRadius = this.calculateTbRadius( this.camera );

			if ( oldRadius < this._tbRadius - EPS || oldRadius > this._tbRadius + EPS ) {

				const scale = ( this._gizmos.scale.x + this._gizmos.scale.y + this._gizmos.scale.z ) / 3;
				const newRadius = this._tbRadius / scale;
				const curve = new external_THREE_namespaceObject.EllipseCurve( 0, 0, newRadius, newRadius );
				const points = curve.getPoints( this._curvePts );
				const curveGeometry = new external_THREE_namespaceObject.BufferGeometry().setFromPoints( points );

				for ( const gizmo in this._gizmos.children ) {

					this._gizmos.children[ gizmo ].geometry = curveGeometry;

				}

			}

		}

		this.camera.lookAt( this._gizmos.position );

	};

	setStateFromJSON = ( json ) => {

		const state = JSON.parse( json );

		if ( state.arcballState != undefined ) {

			this._cameraMatrixState.fromArray( state.arcballState.cameraMatrix.elements );
			this._cameraMatrixState.decompose( this.camera.position, this.camera.quaternion, this.camera.scale );

			this.camera.up.copy( state.arcballState.cameraUp );
			this.camera.near = state.arcballState.cameraNear;
			this.camera.far = state.arcballState.cameraFar;

			this.camera.zoom = state.arcballState.cameraZoom;

			if ( this.camera.isPerspectiveCamera ) {

				this.camera.fov = state.arcballState.cameraFov;

			}

			this._gizmoMatrixState.fromArray( state.arcballState.gizmoMatrix.elements );
			this._gizmoMatrixState.decompose( this._gizmos.position, this._gizmos.quaternion, this._gizmos.scale );

			this.camera.updateMatrix();
			this.camera.updateProjectionMatrix();

			this._gizmos.updateMatrix();

			this._tbRadius = this.calculateTbRadius( this.camera );
			const gizmoTmp = new external_THREE_namespaceObject.Matrix4().copy( this._gizmoMatrixState0 );
			this.makeGizmos( this._gizmos.position, this._tbRadius );
			this._gizmoMatrixState0.copy( gizmoTmp );

			this.camera.lookAt( this._gizmos.position );
			this.updateTbState( STATE.IDLE, false );

			this.dispatchEvent( ArcballControls_changeEvent );

		}

	};

}



;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/libs/lil-gui.module.min.js
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.16.0
 * @author George Michael Brower
 * @license MIT
 */
class t{constructor(i,e,s,n,r="div"){this.parent=i,this.object=e,this.property=s,this._disabled=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),t.nextNameID=t.nextNameID||0,this.$name.id="lil-gui-name-"+ ++t.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(s)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}options(t){const i=this.parent.add(this.object,this.property,t);return i.name(this._name),this.destroy(),i}min(t){return this}max(t){return this}step(t){return this}listen(t=!0){return this._listening=t,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback),this.updateDisplay()}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class i extends t{constructor(t,i,e){super(t,i,e,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function e(t){let i,e;return(i=t.match(/(#|0x)?([a-f0-9]{6})/i))?e=i[2]:(i=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(i[1]).toString(16).padStart(2,0)+parseInt(i[2]).toString(16).padStart(2,0)+parseInt(i[3]).toString(16).padStart(2,0):(i=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=i[1]+i[1]+i[2]+i[2]+i[3]+i[3]),!!e&&"#"+e}const s={isPrimitive:!0,match:t=>"string"==typeof t,fromHexString:e,toHexString:e},n={isPrimitive:!0,match:t=>"number"==typeof t,fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},r={isPrimitive:!1,match:Array.isArray,fromHexString(t,i,e=1){const s=n.fromHexString(t);i[0]=(s>>16&255)/255*e,i[1]=(s>>8&255)/255*e,i[2]=(255&s)/255*e},toHexString:([t,i,e],s=1)=>n.toHexString(t*(s=255/s)<<16^i*s<<8^e*s<<0)},l={isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,i,e=1){const s=n.fromHexString(t);i.r=(s>>16&255)/255*e,i.g=(s>>8&255)/255*e,i.b=(255&s)/255*e},toHexString:({r:t,g:i,b:e},s=1)=>n.toHexString(t*(s=255/s)<<16^i*s<<8^e*s<<0)},o=[s,n,r,l];class a extends t{constructor(t,i,s,n){var r;super(t,i,s,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,o.find(t=>t.match(r))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const t=e(this.$text.value);t&&this._setValueFromHexString(t)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const i=this._format.fromHexString(t);this.setValue(i)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class h extends t{constructor(t,i,e){super(t,i,e,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",t=>{t.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{}),this.$disable=this.$button}}class d extends t{constructor(t,i,e,s,n,r){super(t,i,e,"number"),this._initInput(),this.min(s),this.max(n);const l=void 0!==r;this.step(l?r:this._getImplicitStep(),l),this.updateDisplay()}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,i=!0){return this._step=t,this._stepExplicit=i,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let i=(t-this._min)/(this._max-this._min);i=Math.max(0,Math.min(i,1)),this.$fill.style.width=100*i+"%"}return this._inputFocused||(this.$input.value=t),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=t=>{const i=parseFloat(this.$input.value);isNaN(i)||(this._snapClampSetValue(i+t),this.$input.value=this.getValue())};let i,e,s,n,r,l=!1;const o=t=>{if(l){const s=t.clientX-i,n=t.clientY-e;Math.abs(n)>5?(t.preventDefault(),this.$input.blur(),l=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(s)>5&&a()}if(!l){const i=t.clientY-s;r-=i*this._step*this._arrowKeyMultiplier(t),n+r>this._max?r=this._max-n:n+r<this._min&&(r=this._min-n),this._snapClampSetValue(n+r)}s=t.clientY},a=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",o),window.removeEventListener("mouseup",a)};this.$input.addEventListener("input",()=>{const t=parseFloat(this.$input.value);isNaN(t)||this.setValue(this._clamp(t))}),this.$input.addEventListener("keydown",i=>{"Enter"===i.code&&this.$input.blur(),"ArrowUp"===i.code&&(i.preventDefault(),t(this._step*this._arrowKeyMultiplier(i))),"ArrowDown"===i.code&&(i.preventDefault(),t(this._step*this._arrowKeyMultiplier(i)*-1))}),this.$input.addEventListener("wheel",i=>{this._inputFocused&&(i.preventDefault(),t(this._step*this._normalizeMouseWheel(i)))}),this.$input.addEventListener("mousedown",t=>{i=t.clientX,e=s=t.clientY,l=!0,n=this.getValue(),r=0,window.addEventListener("mousemove",o),window.addEventListener("mouseup",a)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=t=>{const i=this.$slider.getBoundingClientRect();let e=(s=t,n=i.left,r=i.right,l=this._min,o=this._max,(s-n)/(r-n)*(o-l)+l);var s,n,r,l,o;this._snapClampSetValue(e)},i=i=>{t(i.clientX)},e=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",e)};let s,n,r=!1;const l=i=>{i.preventDefault(),this._setDraggingStyle(!0),t(i.touches[0].clientX),r=!1},o=i=>{if(r){const t=i.touches[0].clientX-s,e=i.touches[0].clientY-n;Math.abs(t)>Math.abs(e)?l(i):(window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a))}else i.preventDefault(),t(i.touches[0].clientX)},a=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",o),window.removeEventListener("touchend",a)},h=this._callOnFinishChange.bind(this);let d;this.$slider.addEventListener("mousedown",s=>{this._setDraggingStyle(!0),t(s.clientX),window.addEventListener("mousemove",i),window.addEventListener("mouseup",e)}),this.$slider.addEventListener("touchstart",t=>{t.touches.length>1||(this._hasScrollBar?(s=t.touches[0].clientX,n=t.touches[0].clientY,r=!0):l(t),window.addEventListener("touchmove",o),window.addEventListener("touchend",a))}),this.$slider.addEventListener("wheel",t=>{if(Math.abs(t.deltaX)<Math.abs(t.deltaY)&&this._hasScrollBar)return;t.preventDefault();const i=this._normalizeMouseWheel(t)*this._step;this._snapClampSetValue(this.getValue()+i),this.$input.value=this.getValue(),clearTimeout(d),d=setTimeout(h,400)})}_setDraggingStyle(t,i="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+i,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:i,deltaY:e}=t;Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(i=0,e=-t.wheelDelta/120,e*=this._stepExplicit?1:10);return i+-e}_arrowKeyMultiplier(t){let i=this._stepExplicit?1:10;return t.shiftKey?i*=10:t.altKey&&(i/=10),i}_snap(t){const i=Math.round(t/this._step)*this._step;return parseFloat(i.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class c extends t{constructor(t,i,e,s){super(t,i,e,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(t=>{const i=document.createElement("option");i.innerHTML=t,this.$select.appendChild(i)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),i=this._values.indexOf(t);return this.$select.selectedIndex=i,this.$display.innerHTML=-1===i?t:this._names[i],this}}class u extends t{constructor(t,i,e){super(t,i,e,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",t=>{"Enter"===t.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let p=!1;class g{constructor({parent:t,autoPlace:i=void 0===t,container:e,width:s,title:n="Controls",injectStyles:r=!0,touchStyles:l=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{"Enter"!==t.code&&"Space"!==t.code||(t.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(n),l&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!p&&r&&(!function(t){const i=document.createElement("style");i.innerHTML=t;const e=document.querySelector("head link[rel=stylesheet], head style");e?document.head.insertBefore(i,e):document.head.appendChild(i)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),p=!0),e?e.appendChild(this.domElement):i&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",t=>t.stopPropagation()),this.domElement.addEventListener("keyup",t=>t.stopPropagation())}add(t,e,s,n,r){if(Object(s)===s)return new c(this,t,e,s);const l=t[e];switch(typeof l){case"number":return new d(this,t,e,s,n,r);case"boolean":return new i(this,t,e);case"string":return new u(this,t,e);case"function":return new h(this,t,e)}console.error("gui.add failed\n\tproperty:",e,"\n\tobject:",t,"\n\tvalue:",l)}addColor(t,i,e=1){return new a(this,t,i,e)}addFolder(t){return new g({parent:this,title:t})}load(t,i=!0){return t.controllers&&this.controllers.forEach(i=>{i instanceof h||i._name in t.controllers&&i.load(t.controllers[i._name])}),i&&t.folders&&this.folders.forEach(i=>{i._title in t.folders&&i.load(t.folders[i._title])}),this}save(t=!0){const i={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof h)){if(t._name in i.controllers)throw new Error(`Cannot save GUI with duplicate property "${t._name}"`);i.controllers[t._name]=t.save()}}),t&&this.folders.forEach(t=>{if(t._title in i.folders)throw new Error(`Cannot save GUI with duplicate folder "${t._title}"`);i.folders[t._title]=t.save()}),i}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const i=this.$children.clientHeight;this.$children.style.height=i+"px",this.domElement.classList.add("transition");const e=t=>{t.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",e))};this.$children.addEventListener("transitionend",e);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),void 0!==this._onChange&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(i=>{t=t.concat(i.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(i=>{t=t.concat(i.foldersRecursive())}),t}}/* harmony default export */ const lil_gui_module_min = ((/* unused pure expression or super */ null && (g)));

;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/libs/stats.module.js
var Stats = function () {

	var mode = 0;

	var container = document.createElement( 'div' );
	container.style.cssText = 'position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000';
	container.addEventListener( 'click', function ( event ) {

		event.preventDefault();
		showPanel( ++ mode % container.children.length );

	}, false );

	//

	function addPanel( panel ) {

		container.appendChild( panel.dom );
		return panel;

	}

	function showPanel( id ) {

		for ( var i = 0; i < container.children.length; i ++ ) {

			container.children[ i ].style.display = i === id ? 'block' : 'none';

		}

		mode = id;

	}

	//

	var beginTime = ( performance || Date ).now(), prevTime = beginTime, frames = 0;

	var fpsPanel = addPanel( new Stats.Panel( 'FPS', '#0ff', '#002' ) );
	var msPanel = addPanel( new Stats.Panel( 'MS', '#0f0', '#020' ) );

	if ( self.performance && self.performance.memory ) {

		var memPanel = addPanel( new Stats.Panel( 'MB', '#f08', '#201' ) );

	}

	showPanel( 0 );

	return {

		REVISION: 16,

		dom: container,

		addPanel: addPanel,
		showPanel: showPanel,

		begin: function () {

			beginTime = ( performance || Date ).now();

		},

		end: function () {

			frames ++;

			var time = ( performance || Date ).now();

			msPanel.update( time - beginTime, 200 );

			if ( time >= prevTime + 1000 ) {

				fpsPanel.update( ( frames * 1000 ) / ( time - prevTime ), 100 );

				prevTime = time;
				frames = 0;

				if ( memPanel ) {

					var memory = performance.memory;
					memPanel.update( memory.usedJSHeapSize / 1048576, memory.jsHeapSizeLimit / 1048576 );

				}

			}

			return time;

		},

		update: function () {

			beginTime = this.end();

		},

		// Backwards Compatibility

		domElement: container,
		setMode: showPanel

	};

};

Stats.Panel = function ( name, fg, bg ) {

	var min = Infinity, max = 0, round = Math.round;
	var PR = round( window.devicePixelRatio || 1 );

	var WIDTH = 80 * PR, HEIGHT = 48 * PR,
		TEXT_X = 3 * PR, TEXT_Y = 2 * PR,
		GRAPH_X = 3 * PR, GRAPH_Y = 15 * PR,
		GRAPH_WIDTH = 74 * PR, GRAPH_HEIGHT = 30 * PR;

	var canvas = document.createElement( 'canvas' );
	canvas.width = WIDTH;
	canvas.height = HEIGHT;
	canvas.style.cssText = 'width:80px;height:48px';

	var context = canvas.getContext( '2d' );
	context.font = 'bold ' + ( 9 * PR ) + 'px Helvetica,Arial,sans-serif';
	context.textBaseline = 'top';

	context.fillStyle = bg;
	context.fillRect( 0, 0, WIDTH, HEIGHT );

	context.fillStyle = fg;
	context.fillText( name, TEXT_X, TEXT_Y );
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	context.fillStyle = bg;
	context.globalAlpha = 0.9;
	context.fillRect( GRAPH_X, GRAPH_Y, GRAPH_WIDTH, GRAPH_HEIGHT );

	return {

		dom: canvas,

		update: function ( value, maxValue ) {

			min = Math.min( min, value );
			max = Math.max( max, value );

			context.fillStyle = bg;
			context.globalAlpha = 1;
			context.fillRect( 0, 0, WIDTH, GRAPH_Y );
			context.fillStyle = fg;
			context.fillText( round( value ) + ' ' + name + ' (' + round( min ) + '-' + round( max ) + ')', TEXT_X, TEXT_Y );

			context.drawImage( canvas, GRAPH_X + PR, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT, GRAPH_X, GRAPH_Y, GRAPH_WIDTH - PR, GRAPH_HEIGHT );

			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, GRAPH_HEIGHT );

			context.fillStyle = bg;
			context.globalAlpha = 0.9;
			context.fillRect( GRAPH_X + GRAPH_WIDTH - PR, GRAPH_Y, PR, round( ( 1 - ( value / maxValue ) ) * GRAPH_HEIGHT ) );

		}

	};

};

/* harmony default export */ const stats_module = (Stats);

;// CONCATENATED MODULE: ./node_modules/three/examples/jsm/capabilities/WebGL.js
class WebGL {

	static isWebGLAvailable() {

		try {

			const canvas = document.createElement( 'canvas' );
			return !! ( window.WebGLRenderingContext && ( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) ) );

		} catch ( e ) {

			return false;

		}

	}

	static isWebGL2Available() {

		try {

			const canvas = document.createElement( 'canvas' );
			return !! ( window.WebGL2RenderingContext && canvas.getContext( 'webgl2' ) );

		} catch ( e ) {

			return false;

		}

	}

	static getWebGLErrorMessage() {

		return this.getErrorMessage( 1 );

	}

	static getWebGL2ErrorMessage() {

		return this.getErrorMessage( 2 );

	}

	static getErrorMessage( version ) {

		const names = {
			1: 'WebGL',
			2: 'WebGL 2'
		};

		const contexts = {
			1: window.WebGLRenderingContext,
			2: window.WebGL2RenderingContext
		};

		let message = 'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

		const element = document.createElement( 'div' );
		element.id = 'webglmessage';
		element.style.fontFamily = 'monospace';
		element.style.fontSize = '13px';
		element.style.fontWeight = 'normal';
		element.style.textAlign = 'center';
		element.style.background = '#fff';
		element.style.color = '#000';
		element.style.padding = '1.5em';
		element.style.width = '400px';
		element.style.margin = '5em auto 0';

		if ( contexts[ version ] ) {

			message = message.replace( '$0', 'graphics card' );

		} else {

			message = message.replace( '$0', 'browser' );

		}

		message = message.replace( '$1', names[ version ] );

		element.innerHTML = message;

		return element;

	}

}

/* harmony default export */ const capabilities_WebGL = (WebGL);

;// CONCATENATED MODULE: ./src/tools/transitions/Transition.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function Transition_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Transition_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function Transition_createClass(Constructor, protoProps, staticProps) { if (protoProps) Transition_defineProperties(Constructor.prototype, protoProps); if (staticProps) Transition_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/


var Transition = /*#__PURE__*/function () {
  function Transition(transitionObjects) {
    var parameters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Transition_classCallCheck(this, Transition);
    this.isTransition = true;
    this.transitionObjects = Array.isArray(transitionObjects) ? transitionObjects : [transitionObjects];
    this.parameters = parameters;
    this.init();
  }
  Transition_createClass(Transition, [{
    key: "init",
    value: function init() {
      this.autoplay = this.parameters.autoplay !== undefined ? this.parameters.autoplay : false;
      this.duration = this.parameters.duration !== undefined ? this.parameters.duration : 0.5;
      this.count = this.parameters.count !== undefined ? this.parameters.count : 1;
      this.delay = this.parameters.delay !== undefined ? this.parameters.delay : 0;
      this.forwards = this.parameters.forwards !== undefined ? this.parameters.forwards : true;
      this.callback = this.parameters.callback !== undefined ? this.parameters.callback : null;
      this.callbackEveryIteration = this.parameters.callbackEveryIteration !== undefined ? this.parameters.callbackEveryIteration : null;
      this.callbackEveryUpdate = this.parameters.callbackEveryUpdate !== undefined ? this.parameters.callbackEveryUpdate : null;
      this["function"] = this.parameters["function"];
      this.useFunctionSeparately = this.parameters.useFunctionSeparately;
      var _iterator = _createForOfIteratorHelper(this.transitionObjects),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var transitionObject = _step.value;
          if (transitionObject.parameters["function"] === undefined && this["function"] !== undefined) {
            transitionObject["function"] = this["function"];
          }
          if (transitionObject.parameters.useFunctionSeparately === undefined && this.useFunctionSeparately !== undefined) {
            transitionObject.useFunctionSeparately = this.useFunctionSeparately;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      this.counter = 0;
      this.progress = 0;
      this.paused = true;
      this.ended = false;
      this.isPlayRequested = false;
      this.clock = new external_THREE_namespaceObject.Clock();
      if (this.autoplay) this.play();
      return this;
    }
  }, {
    key: "setStartTime",
    value: function setStartTime() {
      this.startTime = this.clock.getElapsedTime() + this.delay;
    }
  }, {
    key: "setTransitionObjectValue",
    value: function setTransitionObjectValue(transitionObject, value) {
      if (!isNaN(transitionObject.object[transitionObject.property])) {
        transitionObject.object[transitionObject.property] = value;
      } else {
        transitionObject.object[transitionObject.property].copy(value);
      }
    }
  }, {
    key: "setTransitionObjectsValueFromStartState",
    value: function setTransitionObjectsValueFromStartState() {
      var _iterator2 = _createForOfIteratorHelper(this.transitionObjects),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var transitionObject = _step2.value;
          this.setTransitionObjectValue(transitionObject, transitionObject.keyframesSorted[0].value);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  }, {
    key: "setTransitionObjectsValueFromEndState",
    value: function setTransitionObjectsValueFromEndState() {
      var _iterator3 = _createForOfIteratorHelper(this.transitionObjects),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var transitionObject = _step3.value;
          this.setTransitionObjectValue(transitionObject, transitionObject.keyframesSorted[transitionObject.keyframesSorted.length - 1].value);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
    }
  }, {
    key: "setTransitionObjectsValueFromProgress",
    value: function setTransitionObjectsValueFromProgress() {
      var _iterator4 = _createForOfIteratorHelper(this.transitionObjects),
        _step4;
      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var transitionObject = _step4.value;
          this.setTransitionObjectValue(transitionObject, transitionObject.getCurrentValue(this.progress));
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }
  }, {
    key: "setTransitionObjectsValue",
    value: function setTransitionObjectsValue(value) {
      var _iterator5 = _createForOfIteratorHelper(this.transitionObjects),
        _step5;
      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var transitionObject = _step5.value;
          this.setTransitionObjectValue(transitionObject, value);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }
  }, {
    key: "updateStartState",
    value: function updateStartState() {
      var _iterator6 = _createForOfIteratorHelper(this.transitionObjects),
        _step6;
      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var transitionObject = _step6.value;
          if (transitionObject.enableDynamicStartState) transitionObject.keyframesSorted[0].value = transitionObject.object[transitionObject.property].clone();
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }
      return this;
    }
  }, {
    key: "moveToStartState",
    value: function moveToStartState() {
      this.setTransitionObjectsValueFromStartState();
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      var transitionObjects = [];
      var _iterator7 = _createForOfIteratorHelper(this.transitionObjects),
        _step7;
      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var transitionObject = _step7.value;
          transitionObjects.push(transitionObject.clone());
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
      var clone = new Transition(transitionObjects, _objectSpread({}, this.parameters));
      clone.progress = this.progress;
      clone.counter = this.counter;
      clone.paused = this.paused;
      clone.ended = this.ended;
      return clone;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.progress = 0;
      this.counter = 0;
      this.ended = false;
      this.lastUpdate = null;
      this.delayStart = null;
      this.moveToStartState();
      this.isPlayRequested = !this.paused;
      return this;
    }
  }, {
    key: "skip",
    value: function skip() {
      this.progress = 1;
      this.setTransitionObjectsValueFromEndState();
      this.counter = this.count;
      this.ended = this.paused = true;
    }
  }, {
    key: "play",
    value: function play() {
      this.paused = false;
      this.isPlayRequested = true;
    }
  }, {
    key: "pause",
    value: function pause() {
      this.paused = true;
    }
  }, {
    key: "toggle",
    value: function toggle() {
      if (this.paused) this.play();else this.pause();
    }
  }, {
    key: "update",
    value: function update() {
      if (this.ended) return;
      if (this.paused) return;
      if (this.isPlayRequested) {
        this.isPlayRequested = false;
        if (!this.delayStart) this.delayStart = this.clock.getElapsedTime();
        this.startTime = Math.max(this.delayStart - this.clock.getElapsedTime() + this.delay, 0) + this.clock.getElapsedTime() - this.progress * this.duration;
      }
      if (this.clock.getElapsedTime() < this.startTime) return;
      this.progress = Math.max(Math.min((this.clock.getElapsedTime() - this.startTime) / this.duration, 1), 0);
      if (this.progress >= 1 && !this.ended) {
        if (++this.counter < this.count) {
          this.setTransitionObjectsValueFromStartState();
          this.startTime = this.clock.getElapsedTime();
          this.progress = 0;
        } else {
          if (!this.forwards) {
            this.setTransitionObjectsValueFromStartState();
          } else {
            this.setTransitionObjectsValueFromEndState();
          }
          this.ended = this.paused = true;
        }
        if (this.callbackEveryIteration) this.callbackEveryIteration(this);
        if (this.ended && this.callback) this.callback(this);
      }
      this.setTransitionObjectsValueFromProgress();
      if (this.callbackEveryUpdate) this.callbackEveryUpdate(this);
      this.lastUpdate = this.clock.getElapsedTime();
    }
  }]);
  return Transition;
}();
/* harmony default export */ const transitions_Transition = (Transition);
;// CONCATENATED MODULE: ./src/tools/transitions/TransitionObject.js
function TransitionObject_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = TransitionObject_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || TransitionObject_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function TransitionObject_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TransitionObject_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TransitionObject_arrayLikeToArray(o, minLen); }
function TransitionObject_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function TransitionObject_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function TransitionObject_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function TransitionObject_createClass(Constructor, protoProps, staticProps) { if (protoProps) TransitionObject_defineProperties(Constructor.prototype, protoProps); if (staticProps) TransitionObject_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/
var TransitionObject = /*#__PURE__*/function () {
  function TransitionObject(object, property, keyframes) {
    var parameters = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
    TransitionObject_classCallCheck(this, TransitionObject);
    this.object = object;
    this.property = property;
    this.keyframes = keyframes;
    this.parameters = parameters;
    this["function"] = parameters["function"] !== undefined ? parameters["function"] : function (x) {
      return x;
    };
    this.useFunctionSeparately = parameters.useFunctionSeparately !== undefined ? parameters.useFunctionSeparately : false;
    this.enableDynamicStartState = parameters.enableDynamicStartState !== undefined ? parameters.enableDynamicStartState : true;
    if (this.keyframes[0] === undefined) this.keyframes[0] = this.object[this.property].clone();
    this.sortKeyframes();
    if (this.keyframes[1] === undefined) {
      if (this.keyframesSorted.length > 0) this.keyframes[1] = this.keyframesSorted[this.keyframesSorted.length - 1].value;else this.keyframes[1] = this.object[this.property].clone();
      this.sortKeyframes();
    }
  }
  TransitionObject_createClass(TransitionObject, [{
    key: "sortKeyframes",
    value: function sortKeyframes() {
      this.keyframesSorted = [];
      for (var _i = 0, _Object$entries = Object.entries(this.keyframes); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
          progress = _Object$entries$_i[0],
          value = _Object$entries$_i[1];
        this.keyframesSorted.push({
          progress: progress,
          value: value
        });
      }
      this.keyframesSorted.sort(function (a, b) {
        return a.progress - b.progress;
      });
    }
  }, {
    key: "getCurrentStartKeyframe",
    value: function getCurrentStartKeyframe(progress) {
      var startKeyframe = this.keyframesSorted[0];
      var _iterator = TransitionObject_createForOfIteratorHelper(this.keyframesSorted),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var keyframe = _step.value;
          if (keyframe.progress > progress) break;
          startKeyframe = keyframe;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return startKeyframe;
    }
  }, {
    key: "getCurrentEndKeyframe",
    value: function getCurrentEndKeyframe(progress) {
      var _iterator2 = TransitionObject_createForOfIteratorHelper(this.keyframesSorted),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var keyframe = _step2.value;
          if (keyframe.progress > progress) return keyframe;
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
      return this.keyframesSorted[this.keyframesSorted.length - 1];
    }
  }, {
    key: "getCurrentKeyframeProgress",
    value: function getCurrentKeyframeProgress(progress) {
      var startKeyframeProgress = this.getCurrentStartKeyframe(progress).progress;
      var endtKeyframeProgress = this.getCurrentEndKeyframe(progress).progress;
      var up = progress - startKeyframeProgress;
      var down = endtKeyframeProgress - startKeyframeProgress;
      return up / (down === 0 ? 1 : down);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue(progress) {
      var progressCalculated = this.useFunctionSeparately ? progress : this["function"](progress);
      var progressCurrent = this.getCurrentKeyframeProgress(progressCalculated);
      var moveAmount = this.useFunctionSeparately ? this["function"](progressCurrent) : progressCurrent;
      var value = this.getCurrentStartKeyframe(progressCalculated).value.moveTo(this.getCurrentEndKeyframe(progressCalculated).value, moveAmount);
      return value;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new TransitionObject(this.object, this.property, this.keyframes, this.parameters);
    }
  }]);
  return TransitionObject;
}();
/* harmony default export */ const transitions_TransitionObject = (TransitionObject);
;// CONCATENATED MODULE: ./src/tools/transitions/transitionFunctions.js
var _transitionFunctions;
function transitionFunctions_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/

function _easeOutBounce(x) {
  var n1 = 7.5625;
  var d1 = 2.75;
  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}
var transitionFunctions = (_transitionFunctions = {
  linear: function linear(x) {
    return x;
  },
  easeInSine: function easeInSine(x) {
    return 1 - Math.cos(x * Math.PI / 2);
  },
  easeOutSine: function easeOutSine(x) {
    return Math.sin(x * Math.PI / 2);
  },
  easeInOutSine: function easeInOutSine(x) {
    return -(Math.cos(Math.PI * x) - 1) / 2;
  },
  easeInQuad: function easeInQuad(x) {
    return x * x;
  },
  easeOutQuad: function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
  },
  easeInOutQuad: function easeInOutQuad(x) {
    return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
  },
  easeInCubic: function easeInCubic(x) {
    return x * x * x;
  },
  easeOutCubic: function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
  },
  easeInOutCubic: function easeInOutCubic(x) {
    return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
  },
  easeInQuart: function easeInQuart(x) {
    return x * x * x * x;
  },
  easeOutQuart: function easeOutQuart(x) {
    return 1 - Math.pow(1 - x, 4);
  },
  easeInOutQuart: function easeInOutQuart(x) {
    return x < 0.5 ? 8 * x * x * x * x : 1 - Math.pow(-2 * x + 2, 4) / 2;
  },
  easeInQuint: function easeInQuint(x) {
    return x * x * x * x * x;
  },
  easeOutQuint: function easeOutQuint(x) {
    return 1 - Math.pow(1 - x, 5);
  },
  easeInOutQuint: function easeInOutQuint(x) {
    return x < 0.5 ? 16 * x * x * x * x * x : 1 - Math.pow(-2 * x + 2, 5) / 2;
  },
  easeInExpo: function easeInExpo(x) {
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  },
  easeOutExpo: function easeOutExpo(x) {
    return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
  },
  easeInOutExpo: function easeInOutExpo(x) {
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2 : (2 - Math.pow(2, -20 * x + 10)) / 2;
  },
  easeInCirc: function easeInCirc(x) {
    return 1 - Math.sqrt(1 - Math.pow(x, 2));
  },
  easeOutCirc: function easeOutCirc(x) {
    return Math.sqrt(1 - Math.pow(x - 1, 2));
  },
  easeInOutCirc: function easeInOutCirc(x) {
    return x < 0.5 ? (1 - Math.sqrt(1 - Math.pow(2 * x, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * x + 2, 2)) + 1) / 2;
  },
  easeInBack: function easeInBack(x) {
    var c1 = 1.70158;
    var c3 = c1 + 1;
    return c3 * x * x * x - c1 * x * x;
  },
  easeOutBack: function easeOutBack(x) {
    var c1 = 1.70158;
    var c3 = c1 + 1;
    return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2);
  },
  easeInOutBack: function easeInOutBack(x) {
    var c1 = 1.70158;
    var c2 = c1 * 1.525;
    return x < 0.5 ? Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2) / 2 : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
  },
  easeInElastic: function easeInElastic(x) {
    var c4 = 2 * Math.PI / 3;
    return x === 0 ? 0 : x === 1 ? 1 : -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4);
  },
  easeOutElastic: function easeOutElastic(x) {
    var c4 = 2 * Math.PI / 3;
    return x === 0 ? 0 : x === 1 ? 1 : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
  },
  easeInOutElastic: function easeInOutElastic(x) {
    var c5 = 2 * Math.PI / 4.5;
    return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(Math.pow(2, 20 * x - 10) * Math.sin((20 * x - 11.125) * c5)) / 2 : Math.pow(2, -20 * x + 10) * Math.sin((20 * x - 11.125) * c5) / 2 + 1;
  },
  easeInBounce: function easeInBounce(x) {
    (function (x) {
      var n1 = 7.5625;
      var d1 = 2.75;
      if (x < 1 / d1) {
        return n1 * x * x;
      } else if (x < 2 / d1) {
        return n1 * (x -= 1.5 / d1) * x + 0.75;
      } else if (x < 2.5 / d1) {
        return n1 * (x -= 2.25 / d1) * x + 0.9375;
      } else {
        return n1 * (x -= 2.625 / d1) * x + 0.984375;
      }
    })(1 - x);
  },
  easeOutBounce: function easeOutBounce(x) {
    return _easeOutBounce(x);
  }
}, transitionFunctions_defineProperty(_transitionFunctions, "easeInBounce", function easeInBounce(x) {
  return 1 - _easeOutBounce(1 - x);
}), transitionFunctions_defineProperty(_transitionFunctions, "easeInOutBounce", function easeInOutBounce(x) {
  return x < 0.5 ? (1 - _easeOutBounce(1 - 2 * x)) / 2 : (1 + _easeOutBounce(2 * x - 1)) / 2;
}), _transitionFunctions);
/* harmony default export */ const transitions_transitionFunctions = (transitionFunctions);
;// CONCATENATED MODULE: ./src/three-engine.js
function three_engine_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function three_engine_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? three_engine_ownKeys(Object(source), !0).forEach(function (key) { three_engine_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : three_engine_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function three_engine_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function three_engine_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = three_engine_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function three_engine_slicedToArray(arr, i) { return three_engine_arrayWithHoles(arr) || three_engine_iterableToArrayLimit(arr, i) || three_engine_unsupportedIterableToArray(arr, i) || three_engine_nonIterableRest(); }
function three_engine_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function three_engine_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return three_engine_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return three_engine_arrayLikeToArray(o, minLen); }
function three_engine_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function three_engine_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }
function three_engine_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function three_engine_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function three_engine_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function three_engine_createClass(Constructor, protoProps, staticProps) { if (protoProps) three_engine_defineProperties(Constructor.prototype, protoProps); if (staticProps) three_engine_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/*
Creator: Artur Brytkowski
https://www.fiverr.com/arturbrytkowski
*/




















var ThreeEngine = /*#__PURE__*/function () {
  function ThreeEngine() {
    var parameters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    three_engine_classCallCheck(this, ThreeEngine);
    this.parameters = parameters;
    if (!capabilities_WebGL.isWebGLAvailable()) {
      var errorMessage = 'WebGL is not supported by your browser';
      alert(errorMessage);
      return;
    }
    this.loadCss();
    this.setupDomElement();
    this.setParameter('DEV_MODE', false);
    this.setParameter('enableControls', this.DEV_MODE);
    this.setParameter('controlsEnabled', true);
    this.setParameter('enableStats', this.DEV_MODE);
    this.setParameter('enableGui', this.DEV_MODE);
    this.setParameter('disableContextMenu', false);
    this.setParameter('enablePostprocessing', false);
    this.setParameter('enableLoadingBar', false);
    this.setParameter('enableLoadingCircle', false);
    this.setParameter('cameraType', 'perspective');
    this.setParameter('controlsType', 'orbit');
    this.setParameter('enableControlsPan', false);
    this.setParameter('enableControlsDamping', true);
    this.setParameter('enableOrbitControlsZoomToCursor', false);
    this.setParameter('enableTestLights', false);
    this.setParameter('enableShadows', false);
    this.setParameter('enableAlpha', false);
    this.setParameter('enableAntialias', false);
    this.setParameter('enableAutoFullscreenOnMobile', false);
    this.setParameter('backgroundColor', undefined);
    this.setParameter('enableFXAA', false);
    this.setParameter('enableSMAA', false);
    this.setParameter('cameraPosition', new external_THREE_namespaceObject.Vector3(1, 1, 1));
    this.setParameter('cameraLookAt', new external_THREE_namespaceObject.Vector3(0, 0, 0));
    this.setParameter('cameraUp', external_THREE_namespaceObject.Object3D.DefaultUp.clone());
    this.setParameter('cameraZoom', 1);
    this.setParameter('perspectiveCameraFov', 30);
    this.setParameter('perspectiveCameraNear', 0.01);
    this.setParameter('perspectiveCameraFar', 1000);
    this.setParameter('orthographicCameraMinWidth', 1);
    this.setParameter('orthographicCameraMinHeight', 1);
    this.setParameter('orthographicCameraNear', -1000);
    this.setParameter('orthographicCameraFar', 1000);
    this.setParameter('cameraTransitionDuration', 1.5);
    this.setParameter('cameraTransitionFunction', transitions_transitionFunctions.easeInOutQuad);
    this.setParameter('enableSRGBEncoding', false);
    this.setParameter('assets', {}, this.parameters);
    this.setParameter('objectsToUpdate', [], this.parameters);
    for (var _i = 0, _Object$entries = Object.entries(this.parameters.callbacks || {}); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = three_engine_slicedToArray(_Object$entries[_i], 2),
        name = _Object$entries$_i[0],
        parameter = _Object$entries$_i[1];
      ThreeEngine.prototype[name] = parameter;
    }
    this.loaded = false;
    this.inited = false;
    this.initedLoaded = false;
    this.renderInited = false;
    this.isMouseDown = false;
    this.lastTouch = null;
    this._cameraUp = this.cameraUp.clone();
    this._cameraLookAt = this.cameraLookAt.clone();
    this._cameraPosition = this.cameraPosition.clone();
    this._cameraZoom = this.cameraZoom.clone();
    this.cameraTransition = null;
    this.clock = new external_THREE_namespaceObject.Clock();
    this.mouse = new external_THREE_namespaceObject.Vector2(1, 1);
    this.raycaster = new external_THREE_namespaceObject.Raycaster();
    this.scene = new external_THREE_namespaceObject.Scene();
    if (this.enableLoadingCircle) this.addLoadingCircle();
    if (this.enableLoadingBar) this.addLoadingBar();
    this.addRenderer();
    this.addCamera();
    this.addEventListeners();
    if (this.enableControls) this.addControls();
    if (this.enableStats) this.addStats();
    if (this.enableGui) this.addGui();
    if (this.enablePostprocessing) this.addPostProcessing();
    if (this.enableTestLights) this.addTestLights();
    if (this.init) {
      this.init(this);
      this.inited = true;
    }
    ;
    this.GameLoop();
  }
  three_engine_createClass(ThreeEngine, [{
    key: "setParameter",
    value: function setParameter(name, defaultValue) {
      var object = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.parameters.setup;
      this[name] = object !== undefined && object[name] !== undefined ? object[name] : defaultValue;
    }
  }, {
    key: "loadCss",
    value: function loadCss() {
      var domElement = document.createElement('style');
      domElement.innerHTML = styles_stylesheet;
      document.getElementsByTagName('head')[0].appendChild(domElement);
    }
  }, {
    key: "setupDomElement",
    value: function setupDomElement() {
      this.setParameter('domContainer', document.body);
      this.domElement = document.createElement('div');
      this.domElement.id = 'scene';
      this.domElement.style.width = '100%';
      this.domElement.style.height = '100%';
      this.domElement.style.position = 'relative';
      this.domElement.style.left = 0;
      this.domElement.style.top = 0;
      this.domContainer.appendChild(this.domElement);
      this.domElement.size = new external_THREE_namespaceObject.Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
    }
  }, {
    key: "addLoadingBar",
    value: function addLoadingBar() {
      if (this.loadingScreen === undefined) {
        this.loadingScreen = document.createElement('div');
        this.loadingScreen.classList.add('loadingScreen');
      }
      this.loadingBar = document.createElement('div');
      this.loadingBar.classList.add('loadingBar');
      this.loadingBarProgress = document.createElement('div');
      this.loadingBarProgress.classList.add('loadingBarProgress');
      this.loadingBar.appendChild(this.loadingBarProgress);
      this.loadingScreen.appendChild(this.loadingBar);
      this.domElement.appendChild(this.loadingScreen);
    }
  }, {
    key: "setLoadingBarVisibility",
    value: function setLoadingBarVisibility(value) {
      if (value) this.loadingScreen.classList.remove('hidden');else this.loadingScreen.classList.add('hidden');
    }
  }, {
    key: "setLoadingBarProgress",
    value: function setLoadingBarProgress(progress) {
      this.loadingBarProgress.style.width = 100 * progress + '%';
    }
  }, {
    key: "addLoadingCircle",
    value: function addLoadingCircle() {
      if (this.loadingScreen === undefined) {
        this.loadingScreen = document.createElement('div');
        this.loadingScreen.classList.add('loadingScreen');
      }
      this.loadingCircle = document.createElement('div');
      this.loadingCircle.classList.add('loadingCircle');
      this.loadingScreen.appendChild(this.loadingCircle);
      this.domElement.appendChild(this.loadingScreen);
    }
  }, {
    key: "setLoadingCircleVisibility",
    value: function setLoadingCircleVisibility(value) {
      if (value) this.loadingScreen.classList.remove('hidden');else this.loadingScreen.classList.add('hidden');
    }
  }, {
    key: "addPostProcessing",
    value: function addPostProcessing() {
      this.composer = new EffectComposer(this.renderer);
      this.renderPass = new RenderPass(this.scene, this.camera);
      this.composer.addPass(this.renderPass);
      if (this.enableFXAA) {
        this.fxaaPass = new ShaderPass(FXAAShader);
        this.composer.addPass(this.fxaaPass);
      }
      if (this.enableSMAA) {
        this.smaaPass = new SMAAPass(this.domElement.clientWidth * this.renderer.getPixelRatio(), this.domElement.clientHeight * this.renderer.getPixelRatio());
        this.composer.addPass(this.smaaPass);
      }
    }
  }, {
    key: "updateFxaaPass",
    value: function updateFxaaPass() {
      var pixelRatio = this.renderer.getPixelRatio();
      var uniforms = this.fxaaPass.material.uniforms;
      uniforms['resolution'].value.x = 1 / Math.ceil(this.domElement.clientWidth * pixelRatio);
      uniforms['resolution'].value.y = 1 / Math.ceil(this.domElement.clientHeight * pixelRatio);
    }
  }, {
    key: "addRenderer",
    value: function addRenderer() {
      this.renderer = new external_THREE_namespaceObject.WebGLRenderer({
        alpha: this.enableAlpha,
        antialias: this.enableAntialias
      });
      if (this.enableShadows) {
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = external_THREE_namespaceObject.PCFSoftShadowMap;
      }
      this.renderer.setSize(this.domElement.clientWidth, this.domElement.clientHeight);
      if (this.backgroundColor) this.renderer.setClearColor(this.backgroundColor);
      if (this.enableSRGBEncoding) this.renderer.outputEncoding = external_THREE_namespaceObject.sRGBEncoding;
      this.domElement.appendChild(this.renderer.domElement);
    }
  }, {
    key: "addCamera",
    value: function addCamera() {
      if (this.cameraType === 'perspective') {
        this.addPerspectiveCamera();
      } else if (this.cameraType === 'orthographic') {
        this.addOrthographicCamera();
      } else {
        return;
      }
      this.setCameraPosition();
    }
  }, {
    key: "addPerspectiveCamera",
    value: function addPerspectiveCamera() {
      this.camera = new external_THREE_namespaceObject.PerspectiveCamera(this.perspectiveCameraFov, this.domElement.clientWidth / this.domElement.clientHeight, this.perspectiveCameraNear, this.perspectiveCameraFar);
    }
  }, {
    key: "calculateOrtographicCameraSize",
    value: function calculateOrtographicCameraSize() {
      var cameraSize = new external_THREE_namespaceObject.Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
      if (this.orthographicCameraMinWidth / this.orthographicCameraMinHeight > cameraSize.x / cameraSize.y) {
        return new external_THREE_namespaceObject.Vector2(this.orthographicCameraMinWidth, this.orthographicCameraMinWidth / cameraSize.x * cameraSize.y);
      } else {
        return new external_THREE_namespaceObject.Vector2(this.orthographicCameraMinHeight * cameraSize.x / cameraSize.y, this.orthographicCameraMinHeight);
      }
    }
  }, {
    key: "addOrthographicCamera",
    value: function addOrthographicCamera() {
      var cameraSize = this.calculateOrtographicCameraSize();
      this.camera = new external_THREE_namespaceObject.OrthographicCamera(cameraSize.x / -2, cameraSize.x / 2, cameraSize.y / 2, cameraSize.y / -2, this.orthographicCameraNear, this.orthographicCameraFar);
    }
  }, {
    key: "addControls",
    value: function addControls() {
      if (this.controlsType === 'orbit') {
        this.addOrbitControls();
      } else if (this.controlsType === 'trackball') {
        this.addTrackballControls();
      } else if (this.controlsType === 'pointerlock') {
        this.addPointerLockControls();
      } else if (this.controlsType === 'arcball') {
        this.addArcballControls();
      }
      this.controls.enabled = this.controlsEnabled;
    }
  }, {
    key: "addTrackballControls",
    value: function addTrackballControls() {
      this.controls = new TrackballControls(this.camera, this.renderer.domElement);
      this.controls.staticMoving = !this.enableControlsDamping;
      this.controls.noPan = !this.enableControlsPan;
      this.controls.rotateSpeed = 3.5;
      this.controls.panSpeed = 0.2;
      this.controls.dynamicDampingFactor = 0.1;
      this.controls.target.copy(this.cameraLookAt);
    }
  }, {
    key: "addOrbitControls",
    value: function addOrbitControls() {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      this.controls.enableDamping = this.enableControlsDamping;
      this.controls.enablePan = this.enableControlsPan;
      this.controls.enableZoomToCursor = this.enableOrbitControlsZoomToCursor;
      this.controls.target.copy(this.cameraLookAt);
    }
  }, {
    key: "addPointerLockControls",
    value: function addPointerLockControls() {
      this.controls = new PointerLockControls(this.camera, this.renderer.domElement);
    }
  }, {
    key: "addArcballControls",
    value: function addArcballControls() {
      this.controls = new ArcballControls(this.camera, this.renderer.domElement);
    }
  }, {
    key: "addStats",
    value: function addStats() {
      this.stats = new stats_module();
      this.stats.showPanel(0);
      this.stats.dom.style.position = 'absolute';
      this.domElement.appendChild(this.stats.dom);
    }
  }, {
    key: "addGui",
    value: function addGui() {
      this.gui = new g({
        autoPlace: false
      });
      this.gui.close();
      this.gui.domElement.style.position = 'absolute';
      this.gui.domElement.style.right = 0;
      this.gui.domElement.style.top = 0;
      this.domElement.appendChild(this.gui.domElement);
    }
  }, {
    key: "assetsLoadedCheck",
    value: function assetsLoadedCheck() {
      var loaded = true;
      var totalAssetCount = Object.entries(this.assets).length;
      var loadedAssetCount = 0;
      if (!this.assets) loaded = false;else {
        for (var _i2 = 0, _Object$entries2 = Object.entries(this.assets); _i2 < _Object$entries2.length; _i2++) {
          var _Object$entries2$_i = three_engine_slicedToArray(_Object$entries2[_i2], 2),
            assetName = _Object$entries2$_i[0],
            asset = _Object$entries2$_i[1];
          if (!asset.loaded) loaded = false;else loadedAssetCount++;
        }
      }
      if (this.enableLoadingBar) this.setLoadingBarProgress(loadedAssetCount / totalAssetCount);
      return loaded;
    }
  }, {
    key: "resizeCheck",
    value: function resizeCheck() {
      return !this.domElement.size.clone().equals(this.domElement.size.set(this.domElement.clientWidth, this.domElement.clientHeight));
    }
  }, {
    key: "GameLoop",
    value: function GameLoop() {
      var _this = this;
      if (this.enableStats) this.stats.begin();
      requestAnimationFrame(function () {
        return _this.GameLoop();
      });
      if (this.resizeCheck()) this._onResize();
      this.renderScene();
      this._update();
      if (this.enableStats) this.stats.end();
    }
  }, {
    key: "updateCamera",
    value: function updateCamera() {
      if (this.cameraTransition !== null) this.cameraTransition.update();
      if (this.cameraTransition !== null && this.cameraTransition.ended) this.cameraTransition = null;
      if (this.enableControls && this.controls.enabled) {
        this.cameraUp.copy(external_THREE_namespaceObject.Object3D.DefaultUp);
        if (this.controls.target) this._cameraLookAt.copy(this.controls.target);
        this._cameraPosition.copy(this.camera.position);
        this._cameraUp.copy(this.camera.up);
        this._cameraZoom = this.camera.zoom;
        return;
      }
      var isCameraPositionReady = this.camera.position.equals(this.cameraPosition);
      var isCameraUpReady = this.camera.up.equals(this.cameraUp);
      var isCameraLookAtReady = this._cameraLookAt.equals(this.cameraLookAt);
      var isCameraZooomReady = this.camera.zoom === this.cameraZoom;
      if (this.cameraTransition === null && (!isCameraLookAtReady || !isCameraUpReady || !isCameraPositionReady || !isCameraZooomReady)) this.addCameraTransition();
    }
  }, {
    key: "addCameraTransition",
    value: function addCameraTransition() {
      var _this2 = this;
      this.camera.up.copy(external_THREE_namespaceObject.Object3D.DefaultUp);
      this._cameraUp.copy(external_THREE_namespaceObject.Object3D.DefaultUp);
      if (this.enableControls && this.controls.enabled && this.controls.target) {
        this._cameraLookAt.copy(this.controls.target);
      }
      var up = this.camera.localToWorld(this._cameraUp.clone()).sub(this._cameraPosition);
      this._cameraUp.copy(up);
      this.camera.up.copy(up);
      this.cameraTransition = new transitions_Transition([new transitions_TransitionObject(this, '_cameraPosition', {
        1: this.cameraPosition
      }), new transitions_TransitionObject(this, '_cameraUp', {
        1: this.cameraUp
      }), new transitions_TransitionObject(this, '_cameraLookAt', {
        1: this.cameraLookAt
      }), new transitions_TransitionObject(this, '_cameraZoom', {
        1: this.cameraZoom
      })], {
        autoplay: true,
        duration: this.cameraTransitionDuration,
        "function": this.cameraTransitionFunction,
        callbackEveryUpdate: function callbackEveryUpdate() {
          _this2.camera.position.copy(_this2._cameraPosition);
          _this2.camera.up.copy(_this2._cameraUp);
          _this2.camera.lookAt(_this2._cameraLookAt);
          _this2.camera.zoom = _this2._cameraZoom;
          if (_this2.enableControls && _this2.controls.target) _this2.controls.target.copy(_this2._cameraLookAt);
          _this2.camera.updateProjectionMatrix();
        }
      });
    }
  }, {
    key: "setCameraPosition",
    value: function setCameraPosition() {
      this.cameraTransition = null;
      this.camera.position.copy(this.cameraPosition);
      this.camera.up.copy(this.cameraUp);
      this.camera.lookAt(this.cameraLookAt);
      this.camera.zoom = this.cameraZoom;
    }
  }, {
    key: "updateObjects",
    value: function updateObjects() {
      var _iterator = three_engine_createForOfIteratorHelper(this.objectsToUpdate),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _objectToUpdate$objec;
          var objectToUpdate = _step.value;
          var argumentsConverted = [];
          if (objectToUpdate.arguments) {
            var _iterator2 = three_engine_createForOfIteratorHelper(objectToUpdate.arguments),
              _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var argument = _step2.value;
                argumentsConverted.push(argument.object[argument.property]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
          if (objectToUpdate.object.update !== undefined) (_objectToUpdate$objec = objectToUpdate.object).update.apply(_objectToUpdate$objec, argumentsConverted);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "clickableObjects",
    get: function get() {
      var clickableObjects = [];
      if (this.scene) {
        this.scene.traverse(function (object) {
          if (object.isClickable) clickableObjects.push(object);
        });
      }
      return clickableObjects.sort(function (a, b) {
        return a.hoverDistance - b.hoverDistance;
      });
    }
  }, {
    key: "handleClickableObjectsClick",
    value: function handleClickableObjectsClick(event) {
      var button = event.button;
      this.clickableObjects.reduce(function (isClicked, object) {
        object.isPressed = object.isDragged = object.isHovered;
        object.isLeftClicked = button === 0 && object.isHovered;
        object.isRightClicked = button === 2 && object.isHovered;
        object.isWheelClicked = button === 1 && object.isHovered;
        if (isClicked) object.isLeftClicked = object.isRightClicked = object.isWheelClicked = object.isPressed = object.isDragged = false;else if (object.isHovered) {
          if (object.isLeftClicked) object.isLeftClickNeedCallback = true;else if (object.isRightClicked) object.isRightClickNeedCallback = true;else if (object.isWheelClicked) object.isWheelClickNeedCallback = true;
        }
        return object.isHovered || isClicked;
      }, false);
    }
  }, {
    key: "handleClickableObjectsMouseUp",
    value: function handleClickableObjectsMouseUp() {
      this.clickableObjects.map(function (object) {
        return object.isPressed = object.isDragged = false;
      });
    }
  }, {
    key: "updateClickableObjects",
    value: function updateClickableObjects() {
      var isHovered = false;
      var _iterator3 = three_engine_createForOfIteratorHelper(this.clickableObjects),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var object = _step3.value;
          var lastIsHovered = object.isHovered;
          if (object.isClickDisabled) {
            object.isHovered = false;
            object.isLeftClicked = object.isRightClicked = object.isWheelClicked = false;
            object.isDragged = false;
            object.isPressed = false;
            object.isLeftClickNeedCallback = object.isRightClickNeedCallback = object.isWheelClickNeedCallback = false;
            continue;
          }
          if (object.isLeftClickNeedCallback) {
            object.isLeftClickNeedCallback = false;
            object.onClick();
          }
          if (object.isRightClickNeedCallback) {
            object.isRightClickNeedCallback = false;
            object.onRightClick();
          }
          if (object.isWheelClickNeedCallback) {
            object.isWheelClickNeedCallback = false;
            object.onWheelClick();
          }
          var clickableObject = object.clickableObject !== undefined ? object.clickableObject : object;
          object.isHovered = !isHovered && clickableObject.hoverCheck(this.mouse, this.camera);
          if (object.isHovered) {
            if (!lastIsHovered) {
              object.onHover();
            }
            object.onHoverUpdate();
          } else if (lastIsHovered) {
            object.onHoverEnd();
          }
          if (!object.isHovered) object.isPressed = false;
          if (object.isHovered) isHovered = true;
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      if (isHovered) window.cursorPointer();else window.cursorArrow();
    }
  }, {
    key: "_initLoaded",
    value: function _initLoaded() {
      if (this.DEV_MODE) this.promptDebugInfo();
      if (this.DEV_MODE) this.addDebugGuiFields();
    }
  }, {
    key: "_update",
    value: function _update() {
      this.loaded = this.assetsLoadedCheck();
      var DPR = window.devicePixelRatio.toFixed(5) * 1;
      if (getComputedStyle(document.documentElement).getPropertyValue('--DPR') != DPR) document.documentElement.style.setProperty('--DPR', DPR);
      if (this.enableLoadingCircle) this.setLoadingCircleVisibility(!this.initedLoaded);
      if (this.enableLoadingBar) this.setLoadingBarVisibility(!this.initedLoaded);
      this.updateCamera();
      this.updateClickableObjects();
      this.updateObjects();
      if (this.update) this.update(this);
      if (this.loaded && !this.initedLoaded) {
        this._initLoaded();
        if (this.initLoaded) this.initLoaded(this);
        this.initedLoaded = true;
      }
      if (this.initedLoaded && this.updateLoaded && this.renderInited) this.updateLoaded(this);
      if (this.initedLoaded && this.updateLoaded) this.renderInited = true;
      if (this.hover) this.hover(this);
      if (this.enableControls && this.controls.update) this.controls.update();
      if (this.enablePostprocessing && this.enableFXAA) this.updateFxaaPass();
    }
  }, {
    key: "renderScene",
    value: function renderScene() {
      if (this.enablePostprocessing) this.composer.render();else this.renderer.render(this.scene, this.camera);
    }
  }, {
    key: "addTestLights",
    value: function addTestLights() {
      var _this$gui;
      var minPos = -10;
      var maxPos = 10;
      var step = 0.05;
      var lightsGroup = new external_THREE_namespaceObject.Group();
      var lightsFolder = (_this$gui = this.gui) === null || _this$gui === void 0 ? void 0 : _this$gui.addFolder('Lights');
      lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.close();
      var ambientLight = new external_THREE_namespaceObject.AmbientLight();
      ambientLight.intensity = 0.6235;
      var ambientLightFolder = lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.addFolder('AmbientLight');
      var ambientLightEnableObject = new ( /*#__PURE__*/function () {
        function _class() {
          three_engine_classCallCheck(this, _class);
        }
        return three_engine_createClass(_class);
      }())();
      ambientLightEnableObject._enabled = true;
      ambientLightEnableObject.__defineGetter__('enabled', function () {
        return this._enabled || false;
      });
      ambientLightEnableObject.__defineSetter__('enabled', function (val) {
        this._enabled = val;
        if (val) lightsGroup.add(ambientLight);else ambientLight.removeFromParent();
      });
      ambientLightFolder === null || ambientLightFolder === void 0 ? void 0 : ambientLightFolder.add(ambientLightEnableObject, 'enabled').listen();
      ambientLightFolder === null || ambientLightFolder === void 0 ? void 0 : ambientLightFolder.add(ambientLight, 'intensity').min(0).max(1).listen().setValue(0.6235).step(step * 0.01);
      ambientLightFolder === null || ambientLightFolder === void 0 ? void 0 : ambientLightFolder.addColor(ambientLight, 'color');
      ambientLightEnableObject.enabled = true;
      ambientLightFolder === null || ambientLightFolder === void 0 ? void 0 : ambientLightFolder.close();
      var directionalLight = new external_THREE_namespaceObject.DirectionalLight();
      directionalLight.intensity = 0.4;
      directionalLight.position.set(-8, -9, -10);
      var directionalLightFolder = lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.addFolder('DirectionalLight');
      var directionalLightEnableObject = new ( /*#__PURE__*/function () {
        function _class2() {
          three_engine_classCallCheck(this, _class2);
        }
        return three_engine_createClass(_class2);
      }())();
      directionalLightEnableObject.__defineGetter__('enabled', function () {
        return this._enabled || false;
      });
      directionalLightEnableObject.__defineSetter__('enabled', function (val) {
        this._enabled = val;
        if (val) lightsGroup.add(directionalLight);else directionalLight.removeFromParent();
      });
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLightEnableObject, 'enabled').listen();
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight, 'intensity').min(0).max(1).step(step * 0.01).listen().setValue(0.4);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.addColor(directionalLight, 'color');
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight, 'castShadow');
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(-8);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(-9);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(-10);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight.target.position, 'x').min(minPos).max(maxPos).name('target x').step(step * 0.01);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight.target.position, 'y').min(minPos).max(maxPos).name('target y').step(step * 0.01);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.add(directionalLight.target.position, 'z').min(minPos).max(maxPos).name('target z').step(step * 0.01);
      directionalLightFolder === null || directionalLightFolder === void 0 ? void 0 : directionalLightFolder.close();
      directionalLightEnableObject.enabled = true;
      lightsGroup.add(directionalLight.target);
      var hemisphereLight = new external_THREE_namespaceObject.HemisphereLight();
      hemisphereLight.intensity = 1;
      hemisphereLight.color.set(0x1c1c1c);
      hemisphereLight.groundColor.set(0x000000);
      var hemisphereLightFolder = lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.addFolder('HemisphereLight');
      var hemisphereLightEnableObject = new ( /*#__PURE__*/function () {
        function _class3() {
          three_engine_classCallCheck(this, _class3);
        }
        return three_engine_createClass(_class3);
      }())();
      hemisphereLightEnableObject.__defineGetter__('enabled', function () {
        return this._enabled || false;
      });
      hemisphereLightEnableObject.__defineSetter__('enabled', function (val) {
        this._enabled = val;
        if (val) lightsGroup.add(hemisphereLight);else hemisphereLight.removeFromParent();
      });
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLightEnableObject, 'enabled').listen();
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight, 'intensity').min(0).max(1).step(step * 0.01).listen().setValue(1);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.addColor(hemisphereLight, 'color').listen().setValue(new external_THREE_namespaceObject.Color(0x1c1c1c));
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.addColor(hemisphereLight, 'groundColor').listen().setValue(new external_THREE_namespaceObject.Color(0x000000));
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight.position, 'x').min(-1).max(1).step(step * 0.01);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight.position, 'y').min(-1).max(1).step(step * 0.01);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight.position, 'z').min(-1).max(1).step(step * 0.01);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.close();
      hemisphereLightEnableObject.enabled = true;
      var pointLight = new external_THREE_namespaceObject.PointLight();
      pointLight.intensity = 0.4;
      pointLight.distance = 0;
      pointLight.decay = 1;
      pointLight.position.set(8.95, 10, 10);
      var pointLightFolder = lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.addFolder('PointLight');
      var pointLightEnableObject = new ( /*#__PURE__*/function () {
        function _class4() {
          three_engine_classCallCheck(this, _class4);
        }
        return three_engine_createClass(_class4);
      }())();
      pointLightEnableObject.__defineGetter__('enabled', function () {
        return this._enabled || false;
      });
      pointLightEnableObject.__defineSetter__('enabled', function (val) {
        this._enabled = val;
        if (val) lightsGroup.add(pointLight);else pointLight.removeFromParent();
      });
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLightEnableObject, 'enabled').listen();
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight, 'intensity').min(0).max(1).step(step * 0.01).listen().setValue(0.4);
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.addColor(pointLight, 'color');
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight, 'castShadow');
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight, 'power').min(0).max(50).step(step * 0.01).listen();
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight, 'distance').min(0).max(10).step(step * 0.01).listen().setValue(0);
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight, 'decay').min(0).max(10).step(step * 0.01).listen().setValue(1);
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(8.95);
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(10);
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.add(pointLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01).listen().setValue(10);
      pointLightFolder === null || pointLightFolder === void 0 ? void 0 : pointLightFolder.close();
      pointLightEnableObject.enabled = true;
      var rectAreaLight = new external_THREE_namespaceObject.RectAreaLight();
      var rectAreaLightFolder = lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.addFolder('RectAreaLight');
      var rectAreaLightEnableObject = new ( /*#__PURE__*/function () {
        function _class5() {
          three_engine_classCallCheck(this, _class5);
        }
        return three_engine_createClass(_class5);
      }())();
      rectAreaLightEnableObject.__defineGetter__('enabled', function () {
        return this._enabled || false;
      });
      rectAreaLightEnableObject.__defineSetter__('enabled', function (val) {
        this._enabled = val;
        if (val) lightsGroup.add(rectAreaLight);else rectAreaLight.removeFromParent();
      });
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLightEnableObject, 'enabled').listen();
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight, 'intensity').min(0).max(1).step(step * 0.01);
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.addColor(rectAreaLight, 'color');
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight, 'power').min(0).max(50).step(step * 0.01);
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight, 'width').min(0).max(5).step(step * 0.01);
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight, 'height').min(0).max(5).step(step * 0.01);
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01);
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01);
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01);
      var rectAreaLightLookAt = new external_THREE_namespaceObject.Vector3();
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLightLookAt, 'x').min(minPos).max(maxPos).step(step * 0.01).onChange(function () {
        return rectAreaLight.lookAt(rectAreaLightLookAt);
      }).name('lookAt x');
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLightLookAt, 'y').min(minPos).max(maxPos).step(step * 0.01).onChange(function () {
        return rectAreaLight.lookAt(rectAreaLightLookAt);
      }).name('lookAt y');
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.add(rectAreaLightLookAt, 'z').min(minPos).max(maxPos).step(step * 0.01).onChange(function () {
        return rectAreaLight.lookAt(rectAreaLightLookAt);
      }).name('lookAt z');
      rectAreaLightFolder === null || rectAreaLightFolder === void 0 ? void 0 : rectAreaLightFolder.close();
      var spotLight = new external_THREE_namespaceObject.SpotLight();
      var spotLightFolder = lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.addFolder('SpotLight');
      var spotLightEnableObject = new ( /*#__PURE__*/function () {
        function _class6() {
          three_engine_classCallCheck(this, _class6);
        }
        return three_engine_createClass(_class6);
      }())();
      spotLightEnableObject.__defineGetter__('enabled', function () {
        return this._enabled || false;
      });
      spotLightEnableObject.__defineSetter__('enabled', function (val) {
        this._enabled = val;
        if (val) lightsGroup.add(spotLight);else spotLight.removeFromParent();
      });
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLightEnableObject, 'enabled').listen();
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'intensity').min(0).max(1).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.addColor(spotLight, 'color');
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'castShadow');
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'power').min(0).max(50).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'distance').min(0).max(10).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'decay').min(0).max(10).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'angle').min(0).max(Math.PI / 2).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight, 'penumbra').min(0).max(1).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight.position, 'x').min(minPos).max(maxPos).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight.position, 'y').min(minPos).max(maxPos).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight.position, 'z').min(minPos).max(maxPos).step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight.target.position, 'x').min(minPos).max(maxPos).name('target x').step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight.target.position, 'y').min(minPos).max(maxPos).name('target y').step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.add(spotLight.target.position, 'z').min(minPos).max(maxPos).name('target z').step(step * 0.01);
      spotLightFolder === null || spotLightFolder === void 0 ? void 0 : spotLightFolder.close();
      lightsGroup.add(spotLight.target);
      this.scene.add(lightsGroup);
      return lightsGroup;
    }
  }, {
    key: "requestFullscreen",
    value: function requestFullscreen() {
      if (window.mobileCheck() && !window.isIOS) {
        try {
          if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
          }
        } catch (e) {}
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this3 = this;
      this.domElement.addEventListener('mousemove', function (event) {
        if (_this3.enableControls && _this3.controls.enabled && _this3.isMouseDown) _this3.cameraTransition = null;
        _this3._onMouseMove(event, _this3);
        if (_this3.onMouseMove) _this3.onMouseMove(event, _this3);
      });
      this.domElement.addEventListener('mousedown', function (event) {
        if (_this3.enableControls && _this3.controls.enabled) _this3.cameraTransition = null;
        if (_this3.enableControls && _this3.controlsType === 'pointerlock') _this3.controls.lock();
        _this3.isMouseDown = true;
        if (_this3.onMouseDown) _this3.onMouseDown(event, _this3);
        _this3.handleClickableObjectsClick(event);
        if (_this3.enableAutoFullscreenOnMobile) _this3.requestFullscreen();
      }, false);
      this.domElement.addEventListener('mouseup', function (event) {
        _this3.isMouseDown = false;
        if (_this3.onMouseUp) _this3.onMouseUp(event, _this3);
        _this3.handleClickableObjectsMouseUp();
      });
      this.domElement.addEventListener('touchstart', function (event) {
        if (_this3.enableControls && _this3.controls.enabled) _this3.cameraTransition = null;
        if (event.touches && event.touches.length > 0) _this3._onMouseMove({
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY
        });
        if (_this3.onTouchStart) _this3.onTouchStart(event, _this3, _this3.lastTouch);
        if (event.touches && event.touches.length > 0) _this3.lastTouch = event.touches[0];
        if (_this3.enableAutoFullscreenOnMobile) _this3.requestFullscreen();
      });
      this.domElement.addEventListener('touchmove', function (event) {
        if (event.touches && event.touches.length > 0) _this3._onMouseMove({
          clientX: event.touches[0].clientX,
          clientY: event.touches[0].clientY
        });
        if (_this3.onTouchMove) _this3.onTouchMove(event, _this3, _this3.lastTouch);
        if (event.touches && event.touches.length > 0) _this3.lastTouch = event.touches[0];
      });
      this.domElement.addEventListener('touchend', function (event) {
        if (_this3.onTouchEnd) _this3.onTouchEnd(event, _this3, _this3.lastTouch);
        if (event.touches && event.touches.length > 0) _this3.lastTouch = event.touches[0];
      });
      this.domElement.addEventListener('wheel', function (event) {
        if (_this3.enableControls && _this3.controls.enabled) _this3.cameraTransition = null;
        if (_this3.onWheel) _this3.onWheel(event, _this3);
      });
      this.domElement.addEventListener('scroll', function (event) {
        if (_this3.onScroll) _this3.onScroll(event, _this3);
      });
      this.domElement.addEventListener('keydown', function (event) {
        if (_this3.onKeydown) _this3.onKeydown(event, _this3);
      });
      if (this.disableContextMenu) this.domElement.addEventListener('contextmenu', function (event) {
        return event.preventDefault();
      });
    }
  }, {
    key: "_onResize",
    value: function _onResize() {
      this.renderer.setPixelRatio(window.devicePixelRatio);
      if (this.enablePostprocessing) this.composer.setPixelRatio(window.devicePixelRatio);
      var width = this.domElement.clientWidth;
      var height = this.domElement.clientHeight;
      this.renderer.setSize(width, height);
      if (this.enablePostprocessing) this.composer.setSize(width, height);
      this.camera.aspect = width / height;
      if (this.camera.isOrthographicCamera) {
        var cameraSize = this.calculateOrtographicCameraSize();
        this.camera.left = -cameraSize.x / 2;
        this.camera.right = cameraSize.x / 2;
        this.camera.top = cameraSize.y / 2;
        this.camera.bottom = -cameraSize.y / 2;
      }
      this.camera.updateProjectionMatrix();
    }
  }, {
    key: "_onMouseMove",
    value: function _onMouseMove(event) {
      this.mouseLast = three_engine_objectSpread({}, this.mouse);
      this.mouse.x = (event.clientX - this.domElement.getBoundingClientRect().left) / this.domElement.clientWidth * 2 - 1;
      this.mouse.y = -((event.clientY - this.domElement.getBoundingClientRect().top) / this.domElement.clientHeight) * 2 + 1;
    }
  }, {
    key: "promptDebugInfo",
    value: function promptDebugInfo() {
      var capabilities = {};
      for (var _i3 = 0, _Object$entries3 = Object.entries(this.renderer.capabilities); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = three_engine_slicedToArray(_Object$entries3[_i3], 2),
          property = _Object$entries3$_i[0],
          value = _Object$entries3$_i[1];
        if (value instanceof Function) {
          capabilities[property] = value();
        } else {
          capabilities[property] = value;
        }
      }
      console.log('three.js version: ' + external_THREE_namespaceObject.REVISION);
      console.log('renderer capabilities', capabilities);
    }
  }, {
    key: "randomCameraPosition",
    value: function randomCameraPosition() {
      this.cameraTransition = null;
      this.cameraLookAt.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
      this.cameraPosition.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10);
      this.cameraUp.set(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).normalize();
      this.cameraZoom = Math.random() + 1;
    }
  }, {
    key: "addDebugGuiFields",
    value: function addDebugGuiFields() {
      var _this$gui2,
        _this4 = this;
      var debugFolder = (_this$gui2 = this.gui) === null || _this$gui2 === void 0 ? void 0 : _this$gui2.addFolder('Debug');
      debugFolder.add({
        promptRendererInfo: function promptRendererInfo() {
          return console.log(_this4.renderer.info);
        }
      }, 'promptRendererInfo').name('Prompt renderer info');
      debugFolder.add(this, 'addCameraTransition').name('Add camera transition');
      debugFolder.add(this, 'setCameraPosition').name('Set camera position');
      debugFolder.add(this.controls, 'enabled').listen().name('Controls enabled').listen();
      debugFolder.close();
    }
  }]);
  return ThreeEngine;
}();
function setTextureQuality() {
  var textureQualitySizes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    'ultra': 14580,
    'high': 10240,
    'medium': 7290,
    'low': 4860,
    'very-low': 2048
  };
  var renderer = new external_THREE_namespaceObject.WebGLRenderer();
  ThreeEngine.prototype.maxTextureSize = renderer.capabilities.maxTextureSize;
  ThreeEngine.prototype.maxTextures = renderer.capabilities.maxTextures;
  var textureQuality = 'very-low';
  for (var _i4 = 0, _Object$entries4 = Object.entries(textureQualitySizes); _i4 < _Object$entries4.length; _i4++) {
    var _Object$entries4$_i = three_engine_slicedToArray(_Object$entries4[_i4], 2),
      _textureQuality = _Object$entries4$_i[0],
      textureSize = _Object$entries4$_i[1];
    if (textureSize > textureQualitySizes[ThreeEngine.textureQuality] && textureSize <= ThreeEngine.maxTextureSize) {
      textureQuality = _textureQuality;
    }
  }
  if (window.mobileCheck()) textureQuality = 'very-low';
  ThreeEngine.prototype.textureQuality = textureQuality;
}
setTextureQuality();
/* harmony default export */ const three_engine = (ThreeEngine);
})();

ThreeEngine = __webpack_exports__["default"];
/******/ })()
;