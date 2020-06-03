import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from '../../interfaces/interfaces';
import { Pruebas } from '../../models/prueba';
import { DataService } from '../../services/data.service'; /*agregado*//*agregado*/ /*agregado*/ /*agregado*/
import { ProviderService } from '../../../provider/provider.service';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  public pruebag: any[]; /*agregado*/

  componentes: Componente[] = [];
  /*pruebasss: Pruebas[] = [];*/
  users: any[] = [];

  constructor(
    private menuCtrl: MenuController,
    /*private _servicePrueba: DataService,*/
    public providerService: ProviderService
    ) { }


  ngOnInit() {
  }
  /*getprueb() {
    this._servicePrueba.getPrueba()
    .then((response: any) => {
      this.pruebag = response.prueba;
      console.log(this.pruebag);
    })
    .catch(err => {
      err.status(500).send({ err });

  });
  }*/


  toggleMenu() {
    this.menuCtrl.toggle();
  }

  ionViewDidLoad() {
    this.providerService.getPrueba()
    .subscribe(
      (data ) => {
        this.users = data['results'];
      },
      (error) => {
        console.error(error);
      }
    );

  }


}

