//$("h1").css("color", "red");  //$ sign work also as document.querySelectorAll

//$("h1").addClass("big-title margin-50");

//$("img").attr("src", "the amzing drum"); // set the attribute src of img the picture "the amazing drum"

$("h1").click(function() {
    $("h1").css("color", "purple");
});

// for (var i = 0; i<5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         document.querySelector("h1").style.color="purple";
//     });
// }


$("button").click(function() {
    $("h1").css("color", "purple");
})

$("input").keypress(function(event) {
    $("h1").text(event.key);
})

$("h1").on("mouseover", function() {
    $("h1").css("color", "purple");
})

// $("button").click(function() {
//     $("h1").slideToggle();               //can use: hide, show, toggle, fadeout, slideUp, slideDown, slideToggle ...
// })

$("button").click(function() {
    $("h1").animate({opacity: 0.5});   //accepets things that has numeric value only not color or...
});

$("button").click(function() {
    $("h1").slideUp().slideDown().animate({opacity: 0.5});   //chaining
}