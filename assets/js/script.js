var inputValue = $('.search');
var searchBtn = $('.searchBtn');
var storedSearches = $('#storedSearches');
var main = $('main');

var searches = [];

//renders the searches
function renderSearches() {

    storedSearches.html("");
    for (var i = 0; i < searches.length; i++) {
        var search = searches[i];

        var button = $('<button>');
        button.text(search);
        button.attr('data-index', i);
        button.attr('class', 'list-group-item list-group-item-action');

        storedSearches.append(button);

        button.on('click', function() {
            inputValue.val(searches);
            var citySearch = $(this).text()
            inputValue.val(citySearch);
            fetchWeather();
        })
    }
}

//adds text to array, calls fetchWeather, calls storing function and render function
searchBtn.on('click', function(event) {
    event.preventDefault();

    var searchText = inputValue.val();
    if (searchText === "") {
        return;
    }
    searches.push(searchText);

    fetchWeather();
    renderSearches();
  
})

//uses the input value, gets data from weather API on search button click.
function fetchWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+ inputValue.val() + '&units=imperial&id=524901&appid=0fe3cfd026afb76b1605f15581136ad8')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            
            var nameValue = data.name;
            $('.name').text(nameValue);
            var latitude = data.coord.lat;
            var longitude = data.coord.lon;


            function uviFetch() {
                fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + latitude +'&lon=' + longitude + '&units=imperial&id=524901&appid=0fe3cfd026afb76b1605f15581136ad8')
                    .then(function(response) {
                        return response.json();
                    })
                    .then(function(data) )}
