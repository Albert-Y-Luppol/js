import { Component, OnInit } from '@angular/core';
import {Config, ConfigService} from "./config.service";

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  config: Config;
  headers: any;
  text = "";

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

    this.configService.getFullResponseConfig().subscribe((res)=>{
      console.log(res);
      const keys = res.headers.keys();
      this.headers = keys.map(key=>`${key}: ${res.headers.get(key)}`);
      console.log(this.headers);
      this.config = {...res.body};
      console.log(this.config);
    });

    this.configService.getJsonp('all').subscribe(res=>{
      console.log(res);
    });

    this.configService.getText().subscribe(
      text=> this.text = text
    );
  }

}
