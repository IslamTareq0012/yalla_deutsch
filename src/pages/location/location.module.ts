import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationPage } from './location';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    LocationPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA3F55Y59yqNae7kpfW0KsS_TLmhLjmOaA'
    })
  ],
})
export class LocationPageModule { }
