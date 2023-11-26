import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { supabase } from '../services/supabase.service';
import { Time } from '@angular/common';
import { ActivatedRoute, Params } from '@angular/router';
import { Viaje } from '../alumno/alumno.page';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {
  viaje!: Viaje;

  constructor(private route: ActivatedRoute,
             public navCtrl: NavController,
            
             ) {}

             ngOnInit() {
              // Obtén los datos del viaje de los parámetros de la URL
              this.route.queryParams.subscribe((params) => {
                console.log('Params:', params); // Verifica los parámetros en la consola
                if (params['viaje']) {
                  this.viaje = JSON.parse(params['viaje']);
                  console.log('Viaje:', this.viaje);
                  // Verifica el objeto 'viaje' en la consola
          
                  // Comprobar si asientos_disponibles es igual a 0
                  if (this.viaje.asiento_disponible === 0) {
                    // Redirigir a la página 'viaje'
                    this.navCtrl.navigateForward(['/viaje']);
                  }
                }
              });
            }

      CerrarSesion() {
    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  
  }


}
