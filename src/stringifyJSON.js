// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var result = '';
	if(typeof(obj) === 'undefined' || typeof(obj) === 'function'){
		return undefined;
	}else if(typeof(obj) ==='string'){
		result = obj; 
	}else if(typeof(obj) !== 'object'){
		return result += _.escape(obj);
	}else if( obj === null){
		return result += 'null';
	}else if(Array.isArray(obj)){
		for(var i = 0; i < obj.length; i++){
			if(i>0){
			result +=',';	
			}
			result += stringifyJSON(obj[i]);
		}
		return result = '['+result+']';
	}else if(typeof(obj) === 'object' && !Array.isArray(obj)){
		var count = 0;
		for(var j in obj){
			if(count>0){
				result +=',';	
			}
			var key = stringifyJSON(j);
			var value = stringifyJSON(obj[j]);
			if(key !== undefined && value !== undefined){
				result += key+":"+value;
				count++;
			}
		}
		return result = '{'+result+'}';
	}
	
	return '"'+result+'"';
  	
};
