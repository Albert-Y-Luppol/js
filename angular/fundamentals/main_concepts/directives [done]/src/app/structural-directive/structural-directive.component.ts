import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.scss']
})
export class StructuralDirectiveComponent {
  ngContainer = '<ng-container>';
  hero: any;
  heroes = [{ name: 'Tom', emotion: "sad" }, { name: 'Dom', emotion: "happy" }, { name: 'Jerry', emotion: "sad" }];
  showSad = true;
  condition: boolean = false;
}
