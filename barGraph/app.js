console.log(d3)*/

const DUMMY_DATA=[
    {id:'d1',value:10,region:'USA'},
    {id:'d2',value:11,region:'India'},
    {id:'d3',value:12,region:'china'},
    {id:'d4',value:13,region:'germany'},
    {id:'d5',value:15,region:'Korea'},
];
/*
d3.select('div')
  .selectAll('p')
  .data(DUMMY_DATA)
  .enter()
  .append('p')
  .text(dta=>dta.region);
*/
const container=d3.select('div')
  .classed('container',true)
  .style('border','1px solid red');

const bars=container
  .selectAll('.bar')
  .data(DUMMY_DATA)
  .enter()
  .append('div')
  .classed('bar',true)
  .style('width','50px')
  .style('height',data=>data.value*15+'px');

const container_s=d3.select('svg')
  .classed('container_s',true);

const xScale=d3
.scaleBand()
.domain(DUMMY_DATA.map((dataPoint)=>dataPoint.region))
.rangeRound([0,250])
.padding(0.1);
const yScale=d3
.scaleLinear()
.domain([0,16])
.range([300,0]);


const bars_s=container_s
  .selectAll('.bar_s')
  .data(DUMMY_DATA)
  .enter()
  .append('rect')
  .classed('bar_s',true)
  .attr('width',xScale.bandwidth())
  .attr('height',data=>200-yScale(data.value))
  .attr('x',data=>xScale(data.region))
  .attr('y',data=>yScale(data.value));