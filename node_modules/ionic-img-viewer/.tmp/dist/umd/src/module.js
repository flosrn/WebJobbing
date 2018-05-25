(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "ionic-angular", "./image-viewer.directive", "./image-viewer.component", "./image-viewer.controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var ionic_angular_1 = require("ionic-angular");
    var image_viewer_directive_1 = require("./image-viewer.directive");
    var image_viewer_component_1 = require("./image-viewer.component");
    var image_viewer_controller_1 = require("./image-viewer.controller");
    var IonicImageViewerModule = (function () {
        function IonicImageViewerModule() {
        }
        IonicImageViewerModule.decorators = [
            { type: core_1.NgModule, args: [{
                        imports: [ionic_angular_1.IonicModule],
                        declarations: [
                            image_viewer_component_1.ImageViewerComponent,
                            image_viewer_directive_1.ImageViewerDirective
                        ],
                        providers: [image_viewer_controller_1.ImageViewerController],
                        exports: [image_viewer_directive_1.ImageViewerDirective],
                        entryComponents: [image_viewer_component_1.ImageViewerComponent]
                    },] },
        ];
        /** @nocollapse */
        IonicImageViewerModule.ctorParameters = function () { return []; };
        return IonicImageViewerModule;
    }());
    exports.IonicImageViewerModule = IonicImageViewerModule;
});
//# sourceMappingURL=module.js.map