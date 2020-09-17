import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styleUrls: ['home.css'],
})
export class HomePage {
  powerConsumption: number;
  usageHours: number;
  cost: number; 
  elecConsumed: number;
  elecCost: number;



  constructor(public navCtrl: NavController) {
  }

compute () {
    this.elecConsumed = (this.powerConsumption * this.usageHours / 1000);
    this.elecCost = (this.elecConsumed * this.cost);
  }

}
