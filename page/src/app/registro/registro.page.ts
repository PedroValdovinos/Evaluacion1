import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { supabase } from '../services/supabase.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl ("", Validators.required),
      'apellidos': new FormControl ("", Validators.required),
      'rut': new FormControl ("", Validators.required),
      'mail_duoc': new FormControl ("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async guardar() {
    const f = this.formularioRegistro.value;
  
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todas las casillas para registrarte',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
  
    const usuario = {
      nombres: f.nombre,
      apellidos: f.apellidos,
      mail_duoc: f.mail_duoc,
      password: f.password,
      rut: f.rut,
    };
  
    const { data, error } = await supabase.from('usuario').insert([usuario]);
  
    if (error) {
      console.error('Error al insertar datos:', error);
    } else {
      console.log('Datos guardados:', data);

      const registroExitosoAlert = await this.alertController.create({
        header: 'Registro Exitoso',
        message: 'Tu registro se ha completado con éxito.',
        buttons: ['Aceptar']
      });
  
      await registroExitosoAlert.present();

      this.formularioRegistro.reset();
    }
  }
}