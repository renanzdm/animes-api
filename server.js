var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  cors = require('cors');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({origin:'*'}));
var routes = require('./api/routes/routes'); //importing route
routes(app); //register the route
app.listen(port);
console.log(`http://localhost:${port}/`);
