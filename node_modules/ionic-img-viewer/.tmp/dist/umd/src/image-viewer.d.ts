import { DeepLinker, App, Config } from 'ionic-angular';
import { Overlay } from 'ionic-angular/navigation/overlay';
import { OverlayProxy } from 'ionic-angular/navigation/overlay-proxy';
import { ImageViewerComponent } from './image-viewer.component';
export declare class ImageViewer extends OverlayProxy {
    private opts;
    constructor(app: App, component: typeof ImageViewerComponent, opts: ImageViewerOptions, config: Config, deepLinker: DeepLinker);
    getImplementation(): Overlay;
}
export interface ImageViewerOptions {
    enableBackdropDismiss?: boolean;
    image?: string;
    fullResImage?: string;
    position?: ClientRect;
    onCloseCallback?: Function;
}
