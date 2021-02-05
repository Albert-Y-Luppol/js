const parser = require('csv-parser-sync-plus-promise');

const moviesSrc = parser.readCsvSync('./srcfiles/movies.csv');

const movies = [];
const genres= [];

moviesSrc.forEach(movie=>{
  try{
    movie.year = movie.title.match(/\((\d\d\d\d)\)$/)[1]
    movie.title = movie.title.replace(/\s\(\d\d\d\d\)$/, "")
    movies.push(movie);
    const movieGenres = movie.genres.split('|');
    movieGenres.forEach(gen=>{
      if(!genres.includes(gen)) genres.push(gen);
    });
  } catch(e){}
});

module.exports = {movies, genres};


