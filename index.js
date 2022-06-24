const express = require("express");
const { json } = require("express");
const flights = require("./controllers/flightController");
const models = require("./models/Flight");
const routes = require("./routes/flightRoute");

const app = express();
app.get = ('/', (req, res){
  res.send('My server is here')
});

app.use(json());

app.use("/", routes);

const port = 5000;

app.listen(5000, function(){
  console.log('Server is running on port');
});
