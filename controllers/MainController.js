// Main Controller
const path = require('path');

// main page show
exports.index = (req,res) => {
    res.render(path.resolve('views') + '/main/index.ejs');
};