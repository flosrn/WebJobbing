import { Animation } from 'ionic-angular';
var ImageViewerSrcAnimation = (function () {
    function ImageViewerSrcAnimation(platform, image) {
        this.element = image.nativeElement;
        this.imageAnimation = new Animation(platform, image);
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
export { ImageViewerSrcAnimation };
//# sourceMappingURL=image-viewer-src-animation.js.map