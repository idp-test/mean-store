'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users.server.controller');
	var products = require('../../app/controllers/products.server.controller');
	
	// Product Comment
	app.route('/products/comments/:productId')
		.get(products.getComments);

	app.route('/products/comments')
		.post(products.saveComment);

	// Products Routes
	app.route('/products')
		.get(products.list)
		.post(products.create);



	app.route('/products/:productId')
		.get(products.read)
		.put(products.update)
		.delete(products.delete);


	// Finish by binding the Product middleware
	app.param('productId', products.productByID);
};
