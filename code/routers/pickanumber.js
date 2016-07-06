var express = require('express');
var router = express.Router();


router.get("/", function (req, res) {
    var number = req.query.number;
    if (number < 7) {
        res.send("Too Low");
    }
    else if (number > 7) {
        res.send("Too High");
    }
    else if (number === 7) {
        res.send("Nailed it!");
    }
});


module.exports = router;
