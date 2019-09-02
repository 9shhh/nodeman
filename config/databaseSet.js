const mysql = require('mysql');

module.exports = () => {
    const dbconfig   = require('./database');
    const connection = mysql.createConnection(dbconfig);
    connection.connect();
    
    const dbConfig = require('./config').dataModels;
    
    //create database tables
    dbConfig.forEach(models => {
        connection.query(`select * from ${models.title}`, function(err,rows){
            if(!rows){
                connection.query(`CREATE  TABLE ${models.title} (
                    ${models.query}`
                  )              
            }; 
        });
    });

    return connection;
}
