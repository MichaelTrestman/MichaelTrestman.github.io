var height = 900,
    width =  1200,
    margin = 50,
    i = 0,
    duration = 300,
    root;

var tree = d3.layout.tree()
  .size([height, width])
  // .separation(function(a,b){ return 2});
  .separation(function(){return 1})//function(a, b) { return (a.parent == b.parent ? 20 : 30) ; });

// var diagonal = d3.svg.diagonal.radial()
//     .projection(function(d) { return [d.y, d.x / 180 * Math.PI]; });

var diagonal = d3.svg.diagonal()
  .projection(function(d) {return [d.y, d.x]; });

var svg = d3.select('body').append('svg')
  .attr('id', 'svg-canvas')
  .attr('width', width + 4*margin)
  .attr('height', height + 1.25*margin)
  .attr('viewBox', '350 00 1200 1600')
  .append('g')
  .attr('transform', 'translate(' + margin + ',' + margin*0.666 + ')');


TraitMapper.setTree(AnimalTree)
// TraitMapper.setTree(AmnioteTree)

TraitMapper.addSize(20);
root = TraitMapper.getMappedTree();



root.x0 = height / 2;
root.y0 = 0;
update(root);

// d3.select(self.frameElement).style('height', '600px')

function update (source){

  var nodes = tree.nodes(root),
    links = tree.links(nodes);

  nodes.forEach(function(d){ d.y = d.depth * 180; });

  var node = svg.selectAll('g.node')
    .data(nodes, function(d){ return d.id || (d.id = ++i); });

  var nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr('id', function  (d) {
      return d.name
    })
    .attr('transform', function(d){
      if (!d.parent) { return 'translate(0,0)'};
      if ( isNaN(d.parent.x) || isNaN(d.parent.y) ) { return 'translate(0,0)' };

      return 'translate(' + d.parent.y + ',' + d.parent.x + ')';
    })
    .on('click', click);

  nodeEnter.append('circle')
    .attr('r', function(d){
      if (d._children) { d.size *= 1.25}
      return d.size
    });
    // .style('fill', function(d){ return d._children ? '#aaa' : '#fff'; });

  nodeEnter.append('text')
    .attr('x', function(d) {return d.children || d._children ? -13 : 13; })
    .attr('dy', '.35em')
    .attr('text-anchor', function(d){ return d.children || d._children ? 'end' : 'start';})
    .text(function(d){ return d.name })
    .style('fill-opacity', 1e-6);

  var nodeUpdate = node.transition()
    .duration(duration)
    // .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")"; })

    .attr('transform', function(d){

      return 'translate(' + d.y + ',' + d.x + ')';
    });

  nodeUpdate.select('circle')
    .attr('r', function(d){
      return d.size
    })
    // .style('fill', function(d){ return d._children ? '#aaa' : '#fff'; });

  nodeUpdate.select('text')
    .style('fill-opacity', 1);

  var nodeExit = node.exit().transition()
    .duration(duration)
    .attr('transform', function(d){
      if (!d.parent) return "translate(0,0)";
      return 'translate(' + d.parent.y + ',' + d.parent.x + ')';
    })
    .remove();

  nodeExit.select('circle')
    .attr('r', 1e-6);

  var link = svg.selectAll('path.link')
    .data(links, function(d){ return d.target.id; });

  link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', function(d){
      if (d.parent){
        var o = {
          x: source.x0,
          y: source.y0
        };
        return diagonal({
          source: o,
          target: o
        });
      }

    });


  link.transition()
    .duration(duration)
    .attr('d', diagonal);

  link.exit().transition()
    .duration(duration)
    .attr('d', function(d){
      var o = {
        x: source.x,
        y: source.y
      };
      return diagonal({
        source: o,
        target: o
      });
    }).remove();

    TraitMapDisplay.traitColorRings();
}
// not working!
// TraitMapper.hideDescendantsOf( document.getElementById('Animals') );

function click(d){

  if (d.children){
    TraitMapper.hideDescendantsOf(d);
    d.size *= 1.25
    // d._children = d.children;
    // d.children = [];
  } else if (d._children){
    d.children = d._children;
    d._children = null;
    d.size *= 0.8
  }

  update(TraitMapper.getMappedTree());
  // TraitMapDisplay.traitColorRings();
}

