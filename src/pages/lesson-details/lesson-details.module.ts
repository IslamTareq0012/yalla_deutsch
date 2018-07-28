import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LessonDetailsPage } from './lesson-details';
import { YoutubePipe } from '../../pipes/youtube/youtube';
@NgModule({
  declarations: [
    LessonDetailsPage,
    YoutubePipe
  ],
  imports: [
    IonicPageModule.forChild(LessonDetailsPage),
  ],
})
export class LessonDetailsPageModule { }
