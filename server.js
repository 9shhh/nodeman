/* server start point js*/
const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes');

routes.routeInit(app);
app.listen('3000',()=>{
    console.log("start server");
});


