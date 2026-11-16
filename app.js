const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));

/* en rute som peker mot index */
app.get("/", (req, res) => {
  return res.render("index");
});

app.get("/tjenester", (req, res) => {
  return res.render("tjenester");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
