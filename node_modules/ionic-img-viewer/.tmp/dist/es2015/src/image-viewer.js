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
import { OverlayProxy } from 'ionic-angular/navigation/overlay-proxy';
import { ImageViewerImpl } from './image-viewer-impl';
var ImageViewer = (function (_super) {
    __extends(ImageViewer, _super);
    function ImageViewer(app, component, opts, config, deepLinker) {
        if (opts === void 0) { opts = {}; }
        var _this = _super.call(this, app, component, config, deepLinker) || this;
        _this.opts = opts;
        return _this;
    }
    ImageViewer.prototype.getImplementation = function () {
        return new ImageViewerImpl(this._app, this._component, this.opts, this._config);
    };
    return ImageViewer;
}(OverlayProxy));
export { ImageViewer };
//# sourceMappingURL=image-viewer.js.map