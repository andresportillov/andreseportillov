import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//ngrx
import {StoreModule} from '@ngrx/store'
import {APP_ROUTING} from "./app.routes";
import { HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { contadorVisitas } from './ngrx/contador.visitas';
import { InformacionComponent } from './informacion/informacion.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({count: contadorVisitas}),
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
