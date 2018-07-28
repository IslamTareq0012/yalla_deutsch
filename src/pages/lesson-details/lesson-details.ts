import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Lessons } from '../../Models/Lesson.interface';
/**
 * Generated class for the LessonDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lesson-details',
  templateUrl: 'lesson-details.html',
})
export class LessonDetailsPage {

  lesson: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lesson = {} as Lessons;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LessonDetailsPage');
    this.lesson = this.navParams.get('lesson');
  }

}
