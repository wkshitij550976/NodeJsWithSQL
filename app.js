var db = require("./dboperation");
var order = require("./orders");

db.getorders().then(result=>{
                    console.log(result);
})