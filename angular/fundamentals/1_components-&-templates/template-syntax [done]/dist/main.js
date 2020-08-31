(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _template_statements_template_statements_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./template-statements/template-statements.component */ "./src/app/template-statements/template-statements.component.ts");
/* harmony import */ var _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./interpolation/interpolation.component */ "./src/app/interpolation/interpolation.component.ts");
/* harmony import */ var _binding_syntax_binding_syntax_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./binding-syntax/binding-syntax.component */ "./src/app/binding-syntax/binding-syntax.component.ts");
/* harmony import */ var _property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./property-binding/property-binding.component */ "./src/app/property-binding/property-binding.component.ts");
/* harmony import */ var _attr_cl_style_binding_attr_cl_style_binding_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./attr-cl-style-binding/attr-cl-style-binding.component */ "./src/app/attr-cl-style-binding/attr-cl-style-binding.component.ts");
/* harmony import */ var _event_binding_event_binding_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-binding/event-binding.component */ "./src/app/event-binding/event-binding.component.ts");
/* harmony import */ var _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./two-way-binding/two-way-binding.component */ "./src/app/two-way-binding/two-way-binding.component.ts");
/* harmony import */ var _built_in_directives_built_in_directives_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./built-in-directives/built-in-directives.component */ "./src/app/built-in-directives/built-in-directives.component.ts");
/* harmony import */ var _template_ref_vars_template_ref_vars_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./template-ref-vars/template-ref-vars.component */ "./src/app/template-ref-vars/template-ref-vars.component.ts");
/* harmony import */ var _in_out_props_in_out_props_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./in-out-props/in-out-props.component */ "./src/app/in-out-props/in-out-props.component.ts");
/* harmony import */ var _template_expression_operators_template_expression_operators_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./template-expression-operators/template-expression-operators.component */ "./src/app/template-expression-operators/template-expression-operators.component.ts");
/* harmony import */ var _svg_in_templates_svg_in_templates_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg-in-templates/svg-in-templates.component */ "./src/app/svg-in-templates/svg-in-templates.component.ts");

















