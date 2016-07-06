var express = require('express');
var app     = express();
var port    = process.env.PORT || 3000;
var pick_a_color  = require('./routers/pick_a_color.js');
var burger  = require('./routers/burger.js');
var tacos  = require('./routers/tacos.js');
var pickanumber  = require('./routers/pickanumber.js');
var calculator  = require('./routers/calculator.js');

app.use('/pick_a_color', pick_a_color);
app.use('/burger', burger);
app.use('/taco', tacos);
app.use('/pickanumber', pickanumber);
app.use('/calculator', calculator);


app.listen(port);

console.log("Server up");
