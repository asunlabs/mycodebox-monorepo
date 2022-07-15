# Learning Data Driven Document(D3)
D3.js is a Javascript library for data visualization in web browser. It is compatible with common web standards and useful to create maps, charts, and graphs. Install d3 like below. 

```javascript
npm install d3 -D
```

D3 is made with ES2015 modules. You should use bundler such as webpack and parcel 
```javascript
import * as d3 from 'd3'

const d3 = await import("d3")
```

## Work with data in D3
data and enter methods are usefull to present dataset into your page.

- data() : add dataset on selected DOM elements
- enter() : compare the dataset and the selected elements, creating missing elements

For example, 

```javascript
d3.select("body")
  .selectAll("h2") // add not-existing-yet elements
  .data(dataset) // actual data 
  .enter() // enter method inspects the difference 
  .append("h2") // enter method create/append the elements
  .text("New Title")
```