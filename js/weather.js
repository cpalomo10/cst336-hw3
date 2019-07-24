$("#zipError").hide();

$("#submitBtn").on("click", function() {
    if(!checkValid()) {
        $("#zipError").show();
    } else {
    $("#zipError").hide();
    $.ajax({
           method:"GET",
           url: "https://api.openweathermap.org/data/2.5/weather?zip=" + $("#zip").val() + ",us&appid=5e873dded353c03b51f1a37aa6d658f3",
           dataType: "json",
           success: function(result, status) {
                var tempUnits = Math.floor((result.main.temp-273.15)*(9/5)+32);
                $("#city").html(result.name);
                $("#temperature").html(tempUnits + " degrees (F)");
                $("#humidity").html(result.main.humidity);
                $("#wind").html(result.wind.speed + " mph");
           }
    });
    }
});

function checkValid(){
    isValid = true;
    if($("#zip").val().length != 5) {
        isValid = false;
    }
    return isValid;
}
