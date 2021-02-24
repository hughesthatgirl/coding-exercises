var orm = require("./config/orm.js");

orm.selectWhere("parties", "party_type", "grown-up", function(err, data){
    if (err){
        console.log(err)
    } else {
        console.log(data)
    }
});