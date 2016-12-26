import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HotelsComponent } from './hotels/hotels.component';
import { WeatherComponent } from './weather/weather.component';
import { HotelTwitterComponent } from './hotel-twitter/hotel-twitter.component';
import { CountryFilterPipe } from './filtres/country-filter.pipe';
import { HotelService } from './services/hotel.service';

@NgModule({
  declarations: [
    AppComponent,
    HotelsComponent,
    WeatherComponent,
    HotelTwitterComponent,
    CountryFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})

export class AppModule { }