const routes = [
    { path: '', redirectTo: '/intro', pathMatch: 'full' },
    { path: 'intro', component: _intro_intro_component__WEBPACK_IMPORTED_MODULE_2__["IntroComponent"] },
    { path: 'interpolation', component: _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_4__["InterpolationComponent"] },
    { path: 'template-statements', component: _template_statements_template_statements_component__WEBPACK_IMPORTED_MODULE_3__["TemplateStatementsComponent"] },
    { path: 'binding-syntax', component: _binding_syntax_binding_syntax_component__WEBPACK_IMPORTED_MODULE_5__["BindingSyntaxComponent"] },
    { path: 'property-binding', component: _property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_6__["PropertyBindingComponent"] },
    {
        path: 'attributes-class-style-bindings',
        component: _attr_cl_style_binding_attr_cl_style_binding_component__WEBPACK_IMPORTED_MODULE_7__["AttrClStyleBindingComponent"],
    },
    { path: 'event-binding', component: _event_binding_event_binding_component__WEBPACK_IMPORTED_MODULE_8__["EventBindingComponent"] },
    { path: 'two-way-binding', component: _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_9__["TwoWayBindingComponent"] },
    { path: 'built-in-directives', component: _built_in_directives_built_in_directives_component__WEBPACK_IMPORTED_MODULE_10__["BuiltInDirectivesComponent"] },
    {
        path: 'template-reference-variables',
        component: _template_ref_vars_template_ref_vars_component__WEBPACK_IMPORTED_MODULE_11__["TemplateRefVarsComponent"],
    },
    { path: 'inputs-outputs', component: _in_out_props_in_out_props_component__WEBPACK_IMPORTED_MODULE_12__["InOutPropsComponent"] },
    {
        path: 'template-expression-operators',
        component: _template_expression_operators_template_expression_operators_component__WEBPACK_IMPORTED_MODULE_13__["TemplateExpressionOperatorsComponent"],
    },
    { path: 'svg-in-templates', component: _svg_in_templates_svg_in_templates_component__WEBPACK_IMPORTED_MODULE_14__["SvgInTemplatesComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _get_main_menu_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-main-menu-items.service */ "./src/app/get-main-menu-items.service.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function AppComponent_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", menuItem_r2.routerLink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("aria-label", menuItem_r2["aria-label"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menuItem_r2.text);
} }
class AppComponent {
    constructor(getMenuItems) {
        this.getMenuItems = getMenuItems;
        this.title = 'template-syntax';
    }
    ngOnInit() {
        this.mainMenuItems = this.getMenuItems.getItems();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_get_main_menu_items_service__WEBPACK_IMPORTED_MODULE_1__["GetMainMenuItemsService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 15, vars: 2, consts: [[1, "main-menu__container"], ["mode", "side", 1, "main-menu__menu"], ["mainMenu", ""], [1, "main-menu__title"], [1, "main-menu__list"], [4, "ngFor", "ngForOf"], [1, "main-menu__burger", 3, "ngClass", "click"], [1, "main-menu__burger-logo"], [1, "main-menu__burger-logo-item"], [1, "main-menu__content", "container"], [1, "main-menu__item", 3, "routerLink", "aria-label"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-drawer", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Template syntax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ul", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_li_6_Template, 3, 3, "li", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "main", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.mainMenuItems);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _r0.opened ? "main-menu__burger-opened" : "");
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawer"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".container[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  padding: 1rem;\n}\n\n.main-menu__menu[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.main-menu__container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.main-menu__burger[_ngcontent-%COMP%] {\n  z-index: 10;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  position: fixed;\n  top: 1rem;\n  right: 1rem;\n  width: 5rem;\n  height: 4rem;\n  overflow: hidden;\n  background: none;\n}\n\n.main-menu__burger-logo[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  padding: 0.5rem;\n  cursor: pointer;\n  display: inline-block;\n  transition: all 0.25s ease-in-out;\n}\n\n.main-menu__burger-logo[_ngcontent-%COMP%]:hover, .main-menu__burger-logo[_ngcontent-%COMP%]:focus, .main-menu__burger-logo[_ngcontent-%COMP%]:active {\n  transform: scale(1.1);\n}\n\n.main-menu__burger-logo[_ngcontent-%COMP%]:hover   .main-menu__burger-logo-item[_ngcontent-%COMP%], .main-menu__burger-logo[_ngcontent-%COMP%]:focus   .main-menu__burger-logo-item[_ngcontent-%COMP%], .main-menu__burger-logo[_ngcontent-%COMP%]:active   .main-menu__burger-logo-item[_ngcontent-%COMP%] {\n  border-color: #31bb99;\n}\n\n.main-menu__burger-logo-item[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  width: 60%;\n  transform: translate(-50%, -50%);\n  transition: all 0.25s ease-in-out;\n  border-bottom: 2px solid seashell;\n}\n\n.main-menu__burger-logo-item[_ngcontent-%COMP%]:nth-child(1) {\n  top: 30%;\n}\n\n.main-menu__burger-logo-item[_ngcontent-%COMP%]:nth-child(2) {\n  top: 50%;\n}\n\n.main-menu__burger-logo-item[_ngcontent-%COMP%]:nth-child(3) {\n  top: 70%;\n}\n\n.main-menu__burger-opened[_ngcontent-%COMP%]   .main-menu__burger-logo-item[_ngcontent-%COMP%]:nth-child(1) {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(45deg);\n}\n\n.main-menu__burger-opened[_ngcontent-%COMP%]   .main-menu__burger-logo-item[_ngcontent-%COMP%]:nth-child(2) {\n  left: -100%;\n}\n\n.main-menu__burger-opened[_ngcontent-%COMP%]   .main-menu__burger-logo-item[_ngcontent-%COMP%]:nth-child(3) {\n  top: 50%;\n  transform: translate(-50%, -50%) rotate(-45deg);\n}\n\n.main-menu__title[_ngcontent-%COMP%] {\n  color: #b151f1;\n  padding: 1rem;\n  letter-spacing: 0.1rem;\n  margin: 0;\n}\n\n.main-menu__title[_ngcontent-%COMP%]::after {\n  content: \":\";\n}\n\n.main-menu__list[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.main-menu__item[_ngcontent-%COMP%] {\n  color: seashell;\n  max-width: 20rem;\n  text-decoration: none;\n  display: block;\n  word-wrap: break-word;\n  \n  white-space: pre-wrap;\n  font-size: 1.6rem;\n  margin: 1rem;\n  margin-top: 3rem;\n  padding-left: 0rem;\n  padding-right: 3rem;\n  position: relative;\n  letter-spacing: 0.1rem;\n  line-height: 1.5;\n  transition: all 0.25s ease-in-out;\n}\n\n.main-menu__item[_ngcontent-%COMP%]:before {\n  content: \">>\";\n  transition: all 0.2s ease-in-out;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  top: 50%;\n  left: 1rem;\n  color: rgba(0, 0, 0, 0);\n}\n\n.main-menu__item[_ngcontent-%COMP%]:hover, .main-menu__item[_ngcontent-%COMP%]:focus, .main-menu__item[_ngcontent-%COMP%]:active {\n  padding-left: 3rem;\n  padding-right: 0rem;\n  color: #31bb99;\n}\n\n.main-menu__item[_ngcontent-%COMP%]:hover:before, .main-menu__item[_ngcontent-%COMP%]:focus:before, .main-menu__item[_ngcontent-%COMP%]:active:before {\n  color: inherit;\n  transition: all 0.5s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBbEJGOztBQXNCRTtFQUNFLHlCQUFBO0tBQUEsc0JBQUE7VUFBQSxpQkFBQTtBQW5CSjs7QUFzQkU7RUFDRSxrQkFBQTtBQXBCSjs7QUFzQkU7RUFFRSxXQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBckJKOztBQXdCRTtFQUVFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBOUNGLGlDQUFBO0FBd0JGOztBQW5CRTtFQTJDSSxxQkFBQTtBQXJCTjs7QUFzQk07RUFDRSxxQkF4RE07QUFvQ2Q7O0FBd0JFO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBMURGLGlDQUFBO0VBcUVFLGlDQUFBO0FBL0JKOztBQXFCSTtFQUNFLFFBQUE7QUFuQk47O0FBcUJJO0VBQ0UsUUFBQTtBQW5CTjs7QUFxQkk7RUFDRSxRQUFBO0FBbkJOOztBQTBCSTtFQUNFLFFBQUE7RUFDQSw4Q0FBQTtBQXhCTjs7QUEwQkk7RUFDRSxXQUFBO0FBeEJOOztBQTBCSTtFQUNFLFFBQUE7RUFDQSwrQ0FBQTtBQXhCTjs7QUE0QkU7RUFDRSxjQTNGYTtFQTRGYixhQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0FBMUJKOztBQTJCSTtFQUNFLFlBQUE7QUF6Qk47O0FBNkJFO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTNCSjs7QUE2QkU7RUFDRSxlQTNHYTtFQTRHYixnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQXVCLGFBQUE7RUFDdkIscUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFuSEYsaUNBQUE7QUEwRkY7O0FBMEJJO0VBQ0UsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7QUF4Qk47O0FBOUZFO0VBeUhJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQXRJUTtBQThHZDs7QUF5Qk07RUFDRSxjQUFBO0VBQ0EsZ0NBQUE7QUF2QlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhcmlhYmxlc1xyXG4kY29sb3JfX21haW46IHJnYig0OSwgMTg3LCAxNTMpO1xyXG4kY29sb3JfX3N1cHBvcnQ6IHNlYXNoZWxsO1xyXG4kY29sb3JfX291dGxpbmU6IHJnYigxNzcsIDgxLCAyNDEpO1xyXG5cclxuLy9taXhpbnNcclxuQG1peGluIHRyIHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbkBtaXhpbiBob3ZlciB7XHJcbiAgQGluY2x1ZGUgdHI7XHJcbiAgJjpob3ZlcixcclxuICAmOmZvY3VzLFxyXG4gICY6YWN0aXZlIHtcclxuICAgIEBjb250ZW50O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbn1cclxuXHJcbi5tYWluLW1lbnUge1xyXG4gICZfX21lbnUge1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAmX19idXJnZXIge1xyXG4gICAgLy8gb3V0bGluZTogMXB4IHNvbGlkIG9yYW5nZTtcclxuICAgIHotaW5kZXg6IDEwO1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgICByaWdodDogMXJlbTtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmX19idXJnZXItbG9nbyB7XHJcbiAgICAvLyBvdXRsaW5lOiAxcHggc29saWQgcHVycGxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBAaW5jbHVkZSBob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICAgICAgJiAubWFpbi1tZW51X19idXJnZXItbG9nby1pdGVtIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvcl9fbWFpbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmX19idXJnZXItbG9nby1pdGVtIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICY6bnRoLWNoaWxkKDEpIHtcclxuICAgICAgdG9wOiAzMCU7XHJcbiAgICB9XHJcbiAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgfVxyXG4gICAgJjpudGgtY2hpbGQoMykge1xyXG4gICAgICB0b3A6IDcwJTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIHRyO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICRjb2xvcl9fc3VwcG9ydDtcclxuICB9XHJcblxyXG4gICZfX2J1cmdlci1vcGVuZWQge1xyXG4gICAgJiAubWFpbi1tZW51X19idXJnZXItbG9nby1pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoNDVkZWcpO1xyXG4gICAgfVxyXG4gICAgJiAubWFpbi1tZW51X19idXJnZXItbG9nby1pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgIGxlZnQ6IC0xMDAlO1xyXG4gICAgfVxyXG4gICAgJiAubWFpbi1tZW51X19idXJnZXItbG9nby1pdGVtOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3RpdGxlIHtcclxuICAgIGNvbG9yOiAkY29sb3JfX291dGxpbmU7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgICY6OmFmdGVyIHtcclxuICAgICAgY29udGVudDogXCI6XCI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19saXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAmX19pdGVtIHtcclxuICAgIGNvbG9yOiAkY29sb3JfX3N1cHBvcnQ7XHJcbiAgICBtYXgtd2lkdGg6IDIwcmVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7IC8qIElFIDUuNS03ICovXHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIG1hcmdpbjogMXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDByZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiPj5cIjtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICBsZWZ0OiAxcmVtO1xyXG4gICAgICBjb2xvcjogcmdiYSgkY29sb3I6ICMwMDAwMDAsICRhbHBoYTogMCk7XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBob3ZlciB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgICAgcGFkZGluZy1yaWdodDogMHJlbTtcclxuICAgICAgY29sb3I6ICRjb2xvcl9fbWFpbjtcclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _get_main_menu_items_service__WEBPACK_IMPORTED_MODULE_1__["GetMainMenuItemsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./intro/intro.component */ "./src/app/intro/intro.component.ts");
/* harmony import */ var _template_statements_template_statements_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./template-statements/template-statements.component */ "./src/app/template-statements/template-statements.component.ts");
/* harmony import */ var _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interpolation/interpolation.component */ "./src/app/interpolation/interpolation.component.ts");
/* harmony import */ var _binding_syntax_binding_syntax_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./binding-syntax/binding-syntax.component */ "./src/app/binding-syntax/binding-syntax.component.ts");
/* harmony import */ var _property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./property-binding/property-binding.component */ "./src/app/property-binding/property-binding.component.ts");
/* harmony import */ var _property_binding_app_item_detail_app_item_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./property-binding/app-item-detail/app-item-detail.component */ "./src/app/property-binding/app-item-detail/app-item-detail.component.ts");
/* harmony import */ var _property_binding_string_init_string_init_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./property-binding/string-init/string-init.component */ "./src/app/property-binding/string-init/string-init.component.ts");
/* harmony import */ var _attr_cl_style_binding_attr_cl_style_binding_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./attr-cl-style-binding/attr-cl-style-binding.component */ "./src/app/attr-cl-style-binding/attr-cl-style-binding.component.ts");
/* harmony import */ var _event_binding_event_binding_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./event-binding/event-binding.component */ "./src/app/event-binding/event-binding.component.ts");
/* harmony import */ var _event_binding_click_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./event-binding/click.directive */ "./src/app/event-binding/click.directive.ts");
/* harmony import */ var _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./two-way-binding/two-way-binding.component */ "./src/app/two-way-binding/two-way-binding.component.ts");
/* harmony import */ var _two_way_binding_sizer_sizer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./two-way-binding/sizer/sizer.component */ "./src/app/two-way-binding/sizer/sizer.component.ts");
/* harmony import */ var _built_in_directives_built_in_directives_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./built-in-directives/built-in-directives.component */ "./src/app/built-in-directives/built-in-directives.component.ts");
/* harmony import */ var _template_ref_vars_template_ref_vars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./template-ref-vars/template-ref-vars.component */ "./src/app/template-ref-vars/template-ref-vars.component.ts");
/* harmony import */ var _in_out_props_in_out_props_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./in-out-props/in-out-props.component */ "./src/app/in-out-props/in-out-props.component.ts");
/* harmony import */ var _in_out_props_child_child_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./in-out-props/child/child.component */ "./src/app/in-out-props/child/child.component.ts");
/* harmony import */ var _in_out_props_parent_parent_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./in-out-props/parent/parent.component */ "./src/app/in-out-props/parent/parent.component.ts");
/* harmony import */ var _template_expression_operators_template_expression_operators_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./template-expression-operators/template-expression-operators.component */ "./src/app/template-expression-operators/template-expression-operators.component.ts");
/* harmony import */ var _svg_in_templates_svg_in_templates_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./svg-in-templates/svg-in-templates.component */ "./src/app/svg-in-templates/svg-in-templates.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");



































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
        _template_statements_template_statements_component__WEBPACK_IMPORTED_MODULE_9__["TemplateStatementsComponent"],
        _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_10__["InterpolationComponent"],
        _binding_syntax_binding_syntax_component__WEBPACK_IMPORTED_MODULE_11__["BindingSyntaxComponent"],
        _property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_12__["PropertyBindingComponent"],
        _property_binding_app_item_detail_app_item_detail_component__WEBPACK_IMPORTED_MODULE_13__["AppItemDetailComponent"],
        _property_binding_string_init_string_init_component__WEBPACK_IMPORTED_MODULE_14__["StringInitComponent"],
        _attr_cl_style_binding_attr_cl_style_binding_component__WEBPACK_IMPORTED_MODULE_15__["AttrClStyleBindingComponent"],
        _event_binding_event_binding_component__WEBPACK_IMPORTED_MODULE_16__["EventBindingComponent"],
        _event_binding_click_directive__WEBPACK_IMPORTED_MODULE_17__["ClickDirective"],
        _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_18__["TwoWayBindingComponent"],
        _two_way_binding_sizer_sizer_component__WEBPACK_IMPORTED_MODULE_19__["SizerComponent"],
        _built_in_directives_built_in_directives_component__WEBPACK_IMPORTED_MODULE_20__["BuiltInDirectivesComponent"],
        _template_ref_vars_template_ref_vars_component__WEBPACK_IMPORTED_MODULE_21__["TemplateRefVarsComponent"],
        _in_out_props_in_out_props_component__WEBPACK_IMPORTED_MODULE_22__["InOutPropsComponent"],
        _in_out_props_child_child_component__WEBPACK_IMPORTED_MODULE_23__["ChildComponent"],
        _in_out_props_parent_parent_component__WEBPACK_IMPORTED_MODULE_24__["ParentComponent"],
        _template_expression_operators_template_expression_operators_component__WEBPACK_IMPORTED_MODULE_25__["TemplateExpressionOperatorsComponent"],
        _svg_in_templates_svg_in_templates_component__WEBPACK_IMPORTED_MODULE_26__["SvgInTemplatesComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
                    _template_statements_template_statements_component__WEBPACK_IMPORTED_MODULE_9__["TemplateStatementsComponent"],
                    _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_10__["InterpolationComponent"],
                    _binding_syntax_binding_syntax_component__WEBPACK_IMPORTED_MODULE_11__["BindingSyntaxComponent"],
                    _property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_12__["PropertyBindingComponent"],
                    _property_binding_app_item_detail_app_item_detail_component__WEBPACK_IMPORTED_MODULE_13__["AppItemDetailComponent"],
                    _property_binding_string_init_string_init_component__WEBPACK_IMPORTED_MODULE_14__["StringInitComponent"],
                    _attr_cl_style_binding_attr_cl_style_binding_component__WEBPACK_IMPORTED_MODULE_15__["AttrClStyleBindingComponent"],
                    _event_binding_event_binding_component__WEBPACK_IMPORTED_MODULE_16__["EventBindingComponent"],
                    _event_binding_click_directive__WEBPACK_IMPORTED_MODULE_17__["ClickDirective"],
                    _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_18__["TwoWayBindingComponent"],
                    _two_way_binding_sizer_sizer_component__WEBPACK_IMPORTED_MODULE_19__["SizerComponent"],
                    _built_in_directives_built_in_directives_component__WEBPACK_IMPORTED_MODULE_20__["BuiltInDirectivesComponent"],
                    _template_ref_vars_template_ref_vars_component__WEBPACK_IMPORTED_MODULE_21__["TemplateRefVarsComponent"],
                    _in_out_props_in_out_props_component__WEBPACK_IMPORTED_MODULE_22__["InOutPropsComponent"],
                    _in_out_props_child_child_component__WEBPACK_IMPORTED_MODULE_23__["ChildComponent"],
                    _in_out_props_parent_parent_component__WEBPACK_IMPORTED_MODULE_24__["ParentComponent"],
                    _template_expression_operators_template_expression_operators_component__WEBPACK_IMPORTED_MODULE_25__["TemplateExpressionOperatorsComponent"],
                    _svg_in_templates_svg_in_templates_component__WEBPACK_IMPORTED_MODULE_26__["SvgInTemplatesComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_12__["PropertyBindingComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["NgPluralCase"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_l"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_29__["Dir"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["CdkScrollable"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatDrawerContent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
    _intro_intro_component__WEBPACK_IMPORTED_MODULE_8__["IntroComponent"],
    _template_statements_template_statements_component__WEBPACK_IMPORTED_MODULE_9__["TemplateStatementsComponent"],
    _interpolation_interpolation_component__WEBPACK_IMPORTED_MODULE_10__["InterpolationComponent"],
    _binding_syntax_binding_syntax_component__WEBPACK_IMPORTED_MODULE_11__["BindingSyntaxComponent"],
    _property_binding_property_binding_component__WEBPACK_IMPORTED_MODULE_12__["PropertyBindingComponent"],
    _property_binding_app_item_detail_app_item_detail_component__WEBPACK_IMPORTED_MODULE_13__["AppItemDetailComponent"],
    _property_binding_string_init_string_init_component__WEBPACK_IMPORTED_MODULE_14__["StringInitComponent"],
    _attr_cl_style_binding_attr_cl_style_binding_component__WEBPACK_IMPORTED_MODULE_15__["AttrClStyleBindingComponent"],
    _event_binding_event_binding_component__WEBPACK_IMPORTED_MODULE_16__["EventBindingComponent"],
    _event_binding_click_directive__WEBPACK_IMPORTED_MODULE_17__["ClickDirective"],
    _two_way_binding_two_way_binding_component__WEBPACK_IMPORTED_MODULE_18__["TwoWayBindingComponent"],
    _two_way_binding_sizer_sizer_component__WEBPACK_IMPORTED_MODULE_19__["SizerComponent"],
    _built_in_directives_built_in_directives_component__WEBPACK_IMPORTED_MODULE_20__["BuiltInDirectivesComponent"],
    _template_ref_vars_template_ref_vars_component__WEBPACK_IMPORTED_MODULE_21__["TemplateRefVarsComponent"],
    _in_out_props_in_out_props_component__WEBPACK_IMPORTED_MODULE_22__["InOutPropsComponent"],
    _in_out_props_child_child_component__WEBPACK_IMPORTED_MODULE_23__["ChildComponent"],
    _in_out_props_parent_parent_component__WEBPACK_IMPORTED_MODULE_24__["ParentComponent"],
    _template_expression_operators_template_expression_operators_component__WEBPACK_IMPORTED_MODULE_25__["TemplateExpressionOperatorsComponent"],
    _svg_in_templates_svg_in_templates_component__WEBPACK_IMPORTED_MODULE_26__["SvgInTemplatesComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_27__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_27__["KeyValuePipe"]]);


/***/ }),

/***/ "./src/app/attr-cl-style-binding/attr-cl-style-binding.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/attr-cl-style-binding/attr-cl-style-binding.component.ts ***!
  \**************************************************************************/
/*! exports provided: AttrClStyleBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttrClStyleBindingComponent", function() { return AttrClStyleBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AttrClStyleBindingComponent {
    constructor() {
        this.actionName = 'The lable attr for the button';
        this.bindClass = true;
        this.classString = 'binding__bar binding__decoration';
        this.classObj = {
            binding__bar: false,
            binding__decoration: true,
        };
        this.widthRem = 3;
        this.styleString = 'width: 4rem; border: 1px solid yellow';
        this.styleObj = {
            width: '5rem',
            border: '1px solid orange',
        };
    }
    ngOnInit() { }
    toggleBindClass() {
        this.bindClass = !this.bindClass;
    }
}
AttrClStyleBindingComponent.ɵfac = function AttrClStyleBindingComponent_Factory(t) { return new (t || AttrClStyleBindingComponent)(); };
AttrClStyleBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttrClStyleBindingComponent, selectors: [["app-attr-cl-style-binding"]], decls: 59, vars: 11, consts: [[1, "title"], [3, "colSpan"], [1, "binding__bg-mate", 2, "width", "2rem"], [1, "binding__bg-mate"]], template: function AttrClStyleBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "attribute, class and style bindings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Attribute binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Span 2 columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Span 1 column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Span 2 columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Span 1 column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "td", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Style binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Info:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Need to know what is \"host\" (custom tag) and @Directive(custom attribute). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " There are special values: null (remove attr)(even if there is lighter binding the same attr) and undefined(take lighter value). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Dynamic Specific class/style binding is the most heavy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Then string and object binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Then @Directive");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Then host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " And the last - static values.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-lable", ctx.actionName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.actionName, " : Indeed");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", 1 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("colspan", 1 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("colSpan", 1 + 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.widthRem, "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.styleObj);
    } }, styles: ["td[_ngcontent-%COMP%] {\n  border: 1px solid green;\n}\n\n.binding__bar[_ngcontent-%COMP%] {\n  -webkit-text-decoration: orange wavy overline;\n          text-decoration: orange wavy overline;\n  padding-top: 2rem;\n}\n\n.binding__decoration[_ngcontent-%COMP%] {\n  color: orchid;\n}\n\n.binding__bg-mate[_ngcontent-%COMP%] {\n  background: mediumseagreen;\n  height: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXR0ci1jbC1zdHlsZS1iaW5kaW5nL2F0dHItY2wtc3R5bGUtYmluZGluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBR0U7RUFDRSw2Q0FBQTtVQUFBLHFDQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7QUFESjs7QUFJRTtFQUNFLDBCQUFBO0VBQ0EsWUFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvYXR0ci1jbC1zdHlsZS1iaW5kaW5nL2F0dHItY2wtc3R5bGUtYmluZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5cclxuLmJpbmRpbmcge1xyXG4gICZfX2JhciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG9yYW5nZSB3YXZ5IG92ZXJsaW5lO1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgfVxyXG5cclxuICAmX19kZWNvcmF0aW9uIHtcclxuICAgIGNvbG9yOiBvcmNoaWQ7XHJcbiAgfVxyXG5cclxuICAmX19iZy1tYXRlIHtcclxuICAgIGJhY2tncm91bmQ6IG1lZGl1bXNlYWdyZWVuO1xyXG4gICAgaGVpZ2h0OiAycmVtO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttrClStyleBindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attr-cl-style-binding',
                templateUrl: './attr-cl-style-binding.component.html',
                styleUrls: ['./attr-cl-style-binding.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/binding-syntax/binding-syntax.component.ts":
/*!************************************************************!*\
  !*** ./src/app/binding-syntax/binding-syntax.component.ts ***!
  \************************************************************/
/*! exports provided: BindingSyntaxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingSyntaxComponent", function() { return BindingSyntaxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class BindingSyntaxComponent {
    constructor() { }
    ngOnInit() {
        this.isUnchanged = true;
    }
    toggleUnchanged() {
        this.isUnchanged = !this.isUnchanged;
    }
}
BindingSyntaxComponent.ɵfac = function BindingSyntaxComponent_Factory(t) { return new (t || BindingSyntaxComponent)(); };
BindingSyntaxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BindingSyntaxComponent, selectors: [["app-binding-syntax"]], decls: 14, vars: 3, consts: [[1, "title"], [1, "binding-syntax__special"], ["src", "https://imgcomfort.com/Userfiles/Upload/images/illustration-geiranger.jpg", 2, "max-width", "600px"], [3, "disabled"], [3, "click"]], template: function BindingSyntaxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Binding Syntax");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Plan old HTML");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BindingSyntaxComponent_Template_button_click_8_listener() { return ctx.toggleUnchanged(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Disabled buttons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isUnchanged);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isUnchanged ? true : false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("disabled", ctx.isUnchanged ? "disabled" : null);
    } }, styles: [".binding-syntax__special[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  font-size: 2rem;\n  color: antiquewhite;\n  margin-bottom: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmluZGluZy1zeW50YXgvYmluZGluZy1zeW50YXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQVIiLCJmaWxlIjoic3JjL2FwcC9iaW5kaW5nLXN5bnRheC9iaW5kaW5nLXN5bnRheC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iaW5kaW5nLXN5bnRheCB7XHJcbiAgICAmX19zcGVjaWFsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBjb2xvcjogYW50aXF1ZXdoaXRlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BindingSyntaxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-binding-syntax',
                templateUrl: './binding-syntax.component.html',
                styleUrls: ['./binding-syntax.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/built-in-directives/built-in-directives.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/built-in-directives/built-in-directives.component.ts ***!
  \**********************************************************************/
/*! exports provided: BuiltInDirectivesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuiltInDirectivesComponent", function() { return BuiltInDirectivesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function BuiltInDirectivesComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuiltInDirectivesComponent_li_22_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const id_r1 = ctx.$implicit; return id_r1.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuiltInDirectivesComponent_li_22_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const id_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.changeId(id_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "ChangeId");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const id_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", id_r1.id, " - ", id_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", id_r1.name);
} }
class BuiltInDirectivesComponent {
    constructor() {
        this.currentItem = { name: 'John' };
        this.ngForControlBy = [
            { id: 1, name: 'John' },
            { id: 2, name: 'Tom' },
            { id: 3, name: 'Dom' },
            { id: 4, name: 'Son' },
            { id: 5, name: 'Ron' },
            { id: 6, name: 'Bon' },
        ];
        this._isSpecial = true;
        this._canSave = true;
        this._isUnchanged = true;
    }
    get isSpecial() {
        return this._isSpecial;
    }
    set isSpecial(val) {
        this._isSpecial = val;
        this.setCurrentClasses();
        this.setCurrentStyles();
    }
    get canSave() {
        return this._canSave;
    }
    set canSave(val) {
        this._canSave = val;
        this.setCurrentClasses();
        this.setCurrentStyles();
    }
    get isUnchanged() {
        return this._isUnchanged;
    }
    set isUnchanged(val) {
        this._isUnchanged = val;
        this.setCurrentClasses();
        this.setCurrentStyles();
    }
    ngOnInit() {
        this.setCurrentClasses();
        this.setCurrentStyles();
    }
    setCurrentClasses() {
        this.currentClasses = {
            savable: this.canSave,
            modified: !this.isUnchanged,
            special: this.isSpecial,
        };
    }
    setCurrentStyles() {
        this.currentStyles = {
            'font-style': this.canSave ? 'italic' : 'normal',
            'font-weight': !this.isUnchanged ? 'bold' : 'normal',
            'font-size': this.isSpecial ? '24px' : '12px',
        };
    }
    trackById(item) {
        return item.id;
    }
    changeId(item) {
        this.ngForControlBy.splice(this.ngForControlBy.indexOf(item), 1);
        item.id = Math.round(Math.random() * 100);
        this.ngForControlBy.push(item);
    }
}
BuiltInDirectivesComponent.ɵfac = function BuiltInDirectivesComponent_Factory(t) { return new (t || BuiltInDirectivesComponent)(); };
BuiltInDirectivesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BuiltInDirectivesComponent, selectors: [["app-built-in-directives"]], decls: 23, vars: 10, consts: [[1, "title"], [3, "ngClass"], [3, "click"], [3, "ngStyle"], ["for", "example-ngModel"], ["id", "example-ngModel", 3, "ngModel", "ngModelChange"], ["for", "example-change"], ["id", "example-change", 3, "ngModel", "ngModelChange"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngModel", "ngModelChange"]], template: function BuiltInDirectivesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Built-in directives");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "This div is special");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Class binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Class Object");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuiltInDirectivesComponent_Template_button_click_8_listener() { return ctx.isSpecial = !ctx.isSpecial; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Toggle isSpecial");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " This div is initially italic, normal weight, and extra large (24px).\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "[(ngModel)]");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuiltInDirectivesComponent_Template_input_ngModelChange_14_listener($event) { return ctx.currentItem.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "(ngModelChange)=\"...name=$event\":");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuiltInDirectivesComponent_Template_input_ngModelChange_20_listener($event) { return ctx.currentItem.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BuiltInDirectivesComponent_li_22_Template, 5, 3, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isSpecial ? "special" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("special", ctx.isSpecial);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.currentClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx.currentStyles);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\n", ctx.currentItem.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.currentItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.ngForControlBy)("ngForTrackBy", ctx.trackById);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".special[_ngcontent-%COMP%] {\n  color: aquamarine;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbHQtaW4tZGlyZWN0aXZlcy9idWlsdC1pbi1kaXJlY3RpdmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2J1aWx0LWluLWRpcmVjdGl2ZXMvYnVpbHQtaW4tZGlyZWN0aXZlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsIHtcclxuICAgIGNvbG9yOiBhcXVhbWFyaW5lO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuiltInDirectivesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-built-in-directives',
                templateUrl: './built-in-directives.component.html',
                styleUrls: ['./built-in-directives.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/event-binding/click.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/event-binding/click.directive.ts ***!
  \**************************************************/
/*! exports provided: ClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickDirective", function() { return ClickDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ClickDirective {
    constructor(el) {
        this.clicks = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.toggle = false;
        el.nativeElement.addEventListener('click', (event) => {
            this.toggle = !this.toggle;
            this.clicks.emit(this.toggle ? 'Click!' : '');
        });
    }
}
ClickDirective.ɵfac = function ClickDirective_Factory(t) { return new (t || ClickDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ClickDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ClickDirective, selectors: [["", "myClick", ""]], outputs: { clicks: "myClick" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClickDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[myClick]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { clicks: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['myClick']
        }] }); })();


/***/ }),

