 function dmm_dd (deg) {
        var degrees=parseInt(deg.substring(0,2));
        var minutes=parseFloat(deg.substring(2,10));
        return deg=degrees +(minutes/60);
      }
 function get_cordinates(vid,time_var)
{
      
     
        var data={  
                     lat:[],
                     lon:[]
                
                  };
            
                
       var v_time = time_var.split(":");
        for(var i=0; i<jsonObject.length; i++)
        {
          if(     (vid==jsonObject[i]['vehicleId'])
               && (v_time[0]==jsonObject[i]['time']['hour'])
               && (v_time[1]==jsonObject[i]['time']['minute'])
               && (v_time[2]==jsonObject[i]['time']['second'])
             )
          
           {  //alert("data found");
              var lat=jsonObject[i]['position']['latitude'];
              lat=lat.toString();
              data['lat'].push(dmm_dd(lat));
              var lon=jsonObject[i]['position']['longitude'];
              lon=lon.toString();
              data['lon'].push(dmm_dd(lon));
                return data;
           } 
           
        }
      
       

  
}
