var width = 1900;
var height = 1800;

var canvas = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
		.attr('transform', 'translate(50, 50)');

var tree = d3.layout.cluster()
	.size([1400, 1400]);


// var pack = d3.layout.pack()
// 	.size([width, height - 50])
// 	.padding(10);


// d3.json(treeData, function(data) {

	var nodes = tree.nodes(treeData);
	

// })




// var nodes = pack.nodes(treeData);


var node = canvas.selectAll(".node")
	.data(nodes)
	.enter()
	.append('g')
		.attr("class", "node")
		.attr("transform", function (d) {return "translate(" + d.x + "," + (height - d.y) + ")";} );


var links = tree.links(nodes);

var link = canvas.selectAll(".link")
	.data(links)
	.enter()
	.append('g')
		.attr("class", "link")
		.attr("transform", function (d) {return "translate(" + 0 + "," + (height - d.y) + ")";} )	;
	
	
node.append("circle")
	.attr("r", function(d) {return d.r;})
	.attr("fill", "green")
	.attr("opacity", 0.25)
	.attr("stroke", "#ADADAD")
	.attr("stroke-width", "2")
	.attr('r', 40);

node.append("text")
	.text(function(d) {return d.name }) 


var diagonal = d3.svg.diagonal();

link
	.append("path")
	
	.attr("class", "link")
	.attr("fill", "none")
	.attr("stroke", "#ADADAD")
	.attr('d', diagonal);











