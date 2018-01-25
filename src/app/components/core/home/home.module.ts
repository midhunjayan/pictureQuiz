import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeComponent }     from './home.component';


@NgModule({
    imports: [
        BrowserModule,
        NgbModule
    ],
    declarations: [
        HomeComponent
    ],
    bootstrap: [HomeComponent]
})

export class HomeModule { }
