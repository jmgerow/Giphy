


var search = "";

$(document).ready(function() {

// generates gif buttons
    var searchButtons = ["husky","westworld","monkey","the office"];
        for (var i = 0; i < searchButtons.length; i++){
        var searchBtn = $("<button>");
        searchBtn.addClass("gif-button");
        searchBtn.attr("data-search", searchButtons[i]);
        searchBtn.text(searchButtons[i]);
          
        $("#gifSelector").append(searchBtn);
        buttonListener();
        };

//TO DO: enter submit field here to push to searchButtons array
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
        
   
    
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    search  + "&api_key=9TDPBQSS97BXCBXaZRIJFKSq1bnBWFpk&limit=10";
    
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
            searchImage.addClass("gif-button");
            searchImage.attr("src", results[i].images.fixed_height_still.url);
            searchDiv.addClass("gif");
            searchDiv.append(p);
            searchDiv.append(searchImage);
    
            $("#displayGiphy").prepend(searchDiv);

                

          }
          
          //animates when clicked
          $(".gif").on("click", function() {
            for (var i = 0; i < results.length; i++) {
    
             
                var searchDiv = $("<div>");
        
                var p = $("<p>").text("Rating: " + results[i].rating);
        
                var searchImage = $("<img>");
                
                searchImage.attr("src", results[i].images.fixed_height.url);
        
                searchDiv.append(p);
                searchDiv.append(searchImage);
        
                $("#displayGiphy").html(searchDiv);
    
                    
    
              }
            });

    });
    

});
    };

});


