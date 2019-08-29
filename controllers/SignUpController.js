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
    let signUpCheck = 'select * from user where user_id = ?';
    let connected = this.dbconnection;
    connected.query(signUpCheck,req.body.id,function(err,row){
        if(row.length > 0){
            res.send('<script>alert("이미 가입된 아이디 존재");location.href="/"</script>');

        }else{
            let query = 'insert into user (user_id,password) values(?,?)';
            let params = [req.body.id,req.body.password]
            connected.query(query,params,function(err){
                if (err) throw err;                
                res.send('<script>alert("가입 완료");location.href="/"</script>');
            });
        }
    });
};