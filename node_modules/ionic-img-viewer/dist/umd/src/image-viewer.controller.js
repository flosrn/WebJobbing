var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "ionic-angular", "./image-viewer", "./image-viewer.component"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var ionic_angular_1 = require("ionic-angular");
    var image_viewer_1 = require("./image-viewer");
    var image_viewer_component_1 = require("./image-viewer.component");
    var ImageViewerController = (function () {
        function ImageViewerController(_app, config, deepLinker) {
            this._app = _app;
            this.config = config;
            this.deepLinker = deepLinker;
        }
        /**
         * Create a image-viewer instance to display. See below for options.
         *
         * @param {object} imageElement The image element
         * @param {object} opts ImageViewer options
         */
        /**
           * Create a image-viewer instance to display. See below for options.
           *
           * @param {object} imageElement The image element
           * @param {object} opts ImageViewer options
           */
        ImageViewerController.prototype.create = /**
           * Create a image-viewer instance to display. See below for options.
           *
           * @param {object} imageElement The image element
           * @param {object} opts ImageViewer options
           */
        function (imageElement, opts) {
            if (opts === void 0) { opts = {}; }
            var image = imageElement.src;
            var position = imageElement.getBoundingClientRect();
            var options = __assign({ image: image, position: position }, opts);
            return new image_viewer_1.ImageViewer(this._app, image_viewer_component_1.ImageViewerComponent, options, this.config, this.deepLinker);
        };
        ImageViewerController.decorators = [
            { type: core_1.Injectable },
        ];
        /** @nocollapse */
        ImageViewerController.ctorParameters = function () { return [
            { type: ionic_angular_1.App, },
            { type: ionic_angular_1.Config, },
            { type: ionic_angular_1.DeepLinker, },
        ]; };
        return ImageViewerController;
    }());
    exports.ImageViewerController = ImageViewerController;
});
//# sourceMappingURL=image-viewer.controller.js.map