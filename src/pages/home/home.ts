import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, AlertController, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Evvents } from '../../Models/Events.interface';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { Network } from '@ionic-native/network';
import { News } from '../../Models/News.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  events: Evvents[] = null;
  news: News[] = null;
  newsAndEvents: any;
  EventsListRef: FirebaseListObservable<Evvents[]>;
  NewsListRef: FirebaseListObservable<News[]>;
  loading = null;
  gridDiv: any;
  constructor(private iab: InAppBrowser, public loadingCtrl: LoadingController, private network: Network, private event: Events, private viewCtrl: ViewController, private alertCtrl: AlertController, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.EventsListRef = this.database.list('EventsList');
    this.NewsListRef = this.database.list('NewsList');

  }
  showSocialIcons() {
    this.gridDiv = document.querySelector(".social_icons");
    console.log("grid socials style", this.gridDiv.style);

    if (this.gridDiv.style.maxHeight) {
      this.gridDiv.style.maxHeight = null;
    } else {
      this.gridDiv.style.maxHeight = this.gridDiv.scrollHeight + "px";
    }
  }
  showFacebook() {
    const browser = this.iab.create('https://www.facebook.com/yalladeutsch');
  }
  showInstagram() {
    const browser = this.iab.create('https://www.instagram.com/yalla_deutsch/');
  }
  openNewsList() {
    this.navCtrl.push('NewsListPage');
  }
  openEventsList() {
    this.navCtrl.push('EventsListPage');
  }
  openLessonsList() {
    this.navCtrl.push('LessonsListPage');
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
        this.events.slice(0, 4);
      }
      this.dismissLoading();
    });
    this.NewsListRef.subscribe((items) => {
      console.log(items);
      if (Object.keys(items).length == 0) {
        this.events = null;
      } else {
        this.news = items;
        this.news.reverse();
        this.news.slice(0, 4);
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

  openEvent(event) {
    this.navCtrl.push('EventDetailsPage', { "event": event });
  }

  openNews(news) {
    this.navCtrl.push('NewsDetailsPage', { 'news': news });
  }

}

