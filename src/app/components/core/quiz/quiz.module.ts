import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';

import { QuizComponent }  from './quiz.component';
import { ImageComponent } from '../../shared/image/image.component';
import { AudioComponent } from '../../shared/audio/audio.component';

@NgModule({
    imports: [
        BrowserModule,
        RouterModule
    ],
    declarations: [
        QuizComponent,
        ImageComponent,
        AudioComponent
    ],
    bootstrap: [QuizComponent]
})

export class QuizModule { }
