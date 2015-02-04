'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Product name',
		trim: true
	},
	description: {
		type: String,
		default: '',
		required: 'Please fill Product description',
		trim: true
	},
	price: {
		type: String,
		default: '',
		required: 'Please fill Product price',
		trim: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

var ProductCommentSchema = new Schema({
	text: {
		type: String,
		default: '',
	},
    	productId: {
		type: String,
    		required: 'No Product ID available'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

ProductCommentSchema.method = function(key){
	var _this = this;
	_this.find({ productId: key},
  	function(err, results) {
  		if (!err) {
			console.log('results:', results);
  		} else {
  			console.log('ERROR');
  		}
	});
};

mongoose.model('Product', ProductSchema);
mongoose.model('Comment', ProductCommentSchema);
