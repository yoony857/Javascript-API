
$(document).ready(function () {
    var lat, lon, api_url;
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            api_url = 'http://api.openweathermap.org/data/2.5/weather?lat=' +
                lat + lon + '&APPID=61c03a74d096cf3864d0cb8c00c50569';
            $.ajax({
                url : api_url,
                method : 'GET',
                success : function (data) {
                    var temp = Math.floor(data.main.temp - 273),
                        location = data.name,
                        desc = data.weather[0].main,
                        wind = data.wind.speed,
                        clouds = data.clouds.all;
                    $('#city').text(location);
                    $('#temp').text(temp + '°C');
                    $('#desc-weather').text(desc);
                    $('#wind').text('Wind: ' + wind + 'm/s');
                    $('#clouds').text('Clouds: ' + clouds + '%');
                }
            });
        });
    }
});
$('select')
    .change(function() {
        $( "select option:selected" ).each(function() {
            var cityName = $( "select option:selected" ).val(),
                api_url = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&APPID=61c03a74d096cf3864d0cb8c00c50569';
        $.ajax({
            url : api_url,
            method : 'GET',
            success : function (data) {
                var temp = Math.floor(data.main.temp - 273),
                    location = data.name,
                    desc = data.weather[0].main,
                    wind = data.wind.speed,
                    clouds = data.clouds.all;
                $('#city').text(location);
                $('#temp').text(temp + '°C');
                $('#desc-weather').text(desc);
                $('#wind').text('Wind: ' + wind + 'm/s');
                $('#clouds').text('Clouds: ' + clouds + '%');
            }
        });

            console.log(cityName);
            var back_image = `pic/${cityName}.jpg`;
        $('.weather').css("background-image", "url('"+back_image+"')" );
                // } else if (cityName == 'Boton') {
        //     //



});
    })
    .trigger( "change" );

