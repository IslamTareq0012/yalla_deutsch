import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonsListPage } from './lessons-list';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    LessonsListPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonsListPage),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBjFwdUFZuRuf8IAvEAOO5QUGOQnwc-J9Y",
      authDomain: "yalla-ddeutsch.firebaseapp.com",
      databaseURL: "https://yalla-ddeutsch.firebaseio.com",
      projectId: "yalla-ddeutsch",
      storageBucket: "yalla-ddeutsch.appspot.com",
      messagingSenderId: "932234677411"
    })
  ],
})
export class LessonsListPageModule { }
