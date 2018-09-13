const express = require('express');
const path = require('path');
const serviceBusConnStr = require('./secret');

var app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/azure/sql/connect', function(req, res) {
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

app.get('/azure/servicebus/connect', function(req, res) {
  var azure = require('azure');
  var serviceBusService = azure.createServiceBusService(serviceBusConnStr);
  // serviceBusService.createTopicIfNotExists('MyTopic', function(error) {
  //   if (!error) {
  //     console.log('Topic created or exists.');
  //   } else {
  //     console.log(error);
  //   }
  // });
});

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}!`));
