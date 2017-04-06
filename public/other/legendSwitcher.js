function displayNameLegend() {
    d3.select("div#text").html("");
    //Make an SVG Container
    var svgContainer = d3.select("div#text").append("svg")
        .attr("width", 400)
        .attr("height", 300);

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

}

function displayLengthLegend() {
    d3.select("div#text").html("");
    //Make an SVG Container
    var svgContainer = d3.select("div#text").append("svg")
        .attr("width", 400)
        .attr("height", 300);

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
        .text("Length: 15");

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
        .text("Length: 30");

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
        .text("Length: 60");

}

function displayActiveLegend() {
    d3.select("div#text").html("");
    //Make an SVG Container
    var svgContainer = d3.select("div#text").append("svg")
        .attr("width", 400)
        .attr("height", 300);

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
        .text("Active: TRUE");

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
        .text("Active: FALSE");

}