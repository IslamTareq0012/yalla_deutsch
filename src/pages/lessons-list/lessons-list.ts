import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
})
export class LessonsListPage {

  lessons = [{ title: "event" }, { title: "event title" }, { title: "other one" }];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonsListPage');
  }
  lessonDetails() {
    this.navCtrl.push('LessonDetailsPage');
  }

}
