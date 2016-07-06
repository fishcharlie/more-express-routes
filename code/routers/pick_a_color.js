var express = require('express');
var router = express.Router();


router.get('/:color', function(req, res) {
  var myColor = req.params.color;
  res.send("You picked: " + myColor);
});


module.exports = router;
