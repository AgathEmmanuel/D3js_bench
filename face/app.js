/*console.log(d3);*/

/* 

/*Loading D3.js*/


/* working
const svg=d3.select('svg');
svg.style('background-color','red');
*/

/*Importing D3 function using ES6*/
/*
(function (d3){
    'use strict';
    const svg =d3.select('svg');
    svg.style('background-color','red');
}(d3));


*/


/*Making face with svg and D3.js */

/* working
const svg=d3.select('svg');
const circle=svg.append('circle');

circle.attr('r',200);
circle.attr('cx',900/2);
circle.attr('cy',560/2);

*/



/* + sign indicates parseFloat */



/*  working
const width=parseFloat(svg.attr('width'));
const height=parseFloat(svg.attr('height'));
*/

/* working
const svg=d3.select('svg');
const circle=svg.append('circle');

const width= +svg.attr('width');
const height= +svg.attr('height');
circle.attr('r',height/2);
circle.attr('cx',width/2);
circle.attr('cy',height/2);
*/

/* method chaining can be used instead of the above code */

/*
 D3 Documentation --> D3 API Reference --> Functions --> Shapes --> Arcs
import { select,arc } from 'd3';
 */
/*
const g=svg.append('g')
    .attr('transform','translate(465,255)');
 */



 /*
const svg=d3.select('svg');

const width= +svg.attr('width');
const height= +svg.attr('height');

const circle=svg.append('circle')
    .attr('r',height/2)
    .attr('cx',width/2)
    .attr('cy',height/2)
    .attr('fill','yellow')
    .attr('stroke','black')
    ;
const eyeSpacing=100;
const eyeYOffset=70;
const eyeRadius=40;

const leftEye=svg.append('circle')
    .attr('r',eyeRadius)
    .attr('cx',width/2 - eyeSpacing)
    .attr('cy',height/2 - eyeYOffset)
    .attr('fill','black')
    ;

const rightEye=svg.append('circle')
    .attr('r',eyeRadius)
    .attr('cx',width/2 + eyeSpacing)
    .attr('cy',height/2 - eyeYOffset)
    .attr('fill','black')
    ;

const g=svg.append('g')
    .attr('transform',`translate(${width/2},${height/2})`);


const mouth=g.append('path')
    .attr('d',d3.arc()({
        innerRadius: 0,
        outerRadius: 170,
        startAngle: Math.PI/2,
        endAngle: Math.PI * 3/2 
    }));

    */

const svg=d3.select('svg');

const width= +svg.attr('width');
const height= +svg.attr('height');


const g=svg.append('g')
    .attr('transform',`translate(${width/2},${height/2})`);

const circle=g.append('circle')
    .attr('r',height/2)
    .attr('fill','yellow')
    .attr('stroke','black')
    ;
const eyeSpacing=100;
const eyeYOffset=-70;
const eyeRadius=40;
const eyebrowWidth=50;
const eyebrowHeight=20;
const eyebrowYOffset=-70;


const eyesG=g.append('g')
    .attr('transform',`translate(0,${eyeYOffset})`)
    ;

const leftEye=eyesG.append('circle')
    .attr('r',eyeRadius)
    .attr('cx',-eyeSpacing)
    ;

const rightEye=eyesG.append('circle')
    .attr('r',eyeRadius)
    .attr('cx',eyeSpacing)
    ;

const lefteyeBrow=eyesG.append('rect')
    .attr('x',-eyeSpacing-eyebrowWidth/2)
    .attr('y',eyebrowYOffset)
    .attr('width',eyebrowWidth)
    .attr('height',eyebrowHeight)
    ;

const righteyeBrow=eyesG.append('rect')
    .attr('x',eyeSpacing-eyebrowWidth/2)
    .attr('y',eyebrowYOffset)
    .attr('width',eyebrowWidth)
    .attr('height',eyebrowHeight)
    ;
const mouth=g.append('path')
    .attr('d',d3.arc()({
        innerRadius: 0,
        outerRadius: 170,
        startAngle: Math.PI/2,
        endAngle: Math.PI * 3/2 
    }));

 