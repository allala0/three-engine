import * as __WEBPACK_EXTERNAL_MODULE_three__ from "three";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_EffectComposer_js_5fede484__ from "three/addons/postprocessing/EffectComposer.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_RenderPass_js_8f6528ce__ from "three/addons/postprocessing/RenderPass.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_ShaderPass_js_85531946__ from "three/addons/postprocessing/ShaderPass.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_shaders_FXAAShader_js_8a45499c__ from "three/addons/shaders/FXAAShader.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_SMAAPass_js_eb51e88e__ from "three/addons/postprocessing/SMAAPass.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_controls_TrackballControls_js_cabf05ee__ from "three/addons/controls/TrackballControls.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_controls_PointerLockControls_js_3b59ddb1__ from "three/addons/controls/PointerLockControls.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_controls_ArcballControls_js_e0465d91__ from "three/addons/controls/ArcballControls.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_libs_lil_gui_module_min_js_d0859151__ from "three/addons/libs/lil-gui.module.min.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_libs_stats_module_js_b516c51e__ from "three/addons/libs/stats.module.js";
import * as __WEBPACK_EXTERNAL_MODULE_three_addons_capabilities_WebGL_js_8a286a05__ from "three/addons/capabilities/WebGL.js";
/******/ var __webpack_modules__ = ({

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

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ three_engine)
});

