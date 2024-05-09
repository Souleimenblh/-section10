import { Component, OnInit } from '@angular/core';
import { Avion } from '../model/avion.model';
import { AvionService } from '../services/avion.service';

@Component({
  selector: 'app-add-avion',
  templateUrl: './add-avion.component.html',
})
export class AddAvionComponent implements OnInit {
  newAvion = new Avion();

  message: string = '';

  constructor(private avionService: AvionService) {}
  ngOnInit(): void {}

  addAvion() {
    //this.avionService.ajouterAvion(this.newAvion);
    this.avionService.ajouterAvion(this.newAvion);
    this.message =
      'Avion ' + this.newAvion.matriculeAvion + ' ajouté avec succès !';
  }
}
