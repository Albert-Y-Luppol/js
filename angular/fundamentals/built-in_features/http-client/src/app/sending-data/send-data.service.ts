import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from "rxjs/operators";
import {ConfigService} from "../requesting-data/config/config.service";

export interface Hero {
  name: string;
  power: number;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'my-auth-token'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SendDataService {

  private heroUrl: string;

  constructor(
    private http: HttpClient,
    private config: ConfigService
  ) {
    this.heroUrl = config.baseUrl + '/hero';
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.http.post(this.heroUrl, hero, httpOptions).pipe(
      catchError(this.handleError('addHero', hero))
    );
  }

  private handleError(name: string, data: any){
    return (err, data: Observable<any>)=>{
      if(err instanceof ErrorEvent) {
        console.log(`------------------Front error with ${name}!---------------------`);
        console.log(data);
        console.log('------------------!---------------------');
        console.log(err);
        console.log('------------------!---------------------');
      } else {
        console.log(`------------------Back error with ${name}!---------------------`);
        console.log(data);
        console.log('------------------!---------------------');
        console.log(err);
        console.log('------------------!---------------------');
      }
      return throwError('Failed');
    }
  }
}
