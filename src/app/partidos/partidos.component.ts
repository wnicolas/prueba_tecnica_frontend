import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CuadrangularService } from '../services/cuadrangular.service';

@Component({
  selector: 'app-partidos',
  templateUrl: './partidos.component.html',
  styleUrls: ['./partidos.component.css'],
})
export class PartidosComponent implements OnInit {
  partidos: any[] = [];
  id_equipos: any[] = [];
  equipos: any[] = [];
  id: number = 0;
  constructor(
    private cuadrangularService: CuadrangularService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id'];
      this.cuadrangularService.getPartidos(this.id);
      this.partidos = this.cuadrangularService._partidos;
      console.log(this.partidos);
    });
  }
  getPartidos() {
    this.cuadrangularService.getPartidos(this.id);
    this.partidos = this.cuadrangularService._partidos;
    console.log(this.partidos);
  }
  actualizarMarcador(id: number, goles_local: number, goles_visitante: number) {
    this.cuadrangularService.actualizarMarcador(
      id,
      goles_local,
      goles_visitante
    );
    this.calcularTabla();
    // this.getPartidos();
  }

  calcularTabla() {
    this.equipos = [];
    this.id_equipos = [];
    this.partidos.forEach((partido) => {
      this.id_equipos.push(partido.id_local);
      this.id_equipos.push(partido.id_visitante);
    });

    // Elimina repetidos
    this.id_equipos = this.id_equipos.reduce((acc, item) => {
      if (!acc.includes(item)) {
        acc.push(item);
      }
      return acc;
    }, []);

    // Reiniciar marcadores
    
    this.id_equipos.forEach((equipo: any) => {
      this.equipos.push({ id: equipo, puntos: 0 });
    });
    
    console.log(this.equipos);
    
    this.partidos.forEach((partido) => {
      let equipo;
      if (partido.goles_local > partido.goles_visitante) {
        equipo = this.equipos.find((equipo) => equipo.id == partido.id_local);
        equipo.puntos += 3;
      } else if (partido.goles_local < partido.goles_visitante) {
        equipo = this.equipos.find(
          (equipo) => equipo.id == partido.id_visitante
        );
        equipo.puntos += 3;
      } else {
        let equipo1 = this.equipos.find(
          (equipo) => equipo.id == partido.id_visitante
        );
        let equipo2 = this.equipos.find(
          (equipo) => equipo.id == partido.id_local
        );
        equipo1.puntos += 1;
        equipo2.puntos += 1;
      }
    });
    this.equipos.sort(function (a, b) {
      return b.puntos - a.puntos;
    });
  }
}
