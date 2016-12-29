import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public signupForm:FormGroup;

  public constructor(){
    this.signupForm = new FormGroup({
      firstname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      lastname: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      email: new FormControl('', this.emailValidation),
      password: new FormControl('', Validators.compose([Validators.required, Validators.minLength(3)])),
      phone: new FormControl('', this.phoneValidation)
    })
  }

  public submitForm(value: {[key: string]: string}) {
    console.log(value);
  }

  public phoneValidation(control: FormControl): {[key:string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/);
    return valid ? null : {phone: true}
  }

  public emailValidation(control: FormControl): {[key:string]: boolean} {
    const value = control.value || '';
    const valid = value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return valid ? null : {phone: true}
  }
}


