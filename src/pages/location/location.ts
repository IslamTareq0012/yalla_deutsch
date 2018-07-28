import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-location',
  templateUrl: 'location.html',
})
export class LocationPage {

  lat: any;
  lng: any;
  address:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lat = 0;
    this.lng = 0;
    this.address = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LocationPage');
    this.lat = this.navParams.get('lat');
    this.lng = this.navParams.get('lng');
    this.address= this.navParams.get('address');
  }

}
