(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("redux-actions"), require("redux"), require("reselect"));
	else if(typeof define === 'function' && define.amd)
		define("stateAction", ["redux-actions", "redux", "reselect"], factory);
	else if(typeof exports === 'object')
		exports["stateAction"] = factory(require("redux-actions"), require("redux"), require("reselect"));
	else
		root["stateAction"] = factory(root["reduxActions"], root["redux"], root["reselect"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

// Basic
var fold = function fold(fn, initial, arr) {
  return arr.reduce(fn, initial);
};

var keys = function keys(obj) {
  return Object.keys(obj);
};
var isArray = function isArray(value) {
  return value !== null && Array.isArray(value);
};
var isObject = function isObject(value) {
  return value !== null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object';
};
var isString = function isString(value) {
  return value !== null && typeof value === 'string';
};
var isFunction = function isFunction(value) {
  return value !== null && typeof value === 'function';
};
var isBoolean = function isBoolean(value) {
  return value !== null && typeof value === 'boolean';
};
var isNumber = function isNumber(value) {
  return value !== null && typeof value === 'number';
};
var join = function join(fn, arg) {
  return arg ? arg.join(fn) : function (arg2) {
    return arg2.join(fn);
  };
};
var split = function split(matcher, arg) {
  return arg ? arg.split(matcher) : function (arg2) {
    return arg2.split(matcher);
  };
};
var map = function map(fn, arg) {
  return arg ? arg.map(fn) : function (arg2) {
    return arg2.map(fn);
  };
};
var filter = function filter(fn, arg) {
  return arg ? arg.filter(fn) : function (arg2) {
    return arg2.filter(fn);
  };
};
var isValidNumber = function isValidNumber(value) {
  return value !== null && !isNaN(value) && typeof value === 'number';
};
var property = function property(prop, arg) {
  return arg ? arg[prop] : function (arg2) {
    return arg2[prop];
  };
};

// Transform multisteps
var omitObject = function omitObject(props, obj) {
  var normalizedProps = isArray(props) ? props : [props];
  return normalizedProps.reduce(function (newObj, val) {
    return function (_ref) {
      var dropped = _ref[val],
          rest = _objectWithoutProperties(_ref, [val]);

      return rest;
    }(newObj);
  }, obj);
};

var subGet = function subGet(subPath, origin) {
  var elements = subPath.split('[');
  var prop = elements[0];
  var arrayIndex = elements[1] ? parseInt(elements[1].replace(']', ''), 10) : undefined;
  if (!prop && !isValidNumber(arrayIndex)) {
    return undefined;
  }
  if (prop && !isValidNumber(arrayIndex)) {
    return origin[prop];
  }
  if (!prop && isValidNumber(arrayIndex)) {
    return origin[arrayIndex];
  }
  return origin[prop][arrayIndex];
};

var getCollection = exports.getCollection = function getCollection(pathString, defaultValue, origin) {
  var value = pathString.split('.').reduce(function (result, subPath) {
    return isObject(result) ? subGet(subPath, result) : undefined;
  }, origin);

  return value !== undefined ? value : defaultValue;
};

var reduceCollection = function reduceCollection(fn, initialValue, arg) {
  if (isArray(arg)) {
    return fold(fn, initialValue, arg);
  }
  var newFn = function newFn(result, key) {
    return fn(result, arg[key], key);
  };
  return fold(newFn, initialValue, keys(arg));
};

var mapValuesObject = function mapValuesObject(fn, arg) {
  var mapFn = isFunction(fn) ? fn : property(fn);
  return reduceCollection(function (result, value, key) {
    return _extends({}, result, _defineProperty({}, key, mapFn(value)));
  }, {}, arg);
};

var matches = function matches(object) {
  return function (origin) {
    return reduceCollection(function (result, value, key) {
      return result ? origin[key] === value : false;
    }, true, object);
  };
};

var without = function without() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return function (arrOrigin) {
    return reduceCollection(function (result, value) {
      return args.includes(value) ? result : [].concat(_toConsumableArray(result), [value]);
    }, [], arrOrigin);
  };
};
// Export with curry
exports.keys = keys;
exports.isArray = isArray;
exports.isBoolean = isBoolean;
exports.isObject = isObject;
exports.isString = isString;
exports.isFunction = isFunction;
exports.join = join;
exports.split = split;
exports.map = map;
exports.isValidNumber = isValidNumber;
exports.isNumber = isNumber;
exports.property = property;
exports.filter = filter;
exports.matches = matches;
exports.without = without;
var omit = exports.omit = function omit(props, arg) {
  return arg ? omitObject(props, arg) : function (arg2) {
    return omitObject(props, arg2);
  };
};

var mapValues = exports.mapValues = function mapValues(fn, arg) {
  return arg ? mapValuesObject(fn, arg) : function (arg2) {
    return mapValuesObject(fn, arg2);
  };
};

var get = exports.get = function get(path, defaultValue, arg) {
  return arg ? getCollection(path, defaultValue, arg) : function (arg2) {
    return getCollection(path, defaultValue, arg2);
  };
};

var reduce = exports.reduce = function reduce(fn, initialValue, arg) {
  return arg ? reduceCollection(fn, initialValue, arg) : function (arg2) {
    return reduceCollection(fn, initialValue, arg2);
  };
};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fp = __webpack_require__(0);

var getType = function getType(value) {
  if ((0, _fp.isValidNumber)(value)) {
    return 'number';
  }
  if ((0, _fp.isBoolean)(value)) {
    return 'boolean';
  }
  if ((0, _fp.isString)(value)) {
    return 'string';
  }
  if ((0, _fp.isArray)(value)) {
    return 'array';
  }
  if ((0, _fp.isObject)(value)) {
    return 'object';
  }
  return 'unknown';
};

exports.default = getType;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.combineReducerHanlders = exports.getReducerHandlerSet = exports.getActionTypeSet = exports.getActionCreatorSet = exports.getActionsDataSet = exports.getActionHandlersByType = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _fp = __webpack_require__(0);

var _shared = __webpack_require__(20);

var _shared2 = _interopRequireDefault(_shared);

var _number = __webpack_require__(16);

var _number2 = _interopRequireDefault(_number);

var _boolean = __webpack_require__(12);

var _boolean2 = _interopRequireDefault(_boolean);

var _array = __webpack_require__(8);

var _array2 = _interopRequireDefault(_array);

var _object = __webpack_require__(18);

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getActionHandlersByType = exports.getActionHandlersByType = function getActionHandlersByType(type) {
  var values = {
    string: _extends({}, _shared2.default),
    number: _extends({}, _shared2.default, _number2.default),
    boolean: _extends({}, _shared2.default, _boolean2.default),
    array: _extends({}, _shared2.default, _array2.default),
    object: _extends({}, _shared2.default, _object2.default)
  };

  return (0, _fp.get)(type, _shared2.default)(values);
};

var getActionsDataSet = exports.getActionsDataSet = function getActionsDataSet(_ref) {
  var type = _ref.type,
      reducerPath = _ref.reducerPath,
      name = _ref.name,
      defaultValue = _ref.defaultValue;

  var actions = getActionHandlersByType(type);
  return (0, _fp.mapValues)(function (actionHandler) {
    return actionHandler({
      type: type,
      reducerPath: reducerPath,
      name: name,
      defaultValue: defaultValue
    });
  })(actions);
};

var getActionCreatorSet = exports.getActionCreatorSet = (0, _fp.mapValues)('actionCreator');
var getActionTypeSet = exports.getActionTypeSet = (0, _fp.mapValues)('actionType');
var getReducerHandlerSet = exports.getReducerHandlerSet = (0, _fp.mapValues)('reducerHandler');
var combineReducerHanlders = exports.combineReducerHanlders = (0, _fp.reduce)(function (result, value) {
  return _extends({}, result, value);
}, {});

exports.default = getActionsDataSet;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fp = __webpack_require__(0);

var getDefaultValueByType = function getDefaultValueByType(type) {
  var values = {
    string: '',
    number: 0,
    boolean: false,
    array: [],
    object: {}
  };

  return (0, _fp.get)(type, '')(values);
};

exports.default = getDefaultValueByType;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

var _getType = __webpack_require__(2);

var _getType2 = _interopRequireDefault(_getType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionTypePrefix = 'FILTER_ITEM_IN_ARRAY';
  var actionType = reducerPath + '/' + actionTypePrefix + '_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    var condition = (0, _fp.get)('payload')(action);
    var conditionType = (0, _getType2.default)(condition);
    if (conditionType === 'object') {
      return (0, _fp.filter)((0, _fp.matches)(condition))(state);
    }
    console.warn('You may not need to use filter');
    console.warn('Just recommend to use filter with array of object');
    return state;
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _push = __webpack_require__(9);

var _push2 = _interopRequireDefault(_push);

var _pushToFirst = __webpack_require__(10);

var _pushToFirst2 = _interopRequireDefault(_pushToFirst);

var _filter = __webpack_require__(7);

var _filter2 = _interopRequireDefault(_filter);

var _remove = __webpack_require__(11);

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  push: _push2.default,
  pushToFirst: _pushToFirst2.default,
  filter: _filter2.default,
  remove: _remove2.default
};
module.exports = exports['default'];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionTypePrefix = 'PUSH';
  var actionType = reducerPath + '/' + actionTypePrefix + '_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    return [].concat(_toConsumableArray(state), [(0, _fp.get)('payload')(action)]);
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionTypePrefix = 'PUSH_TO_FIRST';
  var actionType = reducerPath + '/' + actionTypePrefix + '_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    return [(0, _fp.get)('payload')(action)].concat(_toConsumableArray(state));
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

var _getType = __webpack_require__(2);

var _getType2 = _interopRequireDefault(_getType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionTypePrefix = 'REMOVE_ITEM_IN_ARRAY';
  var actionType = reducerPath + '/' + actionTypePrefix + '_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    var condition = (0, _fp.get)('payload')(action);
    var conditionType = (0, _getType2.default)(condition);
    if (conditionType === 'object') {
      return (0, _fp.filter)(function (item) {
        return !(0, _fp.matches)(condition)(item);
      })(state);
    }
    if (conditionType === 'array') {
      return _fp.without.apply(undefined, _toConsumableArray(condition))(state);
    }
    return (0, _fp.without)(condition)(state);
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toggle = __webpack_require__(13);

var _toggle2 = _interopRequireDefault(_toggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  toggle: _toggle2.default
};
module.exports = exports['default'];

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionType = reducerPath + '/TOGGLE_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function (state) {
    return !state;
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// import get from 'lodash/get';


exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionType = reducerPath + '/DECREASE_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function (state, action) {
    return state - (0, _fp.get)('payload', 1)(action);
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionType = reducerPath + '/INCREASE_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function (state, action) {
    return state + (0, _fp.get)('payload', 1)(action);
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _increase = __webpack_require__(15);

var _increase2 = _interopRequireDefault(_increase);

var _decrease = __webpack_require__(14);

var _decrease2 = _interopRequireDefault(_decrease);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  increase: _increase2.default,
  decrease: _decrease2.default
};
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import get from 'lodash/get';


var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

var _getType = __webpack_require__(2);

var _getType2 = _interopRequireDefault(_getType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionTypePrefix = 'ASSIGN';
  var actionType = reducerPath + '/' + actionTypePrefix + '_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var value = (0, _fp.get)('payload', {})(action);
    var valueType = (0, _getType2.default)(value);

    if (valueType !== 'object') {
      console.warn('Expected valueType: object. You can not use assign with type ' + valueType);
      return state;
    }

    return _extends({}, state, value);
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(17);

var _assign2 = _interopRequireDefault(_assign);

var _omit = __webpack_require__(19);

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  assign: _assign2.default,
  omit: _omit2.default
};
module.exports = exports['default'];

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

var _getType = __webpack_require__(2);

var _getType2 = _interopRequireDefault(_getType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function (_ref) {
  var reducerPath = _ref.reducerPath,
      name = _ref.name;

  var actionTypePrefix = 'OMIT';
  var actionType = reducerPath + '/' + actionTypePrefix + '_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    var value = (0, _fp.get)('payload', {})(action);
    var valueType = (0, _getType2.default)(value);

    if (valueType !== 'array' && valueType !== 'string') {
      console.warn('Expected valueType: array of string or string. You can not use omit with type ' + valueType);
      return state;
    }

    return (0, _fp.omit)(value)(state);
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _set = __webpack_require__(21);

var _set2 = _interopRequireDefault(_set);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  set: _set2.default
};
module.exports = exports['default'];

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = __webpack_require__(1);

var _fp = __webpack_require__(0);

var _getType = __webpack_require__(2);

var _getType2 = _interopRequireDefault(_getType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// import get from 'lodash/get';


exports.default = function (_ref) {
  var type = _ref.type,
      reducerPath = _ref.reducerPath,
      name = _ref.name,
      defaultValue = _ref.defaultValue;

  var actionType = reducerPath + '/SET_' + name;
  var actionCreator = (0, _reduxActions.createAction)(actionType);
  var reducerHandler = _defineProperty({}, actionType, function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultValue;
    var action = arguments[1];

    var value = (0, _fp.get)('payload', defaultValue)(action);
    var valueType = (0, _getType2.default)(value);
    if (type !== valueType) {
      console.warn('Expected type: ' + type + ', but you pass ' + valueType + ' type. So it wont change value');
      return state;
    }
    return value;
  });

  return {
    actionType: actionType,
    actionCreator: actionCreator,
    reducerHandler: reducerHandler
  };
};

module.exports = exports['default'];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = __webpack_require__(5);

var _reduxActions = __webpack_require__(1);

var _reselect = __webpack_require__(6);

var _fp = __webpack_require__(0);

var _defaultValues = __webpack_require__(4);

var _defaultValues2 = _interopRequireDefault(_defaultValues);

var _actions = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getOption = function getOption(nameValue) {
  if ((0, _fp.isObject)(nameValue)) {
    return nameValue;
  }
  return {
    type: nameValue
  };
};

var makeStateAction = function makeStateAction(_ref) {
  var reducerPath = _ref.reducerPath,
      names = _ref.names;

  var domainSelector = function domainSelector(state) {
    return (0, _fp.get)(reducerPath)(state);
  };
  var results = (0, _fp.reduce)(function (result, nameValue, name) {
    var option = getOption(nameValue);

    var type = (0, _fp.get)('type', 'string')(option);
    var defaultValue = (0, _fp.get)('defaultValue', (0, _defaultValues2.default)(type))(option);
    var reducerHandlers = (0, _fp.get)('reducerHandlers', {})(option);

    var actionsDataSet = (0, _actions.getActionsDataSet)({
      name: name,
      type: type,
      reducerPath: reducerPath,
      defaultValue: defaultValue
    });

    var actionCreatorSet = (0, _actions.getActionCreatorSet)(actionsDataSet);
    var actionTypeSet = (0, _actions.getActionTypeSet)(actionsDataSet);
    var reducerHandlerSet = (0, _actions.getReducerHandlerSet)(actionsDataSet);

    var typeReducerHandlers = (0, _actions.combineReducerHanlders)(reducerHandlerSet);

    var reducer = (0, _reduxActions.handleActions)(_extends({}, typeReducerHandlers, reducerHandlers), defaultValue);

    var selector = (0, _reselect.createSelector)(domainSelector, function (domain) {
      return (0, _fp.get)('' + name)(domain);
    });

    var reducers = _extends({}, result.reducers, _defineProperty({}, name, reducer));

    var actionTypes = _extends({}, result.actionTypes, _defineProperty({}, name, actionTypeSet));

    var actionCreators = _extends({}, result.actionCreators, _defineProperty({}, name, actionCreatorSet));

    var selectors = _extends({}, result.selectors, _defineProperty({}, name, selector));

    return {
      reducers: reducers,
      actionTypes: actionTypes,
      actionCreators: actionCreators,
      selectors: selectors
    };
  }, {
    reducers: {},
    actionTypes: {},
    actionCreators: {},
    selectors: {}
  })(names);

  var actionTypeFactory = function actionTypeFactory(varName) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set';

    var actionTypesSet = (0, _fp.get)(varName)(results.actionTypes);
    if (actionTypesSet === undefined) {
      console.warn('Cannot find actionType for', varName, '. Please check your code');
      return undefined;
    }
    var actionType = (0, _fp.get)(type)(actionTypesSet);
    if (actionType === undefined) {
      var supportedTypes = (0, _fp.join)(', ', (0, _fp.keys)(actionTypesSet));
      console.warn('actionTypes type for ' + reducerPath + '.' + varName + ' is just support:', supportedTypes);
      return undefined;
    }
    return actionType;
  };

  var actionCreatorFactory = function actionCreatorFactory(varName) {
    var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'set';

    var actionCreatorsSet = (0, _fp.get)(varName)(results.actionCreators);
    if (actionCreatorsSet === undefined) {
      console.warn('Cannot find actionCreator for', varName, '. Please check your code');
      return undefined;
    }
    var actionCreator = (0, _fp.get)(type)(actionCreatorsSet);
    if (actionCreator === undefined) {
      var supportedTypes = (0, _fp.join)(', ', (0, _fp.keys)(actionCreatorsSet));
      console.warn('actionCreator type for ' + reducerPath + '.' + varName + ' is just support:', supportedTypes);
      return undefined;
    }
    return actionCreator;
  };

  var selectorFactory = function selectorFactory(varName) {
    var selector = (0, _fp.get)(varName)(results.selectors);
    if (selector === undefined) {
      console.warn('Cannot find selector for', varName, '. Please check your code');
      return undefined;
    }
    return selector;
  };

  var branch = _defineProperty({}, reducerPath, (0, _redux.combineReducers)(_extends({}, results.reducers)));

  return {
    reducers: results.reducers,
    branch: branch,
    actionTypeFactory: actionTypeFactory,
    actionCreatorFactory: actionCreatorFactory,
    selectorFactory: selectorFactory
  };
};

exports.default = makeStateAction;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map