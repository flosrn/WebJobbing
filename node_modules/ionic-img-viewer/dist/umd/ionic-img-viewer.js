(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./src/module", "./src/image-viewer.component", "./src/image-viewer.directive", "./src/image-viewer.controller", "./src/image-viewer"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var module_1 = require("./src/module");
    exports.IonicImageViewerModule = module_1.IonicImageViewerModule;
    var image_viewer_component_1 = require("./src/image-viewer.component");
    exports.ImageViewerComponent = image_viewer_component_1.ImageViewerComponent;
    var image_viewer_directive_1 = require("./src/image-viewer.directive");
    exports.ImageViewerDirective = image_viewer_directive_1.ImageViewerDirective;
    var image_viewer_controller_1 = require("./src/image-viewer.controller");
    exports.ImageViewerController = image_viewer_controller_1.ImageViewerController;
    var image_viewer_1 = require("./src/image-viewer");
    exports.ImageViewer = image_viewer_1.ImageViewer;
});
//# sourceMappingURL=ionic-img-viewer.js.map