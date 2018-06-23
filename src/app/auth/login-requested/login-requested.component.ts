import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '../../state/auth/auth.state';
import { Store } from '@ngxs/store';

@Component({
  selector: 'str-login-requested',
  templateUrl: './login-requested.component.html',
  styleUrls: ['./login-requested.component.scss']
})
export class LoginRequestedComponent {

  emailForSignIn$: Observable<string>;


  constructor(private store: Store) {
    this.emailForSignIn$ = this.store.select(AuthState.emailForSignIn);
  }

}
