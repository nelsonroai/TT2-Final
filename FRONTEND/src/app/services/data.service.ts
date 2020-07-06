import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente, RootObject } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url: string;
  constructor(  private http: HttpClient) { }

getPrueba()/*agregado*/ {
  return this.http.get(`http://localhost:8010/api/prueba`);
}
getUsuario() {
  return this.http.get(`http://localhost:8010/api/listusuarios`);
}
getcountProgramasejecucion() {
  return this.http.get<RootObject>(`http://localhost:8010/api/countprogramasejecucion`);
  }
getcountProgramasaprobados() {
  return this.http.get<RootObject>(`http://localhost:8010/api/countprogramasaprobados`);
  }

getcountTotalejecucion() {
  return this.http.get<RootObject>(`http://localhost:8010/api/counttotalejecucion`);
  }

getcountTotalaprobados() {
  return this.http.get<RootObject>(`http://localhost:8010/api/counttotalaprobados`);
  }

getcountTotalagendar() {
    return this.http.get<RootObject>(`http://localhost:8010/api/counttotalagendar`);
  }

getcountTotalfinalizados() {
    return this.http.get<RootObject>(`http://localhost:8010/api/counttotalfinalizado`);
  }
getcountTotalnorealizados() {
    return this.http.get<RootObject>(`http://localhost:8010/api/counttotalnorealizado`);
  }

getProgramas() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listprogramas`);
}
getProgramasEjecucion() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listprogramasejecucion`);
}
getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
