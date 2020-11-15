function triggerTransitionPiping(){

  d3.select("#my_rect2")

    // First, make the bar wider
    .transition()
    .duration(2000)
    .attr("width", "400")

    // Second, higher
    .transition()
    .attr("height", "100")

    // Change its color
    .transition()
    .style("fill", "red")

    // And now very small
    .transition()
    .duration(200)
    .attr("height", "10")
    .attr("width", "10")
}
