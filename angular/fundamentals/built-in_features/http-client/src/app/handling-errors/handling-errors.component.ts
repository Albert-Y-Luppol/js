import { Component, OnInit } from '@angular/core';
import {ConfigService} from "../requesting-data/config/config.service";

@Component({
  selector: 'app-handling-errors',
  templateUrl: './handling-errors.component.html',
  styleUrls: ['./handling-errors.component.scss']
})
export class HandlingErrorsComponent implements OnInit {

  res: any;

  constructor(private configService:ConfigService) { }

  ngOnInit(): void {

    this.configService.getError().subscribe(
      res => {
        this.res = res;
      }
    );
  }

}
