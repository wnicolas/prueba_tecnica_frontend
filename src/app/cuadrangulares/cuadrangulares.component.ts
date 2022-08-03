import { Component, OnInit } from '@angular/core';
import { CuadrangularService } from '../services/cuadrangular.service';

@Component({
  selector: 'app-cuadrangulares',
  templateUrl: './cuadrangulares.component.html',
  styleUrls: ['./cuadrangulares.component.css'],
})
export class CuadrangularesComponent implements OnInit {
  constructor(private cuadrangularService: CuadrangularService) {}
  value: Date = new Date();

  equipos: any = [
    { nombre: 'Naciona' },
    { nombre: 'sdas' },
    { nombre: 'ghj' },
    { nombre: 'erte' },
  ];
  cuadrangulares: any = [];

  ngOnInit(): void {
    this.getCuadrangular();
  }

  getCuadrangular() {
    this.cuadrangularService.getCuadrangulares();
    this.cuadrangulares = this.cuadrangularService._cuadrangular;
    console.log(this.cuadrangulares);
  }

  nuevoCuadrangular() {
    var validate = true;
    this.equipos.forEach((equipo: any) => {
      if (equipo.nombre == '') {
        validate = false;
      }
    });
    if (!validate) {
      alert('Todos los equipos deben tener un nombre.');
    }
    this.cuadrangularService.nuevoCuadrangular(this.equipos);
    this.getCuadrangular();
  }
  nuevoEquipo() {
    this.equipos.push({ nombre: '' });
  }
}
