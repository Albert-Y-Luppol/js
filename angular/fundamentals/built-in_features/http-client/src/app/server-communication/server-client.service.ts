import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerClientService {

  url = "http://192.168.0.173:3000/server-communication"

  constructor(private http: HttpClient) { }

  communicateServer(){
    return this.http.request("GET", this.url,{responseType: "text"});
  }
}
