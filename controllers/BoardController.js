//SignInController
const path = require('path');

// connect db
exports.init = (db) => {
    this.dbconnection = db;
}

// board page show
exports.index = (req,res) => {
    let query = 'select board.id, board.user_no, user.user_id, board.title, board.contents, board.created_at FROM board join user on board.user_no = user.id';
    this.dbconnection.query(query,function(err,rows){
        if (err) throw err;

        res.locals.user = req.session.loginId;
        res.render(path.resolve('views') + '/board/index.ejs',{datas : rows}); 
    });
};

// create contents
exports.store = (req,res) => {
    let query = 'insert into board (user_no,title,contents) values(?,?,?)';
    let params = [req.session.loginId,req.body.title,req.body.contents]
    this.dbconnection.query(query,params,function(err){
        if (err) throw err;
        
        res.redirect('/board');
    });
};

// delete contents
exports.destory = (req,res) => {
    let query = 'delete from board where id=?';
    this.dbconnection.query(query,req.params.id,function(err){
        if (err) throw err;
        
        res.redirect('/board');
    });
};

// edit contents form
exports.edit = (req,res) => {
    let query = 'select * from board where id=?';
    this.dbconnection.query(query,req.params.id,function(err,rows){
        if (err) throw err;
    
        res.render(path.resolve('views') + '/board/edit.ejs',{data : rows});
    });
};

// update contents
exports.update = (req,res) => {
    let query = 'update board set title=?, contents=? where id=?';
    let params = [req.body.title,req.body.contents,req.params.id];
    this.dbconnection.query(query,params,function(err){
        if (err) throw err;
        
        res.redirect('/board');
    });
};