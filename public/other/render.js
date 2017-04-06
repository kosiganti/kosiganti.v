function chartByName() {
    console.log("Chart By Name...");
    //document.getElementById("chart").innerHTML = "";
    var width = 960,
        height = 136,
        cellSize = 17;

    var formatPercent = d3.format(".3");

    var color = d3.scaleQuantize()
        .domain([0, 100])
        .range(["blue", "red", "green", "yellow"]);

    //d3.select("g.parent").selectAll("*").remove();
    d3.select("div#chart").html("");

    var svg = d3.select("div#chart")
        .selectAll("svg")
        .data(d3.range(2017, 2024))
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

    svg.append("text")
        .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .text(function(d) { return d; });

    var rect = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .selectAll("rect")
        .data(function(d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("rect")
        .attr("width", cellSize)
        .attr("height", cellSize)
        //        .attr("fill", 'url(#diagonalHatch)')
        .attr("x", function(d) { return d3.timeWeek.count(d3.timeYear(d), d) * cellSize; })
        .attr("y", function(d) { return d.getDay() * cellSize; })
        .datum(d3.timeFormat("%Y-%m-%d"));

    var circle = rect.append("circle")
        .attr("r", 10);

    var star = d3.symbol()
        .type(d3.symbolStar)
        .size(10);

    var starData = star();

    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .selectAll("path")
        .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("path")
        .attr("d", pathMonth);

    svg.append('defs')
        .append('pattern')
        .attr('id', 'diagonalHatch')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 4)
        .attr('height', 4)
        .append('path')
        .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
        .attr('stroke', '#000000')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', .5);

    d3.csv("dji.csv", function(error, csv) {
        if (error) throw error;

        var data = d3.nest()
            .key(function(d) { /*console.log(d.Date);*/ return d.Date; })
            .rollup(function(d) { /*console.log(d[0].Length);*/
                return {
                    Name:  d[0].Name,
                    Length: d[0].Length,
                    Active: d[0].Active,
                    Tango: d[0].Tango,
                    India: d[0].India,
                    Victor: d[0].Victor,
                    Oscar: d[0].Oscar
                };})
            .object(csv);

        //console.log(data);

        rect.filter(function(d) { return d in data; })
            .attr("fill", function(d) {
                if (data[d].Name == "Orange") {
                    return color(20);
                }
                else if (data[d].Name == "Robert") {
                    return color(40);
                } else if (data[d].Name == "Volt") {
                    return color(60);
                } else if (data[d].Name == "Ink") {
                    return color(80);
                }
            })
            .append("title")
            .text(function(d) { return d + ": " + data[d].Name
                + "\n" +"Active: "+data[d].Active
                + "\n" +"Length: "+data[d].Length
                + "\n"+"Tango: "+formatPercent(data[d].Tango)+"\n"
                + "India: "+formatPercent(data[d].India)
                +"\n"+"Victor: "+formatPercent(data[d].Victor)+"\n" + "Oscar: "+data[d].Oscar; });

    });

    function pathMonth(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
            d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
        return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
            + "H" + w0 * cellSize + "V" + 7 * cellSize
            + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
            + "H" + (w1 + 1) * cellSize + "V" + 0
            + "H" + (w0 + 1) * cellSize + "Z";
    }
    displayNameLegend();
}

function chartByLength() {
    console.log("Chart by Length");
    var width = 960,
        height = 136,
        cellSize = 17;

    var formatPercent = d3.format(".3");

    var color = d3.scaleQuantize()
        .domain([0, 100])
        .range(["blue", "red", "green", "yellow"]);

    //d3.select("g.parent").selectAll("*").remove();
    d3.select("div#chart").html("");

    var svg = d3.select("div#chart")
        .selectAll("svg")
        .data(d3.range(2017, 2024))
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

    svg.append("text")
        .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .text(function(d) { return d; });

    var rect = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .selectAll("rect")
        .data(function(d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("rect")
        .attr("width", cellSize)
        .attr("height", cellSize)
        //        .attr("fill", 'url(#diagonalHatch)')
        .attr("x", function(d) { return d3.timeWeek.count(d3.timeYear(d), d) * cellSize; })
        .attr("y", function(d) { return d.getDay() * cellSize; })
        .datum(d3.timeFormat("%Y-%m-%d"));

    var circle = rect.append("circle")
        .attr("r", 10);

    var star = d3.symbol()
        .type(d3.symbolStar)
        .size(10);

    var starData = star();

    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .selectAll("path")
        .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("path")
        .attr("d", pathMonth);

    svg.append('defs')
        .append('pattern')
        .attr('id', 'diagonalHatch')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 4)
        .attr('height', 4)
        .append('path')
        .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
        .attr('stroke', '#000000')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', .5);

    d3.csv("dji.csv", function(error, csv) {
        if (error) throw error;

        var data = d3.nest()
            .key(function(d) { /*console.log(d.Date);*/ return d.Date; })
            .rollup(function(d) { /*console.log(d[0].Length);*/
                return {
                    Name:  d[0].Name,
                    Length: d[0].Length,
                    Active: d[0].Active,
                    Tango: d[0].Tango,
                    India: d[0].India,
                    Victor: d[0].Victor,
                    Oscar: d[0].Oscar
                };})
            .object(csv);

        //console.log(data);

        rect.filter(function(d) { return d in data; })
            .attr("fill", function(d) {
                if (data[d].Length == 15) {
                    return color(20);
                }
                else if (data[d].Length == 30) {
                    return color(40);
                } else if (data[d].Length == 60) {
                    return color(70);
                }
            })
            .append("title")
            .text(function(d) { return d + ": " + data[d].Name
                + "\n" +"Active: "+data[d].Active
                + "\n" +"Length: "+data[d].Length
                + "\n"+"Tango: "+formatPercent(data[d].Tango)+"\n"
                + "India: "+formatPercent(data[d].India)
                +"\n"+"Victor: "+formatPercent(data[d].Victor)+"\n" + "Oscar: "+data[d].Oscar; });

    });

    function pathMonth(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
            d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
        return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
            + "H" + w0 * cellSize + "V" + 7 * cellSize
            + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
            + "H" + (w1 + 1) * cellSize + "V" + 0
            + "H" + (w0 + 1) * cellSize + "Z";
    }
    displayLengthLegend();
}

function chartByActive() {
    console.log("Chart by Active..")
    var width = 960,
        height = 136,
        cellSize = 17;

    var formatPercent = d3.format(".3");

    var color = d3.scaleQuantize()
        .domain([0, 100])
        .range(["blue", "red"]);

    //d3.select("g.parent").selectAll("*").remove();
    d3.select("div#chart").html("");

    var svg = d3.select("div#chart")
        .selectAll("svg")
        .data(d3.range(2017, 2024))
        .enter().append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + ((width - cellSize * 53) / 2) + "," + (height - cellSize * 7 - 1) + ")");

    svg.append("text")
        .attr("transform", "translate(-6," + cellSize * 3.5 + ")rotate(-90)")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .attr("text-anchor", "middle")
        .text(function(d) { return d; });

    var rect = svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#ccc")
        .selectAll("rect")
        .data(function(d) { return d3.timeDays(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("rect")
        .attr("width", cellSize)
        .attr("height", cellSize)
        //        .attr("fill", 'url(#diagonalHatch)')
        .attr("x", function(d) { return d3.timeWeek.count(d3.timeYear(d), d) * cellSize; })
        .attr("y", function(d) { return d.getDay() * cellSize; })
        .datum(d3.timeFormat("%Y-%m-%d"));

    var circle = rect.append("circle")
        .attr("r", 10);

    var star = d3.symbol()
        .type(d3.symbolStar)
        .size(10);

    var starData = star();

    svg.append("g")
        .attr("fill", "none")
        .attr("stroke", "#000")
        .selectAll("path")
        .data(function(d) { return d3.timeMonths(new Date(d, 0, 1), new Date(d + 1, 0, 1)); })
        .enter().append("path")
        .attr("d", pathMonth);

    svg.append('defs')
        .append('pattern')
        .attr('id', 'diagonalHatch')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 4)
        .attr('height', 4)
        .append('path')
        .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
        .attr('stroke', '#000000')
        .attr('stroke-opacity', 0.4)
        .attr('stroke-width', .5);

    d3.csv("dji.csv", function(error, csv) {
        if (error) throw error;

        var data = d3.nest()
            .key(function(d) { /*console.log(d.Date);*/ return d.Date; })
            .rollup(function(d) { /*console.log(d[0].Length);*/
                return {
                    Name:  d[0].Name,
                    Length: d[0].Length,
                    Active: d[0].Active,
                    Tango: d[0].Tango,
                    India: d[0].India,
                    Victor: d[0].Victor,
                    Oscar: d[0].Oscar
                };})
            .object(csv);

        //console.log(data);

        rect.filter(function(d) { return d in data; })
            .attr("fill", function(d) {
                if (data[d].Active == "TRUE") {
                    return color(20);
                }
                else if (data[d].Active == "FALSE") {
                    return color(60);
                }
            })
            .append("title")
            .text(function(d) { return d + ": " + data[d].Name
                + "\n" +"Active: "+data[d].Active
                + "\n" +"Length: "+data[d].Length
                + "\n"+"Tango: "+formatPercent(data[d].Tango)+"\n"
                + "India: "+formatPercent(data[d].India)
                +"\n"+"Victor: "+formatPercent(data[d].Victor)+"\n" + "Oscar: "+data[d].Oscar; });

    });

    function pathMonth(t0) {
        var t1 = new Date(t0.getFullYear(), t0.getMonth() + 1, 0),
            d0 = t0.getDay(), w0 = d3.timeWeek.count(d3.timeYear(t0), t0),
            d1 = t1.getDay(), w1 = d3.timeWeek.count(d3.timeYear(t1), t1);
        return "M" + (w0 + 1) * cellSize + "," + d0 * cellSize
            + "H" + w0 * cellSize + "V" + 7 * cellSize
            + "H" + w1 * cellSize + "V" + (d1 + 1) * cellSize
            + "H" + (w1 + 1) * cellSize + "V" + 0
            + "H" + (w0 + 1) * cellSize + "Z";
    }

    displayActiveLegend();
}