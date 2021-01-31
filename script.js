function start(){

    // $("body").css("background-color", "lightblue");
    $("#menu a:first").click();
}

$(window).on("load", start);
//  Tells browser to watch for this function when the page loads.


function loadpage(e){

    e.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");
    
    var href = $(this).attr("href");
    $("#content").load(href);
 
}

$(document).ready(function(){

    $("body").css('display', 'none');
    $("body").fadeIn(500);
    
    });



$(document).on("click", "#menu a", loadpage);

// e = event. Prevent defaults functionality (going to whatever link it was clicked on) this - whatever gets clicked on 

// var href works off the attribute "href" of each individual page to load it.

