// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {

	if(_.isString(obj)){
		return obj;
	}else if(_.isNumber(obj)){
		return obj.toString();
	}else if(_.isNull(obj)){
		return 'null';
	}else if(obj === true){
		return 'true';
	}else if(obj ===false){
		return 'false';
	}else if(_.isArray(obj)){
		return obj = '['+obj+']';
	}else if(_.isObject(obj)){
		return
	}
  	
};
