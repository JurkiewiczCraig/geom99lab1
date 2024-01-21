function initMap() {
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -26.16226621694845, lng:  134.50294137713874 },  
  });
}

  const marker = new AdvancedMarkerElement({
    map,
    position: { lat: 37.4239163, lng: -122.0947209 },
  });



window.initMap = initMap;
