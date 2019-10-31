const mongoose = require("mongoose");
mongoose.Promise = require("bluebird");

// const url = "mongodb://localhost:27017/chat";
const url = "mongodb://amalikova-lab9-mongodb-replicaset-0.amalikova-lab9-mongodb-replicaset:27017,amalikova-lab9-mongodb-replicaset-1.amalikova-lab9-mongodb-replicaset:27017,amalikova-lab9-mongodb-replicaset-2.amalikova-lab9-mongodb-replicaset:27017/chat?replicaSet=rs0";

const connect = mongoose.connect(url, { useNewUrlParser: true });

module.exports = connect;