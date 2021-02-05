module.exports = function(req, res, next) {
  if(req.get("Auth") !== "Access") {
    return res.status(403).end('Not Authorized');
  }
  next();
}
