import { RequestModalPage } from './request-modal';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {EmojiPickerComponentModule} from "../../components/emoji-picker/emoji-picker.module";
import {EmojiProvider} from "../../providers/emoji";

@NgModule({
  declarations: [
    RequestModalPage,
  ],
  imports: [
    IonicPageModule.forChild(RequestModalPage),
    EmojiPickerComponentModule,
  ],
  exports: [
    RequestModalPage,
  ],
  providers:[
    EmojiProvider
  ]
})

export class RequestModalPageModule { }
