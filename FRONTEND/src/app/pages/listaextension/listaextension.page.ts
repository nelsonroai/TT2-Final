import { Component, OnInit } from '@angular/core';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-listaextension',
  templateUrl: './listaextension.page.html',
  styleUrls: ['./listaextension.page.scss'],
})
export class ListaextensionPage implements OnInit {
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
    this.dataservice.getExtension()
    .subscribe(resp  => {
      console.log('listextension', resp);
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
