$(document).ready(function() {
    $("#elemento1").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="mas.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });

    $("#elemento2").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="menos.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });
    $("#elemento3").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="mas1.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });

    $("#elemento4").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="menos1.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });
});