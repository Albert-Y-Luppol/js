import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {Movie} from "./movie";
import {catchError} from "rxjs/operators";
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getGenres(){
    return this.http.get<string[]>('/genres')
      .pipe(
        catchError((err: HttpErrorResponse) => {
      console.log(err);
      return of([]);
    }));
  }

  getMovies(params: HttpParams){
    return this.http.get<Movie[]>('/movies', {params: params}).pipe(
      catchError((err: HttpErrorResponse) => {
        console.log(err);
        return of([]);
      }),
  );
  }
}
