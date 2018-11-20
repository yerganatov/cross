webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common/Footer/index.jsx":
/*!*********************************!*\
  !*** ./common/Footer/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.scss */ "./common/Footer/Footer.scss");
/* harmony import */ var _Footer_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Footer_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/withI18next */ "./lib/withI18next.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Footer =
/*#__PURE__*/
function (_Component) {
  _inherits(Footer, _Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bgColor = _this$props.bgColor,
          textColor = _this$props.textColor;
      var _this$props2 = this.props,
          t = _this$props2.t,
          i18n = _this$props2.i18n;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: bgColor
        },
        className: "Footer d-flex flex-md-row flex-column justify-content-md-between w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        style: {
          borderColor: textColor === "#000" ? "rgba(0,0,0,0.15)" : "#707070"
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-md-row flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex mr-0 mr-md-5"
      }, bgColor === "#000" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: '/static/logo-white.png',
        alt: ""
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: '/static/logo-black.png',
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex justify-content-between justify-content-md-start mt-4 mt-md-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-column mr-5 ml-0 ml-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#services"
      }, t("navigation.services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#works"
      }, t("navigation.works")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#catalog"
      }, t("navigation.catalogs"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-column ml-0 ml-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: ""
      }, t("navigation.influensers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#team"
      }, t("navigation.team")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "/#contact"
      }, t("navigation.contacts"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contacts-nav d-flex flex-column align-items-md-end mt-4 mt-md-0"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: ""
      }, t("navigation.address")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "tel:+77751534575"
      }, "+ 7 (775) 153-45-75"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "mailto:contacts@press.kz"
      }, "contacts@press.kz")));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_2__["withI18next"])("translation")(Footer));

/***/ }),

/***/ "./common/Header/index.jsx":
/*!*********************************!*\
  !*** ./common/Header/index.jsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.scss */ "./common/Header/Header.scss");
/* harmony import */ var _Header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/withI18next */ "./lib/withI18next.js");
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





var Header =
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
      setTimeout(function () {
        _this.setState({
          clicked: !clicked
        });
      }, 300);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "changeLanguage", function (lng) {
      var _this$props = _this.props,
          t = _this$props.t,
          i18n = _this$props.i18n;
      i18n.changeLanguage(lng);
    });

    _this.state = {
      clicked: false
    };
    _this.navInput = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
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
          textColor = _this$props3.textColor;
      var clicked = this.state.clicked;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          backgroundColor: bgColor
        },
        className: "Header w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/",
        className: "d-md-block d-none"
      }, !clicked && bgColor === "#000" ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: '../../static/logo-white.png',
        alt: ""
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo",
        src: '../../static/logo-black.png',
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-block d-md-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "logo-mobile",
        src: '/static/logo-mobile.png',
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        ref: this.navInput,
        onClick: this.navClicked,
        id: "burger",
        type: "checkbox"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        htmlFor: "burger"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          background: textColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          background: textColor
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        style: {
          background: textColor
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-menu d-flex flex-md-row flex-column justify-content-md-between w-100"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-md-row flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-column mr-0 mr-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.hrefClicked,
        style: {
          color: textColor
        },
        href: "/#services"
      }, t("navigation.services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.hrefClicked,
        style: {
          color: textColor
        },
        href: "/#works"
      }, t("navigation.works")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.hrefClicked,
        style: {
          color: textColor
        },
        href: "/#catalog"
      }, t("navigation.catalogs"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-flex flex-column ml-0 ml-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.hrefClicked,
        style: {
          color: textColor
        },
        href: "/"
      }, t("navigation.influensers")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.hrefClicked,
        style: {
          color: textColor
        },
        href: "/#team"
      }, t("navigation.team")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.hrefClicked,
        style: {
          color: textColor
        },
        href: "/#contact"
      }, t("navigation.contacts")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
        className: "d-md-none d-block w-100 mt-5 mt-md-0"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contacts-nav d-flex flex-column align-items-md-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        }
      }, t("navigation.address")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "tel:+77751534575"
      }, "+ 7 (775) 153-45-75"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        style: {
          color: textColor
        },
        href: "mailto:contacts@press.kz"
      }, "contacts@press.kz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.changeLanguage("gr");
        }
      }, "gr"))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_2__["withI18next"])("translation")(Header));

