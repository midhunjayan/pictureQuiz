import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-image',
  templateUrl: 'image.component.html',
  styleUrls: ['image.component.scss'],
})

export class ImageComponent implements OnInit, OnChanges  {
  @Input() imageDetails: any;

  public url: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.url = '../../../assets/img/'+this.imageDetails.path;
  }

   ngOnChanges(changes: SimpleChanges) {
     this.url = '../../../assets/img/'+this.imageDetails.path;
    // for (let propName in changes) {  
    //     let change = changes[propName];
        
    //     let curVal  = JSON.stringify(change.currentValue);
    //     let prevVal = JSON.stringify(change.previousValue);
    //    this.newChange(curVal);
    // }
  }

  newChange(val: any){
    this.url = '../../../assets/img/'+this.imageDetails.path;
  }
}