/***/ "./src/app/event-binding/event-binding.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/event-binding/event-binding.component.ts ***!
  \**********************************************************/
/*! exports provided: EventBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventBindingComponent", function() { return EventBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click.directive */ "./src/app/event-binding/click.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _property_binding_app_item_detail_app_item_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../property-binding/app-item-detail/app-item-detail.component */ "./src/app/property-binding/app-item-detail/app-item-detail.component.ts");





function EventBindingComponent_app_item_detail_15_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-item-detail", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteRequest", function EventBindingComponent_app_item_detail_15_Template_app_item_detail_deleteRequest_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteItem($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const heroItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", heroItem_r1);
} }
class EventBindingComponent {
    constructor() {
        this.currentItem = {
            name: 'Test',
        };
        this.heroItems = [
            {
                name: 'Test1',
            },
            {
                name: 'Test2',
            },
            {
                name: 'Test3',
            },
            {
                name: 'Test4',
            },
        ];
    }
    ngOnInit() { }
    onClickEvent(e) {
        console.log(e);
        this.clickTarget = e.target;
    }
    onClick(e) {
        alert(e.target);
    }
    deleteItem(hero) {
        if (this.heroItems.includes(hero)) {
            this.heroItems.splice(this.heroItems.indexOf(hero), 1);
        }
    }
}
EventBindingComponent.ɵfac = function EventBindingComponent_Factory(t) { return new (t || EventBindingComponent)(); };
EventBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EventBindingComponent, selectors: [["app-event-binding"]], decls: 18, vars: 5, consts: [[1, "title"], [3, "click"], ["clickable", "", 3, "myClick"], ["type", "text", 3, "value", "input"], [3, "item", "deleteRequest", 4, "ngFor", "ngForOf"], [3, "item", "deleteRequest"]], template: function EventBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "event binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventBindingComponent_Template_button_click_2_listener($event) { return ctx.onClickEvent($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EventBindingComponent_Template_button_click_4_listener($event) { return ctx.onClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "on-click");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "myClick is an event on the custom ClickDirective:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("myClick", function EventBindingComponent_Template_button_myClick_8_listener($event) { return ctx.clickMessage = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Click with myClick");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function EventBindingComponent_Template_input_input_12_listener($event) { return ctx.currentItem.name = $event.target.value; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EventBindingComponent_app_item_detail_15_Template, 1, 1, "app-item-detail", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Be careful with side effects!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clickTarget || null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.clickMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.currentItem.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.currentItem.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heroItems);
    } }, directives: [_click_directive__WEBPACK_IMPORTED_MODULE_1__["ClickDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _property_binding_app_item_detail_app_item_detail_component__WEBPACK_IMPORTED_MODULE_3__["AppItemDetailComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50LWJpbmRpbmcvZXZlbnQtYmluZGluZy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventBindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-event-binding',
                templateUrl: './event-binding.component.html',
                styleUrls: ['./event-binding.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/get-main-menu-items.service.ts":
/*!************************************************!*\
  !*** ./src/app/get-main-menu-items.service.ts ***!
  \************************************************/
/*! exports provided: GetMainMenuItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMainMenuItemsService", function() { return GetMainMenuItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class GetMainMenuItemsService {
    getItems() {
        let items;
        items = [
            {
                text: 'Introduction',
                routerLink: '/intro',
                'aria-label': 'Introduction to Template Syntax',
            },
            {
                text: 'Interpolation',
                routerLink: '/interpolation',
                'aria-label': 'Introduction to Template Syntax',
            },
            {
                text: 'Template statements',
                routerLink: '/template-statements',
                'aria-label': 'Template statements',
            },
            {
                text: 'Binding syntax',
                routerLink: '/binding-syntax',
                'aria-label': 'Binding syntax',
            },
            {
                text: 'Property binding',
                routerLink: '/property-binding',
                'aria-label': 'Property binding',
            },
            {
                text: 'Attributes, class & style bindings',
                routerLink: '/attributes-class-style-bindings',
                'aria-label': 'Attributes, class & style bindings',
            },
            {
                text: 'Event binding',
                routerLink: '/event-binding',
                'aria-label': 'Event binding',
            },
            {
                text: 'Two-way binding',
                routerLink: '/two-way-binding',
                'aria-label': 'Two-way binding',
            },
            {
                text: 'Built-in directives',
                routerLink: '/built-in-directives',
                'aria-label': 'Built-in directives',
            },
            {
                text: 'Template reference variables',
                routerLink: '/template-reference-variables',
                'aria-label': 'Template reference variables',
            },
            {
                text: 'Inputs & Outputs',
                routerLink: '/inputs-outputs',
                'aria-label': 'Inputs & Outputs',
            },
            {
                text: 'Template expression operators',
                routerLink: '/template-expression-operators',
                'aria-label': 'Template expression operators',
            },
            {
                text: 'SVG in templates',
                routerLink: '/svg-in-templates',
                'aria-label': 'SVG in templates',
            },
        ];
        return items;
    }
}
GetMainMenuItemsService.ɵfac = function GetMainMenuItemsService_Factory(t) { return new (t || GetMainMenuItemsService)(); };
GetMainMenuItemsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GetMainMenuItemsService, factory: GetMainMenuItemsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetMainMenuItemsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/in-out-props/child/child.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/in-out-props/child/child.component.ts ***!
  \*******************************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ChildComponent {
    constructor() {
        this.newItemEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.justTestOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    addNewItem(value) {
        this.newItemEvent.emit(value);
        this.justTestOutput.emit('+1 Item');
    }
    removeCurrentItem() {
        this.removeItem.emit(this.item);
    }
}
ChildComponent.ɵfac = function ChildComponent_Factory(t) { return new (t || ChildComponent)(); };
ChildComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ChildComponent, selectors: [["app-child"]], inputs: { item: "item", justTestInput: ["importantInput", "justTestInput"] }, outputs: { newItemEvent: "newItemEvent", removeItem: "removeItem", justTestOutput: "importantEvent" }, decls: 12, vars: 2, consts: [["newItem", ""], [3, "click"]], template: function ChildComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add an item: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); ctx.addNewItem(_r0.value); return _r0.value = ""; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Add to parent's list\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ChildComponent_Template_button_click_10_listener() { return ctx.removeCurrentItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "x");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Today's item: ", ctx.item, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.justTestInput);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luLW91dC1wcm9wcy9jaGlsZC9jaGlsZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChildComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-child',
                templateUrl: './child.component.html',
                styleUrls: ['./child.component.scss'],
            }]
    }], function () { return []; }, { item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], justTestInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['importantInput']
        }], newItemEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], justTestOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
            args: ['importantEvent']
        }] }); })();


/***/ }),

/***/ "./src/app/in-out-props/in-out-props.component.ts":
/*!********************************************************!*\
  !*** ./src/app/in-out-props/in-out-props.component.ts ***!
  \********************************************************/
/*! exports provided: InOutPropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InOutPropsComponent", function() { return InOutPropsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./child/child.component */ "./src/app/in-out-props/child/child.component.ts");




function InOutPropsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-child", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("removeItem", function InOutPropsComponent_li_3_Template_app_child_removeItem_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.removeItem($event); })("newItemEvent", function InOutPropsComponent_li_3_Template_app_child_newItemEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addItem($event); })("importantEvent", function InOutPropsComponent_li_3_Template_app_child_importantEvent_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.alertText($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r1)("importantInput", "Text ha-ha");
} }
class InOutPropsComponent {
    constructor() {
        this.currentItem = 'Job';
        this.items = ['item1', 'item2', 'item3', 'item4'];
    }
    ngOnInit() { }
    addItem(newItem) {
        this.items.push(newItem);
    }
    removeItem(item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
    alertText(text) {
        alert(text);
    }
}
InOutPropsComponent.ɵfac = function InOutPropsComponent_Factory(t) { return new (t || InOutPropsComponent)(); };
InOutPropsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InOutPropsComponent, selectors: [["app-in-out-props"]], decls: 4, vars: 1, consts: [[1, "title"], [4, "ngFor", "ngForOf"], [3, "item", "importantInput", "removeItem", "newItemEvent", "importantEvent"]], template: function InOutPropsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "@Input & @Output Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InOutPropsComponent_li_3_Template, 2, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _child_child_component__WEBPACK_IMPORTED_MODULE_2__["ChildComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luLW91dC1wcm9wcy9pbi1vdXQtcHJvcHMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InOutPropsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-in-out-props',
                templateUrl: './in-out-props.component.html',
                styleUrls: ['./in-out-props.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/in-out-props/parent/parent.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/in-out-props/parent/parent.component.ts ***!
  \*********************************************************/
/*! exports provided: ParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParentComponent", function() { return ParentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ParentComponent {
    constructor() { }
    ngOnInit() {
    }
}
ParentComponent.ɵfac = function ParentComponent_Factory(t) { return new (t || ParentComponent)(); };
ParentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ParentComponent, selectors: [["app-parent"]], decls: 2, vars: 0, template: function ParentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "parent works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luLW91dC1wcm9wcy9wYXJlbnQvcGFyZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ParentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-parent',
                templateUrl: './parent.component.html',
                styleUrls: ['./parent.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/interpolation/interpolation.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/interpolation/interpolation.component.ts ***!
  \**********************************************************/
/*! exports provided: InterpolationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterpolationComponent", function() { return InterpolationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["test"];
class InterpolationComponent {
    constructor() {
        this.title = 'Just Ex. title';
        this.currentCustomer = 'John Snow';
        this.itemImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnoxbwYQm-icE0TFD2F8FgUWFTFHgRT1KNg&usqp=CAU';
        this.itemImageUrl2 = 'https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png';
        this.recomended = 'Use this syntax is recomended!';
    }
    ngOnInit() { }
    getVal() {
        return 'Value from "getVal()"';
    }
    setTest() { }
}
InterpolationComponent.ɵfac = function InterpolationComponent_Factory(t) { return new (t || InterpolationComponent)(); };
InterpolationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InterpolationComponent, selectors: [["app-interpolation"]], viewQuery: function InterpolationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.test = _t.first);
    } }, decls: 21, vars: 8, consts: [[1, "title"], [1, "text"], ["alt", "Ho-ho-ho", 3, "src"], [2, "max-width", "400px", 3, "src"], ["placeholder", "Test", 3, "change"], ["test", ""]], template: function InterpolationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Interpolation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function InterpolationComponent_Template_input_change_19_listener() { return ctx.setTest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCustomer);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.itemImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The sum of 1 + 1 is ", 1 + 1, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("1 + 1 is not ", 1 + 1 + ctx.getVal(), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.recomended);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.itemImageUrl2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Input text: ", _r0.value, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVycG9sYXRpb24vaW50ZXJwb2xhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InterpolationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-interpolation',
                templateUrl: './interpolation.component.html',
                styleUrls: ['./interpolation.component.scss'],
            }]
    }], function () { return []; }, { test: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['test']
        }] }); })();


/***/ }),

