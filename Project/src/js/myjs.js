
function show_hide(){
    
    var desti="spa";

    var x = document.getElementById("table10");
    var y=document.getElementById("map-show");

    if (x.style.display === "none") {
     x.style.display = "block";
    } else {
     x.style.display = "none";
    }
    
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }  
}
   

function myFunction(des) {
  //$('#map-show').hide();
    
  
   desti = des;
   console.log(desti);
   // desti = a;
         google.maps.event.trigger(map, "resize");

gm.info.getCurrentPosition(setCoord, null, true);

    //$('#map-show').hide();
    showMap();
     google.maps.event.trigger(map, "resize");

//$( "#list-container" ).load(window.location.href + "#list-container" );
        

    



}

