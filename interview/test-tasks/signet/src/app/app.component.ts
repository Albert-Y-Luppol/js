import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {DataService} from "./data.service";
import {yearValidator} from "./year-validator.directive";
import {HttpParams} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  year = new FormControl('', yearValidator());
  genre = new FormControl('');

  genres = [];
  movies = [];
  submitedFlag = false;

  constructor(private data: DataService) {
  }

  ngOnInit(){
    this.data.getGenres().subscribe((genres:string[])=>{
      this.genres = genres;
    })
  }

  searchMovies(){
    if(!this.year.valid || !this.genre.valid) return;
    const genres = this.genre.value ? this.genre.value.join('|') : "";
    const year = this.year.value ? this.year.value : "";
    const params = new HttpParams().set('genres', genres).set('year', year);
    this.data.getMovies(params).subscribe(movies => {
      this.movies = movies;
      this.year.reset();
      this.submitedFlag = true;
    })
  }
}
