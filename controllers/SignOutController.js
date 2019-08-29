// SignOutController
exports.destory = (req,res) => {
   req.session.destroy();
    res.redirect('/');
};