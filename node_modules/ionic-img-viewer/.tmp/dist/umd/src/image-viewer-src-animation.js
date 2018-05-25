(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "ionic-angular"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ionic_angular_1 = require("ionic-angular");
    var ImageViewerSrcAnimation = (function () {
        function ImageViewerSrcAnimation(platform, image) {
            this.element = image.nativeElement;
            this.imageAnimation = new ionic_angular_1.Animation(platform, image);
        }
        ImageViewerSrcAnimation.prototype.scaleFrom = function (lowResImgWidth) {
            var highResImgWidth = this.element.clientWidth;
            var imageTransition = this.imageAnimation
                .fromTo('scale', lowResImgWidth / highResImgWidth, 1)
                .duration(100)
                .easing('ease-in-out')
                .play();
        };
        return ImageViewerSrcAnimation;
    }());
    exports.ImageViewerSrcAnimation = ImageViewerSrcAnimation;
});
//# sourceMappingURL=image-viewer-src-animation.js.map