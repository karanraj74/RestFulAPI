const express = require("express");
const c = require("./db/conn");

const app = express();
const port = process.env.PORT || 8000;
const Student = require("./models/students");

// middleware
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

app.listen(port, () => {
  console.log(`connection is setup on ${port}`);
});
