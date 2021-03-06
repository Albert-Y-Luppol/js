import { Component, OnInit } from '@angular/core';
import {Observable, pipe} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {SelectivePreloadStrategyService} from "../../selective-preload-strategy.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules : string[];

  constructor(private route: ActivatedRoute, preloadStrategy: SelectivePreloadStrategyService) {
    this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit(): void {
    this.sessionId = this.route.queryParams.pipe(pipe(
      map(params => params.get('session_id') || 'None')
    ));

    this.token = this.route.fragment.pipe(
      map(fragment=>fragment || 'None')
    );
  }

}
