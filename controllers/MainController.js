// Main Controller
const path = require('path');
exports.index = (req,res) => {
    res.sendFile(path.resolve('views') + '/main/index.html');
}