import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { Componente, Row } from '../../interfaces/interfaces';
@Component({
  selector: 'app-financiamiento',
  templateUrl: './financiamiento.page.html',
  styleUrls: ['./financiamiento.page.scss'],
})
export class FinanciamientoPage implements OnInit {
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
    this.dataservice.getTodos()
    .subscribe(resp  => {
      console.log('listtodos', resp);
      this.proye.push(...resp.proyectos.rows);
    });
  }

}
