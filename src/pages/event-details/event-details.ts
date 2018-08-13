import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ToastController } from 'ionic-angular';
import { Evvents } from '../../Models/Events.interface';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
import { Clipboard } from '@ionic-native/clipboard';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
  providers: [InAppBrowser]

})
export class EventDetailsPage {

  event: any;
  constructor(private toastCtrl: ToastController, private clipboard: Clipboard, public actionSheetCtrl: ActionSheetController, private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams, private launchNavigator: LaunchNavigator) {
    this.event = {} as Evvents
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    this.event = this.navParams.get('event');
  }
  viewLocation(address) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Select An Action',
      buttons: [
        {
          text: 'Copy Address',
          handler: () => {
            this.clipboard.copy(address).then(() => {
              let toast = this.toastCtrl.create({
                message: 'Copied To Clipboard!',
                position: 'buttom',
                duration: 2000
              });
              toast.present();

            }).catch(err => {
              console.log('copy address error', err);
            })
          }
        }, {
          text: 'Show On Map',
          handler: () => {
            let options: LaunchNavigatorOptions = {
              app: this.launchNavigator.APP.GOOGLE_MAPS
            };
            this.launchNavigator.navigate(address, options)
              .then(success => {
                console.log(success);
              }, error => {
                console.log(error);
              });
          }
        }
      ]
    });
    actionSheet.present();
  }
  openEventForm(link) {
    const browser = this.iab.create(link);
  }

}
