"use strict";
(self["webpackChunksetup_project_with_webpack"] = self["webpackChunksetup_project_with_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../images/tvm_api.png */ "./images/tvm_api.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: 'Poppins', Times, serif;\n  background: linear-gradient(to left, #0000001a, #2e8b5733);\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin-top: 0;\n  position: fixed;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 2px 2px 2px lightblue;\n  top: 0;\n  z-index: 999;\n}\n\n.nav-items {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  margin-left: -20px;\n}\n\n.nav-left {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 200px;\n  width: 200px;\n  height: 60px;\n  background-position: center;\n}\n\nheader {\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 18px;\n  margin-top: 100px;\n}\n\nheader p:first-of-type {\n  color: seagreen;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n\nheader p:last-of-type {\n  color: #19472d;\n}\n\n.Moviecounter {\n  color: #000;\n  animation: effect 2s ease-in-out 2s infinite alternate both;\n}\n\n@keyframes effect {\n  0% {\n    color: #000;\n  }\n\n  25% {\n    color: blue;\n  }\n\n  50% {\n    color: rebeccapurple;\n  }\n\n  100% {\n    color: seagreen;\n  }\n}\n\nfooter {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px;\n  background-color: #fff;\n}\n\n.nav-middle .nav-items li a {\n  margin-left: 25px;\n  text-decoration: none;\n  color: #19472d;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.main-page {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 0;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.movie-container {\n  margin: 20px auto;\n  background-color: transparent;\n  text-align: center;\n  border: 1px solid rgb(192, 188, 188);\n  border-right-color: #000;\n  padding: 0 5px;\n  border-radius: 15px;\n  width: 80%;\n}\n\nimg {\n  border: 1px solid transparent;\n  border-radius: 15px;\n}\n\nimg:hover {\n  transform: scale(0.9);\n}\n\ni {\n  color: rgb(25, 71, 45);\n}\n\ni:active {\n  color: #fff;\n}\n\n.details {\n  margin: 5px 0 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n.stats {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.movieBtn {\n  text-align: center;\n}\n\nbutton {\n  padding: 0.3rem 0.5rem;\n  margin-bottom: 10px;\n  box-shadow: 1.5px 2px 1px #000;\n  border: 1px solid rgb(61, 60, 60);\n  font-size: 1rem;\n  font-family: inherit;\n  border-radius: 10px;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\n@media screen  and (min-width: 500px) {\n  .nav {\n    flex-direction: row;\n  }\n\n  .main-page {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0 15px;\n    width: 95%;\n  }\n\n  .movie-container {\n    background-color: transparent;\n    text-align: center;\n    border: 1px solid rgb(192, 188, 188);\n    border-right-color: #000;\n    padding: 0 5px;\n    border-radius: 15px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n  }\n\n  .nav-items {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    list-style: none;\n    margin-right: 30px;\n  }\n\n  .nav-left {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    background-repeat: no-repeat;\n    background-size: 200px;\n    width: 200px;\n    height: 60px;\n    background-position: center;\n  }\n\n  .main-page {\n    display: grid;\n    grid-template-columns: repeat(5, 240px);\n    gap: 0 15px;\n  }\n\n  .movie-container {\n    width: fit-content;\n  }\n\n  .details {\n    margin: 5px 35px 0 0;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .stats {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n\n  .movieBtn {\n    text-align: center;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAIA;EACE,oCAAoC;EACpC,0DAA0D;AAC5D;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,aAAa;EACb,eAAe;EACf,WAAW;EACX,sBAAsB;EACtB,iCAAiC;EACjC,MAAM;EACN,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,mDAAwC;EACxC,4BAA4B;EAC5B,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;EAClB,0BAA0B;EAC1B,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,2DAA2D;AAC7D;;AAEA;EACE;IACE,WAAW;EACb;;EAEA;IACE,WAAW;EACb;;EAEA;IACE,oBAAoB;EACtB;;EAEA;IACE,eAAe;EACjB;AACF;;AAEA;EACE,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;EACrB,cAAc;EACd,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,qCAAqC;EACrC,MAAM;EACN,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,kBAAkB;EAClB,oCAAoC;EACpC,wBAAwB;EACxB,cAAc;EACd,mBAAmB;EACnB,UAAU;AACZ;;AAEA;EACE,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,aAAa;EACb,8BAA8B;EAC9B,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,iCAAiC;EACjC,eAAe;EACf,oBAAoB;EACpB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE;IACE,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,qCAAqC;IACrC,WAAW;IACX,UAAU;EACZ;;EAEA;IACE,6BAA6B;IAC7B,kBAAkB;IAClB,oCAAoC;IACpC,wBAAwB;IACxB,cAAc;IACd,mBAAmB;EACrB;AACF;;AAEA;EACE;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;EACpB;;EAEA;IACE,mDAAwC;IACxC,4BAA4B;IAC5B,sBAAsB;IACtB,YAAY;IACZ,YAAY;IACZ,2BAA2B;EAC7B;;EAEA;IACE,aAAa;IACb,uCAAuC;IACvC,WAAW;EACb;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,oBAAoB;IACpB,aAAa;IACb,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,QAAQ;EACV;;EAEA;IACE,kBAAkB;EACpB;AACF","sourcesContent":["*,\n*::after,\n*::before {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n@import url(\"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800&family=Poppins:wght@200;300;400;500;600;700&display=swap\");\n\nbody {\n  font-family: 'Poppins', Times, serif;\n  background: linear-gradient(to left, #0000001a, #2e8b5733);\n}\n\n.nav {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 10px;\n  margin-top: 0;\n  position: fixed;\n  width: 100%;\n  background-color: #fff;\n  box-shadow: 2px 2px 2px lightblue;\n  top: 0;\n  z-index: 999;\n}\n\n.nav-items {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  list-style: none;\n  margin-left: -20px;\n}\n\n.nav-left {\n  background: url('../images/tvm_api.png');\n  background-repeat: no-repeat;\n  background-size: 200px;\n  width: 200px;\n  height: 60px;\n  background-position: center;\n}\n\nheader {\n  text-align: center;\n  text-transform: capitalize;\n  font-size: 18px;\n  margin-top: 100px;\n}\n\nheader p:first-of-type {\n  color: seagreen;\n  font-weight: 700;\n  font-size: 1.5rem;\n}\n\nheader p:last-of-type {\n  color: #19472d;\n}\n\n.Moviecounter {\n  color: #000;\n  animation: effect 2s ease-in-out 2s infinite alternate both;\n}\n\n@keyframes effect {\n  0% {\n    color: #000;\n  }\n\n  25% {\n    color: blue;\n  }\n\n  50% {\n    color: rebeccapurple;\n  }\n\n  100% {\n    color: seagreen;\n  }\n}\n\nfooter {\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 10px;\n  background-color: #fff;\n}\n\n.nav-middle .nav-items li a {\n  margin-left: 25px;\n  text-decoration: none;\n  color: #19472d;\n  font-size: 18px;\n  cursor: pointer;\n}\n\n.main-page {\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  gap: 0;\n  width: 90%;\n  margin: 0 auto;\n}\n\n.movie-container {\n  margin: 20px auto;\n  background-color: transparent;\n  text-align: center;\n  border: 1px solid rgb(192, 188, 188);\n  border-right-color: #000;\n  padding: 0 5px;\n  border-radius: 15px;\n  width: 80%;\n}\n\nimg {\n  border: 1px solid transparent;\n  border-radius: 15px;\n}\n\nimg:hover {\n  transform: scale(0.9);\n}\n\ni {\n  color: rgb(25, 71, 45);\n}\n\ni:active {\n  color: #fff;\n}\n\n.details {\n  margin: 5px 0 0;\n  display: flex;\n  justify-content: space-between;\n  padding: 0 20px;\n}\n\n.stats {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.movieBtn {\n  text-align: center;\n}\n\nbutton {\n  padding: 0.3rem 0.5rem;\n  margin-bottom: 10px;\n  box-shadow: 1.5px 2px 1px #000;\n  border: 1px solid rgb(61, 60, 60);\n  font-size: 1rem;\n  font-family: inherit;\n  border-radius: 10px;\n}\n\nbutton:hover {\n  transform: scale(1.1);\n}\n\n@media screen  and (min-width: 500px) {\n  .nav {\n    flex-direction: row;\n  }\n\n  .main-page {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    gap: 0 15px;\n    width: 95%;\n  }\n\n  .movie-container {\n    background-color: transparent;\n    text-align: center;\n    border: 1px solid rgb(192, 188, 188);\n    border-right-color: #000;\n    padding: 0 5px;\n    border-radius: 15px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .nav {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n  }\n\n  .nav-items {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    list-style: none;\n    margin-right: 30px;\n  }\n\n  .nav-left {\n    background: url('../images/tvm_api.png');\n    background-repeat: no-repeat;\n    background-size: 200px;\n    width: 200px;\n    height: 60px;\n    background-position: center;\n  }\n\n  .main-page {\n    display: grid;\n    grid-template-columns: repeat(5, 240px);\n    gap: 0 15px;\n  }\n\n  .movie-container {\n    width: fit-content;\n  }\n\n  .details {\n    margin: 5px 35px 0 0;\n    display: flex;\n    justify-content: space-between;\n  }\n\n  .stats {\n    display: flex;\n    flex-direction: column;\n    gap: 5px;\n  }\n\n  .movieBtn {\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_movieCounter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/movieCounter.js */ "./src/modules/movieCounter.js");
/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home.js */ "./src/modules/home.js");




const likeUpdate = async () => {
  const likes = await (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.getLike)();
  const likeCount = document.querySelectorAll('.likecount');
  likeCount.forEach((el) => {
    for (let i = 0; i < likes.length; i += 1) {
      if (Number(el.id) === likes[i].item_id) {
        el.textContent = `${likes[i].likes} likes`;
      }
    }
  });
};
const displayItem = async () => {
  const movies = await (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.get)();
  (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__["default"])(movies);

  const likebtn = document.querySelectorAll('i');
  likebtn.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      const element = e.target.nextElementSibling;
      const targetId = element.id;
      movies.forEach((movie) => {
        if (parseInt(targetId, 10) === movie.id) {
          (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.sendLike)(movie.id);
          (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_2__.getLike)().then((result) => {
            result.filter((item) => {
              if (item.item_id === movie.id) {
                element.textContent = `${item.likes} likes`;
              }
              return item;
            });
          });
        }
      });
    });
    likeUpdate();
  });
};
displayItem();


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getLike": () => (/* binding */ getLike),
/* harmony export */   "sendLike": () => (/* binding */ sendLike)
/* harmony export */ });
const baseURL = 'https://api.tvmaze.com/shows';
const main = document.querySelector('.main-page');

