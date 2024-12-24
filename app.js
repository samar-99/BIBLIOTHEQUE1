const express = require('express');
const bodyParser = require('body-parser');


const auteurRoutes = require('./routes/auteurRoutes');
const livreRoutes = require('./routes/livreRoutes');
const { connexion } = require('./config/db');
const {syncModels } = require('./models')

const app = express();
app.use(bodyParser.json());

app.use('/api', livreRoutes);
app.use('/api', auteurRoutes);


const PORT= 5000;

app.listen(PORT, async () =>{
    console.log('app is running on port', PORT);
    await connexion();
})