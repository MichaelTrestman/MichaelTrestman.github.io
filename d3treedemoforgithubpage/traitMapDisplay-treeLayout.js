TraitMapDisplay.treeLayout = (function(){

  var height = 900,
      width =  1200,
      margin = 50,
      i = 0,
      duration = 600,
      root;

  var tree = d3.layout.tree()
    .size([height, width]);

  var diagonal = d3.svg.diagonal()
    .projection(function(d) {return [d.y, d.x]; });

  var svg = d3.select('body').append('svg')
    .attr('id', 'svg-canvas')
    .attr('width', width + 4*margin)
    .attr('height', height + 1.25*margin)
    .attr('viewBox', '250 0 1600 1500')
    .append('g')
    .attr('transform', 'translate(' + margin + ',' + margin*0.666 + ')');

  TraitMapper.setTree(AnimalTree);

  TraitMapper.addSize(20);
  root = TraitMapper.getMappedTree();

  root.x0 = height / 2;
  root.y0 = 0;
  return {

    update: function update (source){

      var nodes = tree.nodes(root),
        links = tree.links(nodes);

      nodes.forEach(function(d){ d.y = d.depth * 180; });

      var node = svg.selectAll('g.node')
        .data(nodes, function(d){ return d.id || (d.id = ++i); });
      // node.each(function(d){d.x*=1.5;})
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
        .on('click', TraitMapDisplay.treeLayout.click);

      nodeEnter.append('text')
        .attr('x', function(d) {return d.children || d._children ? -13 : 13; })
        .attr('dy', '.35em')
        .attr('text-anchor', function(d){ return d.children || d._children ? 'end' : 'start';})
        .text(function(d){ return d.name })
        .style('fill-opacity', 1e-6);

      var nodeUpdate = node.transition()
        .duration(duration)
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
        .attr('class', 'link');


      link
        .transition()
        .duration(duration)
        .attr('d', diagonal);

      link.exit()
        .transition()
        .duration(duration)
        .attr('d', function(d){
          console.log(d.source)
          if (d.source){
            var o = {
              x: d.source.x,
              y: d.source.y
            };
            return diagonal({
              source: o,
              target: o
            });

          }
          // var o = {
          //   x: d.x,
          //   y: d.y
          // };
          // return diagonal({
          //   source: o,
          //   target: o
          // });
        })
        .remove();
        TraitMapDisplay.displayTraitColorRings(TraitMapDisplay.activeTraits());
    },
    click: function (d){
      if (d.children){
        TraitMapper.hideDescendantsOf(d);
      } else if (d._children){
        d.children = d._children;
        d._children = null;
      }

      TraitMapDisplay.treeLayout.update(TraitMapper.getMappedTree());
    }
  }
}());

