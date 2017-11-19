import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { FirebaseProvider } from './../../providers/firebase/firebase';

/**
 * Generated class for the LaunchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-launch',
  templateUrl: 'launch.html',
})
export class LaunchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    let socialKey = this.firebaseProvider.addUserSocial("Dinula De Silva");
    let buisnessKey = this.firebaseProvider.addUserBusiness("Dinula De Silva");
    //console.log(socialKey);
    //console.log(buisnessKey);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPage');
  }

  loginToFacebook(){
    this.navCtrl.push(HomePage);
  }

}
