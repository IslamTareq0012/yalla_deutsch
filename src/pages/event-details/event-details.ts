import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evvents } from '../../Models/Events.interface';

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
})
export class EventDetailsPage {

  event: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.event = {} as Evvents
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsPage');
    this.event = this.navParams.get('event');
  }
  viewLocation(lat, lng, address) {
    this.navCtrl.push('LocationPage', { lat: lat, lng: lng, address: address });
  }

}
