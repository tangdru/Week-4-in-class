//First, determine sizes so we can properly set up the drawing
var width = document.getElementById('plot').clientWidth-50;
var height = document.getElementById('plot').clientHeight-50;

console.log(width);
console.log(height);

//Next, create a <svg> element
var plot = d3.select('.canvas')
    .append('svg')
    .attr('width',width+50)
    .attr('height',height+50)
    .append('g')
    .attr('transform','translate(25,25)');


//Now let's see what kind of elements can be drawn in <svg>
plot
	.append('image')
	.attr('xlink:href','assets/Blank_US_Map.svg')
	.attr('width',width)
	.attr('height',height);

//CIRCLE AT (100,100), radius 50
plot
    .append('circle')
    .attr('cx',100)
    .attr('cy',100)
    .attr('r',50)
    .attr('class','yellow');


//RECTANGLE AT (200,50), width 200, height 150
plot
	.append('rect')
	.attr('x',200)
	.attr('y',50)
	.attr('width',200)
	.attr('height',150)
	.attr('class','yellow');

//TEXT AT (550,100)
plot
	.append('text')
	.attr('x',850)
	.attr('y',200)
	.text("Boston");

plot
	.append('text')
	.attr('x',50)
	.attr('y',350)
	.text("Los Angeles");


//LINE FROM (100,350) to (120,400)
plot
	.append('line')
	.attr('y1',200)
	.attr('x1',850)
	.attr('y2',350)
	.attr('x2',50)
	.style('stroke','rgb(100,100,0)')
	.style('stroke-width','1px')
	.style('stroke','red');


//Drawing a grid
for(var y=0; y<height; y+=50){
	plot
		.append('line')
		.attr('x1',0)
		.attr('x2',width)
		.attr('y1',y)
		.attr('y2',y)
		.style('stroke','rgb(100,100,100)')
		.style('stroke-width','1px');

	plot
		.append('text')
		.attr('x',0)
		.attr('y',y)
		.text(y);
}

for(var x=0; x<width; x+=50){
	plot
		.append('line')
		.attr('x1',x)
		.attr('x2',x)
		.attr('y1',0)
		.attr('y2',height)
		.style('stroke','rgb(100,100,100)')
		.style('stroke-width','1px');

	plot
		.append('text')
		.attr('x',x)
		.attr('dy',20)
		.attr('text-anchor','middle')
		.text(x);

}


//ATTACH AN IMAGE - see above



//CREATE A GROUP AT (400,350)
//THEN ATTACH A RECTANGLE AND A CIRCLE
var group1 = plot
	.append('g');
group1
	.append('circle')
	.attr('cx',0)
    .attr('cy',0)
    .attr('r',60)
    .style('fill','red');
group1
	.append('rect')
	.attr('y',0)
	.attr('width',20)
	.attr('height',20);
group1
	.attr('transform','translate(100,100)');







