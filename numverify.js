const express = require("express");
var router = express.Router();
var Request = require("request");


var API_ACCESS_KEY="709320aa78b239c76d3b70fc09833036";

router.get('/numverify/:number',function(req,res,next){
    var myNumber =req.params.number;
    Request.get("http://apilayer.net/api/validate?access_key="+API_ACCESS_KEY+"&number="+myNumber+"&country_code=&format=1", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    //console.dir(JSON.parse(body));
    res.send(JSON.parse(body));
});
});





module.exports =router;