function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -26.16226621694845, lng:  134.50294137713874 },  
  });
}

const marker = new AdvancedMarkerElement({
    map,
    position: { lat:  -26.83573722346998, lng: 152.9631237231287},   
  });



window.initMap = initMap;
