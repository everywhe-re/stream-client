import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { PlayerComponent } from './player/player.component';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { SharedModule } from './shared/shared.module';
import { AuthState } from './state/auth/auth.state';
import { ChatState } from './state/chat/chat.state';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    HomeComponent,
    StreamComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    NgxsModule.forRoot([ AuthState, ChatState ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot({
      key: ['auth.emailForSignIn']
    }),
    SharedModule.forRoot(),
    ChatModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