/***/ "./src/app/intro/intro.component.ts":
/*!******************************************!*\
  !*** ./src/app/intro/intro.component.ts ***!
  \******************************************/
/*! exports provided: IntroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroComponent", function() { return IntroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class IntroComponent {
    constructor() { }
    ngOnInit() {
    }
}
IntroComponent.ɵfac = function IntroComponent_Factory(t) { return new (t || IntroComponent)(); };
IntroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IntroComponent, selectors: [["app-intro"]], decls: 4, vars: 0, consts: [[1, "title"], [1, "text"]], template: function IntroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Introduction");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " There was implemented routing, services, materials and interfaces.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludHJvL2ludHJvLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IntroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-intro',
                templateUrl: './intro.component.html',
                styleUrls: ['./intro.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/property-binding/app-item-detail/app-item-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/property-binding/app-item-detail/app-item-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AppItemDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppItemDetailComponent", function() { return AppItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AppItemDetailComponent {
    constructor() {
        this.deleteRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.itemImageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnoxbwYQm-icE0TFD2F8FgUWFTFHgRT1KNg&usqp=CAU';
    }
    ngOnInit() {
        console.log(this.childItem);
    }
    delete() {
        this.deleteRequest.emit(this.item);
        this.displayNone = this.displayNone ? '' : 'none';
        this.lineThrough = this.lineThrough ? '' : 'line-through';
    }
}
AppItemDetailComponent.ɵfac = function AppItemDetailComponent_Factory(t) { return new (t || AppItemDetailComponent)(); };
AppItemDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppItemDetailComponent, selectors: [["app-item-detail"]], inputs: { childItem: "childItem", item: "item" }, outputs: { deleteRequest: "deleteRequest" }, decls: 5, vars: 6, consts: [[3, "src"], [3, "click"]], template: function AppItemDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppItemDetailComponent_Template_button_click_3_listener() { return ctx.delete(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayNone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.itemImageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("text-decoration", ctx.lineThrough);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.item.name);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LWJpbmRpbmcvYXBwLWl0ZW0tZGV0YWlsL2FwcC1pdGVtLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppItemDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-detail',
                templateUrl: './app-item-detail.component.html',
                styleUrls: ['./app-item-detail.component.scss'],
            }]
    }], function () { return []; }, { childItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], deleteRequest: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/property-binding/property-binding.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/property-binding/property-binding.component.ts ***!
  \****************************************************************/
