var express = require('express');
var router = express.Router();


router.get('/add/:x/:y', function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var newResult = x+y;
  res.send(newResult.toString()+" is the result");
});

router.get('/subtract/:x/:y', function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var newResult = x-y;
  res.send(newResult.toString()+" is the result");
});

router.get('/multiply/:x/:y', function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var newResult = x*y;
  res.send(newResult.toString()+" is the result");
});

router.get('/divide/:x/:y', function(req, res) {
  var x = parseInt(req.params.x);
  var y = parseInt(req.params.y);
  var newResult = x/y;
  res.send(newResult.toString()+" is the result");
});


module.exports = router;
