import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { News } from '../../Models/News.interface';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {

  news: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.news = {} as News
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsDetailsPage');
    this.news = this.navParams.get('news');
  }

}
