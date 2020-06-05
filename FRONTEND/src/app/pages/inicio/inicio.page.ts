import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];
  proye: Row[] = [];

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
    this.dataservice.getProyecto()
    .subscribe(resp  => {
      console.log('listproyects', resp);
      this.proye.push(...resp.proyectos.rows);
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

