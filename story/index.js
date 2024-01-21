// This example displays a map with the language and region set
// to Japan. These settings are specified in the HTML script element
// when loading the Google Maps JavaScript API.
// Setting the language shows the map in the language of your choice.
// Setting the region biases the geocoding results to that region.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: { lat:-25.786416802936397, lng: 134.39842121934447 }, 
  });
}

window.initMap = initMap;
