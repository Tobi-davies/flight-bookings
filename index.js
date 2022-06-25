const express = require("express");
const { json } = require("express");

const booking = require("./router/flightRoute");

const app = express();

app.use(json());

app.use("/booking", booking);

const PORT = process.env.PORT || 3000; //port to connect

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
