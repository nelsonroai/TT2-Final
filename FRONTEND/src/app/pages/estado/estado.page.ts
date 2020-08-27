import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-estado',
  templateUrl: './estado.page.html',
  styleUrls: ['./estado.page.scss'],
})
export class EstadoPage implements OnInit {

  pdfObj: any;
  constructor() { }

  ngOnInit() {
  }
  generatePDF() {
    alert('pdf generado');
    const dd = {
      content: [
        'First paragraph',
        'Another paragraph, this time a little bit longer to make sure, this line will be divided into at least two lines'
      ]
    };
    this.pdfObj = pdfMake.createPdf(dd);
    this.pdfObj.download();
  }

}
