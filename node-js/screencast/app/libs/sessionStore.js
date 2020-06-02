let session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const mongoose = require('../libs/mongoose');

let sessionStore = new MongoStore({mongooseConnection: mongoose.connection});

module.exports = sessionStore;