import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
import { Pruebas } from '../models/prueba';
import { GLOBAL } from './global'; /*agregado*/



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string;
  constructor(  private http: HttpClient) {
    this.url = GLOBAL.url; /*agregado*/

    }

getPrueba()/*agregado*/ {
  return this.http.get(`http://localhost:8010/api/prueba`);
}



getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
