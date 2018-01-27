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
  public audio: any;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.url = '../../../assets/audio/'+this.audioDetails.path;
    this.createAudio();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.createAudio();
  }

  public createAudio(){
    this.url = '../../../assets/audio/'+this.audioDetails.path;
    this.audio = new Audio();
    this.audio.src = '../../../assets/audio/'+this.audioDetails.path;
    this.audio.load();
    // auto-start
    this.audio.play();
  }

  public playAudioAgain(){
    this.audio.play();
  }

  ngOnDestroy() {
    // destroy audio here
    if(this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }
}
