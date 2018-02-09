var oil_Load = false;
$("#jqxNotification2").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error", blink: true
});
gm.info.getVehicleData(oilData, ['engine_oil_temp'])


var gauge4 = new LinearGauge({
    renderTo: 'gauge4',
    width: 120,
    height: 350,
    units: "°C",
    minValue: -40,
    startAngle: 90,
    ticksAngle: 180,
    title: "Engine Oil Temp",
    valueBox: false,
    maxValue: 215,
    majorTicks: [
        "-40",
        "-20",
        "0",
        "20",
        "40",
        "60",
        "80",
        "100",
        "120",
        "140",
        "160",
        "180",
        "200",
        "215"
    ],
    minorTicks: 2,
    strokeTicks: true,
    highlights: [
        {
            "from": 120,
            "to": 215,
            "color": "rgba(200, 50, 50, .75)"
        }
    ],
    colorPlate: "#0a0a0f",
    borderShadowWidth: 0,
    borders: false,
    colorBorderOuter: "#333",
        colorBorderOuterEnd: "#111",
                colorTitle: '#fff',
        colorUnits: '#ccc',
        colorNumbers: '#eee',
        colorNeedle: 'rgba(240, 128, 128, 1)',
        colorNeedleEnd: 'rgba(255, 160, 122, .9)',

    needleType: "arrow",
    needleWidth: 2,
    needleCircleSize: 7,
    needleCircleOuter: true,
    needleCircleInner: false,
    animationDuration: 1500,
    animationRule: "linear",
    barWidth: 10,
    value: 35
}).draw();
/*
 var gauge4 = new RadialGauge({
    renderTo: 'gauge4',
    width: 300,
        height: 380,
        units: '0 %',
        title: "Engine oil life",
        value: 0,
        minValue: 0,
        listeners : {
            value: function(value) {
                this.update({ units: parseInt(value) + ' %' });
            }
        },
        startAngle: 90,
        ticksAngle: 220,
        maxValue: 100,
        majorTicks: [
            '-40','-20','0','20','60','100','140','180','215'
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
*/

//console.log(data.battery_charge_state);
    
function oilData(data) {
  var oil = data.engine_oil_temp;
  

  

  if (oil !== undefined ) {
    //gg1.refresh(fuel)
    gauge4.value = oil ; 

    document.getElementById("oilMessage").innerHTML = "- Engine Oil Temp : "+oil+" ºC</br>";


    if(oil>=100)  {

      document.getElementById("oilMessage").innerHTML += "- Engine Oil Temp is High</br>";


    }else if(oil<100 && oil>=00)  {

      document.getElementById("oilMessage").innerHTML += "- Engine Oil Temp is Medium</br>";

    }else{
      document.getElementById("oilMessage").innerHTML += "- Engine Oil Temp is Low</br>";

    }


        
        $("#jqxNotification2").on("click", function (event) {

            myFunction('car_repair');

        });

        if(oil>100 && oil_Load == false)  {

            $("#jqxNotification2").jqxNotification("open");
            oil_Load = true ;


        }else if(oil<=100 ){
            $("#jqxNotification2").jqxNotification("closeAll");
            oil_Load = false ;
        }
    

  }

}
gm.info.watchVehicleData(oilData, ['engine_oil_temp'])
