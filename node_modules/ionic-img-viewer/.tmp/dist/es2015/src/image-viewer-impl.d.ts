import { App, Config, NavOptions, ViewController } from 'ionic-angular';
import { ImageViewerOptions } from './image-viewer';
import { ImageViewerComponent } from './image-viewer.component';
export declare class ImageViewerImpl extends ViewController {
    private app;
    constructor(app: App, component: ImageViewerComponent, opts: ImageViewerOptions, config: Config);
    getTransitionName(direction: string): string;
    present(navOptions?: NavOptions): Promise<any>;
    private handleHighResImageLoad(fullResImage);
}
