// Add console.log to check to see if our code is working
console.log("working");

// Create the map object with a center and zoom level
// center of US
let map = L.map('mapid').setView([40.7, -94.5], 4);
// center of LA
// let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Alternative method to above - this is useful when we want to
// add multiple tile layers, or a bacground image of our map(s)

// let map = L.map("mapid", {
//     center: [
//       40.7, -94.5
//     ],
//     zoom: 4
//   });

// Add a marker to the map for Los Angeles, California
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a circle to the map for LA, Ca
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 100
//     }).addTo(map);

// // We create the tile layer that will be the background of our map
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a light-yellow circle with black lines indicating a 300m radius of Central LA, CA on a dark map
// let marker = L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: 'yellow',
//     // fillOpacity: 0.3,
//     }).addTo(map);

// Can use the circle-marker function
// let marker = L.circleMarker([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "#ffffa1"
// }).addTo(map);

// Get the data from cities.js
let cityData = cities;

// Loop through the cities.js array and create one marker for each city; add popup; 
// circle marker that has radius equivalent to city's population.
cityData.forEach(function(city) {
    console.log(city)
    L.circleMarker(city.location, {
        radius: city.population/100000
    })
    // .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
    .bindPopup(`<h2> ${city.city}, ${city.state} </h2> <hr> <h3>Population: ${city.population.toLocaleString()} </h3>`)
    .addTo(map);
});

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     //attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     accessToken: API_KEY
// });

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

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);