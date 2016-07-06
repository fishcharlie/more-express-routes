var express = require('express');
var router = express.Router();

var tacos = ["Soft Taco","Crunchy Taco","Super Taco"];


router.get('/:id', function(req, res) {
  var myID = req.params.id;
  res.send(tacos[myID]);
});


module.exports = router;
