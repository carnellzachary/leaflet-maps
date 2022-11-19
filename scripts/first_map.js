let map1 = L.map('map').setView([26.158731, -81.778160], 13.28);
let churchMarker = L.marker([26.173320, -81.740273]).addTo(map1);
let beachMarker = L.marker([26.131830, -81.806000]).addTo(map1);
let mallMarker = L.marker([26.17, -81.796]).addTo(map1);
let slurpeeMarker = L.marker([26.163420, -81.767750]).addTo(map1);

churchMarker.bindPopup("<b>Center Point Community Church</b><br>This is the church I grew up in.");
beachMarker.bindPopup("<b>Naples Pier</b><br>This is my favorite place to go at the beach.");
mallMarker.bindPopup("<b>Coastland Center Mall</b><br>This is a go-to epicenter for shopping and chilling in Naples.");
slurpeeMarker.bindPopup("<b>Race Trac</b><br>This is my favorite place to get slurpees at.");


L.tileLayer('https://api.mapbox.com/styles/v1/zcarnell/clan79yjz002i15pfcn7imdqz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemNhcm5lbGwiLCJhIjoiY2xhbjZ6czZsMDVraTNvcGQ1b2h6Zjc2bCJ9.v-shyASMRnY1z_N6vrlt2w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map1);
