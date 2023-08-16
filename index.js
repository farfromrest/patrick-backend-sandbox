const express = require("express");
const app = express();

const validUser = {
  email: "john@doe.com",
  password: "changeme",
};

app.set("view engine", "pug");

app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/login", (req, res) => {
  if (
    req.body.email === validUser.email &&
    req.body.password === validUser.password
  ) {
    res.send("yup");
  } else {
    res.send("nope");
  }
});

app.listen(3000, () => {
  console.log("express is running on port 3000");
});
