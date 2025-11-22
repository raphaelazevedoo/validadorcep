const express = require('express');
const app = express();
const routes = require('./src/routes/cepRoutes.js');

app.use(express.json());

app.use(routes)

app.listen(3000, () => {
    console.log("The server is up");
})