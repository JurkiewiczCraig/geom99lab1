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

  icon.innerHTML = '<i class="fa-solid fa-monument"></i>'>;

  const faPin = new PinElement({
    glyph: icon,
    glyphColor: "#ff8300",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker = new AdvancedMarkerElement({
    map,
    position: { lat: -26.248504845340236, lng:  132.72973669096814},  
    content: faPin.element,
    title: "A marker using a FontAwesome icon for the glyph.",
  });
}

initMap();
