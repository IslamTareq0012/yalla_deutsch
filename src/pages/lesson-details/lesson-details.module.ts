import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonDetailsPage } from './lesson-details';

@NgModule({
  declarations: [
    LessonDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(LessonDetailsPage),
  ],
})
export class LessonDetailsPageModule {}
