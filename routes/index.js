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
    const boardController = require('../controllers/BoardController');
    boardController.init(connection);
    app.route('/board')
       .get(boardController.index)
       .post(boardController.store)

       app.route('/board/:id/edit')
       .get(boardController.edit)
       
       app.route('/board/:id')
       .get(boardController.destory)
       .post(boardController.update)
}




