const cartController = require('../app/http/controllers/customers/cartController');
const authController = require('../app/http/controllers/authController');
const homeController = require('../app/http/controllers/homeController');

function initRoutes(app) {

    app.get('/', homeController().index);

    // (req, res) => {
    //     res.render('home');
    // });

    app.get('/login', authController().login);
    app.get('/register', authController().register);

    app.get('/cart', cartController().index);
    app.post('/updata-cart', cartController().updata)
}

module.exports = initRoutes;