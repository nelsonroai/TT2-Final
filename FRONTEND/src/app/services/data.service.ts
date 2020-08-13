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
  getcountProyectosejecucion() {
    return this.http.get<RootObject>(`http://localhost:8010/api/countproyectosejecucion`);
    }
  getcountProyectosaprobados() {
    return this.http.get<RootObject>(`http://localhost:8010/api/countproyectosaprobados`);
    }
  getcountIniciativasejecucion() {
    return this.http.get<RootObject>(`http://localhost:8010/api/countiniciativasejecucion`);
    }
  getcountIniciativasaprobados() {
    return this.http.get<RootObject>(`http://localhost:8010/api/countiniciativasaprobados`);
    }

getProgramas() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listprogramas`);
}
getIniciativas() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listiniciativas`);
}
getProgramasEjecucion() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listprogramasejecucion`);
}
getProyectos() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listproyectos`);
}
getProyectosEjecucion() {
  return this.http.get<RootObject>(`http://localhost:8010/api/listproyectosejecucion`);
}
getMenuOpts() {
  return this.http.get<Componente[]>('/assets/data/menu.json');
  }
}
