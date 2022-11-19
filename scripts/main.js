let map2 = L.map('mapFrance').setView([46.492563, 2.719138], 5.34);

for (let i = 0; i < places.length; i++) {
  L.marker([places[i].lat, places[i].long]).bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].desc + '</p>').addTo(map2);
}

L.tileLayer('https://api.mapbox.com/styles/v1/zcarnell/clan79yjz002i15pfcn7imdqz/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiemNhcm5lbGwiLCJhIjoiY2xhbjZ6czZsMDVraTNvcGQ1b2h6Zjc2bCJ9.v-shyASMRnY1z_N6vrlt2w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map2);
