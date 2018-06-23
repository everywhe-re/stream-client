import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare const shaka: any;

@Component({
  selector: 'str-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @ViewChild('video') video: ElementRef;

  @Input() source: string;

  private player: any;

  constructor() {
  }


  ngOnInit() {
    // Install built-in polyfills to patch browser incompatibilities
    shaka.polyfill.installAll();

    // Check to see if the browser supports the basic APIs Shaka needs.
    if (shaka.Player.isBrowserSupported()) {
      this.initPlayer();
    } else {
      // Browser does not have the minimum set of APIs we need.
      console.error('Browser not supported!');
    }
  }


  private initPlayer() {
    // Create a Player instance.
    this.player = new shaka.Player(this.video.nativeElement);

    // Listen for error events.
    this.player.addEventListener('error', (event) => this.onError(event.detail));

    this.play();
  }

  private play() {
    // Try to load a manifest.
    // This is an asynchronous process.
    this.player.load(this.source).then(function() {
      // This runs if the asynchronous load is successful.
      console.log('The video has now been loaded!');
    }).catch(this.onError);  // onError is executed if the asynchronous load fails.
  }

  private onError(error) {
    console.error('Error code', error.code, 'object', error);
  }

}
