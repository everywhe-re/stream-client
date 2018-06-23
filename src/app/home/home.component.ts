import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'str-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public form: FormGroup;


  constructor(private fb: FormBuilder, private router: Router) {
    this.form = fb.group({
      streamerName: ['']
    });
  }


  ngOnInit() {
  }


  submit() {
    const streamerName = this.form.get('streamerName').value;
    this.router.navigate([`/stream/${streamerName}`]);
  }

}
