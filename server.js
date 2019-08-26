/* server start point js*/
const express = require('express');
const app = express();
const routes = require('./routes');
const mysql = require('mysql');
const dbconfig = require('./config/database.js');
const connection = mysql.createConnection(dbconfig);

app.use(express.urlencoded({
    extended : false
}))

connection.connect();

routes.routeInit(app,connection);
app.listen('3000',()=>{
    console.log("start server");
});


