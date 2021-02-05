const {movies} = require('../modules/moviesLib');

const filterByGenres = (movies, genresString) => {
  const genres = genresString.split('|');
  while (genres.length !== 0){
    const genresRegExp = new RegExp(genres.pop());
    movies = movies.filter((movie) => movie.genres.match(genresRegExp));
  }

  return movies;
};

const filterByYear = (movies, year) => {
  return movies.filter((movie) => movie.year === year);
};

module.exports = function (req, res){
  switch (true) {
    case !!req.query.year && !!req.query.genres:
      return res.end(JSON.stringify(
        filterByGenres(
          filterByYear(movies, req.query.year),
          req.query.genres)));
      break;
    case !!req.query.year:
      return res.end(JSON.stringify(filterByYear(movies, req.query.year)));
      break;
    case !!req.query.genres:
      return res.end(JSON.stringify(filterByGenres(movies, req.query.genres)));
      break;
    default:
      return res.end(JSON.stringify(movies));
      break;
  }
}
