import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Pruebas } from '../../models/prueba';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/
import { prueba } from '../../../../../backend/server/routes/prueba'; /*agregado*/ /*agregado*/ /*agregado*/ /*agregado*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public pruebag: any[]; /*agregado*/

  componentes: Componente[] = [];
  pruebasss: Pruebas[] = [];

  constructor( private menuCtrl: MenuController, private _servicePrueba: DataService) { }


  ngOnInit() {
  }
  getprueba() /*agregadokkk*/{
    this._servicePrueba.getPrueba()
    .then((response: any) => {
      this.pruebag = response.prueba;
      console.log(this.pruebag);
    });
  }


  toggleMenu() {
    this.menuCtrl.toggle();
  }


}

