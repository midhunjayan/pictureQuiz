import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-audio',
  templateUrl: 'audio.component.html',
  styleUrls: ['audio.component.scss'],
})

export class AudioComponent implements OnInit, OnChanges  {
  @Input() audioDetails: any;

  public url: string;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.url = '../../../assets/audio/'+this.audioDetails.path;
  }

   ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
        let change = changes[propName];
        
        let curVal  = JSON.stringify(change.currentValue);
        let prevVal = JSON.stringify(change.previousValue);
       this.newChange(curVal);
    }
  }

  newChange(val: any){
    this.url = '../../../assets/audio/'+this.audioDetails.path;
  }
}
