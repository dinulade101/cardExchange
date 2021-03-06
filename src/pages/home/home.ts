import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NFC, Ndef } from '@ionic-native/nfc';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Storage } from '@ionic/storage';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})



export class HomePage {
  imageURI:any;
  imageFileName:any;
  userProfileInfoSocial: FirebaseListObservable<any[]>;
  userProfileInfoSocialLocal;
  userProfileInfoBuisness: FirebaseListObservable<any[]>;
  userProfileInfoBuisnessLocal: any[];
  readingTag:   boolean   = false;
  writingTag:   boolean   = false;
  isWriting:    boolean   = false;
  ndefMsg:      string    = '';
  socialKey;
  buisnessKey;
  userSocialProfile;
  usersBuisnessProfile;


  constructor(
    public navCtrl: NavController,
    private camera: Camera, private nfc: NFC, private ndef: Ndef, private storage: Storage, public firebaseProvider: FirebaseProvider) {
      storage.get('socialKey').then((val) => {
        this.socialKey = val;
      this.userProfileInfoSocialLocal = this.firebaseProvider.getUserSocialByID(this.socialKey);

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

    sendData() {
      let message = this.ndef.textRecord(socialKey);
      this.nfc.share([message]);
      console.log('successfuly sent message');
      }


    receiveData() {
      this.nfc.addNdefListener(() => {
        console.log('successfully attached ndef listener');
      }, (err) => {
        console.log('error attaching ndef listener', err);
      }).subscribe((event) => {
        console.log('received ndef message. the tag contains: ', event.tag);
        console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
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
