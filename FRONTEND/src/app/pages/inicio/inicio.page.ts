import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/
import { pruebas } from '../../../../../backend/server/routes/prueba'; /*agregado*/ /*agregado*/ /*agregado*/ /*agregado*/

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public prueba: any[]; /*agregado*/
  componentes: Componente[] = [];
  constructor( private menuCtrl: MenuController, private _servicePrueba: DataService) { }


  ngOnInit() {
  }
  getprueba() /*agregadokkk*/{
    this._servicePrueba.getPrueba();
    /*.then(response => {
      this.prueba = response.prueba;
    });*/
  }


  toggleMenu() {
    this.menuCtrl.toggle();
  }


}

