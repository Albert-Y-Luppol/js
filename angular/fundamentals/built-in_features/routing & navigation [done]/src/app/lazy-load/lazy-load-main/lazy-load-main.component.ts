import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-lazy-load-main',
  templateUrl: './lazy-load-main.component.html',
  styleUrls: ['./lazy-load-main.component.scss']
})
export class LazyLoadMainComponent implements OnInit {
  title = 'Lazy Load';
  welcome = 'Hello!';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.data.subscribe(
      (dataObj: any) => {
        this.welcome = dataObj.welcome;
      }
    );
  }

}
