import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.page.html',
  styleUrls: ['./viaje.page.scss'],
})
export class ViajePage implements OnInit {

  @ViewChild('map', { static: true }) mapElement?: ElementRef;
  map?: GoogleMap;
  mapRef: ElementRef;

  constructor() {
    this.mapRef = new ElementRef(null);  // Puedes inicializarlo con null o con el valor deseado
  }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {
    // Verifica que mapRef.nativeElement es un elemento DOM válido
    console.log(this.mapRef.nativeElement);

    if (this.mapElement && this.mapElement.nativeElement) {
      this.map = await GoogleMap.create({
        id: 'my-map', 
        apiKey: environment.mapsKey,
        element: this.mapElement.nativeElement,
        config: {
          center: {
            lat: -33.03350031485377,
            lng: -71.53312509139612,
          },
          zoom: 8,
        }
      });
    } else {
      console.error('Elemento del mapa no es un elemento DOM válido');
    }
  }
  
  ngOnInit() {
    // Agrega lógica de inicialización si es necesaria
  }

}
