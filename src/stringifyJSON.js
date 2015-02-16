// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = '';
	if(typeof(obj) !== 'object'){
		result = "" + obj + "";	
	}else if( obj === null){
		result += 'null';
	}else if(Array.isArray(obj)){
		for(var i = 0; i < obj.length; i++){
			result += stringifyJSON(obj[i]);
		}
		result += '['+result+']';
	}else if(typeof(obj) === 'object' && !Array.isArray(obj)){
		for(var j in obj){
			result += stringifyJSON(i) + ':' + stringifyJSON(obj[i]) + ',' ;
		}
		result += '{'+result+'}';
	}
	return result;

  	
};
