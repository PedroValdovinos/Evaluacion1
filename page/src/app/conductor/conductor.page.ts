import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import { SupabaseClient} from '@supabase/supabase-js';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {
  
  formularioViaje: FormGroup;
  formularioAuto: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController,
    private supabase: SupabaseClient) 
    {
      this.formularioViaje = this.fb.group({
      'origen': new FormControl("",Validators.required),
      'destino': new FormControl("",Validators.required),
      'costo': new FormControl("",Validators.required),
      'asiDispo': new FormControl("",Validators.required),
    }) 
  
    this.formularioAuto = this.fb.group({
      'patente': new FormControl("",Validators.required),
      'marca': new FormControl("",Validators.required),
      'modelo': new FormControl("",Validators.required),
      'color': new FormControl("",Validators.required),
    }) 
  }

  ngOnInit() {
  }

  CerrarSesion() {

    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  
  }

  async guardarViaje(){
    var f = this.formularioViaje.value;
    var a = this.formularioAuto.value;

    if(this.formularioViaje.invalid && this.formularioAuto.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debes llenar todas las casillas para iniciar viaje',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;

    }
    
      // Inserta los datos en la tabla de la base de datos de Supabase
      this.supabase.from('viaje').upsert([
        {
          origen: f.origen,
          destino: f.destino,
          costo: f.costo,
          asiDispo: f.asiDispo,
        },
      ])

   } }