import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NFC, Ndef } from '@ionic-native/nfc';


//sharebyNFC(message);

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  imageURI:any;
  imageFileName:any;

  readingTag:   boolean   = false;
  writingTag:   boolean   = false;
  isWriting:    boolean   = false;
  ndefMsg:      string    = '';
//  subscriptions: Array<Subscription> = new Array<Subscription>();


  constructor(
    public navCtrl: NavController,
    private camera: Camera) {}

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
