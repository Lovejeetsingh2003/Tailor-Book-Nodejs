const routes = require('express').Router();
const categoryController = require('../controller/category_controller');

routes.post('/addcategory', categoryController.addCategory);

routes.post('/deletecategory', categoryController.deleteCategory);

routes.post('/updatecategory', categoryController.updateCategory);

routes.get('/getcategory', categoryController.getCategory);

routes.post('/getcategorybyid', categoryController.getCategoryById);


module.exports = routes;