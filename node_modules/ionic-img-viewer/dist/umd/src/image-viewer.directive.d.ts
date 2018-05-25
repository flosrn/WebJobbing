import { ElementRef, EventEmitter } from '@angular/core';
import { ImageViewerController } from './image-viewer.controller';
export declare class ImageViewerDirective {
    private _el;
    private imageViewerCtrl;
    src: string;
    close: EventEmitter<{}>;
    constructor(_el: ElementRef, imageViewerCtrl: ImageViewerController);
    onClick(event: Event): void;
}
