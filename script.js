const apiKey= "140e54d757a476228359f7cbd80480e0";

function getWeather() {
    const city= document.getElementById("city").value;

    if (city === "") {
        document.getElementById("error").innerText= "Please enter a city name";
        return;
    }
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
     
    fetch(url)
    .then (response=> response.json())
    .then (data => {
        if (data.cod ==="404") {

        document.getElementById("error").innerText= "City not found";
        return;
    }

    document.getElementById("location").innerText= data.name + ", " + data.sys.country;

    document.getElementById("temperature").innerText= "Temperature: " + data.main.temp + " °C";

    document.getElementById("description").innerText= "Weather: " + data.weather[0].description;

    document.getElementById("icon").src= `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    document.getElementById("error").innerText="";
})
.catch(error => {
    document.getElementById("error").innerText= "Error fetching data";
});
}