import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { QuizComponent }     from './quiz.component';
import { ImageComponent } from '../../shared/image/image.component';
@NgModule({
    imports: [
        BrowserModule,
    ],
    declarations: [
        QuizComponent,
        ImageComponent
    ],
    bootstrap: [QuizComponent]
})

export class QuizModule { }
