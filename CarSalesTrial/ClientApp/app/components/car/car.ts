import { Vehicle } from '../vehicle/vehicle';

export class Car extends Vehicle {
    doors: number;
    type: CarType;
}

export enum CarType {
    hatchback = 0,
    sedan = 1
}