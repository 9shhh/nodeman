//SignInController
const path = require('path');
const { User } = require('../models');

// login processing
exports.store = (req,res) => {
    User
    .findOne({
        where : {
            userId : req.body.id
           ,password : req.body.password
        }
    })
    .then((result)=>{
        if(result){
            req.session.loginId = result.id;
            res.locals.user = req.session.loginId;
            res.render(path.resolve('views') + '/main/index.ejs');    
        }else{
            res.redirect('/');
        }
    });
};
