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

  equipos: any = [];
  cuadrangular:number|null=null

  ngOnInit(): void {}

  nuevoCuadrangular() {
    this.cuadrangularService.nuevoCuadrangular();
    console.log(this.cuadrangularService.cuadrangular.id);
  }
}
