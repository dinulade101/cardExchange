import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LaunchPage } from '../pages/launch/launch';
import { PreferencesPage } from '../pages/preferences/preferences'
import { AppPreferences } from '@ionic-native/app-preferences';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { Camera } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';
import { NFC, Ndef } from '@ionic-native/nfc';



export const firebaseConfig = {
  apiKey: "AIzaSyDSoOiB3gKwe0W9RPqBaI-jBkxW85n99FE",
  authDomain: "cardexchange-d080b.firebaseapp.com",
  databaseURL: "https://cardexchange-d080b.firebaseio.com",
  storageBucket: "cardexchange-d080b.appspot.com",
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LaunchPage,
    PreferencesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LaunchPage,
    PreferencesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AppPreferences,
    FirebaseProvider,
    NFC,
    Ndef,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}
