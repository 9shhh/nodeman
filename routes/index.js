/* defined route lists */ 
module.exports.routeInit = (app) =>{
    // main 
    const mainController = require('../controllers/MainController');
    app.route('/')
       .get(mainController.index)

    // sign up
    const signUpController = require('../controllers/SignUpController');
    app.route('/signUp')
       .get(signUpController.index)
       .post(signUpController.store)

    // sign in
    const signInController = require('../controllers/SignInController');
    app.route('/signIn')
       .post(signInController.store)

   // sign out
   const signOutController = require('../controllers/SignOutController');
   app.route('/signOut')
      .get(signOutController.destory)   

    // board
    const boardController = require('../controllers/BoardController');
    app.route('/board')
       .get(boardController.index)
       .post(boardController.store)

       app.route('/board/:id/edit')
       .get(boardController.edit)
       
       app.route('/board/:id')
       .get(boardController.destory)
       .post(boardController.update)
}