/* ******** Retrieve data(movies) from the base URL ************* */

const get = async () => {
  const a = await fetch(baseURL);
  const movie = await a.json();
  return movie;
};
get(baseURL);

const involve = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const getId = async () => {
  const response = await fetch(involve, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const Id = await response.text();
  return Id;
};
getId(involve);

const likesUrl = `${involve}OWXxsNAMHfs9CUxnHwK3/likes`;

const sendLike = async (itemID) => {
  const response = await fetch(likesUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ item_id: itemID }),
  });
  const likeSent = response.text();
  return likeSent;
};

const getLike = async () => {
  const response = await fetch(likesUrl);
  const likes = await response.json();
  return likes;
};

/* ************** Generate Items Dynamical ***************** */

const generateUIElement = async (data) => {
  for (let i = 0; i < data.length; i += 1) {
    const movieContainer = document.createElement('div');
    movieContainer.classList.add('movie-container');
    const Img = document.createElement('img');
    Img.setAttribute('src', `${data[i].image.medium}`);
    Img.setAttribute('alt', `affiche of ${data[i].name}`);
    const details = document.createElement('div');
    details.classList.add('details');
    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = `${data[i].name}`;
    const stats = document.createElement('span');
    stats.classList.add('stats');
    const icone = document.createElement('i');
    icone.setAttribute('class', 'fa fa-heart-o');
    icone.setAttribute('aria-hidden', 'true');
    const likeCount = document.createElement('span');
    likeCount.classList.add('likecount');
    likeCount.setAttribute('Id', `${data[i].id}`);
    likeCount.textContent = '0 likes';
    stats.append(icone, likeCount);
    details.append(title, stats);
    const movieBtn = document.createElement('div');
    movieBtn.classList.add('movieBtn');
    const commentBtn = document.createElement('button');
    commentBtn.classList.add('commentBtn');
    commentBtn.setAttribute('movie-Id', `${data[i].id}`);
    commentBtn.textContent = 'Comments';
    const line = document.createElement('br');
    const Reservationbtn = document.createElement('button');
    Reservationbtn.classList.add('Reservationbtn');
    Reservationbtn.textContent = 'Reservation';
    movieBtn.append(commentBtn, line, Reservationbtn);
    movieContainer.append(Img, details, movieBtn);
    main.append(movieContainer);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateUIElement);


/***/ }),

