import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNg
import { PrimeNgModule } from './prime-ng/prime-ng.module';


import { CuadrangularesComponent } from './cuadrangulares/cuadrangulares.component';

@NgModule({
  declarations: [AppComponent, CuadrangularesComponent],
  imports: [BrowserModule, AppRoutingModule, PrimeNgModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
