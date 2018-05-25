import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditRequestPage } from './edit-request';

@NgModule({
  declarations: [
    EditRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(EditRequestPage),
  ],
})
export class EditRequestPageModule {}
