import {Component, OnInit, Input} from '@angular/core';

import { HotelService } from '../services/hotel.service';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
    @Input() public currentHotel: Hotel;
    @Input() public hotels: Hotel[];

    public selectedHotel: number = 0;
    public country: string;
    public activatedCountry: number;

    ngOnInit() {
    }

    public constructor(private _hotelService: HotelService){

    }

    public chose(hotel: Hotel): void {
        this._hotelService.changeHotel(hotel);
    }

    public selectHotel(index: number):void {
        this.selectedHotel = index;
    }

    public changeCountry(nameCountry:string):void{
        this.selectHotel(0);
        this.country = nameCountry;
    }

    public toogleActiveCountry(newValue: number): void{
        this.activatedCountry = newValue;
    }
}

