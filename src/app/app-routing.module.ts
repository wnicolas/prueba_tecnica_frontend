import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadrangularesComponent } from './cuadrangulares/cuadrangulares.component';
import { PartidosComponent } from './partidos/partidos.component';

const routes: Routes = [
  {
    path: '',
    component: CuadrangularesComponent,
  },
  {
    path: 'partidos',
    component: PartidosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
