


// Position of the circles on the X axis
var position = [50, 100, 150, 200, 250, 300, 350]

// Add circles at the top
d3.select("#dataviz_delay")
  .selectAll("mycircles")
  .data(position)
  .enter()
  .append("circle")
    .attr("cx", function(d){return d} )
    .attr("cy", 40)
    .attr("r", 10)

// Animation: put them down one by one:
function triggerTransitionDelayDown(){
  d3.selectAll("circle")
    .transition()
    .duration(1000)
    .attr("cy", 300)
    .delay(function(i){return(i*10)})
}
function triggerTransitionDelayUp(){
  d3.selectAll("circle")
    .transition()
    .duration(500)
    .attr("cy", 40)
    .delay(function(i){return(i*10)})
}
