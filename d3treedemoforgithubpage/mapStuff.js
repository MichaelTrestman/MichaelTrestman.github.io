
TraitMapDisplay = {};

TraitMapDisplay.SimpleTraitAttributions = [
  {
    name: "flight",
    active: true,
    taxa: [
    "Birds",
    "Insects",
    "Bats"
  ]},
  {
    name: "endothermy",
    active: true,
    taxa: [
      "Birds",
      "Mammals",
      "Teleosts",
      "Chondrichthyes",
      "Turtles"
    ]
  },
  {
    name: "brains",
    active: true,
    taxa: [
      'Vertebrates',
      'Arthropods',
      'Molluscs'
    ]
  },
  {
    name: "non-aquatic",
    active: true,
    taxa: [
      'Tardigrades',
      'Amniotes',
      'Gastropods',
      'Insects',
      'Spiders'
    ]
  },

];

TraitMapDisplay.mapSimpleTraitAttributions = function(){
  this.SimpleTraitAttributions.forEach(function(trait){
    var traitObj = {};
    traitObj[trait.name] = 'true';
    TraitMapper.mapTraits(traitObj, trait.taxa);
  });
}

TraitMapDisplay.displayTraitColorRingsX = function(traits){

  // if (traits===undefined) {traits=[]};
  // traits.forEach(function(trait){
  //   d3.selectAll('.node').each(function(d){
  //     var counter = 0;
  //     if (d.flight) {
  //       console.log('we got: ' + d.name);
  //       d3.select(this).append('circle')
  //         .attr('r', function(d){
  //           counter += 5;
  //           return d.size + counter-5;
  //         })
  //         .style('fill', "rgba(1, 1, 1, 0)")
  //         .style('stroke-width', '5px')
  //         .style('stroke', function(d){
  //           return colors.flight
  //         });
  //     };
  // })

  d3.selectAll('circle').remove();
  d3.selectAll('.node').each(function(d){
    d3.select(this).select('circle').remove();
    var counter = 6;
    ringWidth = 5;
    d3.select(this).append('circle')
    .attr('r', function(d){ return d._children ? 10 : 5})
    .style('fill', 'black')

    if (d.flight) {
      d3.select(this).append('circle')
        .attr('r', function(d){
          counter += ringWidth;
          return d.size + counter-ringWidth;
        })
        .style('fill', "rgba(1, 1, 1, 0)")
        .style('stroke-width', ringWidth + 'px' )
        .style('stroke', function(d){
          return colors.flight
        });
    };
    if (d.brains) {
      d3.select(this).append('circle')
        .attr('r', function(d){
          counter += 5;
          return d.size + counter-5;
        })
        .style('fill', "rgba(1, 1, 1, 0)")
        .style('stroke-width', ringWidth + 'px')
        .style('stroke', function(d){
          return colors.brains
        });
    };
    if (d.endothermy) {
      d3.select(this).append('circle')
        .attr('r', function(d){
          counter += 5;
          return d.size + counter - 5;
        })
        .style('fill', 'rgba(1, 1, 1, 0)')
        .style('stroke-width', ringWidth + 'px')
        .style('stroke', function(d){
          return colors.endothermy;
        });
    };
    if (d['non-aquatic']) {

      d3.select(this).append('circle')
        .attr('r', function(d){
          counter += 5;
          return d.size + counter - 5;
        })
        .style('fill', 'rgba(1, 1, 1, 0)')
        .style('stroke-width', ringWidth + 'px')
        .style('stroke', function(d){
          return colors['non-aquatic'];
        });
    };
  });

}
TraitMapDisplay.activeTraits = function(){
  var traitNames = [];
  this.SimpleTraitAttributions.forEach(function(traitAttr){
    if (traitAttr.active) { traitNames.push(traitAttr.name)};
  });
  return traitNames;
};