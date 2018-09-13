const express = require('express');
const path = require('path');
const serviceBusConnStr = require('./secret');

const app = express();
const config = {
  user: 'sa',
  password: '<YourStrong!Passw0rd>',
  server: 'localhost'
};

app.use(express.static(path.join(__dirname, 'build')));

app.get('/azure/sql/connect', function(req, res) {});

app.get('/azure/sql/getOrders', function(req, res) {
  config.database = 'Orders_DB';
  const sql = require('mssql');
  sql.close();
  sql.connect(
    config,
    function(err) {
      if (err) console.log(err);
      var request = new sql.Request();
      request.query('select * from Orders', function(err, recordset) {
        if (err) console.log(err);
        res.send(recordset);
      });
    }
  );
});

app.get('/azure/servicebus/connect', function(req, res) {
  var azure = require('azure');
  var serviceBusService = azure.createServiceBusService(serviceBusConnStr);
});

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}!`));
