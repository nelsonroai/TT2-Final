import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/

@Component({
  selector: 'app-listaprogramas',
  templateUrl: './listaprogramas.page.html',
  styleUrls: ['./listaprogramas.page.scss'],
})
export class ListaprogramasPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];
  proye: Row[] = [];
  coun: any[] = [];

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
    this.dataservice.getcountProgramaejecucion()
    .subscribe(resp  => {
      console.log('countprogramasejecucion', resp);
      this.coun.push(resp.proyectos.count);
    });
  }

}
