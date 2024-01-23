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
    position: { lat: -26.678056, lng:153.118333},  
    content: faPin.element,
    title: "Steve Irwin Monument",
  });
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Monument",
  });
  const marker = new google.maps.Marker({
    position: { lat:-26.838493, lng: 152.959481}, 
    map,
    title: "Steve Irwin Monument",
  });

 marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
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
 const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    ariaLabel: "Hometown",
  });
  const marker1 = new google.maps.Marker({
    position: {lat:-37.89851809717057, lng: 145.31275265870013}, 
    map,
    title: "Steve Irwin hometown",
  });

 marker1.addListener("click", () => {
    infowindow1.open({
      anchor: marker1,
      map,
    });
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
 const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    ariaLabel: "Site of Death",
  });
  const marker2 = new google.maps.Marker({
    position: {lat:-16.426215476647393,   lng: 145.7964803767105}, 
    map,
    title: "Steve Irwin's Death",
  });

 marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });


// a Marker for Steve Irwin's Wildlife Reserve
  const park = document.createElement("div");

  park.innerHTML = '<i class="fas fa-tree"></i>';  

  const faPin3 = new PinElement({
    glyph: park,
    glyphColor: "#008000",
    background: "#FFFFFFF",
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
 const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
    "https://en.wikipedia.org/w/index.php?title=Uluru</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    ariaLabel: "Australia Zoo",
  });
  const marker3 = new google.maps.Marker({
    position: {lat:  -26.83582338392587,   lng:  152.9631773673096 }, 
    map,
    title: "Australia Zoo",
  });

 marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
    });
  });

  
}

initMap();