/*! exports provided: PropertyBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyBindingComponent", function() { return PropertyBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class PropertyBindingComponent {
    constructor() {
        this.imageUrlBinding = 'data:image/jpeg;base64,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';
        this.isDisabled = true;
        this.classes = 'property-binding__yellow';
        this.title = 'This is title';
        this.evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
    }
    ngOnInit() {
        this.parentItem = this;
    }
    toggleIsDisabled() {
        this.isDisabled = !this.isDisabled;
    }
}
PropertyBindingComponent.ɵfac = function PropertyBindingComponent_Factory(t) { return new (t || PropertyBindingComponent)(); };
PropertyBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropertyBindingComponent, selectors: [["app-property-binding"]], decls: 95, vars: 12, consts: [[1, "title"], [3, "src"], [3, "colSpan"], [3, "disabled"], [3, "click"], [3, "ngClass"], [3, "childItem"], ["prefix", "This is prefix."], ["alt", "Interpolation", 3, "src"], ["alt", "Property", 3, "src"], [3, "innerHTML"]], template: function PropertyBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "property binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Span 2 columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Span 1 column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Span 1column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Span 1 column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Span 1 column");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Unchanged");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "See Disabled");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PropertyBindingComponent_Template_button_click_28_listener() { return ctx.toggleIsDisabled(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Class");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " [ngClass] binding to the classes property making this blue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Parent - child communication");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "app-item-detail", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Alternative binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Constant binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "app-string-init", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Property binding vs Interpolation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "interpolated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "property bound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " image. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\" is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "interpolated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " title. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\" is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "property bound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, " title. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Evil title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "\" is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "interpolated");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, " evil title. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " \"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "\" is the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "property bound");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " evil title. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrlBinding, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.isDisabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("childItem", ctx.parentItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrlBinding, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imageUrlBinding, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imageUrlBinding, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.evilTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.evilTitle, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, styles: ["table[_ngcontent-%COMP%] {\n  border: 1px solid white;\n}\n\ntd[_ngcontent-%COMP%] {\n  border: 1px solid #f5e400;\n}\n\n.property-binding__yellow[_ngcontent-%COMP%] {\n  color: yellow;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvcGVydHktYmluZGluZy9wcm9wZXJ0eS1iaW5kaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7QUFDRjs7QUFDQTtFQUNFLHlCQUFBO0FBRUY7O0FBRUU7RUFDRSxhQUFBO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9wZXJ0eS1iaW5kaW5nL3Byb3BlcnR5LWJpbmRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XHJcbn1cclxudGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDUsIDIyOCwgMCk7XHJcbn1cclxuXHJcbi5wcm9wZXJ0eS1iaW5kaW5nIHtcclxuICAmX195ZWxsb3cge1xyXG4gICAgY29sb3I6IHllbGxvdztcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PropertyBindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-property-binding',
                templateUrl: './property-binding.component.html',
                styleUrls: ['./property-binding.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/property-binding/string-init/string-init.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/property-binding/string-init/string-init.component.ts ***!
  \***********************************************************************/
