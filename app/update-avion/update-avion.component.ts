import { Component, OnInit } from '@angular/core';
import { AvionService } from '../services/avion.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from '../model/avion.model';

@Component({
  selector: 'app-update-avion',
  templateUrl: './update-avion.component.html',
  styles: [],
})
export class UpdateAvionComponent implements OnInit {
  currentAvion = new Avion();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private aviontService: AvionService
  ) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params['id']);
    this.currentAvion = this.aviontService.consulterAvion(
      this.activatedRoute.snapshot.params['id']
    );
    console.log(this.currentAvion);
  }

  updateAvion() {
    //console.log(this.currentAvion);
    this.aviontService.updateAvion(this.currentAvion);
    this.router.navigate(['avions']);
  }
}
