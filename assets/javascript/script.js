


var search = "";

$(document).ready(function() {


    var searchButtons = ["husky","westworld","monkey","the office"];
        for (var i = 0; i < searchButtons.length; i++){
        var searchBtn = $("<button>");
        searchBtn.addClass("search-button");
        searchBtn.attr("data-search", searchButtons[i]);
        searchBtn.text(searchButtons[i]);    
        $("#searchButtons").append(searchBtn);
        }

//enter submit field here to append to searchButtons array
    $("submit").on("click", function() {
        var userInput = $("#addSearch").val().trim();
        console.log(userInput);
        searchButtons.append(userInput);
    });   


// adding click event for buttons    
    $(".search-button").on("click", function() {
        search = $(this).attr("data-search");
        console.log(search);
   
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search + "&api_key=9TDPBQSS97BXCBXaZRIJFKSq1bnBWFpk&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    
    
        var results = response.data;
    
        for (var i = 0; i < results.length; i++) {
    
            var searchDiv = $("<div>");
    
            var p = $("<p>").text("Rating: " + results[i].rating);
    
            var searchImage = $("<img>");
            
            searchImage.attr("src", results[i].images.fixed_height.url);
    
            searchDiv.append(p);
            searchDiv.append(searchImage);
    
            $("#displayGiphy").prepend(searchDiv);
          }
    
    });


});





    


});


