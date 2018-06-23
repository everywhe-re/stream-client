import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'str-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  @Input() source: string;


  constructor() {
  }


  ngOnInit() {
  }

}