/*! exports provided: StringInitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringInitComponent", function() { return StringInitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StringInitComponent {
    constructor() { }
    ngOnInit() { }
}
StringInitComponent.ɵfac = function StringInitComponent_Factory(t) { return new (t || StringInitComponent)(); };
StringInitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StringInitComponent, selectors: [["app-string-init"]], inputs: { prefix: "prefix" }, decls: 2, vars: 1, template: function StringInitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.prefix);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb3BlcnR5LWJpbmRpbmcvc3RyaW5nLWluaXQvc3RyaW5nLWluaXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StringInitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-string-init',
                templateUrl: './string-init.component.html',
                styleUrls: ['./string-init.component.scss'],
            }]
    }], function () { return []; }, { prefix: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/svg-in-templates/svg-in-templates.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/svg-in-templates/svg-in-templates.component.ts ***!
  \****************************************************************/
/*! exports provided: SvgInTemplatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgInTemplatesComponent", function() { return SvgInTemplatesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SvgInTemplatesComponent {
    constructor() {
        this.fillColor = 'rgb(200, 105, 255)';
    }
    ngOnInit() { }
    changeColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        this.fillColor = `rgb(${r}, ${g}, ${b})`;
    }
}
SvgInTemplatesComponent.ɵfac = function SvgInTemplatesComponent_Factory(t) { return new (t || SvgInTemplatesComponent)(); };
SvgInTemplatesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SvgInTemplatesComponent, selectors: [["app-svg-in-templates"]], decls: 7, vars: 1, consts: [[1, "title"], [1, "svg"], ["x", "0", "y", "0", "width", "100", "height", "100", 1, "svg__btn", 3, "click"], ["x", "120", "y", "50", 1, "svg__text"]], template: function SvgInTemplatesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "SVG in templates");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "rect", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SvgInTemplatesComponent_Template__svg_rect_click_4_listener() { return ctx.changeColor(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "text", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Click the rectangle to change the fill color");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("fill", ctx.fillColor);
    } }, styles: [".svg[_ngcontent-%COMP%] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n.svg__text[_ngcontent-%COMP%] {\n  fill: aliceblue;\n}\n.svg__btn[_ngcontent-%COMP%]:hover, .svg__btn[_ngcontent-%COMP%]:focus, .svg__btn[_ngcontent-%COMP%]:active {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3ZnLWluLXRlbXBsYXRlcy9zdmctaW4tdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtVQUFBLGlCQUFBO0FBQ0o7QUFBSTtFQUNJLGVBQUE7QUFFUjtBQUVRO0VBR0ksZUFBQTtBQUZaIiwiZmlsZSI6InNyYy9hcHAvc3ZnLWluLXRlbXBsYXRlcy9zdmctaW4tdGVtcGxhdGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN2ZyB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICZfX3RleHQge1xyXG4gICAgICAgIGZpbGw6IGFsaWNlYmx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAmX19idG4ge1xyXG4gICAgICAgICY6aG92ZXIsXHJcbiAgICAgICAgJjpmb2N1cyxcclxuICAgICAgICAmOmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SvgInTemplatesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-svg-in-templates',
                templateUrl: './svg-in-templates.component.svg',
                styleUrls: ['./svg-in-templates.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/template-expression-operators/template-expression-operators.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/template-expression-operators/template-expression-operators.component.ts ***!
  \******************************************************************************************/
/*! exports provided: TemplateExpressionOperatorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateExpressionOperatorsComponent", function() { return TemplateExpressionOperatorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = function () { return { name: "Tom", surname: "Souer", age: 10 }; };
const _c1 = function () { return { val1: 1, val2: 2 }; };
const _c2 = function () { return { val1: 1, val2: 2, name: null }; };
const _c3 = function () { return { name: "tom" }; };
class TemplateExpressionOperatorsComponent {
    constructor() {
        this.date = new Date();
        this.item = {};
    }
    ngOnInit() { }
}
TemplateExpressionOperatorsComponent.ɵfac = function TemplateExpressionOperatorsComponent_Factory(t) { return new (t || TemplateExpressionOperatorsComponent)(); };
TemplateExpressionOperatorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateExpressionOperatorsComponent, selectors: [["app-template-expression-operators"]], decls: 14, vars: 25, consts: [[1, "title"]], template: function TemplateExpressionOperatorsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "template expression operators");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "lowercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_1_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate4"](" Pipe Ex: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 10, "Hello"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 12, "Hello"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 14, ctx.date, "longDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0)), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" Safe \"?.\" symbol: ", (tmp_1_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1)) == null ? null : tmp_1_0.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c1).name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c2).name == null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2).name.amount, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Non-null accertion operator \"!.\": ", "null".toUpperCase(), " ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3).name.toUpperCase(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("The item's undeclared best by date is: ", ctx.item.bestByDate, "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlLWV4cHJlc3Npb24tb3BlcmF0b3JzL3RlbXBsYXRlLWV4cHJlc3Npb24tb3BlcmF0b3JzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateExpressionOperatorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template-expression-operators',
                templateUrl: './template-expression-operators.component.html',
                styleUrls: ['./template-expression-operators.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/template-ref-vars/template-ref-vars.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/template-ref-vars/template-ref-vars.component.ts ***!
  \******************************************************************/
