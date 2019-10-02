var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res) {
    burger.selectAll(function(data){
        res.render("index", {burger: data});
    });
});

router.post("/api/burgers", function(req, res){
    burger.insertOne(req.body.burgerName, function(result){
        res.json({ id: data.insertID });
    });
});

router.put("api/burgers/:id", function(res, req){
    burger.updateOne(req.params.id, function(result){
        if(data.changedRows === 0){
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    })
});

module.exports = router;