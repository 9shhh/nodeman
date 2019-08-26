/* defined route lists */ 
module.exports.routeInit = (app,connection) =>{
    // main 
    const mainController = require('../controllers/MainController');
    app.route('/')
       .get(mainController.index)

    // sign up
    const signUpController = require('../controllers/SignUpController');
    signUpController.init(connection);
    app.route('/signUp')
       .get(signUpController.index)
       .post(signUpController.store)

    // sign In
    const signInController = require('../controllers/SignInController');
    signInController.init(connection);
    app.route('/signIn')
       .post(signInController.store)

    // board
}




