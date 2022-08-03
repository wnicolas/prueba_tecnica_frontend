import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CuadrangularService {
  constructor(private http: HttpClient) {}

  private _equipos: any[] = [];
  private _cuadrangular: any = null;

  get equipos() {
    return [...this._equipos];
  }
  get cuadrangular() {
    return this._cuadrangular;
  }
  nuevoCuadrangular(equipos: any): any {
    var form = new FormData();
    form.append('equipos', JSON.stringify(equipos));
    this.http
      .post<any>('http://localhost/cuadrangular/public/api/cuadrangular', form)
      .subscribe((res) => {
        this._cuadrangular = res.data;
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
}
