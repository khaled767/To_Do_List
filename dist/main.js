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

/***/ "../../node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*****************************************************************!*\
  !*** ../../node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"poppins\",sans-serif;\r\n    color: #061479;\r\n}\r\n\r\n\r\n.parent {\r\n    background-image:linear-gradient(to bottom, #6f79c4 30%, white);\r\n    display : grid;\r\n    grid-template-columns: 380px 1fr;\r\n    grid-template-rows:50px repeat(10, 100px);\r\n    gap: 10px ;\r\n    padding: 20px \r\n}\r\n.intro {\r\n    /* background: rgb(158, 178, 223); */\r\n    grid-column: 1/5;\r\n    position: relative;\r\n    width: max-content;\r\n    font-size: 24px;\r\n    align-items: center;\r\n    color:#5c3d41;\r\n    justify-content: center;\r\n    \r\n}\r\n.intro::after {\r\n    content: '';\r\n    /* background: yellow; */\r\n    background: linear-gradient(to right,lightblue,pink);\r\n    width: 100%;\r\n    height: 10px;\r\n    position: absolute;\r\n    bottom : 0;\r\n    left: 0;\r\n    transition: 1.5s;\r\n    border-radius: 20px;\r\n}\r\n.intro:hover::after {\r\n    width: 0;\r\n}\r\n.search, .todayEvent{\r\n    grid-row: 2/3;\r\n}\r\n.todayEvent {\r\n    align-items: center;\r\n    color: rgb(11, 18, 124);\r\n    justify-content: center;\r\n    display: flex;\r\n}\r\n.addTask {\r\n    grid-row: 3/6;\r\n    background: #a7addb;\r\n    border-radius: 10px;\r\n    display:flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n} \r\n.addTask p {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.form input,.form #priority {\r\n    display: flex;\r\n    justify-content: center;\r\n    /* background-image: linear-gradient(to bottom,white 10%,  #091991); */\r\n    \r\n    width: 100%;\r\n    height: 50px;\r\n    border-radius: 20px;\r\n    margin:5px 0;\r\n    padding: 5px;\r\n    text-align: center;\r\n    letter-spacing: 2px;\r\n    cursor: pointer;\r\n}\r\ninput:hover, button:hover {     /* I have some works here */ \r\n    letter-spacing: 5px;\r\n    /* background: rgb(59, 59, 59); */\r\n    background: #c6c9e2;\r\n    transition: 1.5s;\r\n    scale: 1.1;\r\n}\r\n.btnStyle{\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n.search {\r\n    margin-top: 10px;\r\n    letter-spacing: 3px;\r\n    font-size: 14px;\r\n    \r\n}\r\n.search input {\r\n    margin: 5 10px;\r\n    width: 350px;\r\n    height: 50px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n    background: linear-gradient(to right,lightblue,pink);\r\n}\r\n.form button {\r\n    border-radius: 20px;\r\n    width: 140px;\r\n    height: 40px;\r\n    flex-direction: row;\r\n    justify-content: space-between;\r\n    background:#a7addb;\r\n}\r\n.render-task {\r\n    grid-row: 3/6;\r\n    display:flex;\r\n    flex-direction:column;\r\n}\r\n.render-task .render-task{\r\n    /* backgro/und: #6f79c4; */\r\n    display: inline-block;\r\n    flex-direction: row;\r\n    margin: 10px ;\r\n    font-size: 20px;\r\n    color: rgb(39, 33, 34);\r\n}\r\n.render-task p {\r\n    display: inline;\r\n}\r\n.error-box {\r\n    position: absolute;\r\n    /* bottom: 250px;\r\n    left: 320px;\r\n    margin: 50px;\r\n    padding: 20px; */\r\n}\r\n.error-box p {\r\n    position: relative;\r\n    top: 180px;\r\n    left: 320px;\r\n    /* background-color: yellow; */\r\n    margin: 20px;\r\n    padding: 10px;\r\n}\r\n/* -------------Here are the working------------ */\r\n button {\r\n    border-radius: 20px;\r\n    width: 60px;\r\n    height: 30px;\r\n    margin: 5px  ;\r\n    background:#babedd;\r\n }\r\n .checkbox {\r\n    height: 13px;\r\n    width: 13px;\r\n    margin: 0px 10px;\r\n    /* border-radius: 0px; */\r\n\r\n}\r\n /* -------------Here are the working------------ */\r\n.calendar{\r\n    grid-row: 6/9;\r\n    width: 380px;\r\n    height: 350px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    background:#a7addb ;\r\n    border-radius: 10px;\r\n    box-shadow: 0 0 3px rgb(0,0,0.3);\r\n}\r\n.header{\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 10px;\r\n}\r\n.monthYear {\r\n    text-align: center;\r\n    width: 150px;\r\n    font-weight: 600;\r\n}\r\n.header button {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: none;\r\n    border-radius: 50%;\r\n    background: #f5f1f1;\r\n    width: 40px;\r\n    height: 40px;\r\n    cursor: pointer;\r\n    box-shadow: 0 0 0 rgb(0, 0, 0.2);\r\n}\r\n.days {\r\n    display: grid;\r\n    grid-template-columns: repeat(7,1fr);\r\n}\r\n.day{\r\n    text-align: center;\r\n    padding: 5px;\r\n    color: #999FA6;\r\n    font-weight: 500;\r\n}\r\n.dates {\r\n    display: grid;\r\n    grid-template-columns: repeat(7,1fr);\r\n    gap: 5px;\r\n}\r\n.dates div {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    margin: auto;\r\n    padding: 10px;\r\n    cursor: pointer;\r\n    font-weight: 600;\r\n    width: 40px;\r\n    height: 40px;\r\n    transition: 0.2s;\r\n}\r\n\r\n.date:hover,\r\n.date.active {\r\n    background: #a7addb;\r\n    color: #fff;\r\n}\r\n\r\n.date.inactive {\r\n    color: #d2d2d2;\r\n}\r\n.date.inactive:hover {\r\n    color: #fff;\r\n}\r\n.date.active {\r\n  background-color: #6f79c4;\r\n  color: white;\r\n  border-radius: 50%;\r\n  font-weight: bold;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to_do_list/./src/style.css?../../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/api.js":
