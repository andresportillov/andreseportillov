import { RouterModule, Routes } from '@angular/router';
import {InformacionComponent} from './informacion/informacion.component'
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    {path: 'Test', component: HomeComponent},
    { path: 'info', component: InformacionComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'Test' }
  ];
  
  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);