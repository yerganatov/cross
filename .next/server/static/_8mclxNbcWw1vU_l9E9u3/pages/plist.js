module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 43);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return withI18next; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_i18next__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_2__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var withI18next = function withI18next() {
  var namespaces = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['common'];
  return function (ComposedComponent) {
    var Extended = Object(react_i18next__WEBPACK_IMPORTED_MODULE_1__["translate"])(namespaces, {
      wait: false
    })(ComposedComponent);

    Extended.getInitialProps =
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var composedInitialProps, i18nInitialProps;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!ComposedComponent.getInitialProps) {
                  _context.next = 6;
                  break;
                }

                _context.next = 3;
                return ComposedComponent.getInitialProps(ctx);

              case 3:
                _context.t0 = _context.sent;
                _context.next = 7;
                break;

              case 6:
                _context.t0 = {};

              case 7:
                composedInitialProps = _context.t0;
                i18nInitialProps = ctx.req ? _i18n__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx.req, namespaces) : {};
                return _context.abrupt("return", _objectSpread({}, composedInitialProps, i18nInitialProps));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();

    return Extended;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./common/Header/Header.scss
var Header_Header = __webpack_require__(15);

// EXTERNAL MODULE: ./lib/withI18next.js
var withI18next = __webpack_require__(2);

// CONCATENATED MODULE: ./common/Header/index.jsx
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var common_Header_Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "hrefClicked", function () {
      var clicked = _this.state.clicked;
      _this.navInput.current.checked = !_this.navInput.current.checked;
      setTimeout(function () {
        _this.setState({
          clicked: !clicked
        });
      }, 300);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "navClicked", function () {
      var clicked = _this.state.clicked;

      _this.setState({
        clicked: !clicked
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeLanguage", function (lng) {
      var _this$props = _this.props,
          t = _this$props.t,
          i18n = _this$props.i18n;
      i18n.changeLanguage(lng);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeModalChangeLang", function (lng) {
      var toggleHeader = _this.props.toggleHeader;

      _this.changeLanguage(lng);

      toggleHeader();
    });

    _this.state = {
      clicked: false
    };
    _this.navInput = external_react_default.a.createRef();
    return _this;
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          t = _this$props2.t,
          i18n = _this$props2.i18n;
      var _this$props3 = this.props,
          bgColor = _this$props3.bgColor,
          textColor = _this$props3.textColor,
          toggleHeader = _this$props3.toggleHeader,
          opened = _this$props3.opened;
      var clicked = this.state.clicked;
      return external_react_default.a.createElement("div", {
        style: {
          backgroundColor: bgColor
        },
        className: "Header w-100"
      }, external_react_default.a.createElement("a", {
        href: "/",
        className: "d-md-block d-none"
      }, !opened && bgColor === "#000" ? external_react_default.a.createElement("img", {
        className: "logo",
        src: '../../static/logo-white.png',
        alt: ""
      }) : external_react_default.a.createElement("img", {
        className: "logo",
        src: '../../static/logo-black.png',
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "d-block d-md-none"
      }, external_react_default.a.createElement("a", {
        href: "/"
      }, external_react_default.a.createElement("img", {
        className: "logo-mobile",
        src: '/static/logo-mobile.png',
        alt: ""
      }))), external_react_default.a.createElement("input", {
        className: opened ? "opened" : "",
        ref: this.navInput,
        onClick: toggleHeader,
        id: "burger",
        type: "checkbox"
      }), external_react_default.a.createElement("label", {
        htmlFor: "burger"
      }, external_react_default.a.createElement("span", {
        style: {
          background: textColor
        }
      }), external_react_default.a.createElement("span", {
        style: {
          background: textColor
        }
      }), external_react_default.a.createElement("span", {
        style: {
          background: textColor
        }
      })), external_react_default.a.createElement("nav", {
        className: opened ? "opened" : ""
      }, external_react_default.a.createElement("div", {
        className: "nav-menu d-flex flex-md-row flex-column justify-content-md-between w-100"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-md-row flex-column"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-column mr-0 mr-md-5"
      }, external_react_default.a.createElement("a", {
        onClick: toggleHeader,
        style: {
          color: textColor
        },
        href: "/#services"
      }, t("navigation.services")), external_react_default.a.createElement("a", {
        onClick: toggleHeader,
        style: {
          color: textColor
        },
        href: "/#works"
      }, t("navigation.works")), external_react_default.a.createElement("a", {
        onClick: toggleHeader,
        style: {
          color: textColor
        },
        href: "/#catalog"
      }, t("navigation.catalogs"))), external_react_default.a.createElement("div", {
        className: "d-flex flex-column ml-0 ml-md-5"
      }, external_react_default.a.createElement("a", {
        onClick: toggleHeader,
        style: {
          color: textColor
        },
        href: "/"
      }, t("navigation.influensers")), external_react_default.a.createElement("a", {
        onClick: toggleHeader,
        style: {
          color: textColor
        },
        href: "/#team"
      }, t("navigation.team")), external_react_default.a.createElement("a", {
        onClick: toggleHeader,
        style: {
          color: textColor
        },
        href: "/#contact"
      }, t("navigation.contacts")))), external_react_default.a.createElement("hr", {
        className: "d-md-none d-block w-100 mt-5 mt-md-0"
      }), external_react_default.a.createElement("div", {
        className: "contacts-nav d-flex flex-column align-items-md-end"
      }, external_react_default.a.createElement("a", {
        style: {
          color: textColor
        }
      }, t("navigation.address")), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "tel:+77751534575"
      }, "+ 7 (775) 153-45-75"), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "mailto:contacts@press.kz"
      }, "contacts@press.kz"), external_react_default.a.createElement("div", {
        className: "d-flex"
      }, external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        onClick: function onClick() {
          return _this2.closeModalChangeLang("ru-RU");
        }
      }, "RU"), external_react_default.a.createElement("span", {
        className: "mx-2"
      }, " / "), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        onClick: function onClick() {
          return _this2.closeModalChangeLang("en");
        }
      }, "EN"), external_react_default.a.createElement("span", {
        className: "mx-2"
      }, " / "), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        onClick: function onClick() {
          return _this2.closeModalChangeLang("gr");
        }
      }, "GR"))))));
    }
  }]);

  return Header;
}(external_react_["Component"]);

