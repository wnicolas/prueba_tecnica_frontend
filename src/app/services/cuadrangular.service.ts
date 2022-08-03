import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class CuadrangularService {
  constructor(private http: HttpClient) {}

  _equipos: any[] = [];
  _cuadrangular: any[] = [];
  _partidos: any[] = [];

  get equipos() {
    return [...this._equipos];
  }
  // get cuadrangular() {
  //   return this._cuadrangular;
  // }
  nuevoCuadrangular(equipos: any): any {
    var form = new FormData();
    form.append('equipos', JSON.stringify(equipos));
    this.http
      .post<any>('http://localhost/cuadrangular/public/api/cuadrangular', form)
      .subscribe((res) => {
        this._cuadrangular = res.data;
      });
  }

  getCuadrangulares() {
    this.http
      .get('http://localhost/cuadrangular/public/api/cuadrangular')
      .subscribe((response: any) => {
        this._cuadrangular = response.data;
        // console.log(this._cuadrangular);
      });
  }

  getEquipos() {
    this.http
      .get('http://localhost/cuadrangular/public/api/equipo')
      .subscribe((response: any) => {
        this._equipos = response.data;
        console.log(this._equipos);
      });
  }
  getPartidos(id: number) {
    this.http
      .get<any>(`http://localhost/cuadrangular/public/api/cuadrangular/${id}`)
      .subscribe((response: any) => {
        this._partidos = response.data;
        // console.log(this._partidos);
      });
  }
  actualizarMarcador(id: number, goles_local: number, goles_visitante: number) {
    this.http
      .patch<any>(`http://localhost/cuadrangular/public/api/partido/${id}`, [
        goles_local,
        goles_visitante,
      ])
      .subscribe((res) => {
        console.log(res);
      });
  }
}
