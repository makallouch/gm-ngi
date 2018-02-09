
gm.info.getVehicleData(pressureData, ['barometric_pressure'])


var gauge6 = new RadialGauge({
        renderTo: 'gauge6',
        width: 300,
        height: 380,
        title: "Barometric Pressure",
        units: "hPa",
        startAngle: 70,
        ticksAngle: 220,
        colorPlate: "#0a0a0f",
        colorUnits: "#3CA7DB",
        colorNumbers: "#3CA7DB",
        needleType: "arrow",
        needleStart: 0,
        needleEnd: 75,
        needleWidth: 4,
        needleCircleSize: 10,
        needleCircleInner: false,
        needleCircleOuter: true,
        needleShadow: false,
        colorNeedle: "#3CA7DB",
        colorNeedleEnd: "#2698CE",
        colorNeedleCircleOuter: "#3CA7DB",
        colorNeedleCircleOuterEnd: "#3CA7DB",
//        barWidth: 5,
//        colorBarProgress: '#3CA7DB',
//        colorBar: '#A8D3D5',

        colorMajorTicks: "#ffffff", 
        colorMinorTicks: "#ffffff",

        // Вопрос в мин и макс значениях, при этих значениях анимация не работает
        minValue: 0,
        maxValue: 127,

        majorTicks: ["0","","20","","40","","60","","80","","","127","","140"],

        strokeTicks: false,
highlights: [
            { from: 100, to: 140, color: 'rgba(255,30,0,.25)' }
        ],
        
        highlightsWidth: 25,
        numbersMargin: 12,
        animation: true,
        animationRule: "linear",
        valueBox: false,
        borders: false,
        borderShadowWidth: 0,
        value: 10,
        animateOnInit: true,
        animatedValue: true

    }).draw();

    
function pressureData(data) {

  var pressure = data.barometric_pressure;
  if (pressure !== undefined ) {

    gauge6.value = pressure ; 
        document.getElementById("presBatt").innerHTML = "- Barometric Pressure : "+pressure+"% </br>";


    if(pressure>=1000)  {

      document.getElementById("presBatt").innerHTML += "- Barometric Pressure is high </br>";


    }
    }
    
  }


gm.info.watchVehicleData(pressureData, ['barometric_pressure'])
