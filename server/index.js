const express = require('express');
const massive = require('massive');
require('dotenv').config();

// const controller = require('./controller.js');


const app = express();
app.use(express.json());
app.use('/', express.static(__dirname));


massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );



const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}`); });