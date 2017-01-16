import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService {

  public services: FirebaseListObservable<any[]>;

  public constructor(private af: AngularFire) {
    this.services = af.database.list('/services');
  }

  public getService(name: string): Observable<Service>{
    return this.services.map(
        (services: Service[]) => services.find(
            ( service: Service ) => service.name === name)
    );
  }

}
