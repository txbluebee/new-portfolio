$(document).ready(function(){
  var map = new GMaps({
    div: '.map',
    lat: 47.6185628,
    lng: -122.2204679,
    zoom: 12
  });
  // add marker
  map.addMarker({
    lat: 47.6185628,
    lng: -122.3504679,
    title: 'Space Needle',
    infoWindow: {
      content: '<p>Famous Landmark</p>'
    }
  });
})