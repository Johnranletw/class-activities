// Add Event Listener Below

$("#toggle").on("click", function slideToggle(){
$("ul").slideToggle()
});

$("li").on("click", function hiddenthing(){
    $("li").css("display","none")
})