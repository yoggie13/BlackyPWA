function initMap() {
    var location = { lat: 44.771950, lng: 20.475900 };
    var map = new google.maps.Map(document.getElementById('map'), { zoom: 15, center: location });
    var marker = new google.maps.Marker({ position: location, map: map });
}