import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Componente, Row } from '../../interfaces/interfaces';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

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
  pdfObj: any;

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
    ) { }

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
  generatePDF() {
    alert('pdf generado');
    const dd = {
      content: [
        'First paragraph',
        'https://img.icons8.com/pastel-glyph/30/000000/search--v1.png',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
    };
    this.pdfObj = pdfMake.createPdf(dd);
    this.pdfObj.download();
  }

}
