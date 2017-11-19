import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the PreferencesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@IonicPage()
@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  socialAcc;
  usrname;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseProvider: FirebaseProvider,
    public toastCtrl: ToastController
  ) {}

  public presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Account was added successfully!',
      duration: 1000
    });
    toast.present();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PreferencesPage');
  }
  addAccount(){
    var key = "KzIOlJcX70y9opHEk5a";
    if (this.socialAcc == "ig"){
      this.firebaseProvider.addSocialInstagram(key, this.usrname)
    }
    else if (this.socialAcc == "sc"){
      this.firebaseProvider.addSocialSnapchat(key, this.usrname)
    }
    else if (this.socialAcc == "fb"){
      this.firebaseProvider.addSocialfb(key, this.usrname)
    }
    else if (this.socialAcc == "twitter"){
      this.firebaseProvider.addSocialTwitter(key, this.usrname)
    }
    else if (this.socialAcc == "vsco"){
      this.firebaseProvider.addSocialVSCO(key, this.usrname)
    }
    this.presentToast();
  }

}
