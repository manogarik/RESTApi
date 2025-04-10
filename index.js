const express = require("express");

// We import the body-parser package.
// This package contains middleware that can handle
// the parsing of many different kinds of data,
// making it easier to work with data in routes that
// accept data from the client (POST, PATCH).
const bodyParser = require("body-parser");

const users = require("./routes/users");
const posts = require("./routes/posts");
const comments = require("./routes/comments")

const app = express();
const port = 3000;

// We use the body-parser middleware FIRST so that
// we have access to the parsed data within our routes.
// The parsed data will be located in "req.body".
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));



app.use("/api/users", users);
app.use("/api/posts",posts);
app.use("/api/comments", comments);




app.get("/", (req, res) => {
  res.send("Work in progress!");
});

 app.use((req, res) => {
  res.status(404);
   res.json({ error: "Resource Not Found" });
 });

app.listen(port, () => {
  console.log(`Server listening on port: ${port}.`);
});