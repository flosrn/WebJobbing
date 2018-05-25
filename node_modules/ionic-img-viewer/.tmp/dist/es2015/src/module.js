import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ImageViewerDirective } from './image-viewer.directive';
import { ImageViewerComponent } from './image-viewer.component';
import { ImageViewerController } from './image-viewer.controller';
var IonicImageViewerModule = (function () {
    function IonicImageViewerModule() {
    }
    IonicImageViewerModule.decorators = [
        { type: NgModule, args: [{
                    imports: [IonicModule],
                    declarations: [
                        ImageViewerComponent,
                        ImageViewerDirective
                    ],
                    providers: [ImageViewerController],
                    exports: [ImageViewerDirective],
                    entryComponents: [ImageViewerComponent]
                },] },
    ];
    /** @nocollapse */
    IonicImageViewerModule.ctorParameters = function () { return []; };
    return IonicImageViewerModule;
}());
export { IonicImageViewerModule };
//# sourceMappingURL=module.js.map