;// CONCATENATED MODULE: external "three"
var x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var y = x => () => x
const external_three_namespaceObject = x({ ["AmbientLight"]: () => __WEBPACK_EXTERNAL_MODULE_three__.AmbientLight, ["Box3"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Box3, ["Clock"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Clock, ["Color"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Color, ["DirectionalLight"]: () => __WEBPACK_EXTERNAL_MODULE_three__.DirectionalLight, ["Euler"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Euler, ["EventDispatcher"]: () => __WEBPACK_EXTERNAL_MODULE_three__.EventDispatcher, ["Group"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Group, ["HemisphereLight"]: () => __WEBPACK_EXTERNAL_MODULE_three__.HemisphereLight, ["MOUSE"]: () => __WEBPACK_EXTERNAL_MODULE_three__.MOUSE, ["Mesh"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Mesh, ["Object3D"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Object3D, ["OrthographicCamera"]: () => __WEBPACK_EXTERNAL_MODULE_three__.OrthographicCamera, ["PCFSoftShadowMap"]: () => __WEBPACK_EXTERNAL_MODULE_three__.PCFSoftShadowMap, ["PerspectiveCamera"]: () => __WEBPACK_EXTERNAL_MODULE_three__.PerspectiveCamera, ["Plane"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Plane, ["PointLight"]: () => __WEBPACK_EXTERNAL_MODULE_three__.PointLight, ["Quaternion"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Quaternion, ["REVISION"]: () => __WEBPACK_EXTERNAL_MODULE_three__.REVISION, ["Ray"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Ray, ["Raycaster"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Raycaster, ["RectAreaLight"]: () => __WEBPACK_EXTERNAL_MODULE_three__.RectAreaLight, ["Scene"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Scene, ["Spherical"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Spherical, ["SpotLight"]: () => __WEBPACK_EXTERNAL_MODULE_three__.SpotLight, ["TOUCH"]: () => __WEBPACK_EXTERNAL_MODULE_three__.TOUCH, ["Triangle"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Triangle, ["Vector2"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Vector2, ["Vector3"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Vector3, ["Vector4"]: () => __WEBPACK_EXTERNAL_MODULE_three__.Vector4, ["WebGLRenderer"]: () => __WEBPACK_EXTERNAL_MODULE_three__.WebGLRenderer, ["sRGBEncoding"]: () => __WEBPACK_EXTERNAL_MODULE_three__.sRGBEncoding });
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
external_three_namespaceObject.Color.prototype.moveTo = function (to, amount) {
  var r = this.r.moveTo(to.r, amount);
  var g = this.g.moveTo(to.g, amount);
  var b = this.b.moveTo(to.b, amount);
  return new external_three_namespaceObject.Color(r, g, b);
};
external_three_namespaceObject.Vector2.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_three_namespaceObject.Vector2(to.x - from.x, to.y - from.y);
  return new external_three_namespaceObject.Vector2(from.x + relVector.x * amount, from.y + relVector.y * amount);
};
external_three_namespaceObject.Vector3.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_three_namespaceObject.Vector3(to.x - from.x, to.y - from.y, to.z - from.z);
  return new external_three_namespaceObject.Vector3(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount);
};
external_three_namespaceObject.Vector4.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_three_namespaceObject.Vector4(to.x - from.x, to.y - from.y, to.z - from.z, to.w - from.w);
  return new external_three_namespaceObject.Vector3(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount, from.w + relVector.w * amount);
};
external_three_namespaceObject.Euler.prototype.moveTo = function (to, amount) {
  var from = this;
  var relVector = new external_three_namespaceObject.Vector3(to.x - from.x, to.y - from.y, to.z - from.z);
  return new external_three_namespaceObject.Euler(from.x + relVector.x * amount, from.y + relVector.y * amount, from.z + relVector.z * amount, from.order);
};
external_three_namespaceObject.Object3D.prototype.getSurface = function () {
  var surface = 0;
  this.traverse(function (object) {
    if (object.isMesh && object.geometry && object.geometry.isBufferGeometry) {
      var geometry = object.geometry;
      var face = new external_three_namespaceObject.Triangle();
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
external_three_namespaceObject.Object3D.prototype.getVolume = function () {
  var volume = 0;
  var signedVolumeOfTriangle = function signedVolumeOfTriangle(p1, p2, p3) {
    return p1.dot(p2.cross(p3)) / 6.0;
  };
  this.traverse(function (object) {
    if (object.isMesh && object.geometry && object.geometry.isBufferGeometry) {
      var geometry = object.geometry;
      var isIndexed = geometry.index !== null;
      var position = geometry.attributes.position;
      var p1 = new external_three_namespaceObject.Vector3(),
        p2 = new external_three_namespaceObject.Vector3(),
        p3 = new external_three_namespaceObject.Vector3();
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
external_three_namespaceObject.Object3D.prototype.getSize = function () {
  var bbox = new external_three_namespaceObject.Box3();
  bbox.setFromObject(this);
  return new external_three_namespaceObject.Vector3(bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y, bbox.max.z - bbox.min.z);
};
external_three_namespaceObject.Object3D.prototype.centerGeometry = function () {
  var centerPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new external_three_namespaceObject.Vector3();
  // not working properly
  this.updateMatrix();
  centerPosition = centerPosition.clone();
  var bbox = new external_three_namespaceObject.Box3();
  bbox.setFromObject(this);
  var positionDelta = new external_three_namespaceObject.Vector3();
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
external_three_namespaceObject.Object3D.prototype.center = function () {
  var centerPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new external_three_namespaceObject.Vector3();
  var parent = this.parent;
  this.removeFromParent();
  this.updateMatrix();
  centerPosition = centerPosition.clone();
  this.position.copy(new external_three_namespaceObject.Vector3());
  var bbox = new external_three_namespaceObject.Box3();
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
external_three_namespaceObject.Mesh.prototype.centerGeometry = function () {
  var centerPosition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new external_three_namespaceObject.Vector3();
  this.updateMatrix();
  centerPosition = centerPosition.clone();
  var bbox = new external_three_namespaceObject.Box3();
  bbox.setFromObject(this);
  var positionDelta = new external_three_namespaceObject.Vector3();
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
external_three_namespaceObject.Object3D.prototype.normalize = function () {
  var axis = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'y';
  this.setSize(1, axis);
  return this;
};
external_three_namespaceObject.Object3D.prototype.setSize = function (size) {
  var axis = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'y';
  this.updateMatrix();
  var bbox = new external_three_namespaceObject.Box3();
  bbox.setFromObject(this);
  var sizeOld = bbox.max[axis] - bbox.min[axis];
  var newScale = size / sizeOld * this.scale[axis];
  this.scale.copy(new external_three_namespaceObject.Vector3(newScale, newScale, newScale));
  this.updateMatrix();
  this.traverse(function (object) {
    if (object.geometry) {
      object.geometry.computeBoundingBox();
      object.geometry.computeBoundingSphere();
    }
  });
  return this;
};
external_three_namespaceObject.Object3D.prototype.hoverCheck = function (mouse, camera) {
  var raycaster = new external_three_namespaceObject.Raycaster();
  raycaster.setFromCamera(mouse, camera);
  var intersection = raycaster.intersectObject(this);
  if (intersection.length > 0) this.hoverDistance = intersection[0].distance;else this.hoverDistance = Infinity;
  return intersection.length > 0;
};
external_three_namespaceObject.Object3D.prototype.dispose = function () {
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
external_three_namespaceObject.Object3D.prototype.setupClickable = function () {
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
;// CONCATENATED MODULE: external "three/addons/postprocessing/EffectComposer.js"
var EffectComposer_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var EffectComposer_js_y = x => () => x
const EffectComposer_js_namespaceObject = EffectComposer_js_x({ ["EffectComposer"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_EffectComposer_js_5fede484__.EffectComposer });
;// CONCATENATED MODULE: external "three/addons/postprocessing/RenderPass.js"
var RenderPass_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var RenderPass_js_y = x => () => x
const RenderPass_js_namespaceObject = RenderPass_js_x({ ["RenderPass"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_RenderPass_js_8f6528ce__.RenderPass });
;// CONCATENATED MODULE: external "three/addons/postprocessing/ShaderPass.js"
var ShaderPass_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var ShaderPass_js_y = x => () => x
const ShaderPass_js_namespaceObject = ShaderPass_js_x({ ["ShaderPass"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_ShaderPass_js_85531946__.ShaderPass });
;// CONCATENATED MODULE: external "three/addons/shaders/FXAAShader.js"
var FXAAShader_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var FXAAShader_js_y = x => () => x
const FXAAShader_js_namespaceObject = FXAAShader_js_x({ ["FXAAShader"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_shaders_FXAAShader_js_8a45499c__.FXAAShader });
;// CONCATENATED MODULE: external "three/addons/postprocessing/SMAAPass.js"
var SMAAPass_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var SMAAPass_js_y = x => () => x
const SMAAPass_js_namespaceObject = SMAAPass_js_x({ ["SMAAPass"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_postprocessing_SMAAPass_js_eb51e88e__.SMAAPass });
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
    _this.target = new external_three_namespaceObject.Vector3();

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
      LEFT: external_three_namespaceObject.MOUSE.ROTATE,
      MIDDLE: external_three_namespaceObject.MOUSE.DOLLY,
      RIGHT: external_three_namespaceObject.MOUSE.PAN
    };

    // Touch fingers
    _this.touches = {
      ONE: external_three_namespaceObject.TOUCH.ROTATE,
      TWO: external_three_namespaceObject.TOUCH.DOLLY_PAN
    };

    // for reset
    _this.target0 = _this.target.clone();
    _this.position0 = _this.object.position.clone();
    _this.zoom0 = _this.object.zoom;

    // the target DOM element for key events
    _this._domElementKeyEvents = null;

    // ZOOM-TO-CURSOR
    _this.cursorScreen = new external_three_namespaceObject.Vector3();
    _this.cursorWorld = new external_three_namespaceObject.Vector3();
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
      var newCursorWorld = new external_three_namespaceObject.Vector3(scope.cursorScreen.x, scope.cursorScreen.y, scope.target.clone().project(scope.object).z).clone().unproject(scope.object);
      var delta = new external_three_namespaceObject.Vector3().subVectors(scope.cursorWorld, newCursorWorld);
      var target = null;
      if (!scope.screenSpacePanning) {
        var plane = new external_three_namespaceObject.Plane(scope.object.up.clone());
        var ray = new external_three_namespaceObject.Ray(scope.object.position.clone(), new external_three_namespaceObject.Vector3().subVectors(scope.target.clone().add(delta), scope.object.position).normalize());
        target = ray.intersectPlane(plane, new external_three_namespaceObject.Vector3());
        if (target === null || new external_three_namespaceObject.Vector3().subVectors(scope.object.position, scope.target).normalize().multiply(scope.object.up.clone().normalize()).length() < 0.00001) {
          scope.target.add(delta);
          if (scope.target.length() > this.maxTargetDistanceFromOrigin) scope.target.setLength(this.maxTargetDistanceFromOrigin);
          scope.object.position.add(new external_three_namespaceObject.Vector3().subVectors(scope.target, lastTarget));
          var mulVector = new external_three_namespaceObject.Vector3(1 - scope.object.up.x, 1 - scope.object.up.y, 1 - scope.object.up.z);
          scope.target.multiply(mulVector);
          scope.object.position.multiply(mulVector);
        } else {
          if (target.length() > this.maxTargetDistanceFromOrigin) target.setLength(this.maxTargetDistanceFromOrigin);
          scope.target.copy(target);
          scope.object.position.add(new external_three_namespaceObject.Vector3().subVectors(scope.target, lastTarget));
        }
      } else {
        scope.target.add(delta);
        scope.object.position.add(delta);
      }
    };
    _this.setCursorWorld = function () {
      scope.cursorWorld.copy(new external_three_namespaceObject.Vector3(scope.cursorScreen.x, scope.cursorScreen.y, scope.target.clone().project(scope.object).z).unproject(scope.object));
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
      var offset = new external_three_namespaceObject.Vector3();

      // so camera.up is the orbit axis
      var quat = new external_three_namespaceObject.Quaternion().setFromUnitVectors(object.up, new external_three_namespaceObject.Vector3(0, 1, 0));
      var quatInverse = quat.clone().invert();
      var lastPosition = new external_three_namespaceObject.Vector3();
      var lastQuaternion = new external_three_namespaceObject.Quaternion();
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
          scope.object.position.add(new external_three_namespaceObject.Vector3().subVectors(scope.target, lastTarget));
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
    var spherical = new external_three_namespaceObject.Spherical();
    var sphericalDelta = new external_three_namespaceObject.Spherical();
    var scale = 1;
    var panOffset = new external_three_namespaceObject.Vector3();
    var zoomChanged = false;
    var rotateStart = new external_three_namespaceObject.Vector2();
    var rotateEnd = new external_three_namespaceObject.Vector2();
    var rotateDelta = new external_three_namespaceObject.Vector2();
    var panStart = new external_three_namespaceObject.Vector2();
    var panEnd = new external_three_namespaceObject.Vector2();
    var panDelta = new external_three_namespaceObject.Vector2();
    var dollyStart = new external_three_namespaceObject.Vector2();
    var dollyEnd = new external_three_namespaceObject.Vector2();
    var dollyDelta = new external_three_namespaceObject.Vector2();
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
      var v = new external_three_namespaceObject.Vector3();
      return function panLeft(distance, objectMatrix) {
        v.setFromMatrixColumn(objectMatrix, 0); // get X column of objectMatrix
        v.multiplyScalar(-distance);
        panOffset.add(v);
      };
    }();
    var panUp = function () {
      var v = new external_three_namespaceObject.Vector3();
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
      var offset = new external_three_namespaceObject.Vector3();
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
        case external_three_namespaceObject.MOUSE.DOLLY:
          if (scope.enableZoom === false) return;
          handleMouseDownDolly(event);
          state = STATE.DOLLY;
          break;
        case external_three_namespaceObject.MOUSE.ROTATE:
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
        case external_three_namespaceObject.MOUSE.PAN:
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
            case external_three_namespaceObject.TOUCH.ROTATE:
              if (scope.enableRotate === false) return;
              handleTouchStartRotate();
              state = STATE.TOUCH_ROTATE;
              break;
            case external_three_namespaceObject.TOUCH.PAN:
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
            case external_three_namespaceObject.TOUCH.DOLLY_PAN:
              if (scope.enableZoom === false && scope.enablePan === false) return;
              handleTouchStartDollyPan();
              state = STATE.TOUCH_DOLLY_PAN;
              break;
            case external_three_namespaceObject.TOUCH.DOLLY_ROTATE:
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
        position = new external_three_namespaceObject.Vector2();
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
      scope.cursorScreen.copy(new external_three_namespaceObject.Vector3((event.clientX - scope.domElement.getBoundingClientRect().left) / scope.domElement.clientWidth * 2 - 1, -((event.clientY - scope.domElement.getBoundingClientRect().top) / scope.domElement.clientHeight) * 2 + 1, scope.target.clone().project(scope.object).z));
    });
    var handleTouch = function handleTouch(event) {
      var touches = event.touches;
      var touch;
      if (touches.length === 1) {
        touch = new external_three_namespaceObject.Vector2(touches[0].clientX, touches[0].clientY);
      } else if (touches.length === 2) {
        touch = new external_three_namespaceObject.Vector2((touches[0].clientX + touches[1].clientX) / 2, (touches[0].clientY + touches[1].clientY) / 2);
      }
      if (touch !== undefined) {
        scope.cursorScreen.copy(new external_three_namespaceObject.Vector3((touch.x - scope.domElement.getBoundingClientRect().left) / scope.domElement.clientWidth * 2 - 1, -((touch.y - scope.domElement.getBoundingClientRect().top) / scope.domElement.clientHeight) * 2 + 1, scope.target.clone().project(scope.object).z));
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
}(external_three_namespaceObject.EventDispatcher); // This set of controls performs orbiting, dollying (zooming), and panning.
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

;// CONCATENATED MODULE: external "three/addons/controls/TrackballControls.js"
var TrackballControls_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var TrackballControls_js_y = x => () => x
const TrackballControls_js_namespaceObject = TrackballControls_js_x({ ["TrackballControls"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_controls_TrackballControls_js_cabf05ee__.TrackballControls });
;// CONCATENATED MODULE: external "three/addons/controls/PointerLockControls.js"
var PointerLockControls_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var PointerLockControls_js_y = x => () => x
const PointerLockControls_js_namespaceObject = PointerLockControls_js_x({ ["PointerLockControls"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_controls_PointerLockControls_js_3b59ddb1__.PointerLockControls });
;// CONCATENATED MODULE: external "three/addons/controls/ArcballControls.js"
var ArcballControls_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var ArcballControls_js_y = x => () => x
const ArcballControls_js_namespaceObject = ArcballControls_js_x({ ["ArcballControls"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_controls_ArcballControls_js_e0465d91__.ArcballControls });
;// CONCATENATED MODULE: external "three/addons/libs/lil-gui.module.min.js"
var lil_gui_module_min_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var lil_gui_module_min_js_y = x => () => x
const lil_gui_module_min_js_namespaceObject = lil_gui_module_min_js_x({ ["GUI"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_libs_lil_gui_module_min_js_d0859151__.GUI });
;// CONCATENATED MODULE: external "three/addons/libs/stats.module.js"
var stats_module_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var stats_module_js_y = x => () => x
const stats_module_js_namespaceObject = stats_module_js_x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_libs_stats_module_js_b516c51e__["default"] });
;// CONCATENATED MODULE: external "three/addons/capabilities/WebGL.js"
var WebGL_js_x = y => { var x = {}; __webpack_require__.d(x, y); return x; }
var WebGL_js_y = x => () => x
const WebGL_js_namespaceObject = WebGL_js_x({ ["default"]: () => __WEBPACK_EXTERNAL_MODULE_three_addons_capabilities_WebGL_js_8a286a05__["default"] });
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
      this.clock = new external_three_namespaceObject.Clock();
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
    if (!WebGL_js_namespaceObject["default"].isWebGLAvailable()) {
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
    this.setParameter('cameraPosition', new external_three_namespaceObject.Vector3(1, 1, 1));
    this.setParameter('cameraLookAt', new external_three_namespaceObject.Vector3(0, 0, 0));
    this.setParameter('cameraUp', external_three_namespaceObject.Object3D.DefaultUp.clone());
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
    this.clock = new external_three_namespaceObject.Clock();
    this.mouse = new external_three_namespaceObject.Vector2(1, 1);
    this.raycaster = new external_three_namespaceObject.Raycaster();
    this.scene = new external_three_namespaceObject.Scene();
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
      this.domElement.size = new external_three_namespaceObject.Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
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
      this.composer = new EffectComposer_js_namespaceObject.EffectComposer(this.renderer);
      this.renderPass = new RenderPass_js_namespaceObject.RenderPass(this.scene, this.camera);
      this.composer.addPass(this.renderPass);
      if (this.enableFXAA) {
        this.fxaaPass = new ShaderPass_js_namespaceObject.ShaderPass(FXAAShader_js_namespaceObject.FXAAShader);
        this.composer.addPass(this.fxaaPass);
      }
      if (this.enableSMAA) {
        this.smaaPass = new SMAAPass_js_namespaceObject.SMAAPass(this.domElement.clientWidth * this.renderer.getPixelRatio(), this.domElement.clientHeight * this.renderer.getPixelRatio());
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
      this.renderer = new external_three_namespaceObject.WebGLRenderer({
        alpha: this.enableAlpha,
        antialias: this.enableAntialias
      });
      if (this.enableShadows) {
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = external_three_namespaceObject.PCFSoftShadowMap;
      }
      this.renderer.setSize(this.domElement.clientWidth, this.domElement.clientHeight);
      if (this.backgroundColor) this.renderer.setClearColor(this.backgroundColor);
      if (this.enableSRGBEncoding) this.renderer.outputEncoding = external_three_namespaceObject.sRGBEncoding;
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
      this.camera = new external_three_namespaceObject.PerspectiveCamera(this.perspectiveCameraFov, this.domElement.clientWidth / this.domElement.clientHeight, this.perspectiveCameraNear, this.perspectiveCameraFar);
    }
  }, {
    key: "calculateOrtographicCameraSize",
    value: function calculateOrtographicCameraSize() {
      var cameraSize = new external_three_namespaceObject.Vector2(this.domElement.clientWidth, this.domElement.clientHeight);
      if (this.orthographicCameraMinWidth / this.orthographicCameraMinHeight > cameraSize.x / cameraSize.y) {
        return new external_three_namespaceObject.Vector2(this.orthographicCameraMinWidth, this.orthographicCameraMinWidth / cameraSize.x * cameraSize.y);
      } else {
        return new external_three_namespaceObject.Vector2(this.orthographicCameraMinHeight * cameraSize.x / cameraSize.y, this.orthographicCameraMinHeight);
      }
    }
  }, {
    key: "addOrthographicCamera",
    value: function addOrthographicCamera() {
      var cameraSize = this.calculateOrtographicCameraSize();
      this.camera = new external_three_namespaceObject.OrthographicCamera(cameraSize.x / -2, cameraSize.x / 2, cameraSize.y / 2, cameraSize.y / -2, this.orthographicCameraNear, this.orthographicCameraFar);
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
      this.controls = new TrackballControls_js_namespaceObject.TrackballControls(this.camera, this.renderer.domElement);
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
      this.controls = new PointerLockControls_js_namespaceObject.PointerLockControls(this.camera, this.renderer.domElement);
    }
  }, {
    key: "addArcballControls",
    value: function addArcballControls() {
      this.controls = new ArcballControls_js_namespaceObject.ArcballControls(this.camera, this.renderer.domElement);
    }
  }, {
    key: "addStats",
    value: function addStats() {
      this.stats = new stats_module_js_namespaceObject["default"]();
      this.stats.showPanel(0);
      this.stats.dom.style.position = 'absolute';
      this.domElement.appendChild(this.stats.dom);
    }
  }, {
    key: "addGui",
    value: function addGui() {
      this.gui = new lil_gui_module_min_js_namespaceObject.GUI({
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
        this.cameraUp.copy(external_three_namespaceObject.Object3D.DefaultUp);
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
      this.camera.up.copy(external_three_namespaceObject.Object3D.DefaultUp);
      this._cameraUp.copy(external_three_namespaceObject.Object3D.DefaultUp);
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
      var lightsGroup = new external_three_namespaceObject.Group();
      var lightsFolder = (_this$gui = this.gui) === null || _this$gui === void 0 ? void 0 : _this$gui.addFolder('Lights');
      lightsFolder === null || lightsFolder === void 0 ? void 0 : lightsFolder.close();
      var ambientLight = new external_three_namespaceObject.AmbientLight();
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
      var directionalLight = new external_three_namespaceObject.DirectionalLight();
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
      var hemisphereLight = new external_three_namespaceObject.HemisphereLight();
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
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.addColor(hemisphereLight, 'color').listen().setValue(new external_three_namespaceObject.Color(0x1c1c1c));
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.addColor(hemisphereLight, 'groundColor').listen().setValue(new external_three_namespaceObject.Color(0x000000));
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight.position, 'x').min(-1).max(1).step(step * 0.01);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight.position, 'y').min(-1).max(1).step(step * 0.01);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.add(hemisphereLight.position, 'z').min(-1).max(1).step(step * 0.01);
      hemisphereLightFolder === null || hemisphereLightFolder === void 0 ? void 0 : hemisphereLightFolder.close();
      hemisphereLightEnableObject.enabled = true;
      var pointLight = new external_three_namespaceObject.PointLight();
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
      var rectAreaLight = new external_three_namespaceObject.RectAreaLight();
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
      var rectAreaLightLookAt = new external_three_namespaceObject.Vector3();
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
      var spotLight = new external_three_namespaceObject.SpotLight();
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
      console.log('three.js version: ' + external_three_namespaceObject.REVISION);
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
  var renderer = new external_three_namespaceObject.WebGLRenderer();
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

var __webpack_exports__default = __webpack_exports__.Z;
export { __webpack_exports__default as default };
