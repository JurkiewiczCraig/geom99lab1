async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const { Place } = await google.maps.importLibrary("places");
  const map = new Map(document.getElementById("map"), {
    center: { lat: -25.873943323960678, lng: 133.3551714855651 },   
    zoom: 4,
    mapId: "4504f8b37365c3d0",
  });
  const parser = new DOMParser();

  // A marker using a Font Awesome icon for the glyph.
  const icon = document.createElement("div");

  icon.innerHTML = '<i class="fas fa-monument"></i>';

  const faPin = new PinElement({
    glyph: icon,
    glyphColor: "#FFFFFF",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker = new AdvancedMarkerElement({
    map,
    position: { lat:-26.838493, lng: 152.959481},  
    content: faPin.element,
    title: "Steve Irwin Monument",
  });
// a Marker for Steve Irwin's home town
  const city = document.createElement("div");

  city.innerHTML = '<i class="fas fa-city"></i>';

  const faPin1 = new PinElement({
    glyph: city,
    glyphColor: "#FFFFFF",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker1 = new AdvancedMarkerElement({
    map,
    position: { lat:-37.89851809717057, lng: 145.31275265870013},     
    content: faPi1n.element,
    title: "Steve Irwin's Hometown",
  });



  
}

initMap();
