import { Action, Selector, State, StateContext } from '@ngxs/store';
import { ConfirmLogin, RequestLoginLink, UpdateDisplayName, UpdateUser } from './auth.actions';
import { AuthStateModel } from './auth.model';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { User } from 'firebase';

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    user: null,
    emailForSignIn: null
  }
})
export class AuthState {

  @Selector()
  static user(state: AuthStateModel) { return state.user; }

  @Selector()
  static emailForSignIn(state: AuthStateModel) { return state.emailForSignIn; }


  constructor(private afAuth: AngularFireAuth,
              private router: Router) {}


  @Action(RequestLoginLink)
  async requestLoginLink(ctx: StateContext<AuthStateModel>, action: RequestLoginLink) {
    // Send link to email
    await this.afAuth.auth.sendSignInLinkToEmail(action.email, environment.actionCodeSettings);

    // Set email in store and local storage
    ctx.patchState({
      emailForSignIn: action.email
    });

    // Navigate to login requested page
    this.router.navigate(['/auth/requested']);
  }

  @Action(ConfirmLogin)
  async confirmLogin(ctx: StateContext<AuthStateModel>) {
    // Get current url
    const url = this.router.url;

    if (!this.afAuth.auth.isSignInWithEmailLink(url)) {
      return;
    }

    // Get email stored in local storage
    let email = window.localStorage.getItem('emailForSignIn');

    // If missing email, prompt user for it
    if (!email) {
      email = window.prompt('Please provide your email for confirmation');
    }

    // Sign in user and remove the email from localStorage
    const result = await this.afAuth.auth.signInWithEmailLink(email, url);

    // Update user and remove email from store and local storage
    ctx.patchState({
      user: result.user,
      emailForSignIn: null
    });

    console.log('Successfully logged in', result);

    // Prompt user for display name if not set
    // otherwise redirect to dashboard
    if (!result.user.displayName) {
      this.router.navigate(['/auth/displayName']);
    } else {
      this.router.navigate(['/']);
    }
  }

  @Action(UpdateDisplayName)
  async updateDisplayName(ctx: StateContext<AuthStateModel>, action: UpdateDisplayName) {
    // Get user from auth state
    const user = ctx.getState().user;

    // User is not logged in
    if (!user) {
      return;
    }

    // Update user
    await user.updateProfile({
      displayName: action.displayName,
      photoURL: ctx.getState().user.photoURL
    });
  }

  @Action(UpdateUser)
  async updateUser(ctx: StateContext<AuthStateModel>) {
    this.afAuth.user.subscribe((user: User) => {
      ctx.patchState({
        user: this.afAuth.auth.currentUser
      });
    });
  }

}
