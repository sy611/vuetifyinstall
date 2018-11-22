"use strict";
var __assign = (this && this.__assign) || function () {
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
exports.__esModule = true;
require("./stylus/app.styl");
var Vuetify_1 = require("./components/Vuetify");
var components = require("./components");
var directives_1 = require("./directives");
var Vuetify = {
    install: function (Vue, args) {
        Vue.use(Vuetify_1["default"], __assign({ components: components,
            directives: directives_1["default"] }, args));
    },
    version: __VUETIFY_VERSION__
};
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Vuetify);
}
exports["default"] = Vuetify;
