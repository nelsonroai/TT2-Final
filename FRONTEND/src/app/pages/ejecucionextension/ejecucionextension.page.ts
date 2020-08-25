import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-ejecucionextension',
  templateUrl: './ejecucionextension.page.html',
  styleUrls: ['./ejecucionextension.page.scss'],
})
export class EjecucionextensionPage implements OnInit {
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
    this.dataservice.getExtensionEjecucion()
    .subscribe(resp  => {
      console.log('listextensionejecucion', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    this.dataservice.getcountExtensionejecucion()
    .subscribe(resp  => {
      console.log('countextensionejecucion', resp);
      this.countejecucion.push(resp.proyectos.count);
    });
    this.dataservice.getcountExtensionaprobados()
    .subscribe(resp  => {
      console.log('countextensionaprobados', resp);
      this.countaprobados.push(resp.proyectos.count);
    });
  }

}
