import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-listaprogramas',
  templateUrl: './listaprogramas.page.html',
  styleUrls: ['./listaprogramas.page.scss'],
})
export class ListaprogramasPage implements OnInit {
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
    this.dataservice.getProgramas()
    .subscribe(resp  => {
      console.log('listprogramas', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    this.dataservice.getcountProgramasejecucion()
    .subscribe(resp  => {
      console.log('countprogramasejecucion', resp);
      this.countejecucion.push(resp.proyectos.count);
    });
    this.dataservice.getcountProgramasaprobados()
    .subscribe(resp  => {
      console.log('countprogramasaprobados', resp);
      this.countaprobados.push(resp.proyectos.count);
    });
  }
  BotonListar(aux) {
    this.proye = [];
    if (aux === 2) {
      this.dataservice.getProgramasEjecucion()
    .subscribe(resp  => {
      console.log('listprogramasejecucion', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    }
    if (aux === 3) {
      this.dataservice.getProgramas()
    .subscribe(resp  => {
      console.log('listprogramas', resp);
      this.proye.push(...resp.proyectos.rows);
    });
    }
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
