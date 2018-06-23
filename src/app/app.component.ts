import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthState } from './state/auth/auth.state';

@Component({
  selector: 'str-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;


  constructor(private store: Store) {
    this.user$ = this.store.select(AuthState.user);
  }


  ngOnInit() {
  }

}
