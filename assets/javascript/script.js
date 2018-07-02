


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
            // searchImage.addClass("gif-button");
            stillImage.attr("src", results[i].images.fixed_height_still.url);
            animateImage.attr("src", results[i].images.fixed_height.url);
           
            
            searchDiv.addClass("gif");
            searchDiv.append(p);
            searchDiv.append(stillImage);
            
            $("#displayGiphy").prepend(searchDiv);
 
          }
          // all images are animating when clicked, versus only the image clicked
          var isAnimated = false;

          $(".gif").on("click", function() {
          if (isAnimated === false) {
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
        
            } else {

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
                    searchDiv.append(stillImage);
                    
                    $("#displayGiphy").prepend(searchDiv);
         
                  }

            }
        });



        //   $(".gif").on("click", function() {
        //     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
        //     var state = $(this).attr("data-state");
        //         console.log(this);
        //     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
        //     // Then, set the image's data-state to animate
        //     // Else set src to the data-still value
        //     if (state === "still") {
        //       $(this).attr("src", $(this).attr("data-animate"));
        //       $(this).attr("data-state", "animate");
        //       console.log(this);
        //     } else {
        //       $(this).attr("src", $(this).attr("data-still"));
        //       $(this).attr("data-state", "still");
        //       console.log(this);
        //     }
        //   });








        //   $(".gif").on("click", function() {
        //     for (var j = 0; j < results.length; j++) {

        //     var stillImage = results[j].images.fixed_height_still.url;
        //     var animateImage = results[j].images.fixed_height.url;
        //     searchImage.attr("src", animateImage);

        //     searchDiv.append(searchImage)
        //     console.log(stillImage);
        //     console.log(animateImage); 
            
        //     // searchDiv.append(animateImage);
        //     // console.log(searchDiv);
        //     $("#displayGiphy").append(animateImage);      
    
        //     }    
        // }); 


        


    });
    

});
    };

});