/* harmony default export */ var common_Header = (Object(withI18next["a" /* withI18next */])("translation")(common_Header_Header));
// EXTERNAL MODULE: ./common/Footer/Footer.scss
var Footer_Footer = __webpack_require__(16);

// CONCATENATED MODULE: ./common/Footer/index.jsx
function Footer_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Footer_typeof = function _typeof(obj) { return typeof obj; }; } else { Footer_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Footer_typeof(obj); }

function Footer_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Footer_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Footer_createClass(Constructor, protoProps, staticProps) { if (protoProps) Footer_defineProperties(Constructor.prototype, protoProps); if (staticProps) Footer_defineProperties(Constructor, staticProps); return Constructor; }

function Footer_possibleConstructorReturn(self, call) { if (call && (Footer_typeof(call) === "object" || typeof call === "function")) { return call; } return Footer_assertThisInitialized(self); }

function Footer_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Footer_getPrototypeOf(o) { Footer_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Footer_getPrototypeOf(o); }

function Footer_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Footer_setPrototypeOf(subClass, superClass); }

function Footer_setPrototypeOf(o, p) { Footer_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Footer_setPrototypeOf(o, p); }





var common_Footer_Footer =
/*#__PURE__*/
function (_Component) {
  Footer_inherits(Footer, _Component);

  function Footer() {
    Footer_classCallCheck(this, Footer);

    return Footer_possibleConstructorReturn(this, Footer_getPrototypeOf(Footer).apply(this, arguments));
  }

  Footer_createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bgColor = _this$props.bgColor,
          textColor = _this$props.textColor;
      var _this$props2 = this.props,
          t = _this$props2.t,
          i18n = _this$props2.i18n;
      return external_react_default.a.createElement("div", {
        style: {
          backgroundColor: bgColor
        },
        className: "Footer d-flex flex-md-row flex-column justify-content-md-between w-100"
      }, external_react_default.a.createElement("hr", {
        style: {
          borderColor: textColor === "#000" ? "rgba(0,0,0,0.15)" : "#707070"
        }
      }), external_react_default.a.createElement("div", {
        className: "d-flex flex-md-row flex-column"
      }, external_react_default.a.createElement("div", {
        className: "d-flex mr-0 mr-md-5"
      }, bgColor === "#000" ? external_react_default.a.createElement("img", {
        className: "logo",
        src: '/static/logo-white.png',
        alt: ""
      }) : external_react_default.a.createElement("img", {
        className: "logo",
        src: '/static/logo-black.png',
        alt: ""
      })), external_react_default.a.createElement("div", {
        className: "d-flex justify-content-between justify-content-md-start mt-4 mt-md-0"
      }, external_react_default.a.createElement("div", {
        className: "d-flex flex-column mr-5 ml-0 ml-md-5"
      }, external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#services"
      }, t("navigation.services")), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#works"
      }, t("navigation.works")), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#catalog"
      }, t("navigation.catalogs"))), external_react_default.a.createElement("div", {
        className: "d-flex flex-column ml-0 ml-md-5"
      }, external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: ""
      }, t("navigation.influensers")), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#team"
      }, t("navigation.team")), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#contact"
      }, t("navigation.contacts"))))), external_react_default.a.createElement("div", {
        className: "contacts-nav d-flex flex-column align-items-md-end mt-4 mt-md-0"
      }, external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: ""
      }, t("navigation.address")), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "tel:+77751534575"
      }, "+ 7 (775) 153-45-75"), external_react_default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "mailto:contacts@press.kz"
      }, "contacts@press.kz")));
    }
  }]);

  return Footer;
}(external_react_["Component"]);

