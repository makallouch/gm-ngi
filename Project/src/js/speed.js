
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

 var gauge_speed = new RadialGauge({
    renderTo: 'gauge2',
    width: 300,
        height: 380,
        units: 'Km/h',
        title: false,
        value: 0,
        minValue: 0,
        maxValue: 260,
        majorTicks: [
            '0','20','40','60','80','100','120','140','160','180','200','220','240','260'
        ],
        minorTicks: 2,
        strokeTicks: false,
        highlights: [
            { from: 0, to: 50, color: 'rgba(0,255,0,.15)' },
            { from: 50, to: 100, color: 'rgba(255,255,0,.15)' },
            { from: 100, to: 150, color: 'rgba(255,30,0,.25)' },
            { from: 150, to: 200, color: 'rgba(255,0,225,.25)' },
            { from: 200, to: 260, color: 'rgba(0,0,255,.25)' }
        ],
        colorPlate: '#0a0a0f',
        colorMajorTicks: '#f5f5f5',
        colorMinorTicks: '#ddd',
        colorTitle: '#fff',
        colorUnits: '#ccc',
        colorNumbers: '#eee',
        colorNeedle: 'rgba(240, 128, 128, 1)',
        colorNeedleEnd: 'rgba(255, 160, 122, .9)',
        valueBox: true,
        animationRule: 'bounce',
        animationDuration: 1500
}).draw();

     

    
function speedData(data) {
  var speed = data.average_speed ;
      

  if (speed !== undefined ) {
    //gg1.refresh(fuel)
    gauge_speed.value = speed ; 

    
    //gauge.animation.duration + 500
    //console.log("Changed!" + fuel)
  }

}
gm.info.watchVehicleData(speedData, ['average_speed'])
