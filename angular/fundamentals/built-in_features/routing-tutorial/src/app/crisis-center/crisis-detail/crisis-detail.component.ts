import { Component, OnInit} from '@angular/core';
import { Crisis } from '../crisis';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CrisisService} from "../crisis.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

 public crisis$: Observable<Crisis>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CrisisService
  ) { }

  ngOnInit() {
    this.crisis$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap)=>this.service.getCrisis(params.get('id')))
    );
  }

  gotoCrises(crisis: Crisis){
    this.router.navigate(['../', {
      id: crisis ? crisis.id : null,
      junk: 'For fun!'
    }], {relativeTo: this.route});
  }

}
