import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StreamComponent } from './stream/stream.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: HomeComponent
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    },
    {
        path: 'stream/:user',
        component: StreamComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];
