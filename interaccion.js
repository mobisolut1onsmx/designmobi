$(document).ready(function(){
    $("ul.tabs li a:first").addClass("activo");
    $(".tercero article").hide();
    $(".tercero article:first").show();

    $("ul.tabs li a").click(function(){
        $("ul.tabs li a").removeClass("activo");
        $(this).addClass("activo");
        $(".tercero article").hide();

        var activeTab =$(this).attr("href");
        $(activeTab).show();
        return false; 

    });
});