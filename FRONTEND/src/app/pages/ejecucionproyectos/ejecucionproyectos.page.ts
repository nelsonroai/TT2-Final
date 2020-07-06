import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-ejecucionproyectos',
  templateUrl: './ejecucionproyectos.page.html',
  styleUrls: ['./ejecucionproyectos.page.scss'],
})
export class EjecucionproyectosPage implements OnInit {
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
    this.dataservice.getProyectosEjecucion()
    .subscribe(resp  => {
      console.log('listproyectosejecucion', resp);
      this.proye.push(...resp.proyectos.rows);
    });
  }

}
