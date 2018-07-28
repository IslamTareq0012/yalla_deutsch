import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, AlertController, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { Evvents } from '../../Models/Events.interface';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { Network } from '@ionic-native/network'

/**
 * Generated class for the EventsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list.html',
  providers: [Network]
})
export class EventsListPage {
  events: Evvents[] = null;
  EventsListRef: FirebaseListObservable<Evvents[]>;
  loading = null;
  constructor(public loadingCtrl: LoadingController, private network: Network, private event: Events, private viewCtrl: ViewController, private alertCtrl: AlertController, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.EventsListRef = this.database.list('EventsList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventsListPage');
  }

  ionViewWillEnter() {
    this.network.onConnect().subscribe(data => {
      this.getData();
    }, error => {
      console.log(error);
    });
    this.getData();
  }
  getData() {
    this.showLoading();
    this.EventsListRef.subscribe((items) => {
      console.log(items);
      if (Object.keys(items).length == 0) {
        this.events = null;
      } else {
        this.events = items;
        this.events.reverse();
      }
      this.dismissLoading();
    });
  }
  showLoading() {
    if (!this.loading) {
      this.loading = this.loadingCtrl.create({
        spinner: 'dots',
        content: 'Please Wait...',
        duration: 5000

      });
      this.loading.present();
    }
  }
  dismissLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  eventDetails(event) {
    this.navCtrl.push('EventDetailsPage', { "event": event });
  }

}
