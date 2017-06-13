/* imports */
var express = require('express');

/* To parse the incoming request data */
var bp = require('body-parser');

/* Server instantiation */
var app = express();

/* Constants */
const PORT = 8080;

/* Server handler */
app.get('/', function( req, res ) {
  console.log("Server is responding");
  res.send(JSON.stringify({ 'Hello': 'World'}));
});

app.post('/apply_coupon', bp.json(), function( req, res ) {
  const respData = req.body;

  console.log("Post data called");
  res.send(JSON.stringify(respData));
});

/* Starting server */
app.listen(PORT, function() {
  console.log('Server listening on port %s', PORT);
});
