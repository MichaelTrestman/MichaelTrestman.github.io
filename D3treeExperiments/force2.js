var width = 600,
		height = 600,

		canvas = d3.select('.wrapper').append('svg')
			.attr('width', width)
			.attr('height', height);

var tree = d3.layout.tree();

var nodes = tree(treeData);

var links = tree.links(nodes)

var force = d3.layout.force()
    .charge(-120)
    .linkDistance(40)
    .size([width, height]);

    force
      .nodes(nodes)
      .links(links)
      .start();

var link = canvas.selectAll(".link")
  .data(links)
  .enter().append("line")
    .attr("class", "link")
    .style("stroke-width", function(d) { return Math.sqrt(3); });

    var node = canvas.selectAll(".node")
      .data(nodes)
    .enter().append("circle")
      .attr("class", "node")
      .attr("r", 5)
      //.style("fill", function(d) { return 'blue'; })
      .call(force.drag);

    force.on("tick", function() {
    	link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    	node.attr("cx", function(d) { return d.x })
        .attr("cy", function(d) { return d.y; });


        

   	});

    // var scaleColor = d3.scale.linear()
    // 									.domain( [d3.min( nodes, function(d){ return d.name.length}), d3.max( nodes, function(d){ return d.name.length}) ])
    // 									.range( ["white", "black"]);


    var scaleColor = d3.scale.linear()
    								.domain ( 
    									[0, 30
	    									// d3.max (nodes, function(d) {
		    								// 	if (d.children){ return d.children.length} else {return 0};
		    								// } )  

	    								])
	    								
    								.range ("green", "purple");


    								

   	var tooltip = d3.select(".wrapper")
    .append("div")
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "red")
    .style("font-size", "2em")
    .text("a simple tooltip");


		node
    		.on("mouseover", function(d){

    				if (d.children) {

    					console.log(d.children.length);	
    				} else { console.log(0)};

    			
    			tooltip.text(d.name);
    			tooltip.style("visibility", "visible");
    		})
				.on("mousemove", function(){return tooltip.style("top",
    			(d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})

				.on("mouseout", function(){return tooltip.style("visibility", "hidden");});

		node.style('fill', 

		 		 function(d) {

			if (d.children) { 
				return "green"//scaleColor(d.name.length)
			} else {
				return "blue" ;
			}
			//return scaleColor(d.name.length)
			// if (d.name.length > 6) { return "orange"} else {return "blue"};
		});

