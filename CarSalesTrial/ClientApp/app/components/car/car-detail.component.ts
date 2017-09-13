import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Car } from './car';
import { CarService } from './car.service';

@Component({
    templateUrl: './car-detail.component.html'
})

export class CarDetailComponent implements OnInit {
    id: any;
    car: Car;

    constructor(
        private carService: CarService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = +params['id'];
        });

        if (isNaN(this.id)) {
            this.car = new Car();
            return;
        }
        else {
            this.route.paramMap
                .switchMap((params: ParamMap) => this.carService.getCar(+params.get('id')))
                .subscribe(car => this.car = car);
        }
    }

    saveCar(car: Car) {
        this.carService.addCar(car);
        this.location.back();
    }
}