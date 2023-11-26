import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { supabase } from '../services/supabase.service';
import { Time } from '@angular/common';

interface Viaje {
  id: number;
  origen: string;
  destino: string;
  fecha: Date;
  hora: Time;
  costo: Float32Array;
  asiento_disponible: number;
  estado: boolean;
  patente: string;
  marca: string;
  modelo: string;
  color: string;
}

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {
  viajeId: number;
  viaje: Viaje = {} as Viaje;


  constructor(private activatedRoute: ActivatedRoute) {
    this.viajeId = 0;
  }

  ngOnInit() {
    const viajeIdParam = this.activatedRoute.snapshot.paramMap.get('viajeId');
    if (viajeIdParam !== null) {
      this.viajeId = +viajeIdParam;
    } else {

    }
        this.getViaje();
  }

  async getViaje() {
    try {
      const { data: viajeData, error: viajeError } = await supabase
        .from('viaje')
        .select('*')
        .eq('id', this.viajeId);

      if (viajeError) {
        console.error('Error al obtener datos del viaje:', viajeError);
      } else {
        this.viaje = viajeData[0] as Viaje;
      }
    } catch (error) {
      console.error('Error al obtener datos del viaje:', error);
    }
  }
}
