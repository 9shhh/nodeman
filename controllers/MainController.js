// Main Controller
const path = require('path');

// main page show
exports.index = (req,res) => {
    res.locals.user = req.session.loginId
    res.render(path.resolve('views') + '/main/index.ejs');
};