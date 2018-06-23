import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthState } from './state/auth/auth.state';
import { SetUser } from './state/auth/auth.actions';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'str-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user$: Observable<User>;


  constructor(private store: Store,
              private afAuth: AngularFireAuth) {
    this.user$ = this.store.select(AuthState.user);
  }


  ngOnInit() {
    // Set user
    this.afAuth.authState
      .subscribe((user: User) => this.store.dispatch(new SetUser(user)));
  }

}
