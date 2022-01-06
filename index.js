const express = require('express');
const app = express();

// ROTA
app.get('/home', (req, res) => {
    res.send('Hello World');
});

app.listen(3000); //http://localhost:3000/home

//npm i -- instala todas dependencias do projeto neste caso o express