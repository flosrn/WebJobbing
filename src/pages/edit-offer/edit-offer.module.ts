import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditOfferPage } from './edit-offer';

@NgModule({
  declarations: [
    EditOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(EditOfferPage),
  ],
})
export class EditOfferPageModule {}
