import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from "angularfire2/database";
import { FormsModule } from '@angular/forms';
import { Camera } from '@ionic-native/camera';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { IonicStorageModule } from '@ionic/storage';
// import { AutoHideDirective } from "../directives/auto-hide/auto-hide";
import { DirectivesModule } from '../directives/directives.module';
import { PhotoViewer } from '@ionic-native/photo-viewer'; 
import { EmailComposer } from '@ionic-native/email-composer';
import { EmojiProvider } from '../providers/emoji';


import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from "./app.firebase.config";
import { AuthService } from "../providers/auth/auth.service";
import { DataService } from "../providers/data/data.service";
import { ChatService } from './../providers/chat/chat.services';
import { RequestListService } from '../providers/request/request-list.services';
import { OfferListService } from '../providers/offer/offer-list.services';  
import { CommentListService } from '../providers/comment/comment-list.services'; 
import { ResponseListService } from '../providers/response/response-list.services';
import { ToastService2 } from '../providers/toast/toast.services';
import { PhotoService } from '../providers/photo/photo.services';
import { ToastService } from '../providers/util/toast.service';
import { AlertService } from '../providers/util/alert.service';
import { CameraService } from '../providers/util/camera.service';




@NgModule({
  declarations: [
    MyApp,
    // RequestModalPage,
    // AutoHideDirective
    
  ],
  imports: [
  BrowserModule,
    HttpModule,
    FormsModule,
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    DirectivesModule,

    
    IonicModule.forRoot(MyApp, {
      scrollAssist: false,
      autoFocusAssist: false,
      
      platforms : {
        ios : {
          scrollAssist: false,   
          autoFocusAssist: false 
        }
      }   
    },
    
  )],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // RequestModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataService,
    ChatService,
    RequestListService, 
    OfferListService,
    CommentListService,
    ResponseListService,
    ToastService,
    AlertService,
    PhotoService,
    Camera,
    Keyboard,
    Geolocation,
    IonicStorageModule,
    PhotoViewer,
    EmailComposer,
    ToastService2,
    CameraService,
    EmojiProvider,
  ]
})
export class AppModule {}