/* harmony default export */ var common_Footer = (Object(withI18next["a" /* withI18next */])("translation")(common_Footer_Footer));
// EXTERNAL MODULE: ./common/ProjectCard/ProjectCard.scss
var ProjectCard_ProjectCard = __webpack_require__(17);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(8);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./common/ProjectCard/index.jsx
function ProjectCard_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { ProjectCard_typeof = function _typeof(obj) { return typeof obj; }; } else { ProjectCard_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return ProjectCard_typeof(obj); }

function ProjectCard_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function ProjectCard_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function ProjectCard_createClass(Constructor, protoProps, staticProps) { if (protoProps) ProjectCard_defineProperties(Constructor.prototype, protoProps); if (staticProps) ProjectCard_defineProperties(Constructor, staticProps); return Constructor; }

function ProjectCard_possibleConstructorReturn(self, call) { if (call && (ProjectCard_typeof(call) === "object" || typeof call === "function")) { return call; } return ProjectCard_assertThisInitialized(self); }

function ProjectCard_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function ProjectCard_getPrototypeOf(o) { ProjectCard_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ProjectCard_getPrototypeOf(o); }

function ProjectCard_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) ProjectCard_setPrototypeOf(subClass, superClass); }

function ProjectCard_setPrototypeOf(o, p) { ProjectCard_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ProjectCard_setPrototypeOf(o, p); }





var common_ProjectCard_ProjectCard =
/*#__PURE__*/
function (_Component) {
  ProjectCard_inherits(ProjectCard, _Component);

  function ProjectCard(props) {
    var _this;

    ProjectCard_classCallCheck(this, ProjectCard);

    _this = ProjectCard_possibleConstructorReturn(this, ProjectCard_getPrototypeOf(ProjectCard).call(this, props));
    _this.state = {
      clicked: false
    };
    return _this;
  }

  ProjectCard_createClass(ProjectCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          id = _this$props.id,
          image = _this$props.image;
      return external_react_default.a.createElement(link_default.a, {
        href: "/detailedproject?id=" + id,
        as: "/detailedproject/" + id
      }, external_react_default.a.createElement("a", null, external_react_default.a.createElement("div", {
        className: "ProjectCard"
      }, external_react_default.a.createElement("div", {
        className: "hover-info p-4"
      }, external_react_default.a.createElement("p", {
        className: "p-4"
      }, item.title), external_react_default.a.createElement("img", {
        src: '/static/card-ornament.png',
        alt: ""
      })), external_react_default.a.createElement("img", {
        className: "image-project",
        src: image,
        alt: ""
      }))));
    }
  }]);

  return ProjectCard;
}(external_react_["Component"]);

