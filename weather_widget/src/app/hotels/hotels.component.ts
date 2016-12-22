import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-hotels',
    templateUrl: './hotels.component.html',
    styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
    @Input() public currentHotel: Hotel;
    @Input() public hotels: Hotel[];

    @Output()
    public choseCurrentHotel: EventEmitter<{Hotel}> = new EventEmitter();

    public selectedHotel: number = 0;
    public country: string;
    public activatedCountry: number;

    ngOnInit() {
    }

    public chose(hotel: {Hotel}): void {
        this.choseCurrentHotel.emit(hotel);
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

