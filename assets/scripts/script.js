//navbar logic
let hideItems =  hideNav();

function hideNav(){ 
    $("#kennis").hide();
    $("#projecten").hide();
}

let navSelector = $(".navitem").on("click", function() {
    if($(this).index() === 1){
        $("#mijnverhaal").hide("slow");
        $("#kennis").hide("slow");
        $("#projecten").show("slow");
    } else if($(this).index() === 2){
        $("#mijnverhaal").hide("slow");
        $("#projecten").hide("slow");
        $("#kennis").show("slow");
    } else {
        $("#kennis").hide("slow");
        $("#projecten").hide("slow");
        $("#mijnverhaal").show("slow");
    };
});

var showtext = $(".info").on("click", function(){
    $(this).children()
});
    
//Opening & Closing Information Divs Logic    
const info = $(".project").find("span > .info");
let hideAllInfo = $(".info-item").css("display", "none");

//Icons Setup

let readInfo = info.on("click", function(){
    if($(this).parent().parent().find(".info-item").css("display") == "none"){
    $(this).parent().parent().find(".info-item").fadeIn();
    } else {
    $(this).parent().parent().find(".info-item").fadeOut();
    } 
});

