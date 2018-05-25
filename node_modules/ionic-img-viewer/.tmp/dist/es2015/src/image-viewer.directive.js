import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { ImageViewerController } from './image-viewer.controller';
var ImageViewerDirective = (function () {
    function ImageViewerDirective(_el, imageViewerCtrl) {
        this._el = _el;
        this.imageViewerCtrl = imageViewerCtrl;
        this.close = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[imageViewer]'
                },] },
    ];
    /** @nocollapse */
    ImageViewerDirective.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: ImageViewerController, },
    ]; };
    ImageViewerDirective.propDecorators = {
        "src": [{ type: Input, args: ['imageViewer',] },],
        "close": [{ type: Output },],
        "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    };
    return ImageViewerDirective;
}());
export { ImageViewerDirective };
//# sourceMappingURL=image-viewer.directive.js.map