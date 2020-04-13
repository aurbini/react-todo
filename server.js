const express = require("express"); 

const mongoose = require("mongoose"); 
const routes = require('./routes')
const app = express(); 
const PORT = process.env.PORT || 3001; 

//MIddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes); 

//Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-todoList",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

