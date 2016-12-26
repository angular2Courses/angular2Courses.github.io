import { Component } from '@angular/core';
import { HotelService } from './services/hotel.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public currentHotel: Hotel;
  public hotels: Hotel[];
  public checkChangeHotel: Subscription;

  public constructor(private _hotelService: HotelService) {
    this.hotels = _hotelService.getHotels();
    this.currentHotel = _hotelService.currentHotel;

    this.checkChangeHotel = _hotelService.changeCurrentHotel.subscribe((value) => {
      this.currentHotel = value;
    })
  }

  ngOnDestroy() {
    this.checkChangeHotel.unsubscribe();
  }
}