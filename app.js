//this is my app
function City (name,state,population,landArea,image){
  this.name = name;
  this.state = state;
  this.population = population;
  this.landArea = landArea;
  this.image = image;
  citiesArray.push(this);
}

var citiesArray = [];


var minneapolis = new City("Minneapolis","Minnesota","400,070", "58.40 sq. miles",
"http://www.thedmna.org/wp-content/uploads/2012/10/MinneapolisSkyline-1081x445.jpg");
var seattle = new City("Seattle","Washington","652,405", "83.78 sq. miles",
"https://depts.washington.edu/biowww/images/seattle_kerry_park.png");
var chicago = new City("Chicago","Illinois","2,719,000", "234.00 sq. miles",
"http://static.travel.usnews.com/images/destinations/2/sunny_day_at_cloud_gate_-_main_cropped_2014_445x280.jpg");
var toronto = new City("Toronto","Ontario","2,615,000", "243.30 sq. miles",
"http://media-cdn.tripadvisor.com/media/photo-s/06/d7/dc/f8/bigphotofortoronto.jpg");


$(document).ready(function(){

  for(var i = 0; i < citiesArray.length; i++){
    var workingCity = citiesArray[i];
    $('.container').append('<div class="city" id=' + workingCity.name +'></div>');
    var $el = $('.container').children().last();

    $el.append('<h2>' + workingCity.name + ', ' + workingCity.state +'</h2>');
    $el.append('<p>Population: ' + workingCity.population +'</p>');
    $el.append('<p>Area: ' + workingCity.landArea +'</p>');
    $el.append('<img src=' + workingCity.image +' width="400px" >');

  }





});