/*!*********************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/api.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://to_do_list/../../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../../node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!******************************************************************!*\
  !*** ../../node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to_do_list/../../node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \********************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to_do_list/../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \************************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to_do_list/../../node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to_do_list/../../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to_do_list/../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \*******************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to_do_list/../../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "../../node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*************************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to_do_list/../../node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/calendar.js":
/*!*************************!*\
  !*** ./src/calendar.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n// calendar.js\r\nfunction calender() {\r\n    const monthYearElement = document.getElementById(\"monthYear\");\r\n    const datesElement = document.getElementById(\"dates\");\r\n    const prevBtn = document.getElementById(\"prevBtn\");\r\n    const nextBtn = document.getElementById(\"nextBtn\");\r\n\r\n    let currentDate = new Date();\r\n\r\n    const updateCalendar = () => {\r\n        const currentYear = currentDate.getFullYear();\r\n        const currentMonth = currentDate.getMonth();\r\n\r\n        const firstDay = new Date(currentYear, currentMonth,1).getDay();\r\n        const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();\r\n        console.log(firstDay, lastDay)\r\n\r\n        monthYearElement.textContent = `${currentDate.toLocaleString(\"default\", {\r\n            month: \"long\",\r\n        })} ${currentYear}`;\r\n\r\n        datesElement.innerHTML = \"\";\r\n\r\n        // Fill empty days before the 1st\r\n        for (let i = 0; i < (firstDay === 0 ? 6 : firstDay - 1); i++) {\r\n            const emptyDiv = document.createElement(\"div\");\r\n            emptyDiv.classList.add(\"date\", \"inactive\"); // optional\r\n            datesElement.appendChild(emptyDiv);\r\n        }\r\n\r\n        for (let day = 1; day <= lastDay; day++) {\r\n            const dayElement = document.createElement(\"div\");\r\n            dayElement.textContent = day;\r\n            dayElement.classList.add(\"date\")\r\n            \r\n        \r\n        // ✅ highlight Today's day\r\n        const today = new Date()\r\n        if (\r\n            day   === today.getDate()  &&\r\n            currentMonth === today.getMonth() &&\r\n            currentYear  === today.getFullYear()\r\n        ) {\r\n            dayElement.classList.add(\"active\")\r\n        }\r\n\r\n            datesElement.appendChild(dayElement);\r\n        }\r\n    };\r\n\r\n    updateCalendar();\r\n\r\n    nextBtn.addEventListener(\"click\", () => {\r\n        currentDate.setMonth(currentDate.getMonth() + 1);\r\n        updateCalendar();\r\n    });\r\n\r\n    prevBtn.addEventListener(\"click\", () => {\r\n        currentDate.setMonth(currentDate.getMonth() - 1);\r\n        updateCalendar();\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calender); // ✅ Correct\r\n\n\n//# sourceURL=webpack://to_do_list/./src/calendar.js?");

/***/ }),

