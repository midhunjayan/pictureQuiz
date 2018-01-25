import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.scss'],
})

export class ImageComponent implements OnInit {
  @Input() imageDetails: any;

  public url: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    console.log(this.imageDetails)
    this.url = '../../../assets/img/'+this.imageDetails.path;
  }
}