/* harmony default export */ var common_ProjectCard = (common_ProjectCard_ProjectCard);
// EXTERNAL MODULE: ./common/CatalogItem/Catalogitem.scss
var Catalogitem = __webpack_require__(18);

// EXTERNAL MODULE: ./common/MainButton/MainButton.scss
var MainButton_MainButton = __webpack_require__(19);

// CONCATENATED MODULE: ./common/MainButton/index.jsx



var common_MainButton_MainButton = function MainButton(props) {
  var title = props.title,
      onClick = props.onClick;
  return external_react_default.a.createElement("a", {
    onClick: onClick,
    className: "MainButton  d-flex align-items-center justify-content-center"
  }, external_react_default.a.createElement("p", {
    className: "m-0"
  }, title));
};

/* harmony default export */ var common_MainButton = (common_MainButton_MainButton);
// EXTERNAL MODULE: ./api/firebase.js
var firebase = __webpack_require__(5);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(9);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// EXTERNAL MODULE: external "moment/locale/ru"
var ru_ = __webpack_require__(20);

// EXTERNAL MODULE: external "moment/locale/en-gb"
var en_gb_ = __webpack_require__(21);

// EXTERNAL MODULE: external "moment/locale/de"
var de_ = __webpack_require__(22);

// CONCATENATED MODULE: ./common/CatalogItem/index.jsx










var CatalogItem_CatalogItem = function CatalogItem(props) {
  var t = props.t,
      image = props.image,
      item = props.item,
      id = props.id,
      date = props.date,
      onPress = props.onPress;
  return external_react_default.a.createElement("div", {
    className: "CatalogItem w-100 d-flex flex-column "
  }, external_react_default.a.createElement("a", {
    href: "/detailedcatalog/" + id
  }, external_react_default.a.createElement("img", {
    src: image,
    alt: ""
  }), external_react_default.a.createElement("h3", {
    className: "title text-left"
  }, item.title), external_react_default.a.createElement("p", {
    className: "date text-left"
  }, external_react_default.a.createElement("span", {
    className: "d-none d-md-inline"
  }, t("date")), external_moment_default()(date, "YYYY-MM-DD", t("localeLang")).format("DD MMMM YYYY"))), external_react_default.a.createElement(common_MainButton, {
    onClick: onPress,
    title: t("formModal.button")
  }));
};

/* harmony default export */ var common_CatalogItem = (Object(withI18next["a" /* withI18next */])('translation')(CatalogItem_CatalogItem));
// EXTERNAL MODULE: ./common/OrderModal/OrderModal.scss
var OrderModal_OrderModal = __webpack_require__(23);

// EXTERNAL MODULE: external "emailjs-com"
var external_emailjs_com_ = __webpack_require__(10);

// CONCATENATED MODULE: ./common/OrderModal/index.jsx
function OrderModal_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { OrderModal_typeof = function _typeof(obj) { return typeof obj; }; } else { OrderModal_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return OrderModal_typeof(obj); }

function OrderModal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function OrderModal_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function OrderModal_createClass(Constructor, protoProps, staticProps) { if (protoProps) OrderModal_defineProperties(Constructor.prototype, protoProps); if (staticProps) OrderModal_defineProperties(Constructor, staticProps); return Constructor; }

function OrderModal_possibleConstructorReturn(self, call) { if (call && (OrderModal_typeof(call) === "object" || typeof call === "function")) { return call; } return OrderModal_assertThisInitialized(self); }