/***/ }),

/***/ "./common/ProjectCard/index.jsx":
/*!**************************************!*\
  !*** ./common/ProjectCard/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectCard_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectCard.scss */ "./common/ProjectCard/ProjectCard.scss");
/* harmony import */ var _ProjectCard_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ProjectCard_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var ProjectCard =
/*#__PURE__*/
function (_Component) {
  _inherits(ProjectCard, _Component);

  function ProjectCard(props) {
    var _this;

    _classCallCheck(this, ProjectCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ProjectCard).call(this, props));
    _this.state = {
      clicked: false
    };
    return _this;
  }

  _createClass(ProjectCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          item = _this$props.item,
          id = _this$props.id,
          image = _this$props.image;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/detailedproject?id=" + id,
        as: "/detailedproject/" + id
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ProjectCard"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "hover-info p-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "p-4"
      }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: '/static/card-ornament.png',
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "image-project",
        src: image,
        alt: ""
      }))));
    }
  }]);

  return ProjectCard;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ProjectCard);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/withI18next */ "./lib/withI18next.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./common/index.js");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/firebase */ "./api/firebase.js");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.scss */ "./pages/home.scss");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_scss__WEBPACK_IMPORTED_MODULE_5__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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





var db = _api_firebase__WEBPACK_IMPORTED_MODULE_4__["default"].firestore();


