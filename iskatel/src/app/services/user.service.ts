import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class UserService {

  public items: FirebaseListObservable<any[]>;


  public constructor(private af: AngularFire) {
    this.items = af.database.list('/user');

  }

  public addItem(value: ReserveService):void{
    this.items.push(value);

    // this.services.push({
    //   type: "cleaning",
    //   name: "CleaningServices",
    //   city: "Kiev",
    //   address: "Mykhaila Drahomanova St, 46"
    // });
  }

  public deleteItem(key: string): void{
    this.items.remove(key);
  }

}
