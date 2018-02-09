
var isLoad = false;
$("#jqxNotification").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error", blink: false
});


gm.info.getVehicleData(fuelData, ['fuel_level'])






/*var gg1 = new JustGage({
    id: "gg1",
    value: 50,
    min: 0,
    max: 100,
    symbol: '%',
  gaugeWidthScale: 0.8,
    title: "Feul",
    label: "Feul level",
    counter: true,
    customSectors: [{
      color: "#ff0000",
      lo: 0,
      hi: 50
    }, {
      color: "#00ff00",
      lo: 50,
      hi: 100
    }]
});*/

/*function customValue(val) {
            if (val < 50) {
                return 'low';
            } else if (val > 50) {
                return 'high';
            } else if (val === 50) {
                return 'ideal';
            }
        }*/

 var gauge = new RadialGauge({
    renderTo: 'gauge1',
    width: 300,
        height: 380,
        units: '0 %',
        title: false,
        value: 0,
        minValue: 0,
        listeners : {
            value: function(value) {
                this.update({ units: parseInt(value) + ' %' });
            }
        },
        startAngle: 0,
        ticksAngle: 180,
        maxValue: 100,
        majorTicks: [
            'E','1/2','F'
        ],
        minorTicks: 2,
        strokeTicks: false,
        highlights: [
            { from: 0, to: 33, color: 'rgba(255,30,0,.25)' },
            { from: 33, to: 66, color: 'rgba(255,255,0,.15)' },
            { from: 66, to: 100, color: 'rgba(0,255,0,.15)' },
        ],
        colorPlate: '#000',
        borders: true,
            colorBorderOuter: "#000",
    colorBorderOuterEnd: "#000",

        borderShadowWidth: 0,
        colorMajorTicks: '#fff',
        colorMinorTicks: '#ddd',
        colorTitle: '#fff',
        colorUnits: '#ccc',
        colorNumbers: '#eee',
        colorNeedle: 'rgba(240, 128, 128, 1)',
        colorNeedleEnd: 'rgba(255, 160, 122, .9)',
        valueBox: false,
        animationDuration: 1500,
    animationRule: "dequint",
     animatedValue: true
}).draw();

     

    
function fuelData(data) {
  var fuel = data.fuel_level


      

  if (fuel !== undefined ) {
    //gg1.refresh(fuel)
    gauge.value = fuel ; 
    document.getElementById("messageFul").innerHTML = "- Fuel level :  "+fuel+"% </br>";
    console.log("Ssssssssss   "+isLoad);


    if(fuel>=70)  {

      document.getElementById("messageFul").innerHTML += "- Fuel level is full </br>";


    }else if(fuel<70 && fuel>=50)  {

      document.getElementById("messageFul").innerHTML += "- Fuel level is medium </br>";

    }else if(fuel<50 && fuel>=30)  {

      document.getElementById("messageFul").innerHTML += "- Fuel level is low </br>";


    }else{
      document.getElementById("messageFul").innerHTML += "- Fuel level is very low!!!! </br>";

    }


        fuel = data.fuel_level
        
        $("#jqxNotification").on("click", function (event) {

            myFunction('gas_station');

        });

        if(fuel<10 && isLoad == false)  {

            $("#jqxNotification").jqxNotification("open");
            isLoad = true ;


        }else if(fuel>=10 ){
            $("#jqxNotification").jqxNotification("closeAll");
            isLoad = false ;
        }
    

  }



}
gm.info.watchVehicleData(fuelData, ['fuel_level'])
