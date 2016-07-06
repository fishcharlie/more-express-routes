var express = require('express');
var router = express.Router();

var burgers = ["Hamburger","Cheese Burger","Dble Cheese Burger"];


router.get('/:id', function(req, res) {
  var myID = req.params.id;
  res.send(burgers[myID]);
});


module.exports = router;
