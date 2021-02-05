const {genres} = require('../modules/moviesLib');

module.exports = function (req, res){
  res.end(JSON.stringify(genres));
}
