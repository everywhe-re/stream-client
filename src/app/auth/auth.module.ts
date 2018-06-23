import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRequestComponent } from './login-request/login-request.component';
import { RouterModule } from '@angular/router';
import { AUTH_ROUTES } from './auth.routes';
import { DisplayNamePromptComponent } from './display-name-prompt/display-name-prompt.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRequestedComponent } from './login-requested/login-requested.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AUTH_ROUTES),
    SharedModule
  ],
  declarations: [
    LoginRequestComponent,
    DisplayNamePromptComponent,
    LoginRequestedComponent,
  ]
})
export class AuthModule { }
