import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
    ) { }


  ngOnInit() {
    this.dataservice.getPrueba()
    .subscribe(resp => {
      console.log('prueba', resp);
    });
    this.dataservice.getUsuario()
    .subscribe(resp => {
      console.log('listusuarios', resp);
    });

  }

  listarusuario() {
    this.dataservice.getUsuario()
    .subscribe(resp => {
      console.log('listusuarios', resp);
    });
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

