import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpResponse} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

export interface Config {
  heroesUrl: string;
  textfile: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  baseUrl = 'http://192.168.0.173:3000';
  configUrl = this.baseUrl + '/config';
  constructor(
    private http: HttpClient
  ) { }

  getConfig(){
    return this.http.get<Config>(this.configUrl);
  }

  getFullResponseConfig(): Observable<HttpResponse<Config>>{
    return this.http.get<Config>(this.configUrl, {observe: "response"});
  }

  getJsonp(term: string): Observable <any> {
    term = term.trim();

    const url = this.baseUrl + '/jsonp?' + term;
    return this.http.jsonp(url, 'callback').pipe(
      catchError(this.handleHttpJsonpError())
    );
  }

  getText(){
    return this.http.get(this.baseUrl + '/text', {responseType: "text"}).pipe(
      tap(
        data=>console.log(data),
        err=>console.log(err)
      )
    );
  }

  private handleHttpJsonpError(){
    return (err: HttpErrorResponse): Observable<any> => {
      console.log('Handled!');
      console.log(err);
      return of([]);
    }
  }
}
