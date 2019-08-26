// SignUpController
const path = require('path');

// connect db
exports.init = (db) => {
    this.dbconnection = db;
}

// signUp form
exports.index = (req,res) => {
    res.render(path.resolve('views') + '/signUp/index.ejs')
};

// create user
exports.store = (req,res) => {
    let query = 'insert into user (user_id,password) values(?,?)';
    let params = [req.body.id,req.body.password]
    this.dbconnection.query(query,params,function(err){
        if (err) throw err;
        
        res.redirect('/');
    });
};