import * as d3 from 'd3'

const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

d3.select("body")
  .append("h1")
  .text("hello")

d3.selectAll("li")
  .text("list item")

d3.select("body")
  .selectAll("h2")
  .data(dataset)
  .enter()
  .append("h2")
  .text("New Title")