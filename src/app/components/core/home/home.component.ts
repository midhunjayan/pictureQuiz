import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { sections } from '../../shared/data/sections';

@Component({
  selector: 'home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss'],
})

export class HomeComponent {

  public testList: Array<object>;

  constructor(private router: Router) {
    this.testList = sections;
  }

  public goToQuiz(id: number) {
    this.router.navigate(['quiz/', id, 1]);
  }

}
