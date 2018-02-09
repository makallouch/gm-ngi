function setCoord(pos) {
    if (pos.coords !== undefined) {
        
        latitude = pos.coords.latitude;
        longitude = pos.coords.longitude;

        map.panTo({lat: latitude, lng: longitude});

        var xhr = new XMLHttpRequest();
        
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyBkgq6skqj_3s0ME2aQHUmq6N_EJ4iADKs&location=" + latitude + "," + longitude + "&radius=10000&type="+desti;
        xhr.open("GET", url, false);
        xhr.send();
        
        var text="";
        var text = xhr.responseText + "";
        var data = JSON.parse(text);

        console.log(data["results"].length);
        //$(document.getElementById("restaurants")).html('');
        //$("restaurants").empty();
        //$("document.getElementById('restaurants')").empty();
        document.getElementById("restaurants").innerHTML = "";
        restaurants = data["results"];
        
        
        var list = document.getElementById("restaurants");
        
        for (var x = 0; x < data["results"].length; x++) {
            var place = data["results"][x];
            console.log(place);
            if (place["name"] !== undefined) {
                var marker = new google.maps.Marker({
                    position: {
                        lat: place["geometry"]["location"]["lat"],
                        lng: place["geometry"]["location"]["lng"]
                    },
                    map: map
                });
                foodMarkers.push(marker);
                
                var li = document.createElement("li");
                
                function calcDistance (fromLat, fromLng, toLat, toLng) {
      return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
   }
                
                var bdis = calcDistance (latitude, longitude, place["geometry"]["location"]["lat"], place["geometry"]["location"]["lng"]);
                
                bdis=Math.round(bdis,2)/1000;
                
            li.innerHTML = place["name"] + "<br>" + place["vicinity"]+"<br>"+bdis+ " Km" ;
                li.addEventListener("click", navigate);
                list.appendChild(li);
            }
        }
    }
}

//place["geometry"]["location"]["lat"] + "<br>" place["geometry"]["location"]["lng"]


function success11(list) {
  console.log('destination has been set');
}

function failure11(err) {
  console.log('having trouble setting destination');
}



function navigate(event) {  
    var vicinity = event.currentTarget.innerHTML.split("<br>")[1];
    gm.nav.setDestination(success11,failure11, {address : vicinity}, true);
}

gm.info.getCurrentPosition(setCoord, null, true);