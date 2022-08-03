import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

// PrimeNg
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { CuadrangularesComponent } from './cuadrangulares/cuadrangulares.component';

@NgModule({
  declarations: [AppComponent, CuadrangularesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimeNgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
