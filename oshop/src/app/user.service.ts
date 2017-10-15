import { AppUser } from './models/app-user';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, } from 'angularfire2/database/database';
import * as firebase from 'firebase';
import { FirebaseObjectObservable } from 'angularfire2/Database';

@Injectable()
export class UserService {

  constructor(private db:AngularFireDatabase) { }
  save(user:firebase.User){
    this.db.object('/users/'+user.uid).update({
      name:user.displayName,
      email:user.email
    })
  }
  get(uid:string): FirebaseObjectObservable<AppUser>{
    return this.db.object('/users/'+uid);
  }

}
