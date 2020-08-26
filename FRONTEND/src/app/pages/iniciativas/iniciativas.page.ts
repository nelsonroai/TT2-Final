import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Componente, Row } from '../../interfaces/interfaces';

@Component({
  selector: 'app-iniciativas',
  templateUrl: './iniciativas.page.html',
  styleUrls: ['./iniciativas.page.scss'],
})
export class IniciativasPage implements OnInit {
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
    this.dataservice.getIniciativasEjecucion()
    .subscribe(resp  => {
      console.log('listiniciativasejecucion', resp);
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
