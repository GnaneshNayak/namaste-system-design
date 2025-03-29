const express = require('express');
const bodyParser = require('body-parser');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const path = require('path');

const PROTO_PATH = path.resolve(__dirname, '../customer.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);
const CustomerService = customerProto.CustomerService;

// Initialize gRPC client
const grpcClient = new CustomerService(
  '127.0.0.1:3001',
  grpc.credentials.createInsecure(),
);

// Initialize Express
const app = express();
app.use(bodyParser.json());

// REST API: Get all customers (GET)
app.get('/', (req, res) => {
  grpcClient.GetAll({}, (error, response) => {
    if (error) {
      res.status(500).json({ error: error.details });
    } else {
      res.json(response.customers);
    }
  });
});

// REST API: Insert a new customer (POST)
app.post('/insert', (req, res) => {
  const { name, address, age } = req.body;

  grpcClient.Insert({ name, address, age }, (error, response) => {
    if (error) {
      res.status(500).json({ error: error.details });
    } else {
      res.json(response);
    }
  });
});

// Start Express server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`REST API is running at http://localhost:${PORT}`);
});
