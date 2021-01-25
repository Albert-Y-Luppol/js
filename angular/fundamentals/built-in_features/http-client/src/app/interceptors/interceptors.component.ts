import { Component, OnInit } from '@angular/core';
import {InterceptorToggleService} from "./interceptor-toggle.service";

@Component({
  selector: 'app-interceptors',
  templateUrl: './interceptors.component.html',
  styleUrls: ['./interceptors.component.scss']
})
export class InterceptorsComponent implements OnInit {

  constructor(
    public interceptorsToggle: InterceptorToggleService
  ) { }

  ngOnInit(): void {
  }



}
