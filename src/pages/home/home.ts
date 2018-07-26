import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  showSocialIcons() {
    var gridDiv = document.querySelector(".social_icons");
    console.log("grid socials style", gridDiv.style);

    if (gridDiv.style.maxHeight) {
      gridDiv.style.maxHeight = null;
    } else {
      gridDiv.style.maxHeight = gridDiv.scrollHeight + "px";
    }
    //var i;

    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function () {
    //     this.classList.toggle("active");
    //     var content = this.nextElementSibling;
    //     if (content.style.maxHeight) {
    //       content.style.maxHeight = null;
    //     } else {
    //       content.style.maxHeight = content.scrollHeight + "px";
    //     }
    //   });
    // }
  }
}

