var newTree = {children: []};
var parent;
var parentModel;
var counter=0;

var littleTree = function (node, depth){
	
	parent = newTree;
	recursiveCrawl(node, depth);
	return newTree;
}


var recursiveCrawl = function(  node , depth ){
	var deepness = depth - 1;
	if (deepness < 1) {return};

	console.log(node.name);

	var thisNode = {};

	thisNode.parent = parent;
	thisNode.valu
	e = node.value;
	thisNode.name = node.name;
	//thisNode.children = node.children;
	thisNode.children = [];
	parent.children.push(thisNode);
	console.log(thisNode.name);

	if ( (node.children.length > 0) && (depth > 1) ) {
		parent = thisNode;
		for (var i = 0; i < node.children.length; i++) {
			recursiveCrawl(node.children[i], deepness )
		}
	}
	//when this runs out of children, reset the parent as 'parent' so as to operate on siblings
	

	//ok, why is it recursing infinitely?? or is something else causing it to crash?


	parent = thisNode.parent;

}