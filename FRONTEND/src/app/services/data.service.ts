import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';




@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string;
  constructor(  private http: HttpClient) { }

getPrueba()/*agregado*/ {
  return this.http.get(`http://localhost:8010/api/prueba`);
}



getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
