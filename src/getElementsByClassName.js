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

/* --------------------------
Here is my own solutions for the Underscore.js functions I used. 
--------------------------*/

// _.flatten = function(nestedArray, result) {
//     if(result === undefined){
//       result = [];
//     }
//     for(var i = 0; i < nestedArray.length;i++){
//       if (!Array.isArray(nestedArray[i])){
//         result.push(nestedArray[i]);
//       }else if(Array.isArray(nestedArray[i])){
//         result = _.flatten(nestedArray[i],result);
//       }
//     }
//     return result;
//   };

/* -----------------------------
 Contains was done for me, but I re-did it a different way using _.each
--------------------------------- */

// _.contains = function(collection, target) {

//     var wasFound = false;
//     _.each(collection,function(item){
//       if(item === target){
//         wasFound = true;
//       }
//     });
//     return wasFound;

//  };

/* -----------------------------
 Here is my _.each function used in the _.contains() function
--------------------------------- */

// _.each = function(collection, iterator) {
//     if (Array.isArray(collection)){
//       for(var i = 0; i < collection.length; i++){
//         iterator(collection[i], i, collection);
//       }
//     }else{
//       for(var j in collection){
//         iterator(collection[j], j, collection);
//       }
//     }
//   };