//SignInController
const path = require('path');
/******************************
 * const UserTable = require('User');
 * const jwt = require('../middleware/jwt');
 ***************************/

// connect db
exports.init = (db) => {
    this.dbconnection = db;
}

// login processing
exports.store = (req, res) => {
   /*************************************************************
    if (!res.locals.token) {
        UserTable.findOne({
            where: {
                user_id: req.body.id
            }
        }).then(user => {
            if (user.password !== req.body.password) {
                return res.status(400).send('<script>alert("비밀번호 및 아이디를 확인해주세요.");location.href="/"</script>')
            }

            res.locals.token = jwt.sign({
                id: user.id,
                password: user.password
            });
            return res.render(path.resolve('views') + '/main/index.ejs');
        }).catch(err => {
            return res.status(400).send(err)
        })
    }
    *************************************************************/
    let query = 'select * from user where user_id = ? and password = ?';
    let params = [req.body.id, req.body.password];
    this.dbconnection.query(query, params, function (err, row) {
        if (err) throw err;

        if (row.length) {
            req.session.loginId = row[0].id;
            res.locals.user = req.session.loginId;
            res.render(path.resolve('views') + '/main/index.ejs');
        } else {
            res.redirect('/');
        }
    });
};
