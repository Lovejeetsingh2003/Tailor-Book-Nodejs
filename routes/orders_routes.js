const routes = require('express').Router();
const orderController = require('../controller/orders_controller');

routes.post('/addorder',orderController.addOrder);

routes.post('/deleteorder', orderController.deleteOrder);

routes.post('/updateorder', orderController.updateOrder);

routes.get('/getorder', orderController.getOrder);

routes.post('/getorderbyid', orderController.getOrderById);


module.exports = routes;