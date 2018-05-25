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
        define(["require", "exports", "ionic-angular"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ionic_angular_1 = require("ionic-angular");
    var ImageViewerEnter = (function (_super) {
        __extends(ImageViewerEnter, _super);
        function ImageViewerEnter() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageViewerEnter.prototype.init = function () {
            var css = this.plt.Css;
            var ele = this.enteringView.pageRef().nativeElement;
            var imgElement = ele.querySelector('img');
            var backdropElement = ele.querySelector('ion-backdrop');
            var fromPosition = this.enteringView.data.position;
            var toPosition = imgElement.getBoundingClientRect();
            var flipS = fromPosition.width / toPosition.width;
            var flipY = fromPosition.top - toPosition.top;
            var flipX = fromPosition.left - toPosition.left;
            var backdrop = new ionic_angular_1.Animation(this.plt, backdropElement);
            var image = new ionic_angular_1.Animation(this.plt, imgElement);
            // Using `Animation.beforeStyles()` here does not seems to work
            imgElement.style[css.transformOrigin] = '0 0';
            image.fromTo('translateY', flipY + "px", '0px')
                .fromTo('translateX', flipX + "px", '0px')
                .fromTo('scale', flipS, 1)
                .afterClearStyles([css.transformOrigin]);
            backdrop.fromTo('opacity', 0.01, 1);
            this.easing('ease-in-out')
                .duration(150)
                .add(backdrop)
                .add(image);
            var enteringPageEle = this.enteringView.pageRef().nativeElement;
            var enteringNavbarEle = enteringPageEle.querySelector('ion-navbar');
            var enteringBackBtnEle = enteringPageEle.querySelector('.back-button');
            var enteringNavBar = new ionic_angular_1.Animation(this.plt, enteringNavbarEle);
            enteringNavBar.afterAddClass('show-navbar');
            this.add(enteringNavBar);
            var enteringBackButton = new ionic_angular_1.Animation(this.plt, enteringBackBtnEle);
            this.add(enteringBackButton);
            enteringBackButton.afterAddClass('show-back-button');
        };
        return ImageViewerEnter;
    }(ionic_angular_1.Transition));
    exports.ImageViewerEnter = ImageViewerEnter;
    var ImageViewerLeave = (function (_super) {
        __extends(ImageViewerLeave, _super);
        function ImageViewerLeave() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ImageViewerLeave.prototype.init = function () {
            var css = this.plt.Css;
            var ele = this.leavingView.pageRef().nativeElement;
            var imgElement = ele.querySelector('img');
            var backdropElement = ele.querySelector('ion-backdrop');
            var toPosition = this.leavingView.data.position;
            var fromPosition = imgElement.getBoundingClientRect();
            var flipS = toPosition.width / fromPosition.width;
            var flipY = toPosition.top - fromPosition.top;
            var flipX = toPosition.left - fromPosition.left;
            var backdropOpacity = backdropElement.style['opacity'];
            var backdrop = new ionic_angular_1.Animation(this.plt, backdropElement);
            var image = new ionic_angular_1.Animation(this.plt, imgElement);
            image.fromTo('translateY', 0 + "px", flipY + "px")
                .fromTo('translateX', "0px", flipX + "px")
                .fromTo('scale', 1, flipS)
                .beforeStyles((_a = {}, _a[css.transformOrigin] = '0 0', _a))
                .afterClearStyles([css.transformOrigin]);
            backdrop.fromTo('opacity', backdropOpacity, 0);
            this.easing('ease-in-out')
                .duration(150)
                .add(backdrop)
                .add(image);
            var _a;
        };
        return ImageViewerLeave;
    }(ionic_angular_1.Transition));
    exports.ImageViewerLeave = ImageViewerLeave;
});
//# sourceMappingURL=image-viewer-transitions.js.map