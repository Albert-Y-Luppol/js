import { Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-jinny-child',
  templateUrl: './jinny-child.component.html',
  styleUrls: ['./jinny-child.component.scss']
})
export class JinnyChildComponent{

  constructor(
    private router: Router,
    private  route: ActivatedRoute
  ) { }

  goHome(){
    this.router.navigate(['introduction'], {relativeTo: this.route.parent.parent.parent});
  }

  goToTom(){
    this.router.navigate(['tom'], {relativeTo: this.route.parent.parent});
    console.log(this.route);
  }

}
