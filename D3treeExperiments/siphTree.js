var width = 3200;
var height = 1800;

var canvas = d3.select('body').append('svg')
	.attr('width', width)
	.attr('height', height)
	.append('g')
		.attr('transform', 'translate(50, 50)');

var tree = d3.layout.cluster()
	.size([2900, 1400]);

	var nodes = tree.nodes(siphData.nodes);
	var links = tree.links(nodes[0]);

var node = canvas.selectAll(".node")
	.data(nodes)
	.enter()
	.append('g')
		.attr("class", "node")
		.attr("transform", function (d) {
			return "translate(" + d.x + "," + (d.y) + ")";
		} );

node.append("circle")
	.attr("r", function(d) {return d.r;})
	// .attr("fill", "green")
	.attr("opacity", 0.9)
	// .attr("stroke", "#ADADAD")
	.attr("stroke-width", "4");

node.append("text")
	.text(function(d) {return d.name }) 
	.style("color", "black")

var diagonal = d3.svg.diagonal();

canvas.selectAll(".link")
	.data(links)
	.enter()
	.append("path")
	.attr("class", "link")
	.attr("fill", "none")
	// .attr("stroke", "#ADADAD")
	.attr('d', d3.svg.diagonal());











