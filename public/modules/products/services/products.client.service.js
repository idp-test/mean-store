'use strict';

//Products service used to communicate Products REST endpoints
angular.module('products').factory('Products', ['$resource',
	function($resource) {
		return $resource('products/:productId', { productId: '@_id'
		}, {
			update: {
				method: 'PUT'
			}
		});
	}
]);

//Product comments
angular.module('products').factory('ProductComments', ['$resource',
	function($resource) {
		return $resource('products/comments/:productId', { productId: '@_id'
		}, {
			update: {
				method: 'PUT'
			},
			get: {
				method: 'GET', isArray: true //accepts an object by default
			}
		});
	}
]);
