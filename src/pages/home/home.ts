import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NFC, Ndef } from '@ionic-native/nfc';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


//sharebyNFC(message);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  imageURI:any;
  imageFileName:any;
  userProfileInfoSocial: FirebaseListObservable<any[]>;
  userProfileInfoBuisness: FirebaseListObservable<any[]>;
  readingTag:   boolean   = false;
  writingTag:   boolean   = false;
  isWriting:    boolean   = false;
  ndefMsg:      string    = '';
  socialKey;
  buisnessKey;
  userSocialProfile;
  usersBuisnessProfile;
//  subscriptions: Array<Subscription> = new Array<Subscription>();


  constructor(

    public navCtrl: NavController,
    private camera: Camera, private storage: Storage, public firebaseProvider: FirebaseProvider) {
      storage.get('socialKey').then((val) => {
        this.socialKey = val;
        this.firebaseProvider.getUserSocialByID(this.socialKey).subscribe(x=>{
        //  this.userProfileInfoSocial = x;
        });

      });
      storage.get('buisnessKey').then((val) => {
        this.buisnessKey = val;
        console.log(this.buisnessKey);

        this.firebaseProvider.getUserBusinessByID(this.buisnessKey).subscribe(x=>{
          this.usersBuisnessProfile = x;
          console.log(this.usersBuisnessProfile);
        });
      });


    }

    getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageURI = imageData;
    }, (err) => {
      console.log(err);
    });
  }
}
