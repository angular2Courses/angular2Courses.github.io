import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public currentHotel: Hotel;
  public hotels: Hotel[];

  public constructor() {
    this.hotels = [
      {
        name: "Twiga Bungalows ",
        weather: {
          weather: 25,
          water_temp: 21
        },
        big_img: "../../assets/img/1.jpg",
        small_img: "../../assets/img/b1.jpg",
        place: "Egypt"
      },
      {
        name: "Royal Grand Sharm",
        weather: {
          weather: 30,
          water_temp: 22
        },
        big_img: "../../assets/img/2.jpg",
        small_img: "../../assets/img/b2.jpg",
        place: "Egypt"
      },
      {
        name: "Dragon Beach Resort",
        weather: {
          weather: 28,
          water_temp: 17
        },
        big_img: "../../assets/img/3.jpg",
        small_img: "../../assets/img/b3.jpg",
        place: "Thailand"
      },
      {
        name: "Desert Rose",
        weather: {
          weather: 23,
          water_temp: 18
        },
        big_img: "../../assets/img/4.jpg",
        small_img: "../../assets/img/b4.jpg",
        place: "Egypt"
      },
      {
        name: "Club Koggala Village",
        weather: {
          weather: 24,
          water_temp: 17
        },
        big_img: "../../assets/img/5.jpg",
        small_img: "../../assets/img/b5.jpg",
        place: "Thailand"
      },
      {
        name: "Albatros Aqua Blu Resort",
        weather: {
          weather: 27,
          water_temp: 20
        },
        big_img: "../../assets/img/6.jpg",
        small_img: "../../assets/img/b6.jpg",
        place: "Turkish"
      },
      {
        name: "Golden Tulip Khatt",
        weather: {
          weather: 22,
          water_temp: 16
        },
        big_img: "../../assets/img/7.jpg",
        small_img: "../../assets/img/b7.jpg",
        place: "Turkish"
      }
    ];
    this.currentHotel = this.hotels[0];
  }

}