// inspiration for this code was taken from 
//https://github.com/googlemaps/js-samples/tree/main/samples/advanced-markers-graphics and
//https://github.com/googlemaps/js-samples/tree/main/samples/infowindow-simple

// creating an asynchronous function called initMap
async function initMap() {
  // funciton that waits for import of the google maps library before running
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  // importing the place class from the google maps library
  const { Place } = await google.maps.importLibrary("places");
  //centering the map on the eastern half of Australia and 
  const map = new Map(document.getElementById("map"), {
    center: { lat: 37.42475, lng: -122.0845 },  
    zoom: 4,
    mapId: "Life Story of Steve Irwin",
  });
//below line of code allows me to pass html through the java 
  const parser = new DOMParser();

  // Creating a marker and info window for the Steve Irwin Monument, icon was taken from Font Awesome
  
  const icon = document.createElement("div");
// defining the monument icon
  icon.innerHTML = '<i class="fas fa-monument"></i>';
// stylizing the icon
  const faPin = new PinElement({
    glyph: icon,
      glyphColor: "#FFFFFF",
    background: "#013220",
    
  });
  // placing the icon  using lat and long
  const faMarker = new AdvancedMarkerElement({
    map,
    position: { lat: -26.678056, lng:153.118333},  
    content: faPin.element,
    title: "Steve Irwin Monument",
  });
  // creating the content for the info window
  const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Monument To Steve Irwin</h1>' +
    '<div id="bodyContent">' +
    "<p>A monument to Steve Irwin was built here in 2007, built to recognize" +
    "Steve Irwin's dedication to conservation, education and his family."+
    "The statue depicts Irwin, with his children Bindi, Robert and holding "+ 
  "a crocodile.  The monument is located right by the beach in Mooloolaba </p>" +
       
    "</div>" +
    "</div>";
  //creating variables for the info windodw to hold the content
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Monument",
  });
  //placement fo the marker for the info window, to be placed behind the font awesome marker
  const marker = new google.maps.Marker({
    position: {  lat: -26.678056, lng:153.118333}, 
    map,
    title: "Steve Irwin Monument",
  });
//adding the click listener for the info window to open when the user clicks the icon
 marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
    });
  });

  
// Creating the marker and info window for Steve Irwin's home town
 //creating the div for the icon
  const city = document.createElement("div");
//adding the font awesome icon for city
  city.innerHTML = '<i class="fas fa-city"></i>';
//stylizing the icon
  const faPin1 = new PinElement({
    glyph: city,
   glyphColor: "#FFFFFF",
    background: "#013220",
     
  });
  //placing the icon on the map
  const faMarker1 = new AdvancedMarkerElement({
    map,
    position: { lat:-37.89851809717057, lng: 145.31275265870013},     
    content: faPin1.element,
    title: "Steve Irwin's Hometown",
  });
  //creating the content for the info window
 const contentString1 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Steve Irwins Hometown</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Upper Fern Tree Gully</b> was Steve Irwin's Hometown, he was born on February " +
    "22nd 1962 to Robert and Lyn Hakainsson.  Both parents were avid naturalists " +
    "and decided to open up their own wildlife park where Steve quickly took a liking" +
    "to and spent most of his free time with the animals, paying particular"+
    " close attention to the crocodiles.  He is reported to have wrestled his first crocodile" +
    "at the tender age of nine (while under his fathers supervision).</p>" +
    '<p><a href="https://en.wikipedia.org/wiki/Steve_Irwin">'+
   "Click Here for Reference Link </a> </p>" +
    "</div>" +
    "</div>";
  //adding the content to the info window
  const infowindow1 = new google.maps.InfoWindow({
    content: contentString1,
    ariaLabel: "Hometown",
  });
  //adding the marker for the info window, marker will be placed below the font awesome icon
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
// Creating a div and infowindow for Where Steve Irwin Passed away
  const death = document.createElement("div");
//putting the icon into the div
  death.innerHTML = '<i class="fas fa-skull-crossbones"></i>';  
//stylizing the icon
  const faPin2 = new PinElement({
    glyph: death,
   glyphColor: "#FFFFFF",
    background: "#013220",
 
  });
  // placement of the icon on the map using lat and long
  const faMarker2 = new AdvancedMarkerElement({
    map,
    position: { lat:-16.426215476647393,   lng: 145.7964803767105},       
    content: faPin2.element,
    title: "Site Where Steve Irwin Passed away",
  });
  // creating the content for the info window
 const contentString2 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Site of Accidental Death</h1>' +
    '<div id="bodyContent">' +
    "<p>On September 4th 2006, Steve Irwin Trajically passed away while filmining " +
    "for a new documentery series called Oceans Deadliest." +
    "when a short-tailed stingray attacked him and stung him through the heart." +
    "His funeral was held on the 9th of September and he is currenlty " +
    "buried in Australia Zoo in a private area of the park. " +  
    "</div>" +
    "</div>";
  // creating an info window for the above content to be placed in
  const infowindow2 = new google.maps.InfoWindow({
    content: contentString2,
    ariaLabel: "Site of Death",
  });
  //adding a icon that will be placed underneath the above icon for the infowindow
  const marker2 = new google.maps.Marker({
    position: {lat:-16.426215476647393,   lng: 145.7964803767105}, 
    map,
    title: "Site of Steve Irwin's Death",
  });
