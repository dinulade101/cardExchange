import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getAllUsers(){
    return this.afd.list('/users/');
  }
  getUserByID(uniqueID: string){
    return this.afd.list('/users/'+uniqueID);
  }
  //hint use the unique ID from firebase
  addUserSocial(name: string){
    let key = this.afd.list('/usersSocial/').push({
      name: name
    }).key;
    return key;
  }

  addUserBusiness(name: string){
    let key = this.afd.list('/usersBusiness/').push({
      name: name
    }).key;
    return key;
  }

  addSocialTwitter(key: string, twitterID: string){
    this.afd.object('/usersSocial/'+key+'/twitter').set(twitterID).then(_ => console.log('set twitter'));
  }
  addSocialSnapchat(key: string, snapchatID: string){
    this.afd.object('/usersSocial/'+key+'/snapchat').set(snapchatID).then(_ => console.log('set snapchat'));
  }
  addSocialInstagram(key: string, instagramID: string){
    this.afd.object('/usersSocial/'+key+'/instagram').set(instagramID).then(_ => console.log('set instagram'));
  }
  addSocialfb(key: string, fbID: string){
    this.afd.object('/usersSocial/'+key+'/fb').set(fbID).then(_ => console.log('set fb'));
  }
  addSocialVSCO(key: string, vscoID: string){
    this.afd.object('/usersSocial/'+key+'/vsco').set(vscoID).then(_ => console.log('set vsco'));
  }

}
