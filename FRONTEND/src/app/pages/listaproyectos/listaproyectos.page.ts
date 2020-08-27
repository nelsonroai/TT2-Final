import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-listaproyectos',
  templateUrl: './listaproyectos.page.html',
  styleUrls: ['./listaproyectos.page.scss'],
})
export class ListaproyectosPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];
  proye: Row[] = [];
  countejecucion: any[] = [];
  countaprobados: any[] = [];
  pdfObj: any;
  codigoproyecto: any;
  codigoestado: any;
  nombreproyecto: any;

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.dataservice.getProyectos()
    .subscribe(resp  => {
      console.log('listproyectos', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    this.dataservice.getcountProyectosejecucion()
    .subscribe(resp  => {
      console.log('countproyectosejecucion', resp);
      this.countejecucion.push(resp.proyectos.count);
    });
    this.dataservice.getcountProyectosaprobados()
    .subscribe(resp  => {
      console.log('countproyectosaprobados', resp);
      this.countaprobados.push(resp.proyectos.count);
    });

  }
  generatePDF(codigoproyecto, nombreproyecto, codigoestado) {
    alert('pdf generado');
    if (codigoestado === 9) {
      codigoestado = 'Aprobado';
    }
    const dd = {
      content: [
        'Codigo del proyecto: ' + codigoproyecto,
        'Nombre del proyecto: ' + nombreproyecto,
        'Estado del proyecto: ' + codigoestado
      ]
    };
    this.pdfObj = pdfMake.createPdf(dd);
    this.pdfObj.download();
  }

}
