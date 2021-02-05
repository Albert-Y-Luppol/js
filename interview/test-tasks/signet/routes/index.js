const filterMovies = require('./filterMovies');
const availableGenres = require('./availableGenres');

module.exports = function (app){
  app.get('/movies', filterMovies);
  app.get('/genres', availableGenres);
  app.get('*', (req, res) => {
    return res.status(404).end('Not Found');
  })
}
