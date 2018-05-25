"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var elastic_directive_1 = require("./elastic.directive");
var ElasticModule = /** @class */ (function () {
    function ElasticModule() {
    }
    ElasticModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [elastic_directive_1.ElasticDirective],
                    exports: [elastic_directive_1.ElasticDirective]
                },] },
    ];
    /** @nocollapse */
    ElasticModule.ctorParameters = function () { return []; };
    return ElasticModule;
}());
exports.ElasticModule = ElasticModule;
