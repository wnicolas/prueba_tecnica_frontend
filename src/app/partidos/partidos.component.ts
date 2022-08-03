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
}
