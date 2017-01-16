import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-reserved',
  templateUrl: './reserved.component.html',
  styleUrls: ['./reserved.component.css']
})
export class ReservedComponent implements OnInit {
  public reserveServices: FirebaseListObservable<ReserveService[]>;

  public constructor(private _userService: UserService) {
    this.reserveServices = _userService.items;
  }

  ngOnInit() {
  }

}
