import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarType } from './car';
import { CarService } from './car.service';

@Component({
    templateUrl: 'car.component.html'
})

export class CarComponent implements OnInit {
    cars: Car[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.getCars();
    }

    getCars() {
        this.cars = this.carService.getCarFromData();
    }

    getType(type: number) {
        return CarType[type];
    }
}