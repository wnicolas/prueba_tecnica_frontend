import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuadrangularesComponent } from './cuadrangulares/cuadrangulares.component';
import { PartidosComponent } from './partidos/partidos.component';

const routes: Routes = [
  {
    path: '',
    component: CuadrangularesComponent,
    pathMatch: 'full',
  },
  {
    path: 'cuadrangular',
    component: PartidosComponent,
    pathMatch: 'full',
  },
  { path: 'cuadrangular/:id', component: PartidosComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
