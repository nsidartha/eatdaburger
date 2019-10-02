var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cd){
        orm.selectAll("burgers", function(res){
            cd(res);
        });
    },
    insertOne: function(burgerName, cd){
        orm.insertOne("burgers", "burger_name", burgerName, function(res){
            cd(res);
        });
    },
    updateOne: function(burgerID, cd){
        orm.updateOne("burgers", "devoured", true, burgerID, function(res){
            cd(res);
        });
    }
};

module.exports = burger;