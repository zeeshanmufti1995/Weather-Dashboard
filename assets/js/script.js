var inputValue = $('.search');
var searchBtn = $(".searchBtn");
var main = $("main");
var searches = [];




var fetchWeather= function (){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.val() + '&appid=c0c8e3bb6abc081507f7c5a91f54d2e0').then(function(respone){
        respone.json().then(function(data){
            console.log(data);
        })
    })
}



searchBtn.on('click',fetchWeather);

