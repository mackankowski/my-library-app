var express = require('express');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/sql/connect', function(req, res) {
  var sql = require('mssql');
  var config = {
    user: 'sa',
    password: '<YourStrong!Passw0rd>',
    server: 'localhost'
  };
  sql.connect(
    config,
    function(err) {
      if (err) console.log(err);
      else console.log('Connected to database!');
    }
  );
});
const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}!`));
