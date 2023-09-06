import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-conductor',
  templateUrl: './conductor.page.html',
  styleUrls: ['./conductor.page.scss'],
})
export class ConductorPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  CerrarSesion() {

    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  
  }

}
