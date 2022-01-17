// Add console.log to check to see if our code is working
console.log("working");

// map-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create the map object with a center and zoom level

// center of US
// let map = L.map('mapid').setView([40.7, -94.5], 4);

// center of LA
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

//center btw LAX and SFO
// let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.6213, -122.3790], 5);

// Create the map object with center at the San Francisco airport.
// let map = L.map('mapid').setView([37.5, -122.5], 10);

// center of world
// let map = L.map('mapid').setView([30, 30], 2);

// Alternative method to above - this is useful when we want to
// add multiple tile layers, or a bacground image of our map(s)

// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });


// line------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Coordinates for each point to be used in the line
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790],
//     [40.7899, -111.9791],
//     [47.4502, -122.3088]
// ];

// Create a polyline using the line coordinates and make the line red
// L.polyline(line, {
//     color: "yellow"
// }).addTo(map);

// tiles------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// title layer with dark map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// tile layer with satellte imagery
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//tile layer with light map
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

//tile layer with night map
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

// multiple tile layers
//create a base layer that holds both maps
let baseMaps = {
    Street: streets,
    Dark: dark
};

// create the map oject with center, zoom level and default layer
let map = L.map("mapid", {
    center: [
      30, 30],
    zoom: 2,
    layers: [streets]
  });

// Pass our map layers into our layers control and add the layers control to the map
L.control.layers(baseMaps).addTo(map);

// Markers------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map for LA, Ca
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
//     }).addTo(map);

// Can use the circle-marker function
// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Get the data from cities.js
// let cityData = cities;

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Loop through the cities.js array and create one marker for each city; add popup; 
// circle marker that has radius equivalent to city's population.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })
//     // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .bindPopup(`<h2> ${city.city}, ${city.state} </h2> <hr> <h3>Population: ${city.population.toLocaleString()} </h3>`)
//     .addTo(map);
// });

// GeoJSON Point------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Add GeoJSON data
// let sanFranAirport = 
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// //create GeoJSON layer and add to map
// L.geoJSON(sanFranAirport).addTo(map);

// Marker using pointToLayer function
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         console.log(latlng);
//         return L.marker(latlng)
//         .bindPopup(`<h2>${feature.properties.city}</h2>`);
//     }
// }).addTo(map);

// Marker using onEachFunction
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer)
//         layer.bindPopup();
//     }
// }).addTo(map);

// Accessing GeoJSON data------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Accessomg the airport GeoJSON URL
let airportData = "https://raw.githubusercontent.com/Leung-Philip/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data
// d3.json(airportData).then(function(data) {
//     console.log(data);
//     // Creating a GeoJSON layer with the retrieved data
//     L.geoJSON(data).addTo(map);
// });

// Skill Drill------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Create a light-yellow circle with black lines indicating a 300m radius of Central LA, CA on a dark map
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: 'yellow',
//     // fillOpacity: 0.3,
//     }).addTo(map);

// orange circle popup marker for each city, with a lineweight of 4, a radius where the population number is decreased by 200,000,  
// that's on a dark map. When you click on the circle, the popup should display the city, state, and the population formatted with a thousands separator.
// cityData.forEach(function(city) {
//     console.log(city)
//     L.circleMarker(city.location, {
//         radius: (city.population-200000)/100000,
//         color: "orange",
//         weight: 4
//     })
//     // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .bindPopup(`<h2> ${city.city}, ${city.state} </h2> <hr> <h3>Population: ${city.population.toLocaleString()} </h3>`)
//     .addTo(map);
// });

// create an airline route from SFO to John F. Kennedy International Airport (JFK) with two stops, Austin-Bergstrom International Airport (AUS) 
// and Toronto Pearson International Airport (YYZ). Make the route a blue dashed line, with a weight of 4 and opacity of 0.5 on the light map.
// let line = [
//     [37.6213, -122.3790],
//     [30.1975, -97.6664],
//     [43.6777, -79.6248],
//     [40.6413, -73.7781]
// ];

// // Create a polyline using the line coordinates and make the line red
// L.polyline(line, {
//     color: "blue",
//     weight: 4,
//     opacity: 0.5,
//     dashArray: "10",
// }).addTo(map);

// create a popup marker for San Francisco Airport on a night preview navigation map. 
// When you click on the popup, it will display the city, state, and the name of the airport.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map
//     pointToLayer: function(feature, latlng) {
//         console.log(feature);
//         console.log(latlng);
//         return L.marker(latlng)
//         .bindPopup(`<h2>${feature.properties.name}</h2><hr><h3>${feature.properties.city}, ${feature.properties.country}</h3>`);
//     }
// }).addTo(map);

// reate a popup marker for the San Francisco Airport on the outdoor map. When you click on the popup, 
// it will display the airport code and name of the airport.

// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer) {
//         console.log(layer)
//         layer.bindPopup(`<h3>Airport Code: ${layer.feature.properties.faa}</h3><hr><h3>Airport Name: ${layer.feature.properties.name}</h3`);
//     }
// }).addTo(map);

// Edit your L.geoJson() layer to add a popup marker that displays all airports' codes and names.
d3.json(airportData).then(function(data) {
    L.geoJSON(data, {
        onEachFeature: function(feature, layer) {
            console.log(layer);
            layer.bindPopup(`<h3>Airport Code: ${layer.feature.properties.faa}</h3><hr><h3>Airport Name: ${layer.feature.properties.name}</h3`);
        }
    }).addTo(map);
});
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------.

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);