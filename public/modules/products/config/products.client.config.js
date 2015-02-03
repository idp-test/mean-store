'use strict';

// Configuring the Articles module
angular.module('products').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Products', 'products', 'dropdown', '/products(/create)?');
		Menus.addSubMenuItem('topbar', 'products', 'List Products', 'products');
		//Menus.addSubMenuItem('topbar', 'products', 'New Product', 'products/create', 'products/create', true, ['editor']); //If special permissions are require
		Menus.addSubMenuItem('topbar', 'products', 'New Product', 'products/create');
	}
]);
