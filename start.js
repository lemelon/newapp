/////////////////////////////////////////////////////////////////
// MODULE DEPENDENCIES //////////////////////////////////////////
/////////////////////////////////////////////////////////////////
var http      = require('http');
var express   = require('express');
var mongoose  = require('mongoose');
var config    = require('./backend/db/database');
var multipart = require('connect-multiparty');

/////////////////////////////////////////////////////////////////
// CREATE AND CONFIG SERVER /////////////////////////////////////
/////////////////////////////////////////////////////////////////
var app = module.exports = express();

app.use(multipart({
  uploadDir: config.tmp
}));

/////////////////////////////////////////////////////////////////
// CONNECT TO DATABASE //////////////////////////////////////////
/////////////////////////////////////////////////////////////////
require('./backend/db/mongo');

/////////////////////////////////////////////////////////////////
// CONFIG DATA MODELS ///////////////////////////////////////////
/////////////////////////////////////////////////////////////////
console.log('check the models');
require('./backend/models/models')(mongoose);
console.log('end check of models');

/////////////////////////////////////////////////////////////////
// CONFIGURE APPLICATION ////////////////////////////////////////
/////////////////////////////////////////////////////////////////
require('./backend/config/config')(app, express, config);

/////////////////////////////////////////////////////////////////
// PASSPORT AUTH STRATEGY ///////////////////////////////////////
/////////////////////////////////////////////////////////////////
require('./backend/authentification/passportStrategy.js')(app);

/////////////////////////////////////////////////////////////////
// ROUTES ///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
require('./backend/routes/routes.js')(app);

/////////////////////////////////////////////////////////////////
// WEB SERVER /////////////////////////////////////
/////////////////////////////////////////////////////////////////
var server = http.createServer(app);

/////////////////////////////////////////////////////////////////
// SOCKET SERVER ////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
var chatServer = require('./backend/chatServer/chatServer')(server);

app.set('port', process.env.PORT || 8000);

/////////////////////////////////////////////////////////////////
// START THE SERVER /////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
server.listen(app.get('port'), function() {
  'use strict';
  console.log('Express server listening on port ' + app.get('port'));
});
