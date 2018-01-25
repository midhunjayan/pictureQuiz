import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-highcharts';

import { HomeModule } from './components/core/home/home.module';
import { QuizModule } from './components/core/quiz/quiz.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/core/header/header.component';
import { FooterComponent } from './components/core/footer/footer.component';

import { ApiService } from './components/shared/services/api.service';

import { AppRouting } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ChartModule.forRoot(require('highcharts')),
        HomeModule,
        QuizModule,
        AppRouting,
    ],
    providers: [ApiService],
    bootstrap: [AppComponent]
})

export class AppModule { }
