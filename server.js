const express = require("express"); 
const path = require("path"); 
const app = express(); 

const mongoose = require("mongoose"); 
const PORT = process.env.PORT || 3001; 

//MIddleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Connection
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-todoList",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
)

const Todo = mongoose.model('todo', new mongoose.Schema(
  { name: 'string',
    complete: {
      type: 'boolean',
      default: false
    }
  }
));

app.post("/api/todoList", async(req, res) => {
  const todo = await Todo.create({name: req.body.name})
  res.json(todo); 
})

app.put("/api/todoList", async(req, res) => {
  const id = req.body.id
  const todoList = await Todo.updateOne({_id: id }, {complete: true});
  res.json(todoList); 
})

app.get("/api/todoList", async(req, res) => {
  const todoList = await Todo.find({});
  res.json(todoList); 
})

app.delete("/api/todoList/:id", async(req, res) => {
  const id = req.params.id;
  console.log(id); 
  const todoList = await Todo.deleteOne({_id: id })
  res.json(todoList); 
})

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

