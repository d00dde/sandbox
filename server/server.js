const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const { getDb, connectToServer } = require("./mongo");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/users", (req, res) => {
  console.log("get users");
  res.sendFile("users.html", { root: path.join(__dirname, "html") });
});

app.get("/create", (req, res) => {
  console.log("get create");
  res.sendFile("create.html", { root: path.join(__dirname, "html") });
});

app.get("/data/users", (req, res) => {
  getDb()
    .collection("users")
    .find({})
    .toArray()
    .then((data) => res.json(data));
});

app.post("/data/users", (req, res) => {
  console.log("BODY", req.body);
  if (req.body.name === "error") {
    res.sendStatus(500);
  } else {
    setTimeout(() => {
      getDb()
        .collection("users")
        .insertOne(req.body, function (err, result) {
          if (err) {
            res.status(400).send("Error inserting matches!");
          } else {
            console.log(`Added a new match with id ${result.insertedId}`);
            res.status(201).send();
          }
        });
    }, 2500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

connectToServer(() => {});
