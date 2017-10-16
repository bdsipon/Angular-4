import { AngularFireDatabase } from 'angularfire2/database/database';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor(private db:AngularFireDatabase) { }

  getCategories(){
    return this.db.list('/categories',{
query:{
  orderByChild:'name'
}
    })
  }

}
