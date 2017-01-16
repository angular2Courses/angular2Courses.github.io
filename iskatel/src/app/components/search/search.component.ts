import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../../services/services.service';
import { FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  // public signupForm:FormGroup;

  public services: FirebaseListObservable<Service[]>;
  public type: string;
  public city: string;
  public currentService: Service;
  public showReserve: boolean;

  public constructor(private _servicesService: ServicesService){
    this.services = _servicesService.services;

    // this.signupForm = new FormGroup({
    //   firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)]))
    // })
  }

  public changeCurrentService(service: Service): void{
    this.currentService = service;
  }

  // public submitForm(value: {[key: string]: string}): void {
  //   this._userService.addItem(value);
  //   this.signupForm.reset();
  // }
  //
  // public deleteItem(key: string): void{
  //   this._userService.deleteItem(key);
  // }

  public ngOnInit() {
  }

}
