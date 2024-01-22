function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: { lat: 34.84555, lng: -111.8035 },
    mapId: "4504f8b37365c3d0",
  });

  const tourStops = [
    {
      position: { lat: 34.8791806, lng: -111.8265049 },
      title: "Boynton Pass",
    },
    {
      position: { lat: 34.8559195, lng: -111.7988186 },
      title: "Airport Mesa",
    },
    {
      position: { lat: 34.832149, lng: -111.7695277 },
      title: "Chapel of the Holy Cross",
    },
    {
      position: { lat: 34.823736, lng: -111.8001857 },
      title: "Red Rock Crossing",
    },
    {
      position: { lat: 34.800326, lng: -111.7665047 },
      title: "Bell Rock",
    },
  ];

  const infoWindow = new google.maps.InfoWindow();

  tourStops.forEach(({ position, title }, i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
    });

    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(map, marker);
    });
  });
}

initMap();
