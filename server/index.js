require('dotenv').config();
const express = require('express'),
  axios = require('axios'),
  massive = require('massive');
  session = require('express-session'),
  bodyParser = require('body-parser');

// const controller = require('./controller.js');


const app = express();
app.use(bodyParser.json());
app.use('/', express.static(__dirname));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
  })
);


massive(process.env.CONNECTION_STRING)
.then( dbInstance => {
    app.set('db', dbInstance)
}).catch( err => console.log(err) );

app.post('/api/auth/register', (req, res) => {
    const dbInstance = req.app.get('db');
    const {user_id, username, password} = req.body;
    
    dbInstance.create_user([user_id, username, password])
    .then ( () => res.sendStatus(200) )
    .catch( err => {
        res.status(500).send({error: 'Server error'});
        console.log(err)
    });
})

function checkLoggedIn(req, res, next) {
    if (req.session.user) {
      next();
    } else {
      res.status(403).json({ message: 'Unauthorized' });
    }
  }
  
  app.get('/api/auth/login', checkLoggedIn, (req, res) => {
    res.json({ someSecureData: 123 });
  });

  app.get('/api/posts', (req, res) => {

  })



const port = process.env.PORT || 4000;
app.listen( port, () => { console.log(`Listening on port ${port}`); });