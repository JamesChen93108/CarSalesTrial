import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CarDetailComponent } from './components/car/car-detail.component';

import { CarService } from './components/car/car.service';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        CarComponent,
        CarDetailComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'car', component: CarComponent },
            { path: 'detail/:id', component: CarDetailComponent },
            { path: 'detail', component: CarDetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [
        CarService
    ]
})
export class AppModuleShared {
}
