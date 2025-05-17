let radiusOutput = document.getElementById('radius');
let areaOutput = document.querySelector('#area');

let area = 10;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;

radius = 10;
area = PI * radius * radius;
radiusOutput = radius;
areaOutput = area;