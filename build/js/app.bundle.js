/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/main.css":
/*!**************************!*\
  !*** ./src/app/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://principe-fresco/./src/app/main.css?");

/***/ }),

/***/ "./src/app/index.js":
/*!**************************!*\
  !*** ./src/app/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/app/main.css\");\n\r\nconst items = document.getElementById('items');\r\nconst fragment = document.createDocumentFragment()\r\nconst templateCard = document.getElementById('template-card').content;\r\nconst templateCard2 = document.getElementById('template-card2').content;\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', e => {\r\n    fetchData()\r\n})\r\n\r\n\r\nconst fetchData = async () => {\r\n    try {\r\n        const res = await fetch('http://localhost:4000/infoRopa')\r\n        const data = await res.json()\r\n        console.log(data)\r\n        recorrerData(data)\r\n    } catch (error) {\r\n        console.log(error)\r\n    }\r\n}\r\n\r\n\r\nconst recorrerData = data => {\r\n    data.forEach(ropa => {\r\n        console.log(ropa)\r\n        const {\r\n            hombres,\r\n            mujeres\r\n        } = ropa\r\n\r\n        hombres.forEach(ropaInd => {\r\n            const {\r\n                id,\r\n                nombrePrenda,\r\n                thumbnailUrl,\r\n                categoria,\r\n                precio\r\n            } = ropaInd\r\n\r\n            console.log(thumbnailUrl.imagen1)\r\n\r\n            templateCard.querySelector('.card-img-top').setAttribute('src', thumbnailUrl.imagen1)\r\n            templateCard.querySelector('.card-title').textContent = nombrePrenda\r\n            templateCard.querySelector('.btn-dark').dataset.id = id\r\n            templateCard.querySelector('.btn-dark').setAttribute('id',categoria)\r\n            const clone = templateCard.cloneNode(true)\r\n            fragment.appendChild(clone)\r\n        })\r\n        mujeres.forEach(ropaInd => {\r\n            const {\r\n                id,\r\n                nombrePrenda,\r\n                thumbnailUrl,\r\n                categoria,\r\n                precio\r\n            } = ropaInd\r\n\r\n            console.log(thumbnailUrl.imagen1)\r\n\r\n            templateCard2.querySelector('.card-img-top').setAttribute('src', thumbnailUrl.imagen1)\r\n            templateCard2.querySelector('.card-title').textContent = nombrePrenda\r\n            templateCard2.querySelector('.btn-dark').dataset.id = id\r\n            templateCard2.querySelector('.btn-dark').setAttribute('id',categoria)\r\n            const clone2 = templateCard2.cloneNode(true)\r\n            fragment.appendChild(clone2)\r\n        })        \r\n    })\r\n    items.appendChild(fragment)\r\n}\r\n\r\nitems.addEventListener('click',e=>{\r\n    e.preventDefault()\r\n    detectarClick(e)\r\n})\r\n\r\n\r\nconst detectarClick = e =>{\r\n    console.log(e.target)\r\n    if(e.target.classList.contains('btn-dark')){\r\n        console.log(true)\r\n        console.log(e.target.parentElement.parentElement)\r\n        console.log(e.target.parentElement.parentElement)\r\n        // let elementopadreElementoPadre = e.target.parentElement.parentElement\r\n        let botonData = e.target\r\n\r\n        console.log(botonData)\r\n\r\n        localStorage.setItem('dataBuscar', JSON.stringify(botonData.dataset.id))\r\n        localStorage.setItem('categoria', JSON.stringify(botonData.id))\r\n\r\n\r\n        \r\n    }else{\r\n        console.log(false)\r\n    }\r\n}\n\n//# sourceURL=webpack://principe-fresco/./src/app/index.js?");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app/index.js");
/******/ 	
/******/ })()
;