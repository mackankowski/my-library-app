const express = require('express');
const path = require('path');
const app = express();
const sql = require('mssql');
const config = {
  user: 'sa',
  password: '<YourStrong!Passw0rd>',
  server: 'localhost'
};
const serviceBusConnStr = require('./secret');
let serviceBusService;
const azure = require('azure');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/sql/connect', function(req, res) {});
app.get('/sql/:db/:table/list', function(req, res) {
  let { db, table } = req.params;
  config.database = `${db}_DB`;
  sql.close();
  sql.connect(
    config,
    function(err) {
      if (err) console.log(err);
      else {
        var request = new sql.Request();
        request.query(`select * from ${table}`, function(err, recordset) {
          if (err) console.log(err);
          else res.send(recordset);
        });
      }
    }
  );
});

app.get('/bus/connect', function(req, res) {
  serviceBusService = azure.createServiceBusService(serviceBusConnStr);
  const topics = ['ordersInProgress', 'pickUpOrders', 'storageState'];
  for (let i in topics) {
    const topic_name = topics[i];
    serviceBusService.createTopicIfNotExists(topic_name, function(error) {
      if (!error) {
        console.log(`Topic ${topic_name} has been created or already exists.`);
      } else {
        console.log(error);
      }
    });
  }
});

app.get('/bus/create/pub/:topic/:message', function(req, res) {
  let { topic, message } = req.params;
  let newMessage = {
    body: message
  };
  serviceBusService.sendTopicMessage(topic, newMessage, function(error) {
    if (!error) {
      let newMessage = `Message (${message}) has been send to topic (${topic}).`;
      console.log(newMessage);
      //res.send(newMessage);
    } else {
      console.log(error);
    }
  });
});

app.get('/bus/create/sub/:topic', function(req, res) {
  let { topic } = req.params;
  serviceBusService.createSubscription(topic, 'LowMessages', function(error) {
    if (!error) {
      console.log(`Subscription has been created.`);
    } else {
      console.log(error);
    }
  });
});

app.get('/bus/receive/:topic/', function(req, res) {
  let { topic } = req.params;
  serviceBusService.receiveSubscriptionMessage(
    topic,
    'LowMessages',
    { isPeekLock: true },
    function(error, lockedMessage) {
      if (!error) {
        console.log(`Subscription message received: ${lockedMessage.body}`);
        serviceBusService.deleteMessage(lockedMessage, function(deleteError) {
          if (!deleteError) {
            console.log(
              `Subscription message has been deleted: ${lockedMessage.body}`
            );
          } else {
            console.log(deleteError);
          }
        });
      } else {
        console.log(error);
      }
    }
  );
});

const port = 3001;
app.listen(port, () => console.log(`Listening on port ${port}!`));
