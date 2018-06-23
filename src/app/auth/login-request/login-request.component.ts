import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ConfirmLogin, RequestLoginLink } from '../../state/auth/auth.actions';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'str-login-request',
  templateUrl: './login-request.component.html',
  styleUrls: ['./login-request.component.scss']
})
export class LoginRequestComponent implements OnInit {

  email: string;
  busy: boolean;

  errorMessage: string;


  constructor(private store: Store,
              private router: Router,
              private afAuth: AngularFireAuth) {
  }


  ngOnInit() {
    // Get current url
    const url = this.router.url;

    // Confirm login
    if (this.afAuth.auth.isSignInWithEmailLink(url)) {
      this.busy = true;
      this.store.dispatch(new ConfirmLogin());
    }
  }


  requestLogin() {
    console.log('Requesting login link using email', this.email);

    this.busy = true;
    this.store.dispatch(new RequestLoginLink(this.email));
  }

}
