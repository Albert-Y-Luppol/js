import { Component, OnInit } from '@angular/core';
import {Config, ConfigService} from "./config.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  config: Config;

  constructor(
    private configService: ConfigService
  ) { }

  ngOnInit(): void {
    this.showConfig();
  }

  showConfig(){
    this.configService.getConfig().subscribe((data:Config)=> {
      this.config = {...data};

      console.log(this.config);
    });
  }

}
