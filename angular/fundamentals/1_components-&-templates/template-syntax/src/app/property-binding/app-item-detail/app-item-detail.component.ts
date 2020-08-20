import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PropertyBindingComponent } from '../property-binding.component';
import { HeroItem } from '../../../interfaces/heroItem';

@Component({
  selector: 'app-item-detail',
  templateUrl: './app-item-detail.component.html',
  styleUrls: ['./app-item-detail.component.scss'],
})
export class AppItemDetailComponent implements OnInit {
  @Input() childItem: PropertyBindingComponent;
  @Input() item: HeroItem;
  @Output() deleteRequest = new EventEmitter<HeroItem>();
  itemImageUrl =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTnoxbwYQm-icE0TFD2F8FgUWFTFHgRT1KNg&usqp=CAU';
  displayNone: string;
  lineThrough: string;

  constructor() {}

  ngOnInit(): void {
    console.log(this.childItem);
  }

  delete() {
    this.deleteRequest.emit(this.item);
    this.displayNone = this.displayNone ? '' : 'none';
    this.lineThrough = this.lineThrough ? '' : 'line-through';
  }
}
