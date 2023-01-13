require('./db.config');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let user1 = require('./routes/userRoute');
const checkTokenMiddleware = require('./webtoken/check')


// Pour accepter les connexions cross-domain (CORS)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// Pour les formulaires
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT || 8010;

// les routes
const prefix = '/api';


app.route(prefix + '/assignments')
  .get(user1.getUsers);

app.route(prefix + '/assignments/:id')
  .get(user1.getUser)
  .delete(user1.deleteUser);


app.route(prefix + '/assignments')
  .post(user1.postUser)
  .put(user1.updateUser);

// On démarre le serveur
app.listen(port, "0.0.0.0");
console.log('Serveur démarré sur http://localhost:' + port);

module.exports = app;