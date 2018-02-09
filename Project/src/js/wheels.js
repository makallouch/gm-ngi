var isLoad_Wheel_4 = false;
var isLoad_Wheel_5 = false;
var isLoad_Wheel_6 = false;
var isLoad_Wheel_7 = false;


$("#jqxNotification4").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error"
});
$("#jqxNotification5").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error"
});
$("#jqxNotification6").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error"
});
$("#jqxNotification7").jqxNotification({ width: "auto", position: "bottom-right", opacity: 0.9,
            closeOnClick: true, autoClose: false, showCloseButton: true, template: "error"
});

gm.info.getVehicleData(wheelData, ['tire_left_front_pressure','tire_left_rear_pressure','tire_right_front_pressure','tire_right_rear_pressure'])

    
function wheelData(data) {
  var left_front = data.tire_left_front_pressure;
  var left_rear = data.tire_left_rear_pressure;
  var right_front = data.tire_right_front_pressure;
  var right_rear = data.tire_right_rear_pressure;

   
  if (left_front !== undefined  ) {
    document.getElementById("left_front").innerHTML = Math.round(left_front,2)/100;

    
    if(( Math.round(left_front,2)/100)<2 && isLoad_Wheel_4 == false)  {
         document.getElementById("left_front").style.color = "red";
       
        $("#jqxNotification4").jqxNotification("open");
        isLoad_Wheel_4 = true ;


    }else if(( Math.round(left_front,2)/100)>=2){
        document.getElementById("left_front").style.color = "white";
        $("#jqxNotification4").jqxNotification("closeAll");
        isLoad_Wheel_4 = false ;
    }

    

  }
  if (left_rear !== undefined  ) {
    document.getElementById("left_rear").innerHTML = Math.round(left_rear,2)/100;

    if(( Math.round(left_rear,2)/100)<2 && isLoad_Wheel_5 == false)  {
        document.getElementById("left_rear").style.color = "red";
        $("#jqxNotification5").jqxNotification("open");
        isLoad_Wheel_5 = true ;


    }else if(( Math.round(left_rear,2)/100)>=2){
                document.getElementById("left_rear").style.color = "white";

        $("#jqxNotification5").jqxNotification("closeAll");
        isLoad_Wheel_5 = false ;
    }
  }
  if (right_front !== undefined ) {
    document.getElementById("right_front").innerHTML =  Math.round(right_front,2)/100;

    if(( Math.round(right_front,2)/100)<2 && isLoad_Wheel_6 == false)  {
        document.getElementById("right_front").style.color = "red";
        $("#jqxNotification6").jqxNotification("open");
        isLoad_Wheel_6 = true ;


    }else if(( Math.round(right_front,2)/100)>=2){
        document.getElementById("right_front").style.color = "white";

        $("#jqxNotification6").jqxNotification("closeAll");
        isLoad_Wheel_6 = false ;
    }
  }
  if (right_rear !== undefined ) {

    document.getElementById("right_rear").innerHTML = Math.round(right_rear,2)/100;
    

    if(( Math.round(right_rear,2)/100)<2 && isLoad_Wheel_7 == false)  {
        document.getElementById("right_rear").style.color = "red";
        $("#jqxNotification7").jqxNotification("open");
        isLoad_Wheel_7 = true ;


    }else if(( Math.round(right_rear,2)/100)>=2){
                document.getElementById("right_rear").style.color = "white";

        $("#jqxNotification7").jqxNotification("closeAll");
        isLoad_Wheel_7 = false ;
    }
  }

    $("#jqxNotification4").on("click", function (event) {

            myFunction('car_repair');
    });
    $("#jqxNotification5").on("click", function (event) {

            myFunction('car_repair');
    });
    $("#jqxNotification6").on("click", function (event) {

            myFunction('car_repair');
    });
    $("#jqxNotification7").on("click", function (event) {

            myFunction('car_repair');
    });
    


}
gm.info.watchVehicleData(wheelData, ['tire_left_front_pressure','tire_left_rear_pressure','tire_right_front_pressure','tire_right_rear_pressure'])

