
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { HomePage } from '../home/home';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Storage } from '@ionic/storage';
import { Platform } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider, public plt: Platform, private storage: Storage) {
    var state;
    var socialKey;
    var buisnessKey;
    storage.get('state').then((val) => {
      state = val;
      console.log(val);
      if (state=='1'){
        console.log("state 1");

      }
      else{
        console.log("state 0");
        storage.set('state', '1');

        socialKey = this.firebaseProvider.addUserSocial("Dinula De Silva");
        buisnessKey = this.firebaseProvider.addUserBusiness("Dinula De Silva");

        storage.set('socialKey', socialKey);
        storage.set('buisnessKey', buisnessKey);
        console.log(socialKey);
        console.log(buisnessKey);
      }
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

  //this.plt.ready().then((readySource) => {
    //   console.log('Platform ready from', readySource);
       /*this.nativeStorage.getItem('alreadyLogged').then(
         data => {
           state = data;
           //advanceFromLoggedIn();
           setTimeout(function() {
             if (state==1){
               console.log("hello state =1 ");
               this.nativeStorage.setItem('alreadyLogged', 0);
             }
             else{
               console.log("hello state =0 ");
               let socialKey = this.firebaseProvider.addUserSocial("Dinula De Silva");
               let buisnessKey = this.firebaseProvider.addUserBusiness("Dinula De Silva");
               console.log(socialKey);
               console.log(buisnessKey);

               this.nativeStorage.setItem('alreadyLogged', 1);
               this.nativeStorage.setItem('myKeys', {socialKey: socialKey, buisnessKey: buisnessKey}).then(
                 () => console.log('Stored item'),
                 error => console.log('Error storing data', error)
               );
             }
          }, 10000);

         },
         error => console.log(error)
       );
     });
*/

}
