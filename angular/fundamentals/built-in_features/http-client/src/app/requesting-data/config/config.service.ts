import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  configUrl = 'http://192.168.0.173:3000/configg'
  constructor(
    private http: HttpClient
  ) { }

  getConfig(){
    return this.http.get<Config>(this.configUrl);
  }
}
