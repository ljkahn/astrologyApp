const express = require("express");
const mysql = require("mysql2");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.port || 3001;

const app = express()

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'roo1234',
    database: 'astrology_db'
  },
  console.log(`Connected to the astrology_db database.`)
);

// Query database
db.query('SELECT * FROM users', function (err, results) {
  //sql will always return an ARRAY OF OBJECTS !!!!
  console.log(results);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});


// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);


app.get("*", (req, res) => res.send(`404 - Error Page`));


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);