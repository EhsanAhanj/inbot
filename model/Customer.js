const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  userId: String,
  username: String,
  lastUpdateAdmin: Date,
  admin: Object,
  date: { type: Date, default: Date.now },
  requests: Number,
  addedFollowers: Number,
  unFollowed: Number,
  comments: Number,
  commentWanted: [String],
  directMesseage: String,
  targets: Array,
  lastUpdateTargets: Date
});
const Customer = mongoose.model("Customer", customerSchema);

module.exports = Customer;
