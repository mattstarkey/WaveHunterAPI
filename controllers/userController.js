

var User = require('../models/user.js');

exports.postUsers = function(req, res) {
  var user = new User({
    username: req.query.username,
    password: req.query.password,
    email : req.query.email
  });

  console.log(user);

  user.save(function(err) {
    if (err) {
      // res.send(err);
      res.json({ message: 'This username already exists', success : false });
    } else{
      res.json({ message: 'New user created', success : true });
    }
      

    
  });
};



exports.getUsers = function(req, res) {
  User.find(function(err, users) {
    if (err)
      res.send(err);

    res.json(users);
  });
};