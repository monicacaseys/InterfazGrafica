$(document).ready(function() {
    $("#elemento1").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="img/mas.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });

    $("#elemento2").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="img/menos.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });
    $("#elemento3").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="img/mas1.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });

    $("#elemento4").hover(function(e) {
        var tooltip = $(".tooltip");
        tooltip.html('<img style="width:300px; height: 160px;" src="img/menos1.png">');
        tooltip.css({
            top: e.pageY + 10,
            left: e.pageX + 10
        }).show();
    }, function() {
        $(".tooltip").hide();
    });
});

var cancion = document.getElementById('cancion');
var isPlay = false;

function togglePlay() {
    if (isPlay) {
        cancion.pause();
    } else {
        cancion.play();
    }
    isPlay = !isPlay;
}

function velocidad() {
    var velocidad = document.getElementById('velocidad').value;
    cancion.playbackRate = velocidad;
}