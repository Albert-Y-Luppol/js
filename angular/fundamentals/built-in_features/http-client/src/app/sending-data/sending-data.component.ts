import { Component, OnInit } from '@angular/core';
import {Hero, SendDataService} from "./send-data.service";

@Component({
  selector: 'app-sending-data',
  templateUrl: './sending-data.component.html',
  styleUrls: ['./sending-data.component.scss']
})
export class SendingDataComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private  sendService: SendDataService) { }

  ngOnInit(): void {
    const hero: Hero = {name: 'Tom', power: 10};
    this.sendService.addHero(hero).subscribe((hero)=>this.heroes.push(hero));
  }

}