function OrderModal_getPrototypeOf(o) { OrderModal_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return OrderModal_getPrototypeOf(o); }

function OrderModal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) OrderModal_setPrototypeOf(subClass, superClass); }

function OrderModal_setPrototypeOf(o, p) { OrderModal_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return OrderModal_setPrototypeOf(o, p); }

function OrderModal_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function OrderModal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var common_OrderModal_OrderModal =
/*#__PURE__*/
function (_Component) {
  OrderModal_inherits(OrderModal, _Component);

  function OrderModal() {
    var _getPrototypeOf2;

    var _this;

    OrderModal_classCallCheck(this, OrderModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = OrderModal_possibleConstructorReturn(this, (_getPrototypeOf2 = OrderModal_getPrototypeOf(OrderModal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    OrderModal_defineProperty(OrderModal_assertThisInitialized(OrderModal_assertThisInitialized(_this)), "state", {
      phone: "",
      name: ""
    });

    OrderModal_defineProperty(OrderModal_assertThisInitialized(OrderModal_assertThisInitialized(_this)), "sendMessage", function () {
      var closeModal = _this.props.closeModal;

      if (!_this.state.name | _this.state.name.length < 1) {
        alert("Заполните все поля");
      }

      var templateParams = {
        from_name: _this.state.name,
        to_name: "fiery.fox92@gmail.com",
        phone_number: _this.state.phone
      };
      external_emailjs_com_["send"]("gmail", "template_Ea8KvF1V", templateParams, "user_Bpwt8Y7KRuVLrNCWvTvyp").then(function (response) {
        _this.setState({
          name: "",
          phone: ""
        });

        closeModal();
      });
    });

    return _this;
  }

  OrderModal_createClass(OrderModal, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          i18n = _this$props.i18n;
      var closeModal = this.props.closeModal;
      return external_react_default.a.createElement("div", {
        className: "OrderModal d-flex align-items-center justify-content-center"
      }, external_react_default.a.createElement("div", {
        className: "modal-view d-flex flex-column px-5 py-3 pb-5"
      }, external_react_default.a.createElement("div", {
        className: "close-modal w-100",
        onClick: closeModal
      }, "\u2715"), external_react_default.a.createElement("p", null, t("formModal.typeInformation")), external_react_default.a.createElement("input", {
        className: "mb-4",
        type: "text",
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            name: e.target.value
          });
        },
        value: this.state.name,
        maxLength: "32",
        placeholder: t("formModal.name")
      }), external_react_default.a.createElement("input", {
        className: "mb-4",
        type: "phone",
        required: true,
        onChange: function onChange(e) {
          return _this2.setState({
            phone: e.target.value
          });
        },
        value: this.state.phone,
        placeholder: t("formModal.phone")
      }), external_react_default.a.createElement("button", {
        onClick: this.sendMessage,
        className: "text-md-center text-left"
      }, t("formModal.button"))));
    }
  }]);

  return OrderModal;
}(external_react_["Component"]);

/* harmony default export */ var common_OrderModal = (Object(withI18next["a" /* withI18next */])('translation')(common_OrderModal_OrderModal));
// EXTERNAL MODULE: ./common/Preloader/Preloader.scss
var Preloader = __webpack_require__(24);

// CONCATENATED MODULE: ./common/Preloader/index.jsx



var Preloader_OrderModal = function OrderModal(props) {
  return external_react_default.a.createElement("div", {
    className: "preloader"
  }, external_react_default.a.createElement("div", {
    className: "loader"
  }));
};

/* harmony default export */ var common_Preloader = (Preloader_OrderModal);
// CONCATENATED MODULE: ./common/index.js
/* concated harmony reexport Header */__webpack_require__.d(__webpack_exports__, "c", function() { return common_Header; });
/* concated harmony reexport Footer */__webpack_require__.d(__webpack_exports__, "b", function() { return common_Footer; });
/* concated harmony reexport CatalogItem */__webpack_require__.d(__webpack_exports__, "a", function() { return common_CatalogItem; });
/* concated harmony reexport ProjectCard */__webpack_require__.d(__webpack_exports__, "g", function() { return common_ProjectCard; });
/* concated harmony reexport OrderModal */__webpack_require__.d(__webpack_exports__, "e", function() { return common_OrderModal; });
/* concated harmony reexport Preloader */__webpack_require__.d(__webpack_exports__, "f", function() { return common_Preloader; });
/* concated harmony reexport MainButton */__webpack_require__.d(__webpack_exports__, "d", function() { return common_MainButton; });









