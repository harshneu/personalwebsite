var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 3000));


// views is directory for all template files
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.redirect('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
