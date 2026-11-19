const express = require("express");
const app = express();
const port = 3000;

// Bruk EJS til å vise sidene og hent filer fra public-mappen.
app.set("view engine", "ejs");
app.use(express.static("public"));

// Viser startsiden.
app.get("/", (req, res) => {
  return res.render("index");
});

// Viser siden med tjenester.
app.get("/tjenester", (req, res) => {
  return res.render("tjenester");
});

// Begge lenkene viser kontaktsiden.
app.get(["/kontakt", "/Kontakt"], (req, res) => {
  return res.render("kontakt");
});

// Alle lenkene viser informasjonssiden.
app.get(["/informasjon", "/info", "/Informasjon"], (req, res) => {
  return res.render("info");
});

// Starter nettsiden på porten.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
