function start(){

    // $("body").css("background-color", "lightblue");

}

$(window).on("load", start);
//  Tells browser to watch for this function when the page loads.



function loadpage(e){

    e.preventDefault();
    $("#menu a.active").removeClass("active");
    $(this).addClass("active");
    
    $("#content").load("about.html");
}

$(document).on("click", "#menu a", loadpage);

// e = event. Prevent defaults functionality (going to whatever link it was clicked on) this - whatever gets clicked on 



