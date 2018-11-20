webpackHotUpdate("static/development/pages/detailedproject.js",{

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
      }, "gr"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: function value() {
          return _this2.changeLanguage("gr");
        }
      }, "GR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: function value() {
          return _this2.changeLanguage("en");
        }
      }, "EN"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
        value: function value() {
          return _this2.changeLanguage("ru");
        }
      }, "RU")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_2__["withI18next"])("translation")(Header));

/***/ })

})
//# sourceMappingURL=detailedproject.js.33b8cfc62136634e166d.hot-update.js.map