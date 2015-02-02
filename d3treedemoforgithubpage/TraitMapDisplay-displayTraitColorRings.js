TraitMapDisplay.displayTraitColorRings = function(traitNames){
  d3.selectAll('.node').each(function(d

    ){
    var thisNode = d3.select(this);
    var counter = 5,
      ringWidth = 5;

    thisNode
      .selectAll('circle')
      // .select('circle#li-' + traitName)
      .remove();

      thisNode
        .append('circle')
        .attr('r', function(d){
          return d._children ? 5 : 2;
        })
        .style('fill', 'black');

    traitNames.forEach(function(traitName){



      if (d[traitName]) {

        thisNode
          .append('circle')
          .attr('id', 'li-' + traitName)
          .attr('r', function(d){
            counter += ringWidth;
            return d.size + counter - ringWidth;
          })
          .style('fill', 'rgba(1, 1, 1, 0)')
          .style('stroke-width', ringWidth + 'px')
          .style('stroke', colors[traitName]);
      };

    });
  });
};