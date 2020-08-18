import { Component, OnInit, Input } from '@angular/core';
import { PropertyBindingComponent } from '../property-binding.component';

@Component({
  selector: 'app-item-detail',
  templateUrl: './app-item-detail.component.html',
  styleUrls: ['./app-item-detail.component.scss'],
})
export class AppItemDetailComponent implements OnInit {
  @Input() childItem: PropertyBindingComponent;
  constructor() {}

  ngOnInit(): void {
    console.log(this.childItem);
  }
}
