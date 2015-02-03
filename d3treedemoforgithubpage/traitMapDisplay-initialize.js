
TraitMapDisplay.initialize = function(){

  var traitList = d3.select('#trait-list');

  TraitMapDisplay.SimpleTraitAttributions.forEach(function(traitAttr){
    traitList.append('li')
      .append('button')
      .style('font-size', '1em')
      .attr('id', 'li-' + traitAttr.name)
      .style('color', TraitMapDisplay.colors[traitAttr.name])
      .text(traitAttr.name)
      .on("click", function(){

        var clickedTrait = TraitMapDisplay.SimpleTraitAttributions.filter(function(x){
            return x.name == this.id.replace('li-', '')
          }.bind(this))[0];
        if (clickedTrait.active) {
          TraitMapDisplay.justClickedTrait = {};
          clickedTrait.active = false;
        } else {
          TraitMapDisplay.justClickedTrait = clickedTrait;
          var length = TraitMapDisplay.SimpleTraitAttributions.length,
            selectedTrait;
          for (var i = 0; i < length; i++) {
            if (TraitMapDisplay.SimpleTraitAttributions[i] === clickedTrait) {
              TraitMapDisplay.SimpleTraitAttributions.splice(i,1);
              TraitMapDisplay.SimpleTraitAttributions.push(clickedTrait);
            };
          };
          clickedTrait.active = true;
        }
        TraitMapDisplay.treeLayout.update(TraitMapper.getMappedTree());
      });
  });

  traitList.append('button').style('font-size', '1em').text('Clear all Traits')
    .on('click', function(){
      TraitMapDisplay.SimpleTraitAttributions.forEach(function(x){
        x.active = false;
      });
      TraitMapDisplay.treeLayout.update();
    });
  traitList.append('button').style('font-size', '1em').text('Display all Traits')
    .on('click', function(){
      TraitMapDisplay.SimpleTraitAttributions.forEach(function(x){
        x.active = true;
      });
      TraitMapDisplay.treeLayout.update();
    });
}