/***/ "./src/modules/movieCounter.js":
/*!*************************************!*\
  !*** ./src/modules/movieCounter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/modules/home.js");


const movieCounter = document.querySelector('.Moviecounter');
const counter = async () => {
  const elementToCount = await (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.get)();
  const number = elementToCount.length;
  movieCounter.textContent = `Movies To Watch(${number})`;
  return number;
};
counter();


/***/ }),

/***/ "./images/tvm_api.png":
/*!****************************!*\
  !*** ./images/tvm_api.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2dcb6eb7bb62fd8e8df4.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsaUJBQWlCLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2RkQ7O0FBRWhDO0FBQ0E7QUFDQSwrQkFBK0IsNkNBQUc7QUFDbEM7QUFDQSxnREFBZ0QsT0FBTztBQUN2RDtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXR1cF9wcm9qZWN0X3dpdGhfd2VicGFjay8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vc2V0dXBfcHJvamVjdF93aXRoX3dlYnBhY2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3NldHVwX3Byb2plY3Rfd2l0aF93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9zZXR1cF9wcm9qZWN0X3dpdGhfd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3NldHVwX3Byb2plY3Rfd2l0aF93ZWJwYWNrLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3NldHVwX3Byb2plY3Rfd2l0aF93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3NldHVwX3Byb2plY3Rfd2l0aF93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9zZXR1cF9wcm9qZWN0X3dpdGhfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZXR1cF9wcm9qZWN0X3dpdGhfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9zZXR1cF9wcm9qZWN0X3dpdGhfd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3NldHVwX3Byb2plY3Rfd2l0aF93ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vc2V0dXBfcHJvamVjdF93aXRoX3dlYnBhY2svLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2V0dXBfcHJvamVjdF93aXRoX3dlYnBhY2svLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3NldHVwX3Byb2plY3Rfd2l0aF93ZWJwYWNrLy4vc3JjL21vZHVsZXMvbW92aWVDb3VudGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWFnZXMvdHZtX2FwaS5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcbio6OmFmdGVyLFxcbio6OmJlZm9yZSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBUaW1lcywgc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgIzAwMDAwMDFhLCAjMmU4YjU3MzMpO1xcbn1cXG5cXG4ubmF2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG1hcmdpbi10b3A6IDA7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCBsaWdodGJsdWU7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcblxcbi5uYXYtaXRlbXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xcbn1cXG5cXG4ubmF2LWxlZnQge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBtYXJnaW4tdG9wOiAxMDBweDtcXG59XFxuXFxuaGVhZGVyIHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogc2VhZ3JlZW47XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbmhlYWRlciBwOmxhc3Qtb2YtdHlwZSB7XFxuICBjb2xvcjogIzE5NDcyZDtcXG59XFxuXFxuLk1vdmllY291bnRlciB7XFxuICBjb2xvcjogIzAwMDtcXG4gIGFuaW1hdGlvbjogZWZmZWN0IDJzIGVhc2UtaW4tb3V0IDJzIGluZmluaXRlIGFsdGVybmF0ZSBib3RoO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGVmZmVjdCB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgfVxcblxcbiAgMjUlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICB9XFxuXFxuICA1MCUge1xcbiAgICBjb2xvcjogcmViZWNjYXB1cnBsZTtcXG4gIH1cXG5cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogc2VhZ3JlZW47XFxuICB9XFxufVxcblxcbmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcblxcbi5uYXYtbWlkZGxlIC5uYXYtaXRlbXMgbGkgYSB7XFxuICBtYXJnaW4tbGVmdDogMjVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGNvbG9yOiAjMTk0NzJkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWFpbi1wYWdlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xcbiAgZ2FwOiAwO1xcbiAgd2lkdGg6IDkwJTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG5cXG4ubW92aWUtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODgsIDE4OCk7XFxuICBib3JkZXItcmlnaHQtY29sb3I6ICMwMDA7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB3aWR0aDogODAlO1xcbn1cXG5cXG5pbWcge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbn1cXG5cXG5pbWc6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG5pIHtcXG4gIGNvbG9yOiByZ2IoMjUsIDcxLCA0NSk7XFxufVxcblxcbmk6YWN0aXZlIHtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBtYXJnaW46IDVweCAwIDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLm1vdmllQnRuIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMS41cHggMnB4IDFweCAjMDAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDYxLCA2MCwgNjApO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG5idXR0b246aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG5AbWVkaWEgc2NyZWVuICBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcXG4gIC5uYXYge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgfVxcblxcbiAgLm1haW4tcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdhcDogMCAxNXB4O1xcbiAgICB3aWR0aDogOTUlO1xcbiAgfVxcblxcbiAgLm1vdmllLWNvbnRhaW5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxOTIsIDE4OCwgMTg4KTtcXG4gICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwO1xcbiAgICBwYWRkaW5nOiAwIDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcXG4gIC5uYXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gIC5uYXYtaXRlbXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcXG4gIH1cXG5cXG4gIC5uYXYtbGVmdCB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICB9XFxuXFxuICAubWFpbi1wYWdlIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjQwcHgpO1xcbiAgICBnYXA6IDAgMTVweDtcXG4gIH1cXG5cXG4gIC5tb3ZpZS1jb250YWluZXIge1xcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICB9XFxuXFxuICAuZGV0YWlscyB7XFxuICAgIG1hcmdpbjogNXB4IDM1cHggMCAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuXFxuICAuc3RhdHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDVweDtcXG4gIH1cXG5cXG4gIC5tb3ZpZUJ0biB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBSUE7RUFDRSxvQ0FBb0M7RUFDcEMsMERBQTBEO0FBQzVEOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLE1BQU07RUFDTixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsbURBQXdDO0VBQ3hDLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxvQkFBb0I7RUFDdEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUNBQXFDO0VBQ3JDLE1BQU07RUFDTixVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyx3QkFBd0I7RUFDeEIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixvQkFBb0I7RUFDcEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IscUNBQXFDO0lBQ3JDLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLG9DQUFvQztJQUNwQyx3QkFBd0I7SUFDeEIsY0FBYztJQUNkLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLG1EQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsUUFBUTtFQUNWOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjphZnRlcixcXG4qOjpiZWZvcmUge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUludGVyOndnaHRAMTAwOzIwMDszMDA7NDAwOzUwMDs2MDA7NzAwOzgwMCZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgVGltZXMsIHNlcmlmO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICMwMDAwMDAxYSwgIzJlOGI1NzMzKTtcXG59XFxuXFxuLm5hdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBtYXJnaW4tdG9wOiAwO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm94LXNoYWRvdzogMnB4IDJweCAycHggbGlnaHRibHVlO1xcbiAgdG9wOiAwO1xcbiAgei1pbmRleDogOTk5O1xcbn1cXG5cXG4ubmF2LWl0ZW1zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcXG59XFxuXFxuLm5hdi1sZWZ0IHtcXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vaW1hZ2VzL3R2bV9hcGkucG5nJyk7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAyMDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogNjBweDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgbWFyZ2luLXRvcDogMTAwcHg7XFxufVxcblxcbmhlYWRlciBwOmZpcnN0LW9mLXR5cGUge1xcbiAgY29sb3I6IHNlYWdyZWVuO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG5oZWFkZXIgcDpsYXN0LW9mLXR5cGUge1xcbiAgY29sb3I6ICMxOTQ3MmQ7XFxufVxcblxcbi5Nb3ZpZWNvdW50ZXIge1xcbiAgY29sb3I6ICMwMDA7XFxuICBhbmltYXRpb246IGVmZmVjdCAycyBlYXNlLWluLW91dCAycyBpbmZpbml0ZSBhbHRlcm5hdGUgYm90aDtcXG59XFxuXFxuQGtleWZyYW1lcyBlZmZlY3Qge1xcbiAgMCUge1xcbiAgICBjb2xvcjogIzAwMDtcXG4gIH1cXG5cXG4gIDI1JSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgfVxcblxcbiAgNTAlIHtcXG4gICAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XFxuICB9XFxuXFxuICAxMDAlIHtcXG4gICAgY29sb3I6IHNlYWdyZWVuO1xcbiAgfVxcbn1cXG5cXG5mb290ZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4ubmF2LW1pZGRsZSAubmF2LWl0ZW1zIGxpIGEge1xcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogIzE5NDcyZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1haW4tcGFnZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcXG4gIGdhcDogMDtcXG4gIHdpZHRoOiA5MCU7XFxuICBtYXJnaW46IDAgYXV0bztcXG59XFxuXFxuLm1vdmllLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDE5MiwgMTg4LCAxODgpO1xcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDAwO1xcbiAgcGFkZGluZzogMCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgd2lkdGg6IDgwJTtcXG59XFxuXFxuaW1nIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG59XFxuXFxuaW1nOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuaSB7XFxuICBjb2xvcjogcmdiKDI1LCA3MSwgNDUpO1xcbn1cXG5cXG5pOmFjdGl2ZSB7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgbWFyZ2luOiA1cHggMCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnN0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5tb3ZpZUJ0biB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBwYWRkaW5nOiAwLjNyZW0gMC41cmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJveC1zaGFkb3c6IDEuNXB4IDJweCAxcHggIzAwMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYig2MSwgNjAsIDYwKTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiAgYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XFxuICAubmF2IHtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIH1cXG5cXG4gIC5tYWluLXBhZ2Uge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBnYXA6IDAgMTVweDtcXG4gICAgd2lkdGg6IDk1JTtcXG4gIH1cXG5cXG4gIC5tb3ZpZS1jb250YWluZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTkyLCAxODgsIDE4OCk7XFxuICAgIGJvcmRlci1yaWdodC1jb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogMCA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICAubmF2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuXFxuICAubmF2LWl0ZW1zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICB9XFxuXFxuICAubmF2LWxlZnQge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uL2ltYWdlcy90dm1fYXBpLnBuZycpO1xcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDIwMHB4O1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLm1haW4tcGFnZSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDI0MHB4KTtcXG4gICAgZ2FwOiAwIDE1cHg7XFxuICB9XFxuXFxuICAubW92aWUtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgfVxcblxcbiAgLmRldGFpbHMge1xcbiAgICBtYXJnaW46IDVweCAzNXB4IDAgMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcblxcbiAgLnN0YXRzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiA1cHg7XFxuICB9XFxuXFxuICAubW92aWVCdG4ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCAnLi9tb2R1bGVzL21vdmllQ291bnRlci5qcyc7XG5pbXBvcnQgZ2VuZXJhdGVVSUVsZW1lbnQsIHsgZ2V0LCBzZW5kTGlrZSwgZ2V0TGlrZSB9IGZyb20gJy4vbW9kdWxlcy9ob21lLmpzJztcblxuY29uc3QgbGlrZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgbGlrZXMgPSBhd2FpdCBnZXRMaWtlKCk7XG4gIGNvbnN0IGxpa2VDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWtlY291bnQnKTtcbiAgbGlrZUNvdW50LmZvckVhY2goKGVsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaWtlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKE51bWJlcihlbC5pZCkgPT09IGxpa2VzW2ldLml0ZW1faWQpIHtcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBgJHtsaWtlc1tpXS5saWtlc30gbGlrZXNgO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuY29uc3QgZGlzcGxheUl0ZW0gPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IG1vdmllcyA9IGF3YWl0IGdldCgpO1xuICBnZW5lcmF0ZVVJRWxlbWVudChtb3ZpZXMpO1xuXG4gIGNvbnN0IGxpa2VidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpJyk7XG4gIGxpa2VidG4uZm9yRWFjaCgoYnRuKSA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSBlLnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICBjb25zdCB0YXJnZXRJZCA9IGVsZW1lbnQuaWQ7XG4gICAgICBtb3ZpZXMuZm9yRWFjaCgobW92aWUpID0+IHtcbiAgICAgICAgaWYgKHBhcnNlSW50KHRhcmdldElkLCAxMCkgPT09IG1vdmllLmlkKSB7XG4gICAgICAgICAgc2VuZExpa2UobW92aWUuaWQpO1xuICAgICAgICAgIGdldExpa2UoKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5maWx0ZXIoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbV9pZCA9PT0gbW92aWUuaWQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYCR7aXRlbS5saWtlc30gbGlrZXNgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGxpa2VVcGRhdGUoKTtcbiAgfSk7XG59O1xuZGlzcGxheUl0ZW0oKTtcbiIsImNvbnN0IGJhc2VVUkwgPSAnaHR0cHM6Ly9hcGkudHZtYXplLmNvbS9zaG93cyc7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tcGFnZScpO1xuXG4vKiAqKioqKioqKiBSZXRyaWV2ZSBkYXRhKG1vdmllcykgZnJvbSB0aGUgYmFzZSBVUkwgKioqKioqKioqKioqKiAqL1xuXG5jb25zdCBnZXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGEgPSBhd2FpdCBmZXRjaChiYXNlVVJMKTtcbiAgY29uc3QgbW92aWUgPSBhd2FpdCBhLmpzb24oKTtcbiAgcmV0dXJuIG1vdmllO1xufTtcbmdldChiYXNlVVJMKTtcblxuY29uc3QgaW52b2x2ZSA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcy8nO1xuXG5jb25zdCBnZXRJZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbnZvbHZlLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgSWQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIHJldHVybiBJZDtcbn07XG5nZXRJZChpbnZvbHZlKTtcblxuY29uc3QgbGlrZXNVcmwgPSBgJHtpbnZvbHZlfU9XWHhzTkFNSGZzOUNVeG5Id0szL2xpa2VzYDtcblxuY29uc3Qgc2VuZExpa2UgPSBhc3luYyAoaXRlbUlEKSA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gobGlrZXNVcmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBpdGVtX2lkOiBpdGVtSUQgfSksXG4gIH0pO1xuICBjb25zdCBsaWtlU2VudCA9IHJlc3BvbnNlLnRleHQoKTtcbiAgcmV0dXJuIGxpa2VTZW50O1xufTtcblxuY29uc3QgZ2V0TGlrZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChsaWtlc1VybCk7XG4gIGNvbnN0IGxpa2VzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gbGlrZXM7XG59O1xuXG4vKiAqKioqKioqKioqKioqKiBHZW5lcmF0ZSBJdGVtcyBEeW5hbWljYWwgKioqKioqKioqKioqKioqKiogKi9cblxuY29uc3QgZ2VuZXJhdGVVSUVsZW1lbnQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBtb3ZpZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vdmllQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vdmllLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIEltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAke2RhdGFbaV0uaW1hZ2UubWVkaXVtfWApO1xuICAgIEltZy5zZXRBdHRyaWJ1dGUoJ2FsdCcsIGBhZmZpY2hlIG9mICR7ZGF0YVtpXS5uYW1lfWApO1xuICAgIGNvbnN0IGRldGFpbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXRhaWxzLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMnKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7ZGF0YVtpXS5uYW1lfWA7XG4gICAgY29uc3Qgc3RhdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3RhdHMuY2xhc3NMaXN0LmFkZCgnc3RhdHMnKTtcbiAgICBjb25zdCBpY29uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpY29uZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2ZhIGZhLWhlYXJ0LW8nKTtcbiAgICBpY29uZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICBjb25zdCBsaWtlQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbGlrZUNvdW50LmNsYXNzTGlzdC5hZGQoJ2xpa2Vjb3VudCcpO1xuICAgIGxpa2VDb3VudC5zZXRBdHRyaWJ1dGUoJ0lkJywgYCR7ZGF0YVtpXS5pZH1gKTtcbiAgICBsaWtlQ291bnQudGV4dENvbnRlbnQgPSAnMCBsaWtlcyc7XG4gICAgc3RhdHMuYXBwZW5kKGljb25lLCBsaWtlQ291bnQpO1xuICAgIGRldGFpbHMuYXBwZW5kKHRpdGxlLCBzdGF0cyk7XG4gICAgY29uc3QgbW92aWVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb3ZpZUJ0bi5jbGFzc0xpc3QuYWRkKCdtb3ZpZUJ0bicpO1xuICAgIGNvbnN0IGNvbW1lbnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb21tZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2NvbW1lbnRCdG4nKTtcbiAgICBjb21tZW50QnRuLnNldEF0dHJpYnV0ZSgnbW92aWUtSWQnLCBgJHtkYXRhW2ldLmlkfWApO1xuICAgIGNvbW1lbnRCdG4udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICAgIGNvbnN0IGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgIGNvbnN0IFJlc2VydmF0aW9uYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgUmVzZXJ2YXRpb25idG4uY2xhc3NMaXN0LmFkZCgnUmVzZXJ2YXRpb25idG4nKTtcbiAgICBSZXNlcnZhdGlvbmJ0bi50ZXh0Q29udGVudCA9ICdSZXNlcnZhdGlvbic7XG4gICAgbW92aWVCdG4uYXBwZW5kKGNvbW1lbnRCdG4sIGxpbmUsIFJlc2VydmF0aW9uYnRuKTtcbiAgICBtb3ZpZUNvbnRhaW5lci5hcHBlbmQoSW1nLCBkZXRhaWxzLCBtb3ZpZUJ0bik7XG4gICAgbWFpbi5hcHBlbmQobW92aWVDb250YWluZXIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZVVJRWxlbWVudDtcbmV4cG9ydCB7IGdldCwgc2VuZExpa2UsIGdldExpa2UgfTsiLCJpbXBvcnQgeyBnZXQgfSBmcm9tICcuL2hvbWUuanMnO1xuXG5jb25zdCBtb3ZpZUNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuTW92aWVjb3VudGVyJyk7XG5jb25zdCBjb3VudGVyID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBlbGVtZW50VG9Db3VudCA9IGF3YWl0IGdldCgpO1xuICBjb25zdCBudW1iZXIgPSBlbGVtZW50VG9Db3VudC5sZW5ndGg7XG4gIG1vdmllQ291bnRlci50ZXh0Q29udGVudCA9IGBNb3ZpZXMgVG8gV2F0Y2goJHtudW1iZXJ9KWA7XG4gIHJldHVybiBudW1iZXI7XG59O1xuY291bnRlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9