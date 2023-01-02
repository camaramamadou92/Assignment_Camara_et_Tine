let User = require('../model/user');
const bcrypt = require('bcrypt');
// Récupérer tous les assignments (GET)
function getUsers(req, res){
    User.find((err, user) => {
        if(err){
            res.send(err)
        }

        res.send(user);
    });
}
// Récupérer un assignment par son id (GET)
function getUser(req, res){
    let userId = req.params.id;

    User.findOne({id: userId}, (err, user) =>{
        if(err){res.send(err)}
        res.json(user);
    })
}

// Ajout d'un assignment (POST)
function postUser(req, res){
    let newuser = new User();
    newuser.id = req.body.id;
    newuser.name = req.body.name;
    newuser.email = req.body.email;
    newuser.password = req.body.password;
    console.log("POST assignment reçu :");
    console.log(newuser)
    newuser.save( (err) => {
        if(err){
            res.send('cant post assignment ', err);
        }
        res.json({ message: `${newuser.nom} saved!`})
    })
}

// Update d'un assignment (PUT)
function updateUser(req, res) {
    console.log("UPDATE recu assignment : ");
    console.log(req.body);
    Assignment.findByIdAndUpdate(req.body._id, req.body, {new: true}, (err, assignment) => {
        if (err) {
            console.log(err);
            res.send(err)
        } else {
          res.json({message: 'updated'})
        }

      // console.log('updated ', assignment)
    });

}

// suppression d'un assignment (DELETE)
function deleteUser(req, res) {

    User.findByIdAndRemove(req.params.id, (err, assignment) => {
        if (err) {
            res.send(err);
        }
        res.json({message: `${assignment.nom} deleted`});
    })
}

module.exports = { getUsers, postUser, getUser, updateUser, deleteUser };