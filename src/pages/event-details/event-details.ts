import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evvents } from '../../Models/Events.interface';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
  constructor(private iab: InAppBrowser, public navCtrl: NavController, public navParams: NavParams) {
    this.event = {} as Evvents
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    this.event = this.navParams.get('event');
  }
  viewLocation(lat, lng, address) {
    this.navCtrl.push('LocationPage', { lat: lat, lng: lng, address: address });
  }
  openEventForm(link){
    const browser = this.iab.create(link);
    
  }

}
