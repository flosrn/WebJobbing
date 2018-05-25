(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@angular/core", "./image-viewer.controller"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var core_1 = require("@angular/core");
    var image_viewer_controller_1 = require("./image-viewer.controller");
    var ImageViewerDirective = (function () {
        function ImageViewerDirective(_el, imageViewerCtrl) {
            this._el = _el;
            this.imageViewerCtrl = imageViewerCtrl;
            this.close = new core_1.EventEmitter();
        }
        ImageViewerDirective.prototype.onClick = function (event) {
            var _this = this;
            event.stopPropagation();
            var element = this._el.nativeElement;
            var onCloseCallback = function () { return _this.close.emit(); };
            var imageViewer = this.imageViewerCtrl.create(element, { fullResImage: this.src, onCloseCallback: onCloseCallback });
            imageViewer.present();
        };
        ImageViewerDirective.decorators = [
            { type: core_1.Directive, args: [{
                        selector: '[imageViewer]'
                    },] },
        ];
        /** @nocollapse */
        ImageViewerDirective.ctorParameters = function () { return [
            { type: core_1.ElementRef, },
            { type: image_viewer_controller_1.ImageViewerController, },
        ]; };
        ImageViewerDirective.propDecorators = {
            "src": [{ type: core_1.Input, args: ['imageViewer',] },],
            "close": [{ type: core_1.Output },],
            "onClick": [{ type: core_1.HostListener, args: ['click', ['$event'],] },],
        };
        return ImageViewerDirective;
    }());
    exports.ImageViewerDirective = ImageViewerDirective;
});
//# sourceMappingURL=image-viewer.directive.js.map