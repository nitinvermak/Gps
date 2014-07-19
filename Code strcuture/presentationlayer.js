

function get_position(vid,time_var)
{
  
 
// Lets say there is a request from frontend to display position of vehicleid 1 at time t
var pos={  
           lat:[],
           lon:[]
                
         };


 

pos=get_cordinates(vid,time_var);
 
// this function will display data on screen
initialize(pos['lat'],pos['lon']);
  
}

function initialize(lat_obj,lon_obj)
{
  
var myCenter=new google.maps.LatLng(lat_obj,lon_obj);
var marker;
 
var mapProp = {
  center:myCenter,
  zoom:13,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
 
marker=new google.maps.Marker({
  position:myCenter,
  animation:google.maps.Animation.BOUNCE
  });

marker.setMap(map);
}