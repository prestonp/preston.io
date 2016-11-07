
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , http = require('http')
  , path = require('path')
  , compression = require('compression')
  , gravatar = require('gravatar');

/**
 * Middleware
 */
var theme = require('./lib/theme');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.locals.gravatar = gravatar.url('prestonp08@gmail.com', {s: 16}, https=true);
  app.use(compression());
  app.use(app.router);
  app.use(require('less-middleware')(__dirname + '/public'));
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/work', theme('light'), routes.work);
app.get('/about', theme('light'), routes.about);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
