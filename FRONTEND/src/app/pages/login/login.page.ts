import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';
import { AlertasService } from '../../services/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



loginUser = {
  cod_rut: null,
  password: ''
};

constructor( private usuarioService: UsuarioService, private navCtrl: NavController, private alertasService: AlertasService) { }

  ngOnInit() {

  }
 async login( fLogin: NgForm) {

    if (fLogin.invalid) {
      return;
    }

    const valido = await this.usuarioService.login(this.loginUser.cod_rut, this.loginUser.password);

    if (valido) {
      this.navCtrl.navigateRoot('/inicio');
    } else {
      /*contraseña no correcta*/
      this.alertasService.AlertaInformativa('Usuario y/o contraseña incorrectos');
    }
  }
}
