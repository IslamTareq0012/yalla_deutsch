import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gridDiv: any;
  constructor(public navCtrl: NavController, private iab: InAppBrowser) {

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
  openNewsList(){
    this.navCtrl.push('NewsListPage');
  }
  openEventsList(){
    this.navCtrl.push('EventsListPage');
  }
  openLessonsList(){
    this.navCtrl.push('LessonsListPage');
  }
}

