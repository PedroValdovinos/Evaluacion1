import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(public alertController: AlertController,
    public navCtrl: NavController) { }
  
    ngOnInit() {
  }

  CerrarSesion() {

    localStorage.removeItem('ingresado');
    this.navCtrl.navigateRoot('login');
  
  }


}