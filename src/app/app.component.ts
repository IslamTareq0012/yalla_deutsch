import { Component } from '@angular/core';
import { Platform, Events, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { NativeStorage } from '@ionic-native/native-storage';
import { Device } from '@ionic-native/device';
import { FCM } from '@ionic-native/fcm';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = HomePage;
  DeviceListRef: FirebaseListObservable<any[]>;
  DeviceRef: FirebaseObjectObservable<any[]>;
  constructor(private database: AngularFireDatabase, private fcm: FCM, private device: Device, private nativeStorage: NativeStorage, private toastCtrl: ToastController, private network: Network, private events: Events, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

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

    this.nativeStorage.getItem('uuid').then((data) => {
      console.log("device data!", data);
    }).catch(err => {
      console.log("Nothing in local storage");

      this.fcm.getToken().then(token => {
        this.nativeStorage.setItem('uuid', { uuid: device.uuid }).catch(err => {
          console.log("saving device data locally error", err);
        });
        try {
          this.database.database.ref('DevicesList').orderByChild('uuid').equalTo(device.uuid).once("value", (snapshot) => {
            console.log("old data", snapshot.key);
            snapshot.forEach(data => {
              console.log("data key by using uuid", data.key);
              this.DeviceRef = this.database.object('NewsList/' + data.key);
              var newData = {
                fcmToken: token,
                uuid: device.uuid
              }
              newData.fcmToken = token;
              this.DeviceRef.update(newData).catch(err => {
                console.log('adding device data error', err);
              });
              return false;
            });
          });

        } catch (err) {
          console.log("error executing firebase codes", err);
        }
      }).catch(err => {
        console.log("getting token error", err);
      });
    });
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


