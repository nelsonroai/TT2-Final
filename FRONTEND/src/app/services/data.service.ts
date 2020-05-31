import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';
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
  return this.http.get(this.url + 'prueba').toPromise().then(res => res);
}



getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
