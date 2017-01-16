import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { DatePickerModule } from 'ng2-datepicker';

import {AngularFireModule} from 'angularfire2';
import {firebaseConfig} from '../environments/firebase.config';

import {AppComponent} from './app.component';
import { SearchComponent } from './components/search/search.component';
import { ReservedComponent } from './components/reserved/reserved.component';
import { ServiceDetailComponent } from './components/servicedetail/servicedetail.component';
import { ReserveComponent } from './components/reserve/reserve.component';

import { UserService } from './services/user.service';
import { ServicesService } from './services/services.service';

import { AppRoutingModule }     from './app-routing.module';
import { TypePipe } from './filtres/type.pipe';
import { CityPipe } from './filtres/city.pipe';



@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ReservedComponent,
        TypePipe,
        CityPipe,
        ServiceDetailComponent,
        ReserveComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(firebaseConfig),
        ReactiveFormsModule,
        AppRoutingModule,
        DatePickerModule
    ],
    providers: [UserService, ServicesService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
