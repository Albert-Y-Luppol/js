d3.select("div.d3__intro")
  .selectAll("p")
  .data([1, 2, 3])
  .enter()
  .append("p")
  .text((data) => data);

const DUMMY_DATA = [
  { id: "d1", value: 10, region: "USA" },
  { id: "d2", value: 11, region: "India" },
  { id: "d3", value: 12, region: "China" },
  { id: "d4", value: 6, region: "Germany" },
];

const containerDiv = d3
  .select("div.d3__chart")
  .classed("container", true)
  .style("display", "flex")
  .style("justify-content", "space-around");

containerDiv
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("div")
  .classed("bar", true)
  .style("width", "50px")
  .style("height", (data) => data.value * 15 + "px");

const xScale = d3
  .scaleBand()
  .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
  .rangeRound([0, 250])
  .padding(0.1);
const yScale = d3.scaleLinear().domain([0, 15]).range([0, 250]);
const containerSVG = d3.select("svg.d3__chart").classed("container", true);

const bars = containerSVG
  .selectAll(".bar")
  .data(DUMMY_DATA)
  .enter()
  .append("rect")
  .classed("bar", true)
  .attr("width", xScale.bandwidth())
  .attr("height", (data) => yScale(data.value))
  .attr("x", (data) => xScale(data.region))
  .attr("y", (data) => 250 - yScale(data.value));

setTimeout(() => {
  bars.data(DUMMY_DATA.slice(0, 2)).exit().remove();
}, 2000);