/*! exports provided: TemplateRefVarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRefVarsComponent", function() { return TemplateRefVarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



class TemplateRefVarsComponent {
    constructor() {
        this.submitMessage = 'Please enter name!';
    }
    ngOnInit() { }
    callPhone(number) {
        alert('Calling: ' + number);
    }
    onSubmit(form) {
        console.dir(form, { depth: null });
    }
}
TemplateRefVarsComponent.ɵfac = function TemplateRefVarsComponent_Factory(t) { return new (t || TemplateRefVarsComponent)(); };
TemplateRefVarsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateRefVarsComponent, selectors: [["app-template-ref-vars"]], decls: 20, vars: 2, consts: [[1, "title"], ["placeholder", "phone number"], ["phone", ""], [3, "click"], [3, "ngSubmit"], ["itemForm", "ngForm"], ["for", "name"], ["name", "name", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit"], [3, "hidden"], ["placeholder", "fax number"], ["fax", ""]], template: function TemplateRefVarsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Template reference variables");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateRefVarsComponent_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return ctx.callPhone(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TemplateRefVarsComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateRefVarsComponent_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17); return ctx.callPhone(_r2.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Call");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", _r1.form.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.submitMessage);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlLXJlZi12YXJzL3RlbXBsYXRlLXJlZi12YXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateRefVarsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template-ref-vars',
                templateUrl: './template-ref-vars.component.html',
                styleUrls: ['./template-ref-vars.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/template-statements/template-statements.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/template-statements/template-statements.component.ts ***!
  \**********************************************************************/
/*! exports provided: TemplateStatementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateStatementsComponent", function() { return TemplateStatementsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




function TemplateStatementsComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateStatementsComponent_li_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const hero_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.remove(hero_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r2.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r2.id, " ");
} }
class TemplateStatementsComponent {
    constructor() {
        this.heros = [
            { id: 1, name: 'Will', job: 'Dancer' },
            { id: 2, name: 'Will', job: 'Dancer' },
            { id: 3, name: 'Will', job: 'Dancer' },
            { id: 4, name: 'Will', job: 'Dancer' },
        ];
        this.joe = 'Tom';
    }
    ngOnInit() { }
    remove(hero) {
        this.heros.splice(this.heros.indexOf(hero), 1);
    }
    onSave(e) {
        console.log(e);
    }
    onSubmit(f) {
        console.log(f.value);
        console.log(this.joe);
    }
}
TemplateStatementsComponent.ɵfac = function TemplateStatementsComponent_Factory(t) { return new (t || TemplateStatementsComponent)(); };
TemplateStatementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateStatementsComponent, selectors: [["app-template-statements"]], decls: 18, vars: 2, consts: [[4, "ngFor", "ngForOf"], [3, "click"], ["novalidate", "", 3, "ngSubmit"], ["heroForm", "ngForm"], ["ngModelGroup", "personal"], ["type", "text", "placeholder", "name", "name", "name", "ngModel", ""], ["type", "text", "placeholder", "job", "name", "job", "ngModel", ""], ["ngModelGroup", "more"], ["type", "text", "placeholder", "name", "name", "var", "ngModel", ""], ["type", "text", "placeholder", "job", "name", "DOM", "ngModel", ""], ["ngModelGroup", "Two-Way"], ["type", "text", "placeholder", "name", "name", "var", 3, "ngModel", "ngModelChange"]], template: function TemplateStatementsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Hero Table:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TemplateStatementsComponent_li_3_Template, 5, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateStatementsComponent_Template_button_click_4_listener($event) { return ctx.onSave($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TemplateStatementsComponent_Template_form_ngSubmit_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.onSubmit(_r1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fieldset", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TemplateStatementsComponent_Template_input_ngModelChange_15_listener($event) { return ctx.joe = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.heros);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.joe);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"]], styles: ["fieldset[_ngcontent-%COMP%] {\n  border: none;\n  padding: 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGUtc3RhdGVtZW50cy90ZW1wbGF0ZS1zdGF0ZW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZS1zdGF0ZW1lbnRzL3RlbXBsYXRlLXN0YXRlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmaWVsZHNldCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateStatementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-template-statements',
                templateUrl: './template-statements.component.html',
                styleUrls: ['./template-statements.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/two-way-binding/sizer/sizer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/two-way-binding/sizer/sizer.component.ts ***!
  \**********************************************************/
/*! exports provided: SizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizerComponent", function() { return SizerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SizerComponent {
    constructor() {
        this.sizeChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
    dec() {
        this.resize(-1);
    }
    inc() {
        this.resize(+1);
    }
    resize(delta) {
        this.size = Math.min(40, Math.max(8, +this.size + delta));
        this.sizeChange.emit(this.size);
    }
}
SizerComponent.ɵfac = function SizerComponent_Factory(t) { return new (t || SizerComponent)(); };
SizerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SizerComponent, selectors: [["app-sizer"]], inputs: { size: "size" }, outputs: { sizeChange: "sizeChange" }, decls: 7, vars: 3, consts: [["title", "smaller", 3, "click"], ["title", "bigger", 3, "click"]], template: function SizerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizerComponent_Template_button_click_1_listener() { return ctx.dec(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SizerComponent_Template_button_click_3_listener() { return ctx.inc(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.size, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("FontSize: ", ctx.size, "px");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3by13YXktYmluZGluZy9zaXplci9zaXplci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SizerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sizer',
                templateUrl: './sizer.component.html',
                styleUrls: ['./sizer.component.scss'],
            }]
    }], function () { return []; }, { size: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], sizeChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/two-way-binding/two-way-binding.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/two-way-binding/two-way-binding.component.ts ***!
  \**************************************************************/
/*! exports provided: TwoWayBindingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoWayBindingComponent", function() { return TwoWayBindingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sizer_sizer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sizer/sizer.component */ "./src/app/two-way-binding/sizer/sizer.component.ts");



class TwoWayBindingComponent {
    constructor() {
        this.fontSizePx = 16;
    }
    ngOnInit() { }
}
TwoWayBindingComponent.ɵfac = function TwoWayBindingComponent_Factory(t) { return new (t || TwoWayBindingComponent)(); };
TwoWayBindingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TwoWayBindingComponent, selectors: [["app-two-way-binding"]], decls: 10, vars: 4, consts: [[1, "title"], [3, "size", "sizeChange"]], template: function TwoWayBindingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Two-way binding");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-sizer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sizeChange", function TwoWayBindingComponent_Template_app_sizer_sizeChange_2_listener($event) { return ctx.fontSizePx = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Resizable Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "app-sizer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sizeChange", function TwoWayBindingComponent_Template_app_sizer_sizeChange_5_listener($event) { return ctx.fontSizePx = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Follow x --> xChange syntax (word Change is important in two way binding)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.fontSizePx);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("font-size", ctx.fontSizePx, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx.fontSizePx);
    } }, directives: [_sizer_sizer_component__WEBPACK_IMPORTED_MODULE_1__["SizerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3R3by13YXktYmluZGluZy90d28td2F5LWJpbmRpbmcuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TwoWayBindingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-two-way-binding',
                templateUrl: './two-way-binding.component.html',
                styleUrls: ['./two-way-binding.component.scss'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Front End\JS\angular\fundamentals\1_components-&-templates\template-syntax [done]\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map