import { Component } from '@angular/core';
import { Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(private toastCtrl: ToastController, private network: Network, private events: Events, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.network.onDisconnect().subscribe(data => {
      this.events.publish('RESPONSE:ERROR', data);
      console.log("disconnected !");
    }, error => {
      console.log(error);
    });
    if (this.network.type == "none") {
      this.events.publish('RESPONSE:ERROR', null);
    }
    this.subcribeEvents();

  }

  private subcribeEvents() {

    this.events.subscribe('RESPONSE:ERROR', (error: any) => {
      this.handleErrors();
    });
  }
  private handleErrors() {

    let toast = this.toastCtrl.create({
      message: 'No Internet Connection',
      position: 'buttom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
    this.network.onConnect().subscribe(data => {
      toast.dismiss();
    }, error => {
      console.log(error);
    });
  }

}


