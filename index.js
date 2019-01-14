function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11.5,
      center: new google.maps.LatLng(40.728157, -74.077644),
    });

    var icon = 'images/location-pin.png';
     
    var features = [
      {
        position: new google.maps.LatLng(40.728157, -74.077644),
      }, 
      {
        position: new google.maps.LatLng(40.730610, -73.935242),
      }, 
      {
        position: new google.maps.LatLng(40.650002, -73.949997),
      }, 
      {
        position: new google.maps.LatLng(40.735657, -74.172363),
      }, 
      {
        position: new google.maps.LatLng(40.702503, -74.261398),
      }
    ];

    features.forEach(function(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icon,
        map: map
      });
    });
}

(function() {
    'use strict';
  
    var btnScrollDown = document.querySelector('#scroll_down');
  
    function scrollDown() {
      var windowCoords = document.documentElement.clientHeight;
      (function scroll() {
        if (window.pageYOffset < windowCoords) {
          window.scrollBy(0, 10);
          setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
          window.scrollTo(0, windowCoords);
        }
      })();
    }
  
    btnScrollDown.addEventListener('click', scrollDown);
  })();