import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.css']
})
export class ReserveComponent implements OnInit {
  @Input() public service: Service;
  @Input() public showReserve: boolean;

  @Output() public notShowReserve: EventEmitter<boolean> = new EventEmitter();

  public completeReserve: boolean = false;

  public constructor( private _userService: UserService) {}

  ngOnInit() {

  }

  public changeShowReserve():void{
    this.notShowReserve.emit(false);
  }

  public goReserve(date:string, telNumber:number){
    const reserve: ReserveService = Object.assign({date: date, telNumber: telNumber, status: "in process", key:this.service.$key}, this.service);
    this.completeReserve = true;

    delete reserve['$key'];
    delete reserve['$exists'];
    delete reserve['reviews'];

    this._userService.addItem(reserve);
  }

}

