import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente, Row } from '../../interfaces/interfaces';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/

@Component({
  selector: 'app-ejecucionprogramas',
  templateUrl: './ejecucionprogramas.page.html',
  styleUrls: ['./ejecucionprogramas.page.scss'],
})
export class EjecucionprogramasPage implements OnInit {
  componentes: Componente[] = [];
  users: any[] = [];
  proye: Row[] = [];

  constructor(
    private menuCtrl: MenuController,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.dataservice.getProyectoEjecucion()
    .subscribe(resp  => {
      console.log('listproyectsejecucion', resp);
      this.proye.push(...resp.proyectos.rows);
    });
  }

}
