import { Component, OnInit} from '@angular/core';
import { Crisis } from '../crisis';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {CrisisService} from "../crisis.service";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";
import {DialogService} from "../dialog.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit {

 private crisis$: Observable<Crisis>;
 public crisis: Crisis;
 public editName: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: CrisisService,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {
      this.route.data.subscribe((data: {crisis: Crisis})=>{
        this.crisis = data.crisis;
        this.editName = data.crisis.name;
      });
  }

  canDeactivate():Observable<boolean> | boolean {
    if(!this.crisis || this.crisis.name === this.editName) return true;
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises(crisis: Crisis){
    this.router.navigate(['../', {
      id: crisis ? crisis.id : null,
      junk: 'For fun!'
    }], {relativeTo: this.route});
  }

  cancel() {
    this.gotoCrises(this.crisis);
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises(this.crisis);
  }

}
