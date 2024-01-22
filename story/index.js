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

  icon.innerHTML = '<i class="fas fa-monument fa-lg"></i>';

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
    content: faPin1.element,
    title: "Steve Irwin's Hometown",
  });


// a Marker for Where Steve Irwin Died
  const death = document.createElement("div");

  death.innerHTML = '<i class="fas fa-skull-crossbones"></i>';  

  const faPin2 = new PinElement({
    glyph: death,
    glyphColor: "#000000",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker2 = new AdvancedMarkerElement({
    map,
    position: { lat:-16.426215476647393,   lng: 145.7964803767105},       
    content: faPin2.element,
    title: "Site Where Steve Irwin Passed away",
  });


// a Marker for Steve Irwin's Wildlife Reserve
  const park = document.createElement("div");

  park.innerHTML = '<i class="fas fa-tree"></i>';  

  const faPin3 = new PinElement({
    glyph: park,
    glyphColor: "#FFFFFF",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker3 = new AdvancedMarkerElement({
    map,
    position: { lat: -12.376136610221534,   lng: 142.17760343955635     },    
    content: faPin3.element,
    title: "Steve Irwins Wildlife Reserve/Park",
  });

// a Marker for Australia Zoo
  const zoo = document.createElement("div");

  zoo.innerHTML = '<i class="fas fa-tree"></i>';  

  const faPin4 = new PinElement({
    glyph: zoo,
    glyphColor: "#FFFFFF",
    background: "#FFD514",
    borderColor: "#ff8300",
  });
  const faMarker4 = new AdvancedMarkerElement({
    map,
    position: { lat:  -26.83582338392587,   lng:  152.9631773673096     },   
      content: faPin4.element,
    title: "Australia Zoo",
  });


  
}

initMap();
