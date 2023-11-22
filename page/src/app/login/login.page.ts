import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { supabase } from '../services/supabase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) { 

    this.formularioLogin = this.fb.group({
      'mail_duoc': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
  }
  async ingresar() {
    const f = this.formularioLogin.value;

  
    const { data: usuarios, error } = await supabase.from('usuario')
      .select('mail_duoc, password')
      .eq('mail_duoc', f.mail_duoc)
      .eq('password', f.password);

    if (error) {
      console.error('Error al consultar la base de datos:', error);
    } else if (usuarios.length > 0) {
      console.log('Ingresado');
      localStorage.setItem('ingresado', 'true');
      this.navCtrl.navigateRoot('inicio');
    } else {
      const alert = await this.alertController.create({
        header: 'ERROR',
        message: 'Usuario o Contraseña incorrectos',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
}