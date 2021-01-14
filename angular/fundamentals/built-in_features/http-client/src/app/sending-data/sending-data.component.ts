import { Component, OnInit } from '@angular/core';
import {Hero, SendDataService} from "./send-data.service";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sending-data',
  templateUrl: './sending-data.component.html',
  styleUrls: ['./sending-data.component.scss']
})
export class SendingDataComponent implements OnInit {

  heroes: Hero[];

  public postForm = new FormGroup({
    name: new FormControl(),
    power: new FormControl(),
  });

  public deleteForm = new FormGroup({
    name: new FormControl(),
  });

  constructor(private  sendService: SendDataService) { }

  ngOnInit(): void {
    this.sendService.getHeroes().subscribe((heroes)=>{
      this.heroes = heroes;
    })
  }

  public postHeroes(){
    this.sendService.addHero({name: this.postForm.get('name').value, power: this.postForm.get('power').value}).subscribe(
      (hero)=>{
        this.heroes.push(hero);
        this.postForm.reset();
      }
    )
  }

  public removeHero(){
    this.sendService.removeHero(this.deleteForm.get('name').value).subscribe(removedHero=>{
      console.log('Hero ' + removedHero + ' removed!');
      this.heroes = this.heroes.filter(hero=>{
        if(hero.name == removedHero) return false;
        return true;
      });
    });
    this.deleteForm.reset();
  }
}
