import { Component, OnInit } from '@angular/core';
import { VillainsService } from '../services/villains.service';

@Component({
  selector: 'app-villans-list',
  templateUrl: './villans-list.component.html',
  styleUrls: ['./villans-list.component.scss'],
  providers: [VillainsService]
})

export class VillansListComponent implements OnInit {

  private vs: any;

  constructor(private readonly v: VillainsService) { }

  ngOnInit() {
    this.vs = this.v.getVillains();
    console.log(this.vs);
  }

}
