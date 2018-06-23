import { Routes } from '@angular/router';
import { LoginRequestComponent } from './login-request/login-request.component';
import { LoginRequestedComponent } from './login-requested/login-requested.component';
import { DisplayNamePromptComponent } from './display-name-prompt/display-name-prompt.component';

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginRequestComponent
  },
  {
    path: 'requested',
    component: LoginRequestedComponent
  },
  {
    path: 'displayName',
    component: DisplayNamePromptComponent
  }
];
