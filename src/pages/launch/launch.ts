
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';

var state;

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public nativeStorage: NativeStorage, public plt: Platform) {

    this.plt.ready().then((readySource) => {
         console.log('Platform ready from', readySource);
         this.nativeStorage.getItem('alreadyLogged').then(
           data => {
             state = data;
             //advanceFromLoggedIn();
             setTimeout(function() {this.advanceFromLoggedIn(); }, 10000);

           },
           error => console.log(error)
         );
       });

  }

  public advanceFromLoggedIn(){
    /*if (state==1){
      console.log("hello state =1 ");
    }
    else{
      console.log("hello state =0 ");
      let socialKey = this.firebaseProvider.addUserSocial("Dinula De Silva");
      let buisnessKey = this.firebaseProvider.addUserBusiness("Dinula De Silva");
      console.log(socialKey);
      console.log(buisnessKey);

      //this.nativeStorage.setItem('alreadyLogged', 1);
    }*/
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LaunchPage');

  }

  loginToFacebook(){
    this.navCtrl.push(HomePage);
  }

}