/***/ "./src/cancelBtn.js":
/*!**************************!*\
  !*** ./src/cancelBtn.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cancelBtn)\n/* harmony export */ });\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clear */ \"./src/clear.js\");\n\r\n\r\nfunction cancelBtn(title,desc, date, prio, cancel){\r\n    cancel.addEventListener('click', () =>\r\n        {(0,_clear__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title,desc,date,prio)}\r\n)\r\n    // cancel.addEventListener('click', (title,desc, date, prio, cancel) =>{\r\n    //     title.value = \"\";\r\n    //     desc.value  = \"\";\r\n    //     date.value  = \"\";\r\n    //     prio.value  = 2 ;\r\n    // })\r\n    \r\n}\n\n//# sourceURL=webpack://to_do_list/./src/cancelBtn.js?");

/***/ }),

/***/ "./src/clear.js":
/*!**********************!*\
  !*** ./src/clear.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ clearFildes)\n/* harmony export */ });\n\r\nfunction clearFildes(title,des, date, prio){\r\n    title.value = \"\";\r\n    des.value   = \"\";\r\n    date.value  = \"\";\r\n    prio.value  = \"Very-important\";\r\n}\r\n\r\n\r\n\r\n  // ----------------  let's work on Dates  ---------------------\r\n\r\n        // const month = [\"JANUARY\",\"FEBRUARY\",\"MARCH\",\"APRIL\",\"MAY\",\"JUNE\",\"JULY\",\"AUGUST\",\"SEPTEMPER\",\"OCTOBER\",\"NOVEMBER\",\"DECEMBER\"]\r\n        // const [year,mmonth,day] = \r\n        //         [date.getFullYear(), \r\n        //          date.getMonth(),\r\n        //          date.getDay()\r\n\r\n        // ]\r\n        // console.log(year,month[mmonth], day)\r\n\r\n        // ---------------------------------------------------------\n\n//# sourceURL=webpack://to_do_list/./src/clear.js?");

/***/ }),