/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("firebase");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
// try {
//     const firebaseApp = firebase.initializeApp(config);
//     const db = firebaseApp.firestore();
//     const auth = firebaseApp.auth();
//     const store = firebaseApp.storage();
//
//
//     const storageKey = 'KEY_FOR_LOCAL_STORAGE';
//
//     const isAuthenticated = () => {
//         return !!localStorage.getItem(storageKey);
//     };
//
//
// } catch (err) {
// // we skip the "already exists" message which is
// // not an actual error when we're hot-reloading
//     if (!/already exists/.test(err.message)) {
//         console.error('Firebase initialization error', err.stack)
//     }
// }
// export { firebaseApp, db, auth, store, isAuthenticated, storageKey }

var config = {
  apiKey: "AIzaSyAonII9U84JT35rsar4u2mm_FPb_LUKNX0",
  authDomain: "cross-7bf89.firebaseapp.com",
  databaseURL: "https://cross-7bf89.firebaseio.com",
  projectId: "cross-7bf89",
  storageBucket: "cross-7bf89.appspot.com",
  messagingSenderId: "102677913217"
};
/* harmony default export */ __webpack_exports__["a"] = (!firebase__WEBPACK_IMPORTED_MODULE_0__["apps"].length ? firebase__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](config) : firebase__WEBPACK_IMPORTED_MODULE_0__["app"]());

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-i18next");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var i18n = __webpack_require__(12);

var XHR = __webpack_require__(13);

var LanguageDetector = __webpack_require__(14);

var options = {
  fallbackLng: 'ru',
  load: 'languageOnly',
  // we only provide en, de -> no region specific locals like en-US, de-DE
  // have a common namespace used around the full app
  ns: ['translation'],
  defaultNS: 'translation',
  debug: false,
  // process.env.NODE_ENV !== 'production',
  saveMissing: true,
  interpolation: {
    escapeValue: false,
    // not needed for react!!
    formatSeparator: ',',
    format: function format(value, _format, lng) {
      if (_format === 'uppercase') return value.toUpperCase();
      return value;
    }
  } // for browser use xhr backend to load translations and browser lng detector

};

if (false) {} // initialize if not already initialized


if (!i18n.isInitialized) i18n.init(options); // a simple helper to getInitialProps passed on loaded i18n data

i18n.getInitialProps = function (req, namespaces) {
  if (!namespaces) namespaces = i18n.options.defaultNS;
  if (typeof namespaces === 'string') namespaces = [namespaces];

  req.i18n.toJSON = function () {
    return null;
  }; // do not serialize i18next instance and send to client


  var initialI18nStore = {};
  req.i18n.languages.forEach(function (l) {
    initialI18nStore[l] = {};
    namespaces.forEach(function (ns) {
      initialI18nStore[l][ns] = (req.i18n.services.resourceStore.data[l] || {})[ns] || {};
    });
  });
  return {
    i18n: req.i18n,
    // use the instance on req - fixed language on request (avoid issues in race conditions with lngs of different users)
    initialI18nStore: initialI18nStore,
    initialLanguage: req.i18n.language
  };
};

module.exports = i18n;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("emailjs-com");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("i18next");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("i18next-xhr-backend");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("i18next-browser-languagedetector");

