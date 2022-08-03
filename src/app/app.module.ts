import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// PrimeNg
import { PrimeNgModule } from './prime-ng/prime-ng.module';

import { CuadrangularesComponent } from './cuadrangulares/cuadrangulares.component';
import { PartidosComponent } from './partidos/partidos.component';

@NgModule({
  declarations: [AppComponent, CuadrangularesComponent, PartidosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
