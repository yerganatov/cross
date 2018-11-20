webpackHotUpdate("static/development/pages/index.js",{

/***/ "./common/CatalogItem/index.jsx":
/*!**************************************!*\
  !*** ./common/CatalogItem/index.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Catalogitem_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Catalogitem.scss */ "./common/CatalogItem/Catalogitem.scss");
/* harmony import */ var _Catalogitem_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Catalogitem_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MainButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../MainButton */ "./common/MainButton/index.jsx");
/* harmony import */ var _lib_withI18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/withI18next */ "./lib/withI18next.js");
/* harmony import */ var _api_firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api/firebase */ "./api/firebase.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment/locale/ru */ "./node_modules/moment/locale/ru.js");
/* harmony import */ var moment_locale_ru__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment_locale_ru__WEBPACK_IMPORTED_MODULE_6__);







moment__WEBPACK_IMPORTED_MODULE_5___default.a.locale("ru");

var CatalogItem = function CatalogItem(props) {
  var t = props.t,
      image = props.image,
      item = props.item,
      id = props.id,
      date = props.date,
      onPress = props.onPress;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "CatalogItem w-100 d-flex flex-column "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/detailedcatalog.js/" + id
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "title text-left"
  }, item.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "date text-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "d-none d-md-inline"
  }, t("date")), moment__WEBPACK_IMPORTED_MODULE_5___default()(date, "YYYY-MM-DD", "ru`").format("DD MMMM YYYY"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MainButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onClick: onPress,
    title: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withI18next__WEBPACK_IMPORTED_MODULE_3__["withI18next"])('translation')(CatalogItem));

/***/ })

})
//# sourceMappingURL=index.js.baf141287e5f3725443f.hot-update.js.map