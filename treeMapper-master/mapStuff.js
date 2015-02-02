
TraitMapDisplay = {};

TraitMapDisplay.SimpleTraitAttributions = [
  {
    name: "flight",
    taxa: [
    "Birds",
    "Insects",
    "Bats"
  ]},
  {
    name: "homeothermy",
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
    taxa: [
      'Vertebrates',
      'Arthropods',
      'Molluscs'
    ]
  }
];

TraitMapDisplay.mapSimpleTraitAttributions = function(){
  this.SimpleTraitAttributions.forEach(function(trait){
    var traitObj = {};
    traitObj[trait.name] = 'true';
    TraitMapper.mapTraits(traitObj, trait.taxa);
    var birds = TraitMapper.getNode("Birds");
  });
}
TraitMapDisplay.traitColorRings = function(traits){
  // if (traits===undefined) {traits=[]};
  // traits.forEach(function(trait){
  //   d3.selectAll('.node').each(function(d){
  //     var counter = 0;
  //     if (d.flight) {
  //       console.log('we got flight: ' + d.name);
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
    .attr('r', function(d){ return d._children ? 15 : 5})
    .style('fill', 'black')

    if (d.flight) {
      console.log('we got flight: ' + d.name);
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
      console.log('we got brains: ' + d.name);
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
    if (d.homeothermy) {
      console.log('we got homeothermy: ' + d.name);
      d3.select(this).append('circle')
        .attr('r', function(d){
          counter += 5;
          return d.size + counter - 5;
        })
        .style('fill', 'rgba(1, 1, 1, 0)')
        .style('stroke-width', ringWidth + 'px')
        .style('stroke', function(d){
          return colors.homeothermy;
        });
    };
  });

}


// updateColors();