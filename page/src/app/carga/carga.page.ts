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
              this.route.queryParams.subscribe((params) => {
                console.log('Params:', params);
                if (params['viaje']) {
                  this.viaje = JSON.parse(params['viaje']);
                  console.log('Viaje:', this.viaje);
          
                  if (this.viaje.asiento_disponible === 0) {
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
