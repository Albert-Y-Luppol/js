import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-in-out-props',
  templateUrl: './in-out-props.component.html',
  styleUrls: ['./in-out-props.component.scss'],
})
export class InOutPropsComponent implements OnInit {
  currentItem = 'Job';
  items = ['item1', 'item2', 'item3', 'item4'];

  constructor() {}

  ngOnInit(): void {}

  addItem(newItem: string) {
    this.items.push(newItem);
  }

  removeItem(item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
  alertText(text) {
    alert(text);
  }
}
