async function initMap() {
  // Request needed libraries.
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: { lat: -25.792046299019553, lng: 132.3348778563882 },    
    mapId: "4504f8b37365c3d0",
  });
  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops = [
    {
      position: { lat: 34.8791806, lng: -111.8265049 },
      title: "Australia Zoo",
    },
    {
      position: { lat: -26.678056, lng: 153.118333 },
      title: "Steve Irwin Monument",
    },
    {
      position: { lat: -16.416235940808605, lng: 145.771535726202 },    
      title: "Batt Reef",
    },
    {
      position: { lat: -37.89838263906072, lng: 145.31301015076852 },    
      title: "Upper FernTree Gully",
    },
    {
      position: { lat: -12.37533068709093,  lng: 142.17720449182988 },   
      title: "Steve Irwin Wildlife Reserve",
    },
  ];
  // Create an info window to share between markers.
  const infoWindow = new InfoWindow();

  // Create the markers.
  tourStops.forEach(({ position, title }, i) => {
    const pin = new PinElement({
      glyph: `${i + 1}`,
    });
    const marker = new AdvancedMarkerElement({
      position,
      map,
      title: `${i + 1}. ${title}`,
      content: pin.element,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", ({ domEvent, latLng }) => {
      const { target } = domEvent;

      infoWindow.close();
      infoWindow.setContent(marker.title);
      infoWindow.open(marker.map, marker);
    });
  });
}

initMap();
