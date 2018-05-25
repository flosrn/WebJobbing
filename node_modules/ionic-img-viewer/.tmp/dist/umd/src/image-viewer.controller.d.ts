import { App, Config, DeepLinker } from 'ionic-angular';
import { ImageViewerOptions, ImageViewer } from './image-viewer';
export declare class ImageViewerController {
    private _app;
    config: Config;
    private deepLinker;
    constructor(_app: App, config: Config, deepLinker: DeepLinker);
    /**
     * Create a image-viewer instance to display. See below for options.
     *
     * @param {object} imageElement The image element
     * @param {object} opts ImageViewer options
     */
    create(imageElement: any, opts?: ImageViewerOptions): ImageViewer;
}
