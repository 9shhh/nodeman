// SignUpController
const path = require('path');
/**
 * const UserTable = require('User');
 */

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
    /**********************************************************
    UserTable.findOne({
        where : {
            user_id : req.body.id
        }
    }).then(user => {
        if(user) {
            return res.status(200)
            .send('<script>alert("이미 가입된 아이디 존재");location.href="/"</script>');
        }

        UserTable.create({
            id : req.body.id,
            password : req.body.password
        })
        .then((result) => {
            console.log(result)
            return res.send('<script>alert("가입 완료");location.href="/"</script>');
        })
        .catch((err) =>{
            return res.status(400).send(err);
        });
    });
***********************************************************/

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