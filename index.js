const express = require("express");
const bodyParser= require("body-parser");
var numverify = require("./numverify.js");

var app= express();
var port= 3000 ; 





//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/task',numverify);


app.listen(process.env.PORT||port,function(){
    console.log('server started on')

});