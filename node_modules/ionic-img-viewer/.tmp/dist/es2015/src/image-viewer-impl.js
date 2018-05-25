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
import { delay, zip } from 'rxjs/operators';
import { ViewController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { ImageViewerEnter, ImageViewerLeave } from './image-viewer-transitions';
var ImageViewerImpl = (function (_super) {
    __extends(ImageViewerImpl, _super);
    function ImageViewerImpl(app, component, opts, config) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, component, opts) || this;
        _this.app = app;
        config.setTransition('image-viewer-enter', ImageViewerEnter);
        config.setTransition('image-viewer-leave', ImageViewerLeave);
        _this.didLeave.subscribe(function () { return opts.onCloseCallback && opts.onCloseCallback(); });
        _this.willEnter.subscribe(function () {
            return _this.handleHighResImageLoad(opts.fullResImage);
        });
        return _this;
    }
    ImageViewerImpl.prototype.getTransitionName = function (direction) {
        return "image-viewer-" + (direction === 'back' ? 'leave' : 'enter');
    };
    ImageViewerImpl.prototype.present = function (navOptions) {
        if (navOptions === void 0) { navOptions = {}; }
        return this.app.present(this, navOptions);
    };
    ImageViewerImpl.prototype.handleHighResImageLoad = function (fullResImage) {
        var _this = this;
        if (!fullResImage) {
            return;
        }
        var image = new Image();
        image.src = fullResImage;
        if (!image.complete) {
            var onLoadObservable = Observable.create(function (obs) {
                image.onload = function () {
                    obs.next(image);
                    obs.complete();
                };
            });
            // We want the animation to finish before replacing the pic
            // as the calculation has been done with the smaller image
            // AND, to avoid a flash if it loads "too quickly", wait at least 300ms after didEnter
            onLoadObservable
                .pipe(zip(this.didEnter.pipe(delay(300))))
                .subscribe(function () {
                return _this.instance.updateImageSrcWithTransition(fullResImage);
            });
        }
        else {
            this.instance.updateImageSrc(fullResImage);
        }
    };
    return ImageViewerImpl;
}(ViewController));
export { ImageViewerImpl };
//# sourceMappingURL=image-viewer-impl.js.map