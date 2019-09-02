/* server start point js*/
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sequelize = require('./config').sequelize;
const app = express();
const routes = require('./routes');
// const mysql = require('mysql');
// const dbconfig = require('./config/database.js');
// const connection = mysql.createConnection(dbconfig);

sequelize.sync();

/*APP USE-------------------*/ 
app.use(express.urlencoded({
    extended : false
}));

app.use(session({
    secret : 'keyboard cat'
    ,resave : false
    ,saveUninitialized : true
    ,store: new FileStore()
}));
/*--------------------------*/ 

// connection.connect();

routes.routeInit(app);
app.listen('3000',()=>{
    console.log("start server");
});


