//SignInController
const path = require('path');
const {User,Board} = require('../models');

// board page show
exports.index = (req,res) => {
    Board
    .findAll({
        include : User
    })
    .then((result)=>{
        res.locals.user = req.session.loginId;
        res.render(path.resolve('views') + '/board/index.ejs',{datas : result}); 
    });
    
};

// create contents
exports.store = (req,res) => {
    Board
    .create({
        userNo : req.session.loginId
        ,title : req.body.title
        ,contents : req.body.contents
    })
    .then(()=>{
        res.redirect('/board');
    });
};

// delete contents
exports.destory = (req,res) => {
    Board
    .destroy({
        where : {
            id : req.params.id
        }
    })
    .then(()=>{
        res.redirect('/board');
    });
};

// edit contents form
exports.edit = (req,res) => {
    Board
    .findOne({
        where : {
            id : req.params.id
        }
    })
    .then((result)=>{
        console.log(result);
        res.render(path.resolve('views') + '/board/edit.ejs',{data : result});
    });
};

// update contents
exports.update = (req,res) => {
    Board
    .update(
         {title : req.body.title,contents : req.body.contents}
        ,{where : {id : req.params.id}}
        )
    .then(()=>{
        res.redirect('/board');
    });
};