/***/ "./src/editTask.js":
/*!*************************!*\
  !*** ./src/editTask.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// edit function\r\nfunction editTask(context,task, data, index) {\r\n    // step 1: Create an input Elemnet\r\n    const input = document.createElement('input');\r\n    input.type = \"text\"\r\n    input.value = context.textContent;\r\n\r\n    // step 2: Replace the <p> with <input>\r\n    context.replaceWith(input);\r\n    input.focus();\r\n\r\n    let finished = false // make a flag variable so finishEdit works once\r\n\r\n    // step 3: When user finishes typing (blur or press enter)\r\n    input.addEventListener(\"blur\", () => {\r\n        if(!finished)\r\n            finishEdit();  // ✅ only the first one runs\r\n    })\r\n    \r\n    input.addEventListener(\"keydown\", (e) =>{\r\n        if(e.key === \"Enter\" && !finished){\r\n            finishEdit()\r\n        }\r\n    });\r\n\r\n    function finishEdit() {\r\n        finished = true;   // 🔐 Locks it from repeating\r\n        const newValue = input.value.trim()\r\n        if(newValue !== ''){\r\n            console.log(index)\r\n            data[index]= newValue;\r\n            localStorage.data = JSON.stringify(data);\r\n            context.textContent = newValue;\r\n        }\r\n        else{\r\n            context.textContent = task;\r\n            // return task\r\n        }\r\n        input.replaceWith(context);\r\n    }\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTask);\r\n\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/editTask.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _saveBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./saveBtn */ \"./src/saveBtn.js\");\n/* harmony import */ var _cancelBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cancelBtn */ \"./src/cancelBtn.js\");\n// import { parse, setDate, yearsToDays } from \"date-fns\";\r\n\r\n\r\n\r\n\r\nfunction form() {\r\n    const array = []\r\n    const title       = document.querySelector('.title') ;\r\n    const desc        = document.querySelector('.desc');\r\n    const dateTime    = document.querySelector('.datetime');\r\n    const priority    = document.querySelector('#priority');\r\n    const savebtn     = document.querySelector('.submitbtn');\r\n    const cancelbtn   = document.querySelector('.cancelbtn');\r\n    const errorBox    = document.querySelector('.error-box')\r\n    \r\n// --------------------------------------------------------------------------------------------------------\r\n    ;(0,_saveBtn__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title,desc,dateTime,priority,savebtn)\r\n    ;(0,_cancelBtn__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(title,desc,dateTime,priority,cancelbtn)\r\n    \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://to_do_list/./src/form.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _calendar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calendar */ \"./src/calendar.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search */ \"./src/search.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// ... existing imports ...\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n    const { data } = (0,_localStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    (0,_render__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data);\r\n    (0,_form__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_calendar__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    // render(); // Make sure to call this after DOM is ready\r\n    (0,_search__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// const date = new Date()\r\n// const year = date.getFullYear();      // 2025\r\n// const month = date.getMonth();        // 0 = Jan, 1 = Feb, ..., 5 = June\r\n  \r\n//   const firstDay = new Date(year, month, 1).getDay();  // Which day the month starts on\r\n//   const lastDate = new Date(year, month + 1, 0).getDate(); \r\n//   console.log(`the first day ${firstDay} && last day ${lastDate}`)\r\n//   console.log(year, month, date)\r\n\r\n// 💡changing the <p> context to input;\r\n  // const todayEvent = document.querySelector(\".todayEvent\");\r\n  // const p = document.createElement(\"p\");\r\n  // p.textContent = \"this is the old element\";\r\n  // todayEvent.prepend(p)\r\n\r\n  // p.addEventListener(\"click\", () =>{\r\n  //   const input = document.createElement('input');\r\n  //   input.type = \"text\";\r\n  //   input.value = p.textContent\r\n  //   p.replaceWith(input);\r\n\r\n  //   // rechanging to <p>\r\n  //   input.addEventListener(\"keyup\", (e) =>{\r\n  //     if(e.key === \"Enter\"){\r\n  //       p.textContent = input.value;\r\n  //       input.replaceWith(p);\r\n  //     }\r\n  //   })\r\n  //   input.focus()\r\n  // })\n\n//# sourceURL=webpack://to_do_list/./src/index.js?");

/***/ }),

