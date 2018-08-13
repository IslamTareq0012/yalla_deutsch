import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FCM } from '@ionic-native/fcm';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Network } from '@ionic-native/network';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { Clipboard } from '@ionic-native/clipboard';
import { Device } from '@ionic-native/device';
import { NativeStorage } from '@ionic-native/native-storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBjFwdUFZuRuf8IAvEAOO5QUGOQnwc-J9Y",
      authDomain: "yalla-ddeutsch.firebaseapp.com",
      databaseURL: "https://yalla-ddeutsch.firebaseio.com",
      projectId: "yalla-ddeutsch",
      storageBucket: "yalla-ddeutsch.appspot.com",
      messagingSenderId: "932234677411"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    FCM,
    Network,
    LaunchNavigator,
    Clipboard,
    Device,
    NativeStorage
  ]
})
export class AppModule { }