// adding a click listener for the info window to pop up when the user clicks the icon
 marker2.addListener("click", () => {
    infowindow2.open({
      anchor: marker2,
      map,
    });
  });


// Creating a marker and infowindow for the Steve Irwin Wildlife Reserve
  const park = document.createElement("div");
//putting the font awesome icon of a tree into the above div element
  park.innerHTML = '<i class="fas fa-tree"></i>';  
//stylizing the pin
  const faPin3 = new PinElement({
    glyph: park,
       glyphColor: "#FFFFFF",
    background: "#013220",
  
  });
  //placing the pin on the map using the lat and long
  const faMarker3 = new AdvancedMarkerElement({
    map,
    position: { lat: -12.376136610221534,   lng: 142.17760343955635     },    
    content: faPin3.element,
    title: "Steve Irwin's Wildlife Reserve/Park",
  });
  //creating the content for the infowindow
 const contentString3 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">The Steve Irwin Wildlife Reserve</h1>' +
    '<div id="bodyContent">' +
    "<p>The land in upper queensland was gifted to the Irwin family after his passing" +
    "as it was one of his favorite places in the world to visit.  He was fond of the " +
    "large amount of crocodiles that were known to inhabit the area" +
   "and was a haven for hundreds ofvarities of other plans and animals.  The area was " +
   "at one point to be taken over by a mining corporation, but thanks to hundreds" +
   "of thousands of signatures the land was able to be kept in its natural state" +
   "and be used for scientific research and preservation in the meantime.</p>" +
      '<p><a href="https://australiazoo.com.au/support-wildlife/properties/steve-irwin-wildlife-reserve">'+
   "Click Here for Reference Link </a> </p>" +
    "</div>" +
    "</div>";
  //creating the info window itself and placing the above content inside
  const infowindow3 = new google.maps.InfoWindow({
    content: contentString3,
    ariaLabel: "Wildlife Preserve",
  });
  // adding the location of the marker for the info window, to be placed below the graphic icon
  const marker3 = new google.maps.Marker({
    position: { lat: -12.376136610221534,   lng: 142.17760343955635  }, 
    map,
    title: "Wildlife Preserve",
     
  });
//adding a click listenter to the icon, so when a user clicks it the window pops up
 marker3.addListener("click", () => {
    infowindow3.open({
      anchor: marker3,
      map,
    });
  });
// creating a marker and info windower for Australia Zoo
  //creating a div element for the marker
  const zoo = document.createElement("div");
//turning the marker into the font awesome elemnt
  zoo.innerHTML = '<i class="fas fa-tree"></i>';  
//stylizing the marker elemnt
  const faPin4 = new PinElement({
    glyph: zoo,
       glyphColor: "#FFFFFF",
    background: "#013220",
    
  });
  //placing the marker using lat and long
  const faMarker4 = new AdvancedMarkerElement({
    map,
    position: { lat:  -26.83582338392587,   lng:  152.9631773673096     },   
      content: faPin4.element,
    title: "Australia Zoo",
  });
  //creating the content for the info window
 const contentString4 =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Australia Zoo</h1>' +
    '<div id="bodyContent">' +
    "<p> Australia Zoo is the world reknown zoo owned and operated by the Irwin Family." +
   "The zoo was first opened in the 1970s by Bob and Lyn Irwin and was where Steve first "+
   "first fell in love with animals with a special interest in crocodiles. "+
   "Over the years as Steve Irwin gained notoriety and fame with his show The Crocodile Hunter " +
   "Steve and his wife were able to expand the park, adding new features such as a safari and wildlife hopsital." +
   "To this date the Australia Zoo has treated tens of thousands of injured animals, and it's current owner"+
   "Terri Irwin has stated she will continue to expand the park and continue her late husbands legacy</p>" +
    '<p><a href=" https://en.wikipedia.org/wiki/Australia_Zoo">'+
   "Click Here for Reference Link </a> </p>" +
    "</div>" +
    "</div>";
  //creating the info window to store the content in and adding a lab
  const infowindow4 = new google.maps.InfoWindow({
    content: contentString4,
    ariaLabel: "Australia Zoo",
  });
  //playing the marker for the info window below the graphic marker
  const marker4 = new google.maps.Marker({
    position: {lat:  -26.83582338392587,   lng:  152.9631773673096 }, 
    map,
    title: "Australia Zoo",
  });
//creating a click listener for the info window to open up when the user clicks on the marker
 marker4.addListener("click", () => {
    infowindow4.open({
      anchor: marker4,
      map,
    });
  });

  
}

initMap();
