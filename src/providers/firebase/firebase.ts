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
  getUserBusinessByID(uniqueID: string){
    return this.afd.list('/usersBusiness/'+uniqueID);
  }
  getUserSocialByID(uniqueID: string){
    return this.afd.list('/usersSocial/'+uniqueID);
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
  /*
  addUserSocial(name: string){
    this.afd.list('/usersBuisness/'+uniqueID).set({
      name: name
    });
  }
  */

}
