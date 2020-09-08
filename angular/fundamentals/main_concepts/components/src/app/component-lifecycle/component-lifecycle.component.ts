import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-lifecycle',
  templateUrl: './component-lifecycle.component.html',
  styleUrls: ['./component-lifecycle.component.scss']
})
export class ComponentLifecycleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