/***/ "./src/localStorage.js":
/*!*****************************!*\
  !*** ./src/localStorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ dataInStorage)\n/* harmony export */ });\n\r\nfunction dataInStorage() {\r\n    let data;\r\n    // localStorage.removeItem(\"data\"); // ← يحذف كل المهام القديمة\r\n\r\n    if (localStorage.data && localStorage.data !== '[]') {\r\n        data = JSON.parse(localStorage.data);\r\n    } else {\r\n        data = [\r\n            {title: \"visit the museum\", desc: \"A great place for art lovers\", date: \"Wed Dec 10 2025\", prioty: \"Very-important\"},\r\n            {title: \"swimming in ice pool\",   desc: \"Challenge the cold\",date: \"2024-02-01\",   prioty: \"Very-important\"},\r\n            {title: \"learn coding\", desc: \"very wonnderful Job\", date: \"Wed Dec 10 2025\", prioty: \"Important\"},\r\n            {title: \"go hiking\",desc: \"in the mountains\",date: \"Thu Jan 01 2026\",prioty: \"Important\"},\r\n            {title: \"vacation\",desc: \"Camping in mountains\",date: \"Sun Oct 10 2025\",prioty: \"Very Important\"},\r\n            {title: \"buisness\",desc: \"meeting with maneger\",date: \"Fri Aug 15 2024\",prioty: \"Normal\"},\r\n        ]\r\n\r\n    }\r\n\r\n    // localStorage.setItem(\"data\", JSON.stringify(data));\r\n\r\n    const taskDiv = document.querySelector(\".render-task\");\r\n\r\n    return { data, taskDiv }; // ✅ Return both as an object\r\n\r\n}\n\n//# sourceURL=webpack://to_do_list/./src/localStorage.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderTasks)\n/* harmony export */ });\n/* harmony import */ var _editTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTask */ \"./src/editTask.js\");\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n\r\n\r\n\r\n\r\n// 💻 let's render some tasks on screen\r\nfunction renderTasks(data){\r\n    // const {data, taskDiv} = dataInStorage();\r\n    //   // Clear existing tasks before re-rendering\r\n    //     taskDiv.innerHTML = '';\r\n    \r\n\r\n    const taskDiv = document.querySelector(\".render-task\");\r\n    taskDiv.innerHTML = '';\r\n    \r\n    data.forEach((task, index, )=> { \r\n        // const index = data.indexOf(task);\r\n        const div = document.createElement(\"div\");\r\n        div.classList.add(\"render-task\");\r\n        taskDiv.appendChild(div);\r\n\r\n        const context = document.createElement(\"p\");\r\n        context.textContent = `${task.title} ${task.desc} ${task.date} ${task.prioty}`\r\n        div.appendChild(context);\r\n        \r\n        // edit Btn\r\n        const editBtn = document.createElement(\"button\");\r\n        editBtn.textContent = \"edit\";\r\n        editBtn.addEventListener(\"click\", () =>{\r\n            (0,_editTask__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(context,task,data,index)\r\n        })\r\n        div.appendChild(editBtn); \r\n\r\n        // delete Btn\r\n        const deleteBtn = document.createElement(\"button\");\r\n        deleteBtn.textContent = \"delete\";\r\n\r\n\r\n        deleteBtn.addEventListener(\"click\" , (e) => {\r\n            const taskElement = e.target.parentElement; //we got the parent dev\r\n            // const taskContext = taskElement.querySelector('p').textContent //we got the task context\r\n            \r\n            // find the exact task by matching properties\r\n            const taskIndex = data.findIndex(t => \r\n                t => t.title === task.title && t.desc === task.desc && t.date === task.date && t.prioty === task.prioty)\r\n            if(taskIndex !== -1) {\r\n                data.splice(taskIndex, 1);\r\n                localStorage.setItem(\"data\", JSON.stringify(data))\r\n                div.remove()\r\n            }\r\n        })\r\n\r\n\r\n        div.appendChild(deleteBtn);\r\n        \r\n        // create checkBox for the Task\r\n        const checkBox = document.createElement(\"input\");\r\n        checkBox.setAttribute(\"type\",\"checkbox\");\r\n        checkBox.classList.add(\"checkbox\");\r\n        const delInput = document.createElement(\"del\");\r\n        \r\n        checkBox.addEventListener(\"click\", (e) =>{\r\n            checkBox;\r\n            if(checkBox.checked === true ){\r\n                context.innerHTML = `<del>${task.title} ${task.desc} ${task.date} ${task.desc} </del>`;\r\n                context.appendChild(delInput);\r\n                \r\n                \r\n            } else if ( checkBox.checked === false) {\r\n                console.log(checkBox.checked);\r\n                context.removeChild(delInput);\r\n                context.textContent = `${task.title} ${task.desc} ${task.date} ${task.desc}`;\r\n            };\r\n            localStorage.setItem(\"data\",JSON.stringify(data));\r\n            checkBox.checked === true ? false : true\r\n        })\r\n        div.prepend(checkBox)\r\n    })\r\n}\r\n\n\n//# sourceURL=webpack://to_do_list/./src/render.js?");

/***/ }),

