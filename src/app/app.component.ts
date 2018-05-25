import { Component } from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  //platform: any;
  rootPage:string;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, keyboard: Keyboard) {

    // this.auth.getAuthenticatedUser().subscribe(auth => {
    //   !auth ?
    //   this.rootPage = 'LoginPage' : this.rootPage = 'MessagePage';
    // })


    platform.ready().then(() => {
      
      // this.rootPage = 'WelcomePage';  
      this.rootPage = 'WelcomePage';      

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //keyboard.disableScroll(false);
      
      statusBar.styleDefault();
      splashScreen.hide();

    //   if (this.platform.is('ios')) {
    //     keyboard.disableScroll(true);
    // }
    });
  }
}