/***/ }),
/* 15 */
/***/ (function(module, exports) {



/***/ }),
/* 16 */
/***/ (function(module, exports) {



/***/ }),
/* 17 */
/***/ (function(module, exports) {



/***/ }),
/* 18 */
/***/ (function(module, exports) {



/***/ }),
/* 19 */
/***/ (function(module, exports) {



/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("moment/locale/ru");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("moment/locale/en-gb");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("moment/locale/de");

/***/ }),
/* 23 */
/***/ (function(module, exports) {



/***/ }),
/* 24 */
/***/ (function(module, exports) {



/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(44);


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3);
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _ProjectList_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_ProjectList_scss__WEBPACK_IMPORTED_MODULE_6__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var db = _api_firebase__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].firestore();


var plist =
/*#__PURE__*/
function (_Component) {
  _inherits(plist, _Component);

  function plist() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, plist);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(plist)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      projects: [],
      loading: true,
      headerOpen: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchProjects",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var snapshots, problems;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.collection('projects').get();

            case 3:
              snapshots = _context.sent;
              problems = [];
              snapshots.forEach(function (s) {
                var data = s.data();
                data["id"] = s.id;
                problems.push(data);
              });
              _context.next = 8;
              return _this.setState({
                projects: problems.concat()
              });

            case 8:
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 10]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "closeHeader", function () {
      _this.setState({
        headerOpen: false
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggleHeader", function () {
      _this.setState({
        headerOpen: !_this.state.headerOpen
      });
    });

    return _this;
  }

  _createClass(plist, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetchProjects();

              case 2:
                this.setState({
                  loading: false
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          t = _this$props.t,
          i18n = _this$props.i18n,
          lng = _this$props.lng;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "ProjectList"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, t("titles.projectList")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "57x57",
        href: "/static/apple-icon-57x57.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "60x60",
        href: "/static/apple-icon-60x60.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "72x72",
        href: "/static/apple-icon-72x72.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "76x76",
        href: "/static/apple-icon-76x76.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "114x114",
        href: "/static/apple-icon-114x114.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "120x120",
        href: "/static/apple-icon-120x120.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "144x144",
        href: "/static/apple-icon-144x144.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "152x152",
        href: "/static/apple-icon-152x152.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/static/apple-icon-180x180.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        href: "/static/android-icon-192x192.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/static/favicon-32x32.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href: "/static/favicon-96x96.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/static/favicon-16x16.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "manifest",
        href: "/static/manifest.json"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "msapplication-TileColor",
        content: "#ffffff"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "msapplication-TileImage",
        content: "/ms-icon-144x144.png"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "theme-color",
        content: "#ffffff"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      })), this.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__[/* Preloader */ "f"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__[/* Header */ "c"], {
        opened: this.state.headerOpen,
        toggleHeader: this.toggleHeader,
        bgColor: "#000"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "info-project-list d-flex flex-column align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "text-md-center text-left"
      }, t("mainPage.ourWorks.subTitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "text-md-center text-left"
      }, t("mainPage.ourWorks.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row mx-0 mt-md-5 mb-md-4 mt-3 w-100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 d-flex mb-md-5 justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line pr-5"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "year-of-event mb-0 text-center"
      }, "2018 \u0433\u043E\u0434"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line pl-5"
      })), this.state.projects.map(function (item) {
        var data;

        switch (lng) {
          case "ru":
            {
              if (item.ru.title === "") {
                return;
              }

              data = item.ru;
              break;
            }

          case "en":
            {
              if (item.en.title === "") {
                return;
              }

              data = item.en;
              break;
            }

          case "ru-RU":
            {
              if (item.ru.title === "") {
                return;
              }

              data = item.ru;
              break;
            }

          case "en-US":
            {
              if (item.en.title === "") {
                return;
              }

              data = item.en;
              break;
            }

          case "gr":
            {
              if (item.gr.title === "") {
                return;
              }

              data = item.gr;
              break;
            }

          default:
            {
              break;
            }
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6 col-12 p-3"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__[/* ProjectCard */ "g"], {
          image: item.images[0],
          id: item.id,
          item: data
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__[/* Footer */ "b"], {
        bgColor: "#000"
      }));
    }
  }]);

  return plist;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_2__[/* withI18next */ "a"])('translation')(plist));

/***/ }),
/* 45 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);