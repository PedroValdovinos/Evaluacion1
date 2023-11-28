import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
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
    this.mapRef = new ElementRef(null);
  }

  ionViewDidEnter() {
    this.createMap();
  }

  async createMap() {

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
          zoom: 12,
        }
      });
      this.addMarkers();
    } else {
      console.error('Elemento del mapa no es un elemento DOM válido');
    }
  }

  async addMarkers() {
    const markers: Marker[] = [
      {
        coordinate: {
          lat: -33.03350031485377,
          lng: -71.53312509139612,
        },
        title: 'DuocUC Viña Del Mar',
        snippet: 'DuocUC Viña Del Mar',
      },
      {
        coordinate: {
          lat: -33.06021403096869,
          lng: -71.42081908962844,
        },
        title: 'Casa',
        snippet: 'Casa',
      },
    ];
  
    await this.map?.addMarkers(markers);
  }
  
  
  ngOnInit() {
  }

}
