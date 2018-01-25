import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/core/home/home.component';
import { QuizComponent } from './components/core/quiz/quiz.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect URL
  { path: 'home', component: HomeComponent },
  { path: 'quiz/:id/:qId', component: QuizComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRouting { }
