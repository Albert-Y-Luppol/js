import {Component, SkipSelf} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tom-child',
  templateUrl: './tom-child.component.html',
  styleUrls: ['./tom-child.component.scss']
})
export class TomChildComponent {

  constructor(private router: Router, private route: ActivatedRoute) { }

  goHome(){
    this.router.navigate(['../introduction'], {relativeTo: this.route.parent});
  }

  goToJinny(){
    this.router.navigate(['jinny'], {relativeTo: this.route.parent});
  }
}
