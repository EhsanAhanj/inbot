const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helemt = require("helmet");
const panel = require("./routes/panel");

app.use(express.json());
app.use(helemt());
app.use("/", panel);

const options = {
  useNewUrlParser: true
};
mongoose
  .connect("mongodb://localhost/inbot", options)
  .then(() => console.log("conected to mongodb"))
  .catch(err => console.err("error in connecting to database", err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App lisening on port ${PORT}`);
});
