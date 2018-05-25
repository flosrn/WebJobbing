import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { Ionic2Rating } from './ionic2-rating';
export var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        Ionic2Rating
                    ],
                    exports: [
                        Ionic2Rating
                    ],
                    imports: [
                        CommonModule,
                        IonicModule
                    ],
                    schemas: [
                        CUSTOM_ELEMENTS_SCHEMA
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map