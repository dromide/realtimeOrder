const cartController = require('../app/http/controllers/customers/cartController');
const authController = require('../app/http/controllers/authController');
const homeController = require('../app/http/controllers/homeController');
const guest = require('../app/http/middlewares/guest');

function initRoutes(app) {

    app.get('/', homeController().index);

    // (req, res) => {
    //     res.render('home');
    // });

    app.get('/login', guest, authController().login);
    app.post('/login', authController().postLogin);

    app.get('/register', guest, authController().register);
    app.post('/register', authController().postRegister);

    app.post('/logout', authController().logout);

    app.get('/cart', cartController().index);
    app.post('/updata-cart', cartController().updata)
}

module.exports = initRoutes;