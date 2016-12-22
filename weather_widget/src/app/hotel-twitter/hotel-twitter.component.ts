import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-twitter',
  templateUrl: './hotel-twitter.component.html',
  styleUrls: ['./hotel-twitter.component.css']
})
export class HotelTwitterComponent implements OnInit {
  @Input()
  public currentHotel: Hotel;

  public constructor() { }

  ngOnInit() {
  }

}
