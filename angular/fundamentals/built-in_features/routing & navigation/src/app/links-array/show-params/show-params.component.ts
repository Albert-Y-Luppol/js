import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-show-params',
  templateUrl: './show-params.component.html',
  styleUrls: ['./show-params.component.scss']
})
export class ShowParamsComponent implements OnInit {

  params: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.params = Object.entries(this.route.snapshot.params);
  }

}
