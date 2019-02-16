const Instagram = require("./Instagram");
const Customer = require("../model/Customer");
const mongoose = require("mongoose");

async function createCustomer(username, password, admin) {
  const client = new Instagram({ username, password });

  const user = await client.login();

  if (user.authenticated) {
    let newCustomer = await Customer.findOne({ userId: user.userId });

    if (!newCustomer) {
      console.log("get informaition from admin...");
      const userAdmin = await client.getUserByUsername({
        username: admin
      });

      newCustomer = new Customer({
        userId: user.userId,
        username,
        admin: userAdmin
      });
      await newCustomer.save();
    }
    return newCustomer._id;
  }
}

module.exports.createCustomer = createCustomer;