/***/ "./src/saveBtn.js":
/*!************************!*\
  !*** ./src/saveBtn.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _clear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clear */ \"./src/clear.js\");\n\r\n\r\n// import { sl } from \"date-fns/locale\"\r\n\r\n// export default function savingData(title,desc,dateTime,priority,savebtn){\r\n//     const {data} = dataInStorage()\r\n//     savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload\r\n//         e.preventDefault;\r\n\r\n\r\n//         // bring the values\r\n//         const titleValue         = title.value.trim();\r\n//         const descValue          = desc.value.trim();\r\n//         const date        = dateTime.value ? new Date(dateTime.value).toDateString() : null;\r\n//         const priorityValue      = priority.value;\r\n\r\n//         const errors = []\r\n\r\n\r\n        \r\n//         const errorTitle = document.querySelector(\".error-title\");\r\n//         const errorDesc = document.querySelector(\".error-desc\");\r\n//         const errorDate = document.querySelector(\".error-date\");\r\n\r\n//         errorTitle.textContent = \"\";\r\n//         errorDesc.textContent   = \"\";\r\n//         errorDate.textContent   = \"\";\r\n        \r\n\r\n//         if(!titleValue) {\r\n//             errorTitle.textContent = \"Title is required\"\r\n//         } else if( titleValue.length > 20) {\r\n//             errorTitle.textContent = \"Title can't be more than 20 characters\"\r\n//         }\r\n\r\n//         if(!descValue) {\r\n//             errorDesc.textContent = \"Description is required\"\r\n//         } else if( errorDesc.length > 120) {\r\n//             errorTitle.textContent = \"Description can't be more than 120 characters\"\r\n//         }\r\n\r\n//         if(date === null) {\r\n//             errorDate.textContent = \" date is required\";\r\n//             return false;\r\n        \r\n//         } else {\r\n            \r\n//             clear(title, desc, dateTime, priority)\r\n\r\n                            \r\n//             const dataObject = [titleValue, descValue, date, priorityValue].join(\" \");\r\n//             data.push(dataObject);\r\n//             console.log(data)\r\n                \r\n//             localStorage.setItem(\"data\", JSON.stringify(data));\r\n        \r\n//         }\r\n//         location.reload()\r\n//     })\r\n// }\r\n\r\n\r\n\r\n\r\n\r\n// last Version I worked on it there\r\n\r\n function saveBtn() {\r\n    const {data} = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\r\n    const saveing = document.querySelector(\".submitbtn\")\r\n\r\n    saveing.addEventListener(\"click\", (e) =>{\r\n        e.preventDefault();\r\n        const titleInput = document.querySelector(\".title\");\r\n        const descInput = document.querySelector(\".desc\");\r\n        const dateInput = document.querySelector(\".datetime\");\r\n        const prtyInput = document.querySelector(\"#priority\");    \r\n\r\n        const titleValue = document.querySelector(\".title\").value.trim();\r\n        const descValue  = document.querySelector(\".desc\").value.trim();\r\n        const dateValue  = document.querySelector(\".datetime\") ? new Date(dateInput.value).toDateString() : null;\r\n        const prtyVAlue  = document.querySelector(\"#priority\").value;\r\n        \r\n        // Get <small> element under each input\r\n        const errorTitle = document.querySelector(\".error-title\");\r\n        const errorDesc  = document.querySelector(\".error-desc\") ;\r\n        const errorDate  = document.querySelector(\".error-date\") ;\r\n\r\n        // Clear previous error messages\r\n        errorTitle.textContent = \"\";\r\n        errorDesc.textContent  = \"\";\r\n        errorDate.textContent  = \"\";\r\n\r\n\r\n        if(!titleValue) {\r\n            errorTitle.textContent = \"Title is required\"\r\n            return false\r\n        } else if( titleValue.length > 20) {\r\n            errorTitle.textContent = \"Title can't be more than 20 characters\"\r\n            return false\r\n        }\r\n\r\n        if(!descValue) {\r\n            errorDesc.textContent = \"Description is required\"\r\n            return false\r\n        } else if( errorDesc.length > 120) {\r\n            errorTitle.textContent = \"Description can't be more than 120 characters\"\r\n            return false\r\n        }\r\n\r\n        if (dateValue === null || dateValue === \"Invalid Date\") {\r\n            errorDate.textContent = \" date is required\" \r\n            return false;\r\n\r\n        } else {\r\n        const task = {\r\n            title : titleValue,\r\n            desc  : descValue ,\r\n            date  : dateValue ,\r\n            prioty: prtyVAlue,\r\n        };\r\n            \r\n        // data.push([task.title, task.desc, task.date, task.prioty].join(\" \"));\r\n        data.push(task)\r\n\r\n        localStorage.setItem(\"data\", JSON.stringify(data));     \r\n    \r\n        (0,_clear__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(titleInput, descInput, dateInput, prtyInput);\r\n\r\n    location.reload()\r\n        }\r\n    });\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (saveBtn);\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// ********************************************\r\n// the first version\r\n\r\n// export default function savingData(title,desc,dateTime,priority,savebtn){\r\n//     const {data, taskDiv} = dataInStorage()\r\n//     savebtn.addEventListener('click', (e) => {  // => e is event and we want to stop browser from reload\r\n//         e.preventDefault;\r\n\r\n\r\n//         // bring the values\r\n//         const titleValue         = title.value.trim();\r\n//         const descValue          = desc.value.trim();\r\n//         const date          = dateTime.value ? new Date(dateTime.value).toDateString() : null;\r\n//         const priorityValue      = priority.value;\r\n\r\n//         const errors = []\r\n\r\n\r\n        \r\n//         const errorTitlte = document.querySelector(\".error-title\");\r\n//         const errorDesc = document.querySelector(\".error-desc\");\r\n//         const errorDate = document.querySelector(\".error-date\");\r\n\r\n//         errorTitlte.textContent = \"\";\r\n//         errorDesc.textContent   = \"\";\r\n//         errorDate.textContent   = \"\";\r\n        \r\n\r\n//         //--- Saving data inside LocalStorage with transfer it to stringify\r\n//         if(!titleValue) errors.push(\"title is Required\");\r\n//         if(!descValue)  errors.push(\"the Description is Required\");\r\n//         if(!date)       errors.push(\"Date is required\");\r\n//         if(titleValue.length > 20) errors.push(\"the Title Can't be more then 10 Characters\");\r\n//         if(descValue.length > 120) errors.push(\"Descripton Can't be more then 120 Characters\");\r\n\r\n//         const errorBox = document.querySelector(\".error-box\");\r\n//         errorBox.innerHTML = \"\"\r\n//         if(errors.length > 0) {\r\n//             errors.forEach(msg => {\r\n//             const p = document.createElement(\"p\");\r\n//             p.textContent = msg;\r\n//             p.style.color = \"#c71e1e\";\r\n//             errorBox.appendChild(p);    \r\n            \r\n//             });\r\n//             return false; \r\n        \r\n//         } else {\r\n\r\n//             clear(title, desc, dateTime, priority)\r\n\r\n                            \r\n//             const dataObject = [titleValue, descValue, date, priorityValue].join(\" \");\r\n//             data.push(dataObject);\r\n//             console.log(data)\r\n                \r\n//             localStorage.setItem(\"data\", JSON.stringify(data));\r\n//             // ---------------------------------------------------\r\n            \r\n//             // ---------------------------------------------------\r\n            \r\n//             // bring and read data from localStorage\r\n//             // const saveData = JSON.parse(localStorage.getItem(data));\r\n//             // console.log(saveData)\r\n\r\n//             // 📆 Displaying data on Calender\r\n//             // const calender = document.querySelector('.calender');\r\n//             // for (let key in saveData) {\r\n//             //     const p = document.createElement('p')\r\n//             //     p.textContent = `${key} : ${saveData[key]}`\r\n//             //     calender.appendChild(p);\r\n//             // }\r\n//         }\r\n//         location.reload()\r\n//     })\r\n// }\r\n\n\n//# sourceURL=webpack://to_do_list/./src/saveBtn.js?");

/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ searchBox)\n/* harmony export */ });\n/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ \"./src/localStorage.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n\r\n\r\n\r\nfunction searchBox() {\r\n    const searchInput = document.getElementById(\"search\");\r\n    searchInput.addEventListener(\"keyup\", () => {\r\n        \r\n         const {data} = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n            const sValue = searchInput.value.trim().toLowerCase();\r\n            const filtered = data.filter(task => \r\n                task.title.toLowerCase().includes(sValue));\r\n                console.log(typeof(filtered))\r\n                ;(0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(filtered);\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://to_do_list/./src/search.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../../node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to_do_list/./src/style.css?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;