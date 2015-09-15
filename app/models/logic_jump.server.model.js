'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	_ = require('lodash'),
	math = require('math');


var BooleanExpressionSchema = new Schema({
	expressionString: {
		type: String,
	},
	result: {
		type: Boolean,
	}
});

/*
BooleanExpresssionSchema.plugin(tree, {
  pathSeparator : '#'              // Default path separator
  onDelete :      'DELETE'       // Can be set to 'DELETE' or 'REPARENT'. Default: 'REPARENT'
  numWorkers:     5                // Number of stream workers
  idType:         Schema.ObjectId  // Type used for _id. Can be, for example, String generated by shortid module
});
*/

BooleanExpressionSchema.methods.evaluate = function(){

	//Get headNode
	var headNode = math.parse(expressionString);
	var expressionScope = {};
	var that = this;

	//Create scope
	headNode.traverse(function (node, path, parent) {
		if(node.type === 'SymbolNode'){

			mongoose.model('Field')
				.findOne({_id: node.name}).exec(function(err, field){
					if(err) {
						console.log(err);
						throw new Error(err);
					} 

					if(!!_.parseInt(field.fieldValue)){
						that.expressionScope[node.name] = _.parseInt(field.fieldValue);
					}else {
						that.expressionScope[node.name] = field.fieldValue;						
					}
					console.log('_id: '+node.name);
					console.log('value: '+that.expressionScope[node.name]);
		    });
		}
	});

	var code = headNode.compile(); 
	var result = code.eval(expressionScope);

	this.result = result;
	return result;
};

mongoose.model('BooleanExpression', BooleanExpressionSchema);
/**
 * Form Schema
 */
var LogicJumpSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	lastModified: {
		type: Date,
	},

	BooleanExpression: {
		type: Schema.Types.ObjectId,
		ref: 'BooleanExpression'
	},

});

// return LogicJumpSchema;
mongoose.model('LogicJump', LogicJumpSchema);
