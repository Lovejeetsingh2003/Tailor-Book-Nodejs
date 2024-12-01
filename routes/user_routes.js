const routes = require('express').Router();
const user_controller = require('../controller/user_controller');

routes.post('/registeration', user_controller.register);

routes.post('/login', user_controller.login);

routes.post('/forgot', user_controller.forgot);


module.exports = routes;