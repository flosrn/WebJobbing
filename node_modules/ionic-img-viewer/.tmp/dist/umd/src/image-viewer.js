var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "ionic-angular/navigation/overlay-proxy", "./image-viewer-impl"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var overlay_proxy_1 = require("ionic-angular/navigation/overlay-proxy");
    var image_viewer_impl_1 = require("./image-viewer-impl");
    var ImageViewer = (function (_super) {
        __extends(ImageViewer, _super);
        function ImageViewer(app, component, opts, config, deepLinker) {
            if (opts === void 0) { opts = {}; }
            var _this = _super.call(this, app, component, config, deepLinker) || this;
            _this.opts = opts;
            return _this;
        }
        ImageViewer.prototype.getImplementation = function () {
            return new image_viewer_impl_1.ImageViewerImpl(this._app, this._component, this.opts, this._config);
        };
        return ImageViewer;
    }(overlay_proxy_1.OverlayProxy));
    exports.ImageViewer = ImageViewer;
});
//# sourceMappingURL=image-viewer.js.map