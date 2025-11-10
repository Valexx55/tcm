import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '@shared-lib';
import { StoreModule } from '@ngrx/store';
import { cartReducer, CartState } from '@core-lib';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HeaderComponent,
      StoreModule.forRoot({ carrito: cartReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
