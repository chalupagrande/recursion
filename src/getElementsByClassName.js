// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, element){
	if(element === undefined){
		element = document.body;
	}
	var results = [];
	var classes = element.classList; 
	var children = element.childNodes;

	//check if className exists in classList
	if(classes !== undefined && _.contains(classes, className)){
	  results.push(element);
	}
	if(children.length > 0){
	  for(var i = 0; i < children.length; i++){
	    results.push(getElementsByClassName(className, children[i]));
	  }
	}else{
	  return results;
	}
	return _.flatten(results);
	
};
