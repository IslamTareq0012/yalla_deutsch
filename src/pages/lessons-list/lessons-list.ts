import { Component } from '@angular/core';
import { Events, IonicPage, NavController, NavParams, AlertController, ViewController, ModalController, LoadingController } from 'ionic-angular';
import { FirebaseObjectObservable, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { Network } from '@ionic-native/network'

import { Lessons } from '../../Models/Lesson.interface';
/**
 * Generated class for the LessonsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lessons-list',
  templateUrl: 'lessons-list.html',
  providers: [Network]
})
export class LessonsListPage {
  lessons: Lessons[] = null;
  LessonsListRef: FirebaseListObservable<Lessons[]>;
  loading = null;
  constructor(public loadingCtrl: LoadingController, private network: Network, private event: Events, private viewCtrl: ViewController, private alertCtrl: AlertController, private database: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private modalCtrl: ModalController) {
    this.LessonsListRef = this.database.list('LessonsList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsListPage');
  }
  lessonDetails(lesson) {
    this.navCtrl.push('LessonDetailsPage', { lesson: lesson });
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
    this.LessonsListRef.subscribe((items) => {
      console.log(items);
      if (Object.keys(items).length == 0) {
        this.lessons = null;
      } else {
        this.lessons = items;
        this.lessons.reverse();
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
