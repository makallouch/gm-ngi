var isLoad_battery = false;
$("#jqxNotification1").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error", blink: true
});
gm.info.getVehicleData(batteryData, ['battery_charge_state'])


 var gauge3 = new RadialGauge({
    renderTo: 'gauge3',
    width: 300,
        height: 380,
        units: '0 %',
        title: "Battery charge",
        value: 0,
        minValue: 0,
        listeners : {
            value: function(value) {
                this.update({ units: parseInt(value) + ' %' });
            }
        },
        startAngle: 90,
        ticksAngle: 180,
        maxValue: 100,
        majorTicks: [
            '0','25','50','75','100'
        ],
        minorTicks: 2,
        strokeTicks: false,
        highlights: [
            { from: 0, to: 25, color: 'rgba(255,30,0,.25)' },
            { from: 25, to: 100, color: 'rgba(255,255,0,.15)' }
        ],
        colorPlate: '#0a0a0f',
        borders: true,
        borderShadowWidth: 0,
        colorMajorTicks: '#f5f5f5',
        colorMinorTicks: '#ddd',
        colorBorderOuter: "#333",
        colorBorderOuterEnd: "#111",
        colorTitle: '#fff',
        colorUnits: '#ccc',
        colorNumbers: '#eee',
        colorNeedle: 'rgba(240, 128, 128, 1)',
        colorNeedleEnd: 'rgba(255, 160, 122, .9)',
        valueBox: false,
        animationDuration: 500,
    animationRule: "linear"
}).draw();


//console.log(data.battery_charge_state);
    
function batteryData(data) {
  var battery = data.battery_charge_state;
  
      var timers = [];

  

  if (battery !== undefined ) {
    //gg1.refresh(fuel)
    gauge3.value = battery ; 
    document.getElementById("messageBatt").innerHTML = "- Battery charge state :  "+battery+"% </br>";
    console.log("Ssssssssss   "+isLoad);


    if(battery>=70)  {

      document.getElementById("messageBatt").innerHTML += "- Battery charge state is full </br>";


    }else if(battery<70 && battery>=50)  {

      document.getElementById("messageBatt").innerHTML += "- Battery charge state is medium </br>";

    }else if(battery<50 && battery>=30)  {

      document.getElementById("messageBatt").innerHTML += "- Battery charge state is low </br>";


    }else{
      document.getElementById("messageBatt").innerHTML += "- Fuel level is very low!!!! </br>";

    }


        
        $("#jqxNotification1").on("click", function (event) {

            myFunction('car_repair');

        });

        if(battery<10 && isLoad_battery == false)  {

            $("#jqxNotification1").jqxNotification("open");
            isLoad_battery = true ;


        }else if(battery>=10 ){
            $("#jqxNotification1").jqxNotification("closeAll");
            isLoad_battery = false ;
        }
    

  }

}
gm.info.watchVehicleData(batteryData, ['battery_charge_state'])
