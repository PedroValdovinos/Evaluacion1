import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { supabase } from '../services/supabase.service';
import { Time } from '@angular/common';
import { Router } from '@angular/router';

export interface Viaje {
  id: number;
  origen: string;
  destino: string;
  fecha: Date;
  hora: Time;
  costo: Float32Array;
  asiento_disponible: number;
  estado: boolean;
  patente: string;
  marca:string;
  modelo:string;
  color:string
}

@Component({
  selector: 'app-alumno', 
  templateUrl: './alumno.page.html',
  styleUrls: ['./alumno.page.scss'],
})
export class AlumnoPage implements OnInit {
  
  viajes: Viaje[] = [];

  constructor (public navCtrl: NavController,
               public router:Router) {
    this.getviaje();
   }

  ngOnInit() {
  }

  async getviaje() {
    const { data: viajesData, error: viajesError } = await supabase
      .from('viaje')
      .select('*');

    if (viajesError) {
      console.error('Error al obtener datos:', viajesError);
    } else {
      this.viajes = viajesData as Viaje[];

    }
  }

  async restarAsiento(viaje1: Viaje) {
    if (viaje1.asiento_disponible > 0) {
      viaje1.asiento_disponible -= 1;

      let estado = viaje1.asiento_disponible > 0; 
      const { error } = await supabase
        .from('viaje')
        .update({ asiento_disponible: viaje1.asiento_disponible, estado: estado })
        .eq('id', viaje1.id);
        
        if (error) {
          console.error('Error al actualizar asientos disponibles:', error);
        }

      if (viaje1.asiento_disponible === 0) {
        this.navCtrl.navigateForward(['/viaje']);
      } else {
        
        /*this.router.navigate(['/carga'], {
          queryParams: { viaje: JSON.stringify(viaje1) },
        });*/
      }
    }
  }
  
      getViajesMostrables(): Viaje[] {
        return this.viajes.filter((viaje) => viaje.estado);
      }

      CerrarSesion() {
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  
  }

}