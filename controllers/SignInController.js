//SignInController
const path = require('path');

// connect db
exports.init = (db) => {
    this.dbconnection = db;
}

// login processing
exports.store = (req,res) => {
    let query = 'select * from user where user_id = ? and password = ?';
    let params = [req.body.id,req.body.password];
    this.dbconnection.query(query,params,function(err,row){
        if(err) throw err;

        if(row.length){
            req.session.loginId = row[0].id;
            res.locals.user = req.session.loginId;
            res.render(path.resolve('views') + '/main/index.ejs');    
        }else {
            res.redirect('/');
        }
    });
};
