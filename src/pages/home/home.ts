import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NFC, Ndef } from '@ionic-native/nfc';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  imageURI:any;
  imageFileName:any;

  constructor(
    private nfc: NFC, private ndef: Ndef,
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
    this.nfc.addNdefListener(() => {
      console.log('successfully attached ndef listener');
    }, (err) => {
      console.log('error attaching ndef listener', err);
    }).subscribe((event) => {
      console.log('received ndef message. the tag contains: ', event.tag);
      console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));

      // let message = this.ndef.textRecord('Hello world');
      // this.nfc.share([message]).then(onSuccess).catch(onError);
    });
  }
}
