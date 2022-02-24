$(".loader").delay(1000).fadeOut("slow");
$("#overlayer").delay(1000).fadeOut("slow");

$(function(){
    $('#modal_links').load("views/menu.html");
});