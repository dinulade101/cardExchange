import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppPreferences } from '@ionic-native/app-preferences';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private appPreferences: AppPreferences) {

  }

}
