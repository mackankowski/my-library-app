# The Library App

Distributed system to simulate organization activity with Service Bus and Pub/Sub pattern usage.

## Architecture

- Back End: `Node.js`, `Express.js`
- Front End: `React`, `React-Router`, `Redux`, `Redux-Saga`,
- Database: `MS Server` (MSSQL)
- Service Bus with Pub/Sub pattern (`Azure`)
- `Webpack` as module builder for JavaScript \*
- Containerized app using `Docker` \*

\* _Not available yet_

## Topology

- Distributed system with 3 microservices for Customers, Orders and Storage
- Dedicated databases for each service
- Service Bus (topics) and Pub/Sub pattern implementation using Azure

## Start the app

In the project directory, you can run:

### `npm dev`

Express.js server and development app will be launched in browser.
