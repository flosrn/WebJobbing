import { PhotoModalPage } from './photo-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PhotoModalPage,
  ],
  imports: [
    IonicPageModule.forChild(PhotoModalPage),
  ],
  exports: [
    PhotoModalPage
  ]
})

export class PhotoModalPageModule { }
