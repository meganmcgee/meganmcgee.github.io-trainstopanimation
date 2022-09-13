// This array contains the coordinates for all bus stops between MIT and Harvard
const trainStops = [
  [-149.89047, 61.22167],
  [-149.1741, 60.9442],
  [-148.69658, 60.7768],
  [-148.98148, 60.84042],
  [-149.05354, 60.70591],
  [-149.06172, 60.6291] 
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoibWVnYW5tY2dlZTkwNyIsImEiOiJjbDd6d2s3N2EwMGdjM3dvODI5bWtnb3VjIn0.YFJbLYQ533aKUGYt6mARWQ';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-149.1741, 60.9442],
  zoom: 9,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
let marker = new mapboxgl.Marker().setLngLat([-149.89047, 61.22167]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= trainStops.length) return;
    marker.setLngLat(trainStops[counter]);
    counter++;
    move();
  }, 1000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
