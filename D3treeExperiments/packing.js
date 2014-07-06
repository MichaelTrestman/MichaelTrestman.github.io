var node;
var currentRoot;
var makePackingViz = function(targetTree) {
  currentRoot = targetTree;


var width = 866;
var height = 644;

d3.selectAll('svg').remove();
d3.selectAll('text').remove();
// d3.selectAll('node').remove();
d3.selectAll('.tooltip').remove();
// d3.selectAll('circle').remove();

var canvas = d3.select('.wrapper').append('svg').attr("class", "canvas")
	// .attr('width', width)
	// .attr('height', height)
	.append('g')
		.attr('transform', 'translate(-50, 50)');


var pack = d3.layout.pack()
	.size([width, height - 50])
	.padding(1);

var nodes = pack.nodes(targetTree);

node = canvas.selectAll(".node")
	.data(nodes)
	.enter()
	.append('g')//.transition().duration(500)
		.attr("class", "node")
		.attr("transform", function (d) {return "translate(" + d.x + "," + d.y + ")";} )


node.append("circle").transition().duration(500)
	.attr("r", function(d) {return d.r})
    // if (d === currentRoot){ return 200} else if (d.children) {return d.children.length * 6 + 1;} else {return 1}; 
    
	.attr("fill", 
    function(d) { return "rgba(00, 100, 150, .9)"})
	.attr("opacity", 0.25)
	.attr("stroke", "#ADADAD")
	.attr("stroke-width", "2");


var diagonal = d3.svg.diagonal();

d3.selectAll('circle')
  
  .on('mouseover', function() {
  	d3.select(this)
  	.attr("fill", "yellow")
  })
  .on ('mouseout',  function() {
  	
  	
  	d3.select(this).attr("fill", "blue")

  });

  // d3.selectAll('.node')
  // 	.on('mouseover', function(){
  // 		d3.select(this)
  // 		.append("text").text(function(d) {return d.name })
  // 	}).attr("class", "bork")

  // 	// .on('mouseout', function(){
  		
  // 	// 	 d3.select(this).select("text")
  // 	// 	.text(function(d) {return " "})
  		

  // 	// })

  


  var tooltip = d3.select("body")
    .append("div")
    .attr('class', 'tooltip')
    .style("position", "absolute")
    .style("z-index", "10")
    .style("visibility", "hidden")
    .style("color", "black")
    .style("font-size", "3em")
    .text("a simple tooltip");

  var sidebar = d3.selectAll(".info");
    

    node
        .on("mouseover", function(d){

          sidebar.text(d.name);  
          tooltip.text(d.name);
          tooltip.style("visibility", "visible");
        })
        .on("mousemove", function(){return tooltip.style("top",
          (d3.event.pageY-200)+"px").style("left",(d3.event.pageX+10)+"px");})

        .on("mouseout", function(){return tooltip.style("visibility", "hidden");});


  node.on("click", function(d){

    if ( (d === currentRoot) && (currentRoot.parent) ) {
      currentRoot = currentRoot.parent;
      makePackingViz( currentRoot);

    } else {

      currentRoot = d;
      makePackingViz( d);
    }
  })



}



