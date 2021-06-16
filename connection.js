const mysql = require("mysql");

var mysqlConnection= mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Yoga#9844",
        database:"shoppingcart",
        multipleStatements: true

    }
);

mysqlConnection.connect((err)=>{
    if(!err)
    {
        console.log("success");
    }
    else
    {
        console.log("failed");
    }
})

module.exports - mysqlConnection;