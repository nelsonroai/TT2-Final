import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Componente, Row } from '../../interfaces/interfaces';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  pdfObj: any;
  codigoproyecto: any;
  codigoestado: any;
  nombreproyecto: any;

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
