import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Componente, Row } from '../../interfaces/interfaces';

@Component({
  selector: 'app-listainiciativas',
  templateUrl: './listainiciativas.page.html',
  styleUrls: ['./listainiciativas.page.scss'],
})
export class ListainiciativasPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];
  proye: Row[] = [];
  countejecucion: any[] = [];
  countaprobados: any[] = [];

  constructor(private menuCtrl: MenuController,
    private dataservice: DataService) { }

  ngOnInit() {
    this.dataservice.getIniciativas()
    .subscribe(resp  => {
      console.log('listiniciativas', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    this.dataservice.getcountIniciativasejecucion()
    .subscribe(resp  => {
      console.log('countiniciativasejecucion', resp);
      this.countejecucion.push(resp.proyectos.count);
    });
    this.dataservice.getcountIniciativasaprobados()
    .subscribe(resp  => {
      console.log('countiniciativasaprobados', resp);
      this.countaprobados.push(resp.proyectos.count);
    });
  }

}