var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      projects: [],
      catalog: [],
      team: [],
      services: [],
      partners: [],
      createOrder: false,
      loading: true,
      lng: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchTeam",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var snapshots, problems, projects;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return db.collection('team').get();

            case 3:
              snapshots = _context.sent;
              problems = [];
              snapshots.forEach(function (s) {
                var data = s.data();
                problems.push(data);
              });
              projects = problems.slice(0, 4);
              projects.sort(function (a, b) {
                return a.id - b.id;
              });
              _context.next = 10;
              return _this.setState({
                team: _toConsumableArray(projects)
              });

            case 10:
              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](0);
              alert(_context.t0.message);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this, [[0, 12]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchProjects",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var snapshots, problems, projects;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return db.collection('projects').get();

            case 3:
              snapshots = _context2.sent;
              problems = [];
              snapshots.forEach(function (s) {
                var data = s.data();
                data["id"] = s.id;
                problems.push(data);
              });
              projects = problems.slice(0, 4);
              _context2.next = 9;
              return _this.setState({
                projects: _toConsumableArray(projects)
              });

            case 9:
              _context2.next = 14;
              break;

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](0);
              alert(_context2.t0.message);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchCatalog",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var snapshots, problems, projects;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return db.collection('catalog').get();

            case 3:
              snapshots = _context3.sent;
              problems = [];
              snapshots.forEach(function (s) {
                var data = s.data();
                data["id"] = s.id;
                problems.push(data);
              });
              projects = problems.slice(0, 4);
              _context3.next = 9;
              return _this.setState({
                catalog: _toConsumableArray(projects)
              });

            case 9:
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              alert(_context3.t0.message);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchServices",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var snapshots, problems, projects;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return db.collection('services').get();

            case 3:
              snapshots = _context4.sent;
              problems = [];
              snapshots.forEach(function (s) {
                var data = s.data();
                data["id"] = s.id;
                problems.push(data);
              });
              projects = problems.slice(0, 6);
              _context4.next = 9;
              return _this.setState({
                services: _toConsumableArray(projects)
              });

            case 9:
              _context4.next = 14;
              break;

            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](0);
              alert(_context4.t0.message);

            case 14:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "fetchPartners",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
      var snapshots, problems, projects;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return db.collection('partners').get();

            case 3:
              snapshots = _context5.sent;
              problems = [];
              snapshots.forEach(function (s) {
                var data = s.data();
                data["id"] = s.id;
                problems.push(data);
              });
              projects = problems.slice(0, 6);
              _context5.next = 9;
              return _this.setState({
                partners: _toConsumableArray(projects)
              });

            case 9:
              _context5.next = 14;
              break;

            case 11:
              _context5.prev = 11;
              _context5.t0 = _context5["catch"](0);
              alert(_context5.t0.message);

            case 14:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this, [[0, 11]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createOrder", function () {
      _this.setState({
        createOrder: !_this.state.createOrder
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "isActive", function () {
      return "modalViewWrap " + (_this.state.createOrder === true ? "opened" : "");
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var lng;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                lng = this.props.lng;
                this.fetchCatalog();
                this.fetchTeam();
                this.fetchServices();
                this.fetchPartners();
                _context6.next = 7;
                return this.fetchProjects();

              case 7:
                console.log(this.props);
                this.setState({
                  loading: false,
                  lng: lng
                });

              case 9:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          t = _this$props.t,
          i18n = _this$props.i18n,
          lng = _this$props.lng;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "Home d-flex flex-column"
      }, this.state.loading && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Preloader"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "lines-cover row mx-0 d-none d-md-flex"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-3"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-6 d-flex justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "line"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-3"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        bgColor: "#000"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: this.isActive()
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["OrderModal"], {
        closeModal: this.createOrder
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "landing d-flex flex-column w-100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "main-card-info d-flex row m-0 align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-0 col-md-3 p-0 m-0"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "middle-card col-md-6 col-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: '/static/main-card.png',
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, t("mainPage.firstPart.companyName"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t("mainPage.firstPart.companyNameSub")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 col-md-3 mx-0 mt-4 mt-md-0"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t("mainPage.firstPart.companyInfo.first"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), t("mainPage.firstPart.companyInfo.second"), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), t("mainPage.firstPart.companyInfo.third")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "our-mission d-flex align-items-center row mx-0 w-100"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "d-none d-md-block text-center"
      }, t("mainPage.ourMission.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-0 col-md-2"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-7 col-12 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "d-none d-md-block mr-4",
        src: process.env.PUBLIC_URL + '/static/logo-mobile.png',
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, t("mainPage.ourMission.description")), t("mainPage.ourMission.descriptionInside"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-0 col-md-3"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
        id: "services",
        style: {
          paddingTop: "-10rem"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "our-services d-flex"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "white-box d-flex flex-column p-2 p-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "mb-5"
      }, t("mainPage.ourServices.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "services row mx-0"
      }, this.state.services.map(function (item) {
        var data;

        switch (lng) {
          case "ru-RU":
            {
              data = item.ru;
              break;
            }

          case "en":
            {
              data = item.ru;
              break;
            }

          case "gr":
            {
              data = item.gr;
              break;
            }

          default:
            {
              break;
            }
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-12 col-md-4 p-0 pr-4 mb-4 mb-md-5"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, data.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "mb-0"
        }, data.description));
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, t("mainPage.ourServices.subTitle"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "d-none d-md-block",
        src: '../static/main-our-services.jpg',
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "our-partners d-flex flex-column align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, t("mainPage.ourPartners.subTitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, t("mainPage.ourPartners.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row mx-0 w-100 justify-content-md-center align-items-center"
      }, this.state.partners.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: item.image,
          alt: ""
        });
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "works",
        style: {
          paddingTop: "-10rem"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "our-works d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, t("mainPage.ourWorks.subTitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "d-flex flex-md-row w-100 mx-0 justify-content-between align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-3 d-md-block d-none"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "col-md-6 col-9 text-md-center "
      }, t("mainPage.ourWorks.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "col-md-3 d-md-block d-none text-right",
        href: "/ProjectList"
      }, t("mainPage.ourWorks.seeMore"), "\u2192"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "d-md-none mr-3",
        href: "/ProjectList"
      }, t("mainPage.ourWorks.seeMoreMobile"), "\u2192")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row d-flex justify-content-between mx-0 mt-4"
      }, this.state.projects.map(function (item) {
        var data;

        switch (lng) {
          case "ru-RU":
            {
              data = item.ru;
              break;
            }

          case "en":
            {
              data = item.ru;
              break;
            }

          case "gr":
            {
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
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["ProjectCard"], {
          image: item.images[0],
          id: item.id,
          item: data
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "catalog",
        style: {
          paddingTop: "-10rem"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "our-catalog d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, t("mainPage.ourCatalog.subTitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "desktop-view d-md-flex d-none flex-column mb-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "text-center"
      }, t("mainPage.ourCatalog.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row align-items-end"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-3"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "description col-md-6 text-center"
      }, t("mainPage.ourCatalog.description")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/catalog",
        className: "col-md-3 text-right"
      }, t("mainPage.ourCatalog.seeMore"), "\u2192"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "mobile-view d-flex my-3 d-md-none align-items-center justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "mb-0"
      }, "\u041A\u0430\u0442\u0430\u043B\u043E\u0433"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "/catalog",
        className: "text-right mb-0"
      }, t("mainPage.ourCatalog.seeMoreMobile"), "\u2192")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, this.state.catalog.map(function (item) {
        var data;

        switch (_this2.props.lng) {
          case "ru-RU":
            {
              data = item.ru;
              break;
            }

          case "en":
            {
              data = item.ru;
              break;
            }

          case "gr":
            {
              data = item.gr;
              break;
            }

          default:
            {
              break;
            }
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-3 col-6"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["CatalogItem"], {
          image: item.image,
          onPress: _this2.createOrder,
          id: item.id,
          item: data,
          date: item.date
        }));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "team",
        style: {
          paddingTop: "-10rem"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "our-team d-flex flex-column align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, t("mainPage.ourTeam.subTitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "logo-image mb-3",
        src: '/static/logo-mobile.png',
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, t("mainPage.ourTeam.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row mx-0 w-100 mt-5"
      }, this.state.team.map(function (item) {
        var data;

        switch (lng) {
          case "ru-RU":
            {
              data = item.ru;
              break;
            }

          case "en":
            {
              data = item.ru;
              break;
            }

          case "gr":
            {
              data = item.gr;
              break;
            }

          default:
            {
              break;
            }
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-12 col-md-3 align-items-center d-flex flex-column mb-5 mb-md-0"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: item.image,
          alt: ""
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, data.name), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, data.workType), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "tel:" + data.phone
        }, data.phone), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "mailto:" + data.email
        }, data.email));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "contact",
        style: {
          paddingTop: "-10rem"
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "contact-us d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", null, t("mainPage.ourContacts.subTitle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, t("mainPage.ourContacts.title")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row mx-0 mt-2 mt-md-5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-4 col-12 mb-3 d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, t("mainPage.ourContacts.description")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        className: "d-flex flex-column",
        action: ""
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "mb-4",
        type: "text",
        maxLength: "32",
        placeholder: t("mainPage.ourContacts.placeholderName")
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        className: "mb-4",
        type: "phone",
        placeholder: t("mainPage.ourContacts.placeholderPhone")
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "text-md-center text-left"
      }, t("mainPage.ourContacts.button")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-1 col-12"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-5 col-12"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "mailto:contacts@press.kz"
      }, "contacts@press.kz")), ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "tel:+77751534575"
      }, "+ 7 (775) 153-45-75")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), " ", t("mainPage.ourContacts.address")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "map"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-2 col-12"
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
        bgColor: "#000"
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_2__["withI18next"])(["translation"])(Index));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.5f6965194a7059fd0399.hot-update.js.map