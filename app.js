let weather = {
    apikey: "c70d4cf203365144a9f3fd8b452b6a81",
    fetchWeather: function (city) {
     fetch("https://api.openweathermap.org/data/2.5/weather?q= "
     + city +
      "&units=metric&appid=" + 
      this.apikey
     )
     .then((response)=>response.json())
     .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data){
    const { name}= data;
    const { icon,description}= data.weather[0];
    const { temp,humidity}= data.main;
    const { speed}= data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText = "humidity:" + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed:" + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/1920x1080/?" + description + "')"
    },
    search: function (){
        this.fetchWeather(document.querySelector(".search-bar").value);
    },
};

document.querySelector(".search button").addEventListener("click", function (){
weather.search();
});
document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("guwahati");