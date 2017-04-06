    //Make an SVG Container
var svgContainer = d3.select("div#text").append("svg")
        .attr("width", 400)
        .attr("height", 300);

var line = svgContainer.append("line")
    .attr("x1", 150)
    .attr("y1", 20)
    .attr("x2", 200)
    .attr("y2", 20)
    .attr("stroke-width", .5)
    .attr("stroke", "black")

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 250)
    .attr("y", 20)
    .text("Length: 15");

var line = svgContainer.append("line")
    .attr("x1", 150)
    .attr("y1", 40)
    .attr("x2", 200)
    .attr("y2", 40)
    .attr("stroke-width", 1)
    .attr("stroke", "black")
    .attr("stroke-dasharray", ("3,1.5"));

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 250)
    .attr("y", 40)
    .text("Length: 30");

var line = svgContainer.append("line")
    .attr("x1", 150)
    .attr("y1", 60)
    .attr("x2", 200)
    .attr("y2", 60)
    .attr("stroke-width", 2)
    .attr("stroke", "black");

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 250)
    .attr("y", 60)
    .text("Length: 60");

//Draw the Rectangle
var rectangle = svgContainer.append("rect")
    .attr("x", 150)
    .attr("y", 80)
    .attr("fill", "blue")
    .attr("width", 20)
    .attr("height", 20);

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 240)
    .attr("y", 90)
    .text("Name: Orange");

//Draw the Rectangle
var rectangle = svgContainer.append("rect")
    .attr("x", 150)
    .attr("y", 120)
    .attr("fill", "red")
    .attr("width", 20)
    .attr("height", 20);

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 240)
    .attr("y", 130)
    .text("Name: Robert");

//Draw the Rectangle
var rectangle = svgContainer.append("rect")
    .attr("x", 150)
    .attr("y", 160)
    .attr("fill", "green")
    .attr("width", 20)
    .attr("height", 20);

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 240)
    .attr("y", 170)
    .text("Name: Volt");

//Draw the Rectangle
var rectangle = svgContainer.append("rect")
    .attr("x", 150)
    .attr("y", 200)
    .attr("fill", "yellow")
    .attr("width", 20)
    .attr("height", 20);

svgContainer.append("text")
    .attr("font-family", "sans-serif")
    .attr("font-size", 12)
    .attr("text-anchor", "middle")
    .attr("x", 240)
    .attr("y", 210)
    .text("Name: Ink");
