import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {



loginUser = {
  cod_rut: 18367582,
  password: 'pepito'
};

constructor( private usuarioService: UsuarioService, private navCtrl: NavController) { }

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
    }
  }
}
