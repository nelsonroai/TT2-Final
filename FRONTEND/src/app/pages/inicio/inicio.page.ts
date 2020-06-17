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
  counttotalejecucion: any[] = [];
  counttotalaprobado: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
    ) { }


  ngOnInit() {
    this.dataservice.getcountTotalejecucion()
    .subscribe(resp  => {
      console.log('counttotalejecucion', resp);
      this.counttotalejecucion.push(resp.proyectos.count);
    });
    this.dataservice.getcountTotalaprobados()
    .subscribe(resp  => {
      console.log('counttotalaprobados', resp);
      this.counttotalaprobado.push(resp.proyectos.count);
    });
  }
  toggleMenu() {
    this.menuCtrl.toggle();
  }

}

