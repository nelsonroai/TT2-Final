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
    if (codigoestado === 5) {
      codigoestado = 'Aprobado';
    }
    if (codigoestado === 0) {
      codigoestado = 'Incompleta';
    }
    if (codigoestado === 1) {
      codigoestado = 'Ingresada';
    }
    if (codigoestado === 2) {
      codigoestado = 'Admisible';
    }
    if (codigoestado === 3) {
      codigoestado = 'Preaprobada';
    }
    if (codigoestado === 4) {
      codigoestado = 'Agendar';
    }
    if (codigoestado === 6) {
      codigoestado = 'Ejecución';
    }
    if (codigoestado === 7) {
      codigoestado = 'Finalizado';
    }
    if (codigoestado === 8) {
      codigoestado = 'No realizado';
    }
    if (codigoestado === 9) {
      codigoestado = 'Rechazada';
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
