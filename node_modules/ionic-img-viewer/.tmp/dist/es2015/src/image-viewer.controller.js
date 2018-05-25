var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import { Injectable } from '@angular/core';
import { App, Config, DeepLinker } from 'ionic-angular';
import { ImageViewer } from './image-viewer';
import { ImageViewerComponent } from './image-viewer.component';
var ImageViewerController = (function () {
    function ImageViewerController(_app, config, deepLinker) {
        this._app = _app;
        this.config = config;
        this.deepLinker = deepLinker;
    }
    /**
     * Create a image-viewer instance to display. See below for options.
     *
     * @param {object} imageElement The image element
     * @param {object} opts ImageViewer options
     */
    /**
       * Create a image-viewer instance to display. See below for options.
       *
       * @param {object} imageElement The image element
       * @param {object} opts ImageViewer options
       */
    ImageViewerController.prototype.create = /**
       * Create a image-viewer instance to display. See below for options.
       *
       * @param {object} imageElement The image element
       * @param {object} opts ImageViewer options
       */
    function (imageElement, opts) {
        if (opts === void 0) { opts = {}; }
        var image = imageElement.src;
        var position = imageElement.getBoundingClientRect();
        var options = __assign({ image: image, position: position }, opts);
        return new ImageViewer(this._app, ImageViewerComponent, options, this.config, this.deepLinker);
    };
    ImageViewerController.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ImageViewerController.ctorParameters = function () { return [
        { type: App, },
        { type: Config, },
        { type: DeepLinker, },
    ]; };
    return ImageViewerController;
}());
export { ImageViewerController };
//# sourceMappingURL=image-viewer.controller.js.map