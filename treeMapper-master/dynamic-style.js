
var colors = {
  brains: "rgba(10, 100, 10, 0.4)",
  conscious: "rgba(201, 181, 59, 0.4)",
  homeothermy: "rgba(200, 10, 40, 0.4)",
  flight: "rgba(22, 50, 200, 0.4)",
}

var OriginHypotheses = {

  humans: ['Humans'],
  greatApes: ['Hominidae'],
  mammals: ['Mammals'],
  amniotes: ['Amniotes'],
  bigThree: ['Vertebrates', 'Arthropods', 'Molluscs'],
  animals: ['Animals']

}

Object.keys(OriginHypotheses).forEach(function(origHyp){

  d3.select('#hyp-list').append('li').attr('id', origHyp).text(origHyp);

  document.getElementById(origHyp).addEventListener("click", mapTraits);

  function mapTraits (){

    TraitMapper.mapTraits({"conscious": null}, ['Animals'])
    TraitMapper.mapTraits({"conscious": 'dolphinately'}, OriginHypotheses[origHyp])
    d3.selectAll('#hyp-list li').style('color', 'black')
    d3.select(this).style('color', 'gold')
    updateColors();
  }
})

function updateColorsX(){
  var circulos = d3.selectAll('circle');
  // link.style('stroke', 'black')

  circulos.style('fill', function(d){
    var thisColor = colors.baseline

    Object.keys(colors).forEach(function(category){
      if (!!d[category]){
        thisColor = colors[category]
      }
    })

    return thisColor

  });

  // $('circle').off('mouseover').off('mouseout');

  // circulos
  //   .on("mouseover", function(d){

  //       d3.select(this).style('fill', colors.active)

  //     // tooltip.text(d.name);
  //     // tooltip.style("visibility", "visible");
  //   })
  //   // .on("mousemove", function(){
  //   //   tooltip.style("top",
  //   //   (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");
  //   // })
  //   // .off('mouseout')
  //   .on("mouseout", function(){
  //     d3.select(this).style('fill', function(d){
  //       var thisColor = colors.baseline

  //       Object.keys(colors).forEach(function(category){

  //         if (!!d[category]){

  //           thisColor = colors[category]
  //         }
  //       })

  //       return thisColor
  //     });
  //     // tooltip.style("visibility", "hidden");
  //   });

};



