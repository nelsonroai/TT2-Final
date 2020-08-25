import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Componente, Row } from '../../interfaces/interfaces';

@Component({
  selector: 'app-listapoa',
  templateUrl: './listapoa.page.html',
  styleUrls: ['./listapoa.page.scss'],
})
export class ListapoaPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];
  proye: Row[] = [];
  countejecucion: any[] = [];
  countaprobados: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.dataservice.getPoa()
    .subscribe(resp  => {
      console.log('listpoa', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    this.dataservice.getcountPoaejecucion()
    .subscribe(resp  => {
      console.log('countpoaejecucion', resp);
      this.countejecucion.push(resp.proyectos.count);
    });
    this.dataservice.getcountPoaaprobados()
    .subscribe(resp  => {
      console.log('countpoaaprobados', resp);
      this.countaprobados.push(resp.proyectos.count);
    });
  }

}
