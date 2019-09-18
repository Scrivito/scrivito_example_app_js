(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("underscore"), require("react"), require("urijs"), require("tcomb-validation"), require("react-dom"), require("tcomb-react"), require("promise-polyfill"), require("speakingurl"), require("history"));
	else if(typeof define === 'function' && define.amd)
		define(["underscore", "react", "urijs", "tcomb-validation", "react-dom", "tcomb-react", "promise-polyfill", "speakingurl", "history"], factory);
	else if(typeof exports === 'object')
		exports["scrivito"] = factory(require("underscore"), require("react"), require("urijs"), require("tcomb-validation"), require("react-dom"), require("tcomb-react"), require("promise-polyfill"), require("speakingurl"), require("history"));
	else
		root["scrivito"] = factory(root["underscore"], root["react"], root["urijs"], root["tcomb-validation"], root["react-dom"], root["tcomb-react"], root["promise-polyfill"], root["speakingurl"], root["history"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {



/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {

// this is a "just enough to work" implementation based on the es2015 definition,
// that avoid headscratching https://github.com/Microsoft/TypeScript/issues/11375


/***/ }),
/* 9 */
/***/ (function(module, exports) {



/***/ }),
/* 10 */
/***/ (function(module, exports) {



/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var public_authentication_namespaceObject = {};
__webpack_require__.r(public_authentication_namespaceObject);
__webpack_require__.d(public_authentication_namespaceObject, "ERROR_CODE_CLIENT_VERIFICATION_REQUIRED", function() { return ERROR_CODE_CLIENT_VERIFICATION_REQUIRED; });
__webpack_require__.d(public_authentication_namespaceObject, "perform", function() { return perform; });
__webpack_require__.d(public_authentication_namespaceObject, "reset", function() { return public_authentication_reset; });
__webpack_require__.d(public_authentication_namespaceObject, "currentState", function() { return public_authentication_currentState; });
var attribute_deserializer_namespaceObject = {};
__webpack_require__.r(attribute_deserializer_namespaceObject);
__webpack_require__.d(attribute_deserializer_namespaceObject, "deserialize", function() { return deserialize; });
var ui_link_handler_namespaceObject = {};
__webpack_require__.r(ui_link_handler_namespaceObject);
__webpack_require__.d(ui_link_handler_namespaceObject, "startLinkResolutionFor", function() { return startLinkResolutionFor; });
__webpack_require__.d(ui_link_handler_namespaceObject, "finishLinkResolutionFor", function() { return finishLinkResolutionFor; });
var infopark_integration_test_support_namespaceObject = {};
__webpack_require__.r(infopark_integration_test_support_namespaceObject);
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "alwaysShowOptionMarkers", function() { return alwaysShowOptionMarkers; });
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "isFetchingActive", function() { return isFetchingActive; });
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "enableForceVerification", function() { return enableForceVerification; });
__webpack_require__.d(infopark_integration_test_support_namespaceObject, "currentPublicAuthorizationState", function() { return currentPublicAuthorizationState; });

// EXTERNAL MODULE: external "underscore"
var external_underscore_ = __webpack_require__(0);
var external_underscore_default = /*#__PURE__*/__webpack_require__.n(external_underscore_);

// CONCATENATED MODULE: ./scrivito_sdk/common/pretty_print.ts

function prettyPrint(input) {
    try {
        if (Object(external_underscore_["isFunction"])(input)) {
            return printFunction(input);
        }
        if (Object(external_underscore_["isObject"])(input)) {
            return printObject(input);
        }
        return printTruncated(input);
    }
    catch (_e) {
        return '';
    }
}
function printObject(object) {
    var basicContent = object._scrivitoPrivateContent;
    if (basicContent && Object(external_underscore_["isFunction"])(basicContent.toPrettyPrint)) {
        return basicContent.toPrettyPrint();
    }
    if (Object(external_underscore_["isElement"])(object)) {
        return "[object HTMLElement " + printTruncated(object.outerHTML) + "]";
    }
    return printTruncated(object);
}
function printFunction(fn) {
    if (isFnWithSchema(fn)) {
        var schema = fn._scrivitoPrivateSchema;
        return "[class " + schema.name + "]";
    }
    if (isReactComponent(fn)) {
        var name = fn.displayName || fn.name;
        return "[class React.Component \"" + name + "\"]";
    }
    return truncate(fn.toString());
}
function isFnWithSchema(fn) {
    return !!fn._scrivitoPrivateSchema;
}
function isReactComponent(fn) {
    var prototype = fn.prototype;
    return prototype && prototype.isReactComponent;
}
function printTruncated(input) {
    var stringified = JSON.stringify(input);
    if (stringified) {
        return truncate(stringified);
    }
    return stringified;
}
function truncate(value) {
    if (value.length > 100) {
        return value.slice(0, 100) + "...";
    }
    return value;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/errors.ts
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ScrivitoError = /** @class */ (function (_super) {
    __extends(ScrivitoError, _super);
    function ScrivitoError(message, captureStackTrace) {
        var _newTarget = this.constructor;
        if (captureStackTrace === void 0) { captureStackTrace = true; }
        var _this = 
        // 'Error' breaks prototype chain here
        _super.call(this, message) || this;
        // restore prototype chain
        // see: https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        var correctPrototype = _newTarget.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(_this, correctPrototype);
        }
        else {
            _this.__proto__ = correctPrototype;
        }
        // message should be set before capturing stacktrace
        // since it is featured in the stacktrace in some environments.
        _this._captureStackTrace = captureStackTrace;
        if (captureStackTrace) {
            if (Error.captureStackTrace) {
                Error.captureStackTrace(_this, _this.constructor);
            }
            else {
                var stack = void 0;
                try {
                    throw new Error();
                }
                catch (error) {
                    stack = error.stack;
                }
                Object.defineProperty(_this, 'stack', { value: stack });
            }
        }
        return _this;
    }
    Object.defineProperty(ScrivitoError.prototype, "name", {
        get: function () {
            return this.constructor.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ScrivitoError.prototype, "captureStackTrace", {
        // For test purpose only.
        get: function () {
            return !!this._captureStackTrace;
        },
        enumerable: true,
        configurable: true
    });
    return ScrivitoError;
}(Error));

var ArgumentError = /** @class */ (function (_super) {
    __extends(ArgumentError, _super);
    function ArgumentError(message) {
        return _super.call(this, message) || this;
    }
    return ArgumentError;
}(ScrivitoError));

var InternalError = /** @class */ (function (_super) {
    __extends(InternalError, _super);
    function InternalError(message) {
        return _super.call(this, message) || this;
    }
    return InternalError;
}(ScrivitoError));

var ResourceNotFoundError = /** @class */ (function (_super) {
    __extends(ResourceNotFoundError, _super);
    function ResourceNotFoundError(message) {
        return _super.call(this, message) || this;
    }
    return ResourceNotFoundError;
}(ScrivitoError));


// EXTERNAL MODULE: external "tcomb-validation"
var external_tcomb_validation_ = __webpack_require__(5);

// CONCATENATED MODULE: ./scrivito_sdk/common/tcomb.ts

/* tslint:disable-next-line:no-any */
external_tcomb_validation_["struct"].strict = true;
/* tslint:disable-next-line:no-any */
external_tcomb_validation_["interface"].strict = true;
/* tslint:disable-next-line:no-any */
external_tcomb_validation_["fail"] = function (message) {
    // original displays `[tcomb] ${message}`
    throw new TypeError(message);
};


// CONCATENATED MODULE: ./scrivito_sdk/common/next_tick.ts

var capturedDelayedFunctions = [];
var captureEnabled;
function nextTick(delayedFunction) {
    if (captureEnabled) {
        capturedDelayedFunctions.push(delayedFunction);
    }
    else {
        setTimeout(delayedFunction, 0);
    }
}
function throwNextTick(error) {
    nextTick(function () {
        throw error;
    });
}
// For test purpose only.
function simulateNextTicks() {
    if (!captureEnabled) {
        return;
    }
    var exceptions = [];
    while (capturedDelayedFunctions.length) {
        var currentFunctions = external_underscore_["shuffle"](capturedDelayedFunctions);
        capturedDelayedFunctions = [];
        external_underscore_["each"](currentFunctions, function (delayedFunction) {
            try {
                delayedFunction();
            }
            catch (e) {
                exceptions.push(e);
            }
        });
    }
    if (exceptions.length > 0) {
        throw exceptions[0];
    }
}
// For test purpose only.
function enableNextTickCapture() {
    captureEnabled = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/check_arguments_for.ts
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





function checkArgumentsFor(functionName, argumentsDefinitions, _a) {
    var docPermalink = _a.docPermalink;
    return function () {
        var givenArguments = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            givenArguments[_i] = arguments[_i];
        }
        var errorMessage;
        try {
            errorMessage = errorMessageForArguments(givenArguments, argumentsDefinitions);
        }
        catch (e) {
            // if the type checker crashes (e.g. due to a bug in the SDK),
            // we don't want to crash the application because of this!
            throwNextTick(e);
        }
        if (errorMessage) {
            var moreInfo = "Visit " + docUrl(docPermalink) + " for more information.";
            throw new ArgumentError("Invalid arguments for '" + functionName + "': " + errorMessage + " " + moreInfo);
        }
    };
}
function docUrl(docPermalink) {
    return "https://scrivito.com/" + docPermalink;
}
function errorMessageForArguments(givenArguments, argumentsDefinitions) {
    var numExpected = argumentsDefinitions.length;
    var numGiven = givenArguments.length;
    if (numGiven > numExpected) {
        return "Expected " + numExpected + " arguments, got " + numGiven;
    }
    var errors = Object(external_underscore_["flatten"])(argumentsDefinitions.map(function (_a, index) {
        var _b = __read(_a, 2), argumentName = _b[0], argumentType = _b[1];
        var givenArgument = givenArguments[index];
        var validation = external_tcomb_validation_.validate(givenArgument, argumentType);
        return validation.errors.map(function (error) {
            return messageForError(argumentName, error);
        });
    }));
    if (errors.length > 0) {
        return errors.join(' ');
    }
}
function messageForError(argumentName, error) {
    var subjectDescription = subjectDescriptionForError(argumentName, error);
    if (error.actual === undefined) {
        return "Missing required " + subjectDescription + ".";
    }
    if (error.expected === external_tcomb_validation_.Nil) {
        return "Unexpected " + subjectDescription + ".";
    }
    var typeName = external_tcomb_validation_.getTypeName(error.expected);
    var message = "got " + prettyPrint(error.actual) + ", expected type " + typeName + ".";
    return "Unexpected value for " + subjectDescription + ": " + message;
}
function subjectDescriptionForError(argumentName, error) {
    var argumentDescription = "argument '" + argumentName + "'";
    if (error.path.length === 0) {
        return argumentDescription;
    }
    return "key '" + error.path.join('/') + "' in " + argumentDescription;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/context_container.ts
var ContextContainer = /** @class */ (function () {
    function ContextContainer() {
    }
    ContextContainer.prototype.current = function () {
        return this.currentContext;
    };
    ContextContainer.prototype.runWith = function (valueForFunction, fn) {
        var before = this.currentContext;
        try {
            this.currentContext = valueForFunction;
            return fn();
        }
        finally {
            this.currentContext = before;
        }
    };
    return ContextContainer;
}());
/* harmony default export */ var context_container = (ContextContainer);

// CONCATENATED MODULE: ./scrivito_sdk/common/deferred.ts

var deferred_Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new ScrivitoPromise(function (resolveFn, rejectFn) {
            _this.resolve = function (value) {
                _this.settled = true;
                resolveFn(value);
            };
            _this.reject = function (error) {
                _this.settled = true;
                rejectFn(error);
            };
        });
    }
    Deferred.prototype.isPending = function () {
        return !this.settled;
    };
    return Deferred;
}());
/* harmony default export */ var common_deferred = (deferred_Deferred);

// CONCATENATED MODULE: ./scrivito_sdk/common/run_and_catch_exception.ts
function runAndCatchException(fn) {
    try {
        return {
            errorThrown: false,
            result: fn(),
        };
    }
    catch (e) {
        return { errorThrown: true, error: e };
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/common/error_logging.ts
var error_logging_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(error_logging_read(arguments[i]));
    return ar;
};
var consoleErrorIsDisabled = false;
function logError() {
    var _a;
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (window && window.console && !consoleErrorIsDisabled) {
        (_a = window.console).error.apply(_a, __spread(args));
    }
}
function disableConsoleError() {
    consoleErrorIsDisabled = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/get_scrivito_version.ts

function getScrivitoVersion() {
    var version = "1.9.0-rc1-264-g225e120f7e9b";
    if (!version) {
        throw new InternalError('version info missing');
    }
    return version;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/asset_loading.ts
function loadCss(url, targetDocument) {
    if (targetDocument === void 0) { targetDocument = window.document; }
    var link = targetDocument.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    appendChild(targetDocument.head, link);
}
function loadJs(url, targetDocument) {
    if (targetDocument === void 0) { targetDocument = window.document; }
    var script = targetDocument.createElement('script');
    script.src = url;
    appendChild(targetDocument.head, script);
}
// For test purpose only
function appendChild(head, element) {
    head.appendChild(element);
}

// CONCATENATED MODULE: ./scrivito_sdk/common/is_present.ts
/** returns true, iff the given value is not null and not undefined.
 * (helps typescript infer the typing when used with higher-order functions)
 */
function isPresent(maybeValue) {
    return maybeValue !== null && maybeValue !== undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/attribute_inflection.ts
var CONVERT_TO_CAMELCASE = /(_+)(\w)/g;
var CONVERT_TO_UNDERSCORE = /([A-Z])/g;
var TEST_ABBR_OR_NUMBER = /[A-Z]+|\d+/g;
var TEST_CAMEL_CASE = /^_?(_+[A-Z0-9]|[^_])+$/;
var TEST_SEPARATOR = /[_\s]+/g;
var TEST_TITLE_CASE_WORD = /[A-Z][a-z]+/g;
var TEST_UNDERSCORE = /^[a-z0-9_:]+$/;
function isUnderscore(name) {
    return TEST_UNDERSCORE.test(name);
}
function isCamelCase(name) {
    return TEST_CAMEL_CASE.test(name);
}
function underscore(name) {
    return name.replace(CONVERT_TO_UNDERSCORE, function (_match, group) { return "_" + group.toLowerCase(); });
}
function camelCase(name) {
    return name.replace(CONVERT_TO_CAMELCASE, function (match, underscores, nextChar, index) {
        if (!index) {
            return match;
        }
        if (nextChar.toUpperCase() === nextChar) {
            return match;
        }
        return "" + underscores.substr(1) + nextChar.toUpperCase();
    });
}
function classify(name) {
    var camelCased = camelCase(name);
    return camelCased.charAt(0).toUpperCase() + camelCased.slice(1);
}
function sentenceCase(name) {
    return name
        .replace(TEST_SEPARATOR, ' ')
        .replace(TEST_TITLE_CASE_WORD, function (word) { return " " + word.toLowerCase(); })
        .replace(TEST_ABBR_OR_NUMBER, function (word) { return " " + word; })
        .trim()
        .replace(/./, function (c) { return c.toUpperCase(); });
}

// EXTERNAL MODULE: ./scrivito_sdk/common/finished_with_optional_value_iterator.ts
var finished_with_optional_value_iterator = __webpack_require__(8);

// CONCATENATED MODULE: ./scrivito_sdk/common/input_types.ts

var BlobType = external_tcomb_validation_.interface({
    size: external_tcomb_validation_.Number,
    type: external_tcomb_validation_.String,
}, { name: 'Blob', strict: false });
var FileType = BlobType.extend({
    name: external_tcomb_validation_.String,
}, { name: 'File', strict: false });

// CONCATENATED MODULE: ./scrivito_sdk/common/is_system_attribute.ts
function isSystemAttribute(attributeName) {
    return attributeName[0] === '_';
}

// CONCATENATED MODULE: ./scrivito_sdk/common/iterable.ts
function arrayFromIterable(iterable, size) {
    var iterator = iterable.iterator();
    var result = [];
    while (result.length !== size) {
        var next = iterator.next();
        if (next.done) {
            return result;
        }
        result.push(next.value);
    }
    return result;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/random.ts
function randomHex() {
    var hex = Math.floor(Math.random() * Math.pow(16, 8)).toString(16);
    while (hex.length < 8) {
        hex = "0" + hex;
    }
    return hex;
}
function randomId() {
    return randomHex() + randomHex();
}


// CONCATENATED MODULE: ./scrivito_sdk/common/throttle.ts

var shouldBypassThrottle = false;
function throttle(fn, ms, options) {
    return shouldBypassThrottle ? fn : external_underscore_["throttle"](fn, ms, options);
}
function bypassThrottle() {
    shouldBypassThrottle = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/types.ts
var types_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var INTEGER_RANGE_START = -9007199254740991;
var INTEGER_RANGE_END = 9007199254740991;
var BACKEND_FORMAT_REGEXP = /^(\d{4})(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)$/;
function deserializeAsInteger(value) {
    if (typeof value === 'string' && value.match(/^-?\d+$/)) {
        return convertToInteger(value);
    }
    if (typeof value === 'number') {
        return convertToInteger(value);
    }
    return null;
}
function isValidInteger(value) {
    return (isInteger(value) &&
        INTEGER_RANGE_START <= value &&
        value <= INTEGER_RANGE_END);
}
function isValidFloat(value) {
    return typeof value === 'number' && Object(external_underscore_["isFinite"])(value);
}
function deserializeAsDate(value) {
    if (typeof value !== 'string') {
        return null;
    }
    if (!isValidDateString(value)) {
        throw new InternalError("The value is not a valid ISO date time: \"" + value + "\"");
    }
    return parseStringToDate(value);
}
function parseStringToDate(dateString) {
    if (!dateString) {
        return null;
    }
    var dateMatch = dateString.match(BACKEND_FORMAT_REGEXP);
    if (!dateMatch) {
        return null;
    }
    var _a = types_read(dateMatch, 7), yearString = _a[1], monthString = _a[2], dayString = _a[3], hoursString = _a[4], minutesString = _a[5], secondsString = _a[6];
    var year = parseInt(yearString, 10);
    var month = parseInt(monthString, 10);
    var day = parseInt(dayString, 10);
    var hours = parseInt(hoursString, 10);
    var minutes = parseInt(minutesString, 10);
    var seconds = parseInt(secondsString, 10);
    return new Date(Date.UTC(year, month - 1, day, hours, minutes, seconds));
}
function formatDateToString(date) {
    var yearMonth = "" + date.getUTCFullYear() + pad(date.getUTCMonth() + 1);
    var dateHours = "" + pad(date.getUTCDate()) + pad(date.getUTCHours());
    var minutesSeconds = "" + pad(date.getUTCMinutes()) + pad(date.getUTCSeconds());
    return "" + yearMonth + dateHours + minutesSeconds;
}
function isValidDateString(dateString) {
    return typeof dateString === 'string' && !!dateString.match(/^\d{14}$/);
}
function pad(num) {
    return num < 10 ? "0" + num : num;
}
function isInteger(value) {
    return isValidFloat(value) && Math.floor(value) === value;
}
function convertToInteger(valueFromBackend) {
    var intValue = parseInt(valueFromBackend.toString(), 10);
    if (intValue === 0) {
        return 0; // otherwise -0 could be returned.
    }
    else if (isValidInteger(intValue)) {
        return intValue;
    }
    return null;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/wait.ts

function wait(seconds) {
    return waitMs(seconds * 1000);
}
function waitMs(milliseconds) {
    return new ScrivitoPromise(function (resolve) {
        setTimeout(resolve, milliseconds);
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/common/equals.ts
var equals_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function equals(a, b) {
    if (isComparableObject(a) && isComparableObject(b)) {
        return a.equals(b);
    }
    if (Array.isArray(a) && Array.isArray(b)) {
        if (a.length !== b.length) {
            return false;
        }
        return Object(external_underscore_["every"])(Object(external_underscore_["zip"])(a, b), function (_a) {
            var _b = equals_read(_a, 2), value1 = _b[0], value2 = _b[1];
            return equals(value1, value2);
        });
    }
    if (isValueOfComparableObject(a) && isValueOfComparableObject(b)) {
        return a.valueOf() === b.valueOf();
    }
    return a === b;
}
function isComparableObject(val) {
    if (!val)
        return false;
    return typeof val.equals === 'function';
}
function isValueOfComparableObject(val) {
    if (!val)
        return false;
    return typeof val.valueOf === 'function';
}

// CONCATENATED MODULE: ./scrivito_sdk/common/promise_and_finally.ts
function promiseAndFinally(promise, handler) {
    return promise.then(function (value) {
        handler();
        return value;
    }, function (error) {
        handler();
        throw error;
    });
}

// EXTERNAL MODULE: external "promise-polyfill"
var external_promise_polyfill_ = __webpack_require__(12);
var external_promise_polyfill_default = /*#__PURE__*/__webpack_require__.n(external_promise_polyfill_);

// CONCATENATED MODULE: ./scrivito_sdk/common/scrivito_promise.ts

// Scrivito uses the browser's native `Promise` implementation by default (or a polyfill).
var ScrivitoPromise;
if (typeof Promise !== 'undefined') {
    ScrivitoPromise = Promise;
}
else {
    ScrivitoPromise = external_promise_polyfill_default.a;
}
// The promise implementation can be switched for unit testing purposes,
function setScrivitoPromise(PromiseClass) {
    ScrivitoPromise = PromiseClass;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/batch_retrieval.ts

var batch_retrieval_BatchRetrieval = /** @class */ (function () {
    function BatchRetrieval(mget, _a) {
        var batchSize = (_a === void 0 ? {} : _a).batchSize;
        this.mget = mget;
        this.batchSize = batchSize || 100;
        this.itemsToBatch = [];
    }
    BatchRetrieval.prototype.retrieve = function (key) {
        var _this = this;
        if (this.itemsToBatch.length === 0) {
            nextTick(function () { return _this.performRetrieval(); });
        }
        var deferred = new common_deferred();
        this.itemsToBatch.push({ key: key, deferred: deferred });
        return deferred.promise;
    };
    // For test purpose only.
    BatchRetrieval.prototype.reset = function () {
        this.itemsToBatch = [];
    };
    BatchRetrieval.prototype.performRetrieval = function () {
        var _this = this;
        var nextBatch = this.itemsToBatch.splice(0, this.batchSize);
        if (nextBatch.length === 0) {
            return;
        }
        var keys = nextBatch.map(function (item) { return item.key; });
        this.mget(keys).then(function (results) {
            nextBatch.forEach(function (_a, index) {
                var key = _a.key, deferred = _a.deferred;
                if (index < results.length) {
                    var result = results[index];
                    deferred.resolve(result);
                }
                else {
                    _this.retrieve(key).then(deferred.resolve, deferred.reject);
                }
            });
        }, function (error) {
            nextBatch.forEach(function (item) { return item.deferred.reject(error); });
        });
        this.performRetrieval();
    };
    return BatchRetrieval;
}());
/* harmony default export */ var batch_retrieval = (batch_retrieval_BatchRetrieval);

// CONCATENATED MODULE: ./scrivito_sdk/common/compute_cache_key.ts
function computeCacheKey(data) {
    var normalizedData = normalizeData(data);
    return JSON.stringify(normalizedData);
}
function normalizeData(data) {
    if (Array.isArray(data)) {
        return data.map(normalizeData);
    }
    if (isUnknownObject(data)) {
        return Object.keys(data)
            .sort()
            .map(function (key) { return [key, normalizeData(data[key])]; });
    }
    return data;
}
function isUnknownObject(data) {
    return typeof data === 'object' && data !== null;
}

// CONCATENATED MODULE: ./scrivito_sdk/common/position.ts
function clickPositionWithinElement(clickEvent, element) {
    var mouseX = clickEvent.clientX, mouseY = clickEvent.clientY;
    var _a = element.getBoundingClientRect(), elementX = _a.left, elementY = _a.top;
    return {
        x: mouseX - elementX,
        y: mouseY - elementY,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/common/streamable.ts
var streamable_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** A Streamable represents a resource that can be streamed.
 *
 * The resource is streamed, by subscribing the Streamable.
 * The result is a Subscription, which can be used to unsubscribe,
 * thereby closing the stream.
 *
 * Note: It is a very light-weight subset of the Observable pattern,
 * known from RxJs et. al.
 */
var streamable_Streamable = /** @class */ (function () {
    /** create a Streamable from the given subscribeFunction */
    function Streamable(subscribeFunction) {
        this.subscribeFunction = subscribeFunction;
    }
    /** subscribe this Streamable, streaming values into the provided function. */
    Streamable.prototype.subscribe = function (nextOrSubscriber) {
        var intermediary = new Intermediary(typeof nextOrSubscriber === 'object'
            ? nextOrSubscriber
            : { next: nextOrSubscriber });
        var subscriptionOrUnsubscribe = this.subscribeFunction(intermediary);
        intermediary.setUnsubscribeCallback(typeof subscriptionOrUnsubscribe === 'object'
            ? function () { return subscriptionOrUnsubscribe.unsubscribe(); }
            : subscriptionOrUnsubscribe);
        return intermediary;
    };
    Streamable.prototype.map = function (fn) {
        var _this = this;
        return new Streamable(function (subscriber) {
            return _this.subscribe({
                next: function (value) { return subscriber.next(fn(value)); },
                complete: function () { return subscriber.complete(); },
            });
        });
    };
    Streamable.prototype.filter = function (test) {
        var _this = this;
        return new Streamable(function (subscriber) {
            return _this.subscribe({
                next: function (value) {
                    if (test(value)) {
                        subscriber.next(value);
                    }
                },
                complete: function () { return subscriber.complete(); },
            });
        });
    };
    /** Returns a Promise that resolves with the final (=last) value of the stream,
     * when the stream completes.
     * If the stream is empty (i.e. it completes before emitting a value),
     * the Promise resolves with undefined.
     */
    Streamable.prototype.toPromise = function () {
        var _this = this;
        return new ScrivitoPromise(function (resolve) {
            var lastValue;
            _this.subscribe({
                next: function (value) {
                    lastValue = value;
                },
                complete: function () {
                    resolve(lastValue);
                },
            });
        });
    };
    /** Returns a new Streamable, truncated to the first value. */
    Streamable.prototype.takeOne = function () {
        var _this = this;
        return new Streamable(function (subscriber) {
            var subscription = _this.subscribe({
                next: function (value) {
                    if (subscription)
                        subscription.unsubscribe();
                    subscriber.next(value);
                    subscriber.complete();
                },
                complete: function () {
                    subscriber.complete();
                },
            });
            if (subscriber.isClosed())
                subscription.unsubscribe();
            return subscription;
        });
    };
    /** Returns a Promise to the first value that the stream emits.
     * The Promise rejects, if the stream completes before any value is emitted.
     */
    Streamable.prototype.waitForFirst = function () {
        var _this = this;
        return new ScrivitoPromise(function (resolve, reject) {
            var resolved = false;
            _this.takeOne().subscribe({
                next: function (value) {
                    resolved = true;
                    resolve(value);
                },
                complete: function () {
                    if (!resolved)
                        reject(new EndOfStreamError());
                },
            });
        });
    };
    /** Transforms this stream, so that it completes, when the passed-in stream
     * emits its first value or completes.
     */
    Streamable.prototype.takeUntil = function (until) {
        var _this = this;
        return new Streamable(function (subscriber) {
            var untilSubscription;
            var subscription;
            subscription = _this.subscribe({
                next: function (value) {
                    subscriber.next(value);
                },
                complete: function () {
                    completeStream();
                },
            });
            // edge-case: stream that completes immediately
            if (subscription.isClosed())
                return function () { return undefined; };
            untilSubscription = until.subscribe({
                next: function () {
                    completeStream();
                },
                complete: function () {
                    completeStream();
                },
            });
            function completeStream() {
                subscriber.complete();
                cleanup();
            }
            function cleanup() {
                if (subscription)
                    subscription.unsubscribe();
                if (untilSubscription)
                    untilSubscription.unsubscribe();
            }
            return cleanup;
        });
    };
    return Streamable;
}());

var EndOfStreamError = /** @class */ (function (_super) {
    streamable_extends(EndOfStreamError, _super);
    function EndOfStreamError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return EndOfStreamError;
}(ScrivitoError));

/** An Intermediary is a proxy between a Streamable and a Subscriber.
 *
 * The Streamable receives the Intermediary as the Subscriber.
 * The Subscriber receives the Intermediary as the Subscription.
 *
 * The purpose of the Intermediary is to normalize the API.
 * It ensures that unsubscribe and complete are always idempotent, for example.
 */
var Intermediary = /** @class */ (function () {
    function Intermediary(subscriber) {
        this.subscriber = subscriber;
    }
    Intermediary.prototype.next = function (value) {
        if (this.subscriber && this.subscriber.next) {
            this.subscriber.next(value);
        }
    };
    Intermediary.prototype.complete = function () {
        if (this.subscriber && this.subscriber.complete) {
            this.subscriber.complete();
        }
        this.subscriber = undefined;
    };
    Intermediary.prototype.unsubscribe = function () {
        if (!this.subscriber)
            return;
        this.subscriber = undefined;
        if (this.unsubscribeCallback) {
            this.unsubscribeCallback.apply(undefined);
        }
    };
    Intermediary.prototype.isClosed = function () {
        return !this.subscriber;
    };
    Intermediary.prototype.setUnsubscribeCallback = function (callback) {
        this.unsubscribeCallback = callback;
    };
    return Intermediary;
}());

// CONCATENATED MODULE: ./scrivito_sdk/common/anticipated_stream.ts

/** Convert a Promise to a Stream into the promised Stream. */
function anticipatedStream(streamPromise) {
    return new streamable_Streamable(function (subscriber) {
        var subscription;
        streamPromise
            .then(function (stream) {
            if (subscriber.isClosed())
                return;
            subscription = stream.subscribe(subscriber);
        })
            .catch(function (error) {
            subscriber.complete();
            throw error;
        });
        return function () {
            if (subscription)
                subscription.unsubscribe();
        };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/common/subject.ts
var subject_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/** a Subject is a Streamable, into which values can be pushed.
 * It can be used as a way to broadcast values to many subscribers.
 */
var Subject = /** @class */ (function (_super) {
    subject_extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this, function (subscriber) {
            if (_this.isCompleted) {
                subscriber.complete();
                return function () { return undefined; };
            }
            var id = (_this.subscriberIdCounter++).toString();
            _this.subscribers[id] = subscriber;
            _this.onNewSubscriber(subscriber);
            return function () {
                delete _this.subscribers[id];
            };
        }) || this;
        _this.subscribers = {};
        _this.subscriberIdCounter = 1;
        _this.isCompleted = false;
        return _this;
    }
    /** push a value to all subscribers */
    Subject.prototype.next = function (value) {
        var _this = this;
        Object.keys(this.subscribers).forEach(function (id) {
            _this.subscribers[id].next(value);
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        Object.keys(this.subscribers).forEach(function (id) {
            return _this.subscribers[id].complete();
        });
        this.subscribers = {};
        this.isCompleted = true;
    };
    Subject.prototype.subscriberCount = function () {
        return Object.keys(this.subscribers).length;
    };
    Subject.prototype.isClosed = function () {
        return this.isCompleted;
    };
    Subject.prototype.onNewSubscriber = function (_subscriber) {
        // intended to be overwritten in subclasses
    };
    return Subject;
}(streamable_Streamable));

/** a BehaviorSubject keeps track of the current value,
 * and provides it to new Subscribers automatically.
 */
var BehaviorSubject = /** @class */ (function (_super) {
    subject_extends(BehaviorSubject, _super);
    function BehaviorSubject(value) {
        var _this = _super.call(this) || this;
        _this.value = value;
        return _this;
    }
    BehaviorSubject.prototype.next = function (value) {
        this.value = value;
        _super.prototype.next.call(this, value);
    };
    BehaviorSubject.prototype.onNewSubscriber = function (subscriber) {
        subscriber.next(this.value);
    };
    return BehaviorSubject;
}(Subject));


// CONCATENATED MODULE: ./scrivito_sdk/common/extract_title_and_description.ts
function extractTitleAndDescription(text) {
    var match = /^([\s\S]+?[.!?])\s+([\s\S]+)/.exec(text);
    return match ? [match[1], match[2] || undefined] : [text, undefined];
}

// CONCATENATED MODULE: ./scrivito_sdk/common/index.ts
































// EXTERNAL MODULE: external "urijs"
var external_urijs_ = __webpack_require__(2);

// CONCATENATED MODULE: ./scrivito_sdk/app_support/trusted_ui_origins.ts

var trusted_ui_origins_trustedUiOrigins = [];
function isTrustedUiOrigin(origin) {
    if (origin === window.location.origin)
        return true;
    return trusted_ui_origins_trustedUiOrigins.some(function (trustedOrigin) {
        return originMatches(origin, trustedOrigin);
    });
}
function setTrustedUiOrigins(urls) {
    trusted_ui_origins_trustedUiOrigins = urls;
}
function originMatches(origin, pattern) {
    var originUrl = new external_urijs_(origin);
    var patternUrl = new external_urijs_(pattern);
    return (originUrl.protocol() === patternUrl.protocol() &&
        hostMatches(originUrl.host(), patternUrl.host()));
}
function hostMatches(host, hostPattern) {
    if (hostPattern.substr(0, 2) === '*.') {
        var postfix = hostPattern.substr(1);
        return host.substr(-postfix.length) === postfix;
    }
    return host === hostPattern;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_all_until.ts

function loadAllUntil(iterator, size, objs) {
    if (objs === void 0) { objs = []; }
    var run = runAndCatchErrorsWhileLoading(function () { return iterator.next(); });
    if (!run.allDataLoaded) {
        return { done: false, objs: objs };
    }
    var next = run.result;
    if (next.done || size === 0) {
        return { done: next.done, objs: objs };
    }
    return loadAllUntil(iterator, size - 1, objs.concat([next.value]));
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_handler.ts
var load_handler_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var load_handler_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(load_handler_read(arguments[i]));
    return ar;
};

var captureContextContainer = new context_container();
var currentCaptureList = function () { return captureContextContainer.current(); };
function capture(fn) {
    var captureList = {
        subscribes: [],
        missing: false,
        outdated: false,
    };
    var result = captureContextContainer.runWith(captureList, fn);
    return new CaptureReport(captureList, result);
}
function throwNoLoadingContext() {
    throw new ScrivitoError('Content not yet loaded. ' +
        'Forgot to use Scrivito.load or Scrivito.connect? ' +
        'See https://scrivito.com/content-not-yet-loaded-error');
}
function isCurrentlyCapturing() {
    return currentCaptureList() !== undefined;
}
function notifyMissing() {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.missing = true;
    }
}
function notifyDataRequired(subscribe) {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.subscribes.push(subscribe);
    }
}
function notifyOutdated() {
    var captureList = currentCaptureList();
    if (captureList) {
        captureList.outdated = true;
    }
}
var CaptureReport = /** @class */ (function () {
    function CaptureReport(captureList, result) {
        this.captureList = captureList;
        this.result = result;
    }
    CaptureReport.prototype.forwardToCurrent = function () {
        var currentList = currentCaptureList();
        if (!currentList) {
            if (this.captureList.missing) {
                throwNoLoadingContext();
            }
            return;
        }
        extendList(currentList, this.captureList);
    };
    /** returns true iff no data is missing, doesn't care about outdated  */
    CaptureReport.prototype.isAllDataLoaded = function () {
        return !this.captureList.missing;
    };
    /** returns true iff no data is missing or outdated */
    CaptureReport.prototype.isAllDataUpToDate = function () {
        return !this.captureList.missing && !this.captureList.outdated;
    };
    /** subscribes to the loading of all data that was captured, using the provided subscription.
     * all subscribed data is loaded automatically, and reloaded when outdated.
     * the subscription is automatically updated to reflect the data captured in this report,
     * i.e. any data that is no longer present in the capture is unsubscribed.
     */
    CaptureReport.prototype.subscribeLoading = function (subscriber) {
        var unsubscribes = this.captureList.subscribes.map(function (subscribe) {
            return subscribe();
        });
        subscriber.unsubscribe();
        subscriber.storeUnsubscribe(function () {
            unsubscribes.forEach(function (unsubscribe) { return unsubscribe(); });
        });
    };
    return CaptureReport;
}());

/** keeps track of subscriptions to LoadableData */
var LoadingSubscriber = /** @class */ (function () {
    function LoadingSubscriber() {
    }
    /** used internally, do not call from outside 'loadable' */
    LoadingSubscriber.prototype.storeUnsubscribe = function (unsubscribe) {
        this.unsubscribeCallback = unsubscribe;
    };
    /** unsubscribe any previously subscribed data */
    LoadingSubscriber.prototype.unsubscribe = function () {
        if (this.unsubscribeCallback) {
            this.unsubscribeCallback();
        }
    };
    return LoadingSubscriber;
}());

function extendList(target, source) {
    target.subscribes = load_handler_spread(target.subscribes, source.subscribes);
    target.missing = target.missing || source.missing;
    target.outdated = target.outdated || source.outdated;
}

// CONCATENATED MODULE: ./scrivito_sdk/state/copy_on_write_store.ts

var copy_on_write_store_CopyOnWriteStore = /** @class */ (function () {
    function CopyOnWriteStore(value, copy) {
        this.value = value;
        this.copy = copy;
        this.valueForReading = new context_container();
    }
    /** run some code that needs to read the value.
     * the passed-in `value` is guaranteed not to change, i.e.
     * any concurrent writes won't become visible.
     */
    CopyOnWriteStore.prototype.read = function (fn) {
        var currentValue = this.value;
        return this.valueForReading.runWith(currentValue, function () { return fn(currentValue); });
    };
    /** run some code that modifies the value.
     * the modifications will not become visible to concurrent readers.
     */
    CopyOnWriteStore.prototype.write = function (fn) {
        if (this.valueForReading.current() === this.value) {
            // if there's currently someone reading the value,
            // make a copy before writing it
            this.value = this.copy(this.value);
        }
        fn(this.value);
    };
    return CopyOnWriteStore;
}());


// CONCATENATED MODULE: ./scrivito_sdk/state/subscriber_set.ts


var subscriber_set_SubscriberSet = /** @class */ (function () {
    function SubscriberSet(notifySubscribers) {
        this.notifySubscribers = notifySubscribers;
        this.subscribersStore = new copy_on_write_store_CopyOnWriteStore([], function (subscribers) { return subscribers.slice(); });
    }
    /** This method is exposed to other packages as
     * `createSyncSubscriber` and `createAsyncSubscriber`.
     */
    SubscriberSet.prototype.create = function (listener, rank) {
        if (rank === void 0) { rank = 0; }
        return new subscriber_set_Subscriber(this.subscribersStore, listener, rank);
    };
    SubscriberSet.prototype.count = function () {
        return this.subscribersStore.read(function (subscribers) { return subscribers.length; });
    };
    SubscriberSet.prototype.reset = function () {
        this.subscribersStore.write(function (subscribers) {
            subscribers.length = 0;
        });
    };
    SubscriberSet.prototype.notify = function () {
        var _this = this;
        this.subscribersStore.read(function (subscribers) {
            return _this.notifySubscribers(subscribers);
        });
    };
    return SubscriberSet;
}());

/** Subscriber is the internal implementation of the StateSubscriber interface. */
var subscriber_set_Subscriber = /** @class */ (function () {
    function Subscriber(subscriberStore, listener, rank) {
        if (rank === void 0) { rank = 0; }
        this.subscriberStore = subscriberStore;
        this.listener = listener;
        this.rank = rank;
        this.active = false;
    }
    /** This method is exposed to other packages as
     * part of the StateSubscriber interface.
     */
    Subscriber.prototype.subscribeChanges = function (stateReference) {
        var _this = this;
        this.stateReference = stateReference;
        if (!this.active) {
            this.subscriberStore.write(function (subscribers) {
                var index = Object(external_underscore_["sortedIndex"])(subscribers, _this, 'rank');
                subscribers.splice(index, 0, _this);
            });
            this.active = true;
        }
        if (this.hasChanges()) {
            this.listener();
        }
    };
    /** This method is exposed to other packages as
     * part of the StateSubscriber interface.
     */
    Subscriber.prototype.unsubscribe = function () {
        var _this = this;
        if (this.active) {
            this.subscriberStore.write(function (subscribers) {
                var index = subscribers.indexOf(_this);
                if (index >= 0) {
                    subscribers.splice(index, 1);
                }
            });
            this.active = false;
        }
    };
    Subscriber.prototype.notify = function () {
        if (this.active) {
            this.listener();
        }
    };
    Subscriber.prototype.hasChanges = function () {
        if (!this.stateReference) {
            return false;
        }
        return this.stateReference.hasChanges();
    };
    return Subscriber;
}());

// CONCATENATED MODULE: ./scrivito_sdk/state/state_subscribers.ts


var syncSubscribers = new subscriber_set_SubscriberSet(function (subscribers) {
    subscribers.forEach(function (subscriber) {
        if (subscriber.hasChanges()) {
            subscriber.notify();
        }
    });
});
var asyncSubscribers = new subscriber_set_SubscriberSet(function (subscribers) {
    subscribers.forEach(function (subscriber) {
        nextTick(function () {
            if (subscriber.hasChanges()) {
                subscriber.notify();
            }
        });
    });
});

// CONCATENATED MODULE: ./scrivito_sdk/state/listener_collection.ts

var listener_collection_ListenerCollection = /** @class */ (function () {
    function ListenerCollection() {
        this.listenersStore = new copy_on_write_store_CopyOnWriteStore([], function (listeners) {
            return listeners.slice();
        });
    }
    ListenerCollection.prototype.subscribe = function (listener) {
        var _this = this;
        var active = true;
        var guardedListener = function () {
            if (active) {
                listener();
            }
        };
        this.listenersStore.write(function (listeners) { return listeners.push(guardedListener); });
        return function () {
            active = false;
            _this.listenersStore.write(function (listeners) {
                var index = listeners.indexOf(guardedListener);
                listeners.splice(index, 1);
            });
        };
    };
    ListenerCollection.prototype.count = function () {
        return this.listenersStore.read(function (listeners) { return listeners.length; });
    };
    ListenerCollection.prototype.clear = function () {
        this.listenersStore.write(function (listeners) {
            listeners.length = 0;
        });
    };
    ListenerCollection.prototype.notify = function () {
        this.listenersStore.read(function (listeners) {
            return listeners.forEach(function (listener) { return listener(); });
        });
    };
    return ListenerCollection;
}());
/* harmony default export */ var listener_collection = (listener_collection_ListenerCollection);

// CONCATENATED MODULE: ./scrivito_sdk/state/primitive_value.ts
function isPrimitiveObject(value) {
    return (value !== null &&
        typeof value === 'object' &&
        !Array.isArray(value) &&
        !instanceOfClass(value));
}
function instanceOfClass(object) {
    // Instances of class have a prototype chain of length 2 or more, e.g.
    // Instance --> SomeClass --> Object
    //
    // A primitive object has a prototype chain of length 1:
    // Instance --> Object
    //
    // Note that it would be unwise to hardcode a check for `Object`, as there are
    // multiple `Object` classes, one for each iFrame.
    var proto = Object.getPrototypeOf(object);
    if (proto === null) {
        // no prototype chain? does not happen usually, but who knows...
        return false;
    }
    // if prototype chain has length 1,
    // we assume that it's a direct instance of Object and not from some class.
    return Object.getPrototypeOf(proto) !== null;
}

// CONCATENATED MODULE: ./scrivito_sdk/state/conservative_update.ts

// Given a primitive value `current` and a primitive value `next`,
// this method produces a result primitive value, which is
// * equal to next
// * independent from `next`
//   -> it does not reuse any Objects or Arrays from `next`
// * as identical to `current` as possible
//   -> it reuses as many Objects and Arrays of `current` as possible
//   -> but it mutates neither `current` nor `next`
// * frozen (as in Object.freeze)
//   -> Any newly created Objects and Arrays are frozen, so the result is deep-frozen,
//      assuming that all Objects and Arrays inside `current` are frozen already.
function conservativeUpdate(current, next) {
    // this method works on the assumption that you pass in primitive data, i.e.
    // * plain Objects, not instances of classes
    // * plain Arrays, not some crazy subtypes of Array
    //
    // TS, however, cannot express that effectively,
    // therefore using `any` to turn off type check.
    // tslint:disable-next-line
    return updateValue(current, next);
}
function updateValue(current, next) {
    if (current === next) {
        // performance optimization, avoid deep comparison
        return next;
    }
    if (isPrimitiveObject(next)) {
        return updateObject(isPrimitiveObject(current) ? current : undefined, next);
    }
    if (Array.isArray(next)) {
        return updateArray(Array.isArray(current) ? current : undefined, next);
    }
    return next;
}
function updateObject(current, next) {
    var updated = {};
    var foundDiff = false;
    if (current === undefined) {
        foundDiff = true;
    }
    var nextKeys = Object.keys(next);
    var currentKeys = new Set();
    if (current) {
        Object.keys(current).forEach(function (key) { return currentKeys.add(key); });
    }
    if (currentKeys.size !== nextKeys.length) {
        foundDiff = true;
    }
    nextKeys.forEach(function (key) {
        if (!currentKeys.has(key)) {
            foundDiff = true;
        }
        var currentValue = current ? current[key] : undefined;
        var updatedValue = updateValue(currentValue, next[key]);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        updated[key] = updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result has every key in next, it is now T, not just Partial<T>
    // (assuming that T is a primitive Object, not some subtype of Object)
    return result;
}
function updateArray(current, next) {
    var foundDiff = false;
    if (current === undefined || current.length !== next.length) {
        foundDiff = true;
    }
    var updated = next.map(function (nextValue, index) {
        var currentValue = current ? current[index] : undefined;
        var updatedValue = updateValue(currentValue, nextValue);
        if (updatedValue !== currentValue) {
            foundDiff = true;
        }
        return updatedValue;
    });
    var result = foundDiff ? Object.freeze(updated) : current;
    // since result now has the same content as `next`, it is T
    // (assuming that T is a primitive Array, not some subtype of Array)
    return result;
}

// CONCATENATED MODULE: ./scrivito_sdk/state/state_tree.ts
var state_tree_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var state_tree_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var state_tree_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(state_tree_read(arguments[i]));
    return ar;
};




// abstract interface for managing state
var state_tree_AbstractStateStore = /** @class */ (function () {
    function AbstractStateStore() {
    }
    // return current state
    AbstractStateStore.prototype.get = function () {
        var _this = this;
        var valueWhenAccessed = this.untrackedGet();
        this.recordDetector(function () { return valueWhenAccessed !== _this.untrackedGet(); });
        return valueWhenAccessed;
    };
    AbstractStateStore.prototype.recordDetector = function (detector) {
        this.getTree().recordDetector(detector);
    };
    AbstractStateStore.prototype.set = function (newState) {
        var currentState = this.untrackedGet();
        var updatedState = conservativeUpdate(currentState, newState);
        if (updatedState === currentState) {
            return;
        }
        this.uncheckedSet(updatedState);
    };
    // reset the state back to undefined
    AbstractStateStore.prototype.clear = function () {
        this.set(undefined);
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional.
    AbstractStateStore.prototype.subState = function (key) {
        return new StateTreeNode(this, key);
    };
    AbstractStateStore.prototype.reader = function () {
        // identical implementation, different type
        return this;
    };
    // this method may only be called when StateType is fully partial,
    // i.e. all properties defined by StateType are optional (= may be undefined).
    AbstractStateStore.prototype.setSubState = function (key, newSubState) {
        var _a;
        var priorState = this.untrackedGet();
        if (priorState === undefined) {
            var newState = Object.freeze((_a = {}, _a[key] = newSubState, _a));
            // Since StateType is fully partial, newState is a valid StateType.
            // No way to tell TypeScript this, though.
            this.uncheckedSet(newState);
            return;
        }
        if (newSubState === undefined) {
            var priorKeys = Object.keys(priorState);
            if (priorKeys.length === 1 && priorKeys[0] === key) {
                // remove empty objects, avoid memory leak
                this.uncheckedSet(undefined);
                return;
            }
        }
        if (priorState === null) {
            // if StateType includes null, then it is not fully partial
            // and this methods should not be used!
            throw new InternalError();
        }
        var duplicate = __assign({}, priorState);
        // We know that duplicate isn't null or undefined
        var duplicateAsNonNull = duplicate;
        if (newSubState === undefined) {
            // remove undefined keys, avoid memory leak
            delete duplicateAsNonNull[key];
        }
        else {
            // Since StateType is fully partial, this is true:
            // (SubType<StateType, K> | undefined) == SubType<StateType, K>
            duplicateAsNonNull[key] = newSubState;
        }
        this.uncheckedSet(Object.freeze(duplicate));
    };
    AbstractStateStore.prototype.getSubState = function (key) {
        var state = this.untrackedGet();
        if (state !== undefined && state !== null) {
            // we know that state is neither null or undefined
            var nonNullState = state;
            var subState = nonNullState[key];
            // if T includes undefined, it is equal to (NotUndefined<T> | undefined)
            // if T does not include undefined, it is equal to NotUndefined<T>
            return subState;
        }
    };
    return AbstractStateStore;
}());
var StateReference = /** @class */ (function () {
    function StateReference(detector) {
        this.detector = detector;
    }
    /** package private: don't call this from outside the 'state' package. */
    StateReference.prototype.hasChanges = function () {
        return this.detector();
    };
    return StateReference;
}());

// a state tree, which can be used to store state.
// this is the root of the tree, which keeps the state of the entire tree.
var state_tree_StateTree = /** @class */ (function (_super) {
    state_tree_extends(StateTree, _super);
    function StateTree() {
        var _this = _super.call(this) || this;
        _this.listeners = new listener_collection();
        _this.detectorRecording = new context_container();
        _this.batchUpdates = new context_container();
        _this.version = 0;
        _this.frozenContextContainer = new context_container();
        return _this;
    }
    StateTree.prototype.untrackedGet = function () {
        return this.state;
    };
    StateTree.prototype.withFrozenState = function (frozenContext, fn) {
        return this.frozenContextContainer.runWith(frozenContext, fn);
    };
    StateTree.prototype.failIfFrozen = function (operationName) {
        var frozenContext = this.frozenContextContainer.current();
        if (frozenContext) {
            var message = operationName + " is not permitted " +
                ("inside '" + frozenContext.contextName + "'. ") +
                (frozenContext.message || '');
            throw new StateChangePreventedError(message);
        }
    };
    StateTree.prototype.uncheckedSet = function (newState) {
        this.failIfFrozen('Changing state');
        this.state = newState;
        this.version++;
        if (!this.insideBatchUpdate()) {
            this.notifyListeners();
        }
    };
    /**
     * Executes the given function and tracks read access to this tree.
     * All substates that are accessed while the function runs are considered "relevant".
     *
     * Returns a StateReference that can be used to subscribe to changes to the accessed state.
     */
    StateTree.prototype.trackStateAccess = function (fn) {
        var _a = this.trackChanges(fn), detector = _a.detector, result = _a.result;
        return {
            result: result,
            accessedState: new StateReference(detector),
        };
    };
    StateTree.prototype.recordDetector = function (detector) {
        var recording = this.detectorRecording.current();
        if (recording !== undefined) {
            recording.push(detector);
        }
    };
    StateTree.prototype.getTree = function () {
        return this;
    };
    StateTree.prototype.id = function () {
        return '';
    };
    StateTree.prototype.subscribe = function (listener) {
        return this.listeners.subscribe(listener);
    };
    StateTree.prototype.withBatchedUpdates = function (fn) {
        var stateBefore = this.state;
        try {
            this.batchUpdates.runWith(true, fn);
        }
        finally {
            if (!this.insideBatchUpdate() && stateBefore !== this.state) {
                this.notifyListeners();
            }
        }
    };
    // For test purpose only.
    StateTree.prototype.listenerCount = function () {
        return this.listeners.count();
    };
    // public for test purpose only.
    StateTree.prototype.clearListeners = function () {
        this.listeners.clear();
    };
    StateTree.prototype.trackChanges = function (fn) {
        var _this = this;
        var versionBefore = this.version;
        var _a = this.recordDetectors(fn), result = _a.result, detectors = _a.detectors;
        // checking the version first, to avoid running all detectors
        // when the tree is unchanged
        var overallDetector = function () {
            return (_this.version !== versionBefore &&
                !!Object(external_underscore_["find"])(detectors, function (detector) { return detector(); }));
        };
        return { result: result, detector: overallDetector };
    };
    StateTree.prototype.recordDetectors = function (fn) {
        var detectors = [];
        var result = this.detectorRecording.runWith(detectors, fn);
        var outerRecording = this.detectorRecording.current();
        if (outerRecording !== undefined) {
            outerRecording.push.apply(outerRecording, state_tree_spread(detectors));
        }
        return { result: result, detectors: detectors };
    };
    StateTree.prototype.notifyListeners = function () {
        var _this = this;
        // listeners should not change state, at least not synchronously,
        // since that would create chaos, e.g. race condition between listeners,
        // breaking the one-way-flow of a reactive application, stack overflow etc.
        // you may use nextTick to make a state change asynchronously, though.
        this.withFrozenState({ contextName: 'state listeners' }, function () {
            _this.listeners.notify();
        });
    };
    StateTree.prototype.insideBatchUpdate = function () {
        return !!this.batchUpdates.current();
    };
    return StateTree;
}(state_tree_AbstractStateStore));
/* harmony default export */ var state_tree = (state_tree_StateTree);
var StateChangePreventedError = /** @class */ (function (_super) {
    state_tree_extends(StateChangePreventedError, _super);
    function StateChangePreventedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StateChangePreventedError;
}(ScrivitoError));

// a node of a state tree.
// does not actually keep state, but provides
// access scoped to a subtree of a StateTree.
var StateTreeNode = /** @class */ (function (_super) {
    state_tree_extends(StateTreeNode, _super);
    function StateTreeNode(parentState, key) {
        var _this = _super.call(this) || this;
        _this.parentState = parentState;
        _this.key = key;
        // cache tree locally (performance)
        _this.tree = parentState.getTree();
        return _this;
    }
    StateTreeNode.prototype.getTree = function () {
        return this.tree;
    };
    StateTreeNode.prototype.untrackedGet = function () {
        return this.parentState.getSubState(this.key);
    };
    StateTreeNode.prototype.uncheckedSet = function (newState) {
        this.parentState.setSubState(this.key, newState);
    };
    StateTreeNode.prototype.id = function () {
        if (this.cachedId === undefined) {
            // first convert backslash to double-backslash
            // then convert slash to backslash-slash
            var escapedKey = this.key.replace(/\\/g, '\\\\').replace(/\//g, '\\/');
            this.cachedId = this.parentState.id() + "/" + escapedKey;
        }
        return this.cachedId;
    };
    return StateTreeNode;
}(state_tree_AbstractStateStore));

// CONCATENATED MODULE: ./scrivito_sdk/state/global_state.ts


var globalState = new state_tree();
var appState = globalState.subState('app');
var cmsState = globalState.subState('cms');
var uiState = globalState.subState('ui');
function subscribeEntireStateForTestPurposes(listener) {
    var subscriber = createSyncSubscriber(listener);
    subscriber.subscribeChanges(trackStateAccess(function () { return globalState.get(); }).accessedState);
    return function () { return subscriber.unsubscribe(); };
}
function withBatchedUpdates(fn) {
    return globalState.withBatchedUpdates(fn);
}
function trackStateAccess(fn) {
    return globalState.trackStateAccess(fn);
}
function withFrozenState(context, fn) {
    return globalState.withFrozenState(context, fn);
}
function failIfFrozen(operationName) {
    return globalState.failIfFrozen(operationName);
}
/** create a new StateSubscriber that will invoke listeners _asynchronously_,
 * when changes happen to subscribed state.
 */
function createAsyncSubscriber(listener) {
    return asyncSubscribers.create(listener);
}
/** create a new StateSubscriber that will invoke listeners _synchronously_,
 * when changes happen to subscribed state.
 * You can pass in a `rank`, which influences the order, in which listeners are notified:
 * listeners with lower rank are notified before listeners with higher rank.
 */
function createSyncSubscriber(listener, rank) {
    if (rank === void 0) { rank = 0; }
    return syncSubscribers.create(listener, rank);
}
// for test purposes only
function listenerCount() {
    return syncSubscribers.count() + asyncSubscribers.count();
}
// for test purposes only
function resetGlobalState() {
    globalState.clearListeners();
    syncSubscribers.reset();
    asyncSubscribers.reset();
    globalState.clear();
    setupSubscribers();
}
function setupSubscribers() {
    globalState.subscribe(function () {
        syncSubscribers.notify();
        asyncSubscribers.notify();
    });
}
setupSubscribers();

// CONCATENATED MODULE: ./scrivito_sdk/state/batched_state_updater.ts


var bufferedUpdates = [];
var isUpdateScheduled = function () { return bufferedUpdates.length !== 0; };
function addBatchUpdate(callback) {
    if (!isUpdateScheduled()) {
        nextTick(function () { return withBatchedUpdates(function () { return performUpdate(bufferedUpdates); }); });
    }
    bufferedUpdates.push(callback);
}
function performUpdate(callbacks) {
    bufferedUpdates = [];
    try {
        callbacks.forEach(function (callback) { return callback(); });
    }
    finally {
        if (isUpdateScheduled()) {
            performUpdate(bufferedUpdates);
        }
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/state/observe.ts


/**
 * observe an expression, which calculates a value based on state.
 *
 * `observedExpression` will be executed once initially
 * and re-executed whenever the global state changes in a relevant way.
 *
 * `observedExpression` is expected to be a pure function,
 * i.e. it should be deterministic and not have side-effects.
 *
 * whenever `observedExpression` is executed,
 * the returned value is emitted into the returned Streamable.
 */
function observe(observedExpression) {
    return new streamable_Streamable(function (observer) {
        var active = true;
        var lastResult;
        var lastResultInitialized = false;
        var stateSubscriber = createAsyncSubscriber(run);
        function run() {
            if (!active) {
                return;
            }
            var report = trackStateAccess(function () {
                return withFrozenState({
                    contextName: 'observe',
                    message: 'Extract all side-effects into the listener function',
                }, observedExpression);
            });
            stateSubscriber.subscribeChanges(report.accessedState);
            var nextResult = report.result;
            if (lastResultInitialized && equals(nextResult, lastResult)) {
                return;
            }
            observer.next(nextResult);
            lastResult = nextResult;
            lastResultInitialized = true;
        }
        nextTick(run);
        return function () {
            active = false;
            stateSubscriber.unsubscribe();
        };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/state/observe_sync.ts


/**
 * observe an expression, synchronously.
 *
 * for most cases, the normal, async `observe` is better, faster and more stable.
 * use `observeSync` only if you know what you are doing.
 *
 * Notable differences from async `observe`:
 * * You may not alter state anywhere, not even in the listener.
 * * A slow listener has a much more severe impact on the overall application responsiveness.
 * * The result of the first run is not provided to the listener, but returned as `initialValue`
 *
 */
function observeSync(observedExpression, listener) {
    var firstReport = trackStateAccess(function () {
        return withFrozenState({
            contextName: 'observeSync',
            message: 'Use non-sync observe or nextTick',
        }, observedExpression);
    });
    var lastResult = firstReport.result;
    var stateSubscriber = createSyncSubscriber(function () {
        var report = trackStateAccess(observedExpression);
        stateSubscriber.subscribeChanges(report.accessedState);
        var nextResult = report.result;
        if (!equals(nextResult, lastResult)) {
            listener(nextResult);
            lastResult = nextResult;
        }
    });
    stateSubscriber.subscribeChanges(firstReport.accessedState);
    return {
        initialValue: lastResult,
        unsubscribe: function () {
            stateSubscriber.unsubscribe();
        },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/state/wait_for.ts


/** Wait until an observable function returns a value (other than undefined or null).
 *
 * Observes the given function.
 * While the function returns undefined or null, it keeps observing.
 * The Promise is resolved with the first returned value, that is not undefined or null.
 */
function waitFor(observableFunction) {
    return observe(observableFunction)
        .filter(isPresent)
        .waitForFirst();
}

// CONCATENATED MODULE: ./scrivito_sdk/state/index.ts








// CONCATENATED MODULE: ./scrivito_sdk/loadable/load.ts
var load_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var load_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(load_read(arguments[i]));
    return ar;
};



// load triggers the loading of all resource that the passed in
// function needs and returns a Promise to the result of the function.
//
// It can be used to convert synchronous code (the loadable function)
// into asynchronous code (Promise to the return value).
//
// A loadable function is a function that:
// * is pure, i.e. idempotent, doesn't perform I/O, is free of side-effects
//
// load will run the provided function as many times as needed,
// and trigger loading of any NotLoadedError that should occur.
//
// It returns a Promise that fulfills once the function returns a value.
// If the function throws an Exception (other than NotLoadedError),
// the Promise is rejected.
function load(loadableFunction) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkLoad.apply(void 0, load_spread([loadableFunction], excessArgs));
    return observeAndLoad(function () {
        return runAndCatchException(function () {
            return withFrozenState({
                contextName: 'Scrivito.load',
                message: 'Use an async callback: Scrivito.load(/* ... */).then(/* ... */).',
            }, loadableFunction);
        });
    })
        .filter(function (observed) { return observed.allDataUpToDate; })
        .waitForFirst()
        .then(function (observed) {
        var outcome = observed.result;
        if (outcome.errorThrown) {
            throw outcome.error;
        }
        else {
            return outcome.result;
        }
    });
}
var checkLoad = checkArgumentsFor('load', [['loadableFunction', external_tcomb_validation_.Function]], {
    docPermalink: 'js-sdk/load',
});

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_value.ts
// A wrapper around a value that is retrieved asynchronously.
// This class is stateless and (almost) pure:
// * it does not perform any I/O
// * the only side-effect it has is changing the provided state container
// * it does not keep any state itself
// * state is replaced, not mutated
// * it does not use Promises
var LoadableValue = /** @class */ (function () {
    // stateContainer is where the LoadableValue should store its state.
    function LoadableValue(stateContainer) {
        this.container = stateContainer;
    }
    LoadableValue.prototype.reader = function () {
        return this.container.reader().subState('value');
    };
    LoadableValue.prototype.status = function () {
        return this.getStateKey('status') || 'MISSING';
    };
    LoadableValue.prototype.value = function () {
        return this.getStateKey('value');
    };
    LoadableValue.prototype.error = function () {
        return this.getStateKey('error');
    };
    LoadableValue.prototype.version = function () {
        return this.getStateKey('version');
    };
    LoadableValue.prototype.transitionToMissing = function () {
        this.setState(undefined);
    };
    LoadableValue.prototype.transitionToAvailable = function (value, version) {
        this.setState({ status: 'AVAILABLE', value: value, version: version });
    };
    LoadableValue.prototype.transitionToError = function (error, version) {
        this.setState({ status: 'ERROR', error: error, version: version });
    };
    LoadableValue.prototype.setState = function (state) {
        this.container.set(state);
    };
    LoadableValue.prototype.getStateKey = function (key) {
        return this.container.subState(key).get();
    };
    return LoadableValue;
}());
/* harmony default export */ var loadable_value = (LoadableValue);

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loading_registry.ts
var processIndex = {};
var loadingSubscriptions = {};
function loading_registry_reset() {
    processIndex = {};
    loadingSubscriptions = {};
}
// for test purposes
function subscriberCountForLoading(dataId) {
    return loadingSubscriptions[dataId] || 0;
}
function subscribeLoading(dataId, potentialProcess) {
    var subscriptionActive = true;
    changeSubscriptionsFor(dataId, 1);
    var existingProcess = processIndex[dataId];
    if (!existingProcess) {
        processIndex[dataId] = potentialProcess;
    }
    var processToUse = existingProcess || potentialProcess;
    processToUse.notifyDataRequired();
    return function () {
        if (!subscriptionActive) {
            return;
        }
        subscriptionActive = false;
        var numSubscriptions = changeSubscriptionsFor(dataId, -1);
        if (numSubscriptions < 1) {
            processToUse.notifyDataNoLongerRequired();
        }
    };
}
function changeSubscriptionsFor(dataId, amount) {
    var oldNumber = loadingSubscriptions[dataId] || 0;
    var newNumber = oldNumber + amount;
    loadingSubscriptions[dataId] = newNumber;
    return newNumber;
}
function notifyDataWasSet(dataId) {
    var process = processIndex[dataId];
    if (process) {
        process.notifyDataWasSet();
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/not_loaded_error.ts
var not_loaded_error_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * A `NotLoadedError` is a legacy technique, only still used by the Scrivito UI.
 * It is thrown when data is accessed in a synchronous fashion but is not yet
 * available locally.
 */
var NotLoadedError = /** @class */ (function (_super) {
    not_loaded_error_extends(NotLoadedError, _super);
    function NotLoadedError() {
        return _super.call(this, 'Data is not yet loaded.', false) || this;
    }
    return NotLoadedError;
}(ScrivitoError));
/* harmony default export */ var not_loaded_error = (NotLoadedError);

// CONCATENATED MODULE: ./scrivito_sdk/loadable/stream_process.ts

var stream_process_StreamProcess = /** @class */ (function () {
    function StreamProcess(loadableValue, stream) {
        this.loadableValue = loadableValue;
        this.stream = stream;
        this.streamRequired = false;
        this.hasBufferedValue = false;
        this.isUpdateEnqueued = false;
    }
    StreamProcess.prototype.notifyDataRequired = function () {
        this.streamRequired = true;
        this.enqueueUpdate();
    };
    StreamProcess.prototype.notifyDataNoLongerRequired = function () {
        this.streamRequired = false;
        this.enqueueUpdate();
    };
    StreamProcess.prototype.notifyDataWasSet = function () {
        // don't care
    };
    StreamProcess.prototype.enqueueUpdate = function () {
        var _this = this;
        if (!this.isUpdateEnqueued) {
            nextTick(function () { return _this.update(); });
            this.isUpdateEnqueued = true;
        }
    };
    StreamProcess.prototype.update = function () {
        this.isUpdateEnqueued = false;
        if (!this.streamRequired) {
            this.ensureStreamIsClosed();
            return;
        }
        if (this.hasBufferedValue) {
            this.loadableValue.transitionToAvailable(this.bufferedValue);
            this.clearBuffer();
        }
        this.ensureStreamIsOpen();
    };
    StreamProcess.prototype.ensureStreamIsOpen = function () {
        var _this = this;
        if (!this.subscription) {
            this.subscription = this.stream.subscribe(function (value) {
                _this.bufferValue(value);
                _this.enqueueUpdate();
            });
        }
    };
    StreamProcess.prototype.ensureStreamIsClosed = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
        this.loadableValue.transitionToMissing();
        this.clearBuffer();
    };
    StreamProcess.prototype.bufferValue = function (value) {
        this.bufferedValue = value;
        this.hasBufferedValue = true;
    };
    StreamProcess.prototype.clearBuffer = function () {
        this.hasBufferedValue = false;
        this.bufferedValue = undefined;
    };
    return StreamProcess;
}());


// CONCATENATED MODULE: ./scrivito_sdk/loadable/loader_callback_process.ts


var loadIdCounter = 0;
var loader_callback_process_LoaderCallbackProcess = /** @class */ (function () {
    function LoaderCallbackProcess(value, loader, invalidation) {
        this.value = value;
        this.loader = loader;
        this.invalidation = invalidation;
    }
    LoaderCallbackProcess.prototype.notifyDataRequired = function () {
        this.triggerLoading();
    };
    LoaderCallbackProcess.prototype.notifyDataNoLongerRequired = function () {
        // don't care
    };
    LoaderCallbackProcess.prototype.notifyDataWasSet = function () {
        // when data was set, discard any loading that may still be ongoing
        this.currentLoad = undefined;
    };
    LoaderCallbackProcess.prototype.isMissing = function () {
        return this.value.status() === 'MISSING';
    };
    LoaderCallbackProcess.prototype.hasBeenInvalidated = function () {
        return valueHasBeenInvalidated(this.value, this.invalidation);
    };
    LoaderCallbackProcess.prototype.currentVersion = function () {
        return versionFromCallback(this.invalidation);
    };
    // trigger loading the data.
    // does nothing if the data is already loading, or no loading is needed.
    LoaderCallbackProcess.prototype.triggerLoading = function () {
        var _this = this;
        if (this.isLoading()) {
            return;
        }
        if (!this.isMissing() && !this.hasBeenInvalidated()) {
            return;
        }
        var versionWhenLoadingStarted = this.currentVersion();
        var loadId = loadIdCounter++;
        var isUnchanged = function () { return _this.currentLoad === loadId; };
        var finishLoader = function (effect) {
            if (isUnchanged()) {
                addBatchUpdate(function () {
                    effect();
                    _this.notifyDataWasSet();
                    runPushCallbacks();
                });
            }
        };
        var pushCallbacks = [];
        var runPushCallbacks = function () {
            return pushCallbacks.forEach(function (callback) { return callback(); });
        };
        this.loader({
            push: function (callback) { return pushCallbacks.push(callback); },
            isReload: function () { return _this.hasBeenInvalidated(); },
            wasCancelled: function () { return !isUnchanged(); },
        }).then(function (result) {
            return finishLoader(function () {
                return _this.value.transitionToAvailable(result, versionWhenLoadingStarted);
            });
        }, function (error) {
            return finishLoader(function () {
                return _this.value.transitionToError(error, versionWhenLoadingStarted);
            });
        });
        this.currentLoad = loadId;
    };
    LoaderCallbackProcess.prototype.isLoading = function () {
        return this.currentLoad !== undefined;
    };
    return LoaderCallbackProcess;
}());

function valueHasBeenInvalidated(value, callback) {
    if (!callback) {
        return false;
    }
    if (value.status() === 'MISSING') {
        return false;
    }
    return versionFromCallback(callback) !== value.version();
}
function versionFromCallback(callback) {
    if (!callback) {
        return;
    }
    var version = callback();
    // protect against "crazy" objects like NaN
    if (typeof version === 'number' && isNaN(version)) {
        var message = "invalidation callback returned unsuitable version " + version;
        throw new InternalError(message);
    }
    return version;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_data.ts







// Additionally, it may either be loading or not loading.
// Usually, the value goes through the following transitions:
// (missing, not loading)  -> (missing, loading) -> (available, not loading)
// However when something goes wrong, this transition might occur:
// (missing, not loading)  -> (missing, loading) -> (error, not loading)
//
// Other transitions are also valid,
// i.e. all possible transtions may eventually occur.
var loadable_data_LoadableData = /** @class */ (function () {
    // state is the stateContainer where the LoadableData should store its state.
    function LoadableData(options) {
        if (!options.state) {
            throw new InternalError('LoadableData needs state');
        }
        this.value = new loadable_value(options.state);
        this.invalidation = options.invalidation;
        this.throwNotLoaded = options.throwNotLoaded || false;
        this.id = options.state.id();
        if (options.stream) {
            this.loaderProcess = new stream_process_StreamProcess(this.value, options.stream);
        }
        else {
            this.loaderProcess = new loader_callback_process_LoaderCallbackProcess(this.value, 
            // if no stream is given, there must be a loader
            options.loader, options.invalidation);
        }
    }
    LoadableData.prototype.ensureAvailable = function () {
        var _this = this;
        notifyDataRequired(function () {
            return subscribeLoading(_this.id, _this.loaderProcess);
        });
        if (this.isAvailable()) {
            this.notifyIfOutdated();
            return true;
        }
        if (this.isError()) {
            this.notifyIfOutdated();
            throw this.value.error();
        }
        if (!isCurrentlyCapturing()) {
            // this is only intended for developers working on the console
            // therefore not unsubscribing is okay here
            subscribeLoading(this.id, this.loaderProcess);
            throwNoLoadingContext();
        }
        notifyMissing();
        if (this.throwNotLoaded) {
            throw new not_loaded_error();
        }
        return false;
    };
    /** Access the LoadableData synchronously, assuming it is available.
     * If the LoadableData is an error, the error is thrown.
     * If the LoadableData is missing or loading, undefined will be returned.
     * if `throwNotLoaded` has been configured, a NotLoadedError is thrown instead.
     */
    LoadableData.prototype.get = function () {
        if (this.ensureAvailable()) {
            notifyUsage(this.id, this);
            return this.value.value();
        }
    };
    LoadableData.prototype.getWithDefault = function (theDefault) {
        if (this.ensureAvailable()) {
            notifyUsage(this.id, this);
            return this.value.value();
        }
        return theDefault;
    };
    LoadableData.prototype.reader = function () {
        notifyUsage(this.id, this);
        return this.value.reader();
    };
    // set the data to a value. this makes the value available.
    LoadableData.prototype.set = function (value) {
        this.value.transitionToAvailable(value, this.currentVersion());
        notifyDataWasSet(this.id);
    };
    // set the data to an error.
    LoadableData.prototype.setError = function (error) {
        this.transitionToError(error);
        notifyDataWasSet(this.id);
    };
    // transition back to missing, removes any value or errors.
    LoadableData.prototype.reset = function () {
        this.value.transitionToMissing();
    };
    // returns true iff the value is missing
    LoadableData.prototype.isMissing = function () {
        return this.value.status() === 'MISSING';
    };
    // return true iff value is available.
    LoadableData.prototype.isAvailable = function () {
        return this.value.status() === 'AVAILABLE';
    };
    // return true iff an error was set.
    LoadableData.prototype.isError = function () {
        return this.value.status() === 'ERROR';
    };
    // for test purposes only
    LoadableData.prototype.numSubscribers = function () {
        return subscriberCountForLoading(this.id);
    };
    LoadableData.prototype.transitionToError = function (error, version) {
        if (version === void 0) { version = this.currentVersion(); }
        this.value.transitionToError(error, version);
    };
    LoadableData.prototype.notifyIfOutdated = function () {
        if (valueHasBeenInvalidated(this.value, this.invalidation)) {
            notifyOutdated();
        }
    };
    LoadableData.prototype.currentVersion = function () {
        return versionFromCallback(this.invalidation);
    };
    return LoadableData;
}());
/* harmony default export */ var loadable_data = (loadable_data_LoadableData);
var usageContext = new context_container();
function notifyUsage(id, data) {
    var store = usageContext.current();
    if (store) {
        store[id] = data;
    }
}
/** runs fn(), and reports all LoadableData that is used */
function reportUsedData(fn) {
    var store = {};
    var result = usageContext.runWith(store, fn);
    return {
        result: result,
        usedData: loadable_data_values(store),
    };
}
// Object.values replacement (IE11 doesn't have it)
function loadable_data_values(objekt) {
    return Object.keys(objekt).map(function (key) { return objekt[key]; });
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/load_with_default.ts

/** Evaluate the loadableFunction and return its result, if fully loaded.
 * Otherwise, return the default.
 *
 * Must be called with a loading context.
 * Loading of `loadableFunction` is triggered.
 */
function loadWithDefault(theDefault, loadableFunction) {
    var run = runAndCatchErrorsWhileLoading(loadableFunction);
    return run.allDataLoaded ? run.result : theDefault;
}
/** Evaluate the loadableFunction and return its result, if fully loaded and all data up-to-date.
 * Otherwise, return the default.
 *
 * Must be called with a loading context.
 * Loading of `loadableFunction` is triggered.
 */
function loadWithDefaultIfOutdated(theDefault, loadableFunction) {
    var run = runAndCatchErrorsWhileLoading(loadableFunction);
    return run.allDataLoaded && run.allDataUpToDate ? run.result : theDefault;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_with_default.ts

/** Evaluate the loadableFunction and return its result, if fully loaded.
 * Otherwise, return the default.
 *
 * You may use this without a loading context, but it will _not_ trigger loading!
 * If you want to be sure, that loading is triggered, prefer `loadWithDefault`.
 */
function loadableWithDefault(theDefault, loadableFunction) {
    var captured = capture(function () { return loadWithDefault(theDefault, loadableFunction); });
    if (isCurrentlyCapturing()) {
        captured.forwardToCurrent();
    }
    return captured.result;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/map_and_load_parallel.ts

function mapAndLoadParallel(list, iteratee) {
    var results = [];
    list.forEach(function (item) {
        var run = runAndCatchErrorsWhileLoading(function () { return iteratee(item); });
        if (run.success) {
            results.push(run.result);
        }
    });
    if (results.length < list.length) {
        throw new not_loaded_error();
    }
    return results;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/run_and_catch_errors_while_loading.ts


function runAndCatchErrorsWhileLoading(loadableFunction) {
    var captured = capture(function () { return runAndCatchException(loadableFunction); });
    captured.forwardToCurrent();
    var outcome = captured.result;
    var allDataLoaded = captured.isAllDataLoaded();
    var allDataUpToDate = captured.isAllDataUpToDate();
    if (!outcome.errorThrown) {
        return {
            success: true,
            result: outcome.result,
            allDataLoaded: allDataLoaded,
            allDataUpToDate: allDataUpToDate,
        };
    }
    if (!allDataLoaded) {
        return {
            success: false,
            allDataLoaded: false,
            allDataUpToDate: allDataUpToDate,
        };
    }
    throw outcome.error;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/loadable_collection.ts


/** a collection of LoadableData, indexed by key */
var loadable_collection_LoadableCollection = /** @class */ (function () {
    function LoadableCollection(_a) {
        var name = _a.name, state = _a.state, loader = _a.loader, invalidation = _a.invalidation;
        this.name = name;
        this.state = state;
        this.loader = loader;
        this.invalidation = invalidation;
        register(name, this);
    }
    /** get a LoadableData instance from this collection */
    LoadableCollection.prototype.get = function (key, loaderHint) {
        var _this = this;
        var stringifiedKey = stringifyKey(key);
        var invalidation = this.invalidation;
        var data = new loadable_data({
            state: this.state().subState(stringifiedKey),
            loader: function (api) { return _this.loader(key, api, loaderHint); },
            invalidation: invalidation ? function () { return invalidation(key); } : undefined,
        });
        setAffiliation(data, { collectionName: this.name, key: key });
        return data;
    };
    return LoadableCollection;
}());

function stringifyKey(key) {
    if (typeof key === 'string') {
        return key;
    }
    return computeCacheKey(key);
}
var namedCollections = {};
function register(name, collection) {
    if (namedCollections[name]) {
        throw new InternalError("collection name registered twice: " + name);
    }
    namedCollections[name] = collection;
}
function getCollection(name) {
    var found = namedCollections[name];
    if (!found) {
        throw new InternalError("collection with name " + name + " not found");
    }
    return found;
}
function setAffiliation(data, affiliation) {
    data.affiliation = affiliation;
}
function getAffiliation(data) {
    return data.affiliation;
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/data_recorder.ts
var data_recorder_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



/** load the data stored in the recording */
function loadRecording(recording) {
    withBatchedUpdates(function () { return recording.forEach(loadDataFromRecord); });
}
function loadDataFromRecord(_a) {
    var _b = data_recorder_read(_a, 3), name = _b[0], key = _b[1], value = _b[2];
    var loadableData = getCollection(name).get(key);
    loadableData.set(value);
}
function generateRecording(datas) {
    return datas.map(generateRecord);
}
function generateRecord(data) {
    var affiliation = getAffiliation(data);
    if (!affiliation) {
        throw new InternalError('Tried to record a LoadableData without affiliation');
    }
    return [affiliation.collectionName, affiliation.key, data.get()];
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/observe_and_load.ts



function observeAndLoad(loadableExpression) {
    return new streamable_Streamable(function (observer) {
        var loadingSubscriber = new LoadingSubscriber();
        var subscription = observe(function () {
            return capture(function () { return runAndCatchException(loadableExpression); });
        }).subscribe(function (captured) {
            captured.subscribeLoading(loadingSubscriber);
            var outcome = captured.result;
            if (outcome.errorThrown) {
                if (!captured.isAllDataUpToDate()) {
                    return;
                }
                throw outcome.error;
            }
            observer.next({
                result: outcome.result,
                allDataLoaded: captured.isAllDataLoaded(),
                allDataUpToDate: captured.isAllDataUpToDate(),
            });
        });
        return function () {
            subscription.unsubscribe();
            loadingSubscriber.unsubscribe();
        };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/loadable/index.ts















// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_description.ts
var GET = 'GET';
var SEND = 'SEND';
var STREAM = 'STREAM';

// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_client.ts
var adapter_client_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var adapter_client_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(adapter_client_read(arguments[i]));
    return ar;
};




var clientCounter = 1;
/** creates an AdapterClient, using the provided AdapterConnection.
 */
function createAdapterClient(description, connection) {
    var clientId = clientCounter++;
    var adapterClient = {};
    Object.keys(description).forEach(function (methodName) {
        // methodName is keyof Adapter, because description is AdapterDescription
        var methodType = description[methodName];
        if (methodType === GET) {
            adapterClient[methodName] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                var adapterState = appState
                    .subState('adapters')
                    .subState(clientId.toString());
                var methodNameAsGet = methodName;
                var state = adapterState
                    .subState(methodNameAsGet)
                    .subState(computeCacheKey(params));
                var data = new loadable_data({
                    state: state,
                    stream: connection.stream.apply(connection, adapter_client_spread([methodNameAsGet], params)),
                });
                return data.get();
            };
        }
        if (methodType === SEND) {
            adapterClient[methodName] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                return connection.send.apply(connection, adapter_client_spread([methodName], params));
            };
        }
        if (methodType === STREAM) {
            adapterClient[methodName] = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i] = arguments[_i];
                }
                return connection.stream.apply(connection, adapter_client_spread([methodName], params));
            };
        }
    });
    // all methods needed for `AdapterClient` were added
    return adapterClient;
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_proxy.ts
var adapter_proxy_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var adapter_proxy_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(adapter_proxy_read(arguments[i]));
    return ar;
};



/** create a Proxy for an Adapter Client.
 *
 * An Adapter Proxy is useful, if the desired Adapter Client instance
 * changes over time. The Proxy Adapter will route all communication
 * to the 'current' Adapter Client instance.
 *
 * The passed-in callback (`currentClient`) determines which client is
 * considered 'current'. The callback must be observable.
 *
 * The proxy is returned as an AdapterConnection,
 * that can be wrapped in an AdapterClient, for easier usage.
 */
function createAdapterProxy(currentClient) {
    return {
        stream: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            return observeAndLoad(function () {
                var client = currentClient();
                if (!client) {
                    return;
                }
                var method = client[methodName];
                return { valueFromClient: method.call.apply(method, adapter_proxy_spread([client], params)) };
            })
                .filter(function (observed) { return observed.allDataLoaded; })
                .map(function (observed) { return observed.result; })
                .filter(isPresent)
                .map(function (result) { return result.valueFromClient; });
        },
        send: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            var promise = new ScrivitoPromise(function (resolve) {
                waitFor(currentClient).then(function (client) {
                    var method = client[methodName];
                    resolve(method.call.apply(method, adapter_proxy_spread([client], params)));
                });
            });
            // Promise<T> is assignable to Promisify<T>, but TS does not infer that
            return promise;
        },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_connection.ts
var adapter_connection_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var adapter_connection_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(adapter_connection_read(arguments[i]));
    return ar;
};



/** create a connection to the given adapter */
function createAdapterConnection(description, adapter) {
    return {
        stream: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            // since MethodName is GetMethods or StreamMethods, method is Method
            var method = adapter[methodName];
            var methodType = description[methodName];
            if (methodType === GET) {
                return observeAndLoad(function () { return method.call.apply(method, adapter_connection_spread([adapter], params)); })
                    .filter(function (observed) { return observed.allDataLoaded; })
                    .map(function (observed) { return observed.result; });
            }
            if (methodType === STREAM) {
                var result = method.call.apply(method, adapter_connection_spread([adapter], params));
                // a STREAM method always returns a stream :-)
                return result;
            }
            throw new InternalError("unexpected method type " + methodType);
        },
        send: function (methodName) {
            var params = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                params[_i - 1] = arguments[_i];
            }
            // since MethodName is SendMethods, method is Method
            var method = adapter[methodName];
            var promise = new ScrivitoPromise(function (resolve) {
                nextTick(function () { return resolve(method.call.apply(method, adapter_connection_spread([adapter], params))); });
            });
            // Promise<T> is assignable to Promisify<T>, but TS does not infer that
            return promise;
        },
    };
}

// EXTERNAL MODULE: ./scrivito_sdk/bridge/message_link.ts
var message_link = __webpack_require__(9);

// CONCATENATED MODULE: ./scrivito_sdk/bridge/link_via_port.ts

function linkViaPort(messagePort) {
    return {
        incomingMessages: new streamable_Streamable(function (subscriber) {
            function listener(event) {
                subscriber.next({ data: event.data });
            }
            messagePort.addEventListener('message', listener);
            messagePort.start();
            return function () {
                messagePort.removeEventListener('message', listener);
            };
        }),
        sendMessage: function (message) {
            if (message.transfer === undefined) {
                messagePort.postMessage(message.data);
            }
            else {
                messagePort.postMessage(message.data, message.transfer);
            }
        },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/post_message_link.ts
var post_message_link_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var post_message_link_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(post_message_link_read(arguments[i]));
    return ar;
};

/** Get a Link for receiving and sending messages via the message events of
 * the given window.
 *
 * Note: The link forwards _all_ events, without filtering.
 * Checking for a secure origin is the responsiblity of the caller!
 */
function postMessageLinkFor(theWindow) {
    return {
        incomingMessages: new streamable_Streamable(function (subscriber) {
            function listener(event) {
                subscriber.next({
                    remoteOrigin: event.origin,
                    // when receiving MessageEvent on a window, the source is also a window.
                    remoteWindow: event.source,
                    data: event.data,
                    ports: event.ports,
                });
            }
            theWindow.addEventListener('message', listener);
            return function () {
                theWindow.removeEventListener('message', listener);
            };
        }),
        sendMessage: function (message) {
            message.remoteWindow.postMessage(message.data, message.remoteOrigin, post_message_link_spread((message.ports || [])));
        },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/stream_demux.ts

var stream_demux_StreamDemux = /** @class */ (function () {
    function StreamDemux(muxedStream) {
        this.muxedStream = muxedStream;
        this.openStreams = {};
    }
    StreamDemux.prototype.streamWithId = function (streamId) {
        var _this = this;
        return new streamable_Streamable(function (subscriber) {
            _this.ensureSubscribed();
            var streamSubject = _this.subjectForStreamId(streamId);
            var subscription = streamSubject.subscribe(subscriber);
            return function () {
                subscription.unsubscribe();
                _this.removeSubjectIfAbandoned(streamId);
            };
        });
    };
    StreamDemux.prototype.removeSubjectIfAbandoned = function (streamId) {
        var streamSubject = this.subjectForStreamId(streamId);
        if (streamSubject.subscriberCount() === 0) {
            delete this.openStreams[streamId];
            this.unsubscribeIfAbandoned();
        }
    };
    StreamDemux.prototype.subjectForStreamId = function (streamId) {
        var existingStream = this.openStreams[streamId];
        if (existingStream) {
            return existingStream;
        }
        var newStream = new Subject();
        this.openStreams[streamId] = newStream;
        return newStream;
    };
    StreamDemux.prototype.ensureSubscribed = function () {
        var _this = this;
        if (this.subscription)
            return;
        this.subscription = this.muxedStream.subscribe({
            next: function (message) {
                var streamId = message.streamId;
                var streamSubject = _this.openStreams[streamId];
                if (streamSubject)
                    streamSubject.next(message.data);
            },
            complete: function () {
                return Object.keys(_this.openStreams).forEach(function (id) {
                    var streamSubject = _this.openStreams[id];
                    if (streamSubject) {
                        streamSubject.complete();
                        delete _this.openStreams[id];
                    }
                });
            },
        });
    };
    StreamDemux.prototype.unsubscribeIfAbandoned = function () {
        if (Object.keys(this.openStreams).length === 0 && this.subscription) {
            this.subscription.unsubscribe();
            this.subscription = undefined;
        }
    };
    return StreamDemux;
}());


// CONCATENATED MODULE: ./scrivito_sdk/bridge/messages.ts
function isAdapterMessage(data) {
    return (data &&
        typeof data.channel === 'number' &&
        typeof data.verb === 'string');
}
function isInvocationMessage(message) {
    return (typeof message.method === 'string' &&
        Array.isArray(message.params));
}
function isSendMessage(message) {
    return message.verb === 'SEND' && isInvocationMessage(message);
}
function isOpenStreamMessage(message) {
    return message.verb === 'OPEN' && isInvocationMessage(message);
}
function isCloseStreamMessage(message) {
    return message.verb === 'CLOSE';
}
function isResponseMessage(message) {
    return (message.verb === 'RESPOND' &&
        typeof message.sequence === 'number');
}
function isErrorMessage(message) {
    return message.verb === 'ERROR';
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_message_client.ts
var adapter_message_client_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



function createAdapterMessageClient(portLink) {
    return new adapter_message_client_AdapterMessageClient(portLink);
}
var adapter_message_client_AdapterMessageClient = /** @class */ (function () {
    function AdapterMessageClient(portLink) {
        this.portLink = portLink;
        /** a counter used to generate channel ids */
        this.channelCounter = 1;
        this.incomingChannels = new stream_demux_StreamDemux(this.portLink.incomingMessages
            .map(function (message) { return message.data; })
            .filter(isAdapterMessage)
            .map(function (message) { return ({
            streamId: message.channel,
            data: message,
        }); }));
    }
    AdapterMessageClient.prototype.stream = function (methodName) {
        var _this = this;
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        return new streamable_Streamable(function (subscriber) {
            var channel = _this.getNextChannelId();
            _this.postMessage({
                channel: channel,
                verb: 'OPEN',
                method: methodName,
                params: params,
            });
            var processedSequence;
            var subscription = _this.incomingChannels
                .streamWithId(channel)
                .subscribe(function (message) {
                if (isResponseMessage(message)) {
                    if (processedSequence !== undefined &&
                        message.sequence <= processedSequence) {
                        return;
                    }
                    // we trust the remote side to respond with the correct type
                    subscriber.next(message.data);
                    processedSequence = message.sequence;
                }
            });
            return function () {
                _this.postMessage({
                    channel: channel,
                    verb: 'CLOSE',
                });
                subscription.unsubscribe();
            };
        });
    };
    AdapterMessageClient.prototype.send = function (methodName) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var channel = this.getNextChannelId();
        this.postMessage({
            channel: channel,
            verb: 'SEND',
            method: methodName,
            params: params,
        });
        var resultPromise = this.incomingChannels
            .streamWithId(channel)
            .filter(isSendReply)
            .waitForFirst()
            .then(function (message) {
            if (isErrorMessage(message))
                throw new RemoteAdapterError();
            // we trust the remote side to respond with the correct type
            return message.data;
        });
        // Promise<T> is assignable to Promisify<T>, but TS does not infer that
        return resultPromise;
    };
    AdapterMessageClient.prototype.postMessage = function (message) {
        this.portLink.sendMessage({
            data: message,
            transfer: portsToTransfer(message),
        });
    };
    AdapterMessageClient.prototype.getNextChannelId = function () {
        return this.channelCounter++;
    };
    return AdapterMessageClient;
}());
var RemoteAdapterError = /** @class */ (function (_super) {
    adapter_message_client_extends(RemoteAdapterError, _super);
    function RemoteAdapterError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RemoteAdapterError;
}(ScrivitoError));

function portsToTransfer(message) {
    if (message.verb === 'SEND') {
        return message.params.filter(isMessagePort);
    }
}
function isMessagePort(maybePort) {
    return maybePort instanceof MessagePort;
}
function isSendReply(message) {
    return isResponseMessage(message) || isErrorMessage(message);
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_invocation.ts
/** checks if the given invocation has the correct type for the adapter */
function isMatchingAdapterInvocation(description, expectedMethodDescription, invocation) {
    var actualMethodDescription = description[invocation.methodName];
    // Currently, we only check that the method exists and has a matching
    // description (GET vs. SEND).
    // We trust the remote site to provide correctly typed params.
    return actualMethodDescription === expectedMethodDescription;
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/adapter_message_server.ts
var adapter_message_server_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var adapter_message_server_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(adapter_message_server_read(arguments[i]));
    return ar;
};






function startAdapterMessageServer(portLink, adapterConnection, description) {
    var server = new adapter_message_server_AdapterMessageServer(portLink, adapterConnection, description);
    server.start();
}
var adapter_message_server_AdapterMessageServer = /** @class */ (function () {
    function AdapterMessageServer(portLink, adapterConnection, description) {
        this.portLink = portLink;
        this.adapterConnection = adapterConnection;
        this.description = description;
        this.incomingMessages = portLink.incomingMessages
            .map(function (message) { return message.data; })
            .filter(isAdapterMessage);
        this.incomingChannels = new stream_demux_StreamDemux(this.incomingMessages.map(function (message) { return ({
            streamId: message.channel,
            data: message,
        }); }));
    }
    AdapterMessageServer.prototype.start = function () {
        var _this = this;
        this.incomingMessages.subscribe(function (message) {
            if (isOpenStreamMessage(message)) {
                _this.handleOpenStreamMessage(message);
            }
            else if (isSendMessage(message)) {
                _this.handleSendMessage(message);
            }
        });
    };
    AdapterMessageServer.prototype.handleOpenStreamMessage = function (message) {
        var _this = this;
        var invocation = invocationFrom(message);
        var adapterStream = this.adapterStreamForInvocation(invocation);
        if (!adapterStream)
            return;
        var channel = message.channel;
        var sequence = 1;
        var subscription = adapterStream.subscribe(function (data) {
            _this.postMessage({
                verb: 'RESPOND',
                data: data,
                channel: channel,
                sequence: sequence,
            });
            sequence++;
        });
        this.incomingChannels
            .streamWithId(channel)
            .filter(isCloseStreamMessage)
            .waitForFirst()
            .then(function () { return subscription.unsubscribe(); })
            .catch(function (error) {
            subscription.unsubscribe();
            if (error instanceof EndOfStreamError) {
                // link to client was closed (e.g. due to window reload)
                return;
            }
            throw error;
        });
    };
    AdapterMessageServer.prototype.adapterStreamForInvocation = function (invocation) {
        var _a, _b;
        if (isMatchingAdapterInvocation(this.description, GET, invocation)) {
            return (_a = this.adapterConnection).stream.apply(_a, adapter_message_server_spread([invocation.methodName], invocation.params));
        }
        if (isMatchingAdapterInvocation(this.description, STREAM, invocation)) {
            return (_b = this.adapterConnection).stream.apply(_b, adapter_message_server_spread([invocation.methodName], invocation.params));
        }
    };
    AdapterMessageServer.prototype.handleSendMessage = function (message) {
        var _a;
        var _this = this;
        var invocation = invocationFrom(message);
        if (!isMatchingAdapterInvocation(this.description, SEND, invocation)) {
            return;
        }
        (_a = this.adapterConnection).send.apply(_a, adapter_message_server_spread([invocation.methodName], invocation.params)).then(function (data) {
            return _this.postMessage({
                verb: 'RESPOND',
                data: data,
                channel: message.channel,
                sequence: 1,
            });
        }, function (error) {
            _this.postMessage({
                verb: 'ERROR',
                channel: message.channel,
            });
            throwNextTick(error);
        });
    };
    AdapterMessageServer.prototype.postMessage = function (message) {
        this.portLink.sendMessage({ data: message });
    };
    return AdapterMessageServer;
}());
function invocationFrom(message) {
    return {
        methodName: message.method,
        params: message.params,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/anticipated_message_link.ts

/** Convert a Promise to a MessageLink into the promised MessageLink. */
function anticipatedMessageLink(linkPromise) {
    return {
        incomingMessages: anticipatedStream(linkPromise.then(function (link) { return link.incomingMessages; })),
        sendMessage: function (message) { return linkPromise.then(function (link) { return link.sendMessage(message); }); },
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/connect_client.ts

/** Contact a UI window via message,
 * to retrieve a MessagePort for further communication.
 */
function connectTo(uiWindow, eventLink) {
    var requestId = randomId();
    eventLink.sendMessage({
        remoteWindow: uiWindow,
        remoteOrigin: '*',
        data: {
            type: 'ScrivitoConnectRequest',
            requestId: requestId,
            clientVersion: getScrivitoVersion(),
        },
    });
    return eventLink.incomingMessages
        .filter(function (event) { return event.remoteWindow === uiWindow; })
        .map(function (event) {
        var data = event.data;
        if (isConnectResponseMessage(data) &&
            data.requestId === requestId &&
            event.ports &&
            event.ports.length > 0) {
            return {
                port: event.ports[0],
                origin: event.remoteOrigin,
            };
        }
    })
        .filter(isPresent)
        .waitForFirst();
}
function isConnectResponseMessage(data) {
    return (data && data.type === 'ScrivitoConnectResponse');
}

// CONCATENATED MODULE: ./scrivito_sdk/bridge/index.ts












// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_adapter_interface.ts

var uiAdapterDescription = {
    canWrite: GET,
    currentWorkspaceId: GET,
    getContentStateId: GET,
    isInPlaceEditingActive: GET,
    isComparisonActive: GET,
    translate: GET,
    // LinkHandler methods
    startLinkResolutionFor: SEND,
    finishLinkResolutionFor: SEND,
    // CmsRetrieval methods
    retrieveObjQuery: SEND,
    retrieveFacetQuery: SEND,
    retrieveBinaryMetadata: SEND,
    retrieveBinaryUrls: SEND,
    retrieveObjFieldDiffs: SEND,
    // BinaryHandler methods
    copyBinary: SEND,
    uploadBinary: SEND,
    // ObjStreamReplicationEndpoint methods
    objReplicationMessageStream: STREAM,
    finishSavingObj: SEND,
    finishReplicatingObj: SEND,
    insertWidget: SEND,
    navigateToExternalUrl: SEND,
    openInNewUiWindow: SEND,
    configureContentBrowser: SEND,
    openContentBrowser: SEND,
    updateMenu: SEND,
    openCustomDialog: SEND,
    setAppAdapter: SEND,
    configureTenant: SEND,
    showWidgetMenu: SEND,
    showWidgetlistMenu: SEND,
    showChildListMenu: SEND,
    registerEmptyWidgetlistDropZoneInDom: SEND,
    registerWidgetDropZoneInDom: SEND,
    startDrag: SEND,
    endDrag: SEND,
    dragTo: SEND,
    drop: SEND,
};

// CONCATENATED MODULE: ./scrivito_sdk/app_support/establish_ui_connection.ts




function establishUiConnection(uiWindow) {
    var promiseForMessagePort = connectTo(uiWindow, postMessageLinkFor(window)).then(function (_a) {
        var port = _a.port, origin = _a.origin;
        if (!isTrustedUiOrigin(origin)) {
            throw new ScrivitoError("Refusing to connect to Scrivito UI at unknown origin " + origin + ".");
        }
        return port;
    });
    return createAdapterClient(uiAdapterDescription, createAdapterMessageClient(anticipatedMessageLink(promiseForMessagePort.then(linkViaPort))));
}

// EXTERNAL MODULE: ./scrivito_sdk/models/type_info.ts
var type_info = __webpack_require__(3);

// EXTERNAL MODULE: ./scrivito_sdk/models/basic_attribute_types.ts
var basic_attribute_types = __webpack_require__(4);

// EXTERNAL MODULE: external "speakingurl"
var external_speakingurl_ = __webpack_require__(13);

// CONCATENATED MODULE: ./scrivito_sdk/models/convert_to_slug.ts

function convertToSlug(input) {
    if (typeof input !== 'string') {
        return '';
    }
    return external_speakingurl_(input);
}

// CONCATENATED MODULE: ./scrivito_sdk/models/parse_query.ts

function parseQuery(query) {
    // @types/urijs declares return value to be `Object` - unusable
    return external_urijs_["parseQuery"](query);
}
function queryParametersFromUrl(url) {
    var uri = new external_urijs_(url);
    return uri.query(true);
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_link.ts
var basic_link_assign = (undefined && undefined.__assign) || function () {
    basic_link_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_link_assign.apply(this, arguments);
};



var basic_link_BasicLink = /** @class */ (function () {
    function BasicLink(attributes) {
        this.attributes = basic_link_assign({}, attributes);
    }
    BasicLink.prototype.title = function () {
        return this.attributes.title || null;
    };
    BasicLink.prototype.query = function () {
        return this.attributes.query || null;
    };
    BasicLink.prototype.hash = function () {
        return this.attributes.hash || null;
    };
    BasicLink.prototype.rel = function () {
        return this.attributes.rel || null;
    };
    BasicLink.prototype.target = function () {
        return this.attributes.target || null;
    };
    BasicLink.prototype.url = function () {
        return this.attributes.url || null;
    };
    BasicLink.prototype.objId = function () {
        return this.attributes.objId || null;
    };
    BasicLink.prototype.obj = function () {
        var objId = this.objId();
        if (!objId) {
            return null;
        }
        return basic_obj.get(objId);
    };
    BasicLink.prototype.queryParameters = function () {
        return parseQuery(this.query() || '');
    };
    BasicLink.prototype.isExternal = function () {
        return !!this.url();
    };
    BasicLink.prototype.isInternal = function () {
        return !this.isExternal();
    };
    BasicLink.prototype.equals = function (otherLink) {
        if (!(otherLink instanceof BasicLink)) {
            return false;
        }
        if (this.isExternal()) {
            return (this.hash() === otherLink.hash() &&
                this.query() === otherLink.query() &&
                this.rel() === otherLink.rel() &&
                this.target() === otherLink.target() &&
                this.title() === otherLink.title() &&
                this.url() === otherLink.url());
        }
        return (this.objId() === otherLink.objId() && this.title() === otherLink.title());
    };
    BasicLink.prototype.copy = function (attributes) {
        if (attributes === void 0) { attributes = {}; }
        var newAttributes = basic_link_assign(basic_link_assign({}, this.attributes), attributes);
        if (attributes.objId && attributes.url) {
            throw new ArgumentError('Link#copy refused: both "objId" and "url" have been' +
                ' specified with truthy values');
        }
        if (attributes.objId) {
            newAttributes.url = null;
        }
        else if (attributes.url) {
            newAttributes.objId = null;
        }
        return new BasicLink(newAttributes);
    };
    BasicLink.prototype.isEmpty = function () {
        return !this.isExternal() && !this.objId();
    };
    BasicLink.prototype.isBroken = function () {
        if (this.isExternal()) {
            return false;
        }
        return !this.obj();
    };
    BasicLink.prototype.toPrettyPrint = function () {
        if (this.isInternal()) {
            return "[object Link objId=\"" + this.objId() + "\"]";
        }
        return "[object Link url=\"" + this.url() + "\"]";
    };
    return BasicLink;
}());
/* harmony default export */ var basic_link = (basic_link_BasicLink);

// CONCATENATED MODULE: ./scrivito_sdk/models/model_types.ts






var ObjType = external_tcomb_validation_.irreducible('Obj', function (maybeObj) {
    return isWrapping(maybeObj, basic_obj);
});
var WidgetType = external_tcomb_validation_.irreducible('Widget', function (maybeWidget) {
    return isWrapping(maybeWidget, basic_widget);
});
var LinkType = external_tcomb_validation_.irreducible('Link', function (maybeLink) {
    return isWrapping(maybeLink, basic_link);
});
var ObjSearchType = external_tcomb_validation_.irreducible('ObjSearch', function (maybeSearch) { return isWrapping(maybeSearch, basic_obj_search); });
var BinaryType = external_tcomb_validation_.irreducible('Binary', function (maybeBinary) { return maybeBinary instanceof models_binary; });
function isWrapping(maybeWrapped, basicClass) {
    if (!maybeWrapped) {
        return false;
    }
    return (maybeWrapped
        ._scrivitoPrivateContent instanceof basicClass);
}

// CONCATENATED MODULE: ./scrivito_sdk/models/future_binary.ts
var future_binary_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var future_binary_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(future_binary_read(arguments[i]));
    return ar;
};




var binaryHandler;
function setBinaryHandler(handler) {
    binaryHandler = handler;
}
var future_binary_FutureBinary = /** @class */ (function () {
    function FutureBinary(sourceSpec, options) {
        if (options === void 0) { options = {}; }
        var filename = options.filename;
        this.contentType = options.contentType;
        if (isIdToCopySource(sourceSpec)) {
            this.idToCopy = sourceSpec.idToCopy;
        }
        else {
            var source = sourceSpec.source;
            this.source = source;
            if (!this.contentType) {
                this.contentType = source.type;
            }
            if (!filename) {
                filename = source.name;
            }
        }
        if (filename) {
            this.filename = filename.replace(/[^\w\-_\.$]/g, '-');
        }
    }
    // public API
    FutureBinary.prototype.into = function (target) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkInto.apply(void 0, future_binary_spread([target], excessArgs));
        failIfFrozen('Changing CMS content');
        return this.intoId(target._scrivitoPrivateContent.id());
    };
    FutureBinary.prototype.intoId = function (targetId) {
        if (!binaryHandler) {
            throw new InternalError('No binaryHandler defined!');
        }
        var binaryPromise;
        if (this.idToCopy) {
            binaryPromise = binaryHandler.copyBinary(this.idToCopy, targetId, this.filename, this.contentType);
        }
        else {
            if (!this.source) {
                throw new InternalError('Source is not defined!');
            }
            binaryPromise = binaryHandler.uploadBinary(targetId, this.source, this.filename, this.contentType);
        }
        return binaryPromise.then(function (_a) {
            var id = _a.id;
            return new models_binary(id, false);
        });
    };
    return FutureBinary;
}());
var checkInto = checkArgumentsFor('FutureBinary#into', [['target', ObjType]], {
    docPermalink: 'js-sdk/FutureBinary-into',
});
function isIdToCopySource(toCheck) {
    return !!toCheck.idToCopy;
}
/* harmony default export */ var future_binary = (future_binary_FutureBinary);

// CONCATENATED MODULE: ./scrivito_sdk/client/auth_failure_counter.ts
var FRAGMENT_VALUE_LOCATOR = '&scrivito.authFailedCount=';
var failureCount;
function init(addressWindow) {
    auth_failure_counter_reset();
    var location = addressWindow.location;
    var fragment = location.hash;
    var offset = fragment.indexOf(FRAGMENT_VALUE_LOCATOR);
    if (offset < 0) {
        return;
    }
    var countAsString = fragment.substr(offset + FRAGMENT_VALUE_LOCATOR.length, 3);
    var remainingFragment = fragment.substring(0, offset);
    if (remainingFragment === '#') {
        remainingFragment = '';
    }
    var newLocation = location.href
        .toString()
        .replace(fragment, remainingFragment);
    failureCount = parseInt(countAsString, 10) || 0;
    addressWindow.history.replaceState({}, '', newLocation);
}
function auth_failure_counter_reset() {
    failureCount = 0;
}
function augmentedRedirectUrl(currentLocation) {
    var returnTo = currentLocation.toString();
    if (!currentLocation.hash) {
        returnTo = returnTo + "#";
    }
    return "" + returnTo + FRAGMENT_VALUE_LOCATOR + (failureCount + 1);
}
function currentFailureCount() {
    return failureCount;
}
/* harmony default export */ var auth_failure_counter = ({
    init: init,
    augmentedRedirectUrl: augmentedRedirectUrl,
    reset: auth_failure_counter_reset,
    currentFailureCount: currentFailureCount,
});

// CONCATENATED MODULE: ./scrivito_sdk/client/errors.ts
var errors_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var TRANSFORM_SOURCE_ERROR_PREFIX = 'binary.unprocessable.image.transform.source.';
var TRANSFORM_SOURCE_TOO_LARGE = 'binary.unprocessable.image.transform.source.too_large';
var ClientError = /** @class */ (function (_super) {
    errors_extends(ClientError, _super);
    function ClientError(message, httpCode, backendCode) {
        var _this = _super.call(this, message) || this;
        _this.httpCode = httpCode;
        _this.backendCode = backendCode;
        return _this;
    }
    ClientError.for = function (message, httpCode, backendCode) {
        if (backendCode === TRANSFORM_SOURCE_TOO_LARGE) {
            return new TransformationSourceTooLargeError(message, httpCode, backendCode);
        }
        if (backendCode &&
            backendCode.indexOf(TRANSFORM_SOURCE_ERROR_PREFIX) !== -1) {
            return new TransformationSourceInvalidError(message, httpCode, backendCode);
        }
        return new ClientError(message, httpCode, backendCode);
    };
    return ClientError;
}(ScrivitoError));

var AccessDeniedError = /** @class */ (function (_super) {
    errors_extends(AccessDeniedError, _super);
    function AccessDeniedError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return AccessDeniedError;
}(ClientError));

var MissingAuthError = /** @class */ (function (_super) {
    errors_extends(MissingAuthError, _super);
    function MissingAuthError(target) {
        var _this = _super.call(this, "Insufficient authorization - please visit " + target) || this;
        _this.target = target;
        return _this;
    }
    return MissingAuthError;
}(ScrivitoError));

var RequestFailedError = /** @class */ (function (_super) {
    errors_extends(RequestFailedError, _super);
    function RequestFailedError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return RequestFailedError;
}(ScrivitoError));

var UnauthorizedError = /** @class */ (function (_super) {
    errors_extends(UnauthorizedError, _super);
    function UnauthorizedError(message, httpCode, backendCode, details) {
        var _this = _super.call(this, message, httpCode, backendCode) || this;
        _this.details = details || {};
        return _this;
    }
    return UnauthorizedError;
}(ClientError));

var TransformationSourceTooLargeError = /** @class */ (function (_super) {
    errors_extends(TransformationSourceTooLargeError, _super);
    function TransformationSourceTooLargeError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return TransformationSourceTooLargeError;
}(ClientError));

var TransformationSourceInvalidError = /** @class */ (function (_super) {
    errors_extends(TransformationSourceInvalidError, _super);
    function TransformationSourceInvalidError(message, httpCode, backendCode) {
        return _super.call(this, message, httpCode, backendCode) || this;
    }
    return TransformationSourceInvalidError;
}(ClientError));


// CONCATENATED MODULE: ./scrivito_sdk/client/fetch.ts



var isDisabled = false;
var connectionCounter = 0;
// For test purpose only
function isFetchingActive() {
    return connectionCounter > 0;
}
// For test purpose only
function disableFetching() {
    isDisabled = true;
}
// For test purpose only
function enableFetching() {
    isDisabled = false;
}
function fetch(method, url, _a) {
    var params = _a.params, authorization = _a.authorization, forceVerification = _a.forceVerification;
    if (isDisabled) {
        return ScrivitoPromise.resolve(new XMLHttpRequest());
    }
    connectionCounter += 1;
    return new ScrivitoPromise(function (resolve, reject) {
        var request = createRequestObj(method, url, resolve, reject);
        if (authorization) {
            request.setRequestHeader('Authorization', authorization);
        }
        request.setRequestHeader('Scrivito-Client', "jssdk/" + getScrivitoVersion());
        if (forceVerification) {
            request.setRequestHeader('Scrivito-Force-Verification', 'true');
        }
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.send(JSON.stringify(params));
    });
}
function createRequestObj(method, url, resolve, reject) {
    var request = new XMLHttpRequest();
    request.open(method === 'POST' ? 'POST' : 'PUT', url);
    request.timeout = 15000;
    request.withCredentials = true;
    request.onload = function () { return onAjaxLoad(request, resolve, reject); };
    function handleError(message) {
        onAjaxError(new RequestFailedError(message), reject);
    }
    request.onerror = function () { return handleError('XMLHttpRequest Error'); };
    request.ontimeout = function () { return handleError('XMLHttpRequest Timeout'); };
    request.onabort = function () { return handleError('XMLHttpRequest Aborted'); };
    return request;
}
function onAjaxLoad(request, resolve, reject) {
    connectionCounter -= 1;
    var status = request.status;
    if (!status || !Object(external_underscore_["isNumber"])(status)) {
        var message = "Unexpected response status: " + status + ";" +
            (" body: " + (status === 0 ? request.statusText : request.responseText));
        reject(new RequestFailedError(message));
    }
    resolve(request);
}
function onAjaxError(error, reject) {
    connectionCounter -= 1;
    reject(error);
}

// CONCATENATED MODULE: ./scrivito_sdk/client/verificator_functions.js

var verificator_functions_registry;
function verificator_functions_reset() {
    verificator_functions_registry = {};
}
function verificator_functions_fetch(verificatorId, verificatorUrl) {
    var deferred = verificator_functions_registry[verificatorId];
    if (!deferred) {
        deferred = new common_deferred();
        verificator_functions_registry[verificatorId] = deferred;
        loadJs(verificatorUrl);
    }
    return deferred.promise;
}
verificator_functions_reset();
window._scrivitoRegisterVerificator = function (verificatorId, verificatorFunction) {
    verificator_functions_registry[verificatorId].resolve(verificatorFunction);
};

// CONCATENATED MODULE: ./scrivito_sdk/client/public_authentication.ts
var public_authentication_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ERROR_CODE_CLIENT_VERIFICATION_REQUIRED = 'client_verification_required';
var VerificationRequiredError = /** @class */ (function (_super) {
    public_authentication_extends(VerificationRequiredError, _super);
    function VerificationRequiredError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VerificationRequiredError;
}(UnauthorizedError));
var computation;
var verification;
function perform(sendRequest) {
    function handleError(error) {
        if (!isVerificationRequiredError(error)) {
            throw error;
        }
        return computeVerification(error.details)
            .then(sendRequest)
            .catch(handleError);
    }
    return sendRequest(currentAuthorization()).catch(handleError);
}
function computeVerification(challenge) {
    if (!computation) {
        // note that further request's challenges are ignored (intentionally)
        var verificator = challenge.verificator, data_1 = challenge.data;
        var promise = verificator_functions_fetch(verificator.id, verificator.url).then(function (compute) {
            return new ScrivitoPromise(function (resolve) {
                function captureVerification(computedVerification) {
                    verification = computedVerification;
                    resolve(verification.authorization);
                }
                compute(data_1, captureVerification);
            });
        });
        computation = {
            challenge: { verificator: verificator, data: data_1 },
            promise: promiseAndFinally(promise, function () {
                computation = undefined;
            }),
        };
    }
    return computation.promise;
}
function public_authentication_reset() {
    computation = undefined;
    verification = undefined;
}
function currentAuthorization() {
    if (!verification) {
        return;
    }
    if (verification.expiresAfter < new Date()) {
        verification = undefined;
        return;
    }
    return verification.authorization;
}
function isVerificationRequiredError(error) {
    return (error instanceof UnauthorizedError &&
        error.backendCode === ERROR_CODE_CLIENT_VERIFICATION_REQUIRED);
}
// integration test support
function public_authentication_currentState() {
    var authorization = currentAuthorization();
    if (authorization) {
        return "Authorization: " + authorization;
    }
    if (computation) {
        var challenge = computation.challenge;
        return "Pending computation: " + challenge.verificator.id + " with " + challenge.data;
    }
    return null;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/window_proxy.ts
function devicePixelRatio(windowObject) {
    if (windowObject === void 0) { windowObject = window; }
    return windowObject.devicePixelRatio || 1;
}
function window_proxy_location() {
    return window.location;
}
function window_proxy_navigator() {
    return window.navigator;
}
function redirectTo(newLocation) {
    window.location.assign(newLocation);
}
function window_proxy_history() {
    return window.history;
}
function screen() {
    return window.screen;
}
function getDocument() {
    return document;
}
function proxiedWindow() {
    return window;
}
function window_proxy_innerHeight() {
    return window.innerHeight;
}
function window_proxy_pageXOffset() {
    return window.pageXOffset;
}
function window_proxy_pageYOffset() {
    return window.pageYOffset;
}
function scrollTo(x, y) {
    window.scrollTo(x, y);
}
function getScrollHeight() {
    return window.document.body.scrollHeight;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/cms_rest_api.ts
var cms_rest_api_assign = (undefined && undefined.__assign) || function () {
    cms_rest_api_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return cms_rest_api_assign.apply(this, arguments);
};








var limitedRetries;
var retriesAreDisabled;
var cms_rest_api_CmsRestApi = /** @class */ (function () {
    function CmsRestApi() {
        this.initDeferred = new common_deferred();
        this.authHeaderValueProvider = public_authentication_namespaceObject;
    }
    CmsRestApi.prototype.init = function (endpoint, tenant, authorizationProvider) {
        if (tenant) {
            this.tenant = tenant;
            this.endpoint = endpoint;
            this.url = external_urijs_(endpoint + "/tenants/" + tenant + "/perform")
                .scheme('https')
                .toString();
            this.initDeferred.resolve();
        }
        if (authorizationProvider) {
            this.authHeaderValueProvider = authorizationProvider;
        }
    };
    CmsRestApi.prototype.get = function (path, requestParams) {
        return this.perform('GET', path, requestParams);
    };
    CmsRestApi.prototype.put = function (path, requestParams) {
        return this.perform('PUT', path, requestParams);
    };
    CmsRestApi.prototype.post = function (path, requestParams) {
        return this.perform('POST', path, requestParams);
    };
    CmsRestApi.prototype.delete = function (path, requestParams) {
        return this.perform('DELETE', path, requestParams);
    };
    CmsRestApi.prototype.requestBuiltInUserSession = function (sessionId) {
        var _this = this;
        return this.ensureInitialized()
            .then(function () { return _this.ajax('PUT', "sessions/" + sessionId); })
            .then(function (response) {
            auth_failure_counter.reset();
            return response;
        });
    };
    CmsRestApi.prototype.requestVisitorSession = function (sessionId, token) {
        var _this = this;
        return this.ensureInitialized().then(function () {
            return _this.ajax('PUT', "sessions/" + sessionId, undefined, "id_token " + token);
        });
    };
    // For test purpose only.
    CmsRestApi.prototype.enableForceVerification = function () {
        this.forceVerification = true;
    };
    // For test purpose only.
    CmsRestApi.prototype.currentPublicAuthorizationState = function () {
        if (this.authHeaderValueProvider) {
            if (this.authHeaderValueProvider.currentState) {
                return "[API] " + this.authHeaderValueProvider.currentState();
            }
            return '[API]: authorization provider without currentState()';
        }
        return '[API]: no authorization provider';
    };
    CmsRestApi.prototype.ensureInitialized = function () {
        return this.initDeferred.promise;
    };
    CmsRestApi.prototype.perform = function (method, path, requestParams) {
        var _this = this;
        return this.ensureInitialized().then(function () {
            return _this.send(method, path, requestParams).then(function (result) {
                if (isTask(result)) {
                    return _this.handleTask(result.task);
                }
                return result;
            });
        });
    };
    CmsRestApi.prototype.send = function (method, path, requestParams) {
        var _this = this;
        return this.authHeaderValueProvider.perform(function (authorization) {
            return _this.ajax(method, path, requestParams, authorization);
        });
    };
    CmsRestApi.prototype.ajax = function (method, path, requestParams, authorization) {
        var url = this.url;
        var forceVerification = this.forceVerification;
        var params = {
            path: path,
            verb: method,
            params: requestParams || {},
        };
        var options = { params: params, authorization: authorization, forceVerification: forceVerification };
        function performRequest() {
            return retryOnRateLimit(function () { return fetch(method, url, options); }).then(handleAjaxResponse);
        }
        if (method === 'POST') {
            return performRequest();
        }
        return retryOnError(performRequest);
    };
    CmsRestApi.prototype.handleTask = function (task) {
        var _this = this;
        switch (task.status) {
            case 'success':
                return task.result;
            case 'error':
                throw ClientError.for(task.message, 412, task.code);
            case 'exception':
                throw new RequestFailedError(task.message);
            case 'open':
                return wait(2).then(function () {
                    return _this.get("tasks/" + task.id).then(function (result) {
                        return _this.handleTask(result);
                    });
                });
            default:
                throw new RequestFailedError('Invalid task response (unknown status)');
        }
    };
    return CmsRestApi;
}());
function retryOnError(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new ScrivitoPromise(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().catch(function (error) {
        if (error instanceof RequestFailedError) {
            if (limitedRetries && retryCount > 5) {
                throw error;
            }
            var retryDelay = calculateDelay(retryCount);
            return waitMs(retryDelay).then(function () {
                return retryOnError(requestCallback, retryCount + 1);
            });
        }
        throw error;
    });
}
function retryOnRateLimit(requestCallback, retryCount) {
    if (retryCount === void 0) { retryCount = 0; }
    if (retriesAreDisabled) {
        return new ScrivitoPromise(function (resolve) { return resolve(requestCallback()); });
    }
    return requestCallback().then(function (response) {
        if (response.status !== 429) {
            return response;
        }
        // The value for the retry count limit should be high enough to show that the integer overflow
        // protection of the calculated timeout (currently: exponent limited to 16) is working.
        if (limitedRetries && retryCount > 19) {
            throw new Error('Maximum number of rate limit retries reached');
        }
        var retryAfter = Number(response.getResponseHeader('Retry-After')) || 0;
        var retryDelay = Math.max(retryAfter * 1000, calculateDelay(retryCount));
        return waitMs(retryDelay).then(function () {
            return retryOnRateLimit(requestCallback, retryCount + 1);
        });
    });
}
function calculateDelay(retryCount) {
    return Math.pow(2, Math.min(retryCount, 16)) * 500;
}
function handleAjaxResponse(request) {
    var httpStatus = request.status;
    var responseData;
    try {
        responseData = JSON.parse(request.responseText);
    }
    catch (error) {
        throw new RequestFailedError(request.responseText);
    }
    if (httpStatus >= 200 && httpStatus < 300) {
        return responseData;
    }
    var error = errorForResponse(httpStatus, responseData, request.responseText);
    if (error instanceof MissingAuthError) {
        redirectTo(error.target);
    }
    throw error;
}
function errorForResponse(httpStatus, responseData, responseText) {
    if (httpStatus.toString()[0] !== '4') {
        if (httpStatus === 500 && isString(responseData.error)) {
            return new RequestFailedError(responseData.error);
        }
        return new RequestFailedError(responseText);
    }
    var errorData = asErrorJson(responseData);
    if (isAuthMissingErrorJson(errorData)) {
        var target = authenticationUrlFor(errorData.details.visit);
        return new MissingAuthError(target);
    }
    if (httpStatus === 401) {
        return new UnauthorizedError(errorData.error, httpStatus, errorData.code, errorData.details);
    }
    if (httpStatus === 403) {
        var code = errorData.code;
        if (!isString(code)) {
            return new RequestFailedError('Authentication failure response no string value for code');
        }
        return new AccessDeniedError(errorData.error, httpStatus, code);
    }
    return ClientError.for(errorData.error, httpStatus, errorData.code);
}
function authenticationUrlFor(visit) {
    var returnTo = auth_failure_counter.augmentedRedirectUrl(window_proxy_location());
    return visit
        .replace('retry=RETRY', "retry=" + auth_failure_counter.currentFailureCount())
        .replace(/\$RETURN_TO/, encodeURIComponent(returnTo));
}
function isJSONObject(o) {
    return typeof o === 'object' && !Array.isArray(o);
}
function isString(x) {
    return typeof x === 'string';
}
function isTask(result) {
    return !!result && !!result.task && Object(external_underscore_["size"])(result) === 1;
}
function asErrorJson(responseData) {
    var error = responseData.error, code = responseData.code, details = responseData.details;
    if (!isString(error)) {
        throw badErrorJson('key error is not a string');
    }
    if (code !== undefined && !isString(code)) {
        throw badErrorJson('optional key code is not a string');
    }
    if (details !== undefined && !isJSONObject(details)) {
        throw badErrorJson('optional key details is not an object');
    }
    return cms_rest_api_assign(cms_rest_api_assign({}, responseData), { error: error, code: code, details: details });
}
function badErrorJson(reason) {
    return new RequestFailedError("Malformed error response: " + reason);
}
function isAuthMissingErrorJson(data) {
    if (data.code !== 'auth_missing')
        return false;
    var details = data.details;
    return !!details && typeof details.visit === 'string';
}
var cmsRestApi = new cms_rest_api_CmsRestApi();
// For test purpose only.
function resetAndLimitRetries() {
    cms_rest_api_reset();
    limitedRetries = true;
}
// For test purpose only.
function resetAndDisableRetries() {
    cms_rest_api_reset();
    retriesAreDisabled = true;
}
// For test purpose only.
function cms_rest_api_reset() {
    cmsRestApi = new cms_rest_api_CmsRestApi();
    retriesAreDisabled = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/binary_urls_retrieval.ts


var batchRetrieval = new batch_retrieval(function (blobs) {
    return cmsRestApi.get('blobs/mget', { blobs: blobs }).then(function (response) {
        var results = response.results;
        return results.map(function (result, index) {
            return parseBackendResponse(blobs[index].id, result);
        });
    });
});
function retrieveBinaryUrls(binaryId, transformation) {
    var blob = { id: binaryId };
    if (transformation) {
        blob.transformation = transformation;
    }
    return batchRetrieval.retrieve(blob);
}
function parseBackendResponse(binaryId, response) {
    var publicAccessData = response.public_access;
    var getPublicAccessData = publicAccessData.get;
    if (!getPublicAccessData.url) {
        throw new InternalError("Missing public access URL for binary \"" + binaryId + "\"");
    }
    var binaryData = {
        public_access: {
            get: {
                url: getPublicAccessData.url,
            },
        },
    };
    var privateAccessData = response.private_access;
    if (privateAccessData) {
        var getPrivateAccessData = privateAccessData.get;
        if (getPrivateAccessData.url) {
            binaryData.private_access = {
                get: {
                    url: getPrivateAccessData.url,
                },
            };
        }
    }
    return binaryData;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_retrieval.ts


var batchRetrievals = {};
function retrieveObj(workspaceId, id) {
    return getBatchRetrieval(workspaceId).retrieve(id);
}
function getBatchRetrieval(workspaceId) {
    var batchRetrieval = batchRetrievals[workspaceId];
    if (!batchRetrieval) {
        batchRetrieval = buildBatchRetrieval(workspaceId);
        batchRetrievals[workspaceId] = batchRetrieval;
    }
    return batchRetrieval;
}
function buildBatchRetrieval(workspaceId) {
    var mget = function (ids) {
        return cmsRestApi
            .get("workspaces/" + workspaceId + "/objs/mget", {
            ids: ids,
            include_deleted: true,
        })
            .then(function (response) { return response.results; });
    };
    // Question: Why the magic batchSize: 17?
    // Answer: Retrieval of up to 100 Objs is a common use-case (see ObjSearch)
    // With a batchSize of 17, this leads to 6 concurrent requests, which is
    // the concurrent request limit in many browsers for HTTP/1.
    // This ensures maximum parallel loading.
    return new batch_retrieval(mget, { batchSize: 17 });
}
function obj_retrieval_reset() {
    batchRetrievals = {};
}

// CONCATENATED MODULE: ./scrivito_sdk/client/binary_metadata_retrieval.ts

function retrieveBinaryMetadata(binaryId) {
    return cmsRestApi.get("blobs/" + encodeURIComponent(binaryId || '') + "/meta_data");
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_query_retrieval.ts
var obj_query_retrieval_assign = (undefined && undefined.__assign) || function () {
    obj_query_retrieval_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return obj_query_retrieval_assign.apply(this, arguments);
};

function retrieve(workspaceId, params) {
    var consistentParams = obj_query_retrieval_assign({ consistent: true }, params);
    return cmsRestApi
        .get("workspaces/" + workspaceId + "/objs/search", consistentParams)
        .then(function (backendResponse) {
        var response = asBackendQueryResponse(backendResponse);
        return {
            results: response.results.map(function (result) { return result.id; }),
            continuation: response.continuation,
            total: response.total,
            objs: response.objs,
        };
    });
}
function asBackendQueryResponse(backendResponse) {
    var queryResponse = {
        results: backendResponse.results,
        total: backendResponse.total,
    };
    var continuation = backendResponse.continuation;
    if (continuation !== undefined) {
        queryResponse.continuation = continuation;
    }
    var objs = backendResponse.objs;
    if (objs !== undefined) {
        queryResponse.objs = objs;
    }
    return queryResponse;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/facet_query_retrieval.ts

function retrieveFacetQuery(workspaceId, params) {
    return cmsRestApi
        .get("workspaces/" + workspaceId + "/objs/search", params)
        .then(function (response) {
        var facets = response.facets;
        return {
            facets: facets.map(function (facetArray) {
                return facetArray.map(function (facet) {
                    return {
                        total: facet.total,
                        value: facet.value,
                        results: facet.results,
                    };
                });
            }),
        };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_field_diffs_retrieval.ts

function retrieveObjFieldDiffs(currentWorkspaceId, objId) {
    return cmsRestApi
        .get("workspaces/" + currentWorkspaceId + "/objs/" + objId + "/diff")
        .then(function (response) { return response; });
}
function isWidgetlistDiff(diff) {
    return !!diff && diff.format === 'widgetlist_diff';
}

// CONCATENATED MODULE: ./scrivito_sdk/client/cms_retrieval.ts





var cmsRetrieval = {
    retrieveObjQuery: function (workspaceId, params) {
        return retrieve(workspaceId, params);
    },
    retrieveFacetQuery: function (workspaceId, params) {
        return retrieveFacetQuery(workspaceId, params);
    },
    retrieveBinaryMetadata: function (binaryId) {
        return retrieveBinaryMetadata(binaryId);
    },
    retrieveBinaryUrls: function (binaryId, transformation) {
        return retrieveBinaryUrls(binaryId, transformation);
    },
    retrieveObjFieldDiffs: function (currentWorkspaceId, objId) {
        return retrieveObjFieldDiffs(currentWorkspaceId, objId);
    },
};
function replaceCmsRetrieval(newCmsRetrieval) {
    cmsRetrieval = newCmsRetrieval;
}

// CONCATENATED MODULE: ./scrivito_sdk/client/get_workspace_changes.ts

function getWorkspaceChanges(workspaceId, from) {
    // TODO: don't cast via unknown, once JSONObjectAssignable becomes available
    return cmsRestApi.get("workspaces/" + workspaceId + "/changes", {
        from: from,
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/client/obj_json.ts
function isExistentObjJson(data) {
    return !data._deleted;
}
function isWidgetlistAttributeJson(attributeJson) {
    return attributeJson[0] === 'widgetlist';
}

// CONCATENATED MODULE: ./scrivito_sdk/client/visitor_authentication_provider.ts




/**
 * The VisitorAuthenticationProvider is responsible to provide the visitor
 * session to authenticate backend requests for a Scrivito configured with
 * visitor authentication.
 *
 * The visitor session is retrieved from backend using the id token that
 * the provider has received. Backend requests are delayed until the first
 * session response arrives.
 *
 * Responses of visitor session authenticated backend requests are monitored
 * if they indicate an expired session, and retried either with a fresh
 * visitor session or without authentication.
 */
var visitor_authentication_provider_VisitorAuthenticationProvider = /** @class */ (function () {
    function VisitorAuthenticationProvider() {
        this.sessionId = randomId();
        this.idToken = new common_deferred();
        this.state = 'waiting for token';
        this.sessionRequest = this.fetchSession();
    }
    VisitorAuthenticationProvider.prototype.setToken = function (token) {
        if (!this.idToken.isPending()) {
            this.idToken = new common_deferred();
            this.renewSession();
        }
        this.idToken.resolve(token);
        this.state = "active - token: " + token.substr(0, 3) + "...";
    };
    VisitorAuthenticationProvider.prototype.currentState = function () {
        return this.state;
    };
    VisitorAuthenticationProvider.prototype.perform = function (sendRequest) {
        var _this = this;
        var sessionRequest = this.sessionRequest;
        return sessionRequest.then(function (session) {
            return sendRequest("Session " + session.token).catch(function (error) {
                var sessionHasExpired = error instanceof UnauthorizedError;
                if (!sessionHasExpired)
                    throw error;
                if (_this.sessionRequest === sessionRequest)
                    _this.renewSession();
                return _this.perform(sendRequest);
            });
        }, function (_error) { return perform(sendRequest); });
    };
    VisitorAuthenticationProvider.prototype.renewSession = function () {
        this.sessionRequest = this.fetchSession();
    };
    VisitorAuthenticationProvider.prototype.fetchSession = function () {
        var _this = this;
        return this.idToken.promise
            .then(function (token) { return cmsRestApi.requestVisitorSession(_this.sessionId, token); })
            .catch(function (error) {
            throwNextTick(new ScrivitoError("Failed to establish visitor session: " + error.message));
            throw error;
        });
    };
    return VisitorAuthenticationProvider;
}());


// CONCATENATED MODULE: ./scrivito_sdk/client/retrieve_is_suitable.ts


var workflowQueriesRetrieval = new batch_retrieval(function (queries) {
    var request = cmsRestApi.put('workflows/query', { queries: queries });
    return request.then(function (response) { return response.results; });
});
function retrieveIsSuitable(query) {
    var backendQuery = toBackendQuery(query);
    return workflowQueriesRetrieval.retrieve(backendQuery);
}
function toBackendQuery(query) {
    var params = {
        workflow_id: query.workflowId,
    };
    if (isWorkflowQueryWithObj(query)) {
        params.obj = {
            workspace_id: query.obj.workspaceId,
            obj_id: query.obj.objId,
        };
    }
    if (isWorkflowQueryWithChanges(query)) {
        params.changes = toBackendChanges(query.changes);
    }
    return params;
}
function toBackendChanges(changes) {
    var backendChanges = {};
    Object.keys(changes).forEach(function (name) {
        backendChanges[underscore(name)] = changes[name];
    });
    return backendChanges;
}
function isWorkflowQueryWithChanges(query) {
    return !!query.changes;
}
function isWorkflowQueryWithObj(query) {
    return !!query.obj;
}

// EXTERNAL MODULE: ./scrivito_sdk/client/workspace_json.ts
var workspace_json = __webpack_require__(7);

// CONCATENATED MODULE: ./scrivito_sdk/client/index.ts
















// CONCATENATED MODULE: ./scrivito_sdk/data/workspace_content_updater.ts




var workspace_content_updater_WorkspaceContentUpdater = /** @class */ (function () {
    function WorkspaceContentUpdater(workspaceId, contentState) {
        this.workspaceId = workspaceId;
        this.contentState = contentState;
    }
    WorkspaceContentUpdater.prototype.getContinuation = function () {
        return this.continuation;
    };
    WorkspaceContentUpdater.prototype.setContentStateIdOrThrowIfTracking = function (contentStateId) {
        if (this.initialization) {
            throw new InternalError("Cannot (re)set content state id of " + this.workspaceId + " after trackContentStateId");
        }
        this.setContentStateId(contentStateId);
    };
    WorkspaceContentUpdater.prototype.trackContentStateId = function () {
        if (!this.initialization) {
            this.initialization = this.initializeContentStateId();
        }
        return this.initialization;
    };
    WorkspaceContentUpdater.prototype.updateContent = function () {
        var _this = this;
        if (this.updating)
            return this.updating;
        var from = this.continuation || this.getContentStateId();
        if (!from)
            return ScrivitoPromise.resolve();
        var updating = this.fetchFeed(from, 10).then(function (finalChanges) {
            _this.updateContentState(finalChanges);
            return !!finalChanges.to;
        });
        this.updating = promiseAndFinally(updating, function () {
            _this.updating = undefined;
        });
        return this.updating;
    };
    WorkspaceContentUpdater.prototype.fetchFeed = function (from, maxRequestCount) {
        var _this = this;
        var remainingRequestCount = maxRequestCount - 1;
        return getWorkspaceChanges(this.workspaceId, from).then(function (changes) {
            _this.applyChanges(changes);
            if (remainingRequestCount < 1)
                return changes;
            var continuation = changes.to;
            if (!continuation)
                return changes;
            return _this.fetchFeed(continuation, remainingRequestCount);
        });
    };
    WorkspaceContentUpdater.prototype.applyChanges = function (changes) {
        var _this = this;
        if (Object(external_underscore_["isArray"])(changes.objs)) {
            changes.objs.forEach(function (obj) {
                var objId = isExistentObjJson(obj) ? obj._id : obj._deleted;
                var objReplication = objReplicationPool.get(_this.workspaceId, objId);
                objReplication.notifyBackendState(obj);
            });
        }
    };
    WorkspaceContentUpdater.prototype.updateContentState = function (changes) {
        var to = changes.to, current = changes.current;
        this.continuation = to || current;
        this.setContentStateId(current);
    };
    WorkspaceContentUpdater.prototype.initializeContentStateId = function () {
        var _this = this;
        if (this.getContentStateId())
            return ScrivitoPromise.resolve();
        return getWorkspaceChanges(this.workspaceId).then(function (response) {
            _this.setContentStateId(response.current);
        });
    };
    WorkspaceContentUpdater.prototype.getContentStateId = function () {
        return this.contentState.get();
    };
    WorkspaceContentUpdater.prototype.setContentStateId = function (value) {
        this.contentState.set(value);
    };
    return WorkspaceContentUpdater;
}());


// CONCATENATED MODULE: ./scrivito_sdk/data/content_updater.ts




var contentUpdateHandler;
var workspaceContentUpdaters = {};
function setContentUpdateHandler(handler) {
    contentUpdateHandler = handler;
}
function getContentStateId(workspaceId) {
    var contentStateId = contentUpdateHandler
        ? contentUpdateHandler.getContentStateId(workspaceId)
        : getState(workspaceId).get();
    return contentStateId || '';
}
function setContentStateId(workspaceId, contentStateId) {
    if (contentUpdateHandler)
        return;
    workspaceContentUpdaterFor(workspaceId).setContentStateIdOrThrowIfTracking(contentStateId);
}
function trackContentStateId(workspaceId) {
    if (contentUpdateHandler)
        return ScrivitoPromise.resolve();
    return workspaceContentUpdaterFor(workspaceId).trackContentStateId();
}
function updateContent(workspaceId) {
    if (contentUpdateHandler)
        return ScrivitoPromise.resolve();
    return workspaceContentUpdaterFor(workspaceId).updateContent();
}
// For test purpose only
function resetContentUpdater() {
    workspaceContentUpdaters = {};
    contentUpdateHandler = undefined;
}
// For test purpose only.
function getContinuationHandle(workspaceId) {
    var updater = workspaceContentUpdaters[workspaceId];
    return updater && updater.getContinuation();
}
function workspaceContentUpdaterFor(workspaceId) {
    if (!workspaceContentUpdaters[workspaceId]) {
        workspaceContentUpdaters[workspaceId] = new workspace_content_updater_WorkspaceContentUpdater(workspaceId, getState(workspaceId));
    }
    return workspaceContentUpdaters[workspaceId];
}
function getState(workspaceId) {
    return cmsState.subState('contentStateId').subState(workspaceId);
}

// CONCATENATED MODULE: ./scrivito_sdk/data/in_memory_tenant.ts
var in_memory_tenant_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var IN_MEMORY_TENANT = 'inMemory';
var inMemoryTenant = false;
function isUsingInMemoryTenant() {
    return inMemoryTenant;
}
function useInMemoryTenant() {
    inMemoryTenant = true;
}
function assertNotUsingInMemoryTenant(operationDescription) {
    if (inMemoryTenant) {
        throw new InMemoryTenantUnsupportedOperationError(operationDescription);
    }
}
// For test purpose only.
function resetInMemoryTenant() {
    inMemoryTenant = false;
}
var InMemoryTenantUnsupportedOperationError = /** @class */ (function (_super) {
    in_memory_tenant_extends(InMemoryTenantUnsupportedOperationError, _super);
    function InMemoryTenantUnsupportedOperationError(description) {
        return _super.call(this, description + " is not supported when using the in-memory tenant") || this;
    }
    return InMemoryTenantUnsupportedOperationError;
}(ScrivitoError));


// CONCATENATED MODULE: ./scrivito_sdk/data/facet_query.ts
var facet_query_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






var loadableCollection = new loadable_collection_LoadableCollection({
    name: 'facetquery',
    state: function () { return cmsState.subState('facetQuery'); },
    loader: function (_a) {
        var _b = facet_query_read(_a, 2), workspaceId = _b[0], params = _b[1];
        return cmsRetrieval.retrieveFacetQuery(workspaceId, params);
    },
    invalidation: function (_a) {
        var _b = facet_query_read(_a, 2), workspaceId = _b[0], _params = _b[1];
        return loadableWithDefault(undefined, function () { return getContentStateId(workspaceId); }) || '';
    },
});
var facet_query_FacetQuery = /** @class */ (function () {
    function FacetQuery(workspaceId, attribute, options, query) {
        this._requestParams = buildRequestParams(attribute, options, query);
        this._loadableData = loadableCollection.get([
            workspaceId,
            this._requestParams,
        ]);
    }
    // For test purpose only.
    FacetQuery.store = function (workspaceId, attribute, options, query, response) {
        var requestParams = buildRequestParams(attribute, options, query);
        loadableCollection.get([workspaceId, requestParams]).set(response);
    };
    FacetQuery.prototype.result = function () {
        assertNotUsingInMemoryTenant('Search API');
        var response = this._loadableData.get();
        if (!response) {
            return [];
        }
        return response.facets[0].map(function (facet) {
            var name = facet.value;
            var count = facet.total;
            var includedObjIds = facet.results.map(function (result) { return result.id; });
            return { name: name, count: count, includedObjIds: includedObjIds };
        });
    };
    return FacetQuery;
}());
/* harmony default export */ var facet_query = (facet_query_FacetQuery);
function buildRequestParams(attribute, options, query) {
    var params = {
        facets: [
            {
                attribute: attribute,
                limit: options.limit || 10,
                include_objs: options.includeObjs || 0,
            },
        ],
        size: 0,
    };
    if (!Object(external_underscore_["isEmpty"])(query)) {
        params.query = query;
    }
    return params;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/find_widget_placement.ts



function findWidgetPlacement(objData, widgetId) {
    var placement = findWidgetPlacementIn(objData, widgetId);
    if (placement) {
        return placement;
    }
    external_underscore_["find"](objData._widget_pool, function (parentWidgetData, parentWidgetId) {
        if (parentWidgetData) {
            placement = findWidgetPlacementIn(parentWidgetData, widgetId);
            if (placement) {
                placement.parentWidgetId = parentWidgetId;
                return true;
            }
        }
    });
    return placement;
}
function findWidgetPlacementIn(objOrWidgetData, widgetId) {
    var placement;
    external_underscore_["find"](objOrWidgetData, function (jsonValue, attributeName) {
        if (!jsonValue) {
            return;
        }
        if (isSystemAttribute(attributeName)) {
            return;
        }
        // Typescript cannot know that once blank and system attribute entries
        // are excluded, what's left must be a custom attribute entry, and the
        // cast is therefore safe.
        var attributeJson = jsonValue;
        if (!isWidgetlistAttributeJson(attributeJson)) {
            return;
        }
        var widgetIds = attributeJson[1];
        if (!widgetIds) {
            return;
        }
        var index = widgetIds.indexOf(widgetId);
        if (index !== -1) {
            placement = { attributeName: attributeName, index: index };
            return true;
        }
    });
    return placement;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_patch.js
var obj_patch_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};

function patchObjJson(primitiveObj, patch) {
    if (!primitiveObj) {
        return patch;
    }
    if (!patch) {
        return null;
    }
    var updatedPrimitiveObj = {};
    eachKeyFrom(primitiveObj, patch, function (attribute, objValue, patchValue) {
        if (attribute === '_widget_pool') {
            updatedPrimitiveObj._widget_pool = buildUpdatedWidgetPool(objValue || {}, patchValue);
        }
        else if (Object.prototype.hasOwnProperty.call(patch, attribute)) {
            if (patchValue) {
                updatedPrimitiveObj[attribute] = patchValue;
            }
        }
        else {
            updatedPrimitiveObj[attribute] = primitiveObj[attribute];
        }
    });
    return updatedPrimitiveObj;
}
function diffObjJson(primitiveObjA, primitiveObjB) {
    if (!primitiveObjA) {
        return primitiveObjB || {};
    }
    if (!primitiveObjB) {
        return null;
    }
    var patch = {};
    eachKeyFrom(primitiveObjA, primitiveObjB, function (attribute, valueInA, valueInB) {
        if (attribute === '_widget_pool') {
            var widgetPoolPatch = buildWidgetPoolPatch(valueInA, valueInB);
            if (!external_underscore_default.a.isEmpty(widgetPoolPatch)) {
                patch._widget_pool = widgetPoolPatch;
            }
        }
        else {
            var patchValue = buildPatchEntry(valueInA, valueInB, function () {
                if (!external_underscore_default.a.isEqual(valueInA, valueInB)) {
                    return valueInB;
                }
            });
            if (patchValue !== undefined) {
                patch[attribute] = patchValue;
            }
        }
    });
    return patch;
}
function eachKeyFrom(objectA, objectB, handler) {
    external_underscore_default.a.union(external_underscore_default.a.keys(objectA), external_underscore_default.a.keys(objectB)).forEach(function (key) {
        return handler(key, workspaceAwareObject(objectA[key]), workspaceAwareObject(objectB[key]));
    });
}
function workspaceAwareObject(object) {
    if (external_underscore_default.a.isArray(object)) {
        var _a = obj_patch_read(object, 2), type = _a[0], value = _a[1];
        // Ignore binary URLs, since they are different across workspaces.
        // However, a binary ID identifies a binary unambiguously.
        if (type === 'binary' && value) {
            return [type, external_underscore_default.a.omit(value, 'url')];
        }
        return object;
    }
    return object;
}
function buildUpdatedWidgetPool(widgetPool, widgetPoolPatch) {
    if (!widgetPoolPatch || external_underscore_default.a.isEmpty(widgetPoolPatch)) {
        return widgetPool;
    }
    var updatedWidgetPool = {};
    eachKeyFrom(widgetPool, widgetPoolPatch, function (id, widget, widgetPatch) {
        if (Object.prototype.hasOwnProperty.call(widgetPoolPatch, id)) {
            if (widgetPatch && !widget) {
                updatedWidgetPool[id] = widgetPatch;
            }
            else if (widgetPatch) {
                updatedWidgetPool[id] = patchObjJson(widget, widgetPatch);
            }
        }
        else {
            updatedWidgetPool[id] = widget;
        }
    });
    return updatedWidgetPool;
}
function buildPatchEntry(valueA, valueB, fnHandleBoth) {
    if (!valueA && valueB) {
        return valueB;
    }
    if (valueA && !valueB) {
        return null;
    }
    if (valueA && valueB) {
        return fnHandleBoth();
    }
}
function buildWidgetPoolPatch(widgetPoolA, widgetPoolB) {
    if (widgetPoolA === widgetPoolB) {
        return undefined;
    }
    if (!widgetPoolA) {
        return widgetPoolB;
    }
    var patch = {};
    eachKeyFrom(widgetPoolA, widgetPoolB || {}, function (widgetId, widgetA, widgetB) {
        var widgetValue = buildPatchEntry(widgetA, widgetB, function () {
            var widgetPatch = diffObjJson(widgetA, widgetB);
            if (!external_underscore_default.a.isEmpty(widgetPatch)) {
                return widgetPatch;
            }
        });
        if (widgetValue !== undefined) {
            patch[widgetId] = widgetValue;
        }
    });
    return patch;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/replication_cache.ts
var ReplicationCache = /** @class */ (function () {
    function ReplicationCache(factory) {
        this.factory = factory;
        this.cache = {};
    }
    ReplicationCache.prototype.get = function (workspaceId, objId) {
        if (!this.cache[workspaceId]) {
            this.cache[workspaceId] = {};
        }
        if (!this.cache[workspaceId][objId]) {
            this.cache[workspaceId][objId] = this.factory(workspaceId, objId);
        }
        return this.cache[workspaceId][objId];
    };
    ReplicationCache.prototype.clear = function () {
        this.cache = {};
    };
    return ReplicationCache;
}());


// CONCATENATED MODULE: ./scrivito_sdk/data/obj_replication_pool.ts



var obj_replication_pool_ObjReplicationPool = /** @class */ (function () {
    function ObjReplicationPool() {
        this.replicationCache = new ReplicationCache(function () {
            // forgot to set a strategy?
            throw new InternalError();
        });
        this.disabled = false;
        this.writeWriteCallbacks = {};
        this.subscriptionToken = 0;
    }
    ObjReplicationPool.prototype.setReplicationStrategy = function (Strategy) {
        this.replicationCache = new ReplicationCache(function (workspaceId, objId) { return new Strategy(workspaceId, objId); });
    };
    ObjReplicationPool.prototype.get = function (workspaceId, objId) {
        return this.replicationCache.get(workspaceId, objId);
    };
    ObjReplicationPool.prototype.subscribeWrites = function (callback) {
        this.subscriptionToken += 1;
        this.writeWriteCallbacks[this.subscriptionToken] = callback;
        return this.subscriptionToken;
    };
    ObjReplicationPool.prototype.unsubscribeWrites = function (token) {
        delete this.writeWriteCallbacks[token];
    };
    ObjReplicationPool.prototype.isDisabled = function () {
        return this.disabled;
    };
    ObjReplicationPool.prototype.writeStarted = function (promise) {
        Object(external_underscore_["each"])(this.writeWriteCallbacks, function (callback) {
            callback(promise);
        });
    };
    ObjReplicationPool.prototype.disableReplication = function () {
        this.disabled = true;
    };
    // For test purpose only.
    ObjReplicationPool.prototype.enableReplication = function () {
        this.disabled = false;
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearWriteCallbacks = function () {
        this.writeWriteCallbacks = {};
    };
    // For test purpose only.
    ObjReplicationPool.prototype.clearCache = function () {
        this.replicationCache.clear();
    };
    return ObjReplicationPool;
}());
var objReplicationPool = new obj_replication_pool_ObjReplicationPool();
function useReplicationStrategy(Strategy) {
    objReplicationPool.setReplicationStrategy(Strategy);
}

// CONCATENATED MODULE: ./scrivito_sdk/data/performance_constraint.ts

var constraint = new context_container();
function failIfPerformanceConstraint(message) {
    if (constraint.current())
        throw new InternalError(message);
}
function runWithPerformanceConstraint(fn) {
    return constraint.runWith(true, fn);
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data.ts
var obj_data_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function clearObjDataCache() {
    cacheStore().clear();
}
function cacheStore() {
    return cmsState.subState('objData');
}
var obj_data_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'objdata',
    state: cacheStore,
    loader: function (_a) {
        var _b = obj_data_read(_a, 2), workspaceId = _b[0], objId = _b[1];
        objReplicationPool.get(workspaceId, objId).start();
        // the data is actually 'pushed in' via the replication (see above)
        return never();
    },
});
/** a Promise that never resolves or rejects.
 */
function never() {
    return new ScrivitoPromise(function () {
        return;
    });
}
var obj_data_ObjData = /** @class */ (function () {
    function ObjData(_workspaceId, _id) {
        this._workspaceId = _workspaceId;
        this._id = _id;
        this._loadableData = obj_data_loadableCollection.get([_workspaceId, _id]);
    }
    ObjData.prototype.get = function () {
        failIfPerformanceConstraint('for performance reasons, avoid this method when rendering');
        return this._loadableData.get();
    };
    ObjData.prototype.getWidget = function (id) {
        failIfPerformanceConstraint('for performance reasons, avoid this method when rendering');
        return this.getWidgetState(id).get();
    };
    ObjData.prototype.getWidgetWithBadPerformance = function (widgetId) {
        return this.getWidgetState(widgetId).get();
    };
    ObjData.prototype.getAttribute = function (key) {
        if (key === '_widget_pool') {
            throw new InternalError('_widget_pool is not an attribute, use getWidget or getWidgetAttribute');
        }
        return this.getSubReader(key).get();
    };
    ObjData.prototype.getWidgetAttribute = function (id, key) {
        return this.getWidgetState(id)
            .subState(key)
            .get();
    };
    ObjData.prototype.getIfExistent = function () {
        if (this.isNonExistent())
            return null;
        var data = this.get();
        return data ? data : data;
    };
    ObjData.prototype.isNonExistent = function () {
        return (!!this.getSubReader('_deleted').get() || !this.getSubReader('_id').get());
    };
    ObjData.prototype.set = function (newState) {
        failIfFrozen('Changing CMS content');
        this._loadableData.set(newState);
        this._replication().notifyLocalState(newState);
    };
    ObjData.prototype.setError = function (error) {
        this._loadableData.setError(error);
    };
    ObjData.prototype.ensureAvailable = function () {
        return this._loadableData.ensureAvailable();
    };
    ObjData.prototype.isAvailable = function () {
        return this._loadableData.isAvailable();
    };
    ObjData.prototype.update = function (objPatch) {
        var newState = patchObjJson(this.get(), objPatch);
        this.set(newState);
    };
    ObjData.prototype.finishSaving = function () {
        return this._replication().finishSaving();
    };
    ObjData.prototype.workspaceId = function () {
        return this._workspaceId;
    };
    ObjData.prototype.equals = function (other) {
        if (!(other instanceof ObjData)) {
            return false;
        }
        return this.workspaceId() === other.workspaceId() && this._id === other._id;
    };
    /** for test purposes only */
    ObjData.prototype.loadingSubscriberCount = function () {
        return this._loadableData.numSubscribers();
    };
    /** for test purposes only */
    ObjData.prototype.unload = function () {
        this._loadableData.reset();
    };
    ObjData.prototype._replication = function () {
        return objReplicationPool.get(this._workspaceId, this._id);
    };
    ObjData.prototype.getWidgetState = function (id) {
        var widgetPoolState = this.getSubReader('_widget_pool');
        return widgetPoolState.subState(id);
    };
    ObjData.prototype.getSubReader = function (key) {
        return this._loadableData.reader().subState(key);
    };
    return ObjData;
}());
/* harmony default export */ var obj_data = (obj_data_ObjData);

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data_store.ts



function preloadObjData(workspaceId, objId) {
    load(function () { return getObjData(workspaceId, objId); });
}
function createObjData(workspaceId, objId) {
    var objData = objDataFor(workspaceId, objId);
    objData.set(null);
    return objData;
}
// For test purpose only
function storeObjData(workspaceId, primitiveObj) {
    setObjData(workspaceId, primitiveObj._id, primitiveObj);
}
// For test purpose only.
function setObjDataNonexistent(workspaceId, objId) {
    setObjData(workspaceId, objId, null);
}
function setObjData(workspaceId, objId, primitiveObj) {
    objDataFor(workspaceId, objId).set(primitiveObj);
}
function getObjData(workspaceId, objId) {
    var objData = objDataFor(workspaceId, objId);
    if (!objData.ensureAvailable()) {
        return;
    }
    return objData;
}
/** get an ObjData instance for the given IDs, even if not yet loaded */
function objDataFor(workspaceId, objId) {
    return new obj_data(workspaceId, objId);
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_backend_replication.js







var obj_backend_replication_ObjBackendReplication = /** @class */ (function () {
    function ObjBackendReplication(workspaceId, objId) {
        var _this = this;
        this._workspaceId = workspaceId;
        this._objId = objId;
        this._replicationActive = false;
        this._scheduledReplication = false;
        this._currentRequestDeferred = null;
        this._nextRequestDeferred = null;
        this._performThrottledReplication = throttle(function () { return _this._performReplication(); }, 1000);
    }
    ObjBackendReplication.prototype.start = function () {
        var _this = this;
        retrieveObj(this._workspaceId, this._objId).then(function (data) {
            addBatchUpdate(function () {
                _this.notifyBackendState(data);
            });
        });
    };
    ObjBackendReplication.prototype.notifyLocalState = function (localState) {
        if (objReplicationPool.isDisabled()) {
            return;
        }
        if (external_underscore_default.a.isEmpty(obj_backend_replication_diff(this._localState, localState)))
            return;
        if (this._backendState && this._backendState._deleted) {
            throw new InternalError('Can not update a fully deleted obj.');
        }
        this._localState = localState;
        if (this._backendState === undefined)
            this._backendState = null;
        this._startReplication();
    };
    ObjBackendReplication.prototype.notifyBackendState = function (newBackendState) {
        if (this._backendState === undefined) {
            this._backendState = newBackendState;
            this._updateLocalState(newBackendState);
            return;
        }
        var newestKnownBackendState = this._bufferedBackendState || this._backendState;
        if (compareStates(newBackendState, newestKnownBackendState) > 0) {
            if (this._replicationActive) {
                this._bufferedBackendState = newBackendState;
            }
            else {
                if (newBackendState._deleted) {
                    this._updateLocalState(null);
                }
                else {
                    var patch = obj_backend_replication_diff(this._backendState, newBackendState);
                    this._updateLocalState(apply(this.localState, patch));
                }
                this._backendState = newBackendState;
            }
        }
    };
    ObjBackendReplication.prototype.finishSaving = function () {
        var finishSavingPromise;
        if (this._nextRequestDeferred) {
            finishSavingPromise = this._nextRequestDeferred.promise;
        }
        else if (this._currentRequestDeferred) {
            finishSavingPromise = this._currentRequestDeferred.promise;
        }
        else {
            return ScrivitoPromise.resolve();
        }
        return finishSavingPromise.catch(function () { return ScrivitoPromise.reject(); });
    };
    ObjBackendReplication.prototype.finishReplicating = function () {
        // this method is intended for stream replication
        // should never be called for instances of this class
        throw new InternalError();
    };
    ObjBackendReplication.prototype.replicationMessageStream = function () {
        // this method is intended for stream replication
        // should never be called for instances of this class
        throw new InternalError();
    };
    ObjBackendReplication.prototype._startReplication = function () {
        var _this = this;
        if (!external_underscore_default.a.isEmpty(obj_backend_replication_diff(this._backendState, this._localState))) {
            if (!this._replicationActive) {
                if (!this._scheduledReplication) {
                    this._scheduledReplication = true;
                    this._initDeferredForRequest();
                    objReplicationPool.writeStarted(this._currentRequestDeferred.promise);
                    nextTick(function () { return _this._performThrottledReplication(); });
                }
            }
            else if (!this._nextRequestDeferred) {
                this._nextRequestDeferred = new common_deferred();
            }
        }
        else if (this._nextRequestDeferred) {
            this._nextRequestDeferred.resolve();
            this._nextRequestDeferred = null;
        }
    };
    ObjBackendReplication.prototype._performReplication = function () {
        var _this = this;
        var localState = this._localState;
        var patch = obj_backend_replication_diff(this._backendState, this._localState);
        this._scheduledReplication = false;
        this._replicationActive = true;
        this._replicatePatchToBackend(patch).then(function (backendState) {
            _this._handleBackendUpdate(localState, backendState);
            _this._currentRequestDeferred.resolve(_this._objId);
            _this._currentRequestDeferred = null;
            _this._replicationActive = false;
            _this._startReplication();
        }, function (error) {
            _this._currentRequestDeferred.reject(error);
            _this._currentRequestDeferred = null;
            _this._replicationActive = false;
        });
    };
    ObjBackendReplication.prototype._replicatePatchToBackend = function (patch) {
        if (external_underscore_default.a.isEmpty(patch)) {
            return ScrivitoPromise.resolve(this._backendState);
        }
        var path = "workspaces/" + this._workspaceId + "/objs/" + this._objId;
        return cmsRestApi.put(path, { obj: patch });
    };
    ObjBackendReplication.prototype._initDeferredForRequest = function () {
        if (this._nextRequestDeferred) {
            var currentDeferred = this._nextRequestDeferred;
            this._nextRequestDeferred = null;
            this._currentRequestDeferred = currentDeferred;
        }
        else {
            this._currentRequestDeferred = new common_deferred();
        }
    };
    ObjBackendReplication.prototype._handleBackendUpdate = function (replicatedState, backendState) {
        var bufferedLocalChanges = obj_backend_replication_diff(replicatedState, this._localState);
        this._backendState = newerState(backendState, this._bufferedBackendState);
        this._bufferedBackendState = undefined;
        this._updateLocalState(apply(this._backendState, bufferedLocalChanges));
    };
    ObjBackendReplication.prototype._updateLocalState = function (localState) {
        this._localState = localState;
        setObjData(this._workspaceId, this._objId, this._localState);
    };
    Object.defineProperty(ObjBackendReplication.prototype, "backendState", {
        // For test purpose only.
        get: function () {
            return this._backendState;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ObjBackendReplication.prototype, "localState", {
        // For test purpose only.
        get: function () {
            return this._localState;
        },
        enumerable: true,
        configurable: true
    });
    // For test purpose only.
    ObjBackendReplication.prototype.isRequestInFlight = function () {
        return this._replicationActive;
    };
    return ObjBackendReplication;
}());

function obj_backend_replication_diff(stateA, stateB) {
    return diffObjJson(stateA, stateB);
}
function apply(stateA, patch) {
    return patchObjJson(stateA, patch);
}
function newerState(stateA, stateB) {
    if (compareStates(stateA, stateB) > 0) {
        return stateA;
    }
    return stateB;
}
function compareStates(stateA, stateB) {
    if (!stateA) {
        return -1;
    }
    if (!stateB) {
        return 1;
    }
    return strCompare(stateA._version, stateB._version);
}
function strCompare(str1, str2) {
    if (str1 > str2) {
        return 1;
    }
    if (str2 > str1) {
        return -1;
    }
    return 0;
}

// CONCATENATED MODULE: ./scrivito_sdk/replication/version_archive.ts
var version_archive_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// avoid 0, which is falsey in JS
var START_VERSION = 1;
var VersionArchive = /** @class */ (function () {
    function VersionArchive() {
        this.archive = {};
    }
    /** get a version number for the given data
     *
     * if data is unchanged from the last call, the same version is returned.
     * otherwise a new version is created.
     */
    VersionArchive.prototype.versionForData = function (data) {
        if (this.currentVersion === undefined) {
            this.currentVersion = START_VERSION;
            this.oldestVersion = START_VERSION;
        }
        else {
            var lastArchivedData = this.archive[this.currentVersion];
            if (data === lastArchivedData)
                return this.currentVersion;
            this.currentVersion++;
        }
        var newVersionNumber = this.currentVersion;
        this.archive[newVersionNumber] = data;
        return newVersionNumber;
    };
    /** find the data for a version */
    VersionArchive.prototype.retrieveVersion = function (version) {
        if (!this.archive.hasOwnProperty(version))
            throw new VersionNotFoundError();
        return this.archive[version];
    };
    VersionArchive.prototype.validVersion = function (version) {
        return (this.currentVersion !== undefined &&
            version >= START_VERSION &&
            version <= this.currentVersion);
    };
    /** for test purposes only */
    VersionArchive.prototype.versionCount = function () {
        return Object.keys(this.archive).length;
    };
    /** remove older versions from the archive, to free memory */
    VersionArchive.prototype.purgeVersionsOlderThan = function (version) {
        if (this.currentVersion === undefined ||
            version > this.currentVersion ||
            this.oldestVersion === undefined ||
            version <= this.oldestVersion) {
            return;
        }
        for (var i = this.oldestVersion; i < version; i++) {
            delete this.archive[i];
        }
        this.oldestVersion = version;
    };
    return VersionArchive;
}());

var VersionNotFoundError = /** @class */ (function (_super) {
    version_archive_extends(VersionNotFoundError, _super);
    function VersionNotFoundError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return VersionNotFoundError;
}(ScrivitoError));

// CONCATENATED MODULE: ./scrivito_sdk/replication/replication_agent.ts


/** Two connected ReplicationAgents replicate state, by sending messages to each other.
 *
 * The resulting replication allows for state to be written concurrently at both sides.
 * Concurrent changes are resolved using the passed-in three-way-merge function.
 * In order to allow concurrent writing, both agents must be able to perform merging.
 *
 * It is important, that the server ("UI") may improve its merge function,
 * without becoming incompatible with older clients ("SDKs").
 *
 * Therefore, the two connected agents are allowed to use different merge functions,
 * i.e. an agent must make no assumptions about the merge function that the other agent uses.
 *
 * But without knowledge about the other agent's merge function, it is impossible
 * to correctly merge a write conflict, if the conflict also involves the result of a
 * three-way-merge performed by the other side.
 *
 * In short: "concurrent writing" is possible, but "concurrent merging" must be avoided.
 *
 * To achieve this, the two agents take turns:
 * An agent may only merge, when it's the agent's turn.
 *
 * When it's the agent's turn, the agent make a "move" (like in a board game).
 * Each move consist of these steps:
 * 1) accepting (at least) one new remote version of the data from the other agent
 * 2) merging the new remote version(s) into the local state
 * 3) sending a new local version of the data to the other agent
 *
 * As a consequence, step 3) results in a message that
 * a) contains a new senderVersion
 * b) includes a new receiverVersion
 * --> This is said to be "a move made by the agent".
 *
 * As soon as an agent has sent a message containing its move,
 * it is now the other agent's turn again.
 *
 * Note that not every message contains an agent's move:
 * Some messages simply inform the other side about state changes,
 * Messages do not count as "a move", if they don't satisfy the criteria above.
 *
 * Both agents need to agree on who makes the opening move:
 * Connecting two agents that disagree on who goes first, would lead to deadlock.
 */
var replication_agent_ReplicationAgent = /** @class */ (function () {
    function ReplicationAgent(localState, mergeFunction, currentlyMyTurn) {
        this.localState = localState;
        this.mergeFunction = mergeFunction;
        this.currentlyMyTurn = currentlyMyTurn;
        this.outgoingMessages = new Subject();
        this.acknowledgedVersions = new Subject();
        this.localVersionArchive = new VersionArchive();
    }
    /** Version number for the current state */
    ReplicationAgent.prototype.currentVersion = function () {
        return this.localDataAndVersion().currentVersion;
    };
    /** Stream of version numbers that have been successfully replicated */
    ReplicationAgent.prototype.replicatedVersions = function () {
        return this.acknowledgedVersions;
    };
    /** for test purposes only */
    ReplicationAgent.prototype.myTurn = function () {
        return this.currentlyMyTurn;
    };
    /** for test purposes only */
    ReplicationAgent.prototype.versionArchiveSize = function () {
        return this.localVersionArchive.versionCount();
    };
    /** Tell the agent that the local state has changed */
    ReplicationAgent.prototype.handleLocalChange = function () {
        this.sendCurrentState();
    };
    /** Stream of messages for the remote agent */
    ReplicationAgent.prototype.replicationMessages = function () {
        return this.outgoingMessages;
    };
    /** Pass in a message from the remote agent */
    ReplicationAgent.prototype.handleIncomingMessage = function (message) {
        var containedLocalVersion = message.containedReceiverVersion;
        if (containedLocalVersion !== undefined) {
            if (!this.localVersionArchive.validVersion(containedLocalVersion))
                return;
            this.localVersionArchive.purgeVersionsOlderThan(containedLocalVersion);
            this.acknowledgedVersions.next(containedLocalVersion);
        }
        // if we have yet to make the opening move, we ignore all messages
        if (this.lastRemoteMove === undefined && this.currentlyMyTurn)
            return;
        // sanity check for the remote message
        if (!validSuccessorMessage(this.lastRemoteMove, message))
            return;
        // de-duplicate, i.e. don't process messages that contain nothing new
        if (this.incomingMessageAlreadyContained(message))
            return;
        // ignore messages that are not valid responses to our last move
        if (!isSubsequentMove(this.myLastMove, message))
            return;
        // at this point we are allowed to merge:
        // it just became our turn (or it was our turn already)
        this.performMerge(message);
        this.currentlyMyTurn = true;
        this.lastRemoteMove = message;
        this.sendCurrentState();
    };
    ReplicationAgent.prototype.performMerge = function (incomingMessage) {
        var _a = this.localDataAndVersion(), localData = _a.localData, currentVersion = _a.currentVersion;
        if (incomingMessage.containedReceiverVersion === currentVersion) {
            // fast-forward, like in git
            this.localState.set(incomingMessage.data);
        }
        else {
            this.localState.set(this.threeWayMerge(localData, incomingMessage));
        }
        this.containedRemoteVersion = incomingMessage.senderVersion;
    };
    ReplicationAgent.prototype.threeWayMerge = function (localData, incomingMessage) {
        var localBaseVersion = incomingMessage.containedReceiverVersion;
        if (!localBaseVersion) {
            return this.mergeFunction(localData, incomingMessage.data);
        }
        return this.mergeFunction(localData, incomingMessage.data, this.localVersionArchive.retrieveVersion(localBaseVersion));
    };
    ReplicationAgent.prototype.sendCurrentState = function () {
        var message = this.messageForCurrentState();
        if (this.currentlyMyTurn &&
            isSubsequentMove(this.lastRemoteMove, message)) {
            this.myLastMove = message;
            this.currentlyMyTurn = false;
        }
        this.outgoingMessages.next(message);
    };
    ReplicationAgent.prototype.messageForCurrentState = function () {
        var _a = this.localDataAndVersion(), localData = _a.localData, currentVersion = _a.currentVersion;
        if (!this.containedRemoteVersion) {
            return {
                data: localData,
                senderVersion: currentVersion,
            };
        }
        return {
            data: localData,
            senderVersion: currentVersion,
            containedReceiverVersion: this.containedRemoteVersion,
        };
    };
    ReplicationAgent.prototype.incomingMessageAlreadyContained = function (message) {
        return (this.containedRemoteVersion !== undefined &&
            message.senderVersion <= this.containedRemoteVersion);
    };
    ReplicationAgent.prototype.localDataAndVersion = function () {
        var localData = this.localState.get();
        return {
            localData: localData,
            currentVersion: this.localVersionArchive.versionForData(localData),
        };
    };
    return ReplicationAgent;
}());

/** Checks if potentialNextMove is a valid "next move", given the previousMove.
 *
 * It assumes that previousMove and potentialNextMove are from different agents.
 * (Since the same agent cannot make two subsequent moves)
 */
function isSubsequentMove(previousMove, potentialNextMove) {
    // any message is allowed as the opening move
    if (previousMove === undefined)
        return true;
    var containsPreviousMove = potentialNextMove.containedReceiverVersion !== undefined &&
        potentialNextMove.containedReceiverVersion >= previousMove.senderVersion;
    var hasNewVersion = previousMove.containedReceiverVersion === undefined ||
        previousMove.containedReceiverVersion < potentialNextMove.senderVersion;
    return containsPreviousMove && hasNewVersion;
}
/** Checks if nextMessage is a valid as a successor message to previousMessage.
 * It checks that versions are non-strictly incrementing (= not go down).
 * It assumes that both messages were sent by the same agent.
 */
function validSuccessorMessage(previousMessage, nextMessage) {
    // any message is allowed as the beginning
    if (previousMessage === undefined)
        return true;
    // version may not decrease
    if (nextMessage.senderVersion < previousMessage.senderVersion)
        return false;
    // contained version may not decrease
    if (previousMessage.containedReceiverVersion === undefined)
        return true;
    return (nextMessage.containedReceiverVersion !== undefined &&
        nextMessage.containedReceiverVersion >=
            previousMessage.containedReceiverVersion);
}

// CONCATENATED MODULE: ./scrivito_sdk/replication/replication_process.ts


/** A replication is achieved by connecting two ReplicationProcesses,
 * one running at each side of the replication.
 *
 * Each process consumes the other's messages and merges the remote changes into
 * its local state. Conversely, each process observes the local state, and sends
 * messages about local changes to the other process.
 *
 * The ReplicationProcesses is mostly responsible for I/O and stream wrangling.
 * The actual replication protocol is implemented by a ReplicationAgent.
 */
var replication_process_ReplicationProcess = /** @class */ (function () {
    function ReplicationProcess(localState, remoteMessages, merge, active) {
        var _this = this;
        this.localState = localState;
        this.remoteMessages = remoteMessages;
        this.outgoingMessages = new BehaviorSubject(undefined);
        this.stateChangeCausedByAgent = new context_container();
        this.replicatedVersions = new BehaviorSubject(undefined);
        this.agent = new replication_agent_ReplicationAgent({
            get: localState.get,
            set: function (newData) {
                _this.stateChangeCausedByAgent.runWith(true, function () {
                    return _this.localState.set(newData);
                });
            },
        }, merge, active);
        // Wrap the agent's messages and version in a BehaviourSubject,
        // to ensure new subscribers get the current state.
        this.agent.replicationMessages().subscribe(this.outgoingMessages);
        this.agent.replicatedVersions().subscribe(this.replicatedVersions);
    }
    /** for test purposes only */
    ReplicationProcess.prototype.myTurn = function () {
        return this.agent.myTurn();
    };
    /** for test purposes only */
    ReplicationProcess.prototype.versionArchiveSize = function () {
        return this.agent.versionArchiveSize();
    };
    /** for test purposes only */
    ReplicationProcess.prototype.subscriberCount = function () {
        return this.outgoingMessages.subscriberCount();
    };
    /** resolves, once the current version of the local state has been replicated */
    ReplicationProcess.prototype.finishReplicating = function () {
        var currentVersion = this.agent.currentVersion();
        return this.replicatedVersions
            .filter(isPresent)
            .filter(function (version) { return version >= currentVersion; })
            .waitForFirst()
            .then(function () { return undefined; });
    };
    ReplicationProcess.prototype.replicationMessages = function () {
        var _this = this;
        return new streamable_Streamable(function (observer) {
            _this.ensureStarted();
            var subscription = _this.outgoingMessages
                .filter(isPresent)
                .subscribe(observer);
            return function () {
                subscription.unsubscribe();
                if (_this.outgoingMessages.subscriberCount() === 0)
                    _this.ensureStopped();
            };
        });
    };
    ReplicationProcess.prototype.ensureStarted = function () {
        var _this = this;
        if (this.activeSubscriptions)
            return;
        this.activeSubscriptions = [
            this.localState.changes.subscribe(function () {
                if (_this.stateChangeCausedByAgent.current())
                    return;
                _this.agent.handleLocalChange();
            }),
            this.remoteMessages.subscribe(function (message) {
                return _this.agent.handleIncomingMessage(message);
            }),
        ];
        // since we did not observe local change until now,
        // we tell the agent to handle a local state change, just in case.
        this.agent.handleLocalChange();
    };
    ReplicationProcess.prototype.ensureStopped = function () {
        if (!this.activeSubscriptions)
            return;
        this.activeSubscriptions.forEach(function (subscription) {
            return subscription.unsubscribe();
        });
        this.activeSubscriptions = undefined;
    };
    return ReplicationProcess;
}());


// CONCATENATED MODULE: ./scrivito_sdk/replication/index.ts



// CONCATENATED MODULE: ./scrivito_sdk/data/obj_replication_process.ts






/** Create a ReplicationProcess, wired up to the given local Obj and
 * the given stream of incoming replication messages from remote.
 */
function createObjReplicationProcess(workspaceId, objId, incomingMessages, role) {
    var batchedMessages = new streamable_Streamable(function (subscriber) {
        return incomingMessages.subscribe(function (message) {
            return addBatchUpdate(function () { return subscriber.next(message); });
        });
    });
    return new replication_process_ReplicationProcess(localStateForObj(workspaceId, objId), batchedMessages, threeWayMergeObjs, role === 'source');
}
function localStateForObj(workspaceId, objId) {
    var objData = objDataFor(workspaceId, objId);
    return {
        get: function () { return loadableWithDefault(undefined, function () { return objData.get(); }); },
        set: function (value) {
            if (value !== undefined)
                objData.set(value);
        },
        changes: observeAndLoad(function () { return objData.get(); }).map(function () {
            // convert to Streamable<void>
        }),
    };
}
/** given two versions, and a common base version from which both versions
 * are derived, create a merged version that incorporated both changes.
 * if changes cannot be merged, the primaryVersion wins.
 */
function threeWayMergeObjs(primaryVersion, secondaryVersion, baseVersion) {
    if (secondaryVersion === undefined)
        return primaryVersion;
    if (primaryVersion === undefined)
        return secondaryVersion;
    var primaryChanges = diffObjJson(baseVersion || null, primaryVersion);
    return patchObjJson(secondaryVersion, primaryChanges);
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_id_query.ts

var obj_id_query_ObjIdQuery = /** @class */ (function () {
    function ObjIdQuery(workspaceId, params, batchSize) {
        this.workspaceId = workspaceId;
        this.params = params;
        this.batchSize = batchSize;
    }
    ObjIdQuery.store = function (workspaceId, params, objIds, total) {
        obj_id_query_batch.store(workspaceId, params, objIds, total);
    };
    ObjIdQuery.count = function (workspaceId, params) {
        return obj_id_query_batch.countFor(workspaceId, params);
    };
    ObjIdQuery.prototype.iterator = function () {
        var priorObjIds = {};
        var currentBatch = obj_id_query_batch.firstBatchFor(this.workspaceId, this.params, this.batchSize);
        var currentIndex = 0;
        function next() {
            if (!currentBatch) {
                return { done: true };
            }
            var currentObjIds = currentBatch.objIds();
            if (currentIndex < currentObjIds.length) {
                var objId = currentObjIds[currentIndex];
                currentIndex++;
                if (priorObjIds[objId]) {
                    return next();
                }
                priorObjIds[objId] = true;
                return {
                    value: objId,
                    done: false,
                };
            }
            currentBatch = currentBatch.nextBatch();
            currentIndex = 0;
            return next();
        }
        return { next: next };
    };
    return ObjIdQuery;
}());


// CONCATENATED MODULE: ./scrivito_sdk/data/obj_data_query.ts


var obj_data_query_ObjDataQuery = /** @class */ (function () {
    function ObjDataQuery(workspaceId, params, batchSize) {
        this.workspaceId = workspaceId;
        this.params = params;
        this.batchSize = batchSize;
    }
    ObjDataQuery.prototype.count = function () {
        return obj_id_query_ObjIdQuery.count(this.workspaceId, this.params);
    };
    ObjDataQuery.prototype.iterator = function () {
        return new obj_data_query_ObjDataQueryIterator(this.workspaceId, this.params, this.batchSize);
    };
    return ObjDataQuery;
}());

var obj_data_query_ObjDataQueryIterator = /** @class */ (function () {
    function ObjDataQueryIterator(workspaceId, params, batchSize) {
        this.workspaceId = workspaceId;
        this.iterator = new obj_id_query_ObjIdQuery(workspaceId, params, batchSize).iterator();
    }
    ObjDataQueryIterator.prototype.next = function () {
        if (!this.iterator) {
            return { done: true };
        }
        var id = this.iterator.next().value;
        if (!id) {
            return { done: true };
        }
        var objData = getObjData(this.workspaceId, id);
        if (objData === undefined) {
            this.iterator = null;
            return { done: true };
        }
        if (objData.isNonExistent()) {
            return this.next();
        }
        return { value: objData, done: false };
    };
    return ObjDataQueryIterator;
}());

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_query_store.ts




function storeObjQuery(workspaceId, params, objIds, total) {
    obj_id_query_ObjIdQuery.store(workspaceId, params, objIds, total);
}
function getObjQuery(workspaceId, params, batchSize) {
    assertNotUsingInMemoryTenant('Search API');
    return new obj_data_query_ObjDataQuery(workspaceId, params, batchSize);
}
function objQueryStateContainer() {
    return cmsState.subState('objQuery');
}
function clearObjQueryCache() {
    objQueryStateContainer().clear();
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_id_query_batch.ts
var obj_id_query_batch_assign = (undefined && undefined.__assign) || function () {
    obj_id_query_batch_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return obj_id_query_batch_assign.apply(this, arguments);
};
var obj_id_query_batch_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};







var FALLBACK_RESPONSE = {
    results: [],
    total: 0,
};
var obj_id_query_batch_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'objquery',
    state: function () { return objQueryStateContainer(); },
    loader: loader,
    invalidation: function (_a) {
        var _b = obj_id_query_batch_read(_a, 3), workspaceId = _b[0], _params = _b[1], _index = _b[2];
        return loadableWithDefault(undefined, function () { return getContentStateId(workspaceId); }) || '';
    },
});
var ObjIdQueryBatch = /** @class */ (function () {
    // the constructor should only be called internally,
    // i.e. by ObjIdQueryBatch itself
    function ObjIdQueryBatch(workspaceId, params, batchSize, index) {
        if (index === void 0) { index = 0; }
        this._workspaceId = workspaceId;
        this._params = params;
        this._batchSize = batchSize;
        this._index = index;
    }
    ObjIdQueryBatch.store = function (workspaceId, params, objIds, total) {
        if (total === void 0) { total = objIds.length; }
        var loadableData = obj_id_query_batch_loadableCollection.get([
            workspaceId,
            backendOrderedHitsParams(params),
            0,
        ]);
        loadableData.set({ results: objIds, total: total });
    };
    ObjIdQueryBatch.firstBatchFor = function (workspaceId, params, batchSize) {
        return new ObjIdQueryBatch(workspaceId, backendOrderedHitsParams(params), batchSize);
    };
    ObjIdQueryBatch.countFor = function (workspaceId, params) {
        return this.firstBatchFor(workspaceId, params, 0).count();
    };
    ObjIdQueryBatch.prototype.objIds = function () {
        return this._response().results;
    };
    ObjIdQueryBatch.prototype.count = function () {
        return this._response().total || 0;
    };
    // returns the next batch or undefined if this is the last batch
    // throws NotLoadedError if not available
    ObjIdQueryBatch.prototype.nextBatch = function () {
        if (this.continuationForNextBatch()) {
            return new ObjIdQueryBatch(this._workspaceId, this._params, this._batchSize, this._index + 1);
        }
    };
    Object.defineProperty(ObjIdQueryBatch.prototype, "index", {
        get: function () {
            return this._index;
        },
        enumerable: true,
        configurable: true
    });
    ObjIdQueryBatch.prototype.continuationForNextBatch = function () {
        return this._response().continuation;
    };
    ObjIdQueryBatch.prototype._response = function () {
        return this._data().getWithDefault(FALLBACK_RESPONSE);
    };
    ObjIdQueryBatch.prototype._data = function () {
        return obj_id_query_batch_loadableCollection.get([this._workspaceId, this._params, this._index], this._batchSize);
    };
    return ObjIdQueryBatch;
}());
/* harmony default export */ var obj_id_query_batch = (ObjIdQueryBatch);
function loader(_a, _b, batchSize) {
    var _c = obj_id_query_batch_read(_a, 3), workspaceId = _c[0], params = _c[1], index = _c[2];
    var push = _b.push, isReload = _b.isReload, wasCancelled = _b.wasCancelled;
    return fetchContinuation(workspaceId, params, batchSize, index).then(function (continuation) {
        if (wasCancelled()) {
            // if the load was cancelled, this error will never surface anywhere
            throw new Error();
        }
        var batchSpecificParams = {
            size: batchSize,
            continuation: continuation,
            include_objs: !isReload(),
        };
        var requestParams = obj_id_query_batch_assign(obj_id_query_batch_assign({}, params), batchSpecificParams);
        return cmsRetrieval
            .retrieveObjQuery(workspaceId, requestParams)
            .then(function (response) {
            var includedObjs = response.objs || [];
            push(function () {
                includedObjs.forEach(function (objJson) {
                    objReplicationPool
                        .get(workspaceId, objJson._id)
                        .notifyBackendState(objJson);
                });
                response.results.forEach(function (id) {
                    return preloadObjData(workspaceId, id);
                });
            });
            return {
                results: response.results,
                total: response.total,
                continuation: response.continuation,
            };
        });
    });
}
function fetchContinuation(workspaceId, params, batchSize, index) {
    if (index > 0) {
        var previousBatch_1 = new ObjIdQueryBatch(workspaceId, params, batchSize, index - 1);
        return load(function () { return previousBatch_1.continuationForNextBatch(); });
    }
    return ScrivitoPromise.resolve();
}
function backendOrderedHitsParams(params) {
    var backendParams = { query: params.query };
    if (params.boost !== undefined) {
        backendParams.boost = params.boost;
    }
    if (params.offset !== undefined) {
        backendParams.offset = params.offset;
    }
    if (params.orderBy !== undefined) {
        backendParams.order_by = params.orderBy;
    }
    if (params.includeDeleted) {
        backendParams.options = { include_deleted: true };
    }
    return backendParams;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_stream_replication.ts


var objReplicationEndpoint;
/** set the remote endpoint for stream replication
 * (usually, the UiAdapter is used as the endpoint)
 */
function setObjStreamReplicationEndpoint(endpoint) {
    objReplicationEndpoint = endpoint;
}
var obj_stream_replication_ObjStreamReplication = /** @class */ (function () {
    function ObjStreamReplication(workspaceId, objId) {
        this.workspaceId = workspaceId;
        this.objId = objId;
        this.runningEnsured = false;
        this.replicationProcess = createObjReplicationProcess(workspaceId, objId, getEndpoint().objReplicationMessageStream(workspaceId, objId), 'consumer');
    }
    /** for test purposes only */
    ObjStreamReplication.prototype.processSubscriberCount = function () {
        return this.replicationProcess.subscriberCount();
    };
    ObjStreamReplication.prototype.notifyLocalState = function () {
        // the replication process monitors local state changes on its own,
        // once it is up and running.
        this.ensureRunning();
    };
    ObjStreamReplication.prototype.notifyBackendState = function (_data) {
        // not concerned with the backend (this class replicates to the UI)
    };
    ObjStreamReplication.prototype.finishReplicating = function () {
        return this.replicationProcess.finishReplicating();
    };
    ObjStreamReplication.prototype.finishSaving = function () {
        var _this = this;
        return this.finishReplicating().then(function () {
            return getEndpoint().finishSavingObj(_this.workspaceId, _this.objId);
        });
    };
    ObjStreamReplication.prototype.replicationMessageStream = function () {
        return this.replicationProcess.replicationMessages();
    };
    ObjStreamReplication.prototype.start = function () {
        this.ensureRunning();
    };
    ObjStreamReplication.prototype.ensureRunning = function () {
        if (this.runningEnsured)
            return;
        // this ensures that the replication runs and keeps on running,
        // independent of whether anyone else subscribes the replicationMessages.
        // note: an ObjReplication is never stopped, so no need for unsubscribe
        this.replicationProcess.replicationMessages().subscribe(function () { return 0; });
        this.runningEnsured = true;
    };
    return ObjStreamReplication;
}());

function getEndpoint() {
    if (!objReplicationEndpoint) {
        // setObjStreamReplicationEndpoint needs to be called first
        throw new InternalError();
    }
    return objReplicationEndpoint;
}

// CONCATENATED MODULE: ./scrivito_sdk/data/obj_field_diffs_data.ts
var obj_field_diffs_data_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};





var obj_field_diffs_data_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'objFieldDiffs',
    state: function () { return cmsState.subState('objFieldDiffs'); },
    loader: function (_a) {
        var _b = obj_field_diffs_data_read(_a, 2), workspaceId = _b[0], objId = _b[1];
        return cmsRetrieval.retrieveObjFieldDiffs(workspaceId, objId);
    },
    invalidation: function (_a) {
        var _b = obj_field_diffs_data_read(_a, 2), workspaceId = _b[0], objId = _b[1];
        return getObjVersion(workspaceId, objId);
    },
});
function getFieldDiff(workspaceId, attributeName, objId, widgetId) {
    if (workspaceId === 'published') {
        return null;
    }
    var objFieldDiffs = getObjFieldDiffs(workspaceId, objId);
    if (widgetId) {
        return findWidgetFieldDiff(attributeName, widgetId, objFieldDiffs);
    }
    return findFieldDiff(attributeName, objFieldDiffs);
}
// For test purpose only.
function storeObjFieldDiffs(workspaceId, objId, objFieldDiffs) {
    getLoadableData(workspaceId, objId).set(objFieldDiffs);
}
function getObjFieldDiffs(workspaceId, objId) {
    return getLoadableData(workspaceId, objId).getWithDefault({});
}
function getLoadableData(workspaceId, objId) {
    return obj_field_diffs_data_loadableCollection.get([workspaceId, objId]);
}
function findWidgetFieldDiff(attributeName, widgetId, objFieldDiffs) {
    var widgetPool = objFieldDiffs._widget_pool;
    if (widgetPool) {
        var widgetFieldDiffs = widgetPool[widgetId];
        if (widgetFieldDiffs) {
            return findFieldDiff(attributeName, widgetFieldDiffs);
        }
    }
    return null;
}
function findFieldDiff(attributeName, fieldDiffs) {
    var typeAndDiff = fieldDiffs[underscore(attributeName)];
    if (typeAndDiff) {
        return typeAndDiff[1];
    }
    return null;
}
function getObjVersion(workspaceId, objId) {
    var objData = getObjData(workspaceId, objId);
    if (objData) {
        return objData.getAttribute('_version') || '';
    }
    return '';
}

// CONCATENATED MODULE: ./scrivito_sdk/data/get_widget_modification.ts




function getWidgetModification(workspaceId, objId, widgetId) {
    var objDataBefore = getObjData('published', objId);
    var objDataAfter = getObjData(workspaceId, objId);
    if (!objDataBefore || !objDataAfter) {
        return null;
    }
    if (objDataBefore.isNonExistent() && objDataAfter.isNonExistent()) {
        return null;
    }
    if (objDataBefore.isNonExistent() && !objDataAfter.isNonExistent()) {
        return 'new';
    }
    if (!objDataBefore.isNonExistent() && objDataAfter.isNonExistent()) {
        return 'deleted';
    }
    return getModificationForWidget(objDataBefore, objDataAfter, widgetId);
}
function getModificationForWidget(objDataBefore, objDataAfter, widgetId) {
    var widgetJsonBefore = objDataBefore.getWidgetWithBadPerformance(widgetId);
    var widgetJsonAfter = objDataAfter.getWidgetWithBadPerformance(widgetId);
    if (widgetJsonBefore) {
        if (widgetJsonAfter) {
            return hasDiff(widgetJsonBefore, widgetJsonAfter) ? 'edited' : null;
        }
        return 'deleted';
    }
    else {
        return widgetJsonAfter ? 'new' : null;
    }
}
function hasDiff(widgetJsonBefore, widgetJsonAfter) {
    var patch = diffObjJson(widgetJsonBefore, widgetJsonAfter);
    return Object(external_underscore_["some"])(Object.keys(patch), function (attributeName) {
        if (isSystemAttribute(attributeName)) {
            return attributeName === '_obj_class';
        }
        return true;
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/data/index.ts


















// CONCATENATED MODULE: ./scrivito_sdk/models/metadata_collection.ts
var __values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var metadata_collection_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






var BackendBinaryMetadataType;
(function (BackendBinaryMetadataType) {
    BackendBinaryMetadataType["Date"] = "date";
    BackendBinaryMetadataType["Number"] = "number";
    BackendBinaryMetadataType["String"] = "string";
    BackendBinaryMetadataType["Stringlist"] = "stringlist";
})(BackendBinaryMetadataType || (BackendBinaryMetadataType = {}));
var metadata_collection_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'metadata',
    state: function () { return cmsState.subState('metadataCollection'); },
    loader: function (id) { return cmsRetrieval.retrieveBinaryMetadata(id); },
});
// public API
var metadata_collection_MetadataCollection = /** @class */ (function () {
    function MetadataCollection(binaryId) {
        this.binaryId = binaryId;
        if (binaryId) {
            this.loadableData = metadata_collection_loadableCollection.get(binaryId);
        }
    }
    MetadataCollection.store = function (binaryId, response) {
        // deserialize once, as a sanity check
        deserializeMetadata(response);
        metadata_collection_loadableCollection.get(binaryId).set(response);
    };
    // public API
    MetadataCollection.prototype.get = function (key) {
        assertNotUsingInMemoryTenant('MetadataCollection#get');
        assertCamelCase(key);
        var data = this.getData();
        if (data) {
            var underscoredKey = underscore(key);
            if (data.hasOwnProperty(underscoredKey)) {
                return data[underscoredKey];
            }
            return null;
        }
        return null;
    };
    MetadataCollection.prototype.keys = function () {
        var data = this.getData();
        if (data) {
            return Object(external_underscore_["map"])(Object(external_underscore_["keys"])(data), camelCase);
        }
        return [];
    };
    MetadataCollection.prototype.contentLength = function () {
        var length = this.get('contentLength');
        if (typeof length !== 'number') {
            return 0;
        }
        return length;
    };
    MetadataCollection.prototype.contentType = function () {
        var type = this.get('contentType');
        if (typeof type !== 'string') {
            return '';
        }
        return type;
    };
    MetadataCollection.prototype.getData = function () {
        if (this.loadableData) {
            var metadata = this.loadableData.get();
            if (metadata) {
                return deserializeMetadata(metadata);
            }
        }
    };
    return MetadataCollection;
}());
/* harmony default export */ var metadata_collection = (metadata_collection_MetadataCollection);
function deserializeMetadata(response) {
    var e_1, _a;
    var backendMetadata = response.meta_data;
    var metadata = {};
    try {
        for (var _b = __values(Object.keys(backendMetadata)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var _d = metadata_collection_read(backendMetadata[key], 2), backendType = _d[0], backendValue = _d[1];
            if (backendValue === null || backendValue === undefined) {
                throw new InternalError("Invalid backend value \"null\" or \"undefined\" for metadata \"" + key + "\"");
            }
            var value = void 0;
            if (backendType === BackendBinaryMetadataType.Date) {
                if (typeof backendValue === 'string') {
                    value = deserializeAsDate(backendValue);
                }
                else {
                    throw new InternalError("Invalid non-string backend value for a date metadata \"" + key + "\"");
                }
            }
            else {
                value = backendValue;
            }
            metadata[key] = value;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return metadata;
}
function assertCamelCase(key) {
    if (!isCamelCase(key)) {
        throw new ArgumentError("Metadata key \"" + key + "\" is not in camel case.");
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/models/binary.ts
var binary_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var binary_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(binary_read(arguments[i]));
    return ar;
};









var binary_loadableCollection = new loadable_collection_LoadableCollection({
    name: 'binary',
    state: function () { return cmsState.subState('binary'); },
    loader: function (_a) {
        var _b = binary_read(_a, 2), binaryId = _b[0], transformation = _b[1];
        return cmsRetrieval.retrieveBinaryUrls(binaryId, transformation);
    },
});
// this is a small, 1x1 pixel, fully transparent GIF image
var PLACEHOLDER_URL = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var binary_Binary = /** @class */ (function () {
    function Binary(binaryId, isPublic, transformation) {
        if (isPublic === void 0) { isPublic = true; }
        if (transformation === void 0) { transformation = {}; }
        this._id = binaryId;
        this._isPublic = !!isPublic;
        this._transformation = transformation || undefined;
        this._loadableData = binary_loadableCollection.get([
            binaryId,
            this._transformation,
        ]);
    }
    // public API
    Binary.upload = function (source, options) {
        var excessArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            excessArgs[_i - 2] = arguments[_i];
        }
        checkUpload.apply(void 0, binary_spread([source, options], excessArgs));
        if (!FileType.is(source)) {
            if (!(options && options.filename)) {
                throw new ArgumentError('Expected a filename to be passed with Blob as the source.');
            }
        }
        return new future_binary({ source: source }, options);
    };
    // For test purpose only.
    Binary.store = function (binaryId, options, response) {
        var transformation = options.transformation;
        binary_loadableCollection.get([binaryId, transformation]).set(response);
        var raw = new Binary(binaryId).raw();
        if (transformation) {
            return raw.optimizeFor(transformation);
        }
        return raw;
    };
    // For test purpose only.
    Binary.storeMetadata = function (binaryId, response) {
        metadata_collection.store(binaryId, response);
    };
    Binary.prototype.id = function () {
        return this._id;
    };
    // public API
    Binary.prototype.copy = function (options) {
        return new future_binary({ idToCopy: this._id }, options);
    };
    // public API
    Binary.prototype.isPrivate = function () {
        return !this._isPublic;
    };
    // public API
    Binary.prototype.optimizeFor = function (transformation) {
        return new Binary(this._id, this._isPublic, Object(external_underscore_["extend"])({}, this._transformation, transformation));
    };
    // public API
    Binary.prototype.original = function () {
        return new Binary(this._id, this._isPublic, {});
    };
    // public API
    Binary.prototype.raw = function () {
        return new Binary(this._id, this._isPublic, null);
    };
    Binary.prototype.isExplicitlyTransformed = function () {
        return this.isTransformed() && !Object(external_underscore_["isEmpty"])(this._transformation);
    };
    Binary.prototype.isRaw = function () {
        return !this.isTransformed();
    };
    // public API
    Binary.prototype.url = function () {
        assertNotUsingInMemoryTenant('Binary#url');
        return this.urlWithoutPlaceholder() || PLACEHOLDER_URL;
    };
    Binary.prototype.urlWithoutPlaceholder = function () {
        var data = this._loadableData.get();
        if (!data) {
            return;
        }
        var accessData = data[this.accessType()];
        if (!accessData) {
            throw new InternalError("Missing key " + this.accessType + " in binary data");
        }
        return accessData.get.url;
    };
    // public API
    Binary.prototype.filename = function () {
        var url = this.url();
        if (!url || url.match(/^data:/)) {
            return '';
        }
        return (external_urijs_(url)
            .path()
            .split('/')
            .pop() || '');
    };
    // public API
    Binary.prototype.metadata = function () {
        this.assertNotTransformed('Metadata');
        return new metadata_collection(this._id);
    };
    // public API
    Binary.prototype.contentType = function () {
        this.assertNotTransformed('Content type');
        return this.metadata().contentType();
    };
    // public API
    Binary.prototype.contentLength = function () {
        this.assertNotTransformed('Content length');
        return this.metadata().contentLength();
    };
    Binary.prototype.extname = function () {
        if (this.raw()
            .filename()
            .indexOf('.') > -1) {
            var matches = /[^.\\]*$/.exec(this.raw().filename());
            if (matches) {
                return matches[0].toLowerCase();
            }
        }
        return '';
    };
    Binary.prototype.equals = function (binary) {
        return (binary instanceof Binary &&
            binary.id() === this.id() &&
            binary.isPrivate() === this.isPrivate() &&
            Object(external_underscore_["isEqual"])(binary.definition(), this.definition()));
    };
    Binary.prototype.isImage = function () {
        var rawContentType = this.raw().contentType();
        if (rawContentType) {
            return rawContentType.split('/')[0] === 'image';
        }
        return false;
    };
    // For test purpose only.
    Binary.prototype.definition = function () {
        return this._transformation || null;
    };
    Binary.prototype.accessType = function () {
        if (this.isPrivate()) {
            return 'private_access';
        }
        return 'public_access';
    };
    Binary.prototype.assertNotTransformed = function (fieldName) {
        if (this.isTransformed()) {
            throw new ScrivitoError("\"" + fieldName + "\" is not available for transformed images." +
                ' Use "Scrivito.Binary#raw" to access the untransformed version of the image.');
        }
    };
    Binary.prototype.isTransformed = function () {
        return !!this._transformation;
    };
    return Binary;
}());
/* harmony default export */ var models_binary = (binary_Binary);
var BinaryOptionsType = external_tcomb_validation_.struct({
    contentType: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    filename: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var SourceType = external_tcomb_validation_.refinement(external_tcomb_validation_.Object, function (value) { return BlobType.is(value) || FileType.is(value); }, 'Blob or File');
var checkUpload = checkArgumentsFor('Binary.upload', [['source', SourceType], ['options', external_tcomb_validation_.maybe(BinaryOptionsType)]], {
    docPermalink: 'js-sdk/Binary-static-upload',
});

// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_deserializer.js
var attribute_deserializer_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function deserialize(model, rawValue, type, options) {
    var _a = attribute_deserializer_read(rawValue, 2), typeFromBackend = _a[0], valueFromBackend = _a[1];
    switch (type) {
        case 'binary':
            return deserializeBinaryValue(typeFromBackend, valueFromBackend);
        case 'date':
            return deserializeDateValue(typeFromBackend, valueFromBackend);
        case 'float':
            return deserializeFloatValue(typeFromBackend, valueFromBackend);
        case 'enum':
            return deserializeEnumValue(typeFromBackend, valueFromBackend, options);
        case 'html':
            return deserializeHtmlValue(typeFromBackend, valueFromBackend);
        case 'integer':
            return deserializeIntegerValue(typeFromBackend, valueFromBackend);
        case 'link':
            return deserializeLinkValue(typeFromBackend, valueFromBackend);
        case 'linklist':
            return deserializeLinklistValue(typeFromBackend, valueFromBackend);
        case 'multienum':
            return deserializeMultienumValue(typeFromBackend, valueFromBackend, options);
        case 'reference':
            return deserializeReferenceValue(typeFromBackend, valueFromBackend, model);
        case 'referencelist':
            return deserializeReferencelistValue(typeFromBackend, valueFromBackend, model);
        case 'string':
            return deserializeStringValue(typeFromBackend, valueFromBackend);
        case 'stringlist':
            return deserializeStringlistValue(typeFromBackend, valueFromBackend);
        case 'widgetlist':
            return deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model);
        default:
            return null;
    }
}
function deserializeBinaryValue(typeFromBackend, valueFromBackend) {
    if (typeFromBackend === 'binary' && valueFromBackend) {
        var binaryId = valueFromBackend.id;
        var isPublic = current_workspace_currentWorkspaceId() === 'published';
        return new models_binary(binaryId, isPublic);
    }
    return null;
}
function deserializeDateValue(typeFromBackend, valueFromBackend) {
    if (typeFromBackend !== 'date') {
        return null;
    }
    return deserializeAsDate(valueFromBackend);
}
function deserializeHtmlValue(typeFromBackend, valueFromBackend) {
    if (external_underscore_default.a.contains(['html', 'string'], typeFromBackend) &&
        external_underscore_default.a.isString(valueFromBackend)) {
        return valueFromBackend;
    }
    return '';
}
function deserializeEnumValue(typeFromBackend, valueFromBackend, _a) {
    var values = _a.values;
    if (typeFromBackend === 'string' && external_underscore_default.a.contains(values, valueFromBackend)) {
        return valueFromBackend;
    }
    return null;
}
function deserializeMultienumValue(typeFromBackend, valueFromBackend, _a) {
    var values = _a.values;
    if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
        return [];
    }
    return external_underscore_default.a.intersection(valueFromBackend, values);
}
function deserializeFloatValue(typeFromBackend, valueFromBackend) {
    switch (typeFromBackend) {
        case 'string':
            if (valueFromBackend.match(/^-?\d+(\.\d+)?$/)) {
                return convertToFloat(valueFromBackend);
            }
            return null;
        case 'number':
            return convertToFloat(valueFromBackend);
        default:
            return null;
    }
}
function convertToFloat(valueFromBackend) {
    var floatValue = parseFloat(valueFromBackend);
    if (isValidFloat(floatValue)) {
        return floatValue;
    }
    return null;
}
function deserializeIntegerValue(typeFromBackend, valueFromBackend) {
    switch (typeFromBackend) {
        case 'string':
        case 'number':
            return deserializeAsInteger(valueFromBackend);
        default:
            return null;
    }
}
function deserializeLinkValue(typeFromBackend, valueFromBackend) {
    if (typeFromBackend !== 'link' || !external_underscore_default.a.isObject(valueFromBackend)) {
        return null;
    }
    return convertToLink(valueFromBackend);
}
function deserializeLinklistValue(_typeFromBackend, valueFromBackend) {
    if (!external_underscore_default.a.isArray(valueFromBackend)) {
        return [];
    }
    return external_underscore_default.a.compact(valueFromBackend.map(convertToLink));
}
function convertToLink(valueFromBackend) {
    var linkParams = external_underscore_default.a.pick(valueFromBackend, 'query', 'rel', 'target', 'title', 'url');
    if ('fragment' in valueFromBackend) {
        linkParams.hash = valueFromBackend.fragment;
    }
    if ('obj_id' in valueFromBackend) {
        linkParams.objId = valueFromBackend.obj_id;
    }
    var link = new basic_link(linkParams);
    if (link.isBroken()) {
        return null;
    }
    return link;
}
function convertReferenceToBasicObj(valueFromBackend, model) {
    var obj = basic_obj.getInWorkspace(model.workspaceId(), valueFromBackend);
    if (obj) {
        return obj;
    }
    return null;
}
function deserializeReferenceValue(typeFromBackend, valueFromBackend, model) {
    if (typeFromBackend === 'reference' && valueFromBackend) {
        return convertReferenceToBasicObj(valueFromBackend, model);
    }
    return null;
}
function deserializeReferencelistValue(typeFromBackend, valueFromBackend, model) {
    if (typeFromBackend !== 'referencelist') {
        return [];
    }
    if (!valueFromBackend) {
        return [];
    }
    var objs = valueFromBackend.map(function (obj) {
        return convertReferenceToBasicObj(obj, model);
    });
    return external_underscore_default.a.compact(objs);
}
function deserializeStringValue(typeFromBackend, valueFromBackend) {
    if (external_underscore_default.a.contains(['html', 'string'], typeFromBackend) &&
        external_underscore_default.a.isString(valueFromBackend)) {
        return valueFromBackend;
    }
    return '';
}
function deserializeStringlistValue(typeFromBackend, valueFromBackend) {
    if (typeFromBackend !== 'stringlist' || !Array.isArray(valueFromBackend)) {
        return [];
    }
    return valueFromBackend;
}
function deserializeWidgetlistValue(typeFromBackend, valueFromBackend, model) {
    if (typeFromBackend !== 'widgetlist') {
        return [];
    }
    return external_underscore_default.a.map(valueFromBackend, function (widgetId) { return model.widget(widgetId); });
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_attribute_content.ts
var basic_attribute_content_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var basic_attribute_content_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(basic_attribute_content_read(arguments[i]));
    return ar;
};



var basic_attribute_content_BasicAttributeContent = /** @class */ (function () {
    function BasicAttributeContent() {
    }
    BasicAttributeContent.prototype.get = function (attributeName, typeInfo) {
        var internalAttributeName = underscore(attributeName);
        var rawValue = this.getAttributeData(internalAttributeName);
        if (!rawValue || !external_underscore_["isArray"](rawValue)) {
            rawValue = [];
        }
        if (typeof typeInfo === 'string') {
            return deserialize(this, rawValue, typeInfo);
        }
        else {
            return deserialize.apply(attribute_deserializer_namespaceObject, basic_attribute_content_spread([this, rawValue], typeInfo));
        }
    };
    BasicAttributeContent.prototype.serializeAttributes = function (data) {
        var _this = this;
        return external_underscore_["mapObject"](data, function (value, name) {
            if (isWidgetlistJsonAttributeValue(value)) {
                var publicAttrName = camelCase(name);
                var serializedAttributes = external_underscore_["invoke"](_this.get(publicAttrName, ['widgetlist']), 'serializeAttributes');
                return ['widgetlist', serializedAttributes];
            }
            return value;
        });
    };
    BasicAttributeContent.prototype.persistWidgets = function (obj, attributes) {
        external_underscore_["each"](attributes, function (valueAndType) {
            if (isWidgetlistAttributeValueAndType(valueAndType)) {
                var value = valueAndType[0];
                if (value) {
                    var widgets = external_underscore_["isArray"](value)
                        ? value
                        : [value];
                    external_underscore_["each"](widgets, function (widget) {
                        if (!widget.isPersisted()) {
                            widget.persistInObj(obj);
                        }
                    });
                }
            }
        });
    };
    return BasicAttributeContent;
}());
/* harmony default export */ var basic_attribute_content = (basic_attribute_content_BasicAttributeContent);
function isWidgetlistJsonAttributeValue(value) {
    return external_underscore_["isArray"](value) && value[0] === 'widgetlist';
}
function isWidgetlistAttributeValueAndType(valueAndType) {
    if (!valueAndType) {
        return false;
    }
    if (!external_underscore_["isArray"](valueAndType)) {
        return false;
    }
    if (valueAndType.length < 2) {
        return false;
    }
    var typeInfo = valueAndType[1];
    return (external_underscore_["isArray"](typeInfo) && typeInfo.length > 0 && typeInfo[0] === 'widgetlist');
}
function normalizeAttributes(attributes) {
    return external_underscore_["mapObject"](attributes, function (attributeValue, name) {
        // Note: System attribute value normalization for public API input is
        // already performed by unwrapAppAttributes. Therefore this code exists
        // only for internal callers. Which could eventually be changed to
        // specify their values that they don't need to be normalized and
        // therefore avoid this code altogether.
        if (isSystemAttribute(name)) {
            if (external_underscore_["isArray"](attributeValue)) {
                return attributeValue;
            }
            return [attributeValue];
        }
        if (!external_underscore_["isArray"](attributeValue)) {
            throw new InternalError("Value for " + name + " should be a tuple: [value, typeInfo]");
        }
        var _a = basic_attribute_content_read(attributeValue, 2), value = _a[0], typeInfo = _a[1];
        if (typeof typeInfo === 'string') {
            // Note: This is not a support of an easy public value specification.
            // Instead, only some internal calls can go this way. With the help
            // of typescript and an "Implementation error" thrown here, we might
            // get rid of this special case completely. But since the gain is
            // little, there is some risk that some caller is missed, there are
            // a lot of callers, and it would extend the current PR too much, this
            // is not simplified right now. Stay tuned.
            return [value, [typeInfo]];
        }
        return [value, typeInfo];
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/models/current_workspace.ts
var PUBLISHED_WORKSPACE_ID = 'published';
var current_workspace_workspaceId;
function current_workspace_currentWorkspaceId() {
    return current_workspace_workspaceId || PUBLISHED_WORKSPACE_ID;
}
function setCurrentWorkspaceId(id) {
    current_workspace_workspaceId = id;
}
// For test purpose only
function resetCurrentWorkspaceId() {
    current_workspace_workspaceId = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_widget.js
var basic_widget_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var basic_widget_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};







var basic_widget_BasicWidget = /** @class */ (function (_super) {
    basic_widget_extends(BasicWidget, _super);
    function BasicWidget(attributes) {
        var _this = _super.call(this) || this;
        _this._attributesToBeSaved = normalizeAttributes(attributes);
        assertWidgetClassExists(attributes._objClass);
        return _this;
    }
    BasicWidget.build = function (id, obj) {
        var instance = Object.create(BasicWidget.prototype);
        instance._obj = obj;
        instance._id = id;
        return instance;
    };
    BasicWidget.newWithSerializedAttributes = function (attributes) {
        var unserializedAttributes = {};
        var serializedAttributes = {};
        external_underscore_default.a.each(attributes, function (value, name) {
            if (name === '_obj_class') {
                unserializedAttributes._objClass = [value];
                return;
            }
            if (external_underscore_default.a.isArray(value) && external_underscore_default.a.first(value) === 'widgetlist') {
                var newWidgets = external_underscore_default.a.map(external_underscore_default.a.last(value), function (serializedWidget) {
                    return BasicWidget.newWithSerializedAttributes(serializedWidget);
                });
                var attrName = camelCase(name);
                unserializedAttributes[attrName] = [newWidgets, ['widgetlist']];
                return;
            }
            serializedAttributes[name] = value;
        });
        var widget = new BasicWidget(unserializedAttributes);
        widget.preserializedAttributes = serializedAttributes;
        return widget;
    };
    BasicWidget.prototype.id = function () {
        this._failIfNotPersisted();
        return this._id;
    };
    BasicWidget.prototype.objClass = function () {
        if (this.isPersisted()) {
            return this.getAttributeData('_obj_class');
        }
        return this._attributesToBeSaved._objClass[0];
    };
    BasicWidget.prototype.obj = function () {
        this._failIfNotPersisted();
        return this._obj;
    };
    BasicWidget.prototype.widget = function (id) {
        return this.obj().widget(id);
    };
    BasicWidget.prototype.workspaceId = function () {
        return this.obj().workspaceId();
    };
    BasicWidget.prototype.modification = function () {
        return getWidgetModification(current_workspace_currentWorkspaceId(), this.obj().id(), this.id());
    };
    BasicWidget.prototype.container = function () {
        failIfPerformanceConstraint('for performance reasons, avoid this method when rendering');
        return this.containingField().getContainer();
    };
    BasicWidget.prototype.update = function (attributes) {
        var _this = this;
        var normalizedAttributes = normalizeAttributes(attributes);
        withBatchedUpdates(function () {
            _this.persistWidgets(_this.obj(), normalizedAttributes);
            var patch = serialize(normalizedAttributes);
            _this._updateSelf(patch);
        });
    };
    BasicWidget.prototype.insertBefore = function (widget) {
        widget.obj().insertWidget(this, { before: widget });
    };
    BasicWidget.prototype.insertAfter = function (widget) {
        widget.obj().insertWidget(this, { after: widget });
    };
    BasicWidget.prototype.remove = function () {
        this.obj().removeWidget(this);
    };
    BasicWidget.prototype.copy = function () {
        if (this.isPersisted()) {
            return this._copyPersisted();
        }
        return this._copyUnpersisted();
    };
    BasicWidget.prototype.persistInObj = function (obj) {
        this.persistWidgets(obj, this._attributesToBeSaved);
        var patch = serialize(this._attributesToBeSaved);
        external_underscore_default.a.extend(patch, this.preserializedAttributes || {});
        this._obj = obj;
        this._id = obj.generateWidgetId();
        this._updateSelf(patch);
        this._executeDidPersistCallback();
    };
    BasicWidget.prototype.isPersisted = function () {
        return !!this._obj;
    };
    BasicWidget.prototype.onDidPersist = function (callback) {
        if (this.isPersisted()) {
            throw new ScrivitoError('Cannot call "onDidPersist" of an already persisted widget');
        }
        this._onDidPersistCallback = callback;
    };
    // For test purpose only.
    BasicWidget.prototype.hasOnDidPersistCallback = function () {
        return !!this._onDidPersistCallback;
    };
    Object.defineProperty(BasicWidget.prototype, "attributesToBeSaved", {
        get: function () {
            return this._attributesToBeSaved;
        },
        enumerable: true,
        configurable: true
    });
    BasicWidget.prototype.finishSaving = function () {
        return this.obj().finishSaving();
    };
    BasicWidget.prototype.equals = function (otherWidget) {
        if (!(otherWidget instanceof BasicWidget)) {
            return false;
        }
        return (this.id() === otherWidget.id() &&
            this.obj().id() === otherWidget.obj().id());
    };
    BasicWidget.prototype.containingField = function () {
        return this.obj().fieldContainingWidget(this);
    };
    BasicWidget.prototype.toPrettyPrint = function () {
        return "[object " + this.objClass() + " id=\"" + this.id() + "\" objId=\"" + this.obj().id() + "\"]";
    };
    BasicWidget.prototype.getAttributeData = function (attributeName) {
        return this.obj().getWidgetAttribute(this.id(), attributeName);
    };
    BasicWidget.prototype.getData = function () {
        return this.obj().getWidgetData(this.id());
    };
    BasicWidget.prototype.serializeAttributes = function () {
        return _super.prototype.serializeAttributes.call(this, this.getData());
    };
    BasicWidget.prototype._failIfNotPersisted = function () {
        if (!this.isPersisted()) {
            throw new ScrivitoError('Can not access a new widget before it has been saved.');
        }
    };
    BasicWidget.prototype._updateSelf = function (patch) {
        var _a;
        var widgetPoolPatch = { _widgetPool: [(_a = {}, _a[this.id()] = patch, _a)] };
        this.obj().update(widgetPoolPatch);
    };
    BasicWidget.prototype._executeDidPersistCallback = function () {
        if (this._onDidPersistCallback) {
            this._onDidPersistCallback(this);
            delete this._onDidPersistCallback;
        }
    };
    BasicWidget.prototype._copyPersisted = function () {
        var serializedAttributes = this.serializeAttributes();
        return BasicWidget.newWithSerializedAttributes(serializedAttributes);
    };
    BasicWidget.prototype._copyUnpersisted = function () {
        var attributes = external_underscore_default.a.mapObject(this._attributesToBeSaved, function (_a) {
            var _b = basic_widget_read(_a, 2), value = _b[0], typeInfo = _b[1];
            if (typeInfo && typeInfo[0] === 'widgetlist') {
                return [external_underscore_default.a.invoke(value, 'copy'), typeInfo];
            }
            return [value, typeInfo];
        });
        var copy = new BasicWidget(attributes);
        if (this._onDidPersistCallback) {
            copy.onDidPersist(this._onDidPersistCallback);
        }
        return copy;
    };
    return BasicWidget;
}(basic_attribute_content));
/* harmony default export */ var basic_widget = (basic_widget_BasicWidget);
function assertWidgetClassExists(attrInfoAndValue) {
    if (!attrInfoAndValue) {
        throw new ArgumentError('Please provide a widget class as the "_objClass" property.');
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_serializer/link.ts


function isValidLinkInputValue(value) {
    // check if value is backend compatible
    if (value instanceof basic_link)
        return !value.isEmpty();
    if (!external_underscore_["isObject"](value))
        return false;
    if (external_underscore_["isEmpty"](external_underscore_["compact"](external_underscore_["values"](value))))
        return false;
    var invalidKeys = external_underscore_["without"](external_underscore_["keys"](value), 'hash', 'obj_id', 'query', 'rel', 'target', 'title', 'url');
    return external_underscore_["isEmpty"](invalidKeys);
}
function convertLinkToCmsApi(value) {
    var cmsApiValue = value instanceof basic_link
        ? convertBasicLinkToCmsApi(value)
        : convertLinkObjectToCmsApi(value);
    if (!cmsApiValue.rel) {
        delete cmsApiValue.rel;
    }
    return cmsApiValue;
}
function convertBasicLinkToCmsApi(basicLink) {
    return {
        rel: basicLink.rel() || undefined,
        query: basicLink.query(),
        target: basicLink.target(),
        title: basicLink.title(),
        url: basicLink.url(),
        // lowercased property method
        obj_id: basicLink.objId(),
        // different property method
        fragment: basicLink.hash(),
    };
}
function convertLinkObjectToCmsApi(value) {
    return {
        obj_id: value.obj_id || null,
        query: value.query || null,
        rel: value.rel || undefined,
        target: value.target || null,
        title: value.title || null,
        url: value.url || null,
        // different property key
        fragment: value.hash || null,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/models/attribute_serializer.js
var attribute_serializer_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};






function serialize(attributes) {
    var serializedAttributes = {};
    external_underscore_default.a.each(attributes, function (_a, name) {
        var _b = attribute_serializer_read(_a, 2), value = _b[0], attrInfo = _b[1];
        var serializedName = convertCamelCasedAttributeName(name);
        if (isSystemAttribute(serializedName)) {
            serializedAttributes[serializedName] = value;
        }
        else {
            var _c = attribute_serializer_read(attrInfo, 2), attrType = _c[0], attrOptions = _c[1];
            serializedAttributes[serializedName] = [
                serializeAttributeType(attrType, name),
                valueOrNull(serializeAttributeValue(attrType, attrOptions, value, name)),
            ];
        }
    });
    return serializedAttributes;
}
function convertCamelCasedAttributeName(name) {
    if (!isCamelCase(name)) {
        throw new ArgumentError('Attribute names have to be in camel case.');
    }
    return underscore(name);
}
function serializeAttributeType(type, name) {
    switch (type) {
        case 'enum':
            return 'string';
        case 'float':
        case 'integer':
            return 'number';
        case 'multienum':
            return 'stringlist';
        case 'binary':
        case 'date':
        case 'html':
        case 'link':
        case 'linklist':
        case 'reference':
        case 'referencelist':
        case 'string':
        case 'stringlist':
        case 'widgetlist':
            return type;
        default:
            throw new ArgumentError("Attribute \"" + name + "\" is of unsupported type \"" + type + "\".");
    }
}
function serializeAttributeValue(type, options, value, name) {
    if (value === null) {
        return value;
    }
    switch (type) {
        case 'binary':
            return serializeBinaryAttributeValue(value, name);
        case 'date':
            return serializeDateAttributeValue(value, name);
        case 'enum':
            return serializeEnumAttributeValue(options, value, name);
        case 'float':
            return serializeFloatAttributeValue(value, name);
        case 'html':
            return serializeHtmlAttributeValue(value, name);
        case 'integer':
            return serializeIntegerAttributeValue(value, name);
        case 'link':
            return serializeLinkAttributeValue(value, name);
        case 'linklist':
            return serializeLinklistAttributeValue(value, name);
        case 'multienum':
            return serializeMultienumAttributeValue(options, value, name);
        case 'reference':
            return serializeReferenceAttributeValue(value, name);
        case 'referencelist':
            return serializeReferencelistAttributeValue(value, name);
        case 'string':
            return serializeStringAttributeValue(value, name);
        case 'stringlist':
            return serializeStringlistAttributeValue(value, name);
        case 'widgetlist':
            return serializeWidgetlistAttributeValue(value, name);
        default:
            throw new InternalError("serializeAttributeValue is not implemented for \"" + type + "\".");
    }
}
function valueOrNull(value) {
    if ((external_underscore_default.a.isString(value) || external_underscore_default.a.isArray(value)) && external_underscore_default.a.isEmpty(value)) {
        return null;
    }
    return value;
}
function throwInvalidAttributeValue(value, name, expected) {
    throw new ArgumentError("Unexpected value " + prettyPrint(value) + " for" +
        (" attribute \"" + name + "\". Expected: " + expected));
}
function serializeBinaryAttributeValue(value, name) {
    if (value instanceof models_binary) {
        return { id: value.id() };
    }
    throwInvalidAttributeValue(value, name, 'A Binary.');
}
function serializeDateAttributeValue(value, name) {
    if (external_underscore_default.a.isDate(value)) {
        return formatDateToString(value);
    }
    if (isValidDateString(value)) {
        return value;
    }
    throwInvalidAttributeValue(value, name, 'A Date.');
}
function serializeEnumAttributeValue(_a, value, name) {
    var values = _a.values;
    if (external_underscore_default.a.contains(values, value)) {
        return value;
    }
    var e = "Valid attribute values are contained in its \"values\" array [" + values + "].";
    throwInvalidAttributeValue(value, name, e);
}
function serializeFloatAttributeValue(value, name) {
    if (isValidFloat(value)) {
        return value;
    }
    var invalidValue = value;
    if (external_underscore_default.a.isNumber(value)) {
        invalidValue = String(value);
    }
    throwInvalidAttributeValue(invalidValue, name, 'A Number, that is #isFinite().');
}
function serializeHtmlAttributeValue(value, name) {
    if (external_underscore_default.a.isString(value)) {
        return value;
    }
    throwInvalidAttributeValue(value, name, 'A String.');
}
function serializeIntegerAttributeValue(value, name) {
    if (isValidInteger(value)) {
        return value;
    }
    throwInvalidAttributeValue(value, name, 'A Number, that is #isSafeInteger().');
}
function serializeLinkAttributeValue(value, name) {
    if (isValidLinkInputValue(value)) {
        return convertLinkToCmsApi(value);
    }
    throwInvalidAttributeValue(value, name, 'A Link instance with a destination.');
}
function serializeLinklistAttributeValue(value, name) {
    if (external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, isValidLinkInputValue)) {
        return external_underscore_default.a.map(value, convertLinkToCmsApi);
    }
    throwInvalidAttributeValue(value, name, 'An array of Link instances with destinations set.');
}
function serializeMultienumAttributeValue(_a, value, name) {
    var values = _a.values;
    var errorMessage = "An array with values from " + prettyPrint(values) + ".";
    if (!external_underscore_default.a.isArray(value) || !external_underscore_default.a.every(value, external_underscore_default.a.isString)) {
        throwInvalidAttributeValue(value, name, errorMessage);
    }
    var forbiddenValues = external_underscore_default.a.difference(value, values);
    if (forbiddenValues.length) {
        var e = errorMessage + " Forbidden values: " + prettyPrint(forbiddenValues) + ".";
        throwInvalidAttributeValue(value, name, e);
    }
    return value;
}
function serializeReferenceAttributeValue(value, name) {
    if (isValidReference(value)) {
        return serializeSingleReferenceValue(value);
    }
    throwInvalidAttributeValue(value, name, 'A BasicObj or a String ID.');
}
function serializeReferencelistAttributeValue(value, name) {
    if (isValidReferencelistValue(value)) {
        return external_underscore_default.a.map(value, serializeSingleReferenceValue);
    }
    throwInvalidAttributeValue(value, name, 'An array with BasicObjs or String IDs.');
}
function serializeSingleReferenceValue(value) {
    if (value instanceof basic_obj) {
        return value.id();
    }
    return value;
}
function isValidReference(value) {
    return external_underscore_default.a.isString(value) || value instanceof basic_obj;
}
function isValidReferencelistValue(value) {
    return external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, function (v) { return isValidReference(v); });
}
function serializeStringAttributeValue(value, name) {
    if (isValidString(value)) {
        return value.toString();
    }
    throwInvalidAttributeValue(value, name, 'A String.');
}
function serializeStringlistAttributeValue(value, name) {
    if (external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, function (v) { return isValidString(v); })) {
        return external_underscore_default.a.invoke(value, 'toString');
    }
    throwInvalidAttributeValue(value, name, 'An array of strings.');
}
function isValidString(value) {
    return external_underscore_default.a.isString(value) || external_underscore_default.a.isNumber(value);
}
function serializeWidgetlistAttributeValue(value, name) {
    if (value instanceof basic_widget) {
        return serializeWidgetlistAttributeValue([value], name);
    }
    if (external_underscore_default.a.isArray(value) && external_underscore_default.a.every(value, function (v) { return v instanceof basic_widget; })) {
        return external_underscore_default.a.invoke(value, 'id');
    }
    throwInvalidAttributeValue(value, name, 'An array of BasicWidget instances.');
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_field.ts

var basic_field_BasicField = /** @class */ (function () {
    function BasicField(container, attributeName, typeInfo) {
        this.container = container;
        this.attributeName = attributeName;
        this.typeInfo = typeInfo;
        this.typeOptions = this.typeInfo[1] || {};
    }
    BasicField.prototype.get = function () {
        return this.container.get(this.attributeName, this.typeInfo);
    };
    BasicField.prototype.update = function (newValue) {
        var _a;
        this.container.update((_a = {}, _a[this.attributeName] = [newValue, this.typeInfo], _a));
    };
    BasicField.prototype.getContainer = function () {
        return this.container;
    };
    BasicField.prototype.obj = function () {
        return this.container.obj();
    };
    BasicField.prototype.name = function () {
        return this.attributeName;
    };
    BasicField.prototype.type = function () {
        return this.typeInfo[0];
    };
    BasicField.prototype.workspaceId = function () {
        return this.obj().workspaceId();
    };
    BasicField.prototype.equals = function (other) {
        if (!(other instanceof BasicField)) {
            return false;
        }
        return (this.container.equals(other.getContainer()) &&
            this.attributeName === other.name());
    };
    BasicField.prototype.validClasses = function () {
        return this.typeOptions.validClasses;
    };
    BasicField.prototype.getDiff = function () {
        var obj = this.obj();
        return getFieldDiff(this.workspaceId(), this.attributeName, obj.id(), this.container === obj ? undefined : this.container.id());
    };
    BasicField.prototype.toString = function () {
        var obj = this.obj();
        var name = this.attributeName;
        if (this.container === obj) {
            return "<BasicField name=" + name + " objId=" + obj.id() + ">";
        }
        return "<BasicField name=" + name + " objId=" + obj.id() + " widgetId=" + this.container.id() + ">";
    };
    BasicField.prototype.id = function () {
        var obj = this.obj();
        if (this.container === obj) {
            return this.attributeName + "|" + obj.id();
        }
        return this.attributeName + "|" + obj.id() + "|" + this.container.id();
    };
    return BasicField;
}());
/* harmony default export */ var basic_field = (basic_field_BasicField);

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj.ts
var basic_obj_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var basic_obj_assign = (undefined && undefined.__assign) || function () {
    basic_obj_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_obj_assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var basic_obj_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var basic_obj_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(basic_obj_read(arguments[i]));
    return ar;
};















var basic_obj_BasicObj = /** @class */ (function (_super) {
    basic_obj_extends(BasicObj, _super);
    function BasicObj(objData) {
        var _this = _super.call(this) || this;
        _this.objData = objData;
        return _this;
    }
    BasicObj.get = function (id) {
        var obj = this.getIncludingDeleted(id);
        if (!obj || obj.isDeleted()) {
            return null;
        }
        return obj;
    };
    BasicObj.getInWorkspace = function (workspaceId, objId) {
        var obj = this.getIncludingDeletedInWorkspace(workspaceId, objId);
        if (!obj || obj.isDeleted()) {
            return null;
        }
        return obj;
    };
    BasicObj.getIncludingDeleted = function (id) {
        return this.getIncludingDeletedInWorkspace(current_workspace_currentWorkspaceId(), id);
    };
    BasicObj.getIncludingDeletedInWorkspace = function (workspaceId, objId) {
        var objData = getObjData(workspaceId, objId);
        if (!objData) {
            return null;
        }
        var obj = new BasicObj(objData);
        if (obj.isFinallyDeleted()) {
            return null;
        }
        return obj;
    };
    BasicObj.create = function (attributes) {
        return this.createInWorkspace(current_workspace_currentWorkspaceId(), attributes);
    };
    BasicObj.createInWorkspace = function (workspaceId, attributes) {
        var _a = normalizeAttributes(attributes), normalizedId = _a._id, normalizedObjClass = _a._objClass, otherNormalizedAttributes = __rest(_a, ["_id", "_objClass"]);
        if (!normalizedObjClass) {
            throw new ArgumentError('Please provide an obj class as the "_objClass" property.');
        }
        var maybeObjId = normalizedId && normalizedId[0];
        var objId = typeof maybeObjId === 'string' ? maybeObjId : undefined;
        return this.createWithSerializedAttributes(workspaceId, {
            _id: objId || this.generateId(),
            _obj_class: normalizedObjClass[0],
        }, otherNormalizedAttributes);
    };
    BasicObj.createFromFile = function (file, attributes) {
        var basicObj = this.create(attributes);
        var futureBinary = models_binary.upload(file);
        return futureBinary.intoId(basicObj.id()).then(function (binary) {
            basicObj.update({ blob: [binary, ['binary']] });
            return basicObj.finishSaving().then(function () { return basicObj; });
        });
    };
    BasicObj.addChildWithSerializedAttributes = function (parentPath, serializedAttributes) {
        var objId = BasicObj.generateId();
        return this.createWithSerializedAttributes(current_workspace_currentWorkspaceId(), basic_obj_assign(basic_obj_assign({}, serializedAttributes), { _id: objId, _path: parentPath + "/" + objId }));
    };
    BasicObj.createWithSerializedAttributes = function (workspaceId, serializedAttributes, attributes) {
        if (!attributes) {
            var _a = basic_obj_read(extractWidgetlistValues(serializedAttributes), 2), serializedAttributesWithoutWidgetlists = _a[0], widgetlistAttributes = _a[1];
            return this.createWithSerializedAttributes(workspaceId, serializedAttributesWithoutWidgetlists, widgetlistAttributes);
        }
        var objData = createObjData(workspaceId, serializedAttributes._id);
        objData.update(serializedAttributes);
        var obj = new BasicObj(objData);
        obj.update(attributes);
        return obj;
    };
    BasicObj.generateId = function () {
        return randomId();
    };
    BasicObj.all = function () {
        return new basic_obj_search().batchSize(1000);
    };
    BasicObj.root = function () {
        return BasicObj.getByPath('/');
    };
    BasicObj.where = function (fields, operator, value, boost) {
        return new basic_obj_search().and(fields, operator, value, boost);
    };
    BasicObj.getByPath = function (path) {
        var obj = this.where('_path', 'equals', path).first();
        if (!obj) {
            return null;
        }
        return obj;
    };
    BasicObj.getByPermalink = function (permalink) {
        var obj = this.where('_permalink', 'equals', permalink).first();
        if (!obj) {
            return null;
        }
        return obj;
    };
    BasicObj.getAllByPermalink = function (permalink) {
        return this.where('_permalink', 'equals', permalink).take();
    };
    // For test purpose only.
    BasicObj.generateWidgetId = function () {
        return randomHex();
    };
    BasicObj.prototype.id = function () {
        return this.getAttributeData('_id');
    };
    BasicObj.prototype.objClass = function () {
        return this.getAttributeData('_obj_class');
    };
    BasicObj.prototype.obj = function () {
        return this;
    };
    BasicObj.prototype.createdAt = function () {
        return parseStringToDate(this.getAttributeData('_created_at'));
    };
    BasicObj.prototype.createdBy = function () {
        return this.getAttributeData('_created_by') || null;
    };
    BasicObj.prototype.lastChanged = function () {
        var data = this.getAttributeData('_last_changed');
        if (!data) {
            return null;
        }
        return parseStringToDate(data);
    };
    BasicObj.prototype.lastChangedBy = function () {
        return this.getAttributeData('_last_changed_by') || null;
    };
    BasicObj.prototype.version = function () {
        return this.getAttributeData('_version');
    };
    BasicObj.prototype.workspaceId = function () {
        return this.objData.workspaceId();
    };
    BasicObj.prototype.path = function () {
        return this.getAttributeData('_path') || null;
    };
    BasicObj.prototype.permalink = function () {
        return this.getAttributeData('_permalink') || null;
    };
    BasicObj.prototype.parentPath = function () {
        var path = this.path();
        if (!path || path === '/') {
            return null;
        }
        return computeParentPath(path);
    };
    BasicObj.prototype.parent = function () {
        var parentPath = this.parentPath();
        if (!parentPath) {
            return null;
        }
        return BasicObj.getByPath(parentPath);
    };
    BasicObj.prototype.hasConflicts = function () {
        return !!this.getAttributeData('_conflicts');
    };
    BasicObj.prototype.modification = function () {
        if (this.isFinallyDeleted() || this.getAttributeData('_marked_deleted')) {
            return 'deleted';
        }
        return this.getAttributeData('_modification') || null;
    };
    BasicObj.prototype.isModified = function () {
        return !!this.modification();
    };
    BasicObj.prototype.isNew = function () {
        return this.modification() === 'new';
    };
    BasicObj.prototype.isEdited = function () {
        return this.modification() === 'edited';
    };
    BasicObj.prototype.isDeleted = function () {
        return this.modification() === 'deleted';
    };
    BasicObj.prototype.isFinallyDeleted = function () {
        return this.objData.isNonExistent();
    };
    BasicObj.prototype.contentLength = function () {
        return this.metadata().contentLength();
    };
    BasicObj.prototype.contentType = function () {
        return this.metadata().contentType();
    };
    BasicObj.prototype.contentUrl = function () {
        var blob = this.blob();
        if (!blob) {
            return '';
        }
        return blob.url();
    };
    BasicObj.prototype.metadata = function () {
        var blob = this.blob();
        if (!blob) {
            return new metadata_collection();
        }
        return new metadata_collection(blob.id());
    };
    BasicObj.prototype.children = function () {
        var path = this.path();
        if (!path) {
            return [];
        }
        return searchAllChildren(path).take();
    };
    BasicObj.prototype.hasChildren = function () {
        var path = this.path();
        if (!path) {
            return false;
        }
        var search = searchAllChildren(path).batchSize(0);
        return search.count() > 0;
    };
    BasicObj.prototype.orderedChildren = function () {
        var children = this.children();
        var childOrder = this.get('childOrder', 'referencelist');
        if (external_underscore_["isArray"](childOrder)) {
            return external_underscore_["sortBy"](children, function (child) {
                var childOrderIds = external_underscore_["invoke"](childOrder, 'id');
                var childIndex = childOrderIds.indexOf(child.id());
                if (childIndex === -1) {
                    return childOrder.length;
                }
                return childIndex;
            });
        }
        return children;
    };
    BasicObj.prototype.backlinks = function () {
        return BasicObj.where('*', 'linksTo', this).take();
    };
    BasicObj.prototype.ancestors = function () {
        var parentPath = this.parentPath();
        if (!parentPath) {
            return [];
        }
        return computeAncestorPaths(parentPath).map(function (ancestorPath) {
            return BasicObj.getByPath(ancestorPath);
        });
    };
    BasicObj.prototype.isRestricted = function () {
        var restriction = this.restriction();
        return restriction ? restriction.length > 0 : false;
    };
    BasicObj.prototype.restriction = function () {
        return this.getAttributeData('_restriction') || null;
    };
    BasicObj.prototype.restrict = function () {
        if (this.isRestricted()) {
            return;
        }
        this.update({ _restriction: [['_auth']] });
    };
    BasicObj.prototype.unrestrict = function () {
        this.update({ _restriction: null });
    };
    BasicObj.prototype.update = function (attributes) {
        var _this = this;
        var normalizedAttributes = normalizeAttributes(attributes);
        withBatchedUpdates(function () {
            _this.persistWidgets(_this, normalizedAttributes);
            var patch = serialize(normalizedAttributes);
            _this.objData.update(patch);
        });
        this.startLinkResolution();
    };
    BasicObj.prototype.destroy = function () {
        this.update({ _markedDeleted: [true] });
    };
    BasicObj.prototype.insertWidget = function (widget, anchor) {
        var _a;
        var id = widgetIdFromWidgetInsertionAnchor(anchor);
        var placement = this._widgetPlacementFor(id);
        if (placement) {
            var attributeValue = placement.attributeValue, attributeName = placement.attributeName, container = placement.container, index = placement.index;
            var newIndex = anchor.before ? index : index + 1;
            var newAttributeValue = basic_obj_spread(attributeValue.slice(0, newIndex), [
                widget
            ], attributeValue.slice(newIndex));
            container.update((_a = {},
                _a[attributeName] = [newAttributeValue, ['widgetlist']],
                _a));
        }
    };
    BasicObj.prototype.removeWidget = function (widget) {
        var field = this.fieldContainingWidget(widget);
        if (field) {
            var value = field.get();
            var newValue = external_underscore_["reject"](value, function (curWidget) { return curWidget.equals(widget); });
            field.update(newValue);
        }
    };
    BasicObj.prototype.siblingWidget = function (widget, indexOffset) {
        var placement = this._widgetPlacementFor(widget.id());
        if (placement) {
            var attributeValue = placement.attributeValue, index = placement.index;
            return attributeValue[index + indexOffset];
        }
    };
    BasicObj.prototype.copyAsync = function (copyOptions) {
        if (copyOptions === void 0) { copyOptions = {}; }
        assertValidCopyOptions(copyOptions);
        return this._copyAttributes().then(function (copiedAttributes) {
            var serializedAttributes = basic_obj_assign(basic_obj_assign({}, copiedAttributes), copyOptions);
            var obj = BasicObj.createWithSerializedAttributes(current_workspace_currentWorkspaceId(), serializedAttributes);
            return obj.objData.finishSaving().then(function () { return obj; });
        });
    };
    BasicObj.prototype.moveToAsync = function (parentPath) {
        this.moveTo(parentPath);
        return this.finishSaving();
    };
    BasicObj.prototype.moveTo = function (parentPath) {
        this.update({ _path: [parentPath + "/" + this.id()] });
    };
    BasicObj.prototype.markResolvedAsync = function () {
        this.update({ _conflicts: [null] });
        return this.finishSaving();
    };
    BasicObj.prototype.finishSaving = function () {
        var _this = this;
        return this.finishLinkResolution().then(function () { return _this.objData.finishSaving(); });
    };
    BasicObj.prototype.equals = function (otherObj) {
        if (!(otherObj instanceof BasicObj)) {
            return false;
        }
        return this.id() === otherObj.id();
    };
    BasicObj.prototype.widget = function (id) {
        if (this.getWidgetAttribute(id, '_obj_class')) {
            return basic_widget.build(id, this);
        }
        return null;
    };
    BasicObj.prototype.getWidgetAttribute = function (id, attributeName) {
        return this.objData.getWidgetAttribute(id, attributeName);
    };
    BasicObj.prototype.widgets = function () {
        var data = this.objData.getIfExistent();
        if (!data)
            return [];
        var widgetPool = data._widget_pool;
        if (!widgetPool) {
            return [];
        }
        var widgets = [];
        var visitedWidgetIds = {};
        this.collectWidgets(widgets, data, widgetPool, visitedWidgetIds);
        return widgets;
    };
    BasicObj.prototype.fieldContainingWidget = function (widget) {
        var widgetId = widget.id();
        var placement = this._widgetPlacementFor(widgetId);
        if (placement) {
            var container = placement.container, attributeName = placement.attributeName;
            return new basic_field(container, attributeName, ['widgetlist']);
        }
    };
    BasicObj.prototype.generateWidgetId = function () {
        for (var i = 0; i < 10; i++) {
            var id = BasicObj.generateWidgetId();
            if (!this.widget(id)) {
                return id;
            }
        }
        throw new InternalError('Could not generate a new unused widget id.');
    };
    BasicObj.prototype.serializeAttributes = function () {
        var serializedAttributes = _super.prototype.serializeAttributes.call(this, this.getData());
        delete serializedAttributes._conflicts;
        delete serializedAttributes._modification;
        delete serializedAttributes._created_at;
        delete serializedAttributes._created_by;
        delete serializedAttributes._last_changed;
        delete serializedAttributes._last_changed_by;
        return serializedAttributes;
    };
    BasicObj.prototype.slug = function () {
        var title = this.get('title', 'string');
        return convertToSlug(title);
    };
    BasicObj.prototype.getWidgetData = function (id) {
        return this.objData.getWidget(id);
    };
    BasicObj.prototype.startLinkResolution = function () {
        if (!isUsingInMemoryTenant()) {
            getLinkHandler().startLinkResolutionFor(current_workspace_currentWorkspaceId(), this.id());
        }
    };
    BasicObj.prototype.finishLinkResolution = function () {
        return getLinkHandler().finishLinkResolutionFor(current_workspace_currentWorkspaceId(), this.id());
    };
    BasicObj.prototype.toPrettyPrint = function () {
        return "[object " + this.objClass() + " id=\"" + this.id() + "\"]";
    };
    BasicObj.prototype.getAttributeData = function (attributeName) {
        return this.objData.getAttribute(attributeName);
    };
    BasicObj.prototype.getData = function () {
        return this.objData.get();
    };
    BasicObj.prototype.blob = function () {
        return this.get('blob', ['binary']);
    };
    BasicObj.prototype._copyAttributes = function () {
        var objId = BasicObj.generateId();
        var customSerializedAttributes = this.serializeAttributes();
        var uploadPromises = [];
        external_underscore_["each"](customSerializedAttributes, function (typeAndValue, name) {
            if (name[0] === '_') {
                delete customSerializedAttributes[name];
                return;
            }
            if (isBinaryTypeAndValue(typeAndValue)) {
                var value = typeAndValue[1];
                var futureBinary = new future_binary({ idToCopy: value.id });
                var promise = futureBinary
                    .intoId(objId)
                    .then(function (binary) { return ({ name: name, binary: binary }); });
                uploadPromises.push(promise);
            }
        });
        var serializedAttributes = basic_obj_assign(basic_obj_assign({}, customSerializedAttributes), { _id: objId, _obj_class: this.objClass(), _restriction: this.restriction() });
        if (this.path()) {
            serializedAttributes._path = this.parentPath() + "/" + objId;
        }
        return ScrivitoPromise.all(uploadPromises).then(function (binaries) {
            external_underscore_["each"](binaries, function (_a) {
                var name = _a.name, binary = _a.binary;
                var binaryValue = { id: binary.id() };
                serializedAttributes[name] = ['binary', binaryValue];
            });
            return serializedAttributes;
        });
    };
    BasicObj.prototype.collectWidgets = function (memo, objOrWidgetData, widgetPool, visitedWidgetIds) {
        var _this = this;
        external_underscore_["map"](objOrWidgetData, function (attrDictValue, attributeName) {
            if (!attrDictValue) {
                return;
            }
            if (isSystemAttribute(attributeName)) {
                return;
            }
            // Typescript cannot know that once blank and system attribute entries
            // are excluded, what's left must be a custom attribute entry, and the
            // cast is therefore safe.
            var attributeJson = attrDictValue;
            if (isWidgetlistAttributeJson(attributeJson)) {
                return attributeJson[1];
            }
        }).forEach(function (widgetIds) {
            if (widgetIds) {
                widgetIds.forEach(function (widgetId) {
                    if (visitedWidgetIds[widgetId]) {
                        return;
                    }
                    visitedWidgetIds[widgetId] = true;
                    var widget = _this.widget(widgetId);
                    if (!widget) {
                        return;
                    }
                    memo.push(widget);
                    var widgetData = widgetPool[widgetId];
                    _this.collectWidgets(memo, widgetData, widgetPool, visitedWidgetIds);
                });
            }
        });
    };
    BasicObj.prototype._widgetPlacementFor = function (widgetId) {
        var data = this.objData.getIfExistent();
        if (!data)
            return;
        var placement = findWidgetPlacement(data, widgetId);
        if (!placement) {
            return;
        }
        var attributeName = camelCase(placement.attributeName);
        var parentWidgetId = placement.parentWidgetId;
        var container;
        if (parentWidgetId) {
            container = this.widget(parentWidgetId);
            if (!container) {
                return;
            }
        }
        else {
            container = this;
        }
        return {
            container: container,
            attributeName: attributeName,
            attributeValue: container.get(attributeName, ['widgetlist']),
            index: placement.index,
            parentWidgetId: parentWidgetId,
        };
    };
    return BasicObj;
}(basic_attribute_content));
/* harmony default export */ var basic_obj = (basic_obj_BasicObj);
function extractWidgetlistValues(attributes) {
    var serializedAttributes = {
        _id: attributes._id,
    };
    var widgetlistAttributes = {};
    external_underscore_["each"](attributes, function (serializedValue, name) {
        if (isSerializedWidgetlistValue(serializedValue)) {
            var widgets = external_underscore_["map"](serializedValue[1], createWidget);
            var attrName = camelCase(name);
            widgetlistAttributes[attrName] = [widgets, ['widgetlist']];
        }
        else if (name !== '_id') {
            serializedAttributes[name] = serializedValue;
        }
    });
    return [serializedAttributes, widgetlistAttributes];
}
function createWidget(serializedWidgetAttributes) {
    return basic_widget.newWithSerializedAttributes(serializedWidgetAttributes);
}
function searchAllChildren(path) {
    return basic_obj_BasicObj.all().and('_parentPath', 'equals', path);
}
function computeAncestorPaths(path) {
    var ancestorPaths = ['/'];
    if (path === '/') {
        return ancestorPaths;
    }
    var components = path.split('/').slice(1);
    var ancestorPath = '';
    components.forEach(function (component) {
        ancestorPath = ancestorPath + "/" + component;
        ancestorPaths.push(ancestorPath);
    });
    return ancestorPaths;
}
function computeParentPath(path) {
    var pathComponents = path.split('/');
    pathComponents.pop();
    if (pathComponents.length === 1) {
        return '/';
    }
    return pathComponents.join('/');
}
function assertValidCopyOptions(copyOptions) {
    var validCopyOptions = ['_path'];
    if (external_underscore_["difference"](external_underscore_["keys"](copyOptions), validCopyOptions).length) {
        throw new ArgumentError('Currently only "_path" copy option is supported.');
    }
}
var linkHandler;
function getLinkHandler() {
    if (!linkHandler) {
        throw new Error('No Link Handler');
    }
    return linkHandler;
}
function setLinkHandler(handler) {
    linkHandler = handler;
}
function widgetIdFromWidgetInsertionAnchor(anchor) {
    if (isWidgetInsertionBefore(anchor)) {
        return anchor.before.id();
    }
    return anchor.after.id();
}
function isWidgetInsertionBefore(anchor) {
    return !!anchor.before;
}
function isSerializedWidgetlistValue(value) {
    return external_underscore_["isArray"](value) && external_underscore_["first"](value) === 'widgetlist';
}
function isBinaryTypeAndValue(typeAndValue) {
    return typeAndValue[0] === 'binary' && !!typeAndValue[1];
}

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj_facet_value.ts


var basic_obj_facet_value_BasicObjFacetValue = /** @class */ (function () {
    function BasicObjFacetValue(_a) {
        var name = _a.name, count = _a.count, includedObjIds = _a.includedObjIds;
        this._name = name;
        this._count = count;
        this._includedObjIds = includedObjIds;
    }
    BasicObjFacetValue.prototype.name = function () {
        return this._name;
    };
    BasicObjFacetValue.prototype.count = function () {
        return this._count;
    };
    BasicObjFacetValue.prototype.includedObjs = function () {
        return Object(external_underscore_["compact"])(this._includedObjIds.map(function (id) { return basic_obj.get(id); }));
    };
    return BasicObjFacetValue;
}());
/* harmony default export */ var basic_obj_facet_value = (basic_obj_facet_value_BasicObjFacetValue);

// CONCATENATED MODULE: ./scrivito_sdk/models/basic_obj_search.ts
var basic_obj_search_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var basic_obj_search_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(basic_obj_search_read(arguments[i]));
    return ar;
};








var OPERATORS = [
    'contains',
    'containsPrefix',
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
    'linksTo',
    'refersTo',
];
var NEGATABLE_OPERATORS = [
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
];
var BOOSTABLE_OPERATORS = ['contains', 'containsPrefix'];
var DEFAULT_BATCH_SIZE = 100;
var DEFAULT_PARAMS = { query: [] };
var basic_obj_search_BasicObjSearch = /** @class */ (function () {
    function BasicObjSearch(params) {
        if (params === void 0) { params = DEFAULT_PARAMS; }
        var query = [];
        this._query = query.concat(params.query);
        this._boost = params.boost ? params.boost : [];
        this._batchSize = params.batchSize;
        this._offset = params.offset;
        this._orderBy = params.orderBy;
        this._includeDeleted = params.includeDeleted;
    }
    BasicObjSearch.prototype.and = function (attributeOrSearch, operator, value, boost) {
        if (attributeOrSearch instanceof BasicObjSearch) {
            this._query = basic_obj_search_spread(this._query, attributeOrSearch._query);
        }
        else {
            if (operator === undefined) {
                throw new ArgumentError('Missing operator to search with');
            }
            if (value === undefined) {
                throw new ArgumentError('Missing value to search (specify "null" for missing)');
            }
            var field = attributeOrSearch;
            var subQuery = buildSubQuery(field, operator, value);
            if (boost) {
                assertBoostableOperator(operator);
                subQuery.boost = underscoreBoostAttributes(boost);
            }
            this._query.push(subQuery);
        }
        return this;
    };
    BasicObjSearch.prototype.andNot = function (attribute, operator, value) {
        var subQuery = buildSubQuery(attribute, operator, value);
        assertNegatableOperator(operator);
        subQuery.negate = true;
        this._query.push(subQuery);
        return this;
    };
    BasicObjSearch.prototype.boost = function (field, operator, value, factor) {
        var subQuery = buildSubQuery(field, operator, value);
        this._boost.push({ condition: [subQuery], factor: factor });
        return this;
    };
    BasicObjSearch.prototype.offset = function (offset) {
        this._offset = offset || undefined;
        return this;
    };
    BasicObjSearch.prototype.order = function (attributeOrAttributes, direction) {
        var attributes = Array.isArray(attributeOrAttributes)
            ? attributeOrAttributes
            : [[attributeOrAttributes, direction]];
        this._orderBy = attributes.map(function (attr) {
            if (Array.isArray(attr)) {
                var _a = basic_obj_search_read(attr, 2), innerAttr = _a[0], innerDirection = _a[1];
                return normalizeOrderByItem(innerAttr, innerDirection);
            }
            return normalizeOrderByItem(attr);
        });
        return this;
    };
    BasicObjSearch.prototype.batchSize = function (batchSize) {
        this._batchSize = batchSize;
        return this;
    };
    BasicObjSearch.prototype.includeDeleted = function () {
        this._includeDeleted = true;
        return this;
    };
    BasicObjSearch.prototype.count = function () {
        return this.getObjDataQuery().count();
    };
    BasicObjSearch.prototype.first = function () {
        return this.take(1)[0] || null;
    };
    BasicObjSearch.prototype.take = function (count) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkTakeArguments.apply(void 0, basic_obj_search_spread([count], excessArgs));
        var oldBatchSize = this._batchSize;
        try {
            this._batchSize = count === undefined ? 1000 : count;
            return arrayFromIterable(this, count);
        }
        finally {
            this._batchSize = oldBatchSize;
        }
    };
    BasicObjSearch.prototype.iterator = function () {
        var queryIterator = this.getObjDataQuery().iterator();
        return {
            next: function () {
                var nextResult = queryIterator.next();
                if (nextResult.done) {
                    return { done: true };
                }
                return { done: false, value: new basic_obj(nextResult.value) };
            },
        };
    };
    BasicObjSearch.prototype.getObjDataQuery = function () {
        return getObjQuery(current_workspace_currentWorkspaceId(), this.params(), this.getBatchSize());
    };
    BasicObjSearch.prototype.getBatchSize = function () {
        return this._batchSize || DEFAULT_BATCH_SIZE;
    };
    BasicObjSearch.prototype.facet = function (attribute, options) {
        var facetOptions;
        if (options === undefined) {
            facetOptions = {};
        }
        else {
            facetOptions = assertValidFacetOptions(options);
        }
        var facetQuery = new facet_query(current_workspace_currentWorkspaceId(), underscoreAttribute(attribute), facetOptions, this._query);
        return facetQuery
            .result()
            .map(function (facetData) { return new basic_obj_facet_value(facetData); });
    };
    BasicObjSearch.prototype.store = function (objIds, total) {
        storeObjQuery(current_workspace_currentWorkspaceId(), this.params(), objIds, total);
    };
    BasicObjSearch.prototype.params = function () {
        return {
            query: this._query,
            boost: this._boost,
            batchSize: this._batchSize,
            offset: this._offset,
            orderBy: this._orderBy,
            includeDeleted: this._includeDeleted,
        };
    };
    return BasicObjSearch;
}());
/* harmony default export */ var basic_obj_search = (basic_obj_search_BasicObjSearch);
function buildSubQuery(fieldInput, operatorInput, valueInput) {
    var field = convertAttribute(fieldInput);
    var operator = convertOperator(operatorInput);
    var value = convertValue(valueInput);
    return { field: field, operator: operator, value: value };
}
function assertBoostableOperator(operator) {
    if (!Object(external_underscore_["contains"])(BOOSTABLE_OPERATORS, operator)) {
        throw new ArgumentError("Boosting operator \"" + operator + "\" is invalid.");
    }
}
function assertNegatableOperator(operator) {
    if (!Object(external_underscore_["contains"])(NEGATABLE_OPERATORS, operator)) {
        throw new ArgumentError("Negating operator \"" + operator + "\" is invalid.");
    }
}
function convertValue(value) {
    if (Object(external_underscore_["isArray"])(value)) {
        return value.map(function (v) { return convertSingleValue(v); });
    }
    return convertSingleValue(value);
}
function convertSingleValue(value) {
    if (Object(external_underscore_["isDate"])(value)) {
        return formatDateToString(value);
    }
    if (value instanceof basic_obj) {
        return value.id();
    }
    return value;
}
function convertOperator(operator) {
    if (!isValidOperator(operator)) {
        throw new ArgumentError("Operator \"" + operator + "\" is invalid.");
    }
    return underscore(operator);
}
function isValidOperator(operator) {
    return Object(external_underscore_["contains"])(OPERATORS, operator);
}
function convertAttribute(attribute) {
    if (Object(external_underscore_["isArray"])(attribute)) {
        return attribute.map(function (a) { return underscoreAttribute(a); });
    }
    return underscoreAttribute(attribute);
}
function underscoreBoostAttributes(boost) {
    var boostWithUnderscoreAttributes = {};
    Object(external_underscore_["each"])(boost, function (value, attributeName) {
        var underscoredAttributeName = underscoreAttribute(attributeName);
        boostWithUnderscoreAttributes[underscoredAttributeName] = value;
    });
    return boostWithUnderscoreAttributes;
}
function underscoreAttribute(attributeName) {
    if (!isCamelCase(attributeName)) {
        throw new ArgumentError("Attribute name \"" + attributeName + "\" is not camel case.");
    }
    return underscore(attributeName);
}
function normalizeOrderByItem(attribute, direction) {
    if (direction === void 0) { direction = 'asc'; }
    var sortBy = underscoreAttribute(attribute);
    return [sortBy, direction];
}
var VALID_FACET_OPTIONS = ['limit', 'includeObjs'];
function assertValidFacetOptions(options) {
    var invalidOptions = external_underscore_["without"].apply(void 0, basic_obj_search_spread([Object.keys(options)], VALID_FACET_OPTIONS));
    if (invalidOptions.length) {
        throw new ArgumentError('Invalid facet options: ' +
            (prettyPrint(invalidOptions) + ". Valid options: " + VALID_FACET_OPTIONS));
    }
    return options;
}
var PositiveNumber = external_tcomb_validation_.refinement(external_tcomb_validation_.Number, function (x) { return x >= 0; }, 'Number (positive)');
var checkTakeArguments = checkArgumentsFor('objSearch.take', [['count', external_tcomb_validation_.maybe(PositiveNumber)]], {
    docPermalink: 'js-sdk/ObjSearch-take',
});

// CONCATENATED MODULE: ./scrivito_sdk/models/all_modified_from_current_workspace.ts

function allModifiedFromCurrentWorkspace() {
    return new basic_obj_search()
        .and('_modification', 'equals', ['new', 'edited', 'deleted'])
        .includeDeleted();
}

// CONCATENATED MODULE: ./scrivito_sdk/models/get_placement_modification_infos.ts
var get_placement_modification_infos_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};



function getPlacementModificationInfos(field) {
    var widgets = field.get();
    var diffContent = getDiffContent(field);
    if (diffContent) {
        return Object(external_underscore_["compact"])(diffContent.map(function (_a) {
            var _b = get_placement_modification_infos_read(_a, 2), widgetlistModification = _b[0], widgetId = _b[1];
            var widget;
            switch (widgetlistModification) {
                case '+':
                    widget = getWidget(widgets, widgetId);
                    if (widget) {
                        return { widget: widget, modification: 'new' };
                    }
                    break;
                case '=':
                    widget = getWidget(widgets, widgetId);
                    if (widget) {
                        return { widget: widget, modification: null };
                    }
                    break;
                case '-':
                    widget = getWidgetFromPublished(field.obj().id(), widgetId);
                    if (widget) {
                        return {
                            widget: widget,
                            modification: 'deleted',
                        };
                    }
                    break;
            }
        }));
    }
    return widgets.map(function (widget) { return ({ widget: widget, modification: null }); });
}
function getDiffContent(field) {
    var diff = field.getDiff();
    if (isWidgetlistDiff(diff)) {
        return diff.content;
    }
}
function getWidget(widgets, widgetId) {
    return Object(external_underscore_["find"])(widgets, function (widget) { return widget.id() === widgetId; }) || null;
}
function getWidgetFromPublished(objId, widgetId) {
    var obj = basic_obj.getInWorkspace('published', objId);
    if (obj) {
        return obj.widget(widgetId);
    }
    return null;
}

// CONCATENATED MODULE: ./scrivito_sdk/models/index.ts

















// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_adapter_compatible_value.js
// Supported types must not exceed the supported types mentioned here:
// https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm


// (inner) values translated to undefined are removed from arrays and objects they are referred from
function uiAdapterCompatibleValue(value) {
    if (!value) {
        return value;
    }
    switch (typeof value) {
        case 'string':
        case 'number':
        case 'boolean':
            return value;
        case 'object':
            if (value._scrivitoPrivateContent instanceof basic_obj_search) {
                return uiAdapterCompatibleValue(value._scrivitoPrivateContent.params());
            }
            if (Object(external_underscore_["isDate"])(value)) {
                return value;
            }
            if (Object(external_underscore_["isArray"])(value)) {
                return uiCompatibleArrayValue(value);
            }
            return uiCompatibleObjectValue(value);
    }
}
function uiCompatibleArrayValue(array) {
    var copy = [];
    array.forEach(function (item) {
        var compatibleItem = uiAdapterCompatibleValue(item);
        if (compatibleItem !== undefined) {
            copy.push(compatibleItem);
        }
    });
    return copy;
}
function uiCompatibleObjectValue(object) {
    var copy = {};
    Object(external_underscore_["each"])(object, function (value, key) {
        var compatibleValueForKey = uiAdapterCompatibleValue(value);
        if (compatibleValueForKey !== undefined) {
            copy[key] = compatibleValueForKey;
        }
    });
    return copy;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_adapter.ts
var ui_adapter_uiAdapter;
// For test purpose only.
// => allow undefined
function setUiAdapter(newUiAdapter) {
    ui_adapter_uiAdapter = newUiAdapter;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/open_content_browser.ts


function openContentBrowser(options) {
    if (options === void 0) { options = {}; }
    if (!ui_adapter_uiAdapter) {
        throw new Error('Cannot open ContentBrowser without UI present');
    }
    return ui_adapter_uiAdapter.openContentBrowser(uiAdapterCompatibleValue(options));
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/editor_registry.ts
var editor_registry_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var editor_registry_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(editor_registry_read(arguments[i]));
    return ar;
};


var currentId = 0;
var editor_registry_registry = {};
function generateId() {
    currentId++;
    return currentId;
}
function registerEditor(editorClass) {
    var id = generateId();
    editor_registry_registry[id] = editorClass;
    var state = editor_registry_getState();
    var ids = state.get() || [];
    state.set(editor_registry_spread(ids, [id]));
}
function editorRegistrationFor(_a) {
    var type = _a.type, tag = _a.tag;
    var ids = editor_registry_getState().get();
    if (ids) {
        var id = Object(external_underscore_["find"])(ids, function (i) { return editor_registry_registry[i] && editor_registry_registry[i].canEdit({ type: type, tag: tag }); });
        if (id) {
            var editorClass = editor_registry_registry[id];
            return { id: id, editorClass: editorClass };
        }
    }
}
function editor_registry_getState() {
    return appState.subState('editors');
}
// For test purpose only.
function clearEditorRegistry() {
    currentId = 0;
    editor_registry_registry = {};
    editor_registry_getState().clear();
}


// EXTERNAL MODULE: external "history"
var external_history_ = __webpack_require__(14);

// CONCATENATED MODULE: ./scrivito_sdk/app_support/browser_location.ts




var browser_location_history;
var unlistenToHistory;
var lastAction;
var historyChangesCount = 0;
function useHistory(historyToUse) {
    if (historyToUse.createHref({ pathname: '/' }) !== '/') {
        throw new ArgumentError('Expected a history without a preconfigured basename.' +
            ' For further details, see: https://www.scrivito.com/js-sdk/useHistory');
    }
    if (historyToUse === browser_location_history) {
        return;
    }
    var isFirstHistory = !browser_location_history;
    listenToHistory(historyToUse);
    browser_location_history = historyToUse;
    if (!isFirstHistory) {
        historyHasChanged();
    }
}
function getHistoryState() {
    return {
        historyChangesCount: historyChangesCount,
        location: get(),
        isRevisit: lastAction === 'POP',
    };
}
function get() {
    var location = getHistory().location;
    return "" + location.pathname + location.search + location.hash;
}
function getIncludingOrigin() {
    return "" + window_proxy_location().origin + get();
}
function getHistoryChangesCount() {
    return historyChangesCountState().get() || 0;
}
function browser_location_push(path) {
    getHistory().push(path);
}
function replace(path) {
    getHistory().replace(path);
}
function isCurrentHistoryState(historyState) {
    return historyState.historyChangesCount === historyChangesCount;
}
// For test purpose only.
function browser_location_reset() {
    browser_location_history = undefined;
    lastAction = undefined;
    unlistenToHistory = undefined;
    historyChangesCount = 0;
}
// export for test purpose only
function createInitialHistory() {
    return Object(external_history_["createBrowserHistory"])();
}
function ensureHistory() {
    if (!browser_location_history) {
        useHistory(createInitialHistory());
    }
}
function getHistory() {
    ensureHistory();
    return browser_location_history;
}
function listenToHistory(historyToListen) {
    if (unlistenToHistory) {
        unlistenToHistory();
    }
    unlistenToHistory = historyToListen.listen(function (_location, action) {
        historyHasChanged(action);
    });
}
function historyHasChanged(action) {
    lastAction = action;
    historyChangesCount++;
    historyChangesCountState().set(historyChangesCount);
}
function historyChangesCountState() {
    return appState.subState('historyChangesCount');
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/permalink_cache.ts




var cache = {};
var cacheContentStateId;
var cacheDisabled = new context_container();
function setObjIdForPermalink(objId, permalink) {
    if (cacheDisabled.current()) {
        return;
    }
    clearIfOutdated();
    cache[permalink] = objId;
}
function objIdForPermalink(permalink) {
    if (cacheDisabled.current()) {
        return;
    }
    clearIfOutdated();
    return cache[permalink];
}
function withDisabledPermalinkCache(fn) {
    return cacheDisabled.runWith(true, fn);
}
// For test purpose only.
function clearPermalinkCache() {
    cache = {};
    cacheContentStateId = undefined;
}
function clearIfOutdated() {
    var worldContentStateId = loadableWithDefault(undefined, function () {
        return getContentStateId(current_workspace_currentWorkspaceId());
    }) || '';
    if (worldContentStateId !== cacheContentStateId) {
        cache = {};
        cacheContentStateId = worldContentStateId;
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/schema.ts
var schema_assign = (undefined && undefined.__assign) || function () {
    schema_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return schema_assign.apply(this, arguments);
};
var schema_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var schema_Schema = /** @class */ (function () {
    function Schema(definition, parent) {
        var attributes = {};
        if (parent._scrivitoPrivateSchema) {
            external_underscore_["extend"](attributes, parent._scrivitoPrivateSchema.attributes);
        }
        if (definition.attributes) {
            external_underscore_["each"](definition.attributes, function (attrDefinition, name) {
                attributes[name] = normalizeAttributeDefinition(attrDefinition);
            });
        }
        var onlyInside = definition.onlyInside, otherDefinitions = schema_rest(definition, ["onlyInside"]);
        if (onlyInside) {
            this.definition = schema_assign(schema_assign({}, otherDefinitions), { attributes: attributes, onlyInside: external_underscore_["isArray"](onlyInside) ? onlyInside : [onlyInside] });
        }
        else {
            this.definition = schema_assign(schema_assign({}, otherDefinitions), { attributes: attributes });
        }
    }
    Schema.forInstance = function (model) {
        return this.forClass(model.constructor);
    };
    Schema.forClass = function (klass) {
        return klass._scrivitoPrivateSchema;
    };
    Schema.basicFieldFor = function (model, attributeName) {
        var schema = Schema.forInstance(model);
        if (!schema) {
            return;
        }
        var typeInfo = schema.attribute(attributeName);
        if (!typeInfo)
            return;
        return new basic_field(model._scrivitoPrivateContent, attributeName, typeInfo);
    };
    Object.defineProperty(Schema.prototype, "attributes", {
        get: function () {
            return this.definition.attributes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "extractTextAttributes", {
        get: function () {
            return this.definition.extractTextAttributes || [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "name", {
        get: function () {
            return this.definition.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Schema.prototype, "onlyInside", {
        get: function () {
            return this.definition.onlyInside;
        },
        enumerable: true,
        configurable: true
    });
    Schema.prototype.attribute = function (name) {
        return this.attributes[name];
    };
    Schema.prototype.isBinary = function () {
        var blobDefinition = this.attribute('blob');
        if (!blobDefinition)
            return false;
        return blobDefinition[0] === 'binary';
    };
    return Schema;
}());

function isAppClass(object) {
    return !!(object && object._scrivitoPrivateSchema);
}
function normalizeAttributeDefinition(attrDefinition) {
    if (typeof attrDefinition === 'string') {
        return [attrDefinition];
    }
    return [
        attrDefinition[0],
        normalizeAttributeDefinitionOptions(attrDefinition[1]),
    ];
}
function normalizeAttributeDefinitionOptions(options) {
    if (!('only' in options)) {
        return options;
    }
    var only = options.only, otherOptions = schema_rest(options, ["only"]);
    var validClasses = typeof only === 'string' ? [only] : only;
    return schema_assign(schema_assign({}, otherOptions), { validClasses: validClasses });
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/wrap_in_app_class.js



function wrapInAppClass(registry, internalValue) {
    if (Object(external_underscore_["isArray"])(internalValue)) {
        return Object(external_underscore_["map"])(internalValue, function (value) { return wrapInAppClass(registry, value); });
    }
    if (internalValue instanceof basic_obj) {
        return buildAppClassInstance(internalValue, registry.objClassFor(internalValue.objClass()));
    }
    if (internalValue instanceof basic_widget) {
        var objClassName = internalValue.objClass();
        var appClass = registry.widgetClassFor(objClassName);
        return buildAppClassInstance(internalValue, appClass);
    }
    if (internalValue instanceof basic_link) {
        var link = Object.create(registry.defaultClassForLinks.prototype);
        link._scrivitoPrivateContent = internalValue;
        return link;
    }
    return internalValue;
}
function buildAppClassInstance(internalValue, appClass) {
    var externalValue = Object.create(appClass.prototype);
    externalValue._scrivitoPrivateContent = internalValue;
    return externalValue;
}
function unwrapAppClass(value) {
    if (Object(external_underscore_["isArray"])(value)) {
        return Object(external_underscore_["map"])(value, unwrapAppClass);
    }
    if (value && value._scrivitoPrivateContent) {
        return value._scrivitoPrivateContent;
    }
    return value;
}
function unwrapAppAttributes(appAttributes, schema, appClassName) {
    return Object(external_underscore_["mapObject"])(appAttributes, function (value, name) {
        if (isSystemAttribute(name)) {
            return [value];
        }
        var typeInfo = schema.attribute(name);
        if (!typeInfo) {
            throw new ArgumentError("Attribute \"" + name + "\" is not defined for CMS object " +
                ("class \"" + appClassName + "\"."));
        }
        var unwrappedValue = unwrapAppClass(value);
        return [unwrappedValue, typeInfo];
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/app_model_accessor.js




var app_model_accessor_AppModelAccessor = /** @class */ (function () {
    function AppModelAccessor(registry) {
        this._registry = registry;
    }
    AppModelAccessor.prototype.getObj = function (modelClass, id) {
        var instance = basic_obj.get(id);
        return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    };
    AppModelAccessor.prototype.getObjIncludingDeleted = function (modelClass, id) {
        var instance = basic_obj.getIncludingDeleted(id);
        return this._checkObjClassAndWrapInAppClass(modelClass, instance);
    };
    AppModelAccessor.prototype.read = function (model, attributeName) {
        var basicField = schema_Schema.basicFieldFor(model, attributeName);
        if (!basicField) {
            return null;
        }
        var internalValue = basicField.get();
        return wrapInAppClass(this._registry, internalValue);
    };
    AppModelAccessor.prototype.update = function (model, attributes) {
        var appClassName = this._registry.objClassNameFor(model.constructor);
        if (!appClassName) {
            var baseClass = void 0;
            if (model.constructor === this._registry.defaultClassForObjs) {
                baseClass = 'Obj';
            }
            else {
                baseClass = 'Widget';
            }
            throw new ArgumentError("Updating is not supported on the base class \"" + baseClass + "\".");
        }
        if (attributes.constructor !== Object) {
            throw new ArgumentError('The provided attributes are invalid. They have ' +
                'to be an Object with valid Scrivito attribute values.');
        }
        var schema = schema_Schema.forInstance(model);
        var attributesWithTypeInfo = unwrapAppAttributes(attributes, schema, appClassName);
        model._scrivitoPrivateContent.update(attributesWithTypeInfo);
    };
    AppModelAccessor.prototype.wrapInAppClass = function (instance) {
        return wrapInAppClass(this._registry, instance);
    };
    AppModelAccessor.prototype._checkObjClassAndWrapInAppClass = function (modelClass, instance) {
        if (!instance) {
            return null;
        }
        var objClassName = this._registry.objClassNameFor(modelClass);
        if (objClassName && objClassName !== instance.objClass()) {
            throw new ResourceNotFoundError("Obj with id \"" + instance.id() + "\" is not of type \"" + objClassName + "\".");
        }
        return this.wrapInAppClass(instance);
    };
    return AppModelAccessor;
}());


// CONCATENATED MODULE: ./scrivito_sdk/realm/attribute_content_factory.js

function AttributeContentFactory(appModelAccessor) {
    var AttributeContent = /** @class */ (function () {
        function AttributeContent() {
        }
        // public API
        AttributeContent.prototype.id = function () {
            return this._scrivitoPrivateContent.id();
        };
        // public API
        AttributeContent.prototype.objClass = function () {
            return this._scrivitoPrivateContent.objClass();
        };
        /**
         * Resolves when all previous updates have been persisted.
         * If an update fails the promise is rejected.
         *
         * @returns {Promise}
         */
        AttributeContent.prototype.finishSaving = function () {
            return this._scrivitoPrivateContent.finishSaving();
        };
        // public API
        AttributeContent.prototype.get = function (attributeName) {
            if (!isCamelCase(attributeName)) {
                throw new ArgumentError('Attribute names have to be in camel case.');
            }
            if (isSystemAttribute(attributeName)) {
                throw new ArgumentError("Attribute name \"" + attributeName + "\" is not a valid custom attribute name.");
            }
            return appModelAccessor.read(this, attributeName);
        };
        // public API
        AttributeContent.prototype.update = function (attributes) {
            appModelAccessor.update(this, attributes);
        };
        return AttributeContent;
    }());
    return AttributeContent;
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/initial_attributes_for.ts
function initialAttributesFor(providedAttributes, registry, schema, appClassName) {
    var initialAttributes = {};
    Object.keys(schema.attributes).forEach(function (attributeName) {
        if (!Object.prototype.hasOwnProperty.call(providedAttributes, attributeName)) {
            var initialValue = registry.initialContentFor(appClassName, attributeName);
            if (initialValue !== undefined) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    return initialAttributes;
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_factory.js
var obj_factory_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function ObjFactory(registry) {
    var appModelAccessor = new app_model_accessor_AppModelAccessor(registry);
    function buildObjSearch(objClassName, batchSize) {
        var search = new registry.ObjSearch();
        if (objClassName) {
            search.and('_objClass', 'equals', objClassName);
        }
        if (batchSize) {
            search._scrivitoPrivateContent.batchSize(batchSize);
        }
        return search;
    }
    function wrap(response) {
        return wrapInAppClass(registry, response);
    }
    // public API
    var Obj = /** @class */ (function (_super) {
        obj_factory_extends(Obj, _super);
        function Obj() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        // public API
        Obj.get = function (id) {
            return appModelAccessor.getObj(this, id);
        };
        // public API
        Obj.getIncludingDeleted = function (id) {
            return appModelAccessor.getObjIncludingDeleted(this, id);
        };
        // public API
        Obj.getByPath = function (path) {
            return wrap(basic_obj.getByPath(path));
        };
        // public API
        Obj.getByPermalink = function (permalink) {
            return wrap(basic_obj.getByPermalink(permalink));
        };
        // public API
        Obj.all = function () {
            var objClassName = registry.objClassNameFor(this);
            return buildObjSearch(objClassName, 1000);
        };
        // public API
        Obj.root = function () {
            return wrap(basic_obj.root());
        };
        // public API
        Obj.where = function (attribute, operator, value, boost) {
            if (boost === void 0) { boost = null; }
            var objClassName = registry.objClassNameFor(this);
            return buildObjSearch(objClassName).and(attribute, operator, value, boost);
        };
        // public API
        Obj.create = function (attributes) {
            if (attributes === void 0) { attributes = {}; }
            assertValidCreateAttributes(attributes, this._appClassName());
            var attributesForCreate = this._prepareAttributesForCreate(attributes);
            var basicObj = basic_obj.create(attributesForCreate);
            return wrap(basicObj);
        };
        // public API
        Obj.createFromFile = function (file, attributes) {
            if (attributes === void 0) { attributes = {}; }
            assertValidFile(file);
            assertValidCreateFromFileAttributes(attributes, this._appClassName(), this._schema());
            var attributesForCreate = this._prepareAttributesForCreate(attributes);
            return basic_obj.createFromFile(file, attributesForCreate).then(function (basicObj) {
                return wrap(basicObj);
            });
        };
        // public API
        Obj.prototype.createdAt = function () {
            return this._scrivitoPrivateContent.createdAt();
        };
        // public API
        Obj.prototype.lastChanged = function () {
            return this._scrivitoPrivateContent.lastChanged();
        };
        // public API
        Obj.prototype.path = function () {
            return this._scrivitoPrivateContent.path();
        };
        // public API
        Obj.prototype.parent = function () {
            return wrap(this._scrivitoPrivateContent.parent());
        };
        // public API
        Obj.prototype.ancestors = function () {
            return wrap(this._scrivitoPrivateContent.ancestors());
        };
        // public API
        Obj.prototype.backlinks = function () {
            return wrap(this._scrivitoPrivateContent.backlinks());
        };
        // public API
        Obj.prototype.children = function () {
            return wrap(this._scrivitoPrivateContent.children());
        };
        Obj.prototype.orderedChildren = function () {
            return wrap(this._scrivitoPrivateContent.orderedChildren());
        };
        // public API
        Obj.prototype.permalink = function () {
            return this._scrivitoPrivateContent.permalink();
        };
        // public API
        Obj.prototype.slug = function () {
            return this._scrivitoPrivateContent.slug();
        };
        // public API
        Obj.prototype.isBinary = function () {
            var schema = schema_Schema.forInstance(this);
            if (!schema) {
                return false;
            }
            return schema.isBinary();
        };
        Obj.prototype.isRestricted = function () {
            return this._scrivitoPrivateContent.isRestricted();
        };
        // public API
        Obj.prototype.contentLength = function () {
            if (this.isBinary()) {
                return this._scrivitoPrivateContent.contentLength();
            }
            return 0;
        };
        // public API
        Obj.prototype.contentType = function () {
            if (this.isBinary()) {
                return this._scrivitoPrivateContent.contentType();
            }
            return '';
        };
        // public API
        Obj.prototype.contentUrl = function () {
            if (this.isBinary()) {
                return this._scrivitoPrivateContent.contentUrl();
            }
            return '';
        };
        // public API
        Obj.prototype.metadata = function () {
            if (this.isBinary()) {
                return this._scrivitoPrivateContent.metadata();
            }
            return new metadata_collection();
        };
        // public API
        Obj.prototype.restrict = function () {
            this._scrivitoPrivateContent.restrict();
        };
        // public API
        Obj.prototype.unrestrict = function () {
            this._scrivitoPrivateContent.unrestrict();
        };
        // public API
        Obj.prototype.widget = function (id) {
            return wrap(this._scrivitoPrivateContent.widget(id));
        };
        // public API
        Obj.prototype.widgets = function () {
            return wrap(this._scrivitoPrivateContent.widgets());
        };
        // public API
        Obj.prototype.destroy = function () {
            this._scrivitoPrivateContent.destroy();
        };
        Obj._prepareAttributesForCreate = function (appAttributes) {
            var schema = this._schema();
            var appClassName = this._appClassName();
            var initialAttributes = initialAttributesFor(appAttributes, registry, schema, appClassName);
            var systemAttributes = { _objClass: appClassName };
            var createAttributes = Object(external_underscore_["extend"])({}, appAttributes, initialAttributes, systemAttributes);
            return unwrapAppAttributes(createAttributes, schema, appClassName);
        };
        Obj._appClassName = function () {
            return registry.objClassNameFor(this);
        };
        Obj._schema = function () {
            return schema_Schema.forClass(this);
        };
        return Obj;
    }(AttributeContentFactory(appModelAccessor)));
    return Obj;
}
function assertValidCreateAttributes(attributes, appClassName) {
    if (!appClassName) {
        throw new ArgumentError('Creating CMS objects is not supported for the class Obj or abstract classes.');
    }
    if (attributes.constructor !== Object) {
        throw new ArgumentError('The provided attributes are invalid. They have ' +
            'to be an Object with valid Scrivito attribute values.');
    }
    if (attributes._objClass) {
        throw new ArgumentError('Invalid attribute "_objClass". ' +
            ("\"" + attributes._objClass + ".create\" will automatically set the CMS object class ") +
            'correctly.');
    }
}
function assertValidCreateFromFileAttributes(attributes, appClassName, schema) {
    assertValidCreateAttributes(attributes, appClassName);
    if (Object.prototype.hasOwnProperty.call(attributes, 'blob')) {
        throw new ArgumentError('Setting attribute "blob" is not allowed when creating CMS objects from file, ' +
            'because the file will be assigned to that attribute');
    }
    if (!schema.isBinary()) {
        throw new ArgumentError('Creating CMS objects from file is only available for classes with a binary attribute "blob"');
    }
}
function assertValidFile(file) {
    if (!FileType.is(file)) {
        if (BlobType.is(file)) {
            throw new ArgumentError('Creating CMS objects from file is only available with instances of "File", ' +
                'but an instance of "Blob" is given');
        }
        throw new ArgumentError('Creating CMS objects from file is only available with instances of "File"');
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_facet_value.ts

var obj_facet_value_ObjFacetValue = /** @class */ (function () {
    function ObjFacetValue(registry, basicObjFacetValue) {
        this._registry = registry;
        this._basicObjFacetValue = basicObjFacetValue;
    }
    // public API
    ObjFacetValue.prototype.name = function () {
        return this._basicObjFacetValue.name();
    };
    // public API
    ObjFacetValue.prototype.count = function () {
        return this._basicObjFacetValue.count();
    };
    // public API
    ObjFacetValue.prototype.includedObjs = function () {
        var response = this._basicObjFacetValue.includedObjs();
        return wrapInAppClass(this._registry, response);
    };
    return ObjFacetValue;
}());


// CONCATENATED MODULE: ./scrivito_sdk/realm/obj_search_factory.ts





function ObjSearchFactory(registry) {
    // public API
    var ObjSearch = /** @class */ (function () {
        function ObjSearch() {
            this._scrivitoPrivateContent = new basic_obj_search();
        }
        // public API
        ObjSearch.prototype.and = function (fieldOrSearchToExtendBy, operator, value, boost) {
            if (fieldOrSearchToExtendBy instanceof ObjSearch) {
                var search = fieldOrSearchToExtendBy;
                this._scrivitoPrivateContent.and(search._scrivitoPrivateContent);
            }
            else {
                if (operator === undefined) {
                    throw new ArgumentError('Missing operator to search with');
                }
                if (value === undefined) {
                    throw new ArgumentError('Missing value to search (specify "null" for missing)');
                }
                var unwrappedValue = unwrapAppClassValue(value);
                // typescript doesn't know that instanceof ObjSearch captures ObjSearchInstance
                var field = fieldOrSearchToExtendBy;
                this._scrivitoPrivateContent.and(field, operator, unwrappedValue, boost);
            }
            return this;
        };
        // public API
        ObjSearch.prototype.andNot = function (field, operator, value) {
            var unwrappedValue = unwrapAppClassValue(value);
            this._scrivitoPrivateContent.andNot(field, operator, unwrappedValue);
            return this;
        };
        // public API
        ObjSearch.prototype.boost = function (field, operator, value, factor) {
            this._scrivitoPrivateContent.boost(field, operator, unwrapAppClassValue(value), factor);
            return this;
        };
        // public API
        ObjSearch.prototype.facet = function (attribute, options) {
            var basicFacets = this._scrivitoPrivateContent.facet(attribute, options);
            return basicFacets.map(function (facetValue) { return new obj_facet_value_ObjFacetValue(registry, facetValue); });
        };
        // public API
        ObjSearch.prototype.first = function () {
            var basicObj = this._scrivitoPrivateContent.first();
            if (!basicObj) {
                return null;
            }
            return wrapInAppClass(registry, basicObj);
        };
        // public API
        ObjSearch.prototype.take = function (count) {
            var basicObjs = this._scrivitoPrivateContent.take(count);
            return basicObjs.map(function (obj) { return wrapInAppClass(registry, obj); });
        };
        // public API
        ObjSearch.prototype.toArray = function () {
            var basicObjs = this._scrivitoPrivateContent.take();
            return basicObjs.map(function (obj) { return wrapInAppClass(registry, obj); });
        };
        // public API
        ObjSearch.prototype.offset = function (offset) {
            this._scrivitoPrivateContent.offset(offset);
            return this;
        };
        ObjSearch.prototype.order = function (attributeOrAttributes, direction) {
            if (Array.isArray(attributeOrAttributes)) {
                if (direction !== undefined) {
                    throw new ArgumentError('Direction can not be set independent of attributes.');
                }
                this._scrivitoPrivateContent.order(attributeOrAttributes);
                return this;
            }
            this._scrivitoPrivateContent.order(attributeOrAttributes, direction);
            return this;
        };
        // public API
        ObjSearch.prototype.count = function () {
            return this._scrivitoPrivateContent.count();
        };
        return ObjSearch;
    }());
    // check if the environment supports ES6 iterables
    // (either native or through some kind of polyfill)
    // if yes, make ObjSearch an ES6 iterable.
    if (typeof Symbol === 'function') {
        var iteratorSymbol = Symbol.iterator;
        if (iteratorSymbol) {
            // tslint:disable-next-line:no-any // type 'ObjSearch' has no index signature
            var proto = ObjSearch.prototype;
            // public API
            proto[iteratorSymbol] = function iterator() {
                var basicObjsIterator = this._scrivitoPrivateContent.iterator();
                return {
                    next: function () {
                        var iteratorResult = basicObjsIterator.next();
                        if (iteratorResult.done) {
                            return { done: iteratorResult.done };
                        }
                        return {
                            done: iteratorResult.done,
                            value: wrapInAppClass(registry, iteratorResult.value),
                        };
                    },
                };
            };
        }
    }
    return ObjSearch;
}
// A direct call to `unwrapAppClass` is unable to infer a correct return value type for input `Obj[]`
function unwrapAppClassValue(value) {
    if (external_underscore_["isArray"](value)) {
        return value.map(function (v) { return unwrapAppClass(v); });
    }
    return unwrapAppClass(value);
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/widget_factory.js
var widget_factory_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();








function WidgetFactory(registry) {
    var appModelAccessor = new app_model_accessor_AppModelAccessor(registry);
    // public API
    var Widget = /** @class */ (function (_super) {
        widget_factory_extends(Widget, _super);
        // public API
        function Widget(attributes) {
            if (attributes === void 0) { attributes = {}; }
            var _this = _super.call(this) || this;
            var schema = schema_Schema.forInstance(_this);
            var appClassName = registry.objClassNameFor(_this.constructor);
            var attributesForConstructor = _this._prepareAttributesForConstructor(attributes, schema, appClassName);
            var basicWidget = new basic_widget(attributesForConstructor);
            basicWidget.onDidPersist(function (copiedWidget) {
                var appWidget = wrapInAppClass(registry, copiedWidget);
                var initialAttributes = initialAttributesFor(attributesForConstructor, registry, schema, appClassName);
                appWidget.update(initialAttributes);
            });
            _this._scrivitoPrivateContent = basicWidget;
            return _this;
        }
        // public API
        Widget.prototype.obj = function () {
            var basicObj = this._scrivitoPrivateContent.obj();
            return wrapInAppClass(registry, basicObj);
        };
        // public API
        Widget.prototype.copy = function () {
            var appClass = registry.widgetClassFor(this.objClass());
            var basicWidget = this._scrivitoPrivateContent.copy();
            return buildAppClassInstance(basicWidget, appClass);
        };
        // public API
        Widget.prototype.destroy = function () {
            this._scrivitoPrivateContent.remove();
        };
        // public API
        Widget.prototype.container = function () {
            var container = this._scrivitoPrivateContent.container();
            return wrapInAppClass(registry, container);
        };
        Widget.prototype._prepareAttributesForConstructor = function (appAttributes, schema, appClassName) {
            assertValidConstructorAttributes(appClassName, appAttributes);
            var systemAttributes = { _objClass: appClassName };
            var constructorAttributes = Object(external_underscore_["extend"])({}, appAttributes, systemAttributes);
            return unwrapAppAttributes(constructorAttributes, schema, appClassName);
        };
        return Widget;
    }(AttributeContentFactory(appModelAccessor)));
    return Widget;
}
function assertValidConstructorAttributes(appClassName, attributes) {
    if (!appClassName) {
        throw new ArgumentError('Creating widgets is not supported for the class Widget or abstract classes.');
    }
    if (attributes.constructor !== Object) {
        throw new ArgumentError('The provided attributes are invalid. They have ' +
            'to be an Object with valid Scrivito attribute values.');
    }
    if (attributes._objClass) {
        throw new ArgumentError('Invalid attribute "_objClass". ' +
            ("\"new " + attributes._objClass + "\" will automatically set the CMS object class correctly."));
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/link_factory.ts
var link_factory_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var link_factory_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(link_factory_read(arguments[i]));
    return ar;
};




function LinkFactory(registry) {
    // public API
    var Link = /** @class */ (function () {
        // public API
        function Link(attributes) {
            var basicAttributes = toBasicAttributes(attributes);
            this._scrivitoPrivateContent = new basic_link(basicAttributes);
        }
        // public API
        Link.prototype.title = function () {
            return this._scrivitoPrivateContent.title();
        };
        // public API
        Link.prototype.query = function () {
            return this._scrivitoPrivateContent.query();
        };
        // public API
        Link.prototype.hash = function () {
            return this._scrivitoPrivateContent.hash();
        };
        // public API
        Link.prototype.rel = function () {
            return this._scrivitoPrivateContent.rel();
        };
        // public API
        Link.prototype.target = function () {
            return this._scrivitoPrivateContent.target();
        };
        // public API
        Link.prototype.url = function () {
            return this._scrivitoPrivateContent.url();
        };
        // public API
        Link.prototype.obj = function () {
            var obj = this._scrivitoPrivateContent.obj();
            if (!obj) {
                return null;
            }
            return wrapInAppClass(registry, obj);
        };
        // public API
        Link.prototype.queryParameters = function () {
            return this._scrivitoPrivateContent.queryParameters();
        };
        // public API
        Link.prototype.copy = function (attributes) {
            var basicLink = this._scrivitoPrivateContent.copy(toBasicAttributes(attributes));
            var link = Object.create(registry.defaultClassForLinks.prototype);
            link._scrivitoPrivateContent = basicLink;
            return link;
        };
        // public API
        Link.prototype.isExternal = function () {
            return this._scrivitoPrivateContent.isExternal();
        };
        // public API
        Link.prototype.isInternal = function () {
            return this._scrivitoPrivateContent.isInternal();
        };
        return Link;
    }());
    return Link;
}
var ALLOWED_ATTRIBUTES = [
    'hash',
    'obj',
    'query',
    'rel',
    'target',
    'title',
    'url',
];
function assertValidPublicAttributes(attributes) {
    var unknownAttrs = external_underscore_["without"].apply(external_underscore_, link_factory_spread([external_underscore_["keys"](attributes)], ALLOWED_ATTRIBUTES));
    if (!external_underscore_["isEmpty"](unknownAttrs)) {
        throw new ArgumentError("Unexpected attributes " + prettyPrint(unknownAttrs) + "." +
            (" Available attributes: " + prettyPrint(ALLOWED_ATTRIBUTES)));
    }
}
function toBasicAttributes(attributes) {
    assertValidPublicAttributes(attributes);
    if (external_underscore_["has"](attributes, 'obj')) {
        return external_underscore_["extend"]({}, attributes, {
            objId: objIdFromObjValue(attributes.obj),
        });
    }
    return attributes;
}
function objIdFromObjValue(obj) {
    if (!obj) {
        return null;
    }
    return unwrapAppClass(obj).id();
}

// EXTERNAL MODULE: ./scrivito_sdk/realm/attribute_types.ts
var attribute_types = __webpack_require__(10);

// CONCATENATED MODULE: ./scrivito_sdk/realm/registry.ts





var registry_Registry = /** @class */ (function () {
    function Registry() {
        this.mapping = {};
        this.defaultClassForObjs = ObjFactory(this);
        this.defaultClassForWidgets = WidgetFactory(this);
        this.defaultClassForLinks = LinkFactory(this);
        this.ObjSearch = ObjSearchFactory(this);
    }
    Registry.prototype.register = function (name, klass) {
        this.mapping[name] = klass;
    };
    Registry.prototype.getClass = function (name) {
        return this.mapping[name] || null;
    };
    Registry.prototype.allObjClasses = function () {
        var _this = this;
        return external_underscore_["pick"](this.mapping, function (modelClass) {
            return _this.defaultClassForObjs.isPrototypeOf(modelClass);
        });
    };
    Registry.prototype.allWidgetClasses = function () {
        var _this = this;
        return external_underscore_["pick"](this.mapping, function (modelClass) {
            return _this.defaultClassForWidgets.isPrototypeOf(modelClass);
        });
    };
    Registry.prototype.objClassFor = function (name) {
        return this.appClassFor(name, this.defaultClassForObjs);
    };
    Registry.prototype.widgetClassFor = function (name) {
        return this.appClassFor(name, this.defaultClassForWidgets);
    };
    Registry.prototype.objClassNameFor = function (modelClass) {
        return external_underscore_["findKey"](this.mapping, function (klass) { return klass === modelClass; });
    };
    Registry.prototype.setInitialContentFor = function (initialContentFor) {
        this.initialContentForFunction = initialContentFor;
    };
    Registry.prototype.initialContentFor = function (className, attributeName) {
        if (this.initialContentForFunction) {
            return this.initialContentForFunction(className, attributeName);
        }
    };
    Registry.prototype.appClassFor = function (name, baseClass) {
        var appClass = this.getClass(name);
        if (appClass && baseClass.isPrototypeOf(appClass)) {
            return appClass;
        }
        return baseClass;
    };
    return Registry;
}());


// CONCATENATED MODULE: ./scrivito_sdk/realm/assert_valid_extract_text_attributes.ts
var assert_valid_extract_text_attributes_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};


var ATTRIBUTE_TYPES_WHITELIST = ['string', 'html', 'widgetlist'];
function assertValidObjExtractTextAttributes(schema) {
    schema.extractTextAttributes.forEach(function (attribute) {
        if (attribute.substring(0, 5) === 'blob:') {
            return assertValidBinaryAttribute(schema, attribute);
        }
        assertValidExtractTextAttribute(attribute, schema.attribute(attribute));
    });
}
function assertValidWidgetExtractTextAttributes(schema) {
    schema.extractTextAttributes.forEach(function (attribute) {
        if (attribute.substring(0, 5) === 'blob:') {
            throw new ArgumentError("Invalid value for \"extractTextAttributes\": " + attribute + " is not supported.");
        }
        assertValidExtractTextAttribute(attribute, schema.attribute(attribute));
    });
}
function assertValidBinaryAttribute(schema, extractTextAttribute) {
    if (extractTextAttribute === 'blob:text') {
        if (schema.isBinary())
            return;
        throw new ArgumentError("Invalid value for \"extractTextAttributes\": blob:text is only supported for binary objs.");
    }
    throw new ArgumentError("Invalid value for \"extractTextAttributes\": " + extractTextAttribute + " is not supported.");
}
function assertValidExtractTextAttribute(attribute, definition) {
    if (!definition) {
        throw new ArgumentError("Invalid value for \"extractTextAttributes\": Attribute " + attribute + " is not defined.");
    }
    var _a = assert_valid_extract_text_attributes_read(definition, 1), attributeType = _a[0];
    if (Object(external_underscore_["contains"])(ATTRIBUTE_TYPES_WHITELIST, attributeType))
        return;
    throw new ArgumentError("Invalid value for \"extractTextAttributes\": Attribute " + attribute + " of type " + attributeType + " is not supported.");
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/app_class_api.ts
var app_class_api_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




function createObjClass(registry, definition) {
    if (definition.extend &&
        !isOrExtends(definition.extend, registry.defaultClassForObjs)) {
        throw new ArgumentError('Invalid value for "extend": not a Scrivito Obj class');
    }
    var baseClass = definition.extend || registry.defaultClassForObjs;
    var schema = new schema_Schema(definition, baseClass);
    assertValidObjExtractTextAttributes(schema);
    // we can only use the non-specific names `Obj` or `Widget` for AppClasses.
    // it's not possible to dynamically name a class in ES5 (or anything transpiled to ES5)
    // compare: // https://stackoverflow.com/questions/5871040
    return /** @class */ (function (_super) {
        app_class_api_extends(Obj, _super);
        function Obj() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Obj, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: true,
            configurable: true
        });
        return Obj;
    }(baseClass));
}
function createWidgetClass(registry, definition) {
    if (definition.extend &&
        !isOrExtends(definition.extend, registry.defaultClassForWidgets)) {
        throw new ArgumentError('Invalid value for "extend": not a Scrivito Widget class');
    }
    var baseClass = definition.extend || registry.defaultClassForWidgets;
    var schema = new schema_Schema(definition, baseClass);
    assertValidWidgetExtractTextAttributes(schema);
    return /** @class */ (function (_super) {
        app_class_api_extends(Widget, _super);
        function Widget() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(Widget, "_scrivitoPrivateSchema", {
            get: function () {
                return schema;
            },
            enumerable: true,
            configurable: true
        });
        return Widget;
    }(baseClass));
}
function provideObjClass(registry, name, appClassOrDefinition) {
    var appClass = buildObjClassFrom(registry, name, appClassOrDefinition);
    registry.register(name, appClass);
    return appClass;
}
function buildObjClassFrom(registry, name, appClassOrDefinition) {
    if (isAppClass(appClassOrDefinition)) {
        return appClassOrDefinition;
    }
    var definition = Object(external_underscore_["extend"])({}, appClassOrDefinition, { name: name });
    return createObjClass(registry, definition);
}
function provideWidgetClass(registry, name, appClassOrDefinition) {
    var appClass = buildWidgetClassFrom(registry, name, appClassOrDefinition);
    registry.register(name, appClass);
    return appClass;
}
function buildWidgetClassFrom(registry, name, appClassOrDefinition) {
    if (isAppClass(appClassOrDefinition)) {
        return appClassOrDefinition;
    }
    var definition = Object(external_underscore_["extend"])({}, appClassOrDefinition, { name: name });
    return createWidgetClass(registry, definition);
}
function isOrExtends(maybeClass, klass) {
    if (!maybeClass) {
        return false;
    }
    if (maybeClass === klass) {
        return true;
    }
    return maybeClass.prototype instanceof klass;
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/app_class_api_check.ts


var ObjClassType = external_tcomb_validation_.refinement(external_tcomb_validation_.Function, isAppClass, 'ObjClass');
var ObjClassDefinitionType = external_tcomb_validation_.interface({
    attributes: external_tcomb_validation_.maybe(external_tcomb_validation_.dict(external_tcomb_validation_.refinement(external_tcomb_validation_.String, isCustomAttributeName, 'String (alphanumeric, starting with a lower-case character)'), external_tcomb_validation_.union([
        external_tcomb_validation_.enums.of([
            'binary',
            'date',
            'float',
            'html',
            'integer',
            'link',
            'linklist',
            'reference',
            'referencelist',
            'string',
            'stringlist',
            'widgetlist',
        ]),
        external_tcomb_validation_.tuple([
            external_tcomb_validation_.enums.of(['enum', 'multienum']),
            external_tcomb_validation_.interface({
                values: external_tcomb_validation_.list(external_tcomb_validation_.String),
            }),
        ]),
        external_tcomb_validation_.tuple([
            external_tcomb_validation_.enums.of(['reference', 'referencelist']),
            external_tcomb_validation_.interface({
                only: external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String)]),
            }),
        ]),
        external_tcomb_validation_.tuple([
            external_tcomb_validation_.enums.of(['widgetlist']),
            external_tcomb_validation_.interface({
                only: external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String)]),
            }),
        ]),
    ]), 'Attributes Specification')),
    extractTextAttributes: external_tcomb_validation_.maybe(external_tcomb_validation_.list(external_tcomb_validation_.String)),
    extend: external_tcomb_validation_.maybe(ObjClassType),
});
var WidgetClassType = external_tcomb_validation_.refinement(external_tcomb_validation_.Function, isAppClass, 'WidgetClass');
var WidgetClassDefinitionType = external_tcomb_validation_.interface({
    attributes: ObjClassDefinitionType.meta.props.attributes,
    extractTextAttributes: external_tcomb_validation_.maybe(external_tcomb_validation_.list(external_tcomb_validation_.String)),
    extend: external_tcomb_validation_.maybe(WidgetClassType),
    onlyInside: external_tcomb_validation_.maybe(external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.Array])),
});
var checkCreateObjClass = checkArgumentsFor('createObjClass', [['options', ObjClassDefinitionType]], {
    docPermalink: 'js-sdk/createObjClass',
});
var checkCreateWidgetClass = checkArgumentsFor('createWidgetClass', [['options', WidgetClassDefinitionType]], {
    docPermalink: 'js-sdk/createWidgetClass',
});
var ObjClassOrDefinitionType = external_tcomb_validation_.union([
    ObjClassDefinitionType,
    ObjClassType,
]);
var checkProvideObjClass = checkArgumentsFor('provideObjClass', [['name', external_tcomb_validation_.String], ['objClassOrDefinition', ObjClassOrDefinitionType]], {
    docPermalink: 'js-sdk/provideObjClass',
});
var WidgetClassOrDefinitionType = external_tcomb_validation_.union([
    WidgetClassDefinitionType,
    WidgetClassType,
]);
var checkProvideWidgetClass = checkArgumentsFor('provideWidgetClass', [
    ['name', external_tcomb_validation_.String],
    ['widgetClassOrDefinition', WidgetClassOrDefinitionType],
], {
    docPermalink: 'js-sdk/provideWidgetClass',
});
function isCustomAttributeName(name) {
    return /^[a-z](_+[A-Z0-9]|[A-Za-z0-9])*$/.test(name);
}

// CONCATENATED MODULE: ./scrivito_sdk/realm/realm.ts
var realm_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var realm_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(realm_read(arguments[i]));
    return ar;
};



var realm_Realm = /** @class */ (function () {
    function Realm() {
        this._registry = new registry_Registry();
    }
    Realm.init = function () {
        var realm = new Realm();
        var context = {
            Obj: realm.Obj,
            Widget: realm.Widget,
            Link: realm.Link,
            ObjSearch: realm.ObjSearch,
            provideObjClass: realm.provideObjClass.bind(realm),
            provideWidgetClass: realm.provideWidgetClass.bind(realm),
            createObjClass: realm.createObjClass.bind(realm),
            createWidgetClass: realm.createWidgetClass.bind(realm),
            getClass: realm.getClass.bind(realm),
            allObjClasses: realm.allObjClasses.bind(realm),
            allWidgetClasses: realm.allWidgetClasses.bind(realm),
            _privateRealm: realm,
        };
        return {
            realm: realm,
            context: context,
        };
    };
    Object.defineProperty(Realm.prototype, "Obj", {
        get: function () {
            return this._registry.defaultClassForObjs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Realm.prototype, "Widget", {
        get: function () {
            return this._registry.defaultClassForWidgets;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Realm.prototype, "Link", {
        get: function () {
            return this._registry.defaultClassForLinks;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Realm.prototype, "ObjSearch", {
        get: function () {
            return this._registry.ObjSearch;
        },
        enumerable: true,
        configurable: true
    });
    // public API
    Realm.prototype.provideObjClass = function (name, definition) {
        var excessArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            excessArgs[_i - 2] = arguments[_i];
        }
        checkProvideObjClass.apply(void 0, realm_spread([name, definition], excessArgs));
        return provideObjClass(this._registry, name, definition);
    };
    // public API
    Realm.prototype.provideWidgetClass = function (name, definition) {
        var excessArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            excessArgs[_i - 2] = arguments[_i];
        }
        checkProvideWidgetClass.apply(void 0, realm_spread([name, definition], excessArgs));
        return provideWidgetClass(this._registry, name, definition);
    };
    // public API
    Realm.prototype.createObjClass = function (definition) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkCreateObjClass.apply(void 0, realm_spread([definition], excessArgs));
        return createObjClass(this._registry, definition);
    };
    // public API
    Realm.prototype.createWidgetClass = function (definition) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkCreateWidgetClass.apply(void 0, realm_spread([definition], excessArgs));
        return createWidgetClass(this._registry, definition);
    };
    // public API
    Realm.prototype.getClass = function (name) {
        return this._registry.getClass(name);
    };
    Realm.prototype.allObjClasses = function () {
        return this._registry.allObjClasses();
    };
    Realm.prototype.allWidgetClasses = function () {
        return this._registry.allWidgetClasses();
    };
    Realm.prototype.setInitialContentFor = function (initialContentFor) {
        this._registry.setInitialContentFor(initialContentFor);
    };
    return Realm;
}());


// CONCATENATED MODULE: ./scrivito_sdk/realm/index.ts











// CONCATENATED MODULE: ./scrivito_sdk/app_support/present_ui_adapter.ts

function presentUiAdapter() {
    if (!ui_adapter_uiAdapter) {
        throw new Error('Not expected to be rendered without UI');
    }
    return ui_adapter_uiAdapter;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/validations_config.ts


var VALIDATION_SEVERITY_LEVELS = [
    'error',
    'warning',
    'info',
];
var ValidationsConfigType = external_tcomb_validation_.list(external_tcomb_validation_.union([
    external_tcomb_validation_.Function,
    external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.Function, external_tcomb_validation_.Object, external_tcomb_validation_.list(external_tcomb_validation_.Object)])),
]));
function isContentValidationCallback(maybeContentValidationCallback) {
    return typeof maybeContentValidationCallback === 'function';
}
function isAttributeValidationCallback(maybeAttributeValidationCallback) {
    return typeof maybeAttributeValidationCallback === 'function';
}
function isAttributeValidationConstraints(maybeAttributeValidationConstraints) {
    return (!!maybeAttributeValidationConstraints &&
        typeof maybeAttributeValidationConstraints === 'object' &&
        !Object(external_underscore_["isArray"])(maybeAttributeValidationConstraints));
}
function isAttributeValidationConstraintsWithOptions(maybeAttributeValidationConstraintsWithOptions // Tcomb checks go only so far to check whether it's an array of objects.
) {
    return (Object(external_underscore_["isArray"])(maybeAttributeValidationConstraintsWithOptions) &&
        isAttributeValidationOptions(maybeAttributeValidationConstraintsWithOptions[0]) &&
        !!maybeAttributeValidationConstraintsWithOptions[1] &&
        typeof maybeAttributeValidationConstraintsWithOptions[1] === 'object');
}
function isAttributeValidationOptions(maybeAttributeValidationOptions) {
    if (!maybeAttributeValidationOptions ||
        typeof maybeAttributeValidationOptions !== 'object') {
        return false;
    }
    var maybeSeverity = maybeAttributeValidationOptions
        .severity;
    if (maybeSeverity) {
        return VALIDATION_SEVERITY_LEVELS.indexOf(maybeSeverity) !== -1;
    }
    return true;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/editing_config.ts
var editing_config_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var editing_config_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(editing_config_read(arguments[i]));
    return ar;
};



var editingConfigForClass = {};
function provideEditingConfig(className, editingConfig) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    checkProvideEditingConfig.apply(void 0, editing_config_spread([className, editingConfig], excessArgs));
    editingConfigForClass[className] = editingConfig;
}
function getEditingConfigFor(className, propertyName) {
    var config = editingConfigForClass[className];
    if (config) {
        return config[propertyName];
    }
}
function getValidationsConfigFor(className) {
    return getEditingConfigFor(className, 'validations');
}
var EnumValueLocalizationType = external_tcomb_validation_.struct({
    value: external_tcomb_validation_.String,
    title: external_tcomb_validation_.String,
});
var AttributesConfigType = external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.struct({
    title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    description: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    values: external_tcomb_validation_.maybe(external_tcomb_validation_.list(EnumValueLocalizationType)),
}));
var PropertiesGroupDescriptionType = external_tcomb_validation_.struct({
    title: external_tcomb_validation_.String,
    properties: external_tcomb_validation_.list(external_tcomb_validation_.String),
});
var ComponentGroupDescriptionType = external_tcomb_validation_.struct({
    title: external_tcomb_validation_.String,
    component: external_tcomb_validation_.String,
    properties: external_tcomb_validation_.maybe(external_tcomb_validation_.list(external_tcomb_validation_.String)),
});
var PropertiesGroupType = external_tcomb_validation_.union([
    PropertiesGroupDescriptionType,
    ComponentGroupDescriptionType,
]);
PropertiesGroupType.dispatch = function (group) {
    return group.component
        ? ComponentGroupDescriptionType
        : PropertiesGroupDescriptionType;
};
var PropertiesGroupsType = external_tcomb_validation_.list(PropertiesGroupType);
var InitialContentType = external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.union([
    LinkType,
    external_tcomb_validation_.Date,
    external_tcomb_validation_.Function,
    external_tcomb_validation_.Nil,
    external_tcomb_validation_.Number,
    external_tcomb_validation_.String,
    external_tcomb_validation_.list(LinkType),
    external_tcomb_validation_.list(WidgetType),
    external_tcomb_validation_.list(external_tcomb_validation_.String),
]));
var EditingConfigType = external_tcomb_validation_.struct({
    attributes: external_tcomb_validation_.maybe(AttributesConfigType),
    propertiesGroups: external_tcomb_validation_.maybe(PropertiesGroupsType),
    title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    description: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    thumbnail: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    titleForContent: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    descriptionForContent: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    hideInSelectionDialogs: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
    properties: external_tcomb_validation_.maybe(external_tcomb_validation_.list(external_tcomb_validation_.String)),
    initialContent: external_tcomb_validation_.maybe(InitialContentType),
    validations: external_tcomb_validation_.maybe(ValidationsConfigType),
});
var checkProvideEditingConfig = checkArgumentsFor('provideEditingConfig', [['className', external_tcomb_validation_.String], ['editingConfig', EditingConfigType]], { docPermalink: 'js-sdk/provideEditingConfig' });

// CONCATENATED MODULE: ./scrivito_sdk/app_support/schema_from_basic_obj_or_widget.ts


function schemaFromBasicObjOrWidget(objOrWidget) {
    var className = objOrWidget.objClass();
    if (!className)
        return;
    var widgetClass = getWindowContext().getClass(className);
    if (!widgetClass)
        return;
    return schema_Schema.forClass(widgetClass);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/initialize_content.ts








function initialContentFor(className, attributeName) {
    var initialContent = getEditingConfigFor(className, 'initialContent');
    if (initialContent) {
        var attributeContent = initialContent[attributeName];
        if (Object(external_underscore_["isFunction"])(attributeContent)) {
            return attributeContent();
        }
        if (isWidgetlist(attributeContent)) {
            var registry_1 = getWindowRegistry();
            return attributeContent.map(function (widget) {
                var basicWidget = widget._scrivitoPrivateContent;
                var copy = basicWidget.copy();
                return wrapInAppClass(registry_1, copy);
            });
        }
        return attributeContent;
    }
}
function isWidgetlist(maybeWidgetlist) {
    return Object(external_underscore_["isArray"])(maybeWidgetlist) && Object(external_underscore_["every"])(maybeWidgetlist, isWidget);
}
function isWidget(maybeWidget) {
    return (maybeWidget._scrivitoPrivateContent &&
        maybeWidget._scrivitoPrivateContent instanceof basic_widget);
}
function initializeContentForObj(objId) {
    return load(function () { return basic_obj.get(objId); }).then(function (basicObj) {
        if (basicObj)
            initializeContentFor(basicObj);
    });
}
function initializeContentForWidget(objId, widgetId) {
    return load(function () { return basic_obj.get(objId); }).then(function (basicObj) {
        if (!basicObj)
            return;
        return presentUiAdapter()
            .finishReplicatingObj(current_workspace_currentWorkspaceId(), objId)
            .then(function () {
            var basicWidget = basicObj.widget(widgetId);
            if (basicWidget)
                initializeContentFor(basicWidget);
        });
    });
}
function initializeContentFor(basicContent) {
    var objClassName = basicContent.objClass();
    var schema = schemaFromBasicObjOrWidget(basicContent);
    if (!schema)
        return;
    var initialAttributes = {};
    Object(external_underscore_["each"])(schema.attributes, function (typeInfo, attributeName) {
        var currentValue = basicContent.get(attributeName, typeInfo);
        if (Object(external_underscore_["isEmpty"])(currentValue)) {
            var initialValue = initialContentFor(objClassName, attributeName);
            if (initialValue) {
                initialAttributes[attributeName] = initialValue;
            }
        }
    });
    var attributesWithTypeInfo = unwrapAppAttributes(initialAttributes, schema, objClassName);
    basicContent.update(attributesWithTypeInfo);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/window_context.ts
// The iframe context is the `scrivito` object, available top-level in the application iframe and
// used as the public API for the client. Following indirection is used in the specs in order to
// not pollute the global `window` object with the public API properties.


var realmApi;
var window_context_a = realm_Realm.init(), window_context_realm = window_context_a.realm, window_context_context = window_context_a.context;
realmApi = window_context_context;
window_context_realm.setInitialContentFor(initialContentFor);
function getWindowContext() {
    return realmApi;
}
// For test purpose only.
function setWindowContext(newIframeContext) {
    realmApi = newIframeContext;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/window_registry.ts

function getWindowRegistry() {
    return getWindowContext()._privateRealm._registry;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing/homepage_callback.ts
var homepage_callback_homepageCallback;
function setHomepageCallback(callback) {
    homepage_callback_homepageCallback = callback;
}
function homepageFromCallback() {
    if (homepage_callback_homepageCallback) {
        return homepage_callback_homepageCallback();
    }
    return null;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/multi_site_mode.ts
var multi_site_mode_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




var MultiSiteModeOperationError = /** @class */ (function (_super) {
    multi_site_mode_extends(MultiSiteModeOperationError, _super);
    function MultiSiteModeOperationError(message) {
        return _super.call(this, message) || this;
    }
    return MultiSiteModeOperationError;
}(ScrivitoError));

var getSiteIdForObjCallback;
function setMultiSiteMode(callback) {
    getSiteIdForObjCallback = callback;
}
function useMultiSiteMode() {
    return !!getSiteIdForObjCallback;
}
function multi_site_mode_getSiteIdForObj(obj) {
    var siteId = getSiteIdForObjCallback(wrapInAppClass(getWindowRegistry(), obj));
    if (typeof siteId === 'string' && siteId.length > 0) {
        return siteId;
    }
    return null;
}
/** Selecting a site ID only makes sense in the multi-site mode */
function unstable_selectSiteId(siteId) {
    if (!getSiteIdForObjCallback) {
        throw new MultiSiteModeOperationError('Scrivito.unstable_selectSiteId is only available in the multi-site mode');
    }
    if (getSelectedSiteId()) {
        throw new MultiSiteModeOperationError('Scrivito.unstable_selectSiteId can be called only once');
    }
    if (typeof siteId !== 'string' || !siteId) {
        throw new MultiSiteModeOperationError('Scrivito.unstable_selectSiteId can only be called with a non-empty string');
    }
    selectedSiteIdState().set(siteId);
}
/** Accessing the selected site ID only makes sense in the multi-site mode */
function getSelectedSiteId() {
    // This should never happen!
    if (!getSiteIdForObjCallback) {
        throw new InternalError('Calling getSelectedSiteId is only available in multi-site mode');
    }
    return selectedSiteIdState().get() || null;
}
function assertSelectedSiteId(operationDescription) {
    if (!getSelectedSiteId()) {
        throw new MultiSiteModeOperationError("Used " + operationDescription + " in the multi-site mode, but the site ID is not yet selected." +
            ' Forgot to use Scrivito.unstable_selectSiteId?');
    }
}
// For test purpose only.
function resetMultiSiteMode() {
    getSiteIdForObjCallback = undefined;
}
function selectedSiteIdState() {
    return appState.subState('selectedSiteId');
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing_path.ts









function generateRoutingPath(obj) {
    if (!(obj instanceof basic_obj)) {
        throw new ArgumentError('Parameter obj needs to be a BasicObj.');
    }
    if (isHomepage(obj)) {
        return '/';
    }
    var permalink = obj.permalink();
    if (permalink) {
        if (useMultiSiteMode()) {
            assertSelectedSiteId('routing-related API (e.g. Scrivito.navigateTo)');
            if (isGlobalOrFromSelectedSite(obj)) {
                return generateUsingPermalink(obj, permalink);
            }
        }
        else {
            return generateUsingPermalink(obj, permalink);
        }
    }
    var slug = generateSlug(obj);
    if (slug) {
        return "/" + slug + "-" + obj.id();
    }
    return "/" + obj.id();
}
function recognizeRoutingPath(pathToRecognize) {
    var path = pathToRecognize.replace(new RegExp('^/+|/+$', 'g'), '');
    if (path === '') {
        return homepageFromCallback();
    }
    var objId = extractObjIdFromPath(path);
    if (objId) {
        return basic_obj.get(objId);
    }
    return recognizePermalink(path);
}
function isGlobalOrFromSelectedSite(obj) {
    var objSiteId = multi_site_mode_getSiteIdForObj(obj);
    var selectedSiteId = getSelectedSiteId();
    return !objSiteId || objSiteId === selectedSiteId;
}
function generateUsingPermalink(obj, permalink) {
    setObjIdForPermalink(obj.id(), permalink);
    return "/" + permalink;
}
function recognizePermalink(path) {
    var objId = objIdForPermalink(path);
    if (objId) {
        return basic_obj.get(objId);
    }
    if (useMultiSiteMode()) {
        return recognizeMultiSitePermalink(path);
    }
    return basic_obj.getByPermalink(path);
}
function recognizeMultiSitePermalink(path) {
    assertSelectedSiteId('routing-related API (e.g. Scrivito.currentPage, Scrivito.urlFor)');
    var siteId = getSelectedSiteId();
    var objs = basic_obj.getAllByPermalink(path);
    return (Object(external_underscore_["find"])(objs, function (obj) {
        var objSiteId = multi_site_mode_getSiteIdForObj(obj);
        if (objSiteId) {
            return objSiteId === siteId;
        }
        return true;
    }) || null);
}
function isHomepage(obj) {
    var homepage = loadableWithDefault(null, homepageFromCallback);
    if (!homepage) {
        return false;
    }
    return homepage.id() === obj.id();
}
function generateSlug(basicObj) {
    var registry = getWindowRegistry();
    var obj = wrapInAppClass(registry, basicObj);
    if (isObjWithSlug(obj)) {
        var slug = obj.slug();
        if (typeof slug === 'string') {
            return slug;
        }
    }
}
function extractObjIdFromPath(input) {
    if (input.length < 16) {
        return null;
    }
    if (input.length > 16 && input.slice(-17, -16) !== '-') {
        return null;
    }
    var id = input.slice(-16);
    if (id.match(/[^0-9a-f]/)) {
        return null;
    }
    return id;
}
function isObjWithSlug(obj) {
    var maybeObjWithSlug = obj;
    return maybeObjWithSlug.slug && typeof maybeObjWithSlug.slug === 'function';
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/routing.ts







var basePath = '';
var isInitialized = false;
function routing_init(_a) {
    var _b = _a === void 0 ? {} : _a, routingBasePath = _b.routingBasePath, homepageCallback = _b.homepageCallback;
    isInitialized = true;
    basePath = routingBasePath || '';
    if (homepageCallback) {
        setHomepageCallback(homepageCallback);
    }
}
// For test purpose only.
function routing_reset() {
    basePath = '';
    isInitialized = false;
}
function generateUrl(_a) {
    var obj = _a.obj, queryParameters = _a.queryParameters, hash = _a.hash, origin = _a.origin;
    assertIsInitialized('generateUrl');
    var path = generateRoutingPath(obj);
    var uri = generatePathUri({ path: path, queryParameters: queryParameters, hash: hash });
    if (origin) {
        uri.origin(origin);
    }
    return uri.toString();
}
function generatePath(_a) {
    var path = _a.path;
    assertIsInitialized('generatePath');
    return generatePathUri({ path: path });
}
function recognize(url) {
    assertIsInitialized('recognize');
    var uri = typeof url === 'string' ? external_urijs_(url) : url;
    var path = recognizePath(uri);
    // @types/urijs fails and declares that query(true) returns Object
    var queryParameters = uri.query(true);
    var hash = extractHash(uri);
    if (!Object(external_underscore_["isString"])(path)) {
        return { path: path, obj: null, queryParameters: queryParameters, hash: hash };
    }
    return {
        path: path,
        obj: recognizeRoutingPath(path),
        queryParameters: queryParameters,
        hash: hash,
    };
}
function recognizePath(uri) {
    if (isLocalUri(uri)) {
        return extractPath(uri);
    }
    return null;
}
function isLocalUrl(url) {
    var uri = external_urijs_(url);
    return isLocalUri(uri);
}
function isLocalUri(uri) {
    if (!uri.is('absolute')) {
        return true;
    }
    if (uri.origin() !== currentOrigin()) {
        return false;
    }
    return true;
}
function assertIsInitialized(methodName) {
    if (!isInitialized) {
        logError('Error from Scrivito SDK: No application configured, cannot initialize routing.');
        throw new InternalError(methodName + " can't be called before init.");
    }
}
function extractPath(uri) {
    var path = uri.path();
    if (path.substring(0, basePath.length) !== basePath) {
        return null;
    }
    return path.substring(basePath.length);
}
function generatePathUri(_a) {
    var path = _a.path, queryParameters = _a.queryParameters, hash = _a.hash;
    var normalizedPath = ("/" + basePath + "/" + path).replace(/\/+/g, '/');
    var uri = external_urijs_('').pathname(normalizedPath);
    if (queryParameters) {
        uri.query(queryParameters);
    }
    if (hash) {
        uri.hash(hash);
    }
    return uri;
}
function extractHash(uri) {
    var hash = uri.hash();
    if (hash === '') {
        return null;
    }
    return hash;
}
function currentOrigin() {
    return external_urijs_(window_proxy_location()).origin();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/change_location.ts


function changeLocation(url) {
    if (ui_adapter_uiAdapter) {
        // change the location of the parent, to avoid CSP errors.
        ui_adapter_uiAdapter.navigateToExternalUrl(url);
    }
    else {
        setWindowLocation(url);
    }
}
function setWindowLocation(url) {
    window.location.assign(url);
}
function openLocation(url, target) {
    window.open(url, target);
}
function openInNewWindow(url) {
    if (ui_adapter_uiAdapter && isLocalUrl(url)) {
        ui_adapter_uiAdapter.openInNewUiWindow(url);
    }
    else {
        openLocation(url, '_blank');
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_binary_basic_obj.ts

function isBinaryBasicObj(basicObj) {
    var schema = schemaFromBasicObjOrWidget(basicObj);
    return !!schema && schema.isBinary();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/navigation_state.ts







function getCurrentNavigationState() {
    var loadableNavigationState = new loadable_data({
        state: appState.subState('currentPage'),
        invalidation: function () { return getHistoryChangesCount(); },
        loader: navigation_state_loadNavigationState,
    });
    var navigationState = loadWithDefault(undefined, function () {
        return loadableNavigationState.get();
    });
    if (!navigationState)
        return undefined;
    var state = navigationState.pageState;
    if (isScrivitoPage(state)) {
        var basicObj = basic_obj.get(state.objId);
        if (!basicObj) {
            // Not found (page disappeared meanwhile)
            return {
                pageState: NOT_FOUND,
                historyState: navigationState.historyState,
            };
        }
    }
    return navigationState;
}
function navigation_state_loadNavigationState() {
    return load(function () { return recognizeLocation(); }).then(function (_a) {
        var route = _a.route, historyState = _a.historyState;
        return new ScrivitoPromise(function (resolve) {
            resolve(pageStateForRoute(route));
        }).then(function (pageState) { return ({
            historyState: historyState,
            pageState: pageState,
        }); });
    });
}
function recognizeLocation() {
    var historyState = getHistoryState();
    var route = recognize(historyState.location);
    return {
        route: route,
        historyState: historyState,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_page_state.ts
var current_page_state_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};




var NOT_FOUND = {
    type: 'not found',
    page: null,
};
var NOT_RESPONSIBLE = {
    type: 'not responsible',
};
function getCurrentPageState() {
    var navigationState = getCurrentNavigationState();
    return navigationState && navigationState.pageState;
}
function isScrivitoPage(state) {
    return state.type === 'page';
}
function isScrivitoBinary(state) {
    return state.type === 'binary';
}
function isNotFound(state) {
    return state.type === 'not found';
}
function pageStateForRoute(route) {
    var path = route.path;
    if (path === null) {
        return NOT_RESPONSIBLE;
    }
    var obj = route.obj;
    if (!obj) {
        return NOT_FOUND;
    }
    if (!isBinaryBasicObj(obj)) {
        var _a = route.queryParameters, _scrivito_workspace_id = _a._scrivito_workspace_id, _scrivito_editing = _a._scrivito_editing, _scrivito_comparison = _a._scrivito_comparison, queryParameters = current_page_state_rest(_a, ["_scrivito_workspace_id", "_scrivito_editing", "_scrivito_comparison"]);
        return {
            type: 'page',
            objId: obj.id(),
            queryParameters: queryParameters,
        };
    }
    var binaryPromise = load(function () { return recognizeBinary(obj); });
    binaryPromise.then(function (pageState) {
        if (isScrivitoBinary(pageState)) {
            changeLocation(pageState.url);
        }
    });
    return binaryPromise;
}
function recognizeBinary(obj) {
    var blob = obj.get('blob', ['binary']);
    var url = blob ? blob.url() : null;
    if (!url) {
        return NOT_FOUND;
    }
    return {
        type: 'binary',
        objId: obj.id(),
        url: url,
        page: false,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/on_current_page_change.ts





function onCurrentPageChange() {
    var lastState;
    return observe(function () { return capture(getCurrentNavigationState).result; })
        .filter(isPresent)
        .filter(function (currentState) {
        var isNew = lastState === undefined ||
            !isSamePageIdAndPageLocation(lastState, currentState);
        lastState = currentState;
        return isNew;
    });
}
function isSamePageIdAndPageLocation(leftNavigationState, rightNavigationState) {
    var leftState = leftNavigationState.pageState;
    var rightState = rightNavigationState.pageState;
    if (isScrivitoPage(leftState)) {
        if (isScrivitoPage(rightState)) {
            return (leftState.objId === rightState.objId &&
                leftNavigationState.historyState.location ===
                    rightNavigationState.historyState.location);
        }
        return false;
    }
    if (isScrivitoPage(rightState))
        return false;
    return isNotFound(leftState) === isNotFound(rightState);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/canonical_url.ts







function canonical_url_init() {
    onCurrentPageChange().subscribe(switchToCanonicalUrl);
}
function switchToCanonicalUrl(navigationState) {
    var state = navigationState.pageState;
    if (!isScrivitoPage(state)) {
        return;
    }
    var location = navigationState.historyState.location;
    load(function () {
        if (get() !== location) {
            return;
        }
        var page = basic_obj.get(state.objId);
        var canonicalPath = generateUrl({ obj: page });
        return external_urijs_(location)
            .path(canonicalPath)
            .toString();
    }).then(function (canonicalUrl) {
        if (!canonicalUrl) {
            return;
        }
        var browserLocation = get();
        if (location !== browserLocation) {
            return;
        }
        if (canonicalUrl === browserLocation) {
            return;
        }
        replace(canonicalUrl);
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/editing_context.ts



var editing_context_inPlaceEditingActive = false;
var editing_context_comparisonActive = false;
function initializeEditingContextFromLocation() {
    var url = window_proxy_location().href;
    var context = getEditingContextFrom(url);
    var workspaceId = context.workspaceId || 'published';
    setCurrentWorkspaceId(workspaceId);
    if (workspaceId !== 'published') {
        editing_context_inPlaceEditingActive = context.inPlaceEditingActive;
        editing_context_comparisonActive = !editing_context_inPlaceEditingActive && context.comparisonActive;
    }
}
function hasEditingContext(url) {
    return !!getEditingContextFrom(url).workspaceId;
}
function getEditingContextFrom(url) {
    var params = queryParametersFromUrl(url);
    return {
        workspaceId: workspaceIdFromParam(params._scrivito_workspace_id),
        inPlaceEditingActive: params.hasOwnProperty('_scrivito_editing'),
        comparisonActive: params.hasOwnProperty('_scrivito_comparison'),
    };
}
function workspaceIdFromParam(workspaceIdParam) {
    if (!workspaceIdParam)
        return;
    if (typeof workspaceIdParam !== 'string') {
        throwNextTick(new ScrivitoError("Expected parameter _scrivito_workspace_id to be a string, but it is " + typeof workspaceIdParam));
        return;
    }
    return workspaceIdParam;
}
// public API
function isInPlaceEditingActive() {
    return editing_context_inPlaceEditingActive;
}
function isComparisonActive() {
    return editing_context_comparisonActive;
}
// For test purposes only
function setIsInPlaceEditingActive(isActive) {
    editing_context_inPlaceEditingActive = isActive;
}
// For test purposes only
function setIsComparisonActive(isActive) {
    editing_context_comparisonActive = isActive;
}
// For test purposes only
function resetEditingContext() {
    resetCurrentWorkspaceId();
    editing_context_inPlaceEditingActive = false;
    editing_context_comparisonActive = false;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/dnd_handler.ts


function installDndHandler() {
    var document = getDocument();
    document.addEventListener('dragover', function (e) { return onDragover(e); });
    document.addEventListener('drop', function () { return onDrop(); });
}
function onDragover(e) {
    // There is no way to test following two lines.
    // Please be careful and assert the correct behavior manually when editing them.
    e.dataTransfer.dropEffect = 'move';
    e.preventDefault(); // Necessary: Allows us to drop.
    var position = { x: e.pageX, y: e.pageY };
    presentUiAdapter().dragTo(position);
}
function onDrop() {
    presentUiAdapter().drop();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/scroll_handler.ts

var SENSIVITY = 30;
var SPEED = 25;
function installScrollHandler() {
    var document = getDocument();
    document.addEventListener('dragover', function (e) {
        var mouseY = e.clientY;
        var scrollLeft = window_proxy_pageXOffset();
        var scrollTop = window_proxy_pageYOffset();
        if (scrollTop > 0 && mouseY < SENSIVITY) {
            scrollTo(scrollLeft, scrollTop - SPEED);
        }
        else if (getScrollHeight() > scrollTop + window_proxy_innerHeight() &&
            mouseY > window_proxy_innerHeight() - SENSIVITY) {
            scrollTo(scrollLeft, scrollTop + SPEED);
        }
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/mode_indicators.ts


function setModeIndicators() {
    var body = getDocument().body;
    body.classList.add('scrivito_editing_active');
    if (isInPlaceEditingActive()) {
        body.setAttribute('data-scrivito-editing', '');
    }
    if (isComparisonActive()) {
        body.setAttribute('data-scrivito-comparison', '');
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/editing_context_correction.ts







function startEditingContextCorrection() {
    observeAndLoad(currentUiEditingContext).subscribe(function (observed) {
        if (observed.allDataLoaded) {
            onUiEditingContextChange(observed.result);
        }
    });
}
function currentUiEditingContext() {
    var uiAdapter = presentUiAdapter();
    return {
        workspaceId: uiAdapter.currentWorkspaceId(),
        inPlaceEditingActive: uiAdapter.isInPlaceEditingActive(),
        comparisonActive: uiAdapter.isComparisonActive(),
    };
}
function onUiEditingContextChange(uiEditingContext) {
    if (uiEditingContext.workspaceId !== current_workspace_currentWorkspaceId() ||
        uiEditingContext.inPlaceEditingActive !== isInPlaceEditingActive() ||
        uiEditingContext.comparisonActive !== isComparisonActive()) {
        reloadWithUiEditingContext(uiEditingContext);
    }
}
function reloadWithUiEditingContext(uiEditingContext) {
    var uriWithCorrection = uriWithUiEditingContextParams(getIncludingOrigin(), uiEditingContext);
    setWindowLocation(uriWithCorrection.toString());
}
// For test purpose only
function uriWithUiEditingContextParams(url, _a) {
    var workspaceId = _a.workspaceId, inPlaceEditingActive = _a.inPlaceEditingActive, comparisonActive = _a.comparisonActive;
    var params = {
        _scrivito_workspace_id: workspaceId,
    };
    if (inPlaceEditingActive) {
        params._scrivito_editing = 'true';
    }
    else if (comparisonActive) {
        params._scrivito_comparison = 'true';
    }
    return new external_urijs_(url)
        .removeSearch([
        '_scrivito_workspace_id',
        '_scrivito_editing',
        '_scrivito_comparison',
    ])
        .addSearch(params);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/ui_link_handler.ts


function startLinkResolutionFor(workspaceId, objId) {
    return objReplicationPool
        .get(workspaceId, objId)
        .finishReplicating()
        .then(function () { return presentUiAdapter().startLinkResolutionFor(workspaceId, objId); });
}
function finishLinkResolutionFor(workspaceId, objId) {
    return objReplicationPool
        .get(workspaceId, objId)
        .finishReplicating()
        .then(function () { return presentUiAdapter().finishLinkResolutionFor(workspaceId, objId); });
}

// CONCATENATED MODULE: ./scrivito_sdk/index.ts














if (!window.scrivitoPrivateApi) {
    window.scrivitoPrivateApi = { registerEditor: registerEditor, openContentBrowser: openContentBrowser };
}
function initializeSdk() {
    var parentWindow = window.parent;
    var insideIFrame = parentWindow !== window;
    var insideUi = insideIFrame && hasEditingContext(window.location.href);
    if (!insideUi) {
        useReplicationStrategy(obj_backend_replication_ObjBackendReplication);
    }
    else {
        var uiAdapterClient = establishUiConnection(parentWindow);
        setUiAdapter(uiAdapterClient);
        replaceCmsRetrieval(uiAdapterClient);
        setBinaryHandler(uiAdapterClient);
        setLinkHandler(ui_link_handler_namespaceObject);
        setContentUpdateHandler(uiAdapterClient);
        setObjStreamReplicationEndpoint(uiAdapterClient);
        useReplicationStrategy(obj_stream_replication_ObjStreamReplication);
        initializeEditingContextFromLocation();
        startEditingContextCorrection();
        installDndHandler();
        installScrollHandler();
        setModeIndicators();
    }
    canonical_url_init();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/app_adapter_description.ts

var appAdapterDescription = {
    descriptionForObj: GET,
    getClasses: GET,
    getContentBrowserConfiguration: GET,
    getHomepageId: GET,
    getSiteIdForObj: GET,
    replaceInternalLinks: GET,
    titleForObj: GET,
    titleForWidget: GET,
    getElementBoundaries: GET,
    getContentZoneData: GET,
    getCustomComponentDimensions: GET,
    getScrollPosition: GET,
    getApplicationUrl: GET,
    getCurrentPageId: GET,
    getValidationReport: GET,
    objReplicationMessageStream: STREAM,
    executeCustomCommand: SEND,
    initializeContentForObj: SEND,
    initializeContentForWidget: SEND,
    navigateTo: SEND,
    resolveUrl: SEND,
    scrollIntoView: SEND,
    showCustomComponent: SEND,
    urlFor: SEND,
};

// CONCATENATED MODULE: ./scrivito_sdk/app_support/asset_url_base.ts

var asset_url_base_current;
function getAssetUrlBase() {
    if (!asset_url_base_current) {
        asset_url_base_current = "https://assets.scrivito.com/sjs/" + getScrivitoVersion();
    }
    return asset_url_base_current;
}
function configureAssetUrlBase(assetUrlBase) {
    if (asset_url_base_current) {
        throw new Error('Refusing attempt to reconfigure asset url base (again or after first access).');
    }
    asset_url_base_current = assetUrlBase;
}
// For test purpose only
function resetAssetUrlBase() {
    asset_url_base_current = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/load_editing_assets.ts

function loadEditingAssets(assetUrlBase, targetDocument) {
    loadCss(assetUrlBase + "/scrivito_editing.css", targetDocument);
    loadJs(assetUrlBase + "/scrivito_editing.js", targetDocument);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/basic_url_for.ts
var basic_url_for_assign = (undefined && undefined.__assign) || function () {
    basic_url_for_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return basic_url_for_assign.apply(this, arguments);
};




function basicUrlWithOriginFor(target, options) {
    if (options === void 0) { options = {}; }
    assertValidTarget(target);
    return urlFor(target, {
        origin: options.origin || currentOrigin(),
        query: options.query,
        hash: options.hash,
    });
}
function basicUrlFor(target, options) {
    assertValidTarget(target);
    return urlFor(target, options);
}
function urlFor(target, options) {
    if (target instanceof basic_link) {
        return urlForLink(target, options);
    }
    if (target instanceof models_binary) {
        return urlForBinary(target);
    }
    return urlForObj(target, options);
}
function urlForObj(obj, options) {
    if (isBinaryBasicObj(obj)) {
        return urlForBinaryObj(obj, options);
    }
    return urlForNonBinaryObj(obj, options);
}
function assertValidTarget(target) {
    if (!target) {
        throw new ArgumentError('Missing target.');
    }
    if (target instanceof basic_link) {
        return;
    }
    if (target instanceof basic_obj) {
        return;
    }
    if (target instanceof models_binary) {
        return;
    }
    throw new ArgumentError('Target is invalid. Valid targets are instances of Obj or Link.');
}
function urlForBinary(binary) {
    return binary.url();
}
function urlForBinaryObj(obj, options) {
    var blob = obj.get('blob', ['binary']);
    if (blob) {
        return urlForBinary(blob);
    }
    return urlForNonBinaryObj(obj, options);
}
function urlForLink(link, options) {
    if (options === void 0) { options = {}; }
    if (link.isExternal())
        return link.url();
    var obj = link.obj();
    if (!obj)
        throw new ArgumentError('Missing link target.');
    var linkOptions = basic_url_for_assign({}, options);
    if (!options.queryParameters && typeof options.query !== 'string') {
        linkOptions.query = link.query() || undefined;
    }
    if (typeof options.hash !== 'string') {
        linkOptions.hash = link.hash() || undefined;
    }
    return urlForObj(obj, linkOptions);
}
function urlForNonBinaryObj(obj, options) {
    if (options === void 0) { options = {}; }
    var origin = options.origin, query = options.query, parameters = options.queryParameters, hash = options.hash;
    var queryParameters = parameters || (query && parseQuery(query)) || undefined;
    return generateUrl({
        obj: obj,
        origin: origin,
        queryParameters: queryParameters,
        hash: hash,
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/url_for.ts
var url_for_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var url_for_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(url_for_read(arguments[i]));
    return ar;
};





var url_for_origin;
// public API
function url_for_urlFor(target, options) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    assertNotUsingInMemoryTenant('Scrivito.urlFor');
    checkUrlFor.apply(void 0, url_for_spread([target, options], excessArgs));
    var query;
    var hash;
    if (options) {
        query = options.query;
        hash = options.hasOwnProperty('hash') ? options.hash : options.fragment;
    }
    var basicTarget = unwrapAppClass(target);
    return basicUrlWithOriginFor(basicTarget, {
        origin: url_for_origin,
        query: query,
        hash: hash,
    });
}
function configureOrigin(originToUse) {
    url_for_origin = originToUse;
}
var TargetType = external_tcomb_validation_.union([ObjType, LinkType, BinaryType]);
var OptionsType = external_tcomb_validation_.struct({
    query: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    hash: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    fragment: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var checkUrlFor = checkArgumentsFor('urlFor', [['target', TargetType], ['options', external_tcomb_validation_.maybe(OptionsType)]], {
    docPermalink: 'js-sdk/urlFor',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/visitor_authentication.ts
var visitor_authentication_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var visitor_authentication_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(visitor_authentication_read(arguments[i]));
    return ar;
};



var DOC_LINK = 'js-sdk/setVisitorIdToken';
var provider;
var cancelMissingTokenNotification;
function getVisitorAuthenticationProvider(visitorAuthentication) {
    if (!ui_adapter_uiAdapter && visitorAuthentication) {
        return enableVisitorAuthentication();
    }
}
function enableVisitorAuthentication() {
    provider = new visitor_authentication_provider_VisitorAuthenticationProvider();
    var timeoutId = setTimeout(function () {
        throw new ScrivitoError('Scrivito.setVisitorIdToken was not called within 30 seconds.' +
            (" Visit " + docUrl(DOC_LINK) + " for more information."));
    }, 30000);
    cancelMissingTokenNotification = function () { return clearTimeout(timeoutId); };
    return provider;
}
function setVisitorIdToken(token) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (ui_adapter_uiAdapter)
        return;
    checkSetVisitorIdToken.apply(void 0, visitor_authentication_spread([token], args));
    if (!provider) {
        throw new ScrivitoError('Scrivito needs to be configured to use visitor authentication before' +
            ' Scrivito.setVisitorIdToken can be called.' +
            (" Visit " + docUrl('js-sdk/configure')) +
            (" and " + docUrl(DOC_LINK) + " for more information."));
    }
    cancelAndForgetMissingTokenNotification();
    provider.setToken(token);
}
function isVisitorAuthenticationEnabled() {
    return !!provider;
}
var checkSetVisitorIdToken = checkArgumentsFor('setVisitorIdToken', [['idToken', external_tcomb_validation_.String]], {
    docPermalink: DOC_LINK,
});
function cancelAndForgetMissingTokenNotification() {
    if (cancelMissingTokenNotification) {
        cancelMissingTokenNotification();
        cancelMissingTokenNotification = undefined;
    }
}
// For test purpose only
function resetVisitorAuthentication() {
    cancelAndForgetMissingTokenNotification();
    provider = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/navigate_to.ts
var navigate_to_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var navigate_to_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(navigate_to_read(arguments[i]));
    return ar;
};










var latestCallNumber = 0;
function navigateTo(target, options) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    var currentCallNumber = getNextCallNumber();
    failIfFrozen('navigateTo');
    if (target === null) {
        nextTick(function () { return checkNavigateTo.apply(void 0, navigate_to_spread([target, options], excessArgs)); });
        return;
    }
    checkNavigateTo.apply(void 0, navigate_to_spread([target, options], excessArgs));
    var queryParameters;
    var hash;
    if (options) {
        var convenienceParams = Object(external_underscore_["omit"])(options, 'hash', 'params');
        checkNavigateToConvenience(target, convenienceParams);
        queryParameters = Object(external_underscore_["extend"])(convenienceParams, options.params || {});
        hash = options.hash;
    }
    var providesTarget = function () { return (Object(external_underscore_["isFunction"])(target) ? target() : target); };
    load(providesTarget)
        .then(function (evaluatedTarget) {
        var targetPromise = routingTargetFromEvaluatedTarget(evaluatedTarget, queryParameters, hash);
        if (targetPromise) {
            return targetPromise.then(function (routingTarget) {
                if (latestCallNumber === currentCallNumber) {
                    navigateToRoutingTarget(routingTarget);
                }
            });
        }
    })
        .catch(function (e) {
        if (latestCallNumber === currentCallNumber) {
            throwNextTick(e);
        }
    });
}
function routingTargetFromEvaluatedTarget(evaluatedTarget, queryParameters, hash) {
    checkEvaluatedTarget(evaluatedTarget);
    var basicTarget = unwrapAppClass(evaluatedTarget);
    if (basicTarget instanceof basic_obj) {
        return load(function () {
            return extractRoutingTargetForObj(basicTarget, queryParameters, hash || null);
        });
    }
    if (basicTarget instanceof basic_link) {
        return load(function () {
            return extractRoutingTargetForLink(basicTarget, queryParameters, hash || null);
        }).then(forwardOnlyLocationRoutingTarget);
    }
}
function forwardOnlyLocationRoutingTarget(routingTarget) {
    if (isObjRoutingTarget(routingTarget) ||
        isUrlRoutingTarget(routingTarget) ||
        isObjIdRoutingTarget(routingTarget)) {
        return routingTarget;
    }
    throw new ArgumentError('The link provided to navigateTo has no destination.');
}
function navigateToRoutingTarget(routingTarget) {
    if (isObjRoutingTarget(routingTarget)) {
        navigateToPage(routingTarget);
    }
    else if (isUrlRoutingTarget(routingTarget)) {
        changeLocation(routingTarget.url);
    }
    else {
        navigateToObjId(routingTarget);
    }
}
function navigateToPage(target) {
    var resource = generateUrl(target);
    var currentResource = get();
    if (resource === currentResource) {
        replace(resource);
    }
    else {
        browser_location_push(resource);
    }
}
function navigateToObjId(target) {
    var objId = target.objId;
    if (target.isBinary) {
        var error = new ArgumentError("The target provided to navigateTo leads to the binary obj " + objId + " which has no binary data.");
        throwNextTick(error);
    }
    else {
        var uri = generatePath({ path: objId });
        if (target.queryParameters) {
            uri.query(target.queryParameters);
        }
        if (target.hash) {
            uri.hash(target.hash);
        }
        browser_location_push(uri.resource());
    }
}
function getNextCallNumber() {
    latestCallNumber++;
    return latestCallNumber;
}
function extractRoutingTargetForObj(obj, queryParameters, hash) {
    if (isBinaryBasicObj(obj)) {
        var blob = obj.get('blob', ['binary']);
        if (!blob) {
            return {
                isBinary: true,
                objId: obj.id(),
                queryParameters: queryParameters,
                hash: hash,
            };
        }
        return { url: blob.url() };
    }
    return { obj: obj, queryParameters: queryParameters, hash: hash };
}
function extractRoutingTargetForLink(link, queryParametersToApply, hashToApply) {
    if (link.isExternal()) {
        return { url: link.url() };
    }
    var hash = hashToApply || link.hash();
    var queryParameters;
    if (queryParametersToApply && !Object(external_underscore_["isEmpty"])(queryParametersToApply)) {
        queryParameters = queryParametersToApply;
    }
    else {
        queryParameters = link.queryParameters();
    }
    var obj = link.obj();
    if (!obj) {
        var objId = link.objId();
        if (objId) {
            return {
                objId: objId,
                queryParameters: queryParameters,
                hash: hash,
            };
        }
        return {};
    }
    return extractRoutingTargetForObj(obj, queryParameters, hash);
}
function isObjRoutingTarget(routingTarget) {
    return !!routingTarget.obj;
}
function isObjIdRoutingTarget(routingTarget) {
    return !!routingTarget.objId;
}
function isUrlRoutingTarget(routingTarget) {
    return !!routingTarget.url;
}
var EvaluatedTargetType = external_tcomb_validation_.union([ObjType, LinkType]);
var navigate_to_TargetType = external_tcomb_validation_.union([external_tcomb_validation_.Function, EvaluatedTargetType]);
var ParamsValueType = external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.maybe(external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String), external_tcomb_validation_.Nil])));
var checkNavigateTo = checkArgumentsFor('navigateTo', [
    ['target', navigate_to_TargetType],
    [
        'options',
        external_tcomb_validation_.maybe(external_tcomb_validation_.struct({
            hash: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            params: external_tcomb_validation_.maybe(ParamsValueType),
        }, { strict: false })),
    ],
], {
    docPermalink: 'js-sdk/navigateTo',
});
var checkNavigateToConvenience = checkArgumentsFor('navigateTo', [['target', navigate_to_TargetType], ['options', external_tcomb_validation_.maybe(ParamsValueType)]], {
    docPermalink: 'js-sdk/navigateTo',
});
var checkEvaluatedTarget = checkArgumentsFor('navigateTo', [['target', EvaluatedTargetType]], {
    docPermalink: 'js-sdk/navigateTo',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/invoke_editing_config_callback.ts


function invokeEditingConfigCallback(className, callbackName, objOrWidget) {
    var callback = getEditingConfigFor(className, callbackName);
    if (typeof callback === 'function') {
        try {
            return callback(objOrWidget);
        }
        catch (error) {
            throwNextTick(error);
        }
    }
}

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(1);

// CONCATENATED MODULE: ./scrivito_sdk/app_support/loading_monitor.ts

var loadingCount = 0;
var loading_monitor_deferred;
function finishLoading() {
    if (!loading_monitor_deferred) {
        loading_monitor_deferred = new common_deferred();
        nextTick(updateLoadingState);
    }
    return loading_monitor_deferred.promise;
}
function registerLoadingActivity() {
    loadingCount += 1;
    return createUnregister();
}
// For test purpose only.
function loading_monitor_reset() {
    loading_monitor_deferred = undefined;
    loadingCount = 0;
}
function createUnregister() {
    var unregisterHasBeenCalled = false;
    return function unregister() {
        if (unregisterHasBeenCalled) {
            throw new InternalError('Unregister must not be called twice');
        }
        loadingCount -= 1;
        unregisterHasBeenCalled = true;
        if (loadingCount === 0) {
            nextTick(updateLoadingState);
        }
    };
}
function updateLoadingState() {
    if (loading_monitor_deferred && loadingCount === 0) {
        loading_monitor_deferred.resolve();
        loading_monitor_deferred = undefined;
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/react/display_name_from_component.ts
function displayNameFromComponent(component) {
    return component.displayName || component.name;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/get_element_type.ts

function getElementType(node) {
    if (external_react_["isValidElement"](node)) {
        var forwardedType = node.props
            .__scrivitoForwardElementType;
        return forwardedType || node.type;
    }
}
function forwardElementTypeProps(node) {
    return { __scrivitoForwardElementType: getElementType(node) };
}

// CONCATENATED MODULE: ./scrivito_sdk/react/connect.tsx
var connect_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var connect_assign = (undefined && undefined.__assign) || function () {
    connect_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return connect_assign.apply(this, arguments);
};








function connect(component) {
    if (typeof component !== 'function') {
        throw new ArgumentError('Scrivito.connect expects either a plain function or a subclass of React.Component');
    }
    if (isConnectedComponent(component)) {
        return component;
    }
    if (isClassComponent(component)) {
        return connectClassComponent(component);
    }
    return connectClassComponent(wrapInClassComponent(component));
}
function connectClassComponent(classComponent) {
    var _a;
    var connectedComponent = (_a = /** @class */ (function (_super) {
            connect_extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this._scrivitoPrivateConnector = new connect_ComponentConnector(_this);
                return _this;
            }
            class_1.prototype.componentDidMount = function () {
                this._scrivitoPrivateConnector.componentDidMount();
                if (_super.prototype.componentDidMount) {
                    _super.prototype.componentDidMount.call(this);
                }
            };
            class_1.prototype.componentWillUnmount = function () {
                this._scrivitoPrivateConnector.componentWillUnmount();
                if (_super.prototype.componentWillUnmount) {
                    _super.prototype.componentWillUnmount.call(this);
                }
            };
            class_1.prototype.render = function () {
                var _this = this;
                return this._scrivitoPrivateConnector.render(function () { return _super.prototype.render.call(_this); });
            };
            return class_1;
        }(classComponent)),
        _a._isScrivitoConnectedComponent = true,
        _a);
    connectedComponent.displayName = displayNameFromComponent(classComponent);
    return connectedComponent;
}
function wrapInClassComponent(functionalComponent) {
    var classComponent = /** @class */ (function (_super) {
        connect_extends(class_2, _super);
        function class_2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_2.prototype.render = function () {
            return functionalComponent(this.props);
        };
        return class_2;
    }(external_react_["Component"]));
    classComponent.displayName = displayNameFromComponent(functionalComponent);
    return classComponent;
}
function isClassComponent(component) {
    return (typeof component === 'function' &&
        component.prototype &&
        component.prototype.isReactComponent);
}
function isConnectedComponent(component) {
    return (component
        ._isScrivitoConnectedComponent === true);
}
var HierarchyLevelContext = external_react_["createContext"](0);
var connect_ComponentConnector = /** @class */ (function () {
    function ComponentConnector(component) {
        this.component = component;
        this.isMounted = false;
        this.loadingSubscriber = new LoadingSubscriber();
    }
    ComponentConnector.prototype.componentDidMount = function () {
        var _this = this;
        if (this.hierachyLevel === undefined) {
            throw new InternalError();
        }
        this.stateSubscriber = createSyncSubscriber(function () { return _this.component.forceUpdate(); }, this.hierachyLevel);
        this.isMounted = true;
        if (this.onMount) {
            var onMount = this.onMount.bind(this);
            delete this.onMount;
            onMount();
        }
    };
    ComponentConnector.prototype.componentWillUnmount = function () {
        if (this.stateSubscriber) {
            this.stateSubscriber.unsubscribe();
        }
        this.unregisterLoadingActivity();
        this.isMounted = false;
        this.loadingSubscriber.unsubscribe();
    };
    ComponentConnector.prototype.render = function (originalRender) {
        var _this = this;
        var reactElement = this.renderLoadingAware(originalRender);
        return (external_react_["createElement"](HierarchyLevelContext.Consumer, connect_assign({}, forwardElementTypeProps(reactElement)), function (level) {
            return _this.grabHierarchyLevel(level, external_react_["createElement"](HierarchyLevelContext.Provider, { value: level + 1 }, reactElement));
        }));
    };
    /* grab hierarchy level as a side-effect of rendering.
     * ugly, but for a better way, React 16.6 would be needed, see:
     * https://reactjs.org/docs/context.html#classcontexttype
     */
    ComponentConnector.prototype.grabHierarchyLevel = function (level, node) {
        this.hierachyLevel = level;
        return node;
    };
    ComponentConnector.prototype.renderLoadingAware = function (originalRender) {
        var _this = this;
        if (isCurrentlyCapturing()) {
            // we are inside a capture - no need to load anything ourselves
            // (this usually means the caller is prerendering, e.g. renderToString)
            return runWithFrozenState(originalRender);
        }
        else {
            var captured_1 = capture(function () {
                return trackStateAccess(function () {
                    return runWithPerformanceConstraint(function () { return runWithFrozenState(originalRender); });
                });
            });
            var _a = captured_1.result, accessedState_1 = _a.accessedState, result = _a.result;
            this.whenMounted(function () {
                if (!_this.stateSubscriber) {
                    throw new InternalError();
                }
                _this.stateSubscriber.subscribeChanges(accessedState_1);
                captured_1.subscribeLoading(_this.loadingSubscriber);
                if (captured_1.isAllDataLoaded()) {
                    _this.unregisterLoadingActivity();
                }
                else {
                    if (!_this.unregisterLoadingActivityCallback) {
                        _this.unregisterLoadingActivityCallback = registerLoadingActivity();
                    }
                }
            });
            if (!captured_1.isAllDataLoaded()) {
                return this.handleLoading(result);
            }
            return result;
        }
    };
    ComponentConnector.prototype.whenMounted = function (fn) {
        if (this.isMounted) {
            fn();
        }
        else {
            this.onMount = fn;
        }
    };
    ComponentConnector.prototype.handleLoading = function (preliminaryResult) {
        if (hasRenderWhileLoadingCallback(this.component)) {
            return this.component._scrivitoRenderWhileLoading();
        }
        return preliminaryResult;
    };
    ComponentConnector.prototype.unregisterLoadingActivity = function () {
        var unregister = this.unregisterLoadingActivityCallback;
        if (unregister) {
            delete this.unregisterLoadingActivityCallback;
            unregister();
        }
    };
    return ComponentConnector;
}());
function hasRenderWhileLoadingCallback(component) {
    return !!component
        ._scrivitoRenderWhileLoading;
}
function runWithFrozenState(originalRender) {
    var run = runAndCatchErrorsWhileLoading(function () {
        return withFrozenState({
            contextName: 'React.Component#render',
            message: 'Use one of the React lifecycle hooks.',
        }, originalRender);
    });
    return run.success ? run.result : null;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/component_registry.ts
var component_registry_registry = {};
function registerComponentForId(componentId, componentClass) {
    component_registry_registry[componentId] = componentClass;
}
function getComponentForId(componentId) {
    return component_registry_registry[componentId] || null;
}
function registerComponentForAppClass(className, componentClass) {
    registerComponentForId(appClassId(className), componentClass);
}
function getComponentForAppClass(className) {
    return getComponentForId(appClassId(className));
}
// For test purpose only.
function clearComponentRegistry() {
    component_registry_registry = {};
}
function appClassId(className) {
    return "appClass-" + className;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/widget_focus.ts
var currentFocus;
var currentToken = 0;
var handlers = {};
function subscribe(handler) {
    var token = currentToken;
    handlers[token] = handler;
    currentToken += 1;
    return token;
}
function unsubscribe(token) {
    delete handlers[token];
}
function notifyFocus(token) {
    currentFocus = token;
    var handler = handlers[currentFocus];
    if (handler) {
        handler.onFocus();
    }
}
function notifyBlur(token) {
    // Performance optimization: Only re-render the widget, which lost the focus.
    if (token === currentFocus) {
        var handler = handlers[token];
        if (handler) {
            handler.onBlur();
        }
    }
}
// For test purpose only.
function getHandlers() {
    return handlers;
}
// For test purpose only.
function widget_focus_reset() {
    currentFocus = undefined;
    currentToken = 0;
    handlers = {};
}

// CONCATENATED MODULE: ./scrivito_sdk/react/translate.ts

function translate(key) {
    if (ui_adapter_uiAdapter) {
        return ui_adapter_uiAdapter.translate(key);
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/title_for_widget.ts






function titleForWidget(objId, widgetId) {
    return titleForWidgetInWorkspace(current_workspace_currentWorkspaceId(), objId, widgetId);
}
function titleForWidgetInWorkspace(workspaceId, objId, widgetId) {
    var basicObj = basic_obj.getIncludingDeletedInWorkspace(workspaceId, objId);
    if (basicObj === null) {
        return;
    }
    var basicWidget = basicObj.widget(widgetId);
    if (basicWidget === null) {
        return;
    }
    return titleForContent(basicWidget) || titleForClass(basicWidget.objClass());
}
function titleForContent(basicWidget) {
    var appWidget = wrapInAppClass(getWindowRegistry(), basicWidget);
    var className = basicWidget.objClass();
    return invokeEditingConfigCallback(className, 'titleForContent', appWidget);
}
function titleForClass(className) {
    return getEditingConfigFor(className, 'title') || sentenceCase(className);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/element_registry.ts
var element_registry_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};



var element_registry_registry = {};
function registerElement(elementId, element) {
    element_registry_registry[elementId] = element;
}
function unregisterElement(elementId) {
    delete element_registry_registry[elementId];
}
/**
 * Streams `ElementBoundaries` every 1000 ms.
 * Streams `undefined` if the boundaries are not loaded.
 * Streams `null` if element is unknown or has been removed.
 */
function getElementBoundaries(elementId) {
    if (!element_registry_registry[elementId]) {
        return null;
    }
    return getData(elementId).get();
}
// For test purpose only.
function getRegisteredElementId(element) {
    var e_1, _a;
    try {
        for (var _b = element_registry_values(Object.keys(element_registry_registry)), _c = _b.next(); !_c.done; _c = _b.next()) {
            var key = _c.value;
            var elementId = parseInt(key, 10);
            if (element_registry_registry[elementId] === element) {
                return elementId;
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
// For test purpose only.
function calculateElementBoundaries(element) {
    var _a = element.getBoundingClientRect(), left = _a.left, top = _a.top, width = _a.width, height = _a.height;
    return {
        x: left + window.pageXOffset,
        y: top + window.pageYOffset,
        width: width,
        height: height,
    };
}
function getData(elementId) {
    return new loadable_data({
        state: element_registry_getState(elementId),
        stream: new streamable_Streamable(function (subscriber) {
            var updateElementBoundaries = function () {
                var element = element_registry_registry[elementId];
                subscriber.next(element ? calculateElementBoundaries(element) : null);
            };
            updateElementBoundaries();
            var intervalId = window.setInterval(updateElementBoundaries, 1000);
            return function () { return window.clearInterval(intervalId); };
        }),
    });
}
function element_registry_getState(elementId) {
    return appState.subState('elementBoundaries').subState(elementId.toString());
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/content_zone_registry.ts
var content_zone_registry_assign = (undefined && undefined.__assign) || function () {
    content_zone_registry_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return content_zone_registry_assign.apply(this, arguments);
};


function registerContentZone(elementId, content, parentElementId) {
    nextTick(function () {
        return updateRegistry(function (registry) {
            registry[elementId] = {
                content: content,
                parentElementId: parentElementId,
            };
        });
    });
    return function () {
        return nextTick(function () {
            return updateRegistry(function (registry) {
                delete registry[elementId];
            });
        });
    };
}
function getContentZoneData() {
    var registry = getRegistry();
    return Object.keys(registry).map(function (key) {
        var elementId = parseInt(key, 10);
        return content_zone_registry_assign({ elementId: elementId }, registry[elementId]);
    });
}
function updateRegistry(update) {
    var registry = content_zone_registry_assign({}, getRegistry());
    update(registry);
    content_zone_registry_getState().set(registry);
}
function getRegistry() {
    return content_zone_registry_getState().get() || {};
}
function content_zone_registry_getState() {
    return appState.subState('contentZoneRegistry');
}

// CONCATENATED MODULE: ./scrivito_sdk/react/registered_element.tsx
var registered_element_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var registered_element_assign = (undefined && undefined.__assign) || function () {
    registered_element_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return registered_element_assign.apply(this, arguments);
};




function withRegisteredElement(component) {
    var _a;
    return _a = /** @class */ (function (_super) {
            registered_element_extends(class_1, _super);
            function class_1(props) {
                var _this = _super.call(this, props) || this;
                _this.registeredElement = new registered_element_RegisteredElement();
                return _this;
            }
            class_1.prototype.render = function () {
                return external_react_["createElement"](component, registered_element_assign(registered_element_assign({}, this.props), { registeredElement: this.registeredElement }));
            };
            return class_1;
        }(external_react_["Component"])),
        _a.displayName = displayNameFromComponent(component) + "WithRegisteredElement",
        _a;
}
function withContentZone(getContentReferenceFromProps, component) {
    var _a;
    return _a = /** @class */ (function (_super) {
            registered_element_extends(class_2, _super);
            function class_2(props) {
                var _this = _super.call(this, props) || this;
                _this.registeredElement = new registered_element_RegisteredElement();
                return _this;
            }
            class_2.prototype.componentDidMount = function () {
                this.unregisterContentZone = registerContentZone(this.registeredElement.id(), getContentReferenceFromProps(this.props), this.context);
            };
            class_2.prototype.componentWillUnmount = function () {
                if (this.unregisterContentZone) {
                    this.unregisterContentZone();
                }
            };
            class_2.prototype.render = function () {
                return (external_react_["createElement"](ContentZoneContext.Provider, { value: this.registeredElement.id() }, external_react_["createElement"](component, registered_element_assign(registered_element_assign({}, this.props), { registeredElement: this.registeredElement }))));
            };
            return class_2;
        }(external_react_["Component"])),
        _a.displayName = displayNameFromComponent(component) + "WithContentZone",
        _a.contextType = ContentZoneContext,
        _a;
}
var ContentZoneContext = external_react_["createContext"](undefined);
var registered_element_RegisteredElement = /** @class */ (function () {
    function RegisteredElement() {
        this.elementId = RegisteredElement.generateId();
    }
    RegisteredElement.generateId = function () {
        this.currentId++;
        return this.currentId;
    };
    /** The id is immutable, i.e. a RegisteredElement keeps its id forever.
     */
    RegisteredElement.prototype.id = function () {
        return this.elementId;
    };
    /** Set the element to be registered under the id.
     * Call this method inside your React ref callback.
     */
    RegisteredElement.prototype.set = function (element) {
        if (element) {
            registerElement(this.elementId, element);
        }
        else {
            unregisterElement(this.elementId);
        }
    };
    RegisteredElement.currentId = 0;
    return RegisteredElement;
}());

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/comparison_menu_marker.tsx
var comparison_menu_marker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var comparison_menu_marker_a;






/* harmony default export */ var comparison_menu_marker = (withRegisteredElement(connect((comparison_menu_marker_a = /** @class */ (function (_super) {
        comparison_menu_marker_extends(ComparisonMenuMarker, _super);
        function ComparisonMenuMarker(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = _this.onClick.bind(_this);
            return _this;
        }
        ComparisonMenuMarker.prototype.render = function () {
            var _this = this;
            var _a = getMarkerOptions(this.props.modification, this.props.placementModification), iconClassName = _a.iconClassName, markerClassName = _a.markerClassName, tooltip = _a.tooltip, disableMenu = _a.disableMenu;
            var onClick = disableMenu ? undefined : this.onClick;
            return (external_react_["createElement"]("span", { ref: function (element) { return _this.props.registeredElement.set(element); }, className: onClick ? markerClassName : markerClassName + " scrivito_disabled", title: tooltip, onClick: onClick, onMouseOver: this.props.onMouseOver, onMouseOut: this.props.onMouseOut },
                external_react_["createElement"]("i", { className: iconClassName }),
                external_react_["createElement"]("span", { className: "scrivito_editing_marker_title" }, getTitle(this.props.widget))));
        };
        ComparisonMenuMarker.prototype.onClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            presentUiAdapter().showWidgetMenu(this.props.registeredElement.id(), this.props.widget.obj().id(), this.props.widget.id());
        };
        return ComparisonMenuMarker;
    }(external_react_["Component"])),
    comparison_menu_marker_a.displayName = 'Scrivito.ContentTag.ComparisonMenuMarker',
    comparison_menu_marker_a))));
function getTitle(widget) {
    return (titleForWidgetInWorkspace(widget.workspaceId(), widget.obj().id(), widget.id()) || '');
}
function getMarkerOptions(modification, placementModification) {
    var options = {
        iconClassName: 'scrivito_icon',
        markerClassName: 'scrivito_editing_marker',
    };
    switch (modification) {
        case 'new':
            options.iconClassName += ' scrivito_icon_inv_plus';
            options.tooltip = tooltipFor('widget_is_new');
            break;
        case 'edited':
            options.iconClassName += ' scrivito_icon_edited';
            switch (placementModification) {
                case 'new':
                    options.markerClassName += ' scrivito_widget_moved_icon';
                    options.tooltip = tooltipFor('widget_is_edited_and_dragged_here');
                    break;
                case 'deleted':
                    options.markerClassName += ' scrivito_widget_moved_icon';
                    options.tooltip = tooltipFor('widget_is_edited_and_dragged_away');
                    options.disableMenu = true;
                    break;
                default:
                    options.tooltip = tooltipFor('widget_is_edited');
            }
            break;
        case 'deleted':
            options.iconClassName += ' scrivito_icon_trash';
            options.tooltip = tooltipFor('widget_is_deleted');
            break;
        default:
            options.iconClassName += ' scrivito_icon_moved';
            switch (placementModification) {
                case 'new':
                    options.tooltip = tooltipFor('widget_is_dragged_here');
                    break;
                case 'deleted':
                    options.tooltip = tooltipFor('widget_is_dragged_away');
                    options.disableMenu = true;
                    break;
            }
    }
    return options;
}
function tooltipFor(key) {
    return translate("widget_marker." + key);
}

// CONCATENATED MODULE: ./scrivito/setup_dragstart_event.js
function setupDragstartEvent(e) {
    e.dataTransfer.effectAllowed = 'move';
    // Is required in order to dragover event is triggered in FF and Safari.
    // http://stackoverflow.com/questions/21507189/dragenter-dragover-and-drop-events-not-working-in-firefox
    // IE 11 however does not allow to set the data, which results in a security exception.
    try {
        e.dataTransfer.setData('text/plain', e.target.id);
    }
    catch (error) {
        // Ignore.
    }
}
/* harmony default export */ var setup_dragstart_event = (setupDragstartEvent);

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/editing_menu_marker.tsx
var editing_menu_marker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var editing_menu_marker_a;






/* harmony default export */ var editing_menu_marker = (withRegisteredElement(connect((editing_menu_marker_a = /** @class */ (function (_super) {
        editing_menu_marker_extends(EditingMenuMarker, _super);
        function EditingMenuMarker(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = _this.onClick.bind(_this);
            _this.onDragStart = _this.onDragStart.bind(_this);
            _this.onDragEnd = _this.onDragEnd.bind(_this);
            return _this;
        }
        EditingMenuMarker.prototype.render = function () {
            var _this = this;
            return (external_react_["createElement"]("span", { ref: function (element) { return _this.props.registeredElement.set(element); }, className: "scrivito_editing_marker", title: this.props.tooltip, onClick: this.onClick, onMouseOver: this.props.onMouseOver, onMouseOut: this.props.onMouseOut, draggable: true, onDragStart: this.onDragStart, onDragEnd: this.onDragEnd },
                external_react_["createElement"]("i", { className: "scrivito_icon" }),
                external_react_["createElement"]("span", { className: "scrivito_editing_marker_title" }, this.title())));
        };
        EditingMenuMarker.prototype.onClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            presentUiAdapter().showWidgetMenu(this.props.registeredElement.id(), this.props.widget.obj().id(), this.props.widget.id());
        };
        EditingMenuMarker.prototype.onDragStart = function (e) {
            setup_dragstart_event(e);
            presentUiAdapter().startDrag(this.props.widget.obj().id(), this.props.widget.id());
            this.props.setDragState(true);
        };
        EditingMenuMarker.prototype.onDragEnd = function () {
            presentUiAdapter().endDrag();
            this.props.setDragState(false);
        };
        EditingMenuMarker.prototype.title = function () {
            return titleForWidget(this.props.widget.obj().id(), this.props.widget.id());
        };
        return EditingMenuMarker;
    }(external_react_["Component"])),
    editing_menu_marker_a.displayName = 'Scrivito.ContentTag.EditingMenuMarker',
    editing_menu_marker_a))));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/option_marker.tsx
var option_marker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var option_marker_a;


/* harmony default export */ var option_marker = (connect((option_marker_a = /** @class */ (function (_super) {
        option_marker_extends(OptionMarker, _super);
        function OptionMarker(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = _this.onClick.bind(_this);
            return _this;
        }
        OptionMarker.prototype.render = function () {
            var className = "scrivito_option_marker scrivito_" + this.props.position;
            if (this.props.isAlwaysShown) {
                className += ' scrivito_visible';
            }
            return (external_react_["createElement"]("span", { className: className, onClick: this.onClick, onMouseOver: this.props.onMouseOver, onMouseOut: this.props.onMouseOut },
                external_react_["createElement"]("i", { className: "scrivito_icon scrivito_icon_marker_plus" })));
        };
        OptionMarker.prototype.onClick = function (e) {
            e.stopPropagation();
            this.props.insertWidget(this.props.widget, this.props.position);
        };
        return OptionMarker;
    }(external_react_["Component"])),
    option_marker_a.displayName = 'Scrivito.OptionMarker',
    option_marker_a)));

// CONCATENATED MODULE: ./scrivito_sdk/react/create_connected_context.tsx


function createConnectedContext(value) {
    var _a = external_react_["createContext"](value), Provider = _a.Provider, Consumer = _a.Consumer;
    return {
        Provider: Provider,
        Consumer: connectContextConsumer(Consumer),
    };
}
function connectContextConsumer(Consumer) {
    var ConnectedCallback = connect(function (_a) {
        var callback = _a.callback, value = _a.value;
        return callback(value);
    });
    return function (_a) {
        var children = _a.children;
        return (external_react_["createElement"](Consumer, null, function (value) { return external_react_["createElement"](ConnectedCallback, { callback: children, value: value }); }));
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/react/in_place_editing_enabled_context.ts
var in_place_editing_enabled_context_a;

var InPlaceEditingEnabledContextConsumer = (in_place_editing_enabled_context_a = createConnectedContext(true), in_place_editing_enabled_context_a.Consumer), InPlaceEditingEnabledContextProvider = in_place_editing_enabled_context_a.Provider;

// CONCATENATED MODULE: ./scrivito_sdk/react/format_widget_validation_results.ts

function formatWidgetValidationResults(validationReportEntries) {
    return validationReportEntries
        .map(function (reportEntry) { return extractTitleAndDescription(reportEntry.message)[0]; })
        .join('\n');
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/constraints_validation_callback.ts

var constraints_validation_callback_constraintsValidationCallback;
function setConstraintsValidationCallback(callback) {
    constraints_validation_callback_constraintsValidationCallback = callback;
}
function getConstraintsValidationCallback() {
    if (constraints_validation_callback_constraintsValidationCallback) {
        return constraints_validation_callback_constraintsValidationCallback;
    }
    throw new ScrivitoError('Constraints validation callback is not configured. ' +
        'Forgot to call Scrivito.configure with the "constraintsCallback" option?');
}
// For test purpose only.
function resetConstraintsValidationCallback() {
    constraints_validation_callback_constraintsValidationCallback = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/validation_results.ts
var validation_results_assign = (undefined && undefined.__assign) || function () {
    validation_results_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return validation_results_assign.apply(this, arguments);
};
var validation_results_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var validation_results_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(validation_results_read(arguments[i]));
    return ar;
};










var SEVERITY_COMPARISON_MATRIX = {
    error: { error: 0, warning: -1, info: -1 },
    warning: { error: 1, warning: 0, info: -1 },
    info: { error: 1, warning: 1, info: 0 },
};
var checkValidationResultsFor = checkArgumentsFor('validationResultsFor', [['model', external_tcomb_validation_.union([ObjType, WidgetType])], ['attributeName', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/validationResultsFor',
});
function validationResultsFor(model, attributeName) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    checkValidationResultsFor.apply(void 0, validation_results_spread([model, attributeName], excessArgs));
    return getValidationReportEntries(model._scrivitoPrivateContent)
        .filter(function (reportEntry) {
        return isAttributeValidationReportEntry(reportEntry) &&
            reportEntry.attributeName === attributeName;
    })
        .sort(function (_a, _b) {
        var severityA = _a.severity;
        var severityB = _b.severity;
        return SEVERITY_COMPARISON_MATRIX[severityA][severityB];
    })
        .map(function (reportEntry) { return ({
        message: reportEntry.message,
        severity: reportEntry.severity,
    }); });
}
function getValidationReportEntries(basicModel) {
    var obj = basicModel instanceof basic_obj ? basicModel : basicModel.obj();
    if (!(obj.isEdited() || obj.isNew()))
        return [];
    var objClassName = basicModel.objClass();
    var validationsConfig = getValidationsConfigFor(objClassName);
    if (!validationsConfig)
        return [];
    var registry = getWindowRegistry();
    var content = wrapInAppClass(registry, basicModel);
    var reportEntries = [];
    validationsConfig.forEach(function (contentCallbackOrAttributeValidations) {
        reportEntries = validation_results_spread(reportEntries, (isContentValidationCallback(contentCallbackOrAttributeValidations)
            ? getReportEntriesForContentValidationCallback(contentCallbackOrAttributeValidations, content)
            : getReportEntriesForAttributeValidations(contentCallbackOrAttributeValidations, content)));
    });
    return reportEntries;
}
function getReportEntriesForContentValidationCallback(callback, content) {
    return collectValidationResultObjects(executeValidationCallback(function () { return callback(content); }), "Please check validations for the model " + content._scrivitoPrivateContent.objClass() + ". ").map(function (resultObject) { return ({
        message: resultObject.message,
        severity: resultObject.severity || 'error',
    }); });
}
function getReportEntriesForAttributeValidations(validations, content) {
    var _a = validation_results_read(validations), attributeName = _a[0], callbacksOrConstraints = _a.slice(1);
    var objClass = content._scrivitoPrivateContent.objClass();
    if (isSystemAttribute(attributeName)) {
        throwNextTick(new ArgumentError("Found an attribute validation callback for the system attribute " + attributeName + " of the model " + objClass + ". " +
            'Attribute validations can only be used for custom attributes. ' +
            'For system attributes please use content validations. ' +
            'Visit https://scrivito.com/js-sdk/provideEditingConfig#validations for more information.'));
        return [];
    }
    var basicField = schema_Schema.basicFieldFor(content, attributeName);
    if (!basicField)
        return [];
    var appValue = wrapInAppClass(getWindowRegistry(), basicField.get());
    var callbackParams = validation_results_assign({ name: attributeName }, (isObj(content)
        ? { content: content, obj: content }
        : { content: content, widget: content }));
    return Object(external_underscore_["flatten"])(callbacksOrConstraints.map(function (callbackOrConstraints) {
        if (isAttributeValidationCallback(callbackOrConstraints)) {
            return getReportEntriesForAttributeValidationCallback(callbackOrConstraints, attributeName, appValue, callbackParams);
        }
        if (isAttributeValidationConstraintsWithOptions(callbackOrConstraints)) {
            var _a = validation_results_read(callbackOrConstraints, 2), validationOptions = _a[0], constraints = _a[1];
            return getReportEntriesForAttributeValidationCallback(getConstraintsValidationCallback()(constraints), attributeName, appValue, callbackParams, validationOptions);
        }
        if (isAttributeValidationConstraints(callbackOrConstraints)) {
            return getReportEntriesForAttributeValidationCallback(getConstraintsValidationCallback()(callbackOrConstraints), attributeName, appValue, callbackParams);
        }
        throw new ArgumentError("Expected a validation callback or constraints for the attribute " + attributeName + " of the model " + objClass + ". " +
            'Visit https://scrivito.com/js-sdk/provideEditingConfig#validations for more information.');
    }));
}
function getReportEntriesForAttributeValidationCallback(callback, attributeName, attributeValue, callbackParams, validationOptions) {
    var objClass = callbackParams.content._scrivitoPrivateContent.objClass();
    return collectValidationResultObjects(executeValidationCallback(function () { return callback(attributeValue, callbackParams); }), "Please check validations for the attribute " + attributeName + " of the model " + objClass + ". ").map(function (resultObject) { return ({
        attributeName: attributeName,
        message: resultObject.message,
        severity: (validationOptions && validationOptions.severity) ||
            resultObject.severity ||
            'error',
    }); });
}
function collectValidationResultObjects(maybeValidationResult, debuggingHint) {
    if (!maybeValidationResult)
        return [];
    if (Object(external_underscore_["isString"])(maybeValidationResult)) {
        return [{ message: maybeValidationResult }];
    }
    if (Object(external_underscore_["isArray"])(maybeValidationResult) &&
        Object(external_underscore_["every"])(maybeValidationResult, external_underscore_["isString"])) {
        return maybeValidationResult.map(function (message) { return ({ message: message }); });
    }
    if (isValidationResultObject(maybeValidationResult)) {
        return [maybeValidationResult];
    }
    throwNextTick(new ArgumentError("A validation must return a validation result or a falsy value. " + debuggingHint +
        'Visit https://scrivito.com/js-sdk/provideEditingConfig#validations for more information.'));
    return [];
}
function isValidationResultObject(maybeValidationResult) {
    return (!!maybeValidationResult &&
        typeof maybeValidationResult === 'object' &&
        !!maybeValidationResult.message &&
        isValidationSeverityLevel(maybeValidationResult.severity));
}
function isValidationSeverityLevel(maybeValidationSeverityLevel) {
    return (typeof maybeValidationSeverityLevel === 'string' &&
        VALIDATION_SEVERITY_LEVELS.indexOf(maybeValidationSeverityLevel) !== -1);
}
function executeValidationCallback(callback) {
    try {
        return callback();
    }
    catch (error) {
        throwNextTick(error);
        return [];
    }
}
function isObj(maybeObj) {
    return maybeObj._scrivitoPrivateContent instanceof basic_obj;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/get_current_page_id.ts


function getCurrentPageId() {
    return loadableWithDefault(null, getCurrentPageIdFromState);
}
function getCurrentPageIdFromState() {
    var pageState = getCurrentPageState();
    if (pageState && isScrivitoPage(pageState)) {
        return pageState.objId;
    }
    return null;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/scroll_into_view.ts

function registerScrollTarget(target, reveal) {
    scrollTargetRegistry[keyFor(target)] = reveal;
    if (requestedTarget === keyFor(target)) {
        reveal();
    }
}
function scrollIntoView(target) {
    if (target.objId !== getCurrentPageId())
        return;
    var reveal = scrollTargetRegistry[keyFor(target)];
    if (reveal) {
        reveal();
    }
    else {
        requestedTarget = keyFor(target);
    }
}
function keyFor(target) {
    return [target.objId, target.attributeName, target.widgetId].toString();
}
var scrollTargetRegistry = {};
var requestedTarget;
// For test purpose only.
function resetScrollIntoView() {
    scrollTargetRegistry = {};
    requestedTarget = '';
}

// CONCATENATED MODULE: ./scrivito_sdk/react/scroll_element_into_view.ts
function scrollElementIntoView(element) {
    // See https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView for details
    // * Chrome and Firefox support all options
    // * Safari supports the most important options: "block" and "inline" (tested with Safari 12.1.1)
    // * Edge: Unknown
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/react/always_show_option_markers.ts
// For test purpose only.
// eslint-disable-next-line import/no-mutable-exports
var shouldAlwaysShowOptionMarkers = false;
function alwaysShowOptionMarkers() {
    shouldAlwaysShowOptionMarkers = true;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/widget_tag.tsx
var widget_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var widget_tag_assign = (undefined && undefined.__assign) || function () {
    widget_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return widget_tag_assign.apply(this, arguments);
};
var widget_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var widget_tag_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var widget_tag_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(widget_tag_read(arguments[i]));
    return ar;
};
var widget_tag_a;



















var WidgetTagContext = external_react_["createContext"]({});
/* harmony default export */ var widget_tag = (connect(function (props) {
    var sanitizedProps = widget_tag_assign({}, props);
    delete sanitizedProps.widget;
    delete sanitizedProps.placementModification;
    delete sanitizedProps.registeredElement;
    return (external_react_["createElement"](WidgetTagContext.Consumer, null, function (propsFromContext) { return (external_react_["createElement"](WidgetTag, widget_tag_assign({}, propsFromContext, sanitizedProps))); }));
}));
var WidgetTag = withContentZone(function (_a) {
    var widget = _a.widget;
    // This should never happen!
    // Since we're checking the presence of the widget inside the `render` method of the component.
    if (!widget) {
        throw new InternalError('Missing widget');
    }
    return {
        type: 'widget',
        objId: widget.obj().id(),
        widgetId: widget.id(),
    };
}, connect((widget_tag_a = /** @class */ (function (_super) {
        widget_tag_extends(class_1, _super);
        function class_1(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                hasFocus: false,
                isDragging: false,
                isFocusFadedOut: true,
                isRevealed: false,
                isRevealedOdd: false,
            };
            _this.onMouseOver = _this.onMouseOver.bind(_this);
            _this.onMouseOut = _this.onMouseOut.bind(_this);
            _this.onWidgetFocus = _this.onWidgetFocus.bind(_this);
            _this.onWidgetBlur = _this.onWidgetBlur.bind(_this);
            _this.lockFocus = _this.lockFocus.bind(_this);
            _this.unlockFocus = _this.unlockFocus.bind(_this);
            _this.setDragState = _this.setDragState.bind(_this);
            return _this;
        }
        class_1.prototype.componentDidMount = function () {
            var _this = this;
            var widget = this.getWidget();
            var element = this.widgetTagElement;
            if (element) {
                registerScrollTarget({
                    objId: widget.obj().id(),
                    widgetId: widget.id(),
                }, function () {
                    scrollElementIntoView(element);
                    _this.setRevealed();
                });
            }
            this.focusToken = subscribe({
                onFocus: this.onWidgetFocus,
                onBlur: this.onWidgetBlur,
            });
        };
        class_1.prototype.componentWillUnmount = function () {
            unsubscribe(this.focusToken);
        };
        class_1.prototype.render = function () {
            var _this = this;
            if (isInPlaceEditingActive()) {
                return (external_react_["createElement"](InPlaceEditingEnabledContextConsumer, null, function (isInPlaceEditingEnabled) {
                    return isInPlaceEditingEnabled
                        ? _this.renderWithEditingMarker()
                        : _this.renderWithoutMarker();
                }));
            }
            if (isComparisonActive()) {
                var modification = this.getWidget().modification();
                var placementModification = this.props.placementModification;
                if ((modification || placementModification) &&
                    !this.isChildOfDeletedWidget(modification, placementModification)) {
                    return this.renderWithComparisonMarker(modification, placementModification);
                }
            }
            return this.renderWithoutMarker();
        };
        // A child widget of a deleted widget should not be marked as deleted and should not have a
        // marker. An easy way to detect a child widget of a deleted widget is to check if it is also
        // deleted, but has no placement modification: A deleted parent widget stems from the published
        // workspace and its children never have placement modifications.
        class_1.prototype.isChildOfDeletedWidget = function (modification, placementModification) {
            return modification === 'deleted' && !placementModification;
        };
        class_1.prototype.renderWithEditingMarker = function () {
            var _this = this;
            var widget = this.getWidget();
            var validationResults = getValidationReportEntries(widget);
            return external_react_["createElement"](this.props.tag, widget_tag_assign(widget_tag_assign(widget_tag_assign({}, this.forwardedPropsWithMarker()), { ref: function (element) {
                    _this.props.registeredElement.set(element);
                    _this.widgetTagElement = element;
                }, className: this.className(), style: this.style(), onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut, children: widget_tag_spread([
                    external_react_["createElement"](editing_menu_marker, { key: "menuMarker", widget: widget, tooltip: formatWidgetValidationResults(validationResults), setDragState: this.setDragState, onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus })
                ], external_react_["Children"].toArray(this.props.children), [
                    this.renderOptionMarker('top'),
                    this.renderOptionMarker('bottom'),
                ]) }), this.dataProps({ validationResults: validationResults })));
        };
        class_1.prototype.renderWithComparisonMarker = function (modification, placementModification) {
            var _this = this;
            return external_react_["createElement"](this.props.tag, widget_tag_assign(widget_tag_assign(widget_tag_assign({}, this.forwardedPropsWithMarker()), { ref: function (element) {
                    _this.widgetTagElement = element;
                }, className: this.className(), style: this.style(), onMouseOver: this.onMouseOver, onMouseOut: this.onMouseOut, children: widget_tag_spread([
                    external_react_["createElement"](comparison_menu_marker, { key: "menuMarker", widget: this.getWidget(), modification: modification, placementModification: placementModification, onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus })
                ], external_react_["Children"].toArray(this.props.children)) }), this.dataProps({
                modification: modification || placementModification,
            })));
        };
        class_1.prototype.renderWithoutMarker = function () {
            var _this = this;
            return external_react_["createElement"](this.props.tag, widget_tag_assign(widget_tag_assign({}, this.forwardedProps()), { ref: function (element) {
                    _this.widgetTagElement = element;
                } }));
        };
        class_1.prototype.getWidget = function () {
            var widget = this.props.widget;
            if (!widget) {
                throw new ScrivitoError('Detected inappropriate placing of Scrivito.WidgetTag: ' +
                    'It is intended to be used exclusively as top-level element inside a Widget component.');
            }
            return widget;
        };
        class_1.prototype.forwardedProps = function () {
            var _a = this.props, tag = _a.tag, widget = _a.widget, placementModification = _a.placementModification, registeredElement = _a.registeredElement, otherProps = widget_tag_rest(_a, ["tag", "widget", "placementModification", "registeredElement"]);
            return otherProps;
        };
        class_1.prototype.forwardedPropsWithMarker = function () {
            var _a = this.forwardedProps(), className = _a.className, style = _a.style, otherProps = widget_tag_rest(_a, ["className", "style"]);
            return otherProps;
        };
        class_1.prototype.setDragState = function (isDragging) {
            this.setState({ isDragging: isDragging });
        };
        class_1.prototype.className = function () {
            var className = this.props.className || '';
            if (isInPlaceEditingActive() && this.hasVisibleFocus()) {
                className += ' scrivito_active scrivito_entered';
            }
            if (isComparisonActive() && this.isDeleted()) {
                className += ' scrivito_modification_opacity';
            }
            if (this.state.isRevealed) {
                className += this.state.isRevealedOdd
                    ? ' scrivito_wiggle_odd'
                    : ' scrivito_wiggle_even';
            }
            return className;
        };
        class_1.prototype.hasVisibleFocus = function () {
            return this.state.hasFocus && !this.state.isFocusFadedOut;
        };
        class_1.prototype.isDeleted = function () {
            return (this.props.placementModification === 'deleted' ||
                this.getWidget().modification() === 'deleted');
        };
        class_1.prototype.dataProps = function (_a) {
            var modification = _a.modification, validationResults = _a.validationResults;
            var dataProps = {
                'data-scrivito-private-widget': 'true',
                'data-scrivito-private-dropzone': 'true',
            };
            if (this.isStructureWidget()) {
                dataProps['data-scrivito-private-structure-widget'] = 'true';
            }
            if (modification) {
                dataProps['data-scrivito-private-widget-modification'] = modification;
            }
            if (this.hasValidationResultsFor('error', validationResults)) {
                dataProps['data-scrivito-private-widget-validation-error'] = 'true';
            }
            else if (this.hasValidationResultsFor('warning', validationResults)) {
                dataProps['data-scrivito-private-widget-validation-warning'] = 'true';
            }
            else if (this.hasValidationResultsFor('info', validationResults)) {
                dataProps['data-scrivito-private-widget-validation-info'] = 'true';
            }
            return dataProps;
        };
        class_1.prototype.hasValidationResultsFor = function (severity, entries) {
            return !!entries && entries.some(function (entry) { return entry.severity === severity; });
        };
        class_1.prototype.style = function () {
            if (this.state.isDragging) {
                if (this.props.style) {
                    return widget_tag_assign(widget_tag_assign({}, this.props.style), { opacity: 0.5 });
                }
                return { opacity: 0.5 };
            }
            return this.props.style;
        };
        class_1.prototype.isStructureWidget = function () {
            var registry = getWindowRegistry();
            var widget = this.getWidget();
            if (widget) {
                var appClass = registry.widgetClassFor(widget.objClass());
                var schema = schema_Schema.forClass(appClass);
                if (schema) {
                    return Object(external_underscore_["some"])(schema.attributes, function (definition, _) {
                        return definition[0] === 'widgetlist';
                    });
                }
            }
            return false;
        };
        class_1.prototype.onMouseOver = function (e) {
            e.stopPropagation();
            notifyFocus(this.focusToken);
        };
        class_1.prototype.onMouseOut = function (e) {
            e.stopPropagation();
            notifyBlur(this.focusToken);
        };
        class_1.prototype.onWidgetFocus = function () {
            var _this = this;
            this.setState({
                hasFocus: true,
                isFocusFadedOut: false,
            });
            if (this.fadeOutFocusTimeout) {
                window.clearTimeout(this.fadeOutFocusTimeout);
            }
            if (!this.isStructureWidget()) {
                this.fadeOutFocusTimeout = window.setTimeout(function () { return _this.fadeOutFocus(); }, 1000);
            }
        };
        class_1.prototype.fadeOutFocus = function () {
            if (!this.state.isFocusFadedOut && !this.isFocusLocked) {
                this.setState({ isFocusFadedOut: true });
            }
        };
        class_1.prototype.setRevealed = function () {
            this.setState({
                isRevealed: true,
                isRevealedOdd: !this.state.isRevealedOdd,
            });
        };
        class_1.prototype.lockFocus = function () {
            this.isFocusLocked = true;
        };
        class_1.prototype.unlockFocus = function () {
            this.isFocusLocked = false;
        };
        class_1.prototype.onWidgetBlur = function () {
            this.setState({ hasFocus: false });
        };
        class_1.prototype.renderOptionMarker = function (position) {
            return (external_react_["createElement"](option_marker, { key: "optionMarker-" + position, position: position, widget: this.getWidget(), insertWidget: insertWidget, isAlwaysShown: shouldAlwaysShowOptionMarkers, onMouseOver: this.lockFocus, onMouseOut: this.unlockFocus }));
        };
        return class_1;
    }(external_react_["Component"])),
    widget_tag_a.displayName = 'Scrivito.WidgetTag',
    widget_tag_a.defaultProps = {
        tag: 'div',
    },
    widget_tag_a)));
function insertWidget(widget, position) {
    ui_adapter_uiAdapter.insertWidget(widget.obj().id(), widget.id(), position);
}

// CONCATENATED MODULE: ./scrivito_sdk/react/provide_component.ts
var provide_component_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







// public API
function provideComponent(className, component) {
    assertValidComponent(component);
    if (isComponentMissingName(component)) {
        component.displayName = className;
    }
    var connectedComponent = connect(component);
    var wrappedComponent = ensureWidgetWrappedInWidgetTag(connectedComponent);
    registerComponentForAppClass(className, wrappedComponent);
}
function assertValidComponent(component) {
    if (typeof component !== 'function') {
        throw new ArgumentError('Scrivito.provideComponent expected a valid React component' +
            (", but received " + prettyPrint(component)));
    }
}
function ensureWidgetWrappedInWidgetTag(component) {
    var wrappedComponent = /** @class */ (function (_super) {
        provide_component_extends(wrappedComponent, _super);
        function wrappedComponent() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        wrappedComponent.prototype.render = function () {
            if (this.props.widget) {
                var value = _super.prototype.render.call(this);
                if (getElementType(value) !== widget_tag) {
                    return external_react_["createElement"](widget_tag, { children: value });
                }
                return value;
            }
            return _super.prototype.render.call(this);
        };
        return wrappedComponent;
    }(component));
    wrappedComponent.displayName = displayNameFromComponent(component);
    return wrappedComponent;
}
function isComponentMissingName(component) {
    // In some browsers functional components are missing the `name` property.
    // In some other browsers they have that property, but the value is meaningless: `_class`.
    return (!component.displayName &&
        (!component.name ||
            component.name === '_class' ||
            component.name.substring(0, 6) === 'class_'));
}

// CONCATENATED MODULE: ./scrivito_sdk/react/register_component.ts


function registerComponent(componentId, component) {
    registerComponentForId(componentId, connect(component));
}

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6);

// CONCATENATED MODULE: ./scrivito_sdk/react/show_custom_component.ts









var show_custom_component_element;
function showCustomComponent(componentId, props) {
    var component = getComponentForId(componentId);
    if (component === null) {
        throw new ArgumentError("Component with ID \"" + componentId + "\" not found. " +
            'Please make sure you registered it using "Scrivito.registerComponent".');
    }
    loadComponentProps(props).then(function (componentProps) {
        if (show_custom_component_element) {
            external_react_dom_["render"](external_react_["createElement"](component, componentProps), show_custom_component_element);
        }
        else {
            show_custom_component_element = replaceDOMWithComponent(getDocument(), component, componentProps);
        }
    });
}
// For test purpose only.
function show_custom_component_reset() {
    show_custom_component_element = undefined;
}
function replaceDOMWithComponent(doc, component, props) {
    var div = doc.createElement('div');
    doc.body.innerHTML = '';
    doc.body.appendChild(div);
    external_react_dom_["render"](external_react_["createElement"](component, props), div);
    return div;
}
function loadComponentProps(props) {
    if (!props)
        return ScrivitoPromise.resolve({});
    return isWidgetCustomComponentProps(props)
        ? loadComponentPropsForWidget(props)
        : loadComponentPropsForObj(props);
}
function isWidgetCustomComponentProps(props) {
    return !!props.widgetId;
}
function loadComponentPropsForObj(props) {
    return load(function () { return basic_obj.get(props.objId); }).then(function (basicObj) {
        if (!basicObj) {
            throw new ScrivitoError("Missing obj with ID " + props.objId);
        }
        var obj = wrapInAppClass(getWindowRegistry(), basicObj);
        return { obj: obj, page: obj };
    });
}
function loadComponentPropsForWidget(props) {
    return load(function () { return basic_obj.get(props.objId); }).then(function (basicObj) {
        if (!basicObj) {
            throw new ScrivitoError("Missing obj with ID " + props.objId);
        }
        var basicWidget = basicObj.widget(props.widgetId);
        if (!basicWidget) {
            throw new ScrivitoError("Missing widget with ID " + props.widgetId);
        }
        return { widget: wrapInAppClass(getWindowRegistry(), basicWidget) };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/scale_down_binary.ts


var prerenderContext = new context_container();
var prerenderWidth = 128;
function setPrerenderWidth(width) {
    prerenderWidth = width;
}
function usePrerenderScaling(fn) {
    return prerenderContext.runWith(true, fn);
}
function scaleDownBinary(binary) {
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return { initialUrl: binary.url() };
    }
    var initialUrl = optimizeForPrerender(binary).url();
    if (prerenderContext.current()) {
        return { initialUrl: initialUrl };
    }
    var highResUrlToDecode = optimizeForScreen(binary).urlWithoutPlaceholder();
    if (!highResUrlToDecode || initialUrl === highResUrlToDecode) {
        return { initialUrl: initialUrl };
    }
    return { initialUrl: initialUrl, highResUrlToDecode: highResUrlToDecode };
}
function optimizeForPrerender(binary) {
    return binary.optimizeFor({ width: prerenderWidth });
}
function optimizeForScreen(binary) {
    // The binary service never scales up, so we transform all images, regardless of their width.
    return binary.optimizeFor({ width: screen().width * devicePixelRatio() });
}

// EXTERNAL MODULE: external "tcomb-react"
var external_tcomb_react_ = __webpack_require__(11);

// CONCATENATED MODULE: ./scrivito_sdk/react/tcomb.ts



// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/decode_or_load_img.ts

function decodeOrLoadImg(imageUrl) {
    var img = new Image();
    return hasDecodeImg(img) ? decodeImg(img, imageUrl) : loadImg(img, imageUrl);
}
function hasDecodeImg(img) {
    return !!img.decode;
}
// For test purpose only
function decodeImg(img, imageUrl) {
    if (!hasDecodeImg(img)) {
        throw new Error('Browser does not support decode!');
    }
    img.src = imageUrl;
    return imgDecode(img)().then(function () { return img; });
}
// For test purpose only
function imgDecode(img) {
    return img.decode && img.decode.bind(img);
}
// For test purpose only
function loadImg(img, imageUrl) {
    return new ScrivitoPromise(function (resolve, reject) {
        img.onload = function () { return resolve(img); };
        img.onerror = function (event) { return reject(event); };
        img.src = imageUrl;
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/get_css_canvas_context.ts
// currently only supported in safari
function getCSSCanvasContext(contextType, identifier, width, height) {
    if (!documentGetCSSCanvasContext()) {
        throw new Error('Browser does not support getCSSCanvasContext!');
    }
    return documentGetCSSCanvasContext()(contextType, identifier, width, height);
}
function clearGetCSSCanvasContext(identifier) {
    getCSSCanvasContext('2d', identifier, 0, 0);
}
function hasGetCSSCanvasContext() {
    return !!documentGetCSSCanvasContext();
}
// For test purpose only
function documentGetCSSCanvasContext() {
    return (document.getCSSCanvasContext &&
        document.getCSSCanvasContext.bind(document));
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/moz_set_image_element.ts
function mozSetImageElement(imageElementId, canvas) {
    if (!hasMozSetImageElement()) {
        throw new Error('Browser does not support mozSetImageElement!');
    }
    documentMozSetImageElement()(imageElementId, canvas);
}
function clearMozSetImageElement(imageElementId) {
    if (!hasMozSetImageElement()) {
        throw new Error('Browser does not support mozSetImageElement!');
    }
    documentMozSetImageElement()(imageElementId, null);
}
function hasMozSetImageElement() {
    return !!documentMozSetImageElement();
}
// For test purpose only
function documentMozSetImageElement() {
    return (document.mozSetImageElement &&
        document.mozSetImageElement.bind(document));
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode/draw_img_on_canvas.ts
function drawImgOnCanvas(img) {
    var canvas = document.createElement('canvas');
    canvas.height = img.height;
    canvas.width = img.width;
    var ctx = canvas.getContext('2d');
    drawOnCanvasContext(img, ctx);
    return canvas;
}
// For test purpose only
function drawOnCanvasContext(img, ctx) {
    ctx.drawImage(img, 0, 0);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode_background_image.ts




function decodeBackgroundImage(imageUrl) {
    return decodeOrLoadImg(imageUrl)
        .then(function (img) {
        if (hasMozSetImageElement())
            return mozElement(img);
        if (hasGetCSSCanvasContext())
            return webkitCanvas(img);
        if (!hasDecodeImg(img))
            return drawCanvas(img);
        return { decodedBackgroundUrl: "url(" + imageUrl + ")" };
    })
        .catch(function () { return ({ decodedBackgroundUrl: "url(" + imageUrl + ")" }); });
}
function mozElement(img) {
    var canvas = drawImgOnCanvas(img);
    var mozCanvasIdentifier = "ScrivitoBackgroundImage" + nextCounter();
    mozSetImageElement(mozCanvasIdentifier, canvas);
    return {
        decodedBackgroundUrl: "-moz-element(#" + mozCanvasIdentifier + ")",
        clear: function () { return clearMozSetImageElement(mozCanvasIdentifier); },
    };
}
function webkitCanvas(img) {
    var webkitCanvasIdentifier = "ScrivitoBackgroundImage" + nextCounter();
    var ctx = getCSSCanvasContext('2d', webkitCanvasIdentifier, img.width, img.height);
    drawOnCanvasContext(img, ctx);
    return {
        decodedBackgroundUrl: "-webkit-canvas(" + webkitCanvasIdentifier + ")",
        clear: function () { return clearGetCSSCanvasContext(webkitCanvasIdentifier); },
    };
}
function drawCanvas(img) {
    drawImgOnCanvas(img);
    return { decodedBackgroundUrl: "url(" + img.src + ")" };
}
var counter = 0;
function nextCounter() {
    counter += 1;
    return counter;
}
// For test purpose only
function resetCounter() {
    counter = 0;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/background_image_decoder.ts


var background_image_decoder_BackgroundImageDecoder = /** @class */ (function () {
    function BackgroundImageDecoder(onUpdateCallback) {
        this.onUpdateCallback = onUpdateCallback;
        this.decodedUrls = {};
        this.loadingRegistry = {};
        this.clears = [];
    }
    BackgroundImageDecoder.prototype.getBackgroundImage = function (imageUrl) {
        var resultUrl = this.decodedUrls[imageUrl];
        if (!resultUrl) {
            this.ensureLoading(imageUrl);
        }
        return resultUrl;
    };
    BackgroundImageDecoder.prototype.clear = function () {
        this.clears.map(function (clear) { return clear(); });
    };
    BackgroundImageDecoder.prototype.ensureLoading = function (imageUrl) {
        var _this = this;
        if (this.decodedUrls[imageUrl] || this.loadingRegistry[imageUrl])
            return;
        var promise = decodeBackgroundImage(imageUrl).then(function (_a) {
            var decodedBackgroundUrl = _a.decodedBackgroundUrl, clear = _a.clear;
            if (clear) {
                _this.clears.push(clear);
            }
            _this.decodedUrls[imageUrl] = decodedBackgroundUrl;
            _this.onUpdateCallback();
        });
        this.loadingRegistry[imageUrl] = promiseAndFinally(promise, function () { return delete _this.loadingRegistry[imageUrl]; });
    };
    return BackgroundImageDecoder;
}());


// CONCATENATED MODULE: ./scrivito_sdk/react/components/background_image_tag.tsx
var background_image_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var background_image_tag_assign = (undefined && undefined.__assign) || function () {
    background_image_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return background_image_tag_assign.apply(this, arguments);
};
var background_image_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var background_image_tag_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};











var ValidPlainBackground = external_tcomb_validation_.struct({
    image: external_tcomb_validation_.String,
    attachment: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    clip: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    color: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    origin: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    position: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    repeat: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    size: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var ValidScrivitoBackground = external_tcomb_validation_.struct({
    image: external_tcomb_validation_.union([BinaryType, ObjType, external_tcomb_validation_.String, external_tcomb_validation_.Nil]),
    attachment: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['fixed', 'scroll'])),
    clip: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['border-box'])),
    color: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['transparent'])),
    origin: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['padding-box'])),
    position: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['center', 'left', 'right', 'top', 'bottom'])),
    repeat: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['no-repeat'])),
    size: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['contain', 'cover'])),
});
var ValidBackground = external_tcomb_validation_.union([
    ValidPlainBackground,
    ValidScrivitoBackground,
]);
ValidBackground.dispatch = function (background) {
    return isPlainBackground(background)
        ? ValidPlainBackground
        : ValidScrivitoBackground;
};
var ValidBackgroundList = external_tcomb_validation_.list(ValidBackground);
var ValidBackgroundOrBackgroundList = external_tcomb_validation_.union([
    ValidBackground,
    ValidBackgroundList,
]);
ValidBackgroundOrBackgroundList.dispatch = function (background) {
    return Object(external_underscore_["isArray"])(background) ? ValidBackgroundList : ValidBackground;
};
var background_image_tag_BackgroundImageTag = /** @class */ (function (_super) {
    background_image_tag_extends(BackgroundImageTag, _super);
    function BackgroundImageTag(props) {
        var _this = _super.call(this, props) || this;
        _this.decoder = createBackgroundImageDecoder(function () { return _this.forceUpdate(); });
        _this.binaryToUrl = _this.binaryToUrl.bind(_this);
        return _this;
    }
    BackgroundImageTag.prototype.componentWillUnmount = function () {
        this.decoder.clear();
    };
    BackgroundImageTag.prototype.render = function () {
        var _a = this.props, style = _a.style, tag = _a.tag, passThroughProps = background_image_tag_rest(_a, ["style", "tag"]);
        var Tag = tag;
        assertNoBackgroundRelatedProperties(style);
        return (external_react_["createElement"](Tag, background_image_tag_assign({}, passThroughProps, { style: calculateCSSProperties(style, this.binaryToUrl) })));
    };
    BackgroundImageTag.prototype.binaryToUrl = function (binary) {
        var _a = scaleDownBinary(binary), initialUrl = _a.initialUrl, highResUrlToDecode = _a.highResUrlToDecode;
        var decodedBackgroundUrl = highResUrlToDecode && this.decoder.getBackgroundImage(highResUrlToDecode);
        return decodedBackgroundUrl || "url(" + initialUrl + ")";
    };
    BackgroundImageTag.displayName = 'Scrivito.BackgroundImageTag';
    BackgroundImageTag.propTypes = Object(external_tcomb_react_["propTypes"])({
        tag: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
        style: external_tcomb_validation_.maybe(external_tcomb_validation_.interface({
            background: external_tcomb_validation_.maybe(ValidBackgroundOrBackgroundList),
        }, { strict: false })),
    }, { strict: false });
    BackgroundImageTag.defaultProps = {
        tag: 'div',
        style: {},
    };
    return BackgroundImageTag;
}(external_react_["Component"]));
/* harmony default export */ var background_image_tag = (connect(background_image_tag_BackgroundImageTag));
// For test purpose only
function createBackgroundImageDecoder(onUpdateCallback) {
    return new background_image_decoder_BackgroundImageDecoder(onUpdateCallback);
}
function calculateCSSProperties(style, binaryToUrl) {
    if (Object(external_underscore_["isObject"])(style)) {
        var _a = style, background = _a.background, otherStyles = background_image_tag_rest(_a, ["background"]);
        return background_image_tag_assign(background_image_tag_assign({}, otherStyles), calculateBackgroundCSSProperties(background, binaryToUrl));
    }
    return {};
}
function calculateBackgroundCSSProperties(background, binaryToUrl) {
    if (background === undefined) {
        return {};
    }
    if (Object(external_underscore_["isArray"])(background)) {
        return mergeBackgroundCSSProperties(background.map(function (b) { return cssPropertiesFor(b, binaryToUrl); }));
    }
    return cssPropertiesFor(background, binaryToUrl);
}
function mergeBackgroundCSSProperties(properties) {
    return {
        backgroundImage: mergeCSSProperty(properties, 'backgroundImage'),
        backgroundAttachment: mergeCSSProperty(properties, 'backgroundAttachment'),
        backgroundClip: mergeCSSProperty(properties, 'backgroundClip'),
        backgroundOrigin: mergeCSSProperty(properties, 'backgroundOrigin'),
        backgroundPosition: mergeCSSProperty(properties, 'backgroundPosition'),
        backgroundRepeat: mergeCSSProperty(properties, 'backgroundRepeat'),
        backgroundSize: mergeCSSProperty(properties, 'backgroundSize'),
        backgroundColor: lastBackgroundColor(properties),
    };
}
function mergeCSSProperty(properties, name) {
    return properties.map(function (property) { return property[name]; }).join(', ');
}
function lastBackgroundColor(properties) {
    var lastBackground = Object(external_underscore_["last"])(properties);
    if (lastBackground) {
        return lastBackground.backgroundColor;
    }
}
function cssPropertiesFor(background, binaryToUrl) {
    if (isPlainBackground(background)) {
        return cssPropertiesForPlainBackground(background);
    }
    return cssPropertiesForScrivitoBackground(background, binaryToUrl);
}
function cssPropertiesForPlainBackground(background) {
    return {
        backgroundImage: background.image,
        backgroundAttachment: background.attachment || 'scroll',
        backgroundClip: background.clip || 'border-box',
        backgroundColor: background.color || 'transparent',
        backgroundOrigin: background.origin || 'padding-box',
        backgroundPosition: background.position || '0% 0%',
        backgroundRepeat: background.repeat || 'repeat',
        backgroundSize: background.size || 'auto',
    };
}
function cssPropertiesForScrivitoBackground(background, binaryToUrl) {
    var image = background.image;
    if (image instanceof models_binary) {
        return cssPropertiesForBinary(image, background, binaryToUrl);
    }
    if (image instanceof getWindowContext().Obj) {
        var basicObj = unwrapAppClass(image);
        if (isBinaryBasicObj(basicObj)) {
            var blob = basicObj.get('blob', ['binary']);
            if (blob) {
                return cssPropertiesForBinary(blob, background, binaryToUrl);
            }
        }
    }
    return cssPropertiesForPlainBackground({ image: 'none' });
}
function cssPropertiesForBinary(binary, background, binaryToUrl) {
    return {
        backgroundImage: binaryToUrl(binary),
        backgroundAttachment: background.attachment || 'scroll',
        backgroundClip: background.clip || 'border-box',
        backgroundColor: background.color || 'transparent',
        backgroundOrigin: background.origin || 'padding-box',
        backgroundPosition: background.position || 'center center',
        backgroundRepeat: background.repeat || 'no-repeat',
        backgroundSize: background.size || 'cover',
    };
}
function isPlainBackground(background) {
    return Object(external_underscore_["isString"])(background.image);
}
function assertNoBackgroundRelatedProperties(style) {
    var e_1, _a;
    if (Object(external_underscore_["isObject"])(style)) {
        try {
            for (var _b = background_image_tag_values(Object.keys(style)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (key.match(/^background.+/)) {
                    throwNextTick(new ArgumentError("Invalid background related CSS property \"" + key + "\". " +
                        'Expected property "background" alongside with any non-background properties' +
                        'For further details, see https://www.scrivito.com/js-sdk/background-image-tag'));
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag/menu_marker.tsx
var menu_marker_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var menu_marker_a;




/* harmony default export */ var menu_marker = (withRegisteredElement(connect((menu_marker_a = /** @class */ (function (_super) {
        menu_marker_extends(MenuMarker, _super);
        function MenuMarker(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = _this.onClick.bind(_this);
            return _this;
        }
        MenuMarker.prototype.render = function () {
            var _this = this;
            return (external_react_["createElement"]("span", { ref: function (element) { return _this.props.registeredElement.set(element); }, className: "scrivito_editing_marker", onClick: this.onClick },
                external_react_["createElement"]("i", { className: "scrivito_icon" }),
                external_react_["createElement"]("span", { className: "scrivito_editing_marker_title" }, this.props.parent.objClass())));
        };
        MenuMarker.prototype.onClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            presentUiAdapter().showChildListMenu(this.props.registeredElement.id(), this.props.parent.id());
        };
        return MenuMarker;
    }(external_react_["Component"])),
    menu_marker_a.displayName = 'Scrivito.ChildListTag.MenuMarker',
    menu_marker_a))));

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_modifier_click.ts
// IE11 is the only browser triggering a click event on middle click, so we must take care of it.
// Chrome, FF, Edge handle the middle click without triggering an event.
var IE11_MIDDLE_MOUSE_BUTTON = 2;
function isModifierClick(event) {
    return (event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.which === IE11_MIDDLE_MOUSE_BUTTON);
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/link_tag.tsx
var link_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var link_tag_assign = (undefined && undefined.__assign) || function () {
    link_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return link_tag_assign.apply(this, arguments);
};
var link_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};









// public API
var link_tag_LinkTag = /** @class */ (function (_super) {
    link_tag_extends(LinkTag, _super);
    function LinkTag(props) {
        var _this = _super.call(this, props) || this;
        _this.onClick = _this.onClick.bind(_this);
        return _this;
    }
    LinkTag.prototype.render = function () {
        var _a = this.props, children = _a.children, to = _a.to, params = _a.params, otherProps = link_tag_rest(_a, ["children", "to", "params"]);
        var linkProps = link_tag_assign(link_tag_assign({}, otherProps), { href: (to && this.hrefFor(to, params)) || '#', onClick: this.onClick, rel: this.rel(), target: this.target() });
        return external_react_["createElement"]("a", link_tag_assign({}, linkProps), children);
    };
    LinkTag.prototype.hrefFor = function (to, params) {
        return this.urlFor(to, params || undefined);
    };
    LinkTag.prototype.onClick = function (e) {
        if (this.props.onClick) {
            this.props.onClick(e);
            if (e.defaultPrevented) {
                return;
            }
        }
        e.preventDefault();
        var to = this.props.to;
        if (!to) {
            return;
        }
        var params = this.props.params || undefined;
        var url = this.urlFor(to, params);
        if (!url) {
            return;
        }
        var target = this.target();
        if (target === '_blank' || isModifierClick(e)) {
            openInNewWindow(url);
        }
        else if (target) {
            openLocation(url, target);
        }
        else {
            navigateTo(to, { params: params });
        }
    };
    LinkTag.prototype.target = function () {
        if (this.props.target) {
            return this.props.target;
        }
        var link = basicLinkFor(this.props.to);
        return (link && link.target()) || undefined;
    };
    LinkTag.prototype.rel = function () {
        if ('rel' in this.props) {
            return this.props.rel;
        }
        var link = basicLinkFor(this.props.to);
        return (link && link.rel()) || undefined;
    };
    LinkTag.prototype.urlFor = function (to, params) {
        var basicTo = unwrapAppClass(to);
        if (basicTo instanceof basic_obj || basicTo instanceof basic_link) {
            return basicUrlFor(basicTo, { queryParameters: params || undefined });
        }
    };
    LinkTag.displayName = 'Scrivito.LinkTag';
    LinkTag.propTypes = Object(external_tcomb_react_["propTypes"])({
        to: external_tcomb_validation_.maybe(external_tcomb_validation_.union([ObjType, LinkType])),
        params: external_tcomb_validation_.union([
            external_tcomb_validation_.dict(external_tcomb_validation_.String, external_tcomb_validation_.union([external_tcomb_validation_.Nil, external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String)])),
            external_tcomb_validation_.maybe(external_tcomb_validation_.irreducible('false', function (v) { return v === false; })),
        ]),
        onClick: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    }, { strict: false });
    return LinkTag;
}(external_react_["Component"]));
function basicLinkFor(to) {
    if (!to) {
        return;
    }
    var basicTo = unwrapAppClass(to);
    if (basicTo instanceof basic_link) {
        return basicTo;
    }
}
/* harmony default export */ var link_tag = (connect(link_tag_LinkTag));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag/child_item.tsx





var ChildItem = connect(function (props) {
    var appObj = wrapInAppClass(getWindowRegistry(), props.child);
    if (props.renderChild) {
        return props.renderChild(appObj);
    }
    return (external_react_["createElement"]("li", null,
        external_react_["createElement"](link_tag, { to: appObj }, props.child.get('title', 'string'))));
});
ChildItem.displayName = 'Scrivito.ChildListTag.ChildItem';

// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_page_data.ts







var FALLBACK_PARAMS = Object.freeze({});
var currentPageContextContainer = new context_container();
function currentPageData() {
    var basicData = getBasicPageData(loadNavigationStateForCurrentPage);
    if (!basicData) {
        return {
            page: null,
            params: FALLBACK_PARAMS,
        };
    }
    var basicPage = basicData.basicPage, queryParameters = basicData.queryParameters, navigationState = basicData.navigationState;
    return {
        page: basicPage && wrapInAppClass(getWindowRegistry(), basicPage),
        params: queryParameters || FALLBACK_PARAMS,
        navigationState: navigationState,
    };
}
function loadNavigationStateForCurrentPage() {
    return loadableWithDefault(undefined, getCurrentNavigationState);
}
function withCurrentPage(basicPage, fn) {
    return currentPageContextContainer.runWith({ basicPage: basicPage, queryParameters: FALLBACK_PARAMS }, fn);
}
function getNotFoundErrorPageState() {
    var data = getBasicPageData(loadNavigationStateForNotFoundErrorPage);
    return data && !data.basicPage ? data.navigationState : undefined;
}
function loadNavigationStateForNotFoundErrorPage() {
    return loadWithDefaultIfOutdated(undefined, getCurrentNavigationState);
}
function getBasicPageData(loadNavigationState) {
    return (currentPageContextContainer.current() ||
        getCurrentBasicPageData(loadNavigationState));
}
function getCurrentBasicPageData(loadNavigationState) {
    var navigationState = loadNavigationState();
    if (navigationState === undefined)
        return undefined;
    var pageState = navigationState.pageState;
    if (isScrivitoPage(pageState)) {
        var basicPage = basic_obj.get(pageState.objId);
        if (basicPage) {
            return {
                basicPage: basicPage,
                queryParameters: pageState.queryParameters,
                navigationState: navigationState,
            };
        }
    }
    else {
        if (!isNotFound(pageState)) {
            return undefined;
        }
    }
    return {
        basicPage: null,
        navigationState: navigationState,
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/current_page.ts


function currentPage() {
    assertNotUsingInMemoryTenant('Scrivito.currentPage');
    return currentPageData().page;
}
function currentPageParams() {
    assertNotUsingInMemoryTenant('Scrivito.currentPageParams');
    return currentPageData().params;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/child_list_tag.tsx
var child_list_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var child_list_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var child_list_tag_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var child_list_tag_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(child_list_tag_read(arguments[i]));
    return ar;
};
var child_list_tag_a;







/* harmony default export */ var child_list_tag = (connect((child_list_tag_a = /** @class */ (function (_super) {
        child_list_tag_extends(ChildListTag, _super);
        function ChildListTag(props) {
            var _this = _super.call(this, props) || this;
            _this.state = { hasFocus: false };
            _this.onMouseOver = _this.onMouseOver.bind(_this);
            _this.onMouseOut = _this.onMouseOut.bind(_this);
            return _this;
        }
        ChildListTag.prototype.render = function () {
            var _this = this;
            var parentPage = this.props.parent || currentPage();
            if (!parentPage) {
                return null;
            }
            var _a = this.props, parent = _a.parent, tag = _a.tag, renderChild = _a.renderChild, props = child_list_tag_rest(_a, ["parent", "tag", "renderChild"]);
            var basicObj = parentPage._scrivitoPrivateContent;
            var orderedChildren = basicObj.orderedChildren();
            return (external_react_["createElement"](InPlaceEditingEnabledContextConsumer, null, function (isInPlaceEditingEnabled) {
                var menuMarker;
                if (isInPlaceEditingActive() && isInPlaceEditingEnabled) {
                    props.onMouseOver = _this.onMouseOver;
                    props.onMouseOut = _this.onMouseOut;
                    props['data-scrivito-private-child-list-path'] = true;
                    if (_this.state.hasFocus) {
                        props.className = "scrivito_active scrivito_entered " + props.className;
                    }
                    menuMarker = external_react_["createElement"](menu_marker, { parent: basicObj, key: "menuMarker" });
                }
                return external_react_["createElement"](tag, props, child_list_tag_spread([
                    menuMarker
                ], orderedChildren.map(function (child) { return (external_react_["createElement"](ChildItem, { key: child.id(), child: child, renderChild: renderChild })); })));
            }));
        };
        ChildListTag.prototype.onMouseOver = function (e) {
            e.stopPropagation();
            this.setState({ hasFocus: true });
        };
        ChildListTag.prototype.onMouseOut = function (e) {
            e.stopPropagation();
            this.setState({ hasFocus: false });
        };
        return ChildListTag;
    }(external_react_["Component"])),
    child_list_tag_a.displayName = 'Scrivito.ChildListTag',
    child_list_tag_a.defaultProps = { tag: 'ul' },
    child_list_tag_a)));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/widget_content.tsx
var widget_content_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var widget_content_assign = (undefined && undefined.__assign) || function () {
    widget_content_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return widget_content_assign.apply(this, arguments);
};
var widget_content_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};








var widget_content_WidgetContent = /** @class */ (function (_super) {
    widget_content_extends(WidgetContent, _super);
    function WidgetContent(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            hasError: false,
        };
        return _this;
    }
    WidgetContent.prototype.componentDidCatch = function (e) {
        throwNextTick(e);
        this.setState({ hasError: true });
    };
    WidgetContent.prototype.shouldComponentUpdate = function (nextProps) {
        return this.props.widget.equals(nextProps.widget);
    };
    WidgetContent.prototype.render = function () {
        if (this.state.hasError) {
            if (isInPlaceEditingActive()) {
                return withWidgetContext(this.props.widget, external_react_["createElement"](widget_tag, null,
                    external_react_["createElement"]("div", { className: "content_error" }, "Widget could not be rendered due to application error.")), this.props.placementModification);
            }
            return withWidgetContext(this.props.widget, external_react_["createElement"](widget_tag, null), this.props.placementModification);
        }
        return (external_react_["createElement"](widget_content_AppWidgetWrapper, { widget: this.props.widget, widgetProps: this.props.widgetProps, placementModification: this.props.placementModification }));
    };
    WidgetContent.displayName = 'Scrivito.ContentTag.WidgetContent';
    return WidgetContent;
}(external_react_["Component"]));
var widget_content_AppWidgetWrapper = /** @class */ (function (_super) {
    widget_content_extends(AppWidgetWrapper, _super);
    function AppWidgetWrapper(props) {
        return _super.call(this, props) || this;
    }
    AppWidgetWrapper.prototype.render = function () {
        return withWidgetContext(this.props.widget, external_react_["createElement"](this.getAppWidgetComponent(), this.getAppWidgetProps()), this.props.placementModification);
    };
    AppWidgetWrapper.prototype.getAppWidgetComponent = function () {
        var widgetClass = this.props.widget.objClass();
        var widgetComponent = getComponentForAppClass(widgetClass);
        if (!widgetComponent) {
            throw new ArgumentError("No component registered for widget class \"" + widgetClass + "\"");
        }
        return widgetComponent;
    };
    AppWidgetWrapper.prototype.getAppWidgetProps = function () {
        var appWidget = wrapInAppClass(getWindowRegistry(), this.props.widget);
        var appWidgetProps = { widget: appWidget };
        if (this.props.widgetProps &&
            this.props.widgetProps.hasOwnProperty('widget')) {
            throwNextTick(new ArgumentError('The prop "widget" is not allowed inside "widgetProps"'));
            var _a = this.props.widgetProps, widget = _a.widget, widgetPropsWithoutWidget = widget_content_rest(_a, ["widget"]);
            return widget_content_assign(widget_content_assign({}, appWidgetProps), widgetPropsWithoutWidget);
        }
        return widget_content_assign(widget_content_assign({}, appWidgetProps), this.props.widgetProps);
    };
    return AppWidgetWrapper;
}(external_react_["Component"]));
function withWidgetContext(widget, reactElement, placementModification) {
    return (external_react_["createElement"](WidgetTagContext.Provider, { value: { widget: widget, placementModification: placementModification }, children: reactElement }));
}
/* harmony default export */ var widget_content = (connect(widget_content_WidgetContent));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/widgetlist_placeholder.tsx
var widgetlist_placeholder_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var widgetlist_placeholder_assign = (undefined && undefined.__assign) || function () {
    widgetlist_placeholder_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return widgetlist_placeholder_assign.apply(this, arguments);
};
var widgetlist_placeholder_a;






/* harmony default export */ var widgetlist_placeholder = (withContentZone(function (props) {
    return widgetlist_placeholder_assign({ type: 'widgetlist' }, extractContentKeys(props.field));
}, connect((widgetlist_placeholder_a = /** @class */ (function (_super) {
        widgetlist_placeholder_extends(WidgetlistPlaceholder, _super);
        function WidgetlistPlaceholder(props) {
            var _this = _super.call(this, props) || this;
            _this.onClick = _this.onClick.bind(_this);
            return _this;
        }
        WidgetlistPlaceholder.prototype.render = function () {
            var _this = this;
            return (external_react_["createElement"]("div", { ref: function (element) {
                    _this.widgetlistPlaceholder = element;
                    _this.props.registeredElement.set(element);
                }, className: "scrivito_empty_widget_field", "data-scrivito-private-dropzone": "true", onClick: this.onClick }));
        };
        WidgetlistPlaceholder.prototype.onClick = function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (this.widgetlistPlaceholder) {
                var _a = extractContentKeys(this.props.field), objId = _a.objId, widgetId = _a.widgetId, attributeName = _a.attributeName;
                presentUiAdapter().showWidgetlistMenu(this.props.registeredElement.id(), clickPositionWithinElement(e, this.widgetlistPlaceholder), objId, attributeName, widgetId);
            }
        };
        return WidgetlistPlaceholder;
    }(external_react_["Component"])),
    widgetlist_placeholder_a.displayName = 'Scrivito.ContentTag.WidgetlistPlaceholder',
    widgetlist_placeholder_a))));
function extractContentKeys(field) {
    var container = field.getContainer();
    if (container instanceof basic_obj) {
        return {
            objId: container.id(),
            attributeName: field.name(),
        };
    }
    return {
        objId: container.obj().id(),
        widgetId: container.id(),
        attributeName: field.name(),
    };
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/find_click_target.ts



function isOpenInNewWindow(target) {
    if (target) {
        return !!target.openInNewWindow;
    }
    return false;
}
function findClickTarget(e) {
    var innermostNode = e.target;
    var outermostNode = e.currentTarget;
    var isModifier = isModifierClick(e);
    return findLinkTarget(innermostNode, outermostNode, isModifier);
}
function findLinkTarget(currentNode, outermostNode, isModifier) {
    if (currentNode === outermostNode) {
        return null;
    }
    if (isHTMLAnchorElement(currentNode)) {
        var url = currentNode.href;
        var uri = external_urijs_(url);
        if (!isLocalUri(uri)) {
            return null;
        }
        if (isModifier || currentNode.getAttribute('target') === '_blank') {
            return { openInNewWindow: url };
        }
        return { openInCurrentWindow: uri.resource() };
    }
    if (!currentNode.parentNode) {
        return null;
    }
    return findLinkTarget(currentNode.parentNode, outermostNode, isModifier);
}
function isHTMLAnchorElement(node) {
    return node.nodeName === 'A';
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/url_without_placeholder_for.ts


function urlWithoutPlaceholderFor(obj) {
    if (isBinaryBasicObj(obj)) {
        var blob = obj.get('blob', ['binary']);
        if (blob) {
            var url = blob.urlWithoutPlaceholder();
            if (url)
                return url;
        }
    }
    return generateUrl({ obj: obj });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/replace_internal_links.ts





var INTERNAL_LINK_URL_PATTERN = /\bobjid:[a-f0-9]{16}\b[^"']*/g;
function replaceInternalLinks(htmlString) {
    return htmlString.replace(INTERNAL_LINK_URL_PATTERN, function (internalLinkUrl) {
        return uriForInternalLinkUrl(internalLinkUrl, false).toString();
    });
}
function replaceInternalLinksWithoutPlaceholder(htmlString) {
    return htmlString.replace(INTERNAL_LINK_URL_PATTERN, function (internalLinkUrl) {
        return uriForInternalLinkUrl(internalLinkUrl, true).toString();
    });
}
function uriForInternalLinkUrl(internalLinkUrl, withoutPlaceholder) {
    var objId = internalLinkUrl.slice(6, 22);
    var obj = basic_obj.get(objId);
    var uri;
    var extendUriWithQueryAndHash;
    if (obj) {
        uri = external_urijs_(withoutPlaceholder ? urlWithoutPlaceholderFor(obj) : basicUrlFor(obj));
        extendUriWithQueryAndHash = isLocalUri(uri);
    }
    else {
        uri = generatePath({ path: objId });
        extendUriWithQueryAndHash = true;
    }
    if (extendUriWithQueryAndHash) {
        var originalUri = external_urijs_(internalLinkUrl);
        uri.query(originalUri.query()).hash(originalUri.hash());
    }
    return uri;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/attribute_value.tsx
var attribute_value_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var attribute_value_a;















/* harmony default export */ var attribute_value = (connect((attribute_value_a = /** @class */ (function (_super) {
        attribute_value_extends(AttributeValue, _super);
        function AttributeValue(props) {
            var _this = _super.call(this, props) || this;
            _this.ref = external_react_["createRef"]();
            _this.onClick = _this.onClick.bind(_this);
            return _this;
        }
        AttributeValue.prototype.componentDidMount = function () {
            var objId = this.props.field.obj().id();
            var attributeName = this.props.field.name();
            var element = this.ref.current;
            if (element) {
                registerScrollTarget({ objId: objId, attributeName: attributeName }, function () {
                    return scrollElementIntoView(element);
                });
            }
        };
        AttributeValue.prototype.render = function () {
            switch (this.props.field.type()) {
                case 'html':
                    return this.renderHtml();
                case 'string':
                    return this.renderString();
                case 'float':
                case 'integer':
                    return this.renderNumber();
                case 'widgetlist':
                    return this.renderWidgetlist();
                default:
                    return this.renderContent({ children: this.props.children });
            }
        };
        AttributeValue.prototype.renderHtml = function () {
            if (this.props.children) {
                return this.renderContent({ children: this.props.children });
            }
            var htmlValue = this.attributeValue();
            return this.renderContent({
                props: {
                    dangerouslySetInnerHTML: {
                        __html: replaceInternalLinks(isComparisonActive()
                            ? this.getHtmlDiffContent() || htmlValue
                            : htmlValue),
                    },
                    onClick: this.onClick,
                },
            });
        };
        AttributeValue.prototype.renderString = function () {
            if (this.props.children) {
                return this.renderContent({ children: this.props.children });
            }
            if (isComparisonActive()) {
                var diffContent = this.getHtmlDiffContent();
                if (diffContent) {
                    return this.renderContent({
                        props: {
                            dangerouslySetInnerHTML: { __html: diffContent },
                        },
                    });
                }
            }
            return this.renderContent({ children: this.attributeValue() });
        };
        AttributeValue.prototype.renderNumber = function () {
            var children = this.props.children || this.attributeValue();
            return this.renderContent({ children: children });
        };
        AttributeValue.prototype.renderWidgetlist = function () {
            return this.renderContent({ children: this.widgetlistChildren() });
        };
        AttributeValue.prototype.widgetlistChildren = function () {
            var _this = this;
            if (isComparisonActive() &&
                this.props.field.workspaceId() !== 'published') {
                return this.widgetlistChildrenForComparison();
            }
            var widgets = this.attributeValue();
            if (widgets.length) {
                return widgets.map(function (widget) { return (external_react_["createElement"](widget_content, { key: widget.id(), widget: widget, widgetProps: _this.props.widgetProps })); });
            }
            else {
                return this.renderPlaceholderIfEditable();
            }
        };
        AttributeValue.prototype.widgetlistChildrenForComparison = function () {
            var _this = this;
            var placementModificationInfos = getPlacementModificationInfos(this
                .props.field);
            if (placementModificationInfos.length) {
                return placementModificationInfos.map(function (placementModificationInfo) { return (external_react_["createElement"](widget_content, { key: placementModificationInfo.widget.id() + "-" + placementModificationInfo.modification, widget: placementModificationInfo.widget, widgetProps: _this.props.widgetProps, placementModification: placementModificationInfo.modification })); });
            }
        };
        AttributeValue.prototype.renderPlaceholderIfEditable = function () {
            var _this = this;
            if (isInPlaceEditingActive()) {
                return (external_react_["createElement"](InPlaceEditingEnabledContextConsumer, null, function (isInPlaceEditingEnabled) {
                    return isInPlaceEditingEnabled && (external_react_["createElement"](widgetlist_placeholder, { field: _this.props.field }));
                }));
            }
        };
        AttributeValue.prototype.renderContent = function (options) {
            var contentProps = Object(external_underscore_["extend"])({}, this.props.customProps, options.props, this.editingProps(), { ref: this.ref });
            if (options.children) {
                contentProps.children = options.children;
            }
            return external_react_["createElement"](this.props.tag, contentProps);
        };
        AttributeValue.prototype.onClick = function (e) {
            var linkTarget = findClickTarget(e);
            if (!linkTarget) {
                return;
            }
            if (isOpenInNewWindow(linkTarget)) {
                this.openInNewWindow(e, linkTarget);
            }
            else {
                this.openInCurrentWindow(e, linkTarget);
            }
        };
        AttributeValue.prototype.openInNewWindow = function (e, _a) {
            var url = _a.openInNewWindow;
            if (ui_adapter_uiAdapter) {
                e.preventDefault();
                e.stopPropagation();
                openInNewWindow(url);
            }
        };
        AttributeValue.prototype.openInCurrentWindow = function (e, _a) {
            var resource = _a.openInCurrentWindow;
            e.preventDefault();
            e.stopPropagation();
            browser_location_push(resource);
        };
        AttributeValue.prototype.editingProps = function () {
            if (this.props.onClick) {
                return {
                    onClick: this.props.onClick,
                    'data-scrivito-is-clickable': true,
                };
            }
            return {};
        };
        AttributeValue.prototype.attributeValue = function () {
            return this.props.field.get();
        };
        AttributeValue.prototype.getHtmlDiffContent = function () {
            var diff = this.props.field.getDiff();
            if (diff && diff.format === 'html') {
                return diff.content;
            }
        };
        return AttributeValue;
    }(external_react_["Component"])),
    attribute_value_a.displayName = 'Scrivito.ContentTag.AttributeValue',
    attribute_value_a)));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag/editor.tsx
var editor_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var editor_assign = (undefined && undefined.__assign) || function () {
    editor_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return editor_assign.apply(this, arguments);
};










var editor_Editor = /** @class */ (function (_super) {
    editor_extends(Editor, _super);
    function Editor(props) {
        var _this = _super.call(this, props) || this;
        _this._field = _this.props.field;
        _this.state = { domMode: 'None' };
        _this._isPendingUpdate = false;
        var editorClass = _this.props.editorClass;
        if (editorClass) {
            var controller = {
                getContent: _this._getContent.bind(_this),
                setContent: _this._setContent.bind(_this),
                setDomMode: _this._setDomMode.bind(_this),
                validObjClasses: _this.validObjClasses.bind(_this),
            };
            _this._editor = new editorClass({ controller: controller });
        }
        return _this;
    }
    Editor.prototype.componentDidMount = function () {
        var _this = this;
        this._editorWillBeActivated();
        var observation = observeSync(function () { return _this._getContent(); }, function (nextValue) {
            if (_this._isPendingUpdate && _this._pendingUpdateValue === nextValue) {
                _this._isPendingUpdate = false;
                _this._pendingUpdateValue = undefined;
                return;
            }
            _this._contentDidChange();
        });
        this._unsubscribe = observation.unsubscribe;
        if (this.state.domMode === 'Replace') {
            this._editorDomWasMounted();
        }
    };
    Editor.prototype.componentDidUpdate = function (_prevProps, prevState) {
        var prevDomMode = prevState.domMode;
        var curDomMode = this.state.domMode;
        if (prevDomMode !== curDomMode) {
            if (curDomMode === 'Replace') {
                this._editorDomWasMounted();
            }
            else {
                this._editorDomWasUnmounted();
            }
        }
    };
    Editor.prototype.componentWillUnmount = function () {
        this._editorWillBeDeactivated();
        if (this._unsubscribe) {
            this._unsubscribe();
        }
    };
    Editor.prototype.render = function () {
        var _this = this;
        if (this.state.domMode === 'Replace') {
            return external_react_["createElement"](this.props.tag, editor_assign(editor_assign({}, Object(external_underscore_["omit"])(this.props.customProps, 'children')), { ref: function (editorComponent) {
                    _this._editorComponent = editorComponent;
                } }));
        }
        var onClick;
        var editor = this._editor;
        if (editor && editor.onClick) {
            onClick = function (e) {
                var event = {
                    stopPropagation: e.stopPropagation.bind(e),
                    preventDefault: e.preventDefault.bind(e),
                };
                editor.onClick(event);
            };
        }
        var props = {
            ref: function (editorComponent) {
                _this._editorComponent = editorComponent;
            },
            children: this.props.children,
            widgetProps: this.props.widgetProps,
            customProps: this.props.customProps,
            field: this.props.field,
            key: this.state.domMode,
            tag: this.props.tag,
            onClick: onClick,
        };
        return external_react_["createElement"](attribute_value, props);
    };
    Editor.prototype._contentDidChange = function () {
        if (this._editor) {
            this._editor.contentDidChange();
        }
    };
    Editor.prototype._editorWillBeActivated = function () {
        if (this._editor) {
            this._editor.editorWillBeActivated();
        }
    };
    Editor.prototype._editorWillBeDeactivated = function () {
        if (this._editor) {
            this._editor.editorWillBeDeactivated();
        }
    };
    Editor.prototype._editorDomWasMounted = function () {
        if (this._editor && this._editorComponent) {
            var element_1 = Object(external_react_dom_["findDOMNode"])(this._editorComponent);
            this._editor.editorDomWasMounted(element_1);
            var objId = this.props.field.obj().id();
            var attributeName = this.props.field.name();
            registerScrollTarget({ objId: objId, attributeName: attributeName }, function () {
                return scrollElementIntoView(element_1);
            });
        }
    };
    Editor.prototype._editorDomWasUnmounted = function () {
        if (this._editor) {
            this._editor.editorDomWasUnmounted();
        }
    };
    Editor.prototype._setDomMode = function (domMode) {
        this.setState({ domMode: domMode });
    };
    Editor.prototype._getContent = function () {
        var _this = this;
        return capture(function () {
            if (_this._field.type() === 'html') {
                var value = _this._field.get();
                return replaceInternalLinksWithoutPlaceholder(value);
            }
            return _this._field.get();
        }).result;
    };
    Editor.prototype._setContent = function (val) {
        this._isPendingUpdate = true;
        this._pendingUpdateValue = val;
        this._field.update(val);
    };
    Editor.prototype.validObjClasses = function () {
        return this._field.validClasses();
    };
    Editor.displayName = 'Scrivito.ContentTag.Editor';
    return Editor;
}(external_react_["Component"]));
/* harmony default export */ var content_tag_editor = (connect(editor_Editor));

// CONCATENATED MODULE: ./scrivito_sdk/react/key_for_basic_content.ts

function keyForBasicContent(content) {
    return content instanceof basic_obj
        ? content.id()
        : content.obj().id() + "|" + content.id();
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/content_tag.tsx
var content_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var content_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










var content_tag_ContentTag = /** @class */ (function (_super) {
    content_tag_extends(ContentTag, _super);
    function ContentTag(props) {
        return _super.call(this, props) || this;
    }
    ContentTag.prototype.render = function () {
        var _this = this;
        var _a = this.props, content = _a.content, attribute = _a.attribute, tag = _a.tag, widgetProps = _a.widgetProps, customProps = content_tag_rest(_a, ["content", "attribute", "tag", "widgetProps"]);
        if (!content) {
            return null;
        }
        var field = schema_Schema.basicFieldFor(content, attribute);
        if (!field) {
            var attributeName = attribute;
            throwNextTick(new ArgumentError('Component "Scrivito.ContentTag" received prop "attribute" with invalid value: ' +
                ("Attribute \"" + attributeName + "\" is not defined for content specified in prop \"content\".")));
            return null;
        }
        var fieldType = field.type();
        return (external_react_["createElement"](InPlaceEditingEnabledContextConsumer, null, function (isInPlaceEditingEnabled) {
            if (isInPlaceEditingActive() && isInPlaceEditingEnabled) {
                var editorId = void 0;
                var editorClass = void 0;
                var editorRegistration = editorRegistrationFor({
                    type: fieldType,
                    tag: tag,
                });
                if (editorRegistration) {
                    editorId = editorRegistration.id;
                    editorClass = editorRegistration.editorClass;
                    return (external_react_["createElement"](content_tag_editor, { key: _this.editorKey(editorId), field: field, editorClass: editorClass, tag: tag, widgetProps: _this.widgetProps(fieldType), customProps: customProps, content: content }, _this.props.children));
                }
            }
            return (external_react_["createElement"](attribute_value, { field: field, tag: tag, widgetProps: _this.widgetProps(fieldType), customProps: customProps }, _this.props.children));
        }));
    };
    ContentTag.prototype.widgetProps = function (fieldType) {
        if (this.props.widgetProps) {
            if (fieldType === 'widgetlist') {
                return this.props.widgetProps;
            }
            throwNextTick(new ArgumentError('The prop "widgetProps" is only allowed for widgetlist attributes'));
        }
    };
    ContentTag.prototype.editorKey = function (editorId) {
        var content = unwrapAppClass(this.props.content);
        return [
            this.props.tag,
            keyForBasicContent(content),
            this.props.attribute,
            editorId,
        ].join('|');
    };
    ContentTag.displayName = 'Scrivito.ContentTag';
    ContentTag.defaultProps = { tag: 'div' };
    return ContentTag;
}(external_react_["Component"]));
/* harmony default export */ var content_tag = (connect(content_tag_ContentTag));

// CONCATENATED MODULE: ./scrivito_sdk/react/get_component_for_page_class.ts


function getComponentForPageClass(pageClassName) {
    var pageComponent = getComponentForAppClass(pageClassName);
    if (!pageComponent) {
        throw new ArgumentError("No component registered for obj class \"" + pageClassName + "\"");
    }
    return pageComponent;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/scroll_window.ts



var lastScrolledState;
function notifyScrollWindow(navigationState) {
    if (!isCurrentHistoryState(navigationState.historyState))
        return;
    if (shouldScroll(navigationState, lastScrolledState)) {
        lastScrolledState = navigationState;
        scrollTo(0, 0);
    }
}
function shouldScroll(currentNavigationState, previousNavigationState) {
    if (currentNavigationState.historyState.isRevisit)
        return false;
    if (!previousNavigationState)
        return true;
    var currentState = currentNavigationState.pageState;
    if (isNotFound(currentState))
        return true;
    if (!isScrivitoPage(currentState))
        return false;
    var previousState = previousNavigationState.pageState;
    if (!isScrivitoPage(previousState))
        return true;
    if (currentState.objId !== previousState.objId)
        return true;
    return (currentNavigationState.historyState.location !==
        previousNavigationState.historyState.location);
}
// For test purpose only
function scroll_window_reset() {
    lastScrolledState = undefined;
}

// CONCATENATED MODULE: ./scrivito_sdk/react/components/page_scroll.tsx
var page_scroll_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var page_scroll_PageScroll = /** @class */ (function (_super) {
    page_scroll_extends(PageScroll, _super);
    function PageScroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PageScroll.prototype.componentDidMount = function () {
        this.notifyScrollWindow();
    };
    PageScroll.prototype.componentDidUpdate = function () {
        this.notifyScrollWindow();
    };
    PageScroll.prototype.render = function () {
        return null;
    };
    PageScroll.prototype.notifyScrollWindow = function () {
        notifyScrollWindow(this.props.navigationState);
    };
    return PageScroll;
}(external_react_["Component"]));


// CONCATENATED MODULE: ./scrivito_sdk/react/components/current_page.tsx






var CurrentPage = connect(function () {
    var _a = currentPageData(), page = _a.page, params = _a.params, navigationState = _a.navigationState;
    if (!page || !navigationState)
        return null;
    var pageClass = unwrapAppClass(page).objClass();
    var pageComponent = getComponentForPageClass(pageClass);
    var pageElement = external_react_["createElement"](pageComponent, { page: page, params: params });
    return (external_react_["createElement"](external_react_["Fragment"], null,
        external_react_["createElement"](page_scroll_PageScroll, { navigationState: navigationState }),
        pageElement));
});
CurrentPage.displayName = 'Scrivito.CurrentPage';

// CONCATENATED MODULE: ./scrivito_sdk/react/image_placeholder.ts
/* eslint max-len: 0 */
/*
 * This is a base64 placeholder for the image component.
 *
 * The image component is actually styled via CSS in order to provide a scalable placeholder.
 * However, in order to set a background image, the tag must have content. In this case a
 * transparent image of an appropriate size.
 */
var imagePlaceholder = 'data:image/gif;base64,R0lGODlhyADIAIAAAP///wAAACH/C1hNUCBEYXRhWE1QPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDBEQjBEMDdFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDBEQjBEMDhFODMzMTFFNTg0QzY4MUNBMUVCQUU2MjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMERCMEQwNUU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowMERCMEQwNkU4MzMxMUU1ODRDNjgxQ0ExRUJBRTYyNyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAADIAMgAAAL/hI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuC8fyTNf2jef6zvf+DwwKh8Si8YhMKpfMpvMJjUqn1Kr1is1qt9yu9wsOi8fksvmMTqvX7Lb7DY/L5/S6/Y7P6/f8vv8PGCg4SFhoeIiYqLjI2Oj4CBkpOUlZaXmJmam5ydnp+QkaKjpKWmp6ipqqusra6voKGys7S1tre4ubq7vL2+v7CxwsPExcbHyMnKy8zNzs/AwdLT1NXW19jZ2tvc3d7f0NHi4+Tl5ufo6err7O3u7+Dh8vP09fb3+Pn6+/z9/v/w8woMCBBAsaPIgwocKFDBs6fAgxosSJFCtavIgxo8aNBhw7eixTAAA7';

// CONCATENATED MODULE: ./scrivito_sdk/app_support/decode_image.ts


function decodeImage(imageUrl) {
    return decodeOrLoadImg(imageUrl)
        .then(function (img) {
        if (!hasDecodeImg(img))
            drawImgOnCanvas(img);
        return imageUrl;
    })
        .catch(function () { return imageUrl; });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/image_decoder.ts


var image_decoder_ImageDecoder = /** @class */ (function () {
    function ImageDecoder(onUpdateCallback) {
        this.onUpdateCallback = onUpdateCallback;
        this.decodedUrls = {};
        this.loadingRegistry = {};
    }
    ImageDecoder.prototype.getImage = function (imageUrl) {
        var resultUrl = this.decodedUrls[imageUrl];
        if (!resultUrl) {
            this.ensureLoading(imageUrl);
        }
        return resultUrl;
    };
    ImageDecoder.prototype.ensureLoading = function (imageUrl) {
        var _this = this;
        if (this.decodedUrls[imageUrl] || this.loadingRegistry[imageUrl])
            return;
        var promise = decodeImage(imageUrl).then(function (url) {
            _this.decodedUrls[imageUrl] = url;
            _this.onUpdateCallback();
        });
        this.loadingRegistry[imageUrl] = promiseAndFinally(promise, function () { return delete _this.loadingRegistry[imageUrl]; });
    };
    return ImageDecoder;
}());


// CONCATENATED MODULE: ./scrivito_sdk/react/components/image_tag.tsx
var image_tag_extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var image_tag_assign = (undefined && undefined.__assign) || function () {
    image_tag_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return image_tag_assign.apply(this, arguments);
};
var image_tag_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};










// public API
var image_tag_ImageTag = /** @class */ (function (_super) {
    image_tag_extends(ImageTag, _super);
    function ImageTag(props) {
        var _this = _super.call(this, props) || this;
        _this.decoder = new image_decoder_ImageDecoder(function () { return _this.forceUpdate(); });
        return _this;
    }
    ImageTag.prototype.render = function () {
        var _a = this.props, content = _a.content, attribute = _a.attribute, widthProp = _a.width, htmlOptions = image_tag_rest(_a, ["content", "attribute", "width"]);
        if (!content) {
            return null;
        }
        if (content instanceof models_binary) {
            return this.renderPlainBinary(content, widthProp, htmlOptions);
        }
        var binary = getBinary(content, attribute);
        if (binary === undefined) {
            return null;
        }
        if (binary === null) {
            return this.renderEmptyObj(attribute, content, widthProp, htmlOptions);
        }
        return this.renderObjBinary(attribute, content, binary, widthProp, htmlOptions);
    };
    ImageTag.prototype.renderPlainBinary = function (binary, widthProp, htmlOptions) {
        var width = fullWidth(binary, widthProp);
        if (width === null) {
            return null;
        }
        return external_react_["createElement"]("img", image_tag_assign({ src: this.scaledSrc(binary), width: width }, htmlOptions));
    };
    ImageTag.prototype.renderEmptyObj = function (attribute, obj, widthProp, htmlOptions) {
        return (external_react_["createElement"](content_tag, image_tag_assign({ attribute: attribute, content: obj, tag: 'img', src: imagePlaceholder, "data-scrivito-image-placeholder": true, width: widthProp }, htmlOptions)));
    };
    ImageTag.prototype.renderObjBinary = function (attribute, obj, binary, widthProp, htmlOptions) {
        var width = fullWidth(binary, widthProp);
        if (width === null) {
            return null;
        }
        return (external_react_["createElement"](content_tag, image_tag_assign({ attribute: attribute, content: obj, width: width, tag: 'img', src: this.scaledSrc(binary) }, htmlOptions)));
    };
    ImageTag.prototype.scaledSrc = function (binary) {
        var _a = scaleDownBinary(binary), initialUrl = _a.initialUrl, highResUrlToDecode = _a.highResUrlToDecode;
        var decodedImg = highResUrlToDecode && this.decoder.getImage(highResUrlToDecode);
        return decodedImg || initialUrl;
    };
    ImageTag.displayName = 'Scrivito.ImageTag';
    ImageTag.defaultProps = { attribute: 'blob' };
    return ImageTag;
}(external_react_["Component"]));
// return value:
// * number, string or undefined => render with this width
// * null => render null (since width is not yet loaded)
function fullWidth(binary, widthProp) {
    if (widthProp !== null && widthProp !== undefined) {
        return widthProp;
    }
    if (binary.isRaw() || binary.isExplicitlyTransformed()) {
        return;
    }
    var metadata = binary.raw().metadata();
    if (metadata.contentType() === 'image/svg+xml') {
        return;
    }
    var metadataWidth = metadata.get('width');
    return Object(external_underscore_["isNumber"])(metadataWidth) ? metadataWidth : null;
}
function getBinary(content, attribute) {
    var schema = schema_Schema.forInstance(content);
    if (!schema) {
        return;
    }
    var basicContent = unwrapAppClass(content);
    var definition = schema.attribute(attribute);
    if (!definition) {
        throwNextTick(new ArgumentError('Component "Scrivito.ImageTag" received prop "content"' +
            (" with an object missing attribute \"" + attribute + "\".")));
        return;
    }
    var attributeType = definition[0];
    if (attributeType === 'binary') {
        return basicContent.get(attribute, 'binary');
    }
    if (attributeType === 'reference') {
        return getReferencedBinary(basicContent.get(attribute, 'reference'));
    }
    throwNextTick(new ArgumentError('Component "Scrivito.ImageTag" received prop "content"' +
        (" with an object, whose attribute \"" + attribute + "\"") +
        (" is of unexpected type \"" + attributeType + "\".") +
        ' Valid attribute types are "binary" and "reference".'));
}
function getReferencedBinary(referencedObj) {
    if (referencedObj) {
        var blob = referencedObj.get('blob', 'binary');
        if (blob) {
            return blob;
        }
    }
    return null;
}
/* harmony default export */ var image_tag = (connect(image_tag_ImageTag));

// CONCATENATED MODULE: ./scrivito_sdk/react/components/in_place_editing.tsx



var InPlaceEditingOff = function (_a) {
    var children = _a.children;
    return isInPlaceEditingActive() ? (external_react_["createElement"](InPlaceEditingEnabledContextProvider, { children: children, value: false })) : children;
};
var RestoreInPlaceEditing = function (_a) {
    var children = _a.children;
    return isInPlaceEditingActive() ? (external_react_["createElement"](InPlaceEditingEnabledContextProvider, { children: children, value: true })) : children;
};

// CONCATENATED MODULE: ./scrivito_sdk/react/components/not_found_error_page.tsx




// public API
var NotFoundErrorPage = connect(function (_a) {
    var children = _a.children;
    var navigationState = getNotFoundErrorPageState();
    if (!navigationState)
        return null;
    return (external_react_["createElement"]("div", null,
        external_react_["createElement"](page_scroll_PageScroll, { navigationState: navigationState }),
        children || (external_react_["createElement"](external_react_["Fragment"], null,
            external_react_["createElement"]("h1", null, "The page you were looking for doesn't exist."),
            external_react_["createElement"]("p", null, "You may have mistyped the address or the page may have moved.")))));
});
NotFoundErrorPage.displayName = 'Scrivito.NotFoundErrorPage';

// CONCATENATED MODULE: ./scrivito_sdk/react/index.ts

















// CONCATENATED MODULE: ./scrivito_sdk/app_support/resolve_url.ts




function resolveUrl(url) {
    var uri = external_urijs_(url);
    return load(function () { return recognize(uri); }).then(function (target) {
        if (!(target && target.path)) {
            return null;
        }
        if (Object(external_underscore_["include"])(['/', ''], target.path)) {
            return null;
        }
        return { obj: target.obj, url: uri };
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/configure_content_browser.ts
var configure_content_browser_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var configure_content_browser_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(configure_content_browser_read(arguments[i]));
    return ar;
};





var filters;
var filtersBuilder;
function getContentBrowserConfiguration(validObjClasses) {
    if (filtersBuilder) {
        var context = {};
        if (validObjClasses) {
            context._validObjClasses = validObjClasses;
        }
        var dynamicFilters = filtersBuilder(context);
        if (dynamicFilters) {
            return { filters: dynamicFilters };
        }
    }
    else if (filters) {
        return { filters: filters };
    }
}
// public API
function configureContentBrowser(configuration) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    if (!ui_adapter_uiAdapter) {
        return;
    }
    try {
        checkConfigure.apply(void 0, configure_content_browser_spread([configuration], excessArgs));
    }
    catch (e) {
        throw new ArgumentError(removeUnionSubTypeIndexesFromKey(e.message));
    }
    if (configuration.filters) {
        filters = configuration.filters;
        if (isFilterBuilder(filters)) {
            filtersBuilder = filters;
            filters = undefined;
        }
        else {
            filters = configuration.filters;
            filtersBuilder = undefined;
        }
    }
    var baseFilter = configuration.baseFilter;
    if (baseFilter) {
        var baseQuery = baseFilter.query;
        if (baseQuery) {
            ui_adapter_uiAdapter.configureContentBrowser(uiAdapterCompatibleValue({ baseQuery: baseQuery }));
        }
    }
}
function isFilterBuilder(maybeFilterBuilder) {
    return typeof maybeFilterBuilder === 'function';
}
// For test purpose only.
function resetContentBrowserConfiguration() {
    filters = undefined;
    filtersBuilder = undefined;
}
function removeUnionSubTypeIndexesFromKey(message) {
    // key 'filters/0/xyz... becomes key 'filters/xyz...
    return message.replace(/key 'filters.\d/, "key 'filters");
}
var SearchFieldType = external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.list(external_tcomb_validation_.String)]);
var SearchOperatorType = external_tcomb_validation_.enums.of(Object(external_underscore_["intersection"])(OPERATORS, [
    'contains',
    'containsPrefix',
    'equals',
    'startsWith',
    'isGreaterThan',
    'isLessThan',
]));
var SearchValueType = external_tcomb_validation_.union([
    external_tcomb_validation_.String,
    external_tcomb_validation_.Date,
    external_tcomb_validation_.Nil,
    external_tcomb_validation_.Number,
    external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.String, external_tcomb_validation_.Nil])),
    external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.Date, external_tcomb_validation_.Nil])),
    external_tcomb_validation_.list(external_tcomb_validation_.union([external_tcomb_validation_.Number, external_tcomb_validation_.Nil])),
], 'SearchValue');
var FilterNodeType = external_tcomb_validation_.struct({
    title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var FilterCollectionNodeType = FilterNodeType.extend({
    field: external_tcomb_validation_.maybe(SearchFieldType),
    operator: external_tcomb_validation_.maybe(SearchOperatorType),
    expanded: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
});
var RadioOptionType = FilterNodeType.extend({
    value: external_tcomb_validation_.maybe(SearchValueType),
    query: external_tcomb_validation_.maybe(ObjSearchType),
    selected: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
});
var RadioFilterType = FilterCollectionNodeType.extend({
    type: external_tcomb_validation_.enums.of(['radioButton']),
    options: external_tcomb_validation_.dict(external_tcomb_validation_.String, RadioOptionType),
}, 'RadioFilterDefinition');
var CheckboxOptionType = FilterNodeType.extend({
    value: external_tcomb_validation_.maybe(SearchValueType),
    selected: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
});
var CheckboxFilterType = FilterCollectionNodeType.extend({
    type: external_tcomb_validation_.enums.of(['checkbox']),
    options: external_tcomb_validation_.dict(external_tcomb_validation_.String, CheckboxOptionType),
}, 'CheckboxFilterDefinition');
var TreeFilterType = external_tcomb_validation_.declare('TreeFilterDefinition');
TreeFilterType.define(FilterNodeType.extend({
    type: external_tcomb_validation_.maybe(external_tcomb_validation_.enums.of(['tree'])),
    icon: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    query: external_tcomb_validation_.maybe(ObjSearchType),
    expanded: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
    value: external_tcomb_validation_.maybe(SearchValueType),
    field: external_tcomb_validation_.maybe(SearchFieldType),
    operator: external_tcomb_validation_.maybe(SearchOperatorType),
    selected: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
    options: external_tcomb_validation_.maybe(external_tcomb_validation_.dict(external_tcomb_validation_.String, TreeFilterType)),
}));
var FilterDefinitionTypeMapping = {
    tree: TreeFilterType,
    radioButton: RadioFilterType,
    checkbox: CheckboxFilterType,
};
var FilterDefinitionType = external_tcomb_validation_.union([
    FilterDefinitionTypeMapping.tree,
    FilterDefinitionTypeMapping.checkbox,
    FilterDefinitionTypeMapping.radioButton,
]);
FilterDefinitionType.dispatch = function (definition) { return FilterDefinitionTypeMapping[definition.type || 'tree']; };
var StaticFiltersType = external_tcomb_validation_.dict(external_tcomb_validation_.String, FilterDefinitionType);
var DynamicOrStaticFiltersType = external_tcomb_validation_.union([external_tcomb_validation_.Function, StaticFiltersType]);
DynamicOrStaticFiltersType.dispatch = function (v) {
    return external_tcomb_validation_.Function.is(v)
        ? DynamicOrStaticFiltersType.meta.types[0]
        : DynamicOrStaticFiltersType.meta.types[1];
};
var BaseFilterType = external_tcomb_validation_.struct({
    query: ObjSearchType,
});
var ConfigurationType = external_tcomb_validation_.struct({
    filters: external_tcomb_validation_.maybe(DynamicOrStaticFiltersType),
    baseFilter: external_tcomb_validation_.maybe(BaseFilterType),
}, 'Configuration');
var checkConfigure = checkArgumentsFor('configureContentBrowser', [['configuration', ConfigurationType]], {
    docPermalink: 'js-sdk/configureContentBrowser',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_registry.ts
var menuCallbacks = [];
function registerMenuCallback(menuCallback) {
    menuCallbacks.push(menuCallback);
}
function getMenuCallbacks() {
    return menuCallbacks;
}
// For test purpose only.
function resetMenuRegistry() {
    menuCallbacks.length = 0;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/compute_on_click_handler.ts

function computeOnClickHandler(id) {
    var onClickScan = new OnClickScan(id);
    getMenuCallbacks().forEach(function (menuCallback) {
        return menuCallback.call(null, onClickScan);
    });
    return onClickScan.onClickHandler();
}
var OnClickScan = /** @class */ (function () {
    function OnClickScan(id) {
        this.id = id;
    }
    OnClickScan.prototype.insert = function (customMenuItem) {
        if (customMenuItem && customMenuItem.id === this.id) {
            this.onClick = customMenuItem.onClick;
        }
    };
    OnClickScan.prototype.modify = function () {
        // do nothing
    };
    OnClickScan.prototype.remove = function () {
        // do nothing
    };
    OnClickScan.prototype.onClickHandler = function () {
        return this.onClick;
    };
    return OnClickScan;
}());

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_ie.ts
function isIE() {
    var userAgent = window.navigator.userAgent;
    return userAgent.indexOf('MSIE') >= 0 || userAgent.indexOf('Trident') >= 0;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/on_element_resize.ts


function onElementResize(element, listener) {
    var observedElement = element;
    if (!observedElement._scrivitoResizeListeners) {
        observedElement._scrivitoResizeListeners = [];
        // The element has to have relative position, otherwise the object won't span the whole height.
        //
        // Unfortunately Firefox cannot compute styles of elements inside an iframe with `display:none`
        // and it reports such elements to have no styles even _after_ the iframe became visible. So we
        // cannot set position to `relative` only if it was previously `static`.
        // See https://bugzilla.mozilla.org/show_bug.cgi?id=548397.
        //
        // We always have to enforce the relative position, regardless of the previous position.
        element.style.position = 'relative';
        var trigger = createTrigger(observedElement);
        observedElement._scrivitoResizeTrigger = trigger;
        if (isIE()) {
            element.appendChild(trigger);
        }
        trigger.data = 'about:blank';
        if (!isIE()) {
            element.appendChild(trigger);
        }
    }
    observedElement._scrivitoResizeListeners.push(listener);
    return function () {
        observedElement._scrivitoResizeListeners.splice(observedElement._scrivitoResizeListeners.indexOf(listener), 1);
    };
}
function createTrigger(observedElement) {
    var object = document.createElement('object');
    object.observedElement = observedElement;
    object.type = 'text/html';
    object.onload = function () { return onObjectLoad(object); };
    object.style.display = 'block';
    object.style.position = 'absolute';
    object.style.top = '0';
    object.style.left = '0';
    object.style.height = '100%';
    object.style.width = '100%';
    object.style.overflow = 'hidden';
    object.style.pointerEvents = 'none';
    object.style.zIndex = '-1';
    return object;
}
function onObjectLoad(trigger) {
    var contentDocument = trigger.contentDocument;
    if (!contentDocument) {
        throw new InternalError('Trigger object is missing the content document');
    }
    var targetWindow = contentDocument.defaultView;
    if (targetWindow) {
        targetWindow._scrivitoObservedElement = trigger.observedElement;
        targetWindow.addEventListener('resize', onResize);
    }
}
function onResize(e) {
    var eventTarget = e.target || e.srcElement;
    if (!eventTarget) {
        throw new InternalError('Resize event is missing a target');
    }
    if (isEventTargetWithObservedElement(eventTarget)) {
        var observedElement = eventTarget._scrivitoObservedElement;
        if (observedElement) {
            observedElement._scrivitoResizeListeners.forEach(function (listener) { return listener(); });
        }
    }
}
function isEventTargetWithObservedElement(eventTarget) {
    return !!eventTarget
        ._scrivitoObservedElement;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/get_custom_component_dimensions.ts




function getCustomComponentDimensions(element) {
    return get_custom_component_dimensions_getData(element).getWithDefault(null);
}
function get_custom_component_dimensions_getData(element) {
    return new loadable_data({
        state: appState.subState('customComponentDimensions'),
        stream: new streamable_Streamable(function (subscriber) {
            var updateDimensions = function () {
                var _a = element.getBoundingClientRect(), width = _a.width, height = _a.height;
                subscriber.next({ width: width, height: height });
            };
            updateDimensions();
            return onElementResize(element, updateDimensions);
        }),
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/get_scroll_position.ts



function getScrollPosition(element) {
    return get_scroll_position_getData(element).getWithDefault(null);
}
function get_scroll_position_getData(element) {
    return new loadable_data({
        state: appState.subState('scrollPosition'),
        stream: new streamable_Streamable(function (subscriber) {
            var updatePosition = function () {
                subscriber.next({ x: element.scrollLeft, y: element.scrollTop });
            };
            updatePosition();
            var intervalId = window.setInterval(updatePosition, 1000);
            return function () { return window.clearInterval(intervalId); };
        }),
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/get_application_url.ts





function getApplicationUrl() {
    return get_application_url_getData().getWithDefault(null);
}
function get_application_url_getData() {
    return new loadable_data({
        state: appState.subState('applicationUrl'),
        stream: new streamable_Streamable(function (subscriber) {
            subscriber.next(getIncludingOrigin());
            return onCurrentPageChange()
                .map(function () { return getIncludingOrigin(); })
                .subscribe(subscriber);
        }),
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/app_adapter.ts






























function isAttributeValidationReportEntry(validationReportEntry) {
    return !!validationReportEntry
        .attributeName;
}
/* The AppAdapter is provided to the UI by the App.
 * The UI uses it as a communication channel to the App.
 * It is the counterpart of the UiAdapter.
 *
 * Communication should use only built-in datatypes,
 * i.e. communicate using `string` and `array`, not `BasicObj`.
 */
var app_adapter_AppAdapter = /** @class */ (function () {
    function AppAdapter() {
    }
    AppAdapter.prototype.getContentBrowserConfiguration = function (validObjClasses) {
        return uiAdapterCompatibleValue(getContentBrowserConfiguration(validObjClasses));
    };
    AppAdapter.prototype.titleForObj = function (objId) {
        return invokeUiConfigCallbackForObjId('titleForContent', objId);
    };
    AppAdapter.prototype.descriptionForObj = function (objId) {
        return invokeUiConfigCallbackForObjId('descriptionForContent', objId);
    };
    AppAdapter.prototype.executeCustomCommand = function (id) {
        var onClickHandler = computeOnClickHandler(id);
        if (onClickHandler) {
            onClickHandler.call(null);
        }
    };
    AppAdapter.prototype.titleForWidget = function (objId, widgetId) {
        return titleForWidget(objId, widgetId);
    };
    AppAdapter.prototype.initializeContentForObj = function (objId) {
        initializeContentForObj(objId);
    };
    AppAdapter.prototype.initializeContentForWidget = function (objId, widgetId) {
        initializeContentForWidget(objId, widgetId);
    };
    AppAdapter.prototype.getClasses = function () {
        var realm = getWindowContext();
        var classDatas = [];
        Object(external_underscore_["each"])(realm.allObjClasses(), function (modelClass, name) {
            return classDatas.push(buildObjClassData(name, modelClass));
        });
        Object(external_underscore_["each"])(realm.allWidgetClasses(), function (modelClass, name) {
            return classDatas.push(buildWidgetClassData(name, modelClass));
        });
        return classDatas;
    };
    AppAdapter.prototype.navigateTo = function (objId) {
        load(function () {
            var basicObj = basic_obj.get(objId);
            if (basicObj) {
                return wrapInAppClass(getWindowRegistry(), basicObj);
            }
        }).then(function (result) {
            if (result) {
                navigateTo(result);
            }
        });
    };
    AppAdapter.prototype.showCustomComponent = function (componentId, props) {
        showCustomComponent(componentId, props);
    };
    AppAdapter.prototype.objReplicationMessageStream = function (workspaceId, objId) {
        return objReplicationPool
            .get(workspaceId, objId)
            .replicationMessageStream();
    };
    AppAdapter.prototype.urlFor = function (objId) {
        return load(function () {
            var basicObj = basic_obj.getIncludingDeleted(objId);
            if (basicObj) {
                return basicUrlWithOriginFor(basicObj);
            }
            return null;
        });
    };
    AppAdapter.prototype.resolveUrl = function (url) {
        return resolveUrl(url).then(function (resolvedUrl) {
            if (!resolvedUrl || !resolvedUrl.obj) {
                return null;
            }
            var obj = resolvedUrl.obj;
            var fragment = resolvedUrl.url.fragment();
            var search = resolvedUrl.url.search();
            var recognizedUrl = { obj_id: obj.id() };
            if (fragment) {
                recognizedUrl.fragment = fragment;
            }
            if (search) {
                recognizedUrl.query = search;
            }
            return recognizedUrl;
        });
    };
    AppAdapter.prototype.replaceInternalLinks = function (htmlString) {
        return replaceInternalLinks(htmlString);
    };
    AppAdapter.prototype.getHomepageId = function () {
        var homepage = homepageFromCallback();
        if (homepage) {
            return homepage.id();
        }
        return null;
    };
    AppAdapter.prototype.getSiteIdForObj = function (objId) {
        if (useMultiSiteMode()) {
            var obj = basic_obj.get(objId);
            if (obj) {
                return multi_site_mode_getSiteIdForObj(obj);
            }
        }
        return null;
    };
    AppAdapter.prototype.getElementBoundaries = function (elementId) {
        return getElementBoundaries(elementId);
    };
    AppAdapter.prototype.getContentZoneData = function () {
        return getContentZoneData();
    };
    AppAdapter.prototype.getCustomComponentDimensions = function () {
        return getCustomComponentDimensions(getDocument().querySelector('html'));
    };
    AppAdapter.prototype.getScrollPosition = function () {
        return getScrollPosition(getDocument().querySelector('html'));
    };
    AppAdapter.prototype.getApplicationUrl = function () {
        return getApplicationUrl();
    };
    AppAdapter.prototype.getCurrentPageId = function () {
        return getCurrentPageId();
    };
    AppAdapter.prototype.getValidationReport = function (objId) {
        var obj = basic_obj.get(objId);
        if (!obj)
            return;
        return {
            error: this.getValidationReportSection(obj, 'error'),
            warning: this.getValidationReportSection(obj, 'warning'),
            info: this.getValidationReportSection(obj, 'info'),
        };
    };
    AppAdapter.prototype.scrollIntoView = function (target) {
        scrollIntoView(target);
    };
    AppAdapter.prototype.getValidationReportSection = function (obj, severity) {
        var _this = this;
        var section = {
            obj: this.getValidationReportEntries(obj, severity),
            widgets: [],
        };
        obj.widgets().forEach(function (widget) {
            var widgetReportEntries = _this.getValidationReportEntries(widget, severity);
            if (widgetReportEntries.length) {
                section.widgets.push({
                    widgetId: widget.id(),
                    entries: widgetReportEntries,
                });
            }
        });
        return section;
    };
    AppAdapter.prototype.getValidationReportEntries = function (basicModel, severity) {
        return getValidationReportEntries(basicModel).filter(function (entry) { return entry.severity === severity; });
    };
    return AppAdapter;
}());
/* harmony default export */ var app_adapter = (app_adapter_AppAdapter);
function buildObjClassData(name, modelClass) {
    var schema = schema_Schema.forClass(modelClass);
    return Object(external_underscore_["pick"])({
        name: name,
        type: 'Obj',
        attributes: buildAttributesData(schema.attributes, getEditingConfigFor(name, 'attributes')),
        description: getEditingConfigFor(name, 'description'),
        hideInSelectionDialogs: getEditingConfigFor(name, 'hideInSelectionDialogs'),
        properties: getEditingConfigFor(name, 'properties'),
        propertiesGroups: getEditingConfigFor(name, 'propertiesGroups'),
        thumbnail: getEditingConfigFor(name, 'thumbnail'),
        title: getEditingConfigFor(name, 'title'),
    }, external_underscore_["identity"]);
}
function buildAttributesData(attributes, attributeEditConfigs) {
    var attributesData = Object(external_underscore_["map"])(attributes, function (definition, name) {
        var type = definition[0];
        var attributeData = { name: name, type: type };
        if (definition.length > 1 && definition[1]) {
            var _a = definition[1], validClasses = _a.validClasses, values = _a.values;
            if (validClasses) {
                attributeData.validClasses = validClasses;
            }
            if (values) {
                attributeData.values = values;
            }
        }
        var editConfig = attributeEditConfigs && attributeEditConfigs[name];
        if (editConfig) {
            attributeData.title = editConfig.title;
            attributeData.description = editConfig.description;
            attributeData.valuesLocalization = editConfig.values;
        }
        return attributeData;
    });
    return attributesData;
}
function buildWidgetClassData(name, modelClass) {
    var schema = schema_Schema.forClass(modelClass);
    return Object(external_underscore_["pick"])({
        name: name,
        type: 'Widget',
        attributes: buildAttributesData(schema.attributes, getEditingConfigFor(name, 'attributes')),
        onlyInside: schema.onlyInside,
        description: getEditingConfigFor(name, 'description'),
        hideInSelectionDialogs: getEditingConfigFor(name, 'hideInSelectionDialogs'),
        properties: getEditingConfigFor(name, 'properties'),
        propertiesGroups: getEditingConfigFor(name, 'propertiesGroups'),
        thumbnail: getEditingConfigFor(name, 'thumbnail'),
        title: getEditingConfigFor(name, 'title'),
    }, external_underscore_["identity"]);
}
function invokeUiConfigCallbackForObjId(callbackName, objId) {
    var basicObj = basic_obj.getIncludingDeleted(objId);
    if (!basicObj) {
        return undefined;
    }
    var appObj = wrapInAppClass(getWindowRegistry(), basicObj);
    return invokeEditingConfigCallback(basicObj.objClass(), callbackName, appObj);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/configure.ts
var configure_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var configure_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(configure_read(arguments[i]));
    return ar;
};



















var OriginValue = external_tcomb_validation_.refinement(external_tcomb_validation_.String, function (v) { return external_urijs_(v).origin() === v; });
var AllowedConfiguration = external_tcomb_validation_.struct({
    tenant: external_tcomb_validation_.String,
    endpoint: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    constraintsValidation: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    homepage: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
    origin: external_tcomb_validation_.maybe(OriginValue),
    routingBasePath: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    visitorAuthentication: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
    unstable: external_tcomb_validation_.maybe(external_tcomb_validation_.Object),
});
var configure_checkConfigure = checkArgumentsFor('configure', [['configuration', AllowedConfiguration]], {
    docPermalink: 'js-sdk/configure',
});
var isConfigured = false;
function configure(configuration) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    configure_checkConfigure.apply(void 0, configure_spread([configuration], excessArgs));
    if (isConfigured) {
        throw new ScrivitoError('Scrivito.configure has already been called.');
    }
    isConfigured = true;
    var inofficialConfiguration = configuration.unstable;
    if (inofficialConfiguration) {
        var getSiteIdForObj = inofficialConfiguration.getSiteIdForObj;
        if (getSiteIdForObj) {
            setMultiSiteMode(getSiteIdForObj);
        }
        var trustedUiOrigins = inofficialConfiguration.trustedUiOrigins;
        if (trustedUiOrigins) {
            setTrustedUiOrigins(trustedUiOrigins);
        }
    }
    if (configuration.tenant === IN_MEMORY_TENANT) {
        useInMemoryTenant();
        objReplicationPool.disableReplication();
    }
    else {
        var tenant = configuration.tenant;
        var endpoint = configuration.endpoint || 'api.scrivito.com';
        if (ui_adapter_uiAdapter) {
            configureForUi(endpoint, tenant, ui_adapter_uiAdapter, inofficialConfiguration);
            loadEditingAssets(getAssetUrlBase());
        }
        else {
            configureCmsRestApi(endpoint, tenant, configuration.visitorAuthentication);
        }
    }
    configureRouting(configuration);
    configureConstraintsValidationCallback(configuration);
}
// For test purpose only
function resetIsConfigured() {
    isConfigured = false;
}
function configureForUi(endpoint, tenant, uiAdapterClient, inofficialConfiguration) {
    var tenantConfiguration = { tenant: tenant, endpoint: endpoint };
    if (inofficialConfiguration) {
        var assetUrlBase = inofficialConfiguration.assetUrlBase, useRailsAuth = inofficialConfiguration.useRailsAuth;
        if (useRailsAuth) {
            tenantConfiguration.useRailsAuth = useRailsAuth;
        }
        if (assetUrlBase) {
            configureAssetUrlBase(assetUrlBase);
        }
    }
    uiAdapterClient.configureTenant(tenantConfiguration);
    if (useMultiSiteMode()) {
        setAppAdapterMultiSiteMode(uiAdapterClient);
    }
    else {
        setAppAdapter(uiAdapterClient);
    }
}
function configureCmsRestApi(endpoint, tenant, visitorAuthentication) {
    cmsRestApi.init(endpoint, tenant, getVisitorAuthenticationProvider(visitorAuthentication));
}
function configureRouting(configuration) {
    var homepage = configuration.homepage, routingBasePath = configuration.routingBasePath;
    var homepageCallback = homepage
        ? function () { return unwrapAppClass(homepage()); }
        : function () { return basic_obj.root(); };
    routing_init({ routingBasePath: routingBasePath, homepageCallback: homepageCallback });
    configureOrigin(configuration.origin || undefined);
}
function configureConstraintsValidationCallback(configuration) {
    var constraintsValidationCallback = configuration.constraintsValidation;
    if (constraintsValidationCallback) {
        setConstraintsValidationCallback(constraintsValidationCallback);
    }
}
function setAppAdapter(uiAdapterClient) {
    var channel = new MessageChannel();
    var connectionToAdapter = createAdapterConnection(appAdapterDescription, new app_adapter());
    startAdapterMessageServer(linkViaPort(channel.port1), connectionToAdapter, appAdapterDescription);
    uiAdapterClient.setAppAdapter(channel.port2);
}
function setAppAdapterMultiSiteMode(uiAdapterClient) {
    var selectSiteIdTimeout = setTimeout(function () {
        logError('Warning: No site ID was selected within 30 seconds.' +
            ' In the multi-site mode a site ID must be selected before Scrivito can render content.' +
            ' Forgot to use Scrivito.unstable_selectSiteId?');
    }, 30000);
    waitFor(getSelectedSiteId).then(function () {
        clearTimeout(selectSiteIdTimeout);
        setAppAdapter(uiAdapterClient);
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_patch_builder.ts
var menu_patch_builder_assign = (undefined && undefined.__assign) || function () {
    menu_patch_builder_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return menu_patch_builder_assign.apply(this, arguments);
};
var menu_patch_builder_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var menu_patch_builder_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(menu_patch_builder_read(arguments[i]));
    return ar;
};


var menu_patch_builder_MenuPatchBuilder = /** @class */ (function () {
    function MenuPatchBuilder() {
        this.patch = {
            insertIds: [],
            removeIds: [],
            items: {},
            modifyItems: {},
        };
    }
    MenuPatchBuilder.prototype.insert = function (customMenuItem) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuInsertArguments.apply(void 0, menu_patch_builder_spread([customMenuItem], excessArgs));
        this.patch.insertIds = Object(external_underscore_["unique"])(menu_patch_builder_spread(this.patch.insertIds, [customMenuItem.id]));
        this.patch.items[customMenuItem.id] = menu_patch_builder_assign(menu_patch_builder_assign({}, Object(external_underscore_["pick"])(customMenuItem, 'description', 'group', 'icon', 'position', 'title')), Object(external_underscore_["mapObject"])(Object(external_underscore_["pick"])(customMenuItem, 'enabled'), function (v) { return !!v; }));
    };
    MenuPatchBuilder.prototype.modify = function (menuItem) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuModifyArguments.apply(void 0, menu_patch_builder_spread([menuItem], excessArgs));
        this.patch.modifyItems[menuItem.id] = menu_patch_builder_assign(menu_patch_builder_assign({}, this.patch.modifyItems[menuItem.id]), Object(external_underscore_["pick"])(menuItem, 'group', 'icon', 'position', 'title'));
    };
    MenuPatchBuilder.prototype.remove = function (id) {
        var excessArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            excessArgs[_i - 1] = arguments[_i];
        }
        checkMenuRemoveArguments.apply(void 0, menu_patch_builder_spread([id], excessArgs));
        this.patch.removeIds.push(id);
    };
    MenuPatchBuilder.prototype.getPatch = function () {
        return this.patch;
    };
    return MenuPatchBuilder;
}());
/* harmony default export */ var menu_patch_builder = (menu_patch_builder_MenuPatchBuilder);
var PositionType = external_tcomb_validation_.struct({
    after: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
    before: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
});
var checkMenuInsertArguments = checkArgumentsFor('menu.insert', [
    [
        'options',
        external_tcomb_validation_.struct({
            id: external_tcomb_validation_.String,
            description: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            enabled: external_tcomb_validation_.maybe(external_tcomb_validation_.Boolean),
            group: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            icon: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            onClick: external_tcomb_validation_.maybe(external_tcomb_validation_.Function),
            position: external_tcomb_validation_.maybe(PositionType),
            title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
        }),
    ],
], {
    docPermalink: 'js-sdk/extendMenu',
});
var checkMenuModifyArguments = checkArgumentsFor('menu.modify', [
    [
        'options',
        external_tcomb_validation_.struct({
            id: external_tcomb_validation_.String,
            group: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            icon: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
            position: external_tcomb_validation_.maybe(PositionType),
            title: external_tcomb_validation_.maybe(external_tcomb_validation_.String),
        }),
    ],
], {
    docPermalink: 'js-sdk/extendMenu',
});
var checkMenuRemoveArguments = checkArgumentsFor('menu.remove', [['id', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/extendMenu',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/compute_menu_patch.ts


function computeMenuPatch() {
    var patchBuilder = new menu_patch_builder();
    getMenuCallbacks().forEach(function (menuCallback) {
        return menuCallback.call(null, patchBuilder);
    });
    return patchBuilder.getPatch();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/menu/menu_observer.ts





var menu_observer_subscription;
function observeMenu() {
    if (menu_observer_subscription) {
        return;
    }
    menu_observer_subscription = observeAndLoad(function () {
        // this causes an (artifical) state dependency, so that each change to
        // menuUpdateCounter causes this observation to be updated.
        menuUpdateCounter().get();
        return runAndCatchException(computeMenuPatch);
    }).subscribe(function (observed) {
        if (observed.allDataLoaded) {
            if (ui_adapter_uiAdapter) {
                var outcome = observed.result;
                if (outcome.errorThrown) {
                    ui_adapter_uiAdapter.updateMenu({});
                    throw outcome.error;
                }
                ui_adapter_uiAdapter.updateMenu(outcome.result);
            }
        }
    });
}
function notifyMenuUpdate() {
    var currentCount = menuUpdateCounter().get() || 0;
    menuUpdateCounter().set(currentCount + 1);
}
// for test purposes only
function resetObserveMenu() {
    menu_observer_subscription = undefined;
}
function menuUpdateCounter() {
    return appState.subState('menuUpdateCounter');
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extend_menu.ts
var extend_menu_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var extend_menu_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(extend_menu_read(arguments[i]));
    return ar;
};




function extendMenu(menuCallback) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkExtendMenuArguments.apply(void 0, extend_menu_spread([menuCallback], excessArgs));
    if (!ui_adapter_uiAdapter) {
        return;
    }
    observeMenu();
    registerMenuCallback(menuCallback);
    notifyMenuUpdate();
}
var checkExtendMenuArguments = checkArgumentsFor('extendMenu', [['menuCallback', external_tcomb_validation_.Function]], {
    docPermalink: 'js-sdk/extendMenu',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_collector.ts
var ExtractCollector = /** @class */ (function () {
    function ExtractCollector(maxLength) {
        this.maxLength = maxLength;
        this.currentLength = 0;
        this.extracts = [];
    }
    ExtractCollector.prototype.isMaxLengthReached = function () {
        return this.currentLength >= this.maxLength;
    };
    ExtractCollector.prototype.push = function (extract) {
        if (!extract)
            return;
        this.currentLength += extract.length + (this.extracts.length ? 1 : 0);
        this.extracts.push(extract);
    };
    ExtractCollector.prototype.toString = function () {
        var extractedText = this.extracts.join(' ');
        var shortenedText = extractedText.substring(0, this.maxLength);
        return shortenedText.replace(/ $/, '');
    };
    return ExtractCollector;
}());


// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/prune_string.ts
var SPACES_REGEX = /\s+/g;
var ONE_SPACE = ' ';
function pruneString(input) {
    return input.trim().replace(SPACES_REGEX, ONE_SPACE);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/child_node_list_to_array.ts
function childNodeListToArray(childNodes) {
    // See https://stackoverflow.com/a/24775765/881759 for options
    return Array.prototype.slice.call(childNodes);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/node_to_text.ts

var IGNORE_NODE = ['HEAD', 'SCRIPT'];
function nodeToText(node) {
    var nodeName = node.nodeName;
    if (IGNORE_NODE.indexOf(nodeName) > -1)
        return '';
    if (nodeName === '#text')
        return node.textContent || '';
    return childNodeListToArray(node.childNodes)
        .map(function (child) { return nodeToText(child); })
        .join(' ');
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/string_to_html_element.ts
var parser = new DOMParser();
function stringToHtmlElement(htmlString) {
    return parser.parseFromString(htmlString, 'text/html').documentElement;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/remove_html_tags.ts



function removeHtmlTags(html) {
    if (html === '')
        return '';
    var element = stringToHtmlElement(html);
    var text = nodeToText(element);
    return pruneString(text);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_widgetlist.ts
var extract_widgetlist_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};

function extractWidgetlist(widgetlist, collector) {
    var e_1, _a;
    try {
        for (var widgetlist_1 = extract_widgetlist_values(widgetlist), widgetlist_1_1 = widgetlist_1.next(); !widgetlist_1_1.done; widgetlist_1_1 = widgetlist_1.next()) {
            var widget = widgetlist_1_1.value;
            extractTextFromBasicObjOrWidget(widget, collector);
            if (collector.isMaxLengthReached())
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (widgetlist_1_1 && !widgetlist_1_1.done && (_a = widgetlist_1.return)) _a.call(widgetlist_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_blob_text.ts


function extractBlobText(objOrWidget) {
    if (objOrWidget instanceof basic_widget)
        return '';
    var text = objOrWidget.metadata().get('text');
    if (typeof text !== 'string')
        return '';
    return pruneString(text);
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_attribute.ts
var extract_attribute_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};




function extractAttribute(objOrWidget, schema, attribute, collector) {
    if (attribute === 'blob:text') {
        return collector.push(extractBlobText(objOrWidget));
    }
    var definition = schema.attribute(attribute);
    if (!definition)
        return;
    var _a = extract_attribute_read(definition, 1), attributeType = _a[0];
    switch (attributeType) {
        case 'html':
            return collector.push(removeHtmlTags(objOrWidget.get(attribute, 'html')));
        case 'string':
            return collector.push(pruneString(objOrWidget.get(attribute, 'string')));
        case 'widgetlist':
            return extractWidgetlist(objOrWidget.get(attribute, 'widgetlist'), collector);
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text/extract_text_from_basic_obj_or_widget.ts
var extract_text_from_basic_obj_or_widget_values = (undefined && undefined.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};


function extractTextFromBasicObjOrWidget(objOrWidget, collector) {
    var e_1, _a;
    var schema = schemaFromBasicObjOrWidget(objOrWidget);
    if (!schema)
        return;
    try {
        for (var _b = extract_text_from_basic_obj_or_widget_values(schema.extractTextAttributes), _c = _b.next(); !_c.done; _c = _b.next()) {
            var attribute = _c.value;
            extractAttribute(objOrWidget, schema, attribute, collector);
            if (collector.isMaxLengthReached())
                break;
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_1) throw e_1.error; }
    }
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text_from_basic_obj.ts


function extractTextFromBasicObj(obj, maxLength) {
    var collector = new ExtractCollector(maxLength);
    extractTextFromBasicObjOrWidget(obj, collector);
    return collector.toString();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/extract_text.ts




// public API
function extractText(obj, options) {
    checkExtractText(obj, options);
    var basicObj = unwrapAppClass(obj);
    var maxLength = options && options.length ? options.length : Number.MAX_SAFE_INTEGER;
    return extractTextFromBasicObj(basicObj, maxLength);
}
var checkExtractText = checkArgumentsFor('extractText', [
    ['obj', ObjType],
    ['options', external_tcomb_validation_.maybe(external_tcomb_validation_.struct({ length: external_tcomb_validation_.maybe(external_tcomb_validation_.Number) }))],
], { docPermalink: 'js-sdk/extractText' });

// CONCATENATED MODULE: ./scrivito_sdk/app_support/update_menu_extensions.ts


function updateMenuExtensions() {
    if (!ui_adapter_uiAdapter) {
        return;
    }
    notifyMenuUpdate();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/content_dump.ts





/** dump the content of all provided LoadableData instances */
function generateContentDump(data, contentStateId) {
    return stringify({
        version: getScrivitoVersion(),
        csid: contentStateId,
        recording: generateRecording(data),
    });
}
/** load the data from the content dump string into the SDK */
function loadContentDump(contentDump) {
    var parsed = parse(contentDump);
    if (!parsed) {
        logError('could not preload: parsing dump failed');
        return;
    }
    if (!isContentDumpFromThisVersion(parsed)) {
        logError("could not preload: " +
            ("dump is from version " + parsed.version) +
            (", this is version " + getScrivitoVersion()));
        return;
    }
    withBatchedUpdates(function () {
        setContentStateId(current_workspace_currentWorkspaceId(), parsed.csid);
        loadRecording(parsed.recording);
    });
}
function stringify(contentDump) {
    return JSON.stringify(contentDump);
}
function parse(stringifiedContentDump) {
    var parsed = parseJsonObject(stringifiedContentDump);
    if (parsed && isMaybeContentDump(parsed))
        return parsed;
}
function parseJsonObject(text) {
    if (text.charAt(0) !== '{')
        return;
    try {
        return JSON.parse(text);
    }
    catch (error) {
        return;
    }
}
function isMaybeContentDump(parsed) {
    return !!parsed.version;
}
function isContentDumpFromThisVersion(dump) {
    return dump.version === getScrivitoVersion();
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/render_page.ts
var render_page_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var render_page_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(render_page_read(arguments[i]));
    return ar;
};










function renderPage(page, render) {
    var excessArgs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        excessArgs[_i - 2] = arguments[_i];
    }
    assertNotUsingInMemoryTenant('Scrivito.renderPage');
    checkRenderPage.apply(void 0, render_page_spread([page, render], excessArgs));
    var workspaceId = current_workspace_currentWorkspaceId();
    var basicPage = unwrapAppClass(page);
    return trackContentStateId(workspaceId).then(function () {
        var contentStateId = getContentStateId(workspaceId);
        return load(function () {
            return reportUsedData(function () {
                ensureRoutingDataAvailable(basicPage);
                return withCurrentPage(basicPage, function () { return usePrerenderScaling(render); });
            });
        }).then(function (_a) {
            var result = _a.result, usedData = _a.usedData;
            return {
                result: result,
                preloadDump: generateContentDump(usedData, contentStateId),
            };
        });
    });
}
function ensureRoutingDataAvailable(basicPage) {
    withDisabledPermalinkCache(function () {
        return recognizeRoutingPath(generateRoutingPath(basicPage));
    });
}
var checkRenderPage = checkArgumentsFor('renderPage', [['page', ObjType], ['render', external_tcomb_validation_.Function]], {
    docPermalink: 'js-sdk/renderPage',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/preload.ts
var preload_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var preload_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(preload_read(arguments[i]));
    return ar;
};






/** tries to pre-warm the CMS cache using a preloadDump. */
function preload(preloadDump) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkPreload.apply(void 0, preload_spread([preloadDump], excessArgs));
    return ScrivitoPromise.resolve().then(function () {
        var dumpLoaded = false;
        if (isVisitorAuthenticationEnabled())
            return { dumpLoaded: dumpLoaded };
        if (!ui_adapter_uiAdapter) {
            loadContentDump(preloadDump);
            dumpLoaded = true;
        }
        return preloadCurrentPage().then(function () { return ({ dumpLoaded: dumpLoaded }); });
    });
}
function preloadCurrentPage() {
    return load(function () {
        currentPage();
    });
}
var checkPreload = checkArgumentsFor('preload', [['preloadDump', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/preload',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/open_dialog.ts
var open_dialog_read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var open_dialog_spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(open_dialog_read(arguments[i]));
    return ar;
};


function openDialog(name) {
    var excessArgs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        excessArgs[_i - 1] = arguments[_i];
    }
    checkOpenDialogArguments.apply(void 0, open_dialog_spread([name], excessArgs));
    if (ui_adapter_uiAdapter) {
        ui_adapter_uiAdapter.openCustomDialog(name);
    }
}
var checkOpenDialogArguments = checkArgumentsFor('openDialog', [['name', external_tcomb_validation_.String]], {
    docPermalink: 'js-sdk/openDialog',
});

// CONCATENATED MODULE: ./scrivito_sdk/app_support/can_write.ts


function canWrite() {
    if (!ui_adapter_uiAdapter)
        return false;
    return ui_adapter_uiAdapter.canWrite(current_workspace_currentWorkspaceId()) || false;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/is_editor_logged_in.ts

function isEditorLoggedIn() {
    return !!ui_adapter_uiAdapter;
}

// CONCATENATED MODULE: ./scrivito_sdk/app_support/update_content.ts



function update_content_updateContent() {
    updateContent(current_workspace_currentWorkspaceId()).then(function (pendingChanges) {
        if (pendingChanges) {
            throwNextTick(new ScrivitoError('Scrivito.updateContent did not completely update the preload dump to the currently published content because of too many intermediate publishes.'));
        }
    });
}

// CONCATENATED MODULE: ./scrivito_sdk/infopark_integration_test_support.js



function enableForceVerification() {
    cmsRestApi.enableForceVerification();
}
function currentPublicAuthorizationState() {
    return cmsRestApi.currentPublicAuthorizationState();
}

// CONCATENATED MODULE: ./scrivito_sdk/public_api.ts
// If imported, this file provides a namespace object for the public API, e.g.:
//
//   import * as Scrivito from 'scrivito_sdk/public_api';
//
//   Scrivito.configure({ ... });
//   Scrivito.provideComponent({ ... });
// Client





// App support





















// React














var public_api_realmApi = getWindowContext();
var public_api_Link = public_api_realmApi.Link;
var public_api_Obj = public_api_realmApi.Obj;
var public_api_ObjSearch = public_api_realmApi.ObjSearch;
var public_api_Widget = public_api_realmApi.Widget;
var public_api_createObjClass = public_api_realmApi.createObjClass;
var public_api_createWidgetClass = public_api_realmApi.createWidgetClass;
var getClass = public_api_realmApi.getClass;
var public_api_provideObjClass = public_api_realmApi.provideObjClass;
var public_api_provideWidgetClass = public_api_realmApi.provideWidgetClass;
// public for tests



// CONCATENATED MODULE: ./scrivito_npm.js
/* concated harmony reexport Binary */__webpack_require__.d(__webpack_exports__, "Binary", function() { return models_binary; });
/* concated harmony reexport FutureBinary */__webpack_require__.d(__webpack_exports__, "FutureBinary", function() { return future_binary; });
/* concated harmony reexport ObjFacetValue */__webpack_require__.d(__webpack_exports__, "ObjFacetValue", function() { return obj_facet_value_ObjFacetValue; });
/* concated harmony reexport load */__webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* concated harmony reexport ArgumentError */__webpack_require__.d(__webpack_exports__, "ArgumentError", function() { return ArgumentError; });
/* concated harmony reexport ScrivitoError */__webpack_require__.d(__webpack_exports__, "ScrivitoError", function() { return ScrivitoError; });
/* concated harmony reexport configure */__webpack_require__.d(__webpack_exports__, "configure", function() { return configure; });
/* concated harmony reexport configureContentBrowser */__webpack_require__.d(__webpack_exports__, "configureContentBrowser", function() { return configureContentBrowser; });
/* concated harmony reexport currentPage */__webpack_require__.d(__webpack_exports__, "currentPage", function() { return currentPage; });
/* concated harmony reexport currentPageParams */__webpack_require__.d(__webpack_exports__, "currentPageParams", function() { return currentPageParams; });
/* concated harmony reexport extendMenu */__webpack_require__.d(__webpack_exports__, "extendMenu", function() { return extendMenu; });
/* concated harmony reexport extractText */__webpack_require__.d(__webpack_exports__, "extractText", function() { return extractText; });
/* concated harmony reexport updateMenuExtensions */__webpack_require__.d(__webpack_exports__, "updateMenuExtensions", function() { return updateMenuExtensions; });
/* concated harmony reexport renderPage */__webpack_require__.d(__webpack_exports__, "renderPage", function() { return renderPage; });
/* concated harmony reexport preload */__webpack_require__.d(__webpack_exports__, "preload", function() { return preload; });
/* concated harmony reexport finishLoading */__webpack_require__.d(__webpack_exports__, "finishLoading", function() { return finishLoading; });
/* concated harmony reexport openDialog */__webpack_require__.d(__webpack_exports__, "openDialog", function() { return openDialog; });
/* concated harmony reexport canWrite */__webpack_require__.d(__webpack_exports__, "canWrite", function() { return canWrite; });
/* concated harmony reexport isInPlaceEditingActive */__webpack_require__.d(__webpack_exports__, "isInPlaceEditingActive", function() { return isInPlaceEditingActive; });
/* concated harmony reexport isEditorLoggedIn */__webpack_require__.d(__webpack_exports__, "isEditorLoggedIn", function() { return isEditorLoggedIn; });
/* concated harmony reexport navigateTo */__webpack_require__.d(__webpack_exports__, "navigateTo", function() { return navigateTo; });
/* concated harmony reexport provideEditingConfig */__webpack_require__.d(__webpack_exports__, "provideEditingConfig", function() { return provideEditingConfig; });
/* concated harmony reexport updateContent */__webpack_require__.d(__webpack_exports__, "updateContent", function() { return update_content_updateContent; });
/* concated harmony reexport urlFor */__webpack_require__.d(__webpack_exports__, "urlFor", function() { return url_for_urlFor; });
/* concated harmony reexport useHistory */__webpack_require__.d(__webpack_exports__, "useHistory", function() { return useHistory; });
/* concated harmony reexport setVisitorIdToken */__webpack_require__.d(__webpack_exports__, "setVisitorIdToken", function() { return setVisitorIdToken; });
/* concated harmony reexport unstable_selectSiteId */__webpack_require__.d(__webpack_exports__, "unstable_selectSiteId", function() { return unstable_selectSiteId; });
/* concated harmony reexport validationResultsFor */__webpack_require__.d(__webpack_exports__, "validationResultsFor", function() { return validationResultsFor; });
/* concated harmony reexport BackgroundImageTag */__webpack_require__.d(__webpack_exports__, "BackgroundImageTag", function() { return background_image_tag; });
/* concated harmony reexport ChildListTag */__webpack_require__.d(__webpack_exports__, "ChildListTag", function() { return child_list_tag; });
/* concated harmony reexport ContentTag */__webpack_require__.d(__webpack_exports__, "ContentTag", function() { return content_tag; });
/* concated harmony reexport CurrentPage */__webpack_require__.d(__webpack_exports__, "CurrentPage", function() { return CurrentPage; });
/* concated harmony reexport ImageTag */__webpack_require__.d(__webpack_exports__, "ImageTag", function() { return image_tag; });
/* concated harmony reexport InPlaceEditingOff */__webpack_require__.d(__webpack_exports__, "InPlaceEditingOff", function() { return InPlaceEditingOff; });
/* concated harmony reexport LinkTag */__webpack_require__.d(__webpack_exports__, "LinkTag", function() { return link_tag; });
/* concated harmony reexport NotFoundErrorPage */__webpack_require__.d(__webpack_exports__, "NotFoundErrorPage", function() { return NotFoundErrorPage; });
/* concated harmony reexport RestoreInPlaceEditing */__webpack_require__.d(__webpack_exports__, "RestoreInPlaceEditing", function() { return RestoreInPlaceEditing; });
/* concated harmony reexport WidgetTag */__webpack_require__.d(__webpack_exports__, "WidgetTag", function() { return widget_tag; });
/* concated harmony reexport connect */__webpack_require__.d(__webpack_exports__, "connect", function() { return connect; });
/* concated harmony reexport provideComponent */__webpack_require__.d(__webpack_exports__, "provideComponent", function() { return provideComponent; });
/* concated harmony reexport registerComponent */__webpack_require__.d(__webpack_exports__, "registerComponent", function() { return registerComponent; });
/* concated harmony reexport Link */__webpack_require__.d(__webpack_exports__, "Link", function() { return public_api_Link; });
/* concated harmony reexport Obj */__webpack_require__.d(__webpack_exports__, "Obj", function() { return public_api_Obj; });
/* concated harmony reexport ObjSearch */__webpack_require__.d(__webpack_exports__, "ObjSearch", function() { return public_api_ObjSearch; });
/* concated harmony reexport Widget */__webpack_require__.d(__webpack_exports__, "Widget", function() { return public_api_Widget; });
/* concated harmony reexport createObjClass */__webpack_require__.d(__webpack_exports__, "createObjClass", function() { return public_api_createObjClass; });
/* concated harmony reexport createWidgetClass */__webpack_require__.d(__webpack_exports__, "createWidgetClass", function() { return public_api_createWidgetClass; });
/* concated harmony reexport getClass */__webpack_require__.d(__webpack_exports__, "getClass", function() { return getClass; });
/* concated harmony reexport provideObjClass */__webpack_require__.d(__webpack_exports__, "provideObjClass", function() { return public_api_provideObjClass; });
/* concated harmony reexport provideWidgetClass */__webpack_require__.d(__webpack_exports__, "provideWidgetClass", function() { return public_api_provideWidgetClass; });
/* concated harmony reexport _internal */__webpack_require__.d(__webpack_exports__, "_internal", function() { return infopark_integration_test_support_namespaceObject; });
/*
 * This is the webpack entry file used by the NPM module
 */


initializeSdk();


/***/ })
/******/ ]);
});