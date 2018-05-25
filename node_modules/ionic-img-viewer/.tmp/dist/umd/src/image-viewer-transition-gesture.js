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
        define(["require", "exports", "ionic-angular", "ionic-angular/util/dom"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ionic_angular_1 = require("ionic-angular");
    var dom_1 = require("ionic-angular/util/dom");
    var HAMMER_THRESHOLD = 10;
    var MAX_ATTACK_ANGLE = 45;
    var DRAG_THRESHOLD = 70;
    var ImageViewerTransitionGesture = (function (_super) {
        __extends(ImageViewerTransitionGesture, _super);
        function ImageViewerTransitionGesture(platform, component, domCtrl, renderer, cb) {
            var _this = _super.call(this, platform, component.getNativeElement(), {
                maxAngle: MAX_ATTACK_ANGLE,
                threshold: HAMMER_THRESHOLD,
                gesture: component._gestureCtrl.createGesture({ name: 'image-viewer' }),
                direction: 'y',
                domController: domCtrl
            }) || this;
            _this.component = component;
            _this.renderer = renderer;
            _this.cb = cb;
            _this.translationY = 0;
            _this.imageContainer = component.getNativeElement().querySelector('.image');
            _this.backdrop = component.getNativeElement().querySelector('ion-backdrop');
            _this.listen();
            return _this;
        }
        // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
        // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
        ImageViewerTransitionGesture.prototype.isPinching = 
        // As we handle both pinch and drag, we have to make sure we don't drag when we are trying to pinch
        function (ev) {
            return ev.touches && ev.touches.length > 1;
        };
        ImageViewerTransitionGesture.prototype.onDragStart = function (ev) {
            ev.preventDefault();
            if (this.isPinching(ev)) {
                this.abort(ev);
            }
            var coord = dom_1.pointerCoord(ev);
            this.startY = coord.y;
            return true;
        };
        ImageViewerTransitionGesture.prototype.canStart = function (ev) {
            return !this.component.isZoomed && !this.isPinching(ev);
        };
        ImageViewerTransitionGesture.prototype.onDragMove = function (ev) {
            var _this = this;
            if (this.isPinching(ev)) {
                this.abort(ev);
            }
            var coord = dom_1.pointerCoord(ev);
            this.translationY = coord.y - this.startY;
            this.opacity = Math.max(1 - Math.abs(this.translationY) / (10 * DRAG_THRESHOLD), .5);
            this.plt.raf(function () {
                _this.renderer.setElementStyle(_this.imageContainer, _this.plt.Css.transform, "translateY(" + _this.translationY + "px)");
                _this.renderer.setElementStyle(_this.backdrop, 'opacity', _this.opacity.toString());
            });
            return true;
        };
        ImageViewerTransitionGesture.prototype.onDragEnd = function (ev) {
            if (Math.abs(this.translationY) > DRAG_THRESHOLD) {
                this.cb();
            }
            else {
                var imageContainerAnimation = new ionic_angular_1.Animation(this.plt, this.imageContainer);
                var backdropAnimation = new ionic_angular_1.Animation(this.plt, this.backdrop);
                backdropAnimation.fromTo('opacity', this.opacity, '1');
                imageContainerAnimation.fromTo('translateY', this.translationY + "px", '0px');
                new ionic_angular_1.Animation(this.plt)
                    .easing('ease-in')
                    .duration(150)
                    .add(backdropAnimation)
                    .add(imageContainerAnimation)
                    .play();
            }
            return true;
        };
        return ImageViewerTransitionGesture;
    }(ionic_angular_1.PanGesture));
    exports.ImageViewerTransitionGesture = ImageViewerTransitionGesture;
});
//# sourceMappingURL=image-viewer-transition-gesture.js.map