$(function () {
    $("article").html("Helo");
    $("article").append("<img>");
//    $("article img").attr("src", "kepek/...");
    $("article img").eq(0).attr("src", kepek[0].eleresiUt);
//    $("article img").attr("alt", "valami");
    $("article img").eq(0).attr("alt", kepek[0].alt);
    $("article").append("<img>");
    $("article img").eq(1).attr("src", kepek[1].eleresiUt);
    $("article img").eq(1).attr("alt", kepek[1].alt);
    $("article img").click(kattintasra);


});

for (var i = 0; i < kepek.length; i++) {
    var elem = '<div>' + i + '</div>';
    $("article").append(elem);
}

var kep1 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};

var kep2 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};

var kepek = [kep1, kep2]; //fontos hogy mögötte legyen

function kattintasra() {
    $(this).attr("src", "kepek/...");
    $(this).attr("alt", "valami");
}