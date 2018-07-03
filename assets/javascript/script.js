


var search = "";

$(document).ready(function() {

// generates gif buttons
    var searchButtons = ["husky","westworld","monkey","the office","dogs","subaru","bird","GOT","movies"];
        for (var i = 0; i < searchButtons.length; i++){
        var searchBtn = $("<button>");
        searchBtn.addClass("gif-button");
        searchBtn.attr("data-search", searchButtons[i]);
        searchBtn.text(searchButtons[i]);
          
        $("#gifSelector").append(searchBtn);
        buttonListener();
        };

//search field here to push to searchButtons array
    $("#addSearch").on("click", function() {
        var userInput = $("#search-input").val().trim();
       
        searchButtons.push(userInput);
      
        
        $("#search-input").val('');

        //creates new button and adds click event
        searchBtn = $("<button>");
        searchBtn.addClass("gif-button");
        searchBtn.attr("data-search", searchButtons[(searchButtons.length) -1]);
        searchBtn.text(searchButtons[(searchButtons.length) -1]);
        
        $("#gifSelector").append(searchBtn);
        
        buttonListener();
    });   


// adding click event for buttons
    function buttonListener() {    
    $(".gif-button").on("click", function() {
        search = $(this).attr("data-search");

        $("#displayGiphy").empty();
        
   
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search  + "&api_key=9TDPBQSS97BXCBXaZRIJFKSq1bnBWFpk&limit=10";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);
    
    
        var results = response.data;
        
        //loads static images
        //some buttons are adding multiple sets of images, from 1-4 times the amount

        for (var i = 0; i < results.length; i++) {
            // animatedGif = false;
             
            var searchDiv = $("<div>");
    
            var p = $("<p>").text("Rating: " + results[i].rating);
    
            var stillImage = $("<img>");
            var animateImage = $("<img>");
            // var imagePosition = [];
            
            // searchImage.addClass("gif-button");
            stillImage.attr("src", results[i].images.fixed_height_still.url);
            animateImage.attr("src", results[i].images.fixed_height.url);
            
            
            searchDiv.addClass("gif");
            searchDiv.append(p);
            searchDiv.append(stillImage);
            // imagePosition.push(stillImage);
            // console.log(imagePosition[2]);
            $("#displayGiphy").prepend(searchDiv);
 
          }
          // all images are animating when clicked, versus only the image clicked
        
  
          $(".gif").on("click", function() {
       
            $("#displayGiphy").empty();
             

        
          for (var i = 0; i < results.length; i++) {
            // animatedGif = false;
            
            var searchDiv = $("<div>");
    
            var p = $("<p>").text("Rating: " + results[i].rating);
    
            var stillImage = $("<img>");
            var animateImage = $("<img>");
            // searchImage.addClass("gif-button");
            stillImage.attr("src", results[i].images.fixed_height_still.url);
            animateImage.attr("src", results[i].images.fixed_height.url);
           
            
            searchDiv.addClass("gif");
            searchDiv.append(p);
            searchDiv.append(animateImage);
            
            $("#displayGiphy").prepend(searchDiv);
 
          
        
            

            }
        });


    });
    

});
    };

});


