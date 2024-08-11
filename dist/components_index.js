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

/***/ "./static/js/script_modules.js":
/*!*************************************!*\
  !*** ./static/js/script_modules.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _static_js_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../static/js/utils/helpers.js */ \"./static/js/utils/helpers.js\");\n\n\nclass MyModules {\n    constructor(numModules=21, sizeLimiter=90, nodules_Y=10) {\n        this.numModules = numModules;\n        this.sizeLimiter = sizeLimiter;\n        this.nodules_Y = nodules_Y;\n        this.width = (0,_static_js_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.screen_modules_size_X)(this.numModules, this.sizeLimiter);\n        \n        this.write_allModules();\n        this.responsive_properties();\n    }\n    write_allModules() {\n        let modules_x = '';\n        let last_border = '';\n        for (let i = 0; i < this.nodules_Y; i++) {\n            if (i == this.nodules_Y-1) {last_border = `style=\"border-bottom: 1px solid #33312c80;\"`;}\n            modules_x += this.write_column(last_border, i)\n        }\n        document.getElementById('div_cont').innerHTML += modules_x;\n    }\n    insert_inModule(y_i) {\n        const html_incorpored = [\n            {'row_track': '2_3', 'html': `<nav style=\"width: 300%\"><p>2018</p><p>Beginning of this\n                spectacular race</p></nav>`},\n            {'row_track': '3_3', 'html': `<nav style=\"width: 300%\"><p>2023</p><p>This website has been\n                create</p></nav>`},\n            {'row_track': '5_3', 'html': `<nav style=\"width: 300%;\"><p>2024</p><p>Currently programing\n                and developing full\n                backend</p></nav>`},\n            {'row_track': '1_15', 'html': `<nav style=\"width: 200%\"><p>Hello World!</p></nav>`},\n            {'row_track': '7_5', 'html': `<nav style=\"width: 200%\"><p>ID 009.3-3</p></nav>`},\n            {'row_track': '6_18', 'html': `<nav id=\"boxAnimate\" class=\"molecule_BoxAnimate\"></nav>`},\n            {'row_track': '4_17', 'html': `<nav style=\"width: 500%\"><p id=\"boxAnimate_2\" style=\"font-size:12px;\"></p></nav>`},\n            {'row_track': '1_7', 'html': `<nav id=\"boxAnimate_3\" class=\"molecule_boxAnimate_3\"></nav>`},\n            {'row_track': '2_13', 'html': `<nav id=\"boxAnimate_4\" style=\"width: 100%;padding: 0 10px\"></nav>`},\n            {'row_track': '7_9', 'html': `<nav id=\"boxAnimate_5\" class=\"molecule_boxAnimate_5\"><p>XD</p></nav>`},\n            {'row_track': '1_17', 'html': `<nav id=\"boxCircle\" class=\"molecule_boxCircle\"></nav>`},\n        ]\n\n        if(html_incorpored.find(x => x.row_track === y_i)) {\n            return html_incorpored.find(x => x.row_track === y_i).html;\n        } else {\n            return '';\n        }\n    }\n    \n    write_column(last_border, y) {\n        var html_aside = `<aside ${last_border}>`;\n\n        for (let i = 1; i <= this.numModules; i++) {\n            html_aside = html_aside+`<div class=\"module_box\" style=\"width: calc(${this.width}px - 1px); height: ${this.width}px;\">\n                <div class=\"atom_modulesPoint\">\n                    ${this.insert_inModule(`${y}_${i}`)}\n                    <span>\n                        <div><section></section></div>\n                        <div><section></section></div>\n                        <div><section></section></div>\n                    </span>\n                    <span>\n                        <div><section></section></div>\n                        <div><section></section></div>\n                        <div><section></section></div>\n                    </span>\n                    <span>\n                        <div><section></section></div>\n                        <div><section></section></div>\n                        <div><section></section></div>\n                    </span>\n                </div>\n            </div>`;\n            var thehtmla = i == this.numModules ? html_aside+\"</aside>\" : '';\n        }\n        return thehtmla;\n    }\n\n    responsive_properties() {\n        document.getElementById('contBody').style.width = (this.width*this.numModules)+'px';\n        document.getElementById('id_navbar').style.height = this.width+'px';\n        if (mediaResponsive()[1].matches) {\n            document.getElementById('lobbyCont').style.width = `100%`;\n\n        } else {\n            document.getElementById('lobbyCont').style.width = `calc(100% - ${this.width*2}px)`;\n        }\n    }\n}\n\nclass BoxAnimates {\n    constructor() {\n        this.animations();\n        this.animation_escritura();\n        this.pinter_svgs();\n        this.pinter_circle();\n    }\n\n    animations() {\n        let total = 6;\n        let boxAnimate = document.getElementById('boxAnimate');\n        for (let i = 0; i < 7; i++) {\n            let html_exis = '';\n            html_exis += `<div class=\"item_x\">`;\n            for (let j = 0; j < total; j++) {\n                html_exis = html_exis+`<div class=\"item_y\"><img src=\"static/img/x.png\" alt=\"\"></div>`;\n                let html_exis2 = j == total-1 ? html_exis+\"</div>\" : '';\n                boxAnimate.innerHTML += html_exis2;\n            }\n            total = total - 1;\n        }\n    }\n\n    animation_escritura() {\n        const texto = `import numpy as np, pandas as pd;\n        data = {'A': np.random.randn(100), 'B': np.random.rand(100)};\n        df = pd.DataFrame(data); df_filtered = df[(df['A'] > 0) & (df['B'] < 0.5)];\n        result = df_filtered.groupby('A').agg({'B': 'mean'}).reset_index();\n        print(result)\n        `;\n        let i = 0;\n        function addCharacter() {\n            if (i < texto.length) {\n                document.getElementById('boxAnimate_2').innerHTML += texto.charAt(i);\n                i++;\n                setTimeout(addCharacter, 100);\n            }\n        }\n        addCharacter();\n    }\n\n    pinter_svgs() {\n        document.getElementById('boxAnimate_3').innerHTML = this.html_svg_x();\n        document.getElementById('boxAnimate_4').innerHTML = this.html_svg_tringle();\n        document.getElementById('boxAnimate_5').innerHTML = this.html_svg_x();\n    }\n    html_svg_x() {\n        const svg_html = `\n        <svg x=\"0px\" y=\"0px\" width=\"38.36px\"\n\t        height=\"38.36px\" viewBox=\"0 0 38.36 38.36\" style=\"enable-background:new 0 0 38.36 38.36;\" xml:space=\"preserve\">\n            <style type=\"text/css\">.st0{fill:#302D28;}</style><defs></defs><g><rect x=\"14.84\" y=\"-3.6\" transform=\"matrix(-0.7071 -0.7071 0.7071 -0.7071 19.1777 46.299)\" class=\"st0\" width=\"8.68\" height=\"45.56\"/><rect x=\"14.84\" y=\"-3.6\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -7.9437 19.1777)\" class=\"st0\" width=\"8.68\" height=\"45.56\"/></g>\n        </svg>\n        `;\n        return svg_html;\n    }\n\n    html_svg_tringle() {\n        const svg_html = `\n        <svg x=\"0px\" y=\"0px\" width=\"40px\"\n            height=\"30px\" viewBox=\"0 0 25 15\" style=\"enable-background:new 0 0 25 15;\" xml:space=\"preserve\"><style type=\"text/css\">.st0{fill:#302D28;}</style><defs></defs><polygon class=\"st0\" points=\"0,0 0,20 20,20 \"/>\n        </svg>\n        `;\n        return svg_html;\n    }\n    pinter_circle() {\n        // NOTE : AGREGAMOS TODOS LOS ELEMENTOS DEL CIRCULOS\n        for (let i = 0; i < 12; i++) {\n            document.getElementById('boxCircle').innerHTML += this.html_svg_circle(i);\n        }\n        // NOTE : AGREGAMOS EL EVENTO HOVER\n        document.getElementById(\"circle_hover_options\").addEventListener('mouseenter', (event) => {\n            for (let i = 0; i < 6; i++) {\n                document.getElementsByClassName('hidden')[i].style.opacity = '0';\n                document.getElementById('circle_hover_options').style.opacity = '1';\n            }\n        });\n        document.getElementById(\"circle_hover_options\").addEventListener('mouseleave', (event) => {\n            for (let i = 0; i < 6; i++) {\n                document.getElementsByClassName('hidden')[i].style.opacity = '1';\n                document.getElementById('circle_hover_options').style.opacity = '0';\n\n            }\n\n        });\n\n    }\n\n    html_svg_circle(num) {\n        const svg_htmls = [\n            `<div class=\"graphic circle_1\"><svg viewBox=\"0 0 274 274\"><path d=\"M113.4,250.16a115.42,115.42,0,0,0,108.42-33.63l5.11,4.82a122.45,122.45,0,0,1-115,35.69Z\"/></svg><div>`,\n            `<div class=\"graphic circle_2\"><svg viewBox=\"0 0 274 274\"><path d=\"M158.14,8.93a130,130,0,0,1,108,148.67l-7.36-1.17A122.5,122.5,0,0,0,157,16.29Z\"/></svg></div>`,\n            `<svg viewBox=\"0 0 274 274\"><path d=\"M134.2,240.23a102.91,102.91,0,0,1-84.55-49.7l-2.57,1.55a105.9,105.9,0,0,0,87,51.14Z\"/><path d=\"M134,246.54a109.24,109.24,0,0,1-89.74-52.75L42,195.18a111.9,111.9,0,0,0,91.94,54Z\"/><path d=\"M47.22,186.29a102.9,102.9,0,0,1,0-98.07l-2.63-1.43a105.9,105.9,0,0,0,0,100.93Z\"/><path d=\"M41.66,189.3a109.23,109.23,0,0,1,0-104.09l-2.36-1.28a111.91,111.91,0,0,0,0,106.65Z\"/><path d=\"M49.84,83.7a102.91,102.91,0,0,1,84.74-49.37l-.09-3A105.92,105.92,0,0,0,47.27,82.14Z\"/><path d=\"M44.44,80.42A109.2,109.2,0,0,1,134.38,28l-.08-2.69A111.92,111.92,0,0,0,42.15,79Z\"/><path d=\"M141.12,34.32a102.93,102.93,0,0,1,84.71,49.44l2.56-1.56a105.91,105.91,0,0,0-87.17-50.88Z\"/><path d=\"M141.33,28a109.18,109.18,0,0,1,89.89,52.47l2.3-1.39a111.94,111.94,0,0,0-92.11-53.77Z\"/><path d=\"M228.42,88.26a102.9,102.9,0,0,1,0,98.08l2.64,1.43a105.92,105.92,0,0,0,0-100.94Z\"/><path d=\"M234,85.26a109.23,109.23,0,0,1,0,104.09l2.36,1.28a111.91,111.91,0,0,0,0-106.65Z\"/><path d=\"M225.68,191.06a102.92,102.92,0,0,1-84.86,49.17l.09,3a105.92,105.92,0,0,0,87.33-50.61Z\"/><path d=\"M231.07,194.36A109.25,109.25,0,0,1,141,246.55l.07,2.68a111.92,111.92,0,0,0,92.28-53.47Z\"/></svg>`,\n            `<div class=\"hidden graphic circle_4\"><svg viewBox=\"0 0 274 274\"><path d=\"M87.61,187.48a71,71,0,0,0,100.41,0l-11.31-11.31a55,55,0,0,1-77.78,0Z\"/><path d=\"M68.91,157.32a71,71,0,0,1,46.92-88.77l4.72,15.29A55,55,0,0,0,84.2,152.61Z\"/><path d=\"M154.29,84.36a55,55,0,0,1,35.64,69.14l15.24,4.87a71,71,0,0,0-46-89.25Z\"/></svg></div>`,\n            `<div class=\"hidden graphic\"><svg viewBox=\"0 0 274 274\"><path d=\"M163.82,137.28a26,26,0,1,1-26-26A26,26,0,0,1,163.82,137.28Zm-26-22a22,22,0,1,0,22,22A22,22,0,0,0,137.82,115.28Z\"/></svg></div>`,\n            `<div class=\"graphic circle_6\"><svg viewBox=\"0 0 274 274\"><path d=\"M247,139.19A109.31,109.31,0,0,1,135.92,246.68l.06-3.31A106,106,0,0,0,243.72,139.13Z\"/><path d=\"M28.5,137.28A109.32,109.32,0,0,1,137.82,28v3.32a106,106,0,0,0-106,106Z\"/></svg></div>`,\n            `<div class=\"hidden graphic circle_7\"><svg viewBox=\"0 0 274 274\"><polygon points=\"168.82 136.53 168.82 135.03 183.82 126.78 183.82 129.78 182.82 130.53 182.82 136.53 168.82 136.53\"/><polygon points=\"168.82 138.03 168.82 139.53 183.82 147.78 183.82 144.78 182.82 144.03 182.82 138.03 168.82 138.03\"/><polygon points=\"106.82 136.53 106.82 135.03 91.82 126.78 91.82 129.78 92.82 130.53 92.82 136.53 106.82 136.53\"/><polygon points=\"106.82 138.03 106.82 139.53 91.82 147.78 91.82 144.78 92.82 144.03 92.82 138.03 106.82 138.03\"/></svg></div>`,\n            `<div class=\"hidden graphic circle_8\"><svg viewBox=\"0 0 274 274\"><path d=\"M134.82,216.81a79.61,79.61,0,0,0,69.59-35.87l4.05,2.67a84.44,84.44,0,0,1-73.83,38Z\"/></svg></div>`,\n            `<div class=\"hidden graphic circle_9\"><svg viewBox=\"0 0 274 274\"><path d=\"M151.85,48.64a89.74,89.74,0,0,1,74.6,102.67l-5.08-.81A84.59,84.59,0,0,0,151,53.73Z\"/></svg></div>`,\n            `<div class=\"graphic circle_10\"><svg viewBox=\"0 0 274 274\"><path d=\"M46.23,64.55a116.48,116.48,0,0,0-24.38,57.82,118.2,118.2,0,0,0-.92,18.14l-7.12.2a125.07,125.07,0,0,1,1-19.25A123.42,123.42,0,0,1,40.66,60.13Z\"/></svg></div>`,\n            `<div class=\"hidden graphic circle_11\"><svg viewBox=\"0 0 274 274\"><path d=\"M78.11,70.2A89.4,89.4,0,0,0,52,110.73a90.69,90.69,0,0,0-3.1,13.6l-5.41-.79a95.65,95.65,0,0,1,31-57.43Z\"/></svg></div>`,\n            `<div id=\"circle_hover_options\" class=\"graphic options\"><div class=\"menu\"><a>NetworkingF</a><a>Porfolio</a><a>Research</a></div></div>`\n        ]\n        return svg_htmls[num];\n    }\n}\n\nfunction applyResponsiveStyles() {\n    if (mediaResponsive()[0].matches) {\n        new MyModules(21, 90, 10);\n    } else if (mediaResponsive()[1].matches) {\n        new MyModules(7, 90, 17);\n    } else {\n        new MyModules(21, 100, 10);\n    }\n}\n\nfunction mediaResponsive() {\n    const tabletSize = window.matchMedia(\"(max-width: 900px) and (min-width: 601px)\");\n    const mobileSize = window.matchMedia(\"(max-width: 600px)\");\n    return [tabletSize, mobileSize]\n}\napplyResponsiveStyles();\n\nwindow.onresize = function(event) {\n    applyResponsiveStyles();\n};\nnew BoxAnimates();\n\n//# sourceURL=webpack://mysite/./static/js/script_modules.js?");

/***/ }),

/***/ "./static/js/utils/helpers.js":
/*!************************************!*\
  !*** ./static/js/utils/helpers.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   screen_modules_size_X: () => (/* binding */ screen_modules_size_X)\n/* harmony export */ });\nfunction screen_modules_size_X(numModules, sizeLimiter) {\n    var wind_wid = window.innerWidth;\n\n    var width_module = (wind_wid / numModules); // TAMAÑO DE CADA MODULO\n    var width_rounded = width_module.toFixed(0); // REDONDEAMOS\n\n    var width = width_rounded > sizeLimiter ? sizeLimiter : width_rounded; // TAMAÑO CON EL LIMITE DE 95px MAX\n\n    return width;\n}\n\n//# sourceURL=webpack://mysite/./static/js/utils/helpers.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./static/js/script_modules.js");
/******/ 	
/******/ })()
;