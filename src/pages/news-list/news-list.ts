import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, AlertController, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { Network } from '@ionic-native/network'

import { News } from '../../Models/News.interface';
/**
 * Generated class for the NewsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-list',
  templateUrl: 'news-list.html',
  providers: [Network]
})
export class NewsListPage {
  news: News[] = null;

  NewsListRef: FirebaseListObservable<News[]>;
  loading = null;

  constructor(public loadingCtrl: LoadingController, private network: Network, private event: Events, private viewCtrl: ViewController, private alertCtrl: AlertController, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.NewsListRef = this.database.list('NewsList');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsListPage');
  }

  newsDetails(news) {
    this.navCtrl.push('NewsDetailsPage', { news: news });
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
    this.NewsListRef.subscribe((items) => {
      console.log(items);
      if (Object.keys(items).length == 0) {
        this.news = null;
      } else {
        this.news = items;
        this.news.reverse();
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

}
