/* server start point js*/
const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const sequelize = require('./models').sequelize;
const app = express();
sequelize.sync();
const routes = require('./routes');

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

routes.routeInit(app);
app.listen('3000',()=>{
    console.log("start server");
});


 