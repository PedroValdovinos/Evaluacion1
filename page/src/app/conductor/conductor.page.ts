import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { supabase } from '../services/supabase.service';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  formularioViaje: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController) {

    this.formularioViaje = this.fb.group({
      'origen': new FormControl("", Validators.required),
      'destino': new FormControl("", Validators.required),
      'fecha': new FormControl("", Validators.required),
      'hora': new FormControl("", Validators.required),
      'costo': new FormControl("", Validators.required),
      'asiento_disponible': new FormControl("", Validators.required),
      'estado': new FormControl("true", Validators.required),
      'patente': new FormControl("", Validators.required),
      'marca': new FormControl("", Validators.required),
      'modelo': new FormControl("", Validators.required),
      'color': new FormControl("", Validators.required),

    })
  }
  async setviaje() {
    if (this.formularioViaje.valid) {
      
      const { origen,
              destino,  
              fecha,
              hora, 
              costo, 
              asiento_disponible, 
              estado, 
              patente, 
              marca, 
              modelo, 
              color } = this.formularioViaje.value;

      const { error } = await supabase
        .from('viaje')
        .upsert([
          {
            origen,
            destino,
            fecha,
            hora,
            costo,
            asiento_disponible,
            estado,
            patente,
            marca,
            modelo,
            color
          },
        ]);

      if (error) {
        console.error('Error al insertar datos:', error);
      } else {
        this.formularioViaje.reset();
        const alert = await this.alertController.create({
          header: 'Éxito',
          message: 'Viaje Creado.',
          buttons: [
            {
              text: 'OK',
              handler: () => {
                window.location.reload();
              }
            }
          ],
        });
        await alert.present();
      }
    }
  

  }
  ngOnInit() {
  }

  CerrarSesion() {

    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');

  }

}