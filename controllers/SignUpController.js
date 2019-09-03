// SignUpController
const path = require('path');
const { User } = require('../models');

// signUp form
exports.index = (req,res) => {
    res.render(path.resolve('views') + '/signUp/index.ejs')
};

// create user
exports.store = (req,res) => {
    User
    .findOne({
        where : {userId : req.body.id}
    })
    .then((result)=>{
        if(result){
            res.send('<script>alert("이미 가입된 아이디 존재");location.href="/"</script>');
        }else{
            User.create({ 
                userId : req.body.id
               ,password : req.body.password
            })
            .then(()=>{
               res.send('<script>alert("가입 완료");location.href="/"</script>');
           });
        }
    });
};