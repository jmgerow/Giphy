$( document ).ready(function() {
// array to hold search buttons for user
var searchButtons = ["husky","westworld","monkey","the office","dogs","subaru","bird","GOT","movies"];

// function to create user buttons
function gifButtons() {

    $("#gifSelector").empty();

    for (var i = 0; i < searchButtons.length; i++) {
        var searchBtn = $("<button>");
        searchBtn.attr("data-search", searchButtons[i]);
        searchBtn.addClass("gif-button");
        searchBtn.text(searchButtons[i]);
          
        $("#gifSelector").append(searchBtn); 
    }
}
// function to add new user button
function addGifButton () {
    $("#addSearch").on("click", function() {
        var userInput = $("#search-input").val().trim();
       
        searchButtons.push(userInput);

        gifButtons();

    });
}
// function to generate gifs when button is clicked
function display() {
    var search = $(this).attr("data-search"); 
    
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search  + "&api_key=9TDPBQSS97BXCBXaZRIJFKSq1bnBWFpk&limit=10"; 

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        $("#displayGiphy").empty();

        var results = response.data;

        for (var i = 0; i < results.length; i++){
          
            var searchDiv = $("<div>");
            searchDiv.addClass("searchDiv");
            var p = $("<p>").text("Rating: " + results[i].rating);
            


            var image = $("<img>");
            
            image.attr("src", results[i].images.fixed_height_still.url);
            image.attr("data-still", results[i].images.fixed_height_still.url);
            image.attr("data-animate", results[i].images.fixed_height.url);
            image.attr("data-state", "still");
            image.addClass("gif");
            
            
            searchDiv.addClass("gif");
            
            searchDiv.append(image);
            searchDiv.append(p);
            
            $("#displayGiphy").prepend(searchDiv);
 


        }


    });    
}

gifButtons();

addGifButton();

// click event for searchButtons
$(document).on("click", ".gif-button", display);

// toggle to switch between still and animate
$(document).on("click", ".gif", function(){
    var state = $(this).attr('data-state');
    if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    }else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    }
});
});

