function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -26.16226621694845, lng:  134.50294137713874 },  
  });
}





window.initMap = initMap;
