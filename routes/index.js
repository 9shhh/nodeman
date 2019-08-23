/* defined route lists */ 
module.exports.routeInit = (app) =>{
    // main 
    const mainController = require('../controllers/MainController');
    app.route('/')
       .get(mainController.index)

    // sign up

    // board
}




