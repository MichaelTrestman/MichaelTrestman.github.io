TraitMapDisplay = {};

TraitMapDisplay.justClickedTrait = {};

TraitMapDisplay.mapSimpleTraitAttributions = function(){
  this.SimpleTraitAttributions.forEach(function(trait){
    var traitObj = {};
    traitObj[trait.name] = 'true';
    TraitMapper.mapTraits(traitObj, trait.taxa);
  });
};

TraitMapDisplay.activeTraits = function(){
  var traitNames = [];
  this.SimpleTraitAttributions.forEach(function(traitAttr){
    if (traitAttr.active) { traitNames.push(traitAttr.name)};
  });
  return traitNames;
};