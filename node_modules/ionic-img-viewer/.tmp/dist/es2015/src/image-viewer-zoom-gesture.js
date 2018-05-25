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
import { Animation, Gesture } from 'ionic-angular';
import { DIRECTION_HORIZONTAL, DIRECTION_VERTICAL } from 'ionic-angular/gestures/hammer';
var MAX_SCALE = 3;
var ImageViewerZoomGesture = (function (_super) {
    __extends(ImageViewerZoomGesture, _super);
    function ImageViewerZoomGesture(component, element, platform, renderer) {
        var _this = _super.call(this, element.nativeElement) || this;
        _this.component = component;
        _this.platform = platform;
        _this.renderer = renderer;
        _this.adjustScale = 1;
        _this.adjustDeltaX = 0;
        _this.adjustDeltaY = 0;
        _this.currentScale = 1;
        _this.currentDeltaX = 0;
        _this.currentDeltaY = 0;
        _this.allowedXMargin = 0;
        _this.allowedYMargin = 0;
        // Force both directions after super to avoid override allowing only one direction
        // Force both directions after super to avoid override allowing only one direction
        _this.options({ direction: DIRECTION_HORIZONTAL | DIRECTION_VERTICAL });
        _this.listen();
        _this.on('pinch', function (e) { return _this.onPinch(e); });
        _this.on('pinchend', function (e) { return _this.onPinchEnd(e); });
        _this.on('panstart', function (e) { return _this.onPanStart(e); });
        _this.on('pan', function (e) { return _this.onPan(e); });
        _this.on('panend', function (e) { return _this.onPanEnd(e); });
        _this.on('doubletap', function (e) { return _this.onDoubleTap(e); });
        return _this;
    }
    ImageViewerZoomGesture.prototype.onPinch = function (event) {
        this.component.dragGesture.abort(event);
        this.currentScale = Math.max(1, Math.min(MAX_SCALE, this.adjustScale * event.scale));
        this.currentDeltaX = this.adjustDeltaX + (event.deltaX / this.currentScale);
        this.currentDeltaY = this.adjustDeltaY + (event.deltaY / this.currentScale);
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.onPinchEnd = function (event) {
        this.component.isZoomed = (this.currentScale !== 1);
        if (!this.component.isZoomed) {
            new Animation(this.platform, this.element)
                .fromTo('translateX', this.currentDeltaX + "px", '0')
                .fromTo('translateY', this.currentDeltaY + "px", '0')
                .easing('ease-in')
                .duration(50)
                .play();
            this.currentDeltaX = 0;
            this.currentDeltaY = 0;
        }
        // Saving the final transforms for adjustment next time the user interacts.
        this.adjustScale = this.currentScale;
        this.adjustDeltaX = this.currentDeltaX;
        this.adjustDeltaY = this.currentDeltaY;
    };
    ImageViewerZoomGesture.prototype.onPanStart = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        var originalImageWidth = this.element.offsetWidth;
        var originalImageHeight = this.element.offsetHeight;
        this.allowedXMargin = ((originalImageWidth * this.currentScale) - originalImageWidth) / 4;
        this.allowedYMargin = ((originalImageHeight * this.currentScale) - originalImageHeight) / 4;
    };
    ImageViewerZoomGesture.prototype.onPan = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        this.currentDeltaX = this.boundAdjustement(Math.floor(this.adjustDeltaX + event.deltaX / this.currentScale), this.allowedXMargin);
        this.currentDeltaY = this.boundAdjustement(Math.floor(this.adjustDeltaY + event.deltaY / this.currentScale), this.allowedYMargin);
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.boundAdjustement = function (adjustement, bound) {
        if (adjustement > bound || adjustement < -bound) {
            return Math.min(bound, Math.max(adjustement, -bound));
        }
        return adjustement;
    };
    ImageViewerZoomGesture.prototype.onPanEnd = function (event) {
        if (!this.component.isZoomed) {
            return;
        }
        this.adjustDeltaX = this.currentDeltaX;
        this.adjustDeltaY = this.currentDeltaY;
    };
    ImageViewerZoomGesture.prototype.onDoubleTap = function (event) {
        this.component.isZoomed = !this.component.isZoomed;
        if (this.component.isZoomed) {
            this.currentScale = 2;
        }
        else {
            this.currentScale = 1;
            this.adjustDeltaX = this.currentDeltaX = 0;
            this.adjustDeltaY = this.currentDeltaY = 0;
        }
        this.adjustScale = this.currentScale;
        this.setImageContainerTransform();
    };
    ImageViewerZoomGesture.prototype.setImageContainerTransform = function () {
        var transforms = [];
        transforms.push("scale(" + this.currentScale + ")");
        transforms.push("translate(" + this.currentDeltaX + "px, " + this.currentDeltaY + "px)");
        this.renderer.setElementStyle(this.element, this.platform.Css.transform, transforms.join(' '));
    };
    return ImageViewerZoomGesture;
}(Gesture));
export { ImageViewerZoomGesture };
//# sourceMappingURL=image-viewer-zoom-gesture.js.map