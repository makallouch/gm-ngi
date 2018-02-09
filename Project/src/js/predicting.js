var signalFilter = ['accelerator_position','throttle_position','intake_air_temp','engine_oil_pressure','engine_speed','ac_compressor_on','engine_coolant_temp','average_speed','wheel_angle'];
gm.info.getVehicleData(prfuel,signalFilter );


    function prfuel1(data) {
        gm.info.getVehicleData(prfuel,signalFilter );
    }
function prfuel(data) {
  var a = data.accelerator_position
  var b = data.throttle_position
  var c = data.intake_air_temp
  var d = data.engine_oil_pressure
  var e = data.engine_speed
  var f = data.engine_coolant_temp
  var g = data.ac_compressor_on
  var h = data.ac_compressor_on
  var i = data.engine_coolant_temp
  var j = data.ac_compressor_on
  var k = data.average_speed
  var l = data.wheel_angle
  
  console.log(a+" "+b+" "+c+" "+d+" "+e+" "+f+" "+g+" "+h+" "+i+" "+j+" "+k+" "+l)


  if (a !== undefined && b !== undefined && c !== undefined && d !== undefined && e !== undefined && f !== undefined && g !== undefined && h !== undefined && i !== undefined && j !== undefined && k !== undefined && l !== undefined) {
      
       a = data.accelerator_position
       b = data.throttle_position
       c = data.intake_air_temp
       d = data.engine_oil_pressure
       e = data.engine_speed
       f = data.engine_coolant_temp
       g = data.ac_compressor_on
       h = data.ac_compressor_on
       i = data.engine_coolant_temp
       j = data.ac_compressor_on
       k = data.average_speed
       l = data.wheel_angle
       
       
       $(document).ready(function(){
                $.ajax({
                  type: "GET",
                  url: 'http://127.0.0.1:5000/api',
                  data: {'a':a,
                         'b':b,
                         'c':c,
                         'd':d,
                         'e':e,
                         'f':f,
                         'g':g,
                         'h':h,
                         'i':i,
                         'j':j,
                         'k':k,
                         'l':l
                        
                        },
                  success: function(response){
                    
                      console.log("the pred is "+response);
                      document.getElementById("pred_value").innerHTML ="Fuel consummation"+response+" l/100km"
                  }
                });  
              
          });
    
  }

}
gm.info.watchVehicleData(prfuel1, signalFilter);