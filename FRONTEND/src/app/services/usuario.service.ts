import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  token: string = null;

  constructor( private http: HttpClient, private storage: Storage) { }

  login( cod_rut: number, password: string) {
    const data = {cod_rut, password};

    this.http.post(`http://localhost:8010/api/usuario`, data)
    .subscribe(resp => {
      console.log(resp);
    });
  }
}

