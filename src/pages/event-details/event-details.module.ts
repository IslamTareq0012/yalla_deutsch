import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsPage } from './event-details';
import { DatePipe } from '../../pipes/date/date';
@NgModule({
  declarations: [
    EventDetailsPage,
    DatePipe
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsPage)
  ],
})
export class EventDetailsPageModule { }
