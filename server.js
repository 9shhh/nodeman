/* server start point js*/
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// const sequelize = require('./config').sequelize;
const app = express();
const routes = require('./routes');

/**
 * database connection 
 */
const db = require('./config/databaseSet')();
/*
*   end database connection
*/


// sequelize.sync();

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

routes.routeInit(app);

app.listen(process.env.PORT || '3000', ()=>{
    console.log("start server");
});


