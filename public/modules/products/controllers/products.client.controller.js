'use strict';

// Products controller
angular.module('products').controller('ProductsController', ['$scope', '$stateParams', '$location', 'Authentication', 'Products',
	function($scope, $stateParams, $location, Authentication, Products) {
		$scope.authentication = Authentication;

		// Create new Product
		$scope.create = function() {
			// Create new Product object
			var product = new Products ({
				name: this.name,
				description: this.description,
				price: this.price
			});

			// Redirect after save
			product.$save(function(response) {
				$location.path('products/' + response._id);

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Product
		$scope.remove = function(product) {
			if ( product ) { 
				product.$remove();

				for (var i in $scope.products) {
					if ($scope.products [i] === product) {
						$scope.products.splice(i, 1);
					}
				}
			} else {
				$scope.product.$remove(function() {
					$location.path('products');
				});
			}
		};

		// Update existing Product
		$scope.update = function() {
			var product = $scope.product;

			product.$update(function() {
				$location.path('products/' + product._id);
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Products
		$scope.find = function() {
			$scope.products = Products.query();
		};

		// Find existing Product
		$scope.findOne = function() {
			$scope.product = Products.get({ 
				productId: $stateParams.productId
			});
		};
	}
]);

// Product Comment Controller
angular.module('products').controller('ProductsCommentController', ['$scope', '$stateParams', '$location', 'Authentication', 'ProductComments',
	function($scope, $stateParams, $location, Authentication, ProductComments) {
		$scope.authentication = Authentication;

		// Create new Product
		$scope.createComment = function() {
			// Create new Product object
			var comment = new ProductComments ({
				text: this.text,
				productId: $stateParams.productId
			});

			// Redirect after save
			comment.$save(function(response) {
				// Refresh comments after save
				$scope.productComments();

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Find a list of Products
		$scope.productComments = function() {
			$scope.comments = ProductComments.query({ 
				productId: $stateParams.productId
			}, function(results){
				return results;
			});
		};

	}
]);
