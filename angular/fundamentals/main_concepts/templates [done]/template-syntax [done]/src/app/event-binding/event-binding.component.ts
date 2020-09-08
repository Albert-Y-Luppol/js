import { Component, OnInit } from '@angular/core';
import { HeroItem } from 'src/interfaces/heroItem';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent implements OnInit {
  public clickTarget;
  public clickMessage: string;

  currentItem = {
    name: 'Test',
  };
  heroItems: HeroItem[] = [
    {
      name: 'Test1',
    },
    {
      name: 'Test2',
    },
    {
      name: 'Test3',
    },
    {
      name: 'Test4',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClickEvent(e) {
    console.log(e);
    this.clickTarget = e.target;
  }

  onClick(e) {
    alert(e.target);
  }

  deleteItem(hero) {
    if (this.heroItems.includes(hero)) {
      this.heroItems.splice(this.heroItems.indexOf(hero), 1);
    }
  }
}
