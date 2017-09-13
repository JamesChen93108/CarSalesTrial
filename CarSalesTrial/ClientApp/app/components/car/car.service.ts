import { Injectable } from '@angular/core';
import { Car } from './car';
import { CAR_ITEMS } from './car-data';

@Injectable()
export class CarService {
    private carItems = CAR_ITEMS;

    getCarFromData(): Car[] {
        return this.carItems;
    }

    getCars(): Promise<Car[]> {
        return Promise.resolve(CAR_ITEMS);
    }

    addCar(car: Car) {
        if (car.id == null)
        {
            car.id = this.carItems.length + 1;
        }
        this.carItems = this.carItems.filter(object => object.id !== car.id);
        this.carItems.push(car);
    }

    getCar(id: number): Promise<Car> {
        return this.getCars()
            .then(cars => this.carItems.find(car => car.id === id));
    }
}