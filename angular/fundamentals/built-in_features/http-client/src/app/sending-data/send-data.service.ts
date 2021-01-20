import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map} from "rxjs/operators";
import {ConfigService} from "../requesting-data/config/config.service";

export interface Hero {
  name: string;
  power: number;
}

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    authorization: 'my-auth-token'
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

  getHeroes(){
    return this.http.get<Hero[]>(this.heroUrl + 'es').pipe(
      catchError(this.handleError('getHeroes', [])),
    );
  }

  removeHero(name: string){
    return this.http.delete<Hero>(this.heroUrl+`/${name}`, httpOptions).pipe(
      catchError(this.handleError('removeHero', name)),
    );
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.http.put<Hero>(this.heroUrl,hero, httpOptions).pipe(
      catchError(this.handleError('updateHero', hero))
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
