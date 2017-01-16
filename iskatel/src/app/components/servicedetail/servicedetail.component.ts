import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location}               from '@angular/common';
import {ServicesService} from '../../services/services.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-servicedetail',
    templateUrl: './servicedetail.component.html',
    styleUrls: ['./servicedetail.component.css']
})
export class ServiceDetailComponent implements OnInit {
    public service: Service;
    public reviews: Review[];
    public showReserve: boolean = false;

    public constructor(private _servicesService: ServicesService,
                       private route: ActivatedRoute,
                       private location: Location) {
    }

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this._servicesService.getService(params['id']))
            .subscribe(service => {
                this.service = service;
                if (service != undefined && service.hasOwnProperty('reviews')){
                    this.reviews = service.reviews;
                } else this.reviews = null;

            });
    }

    public goBack(): void {
        this.location.back();
    }

    public toArray(val){
        return (<any>Object).values(val);
    }
}
