const path = require('path');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const PROTO_PATH = path.resolve(__dirname, '../customer.proto');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const customerProto = grpc.loadPackageDefinition(packageDefinition);

const server = new grpc.Server();

const customers = [
  { id: '1', name: 'Gnanesh', age: 22, address: 'xxx yyx xxyyy' },
  { id: '2', name: 'Nayak', age: 42, address: 'xxx yyx xxyyy' },
];

server.addService(customerProto.CustomerService.service, {
  getAll: (call, callback) => callback(null, { customers }),
  getUser: (call, callback) => {
    const customer = customers.find((u) => u.id === call.request.id);
    if (customer) callback(null, customer);
    else
      callback({ code: grpc.status.NOT_FOUND, details: 'Customer not found' });
  },
  insert: (call, callback) => {
    const customer = call.request;
    customer.id = (customers.length + 1).toString();
    customers.push(customer);
    callback(null, customer);
  },
  update: (call, callback) => {
    const index = customers.findIndex((u) => u.id === call.request.id);
    if (index !== -1) {
      customers[index] = { ...customers[index], ...call.request };
      callback(null, customers[index]);
    } else
      callback({ code: grpc.status.NOT_FOUND, details: 'Customer not found' });
  },
  remove: (call, callback) => {
    const index = customers.findIndex((u) => u.id === call.request.id);
    if (index !== -1) {
      customers.splice(index, 1);
      callback(null, {});
    } else
      callback({ code: grpc.status.NOT_FOUND, details: 'Customer not found' });
  },
});

server.bindAsync(
  '127.0.0.1:3001',
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log('gRPC server running on port 3001');
    server.start();
  },
);
