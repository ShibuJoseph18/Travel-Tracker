import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "shibudB",
  port: 5432,
});

db.connect();
async function checkVisisted() {
  const result = await db.query("SELECT country_code FROM visited_countries");
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  return countries;
}

app.get("/", async(req, res) => {
  const countries = await checkVisisted();
  res.render("index.ejs", {
    countries: countries, 
    total: countries.length,
    placeHolderText : "Enter country name"
  });
  // db.end();
});

app.post("/add", async(req, res) => {
  // console.log(req.body);
  const input = req.body.country;
  console.log(typeof(input));
  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%'",
      [input.toLowerCase()]
    );
    const data = result.rows[0];
    const country_code = data.country_code;
    // console.log(data, country_code);
    try {
      await db.query("INSERT INTO visited_countries (country_code) VALUES($1)",
      [country_code]
      );
      res.redirect("/");
    }
    catch(err) {
      const countries = await checkVisisted();
      res.render("index.ejs",{
      countries : countries,
      total: countries.length,
      error: "Country name already added"
      });
    }
  } 
  catch(err) {
    const countries = await checkVisisted();
    res.render("index.ejs",{
      countries : countries,
      total: countries.length,
      error: "Invalid country name"
    })
  }
}); 

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
