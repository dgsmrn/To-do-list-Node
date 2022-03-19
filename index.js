require('dotenv').config()
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectTodb = require("./database/db");

connectTodb();

const app = express();
const port = process.env.PORT;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes);

app.listen(port, () =>
  console.log(`Servidor Rodando em http://localhost:${port}`)
);

//npm run dev para rodar o servidor
