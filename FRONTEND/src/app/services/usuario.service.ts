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

    return new Promise( resolve => {

      this.http.post(`http://localhost:8010/api/login`, data)
      .subscribe(resp => {
        console.log(resp);

        if (resp ['ok']) {
          this.guardarToken(resp['token']);
            resolve(true);
        } else {
          this.token = null;
          this.storage.clear();
          resolve(false);
        }
      });
    });

  }

  async guardarToken( token: string) {
    this.token = token;
    await this.storage.set('token', token);
  }
}

