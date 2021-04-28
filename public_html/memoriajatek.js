var index = 0;
var kep1 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};

var kep3 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep4 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep5 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep6 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep7 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep8 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep9 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};var kep10 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep11 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};
var kep12 = {
    eleresiUt: "kepek/....jpg",
    alt: "kép címe"
};


var kepek = [kep1,kep2,kep3,kep4,kep5,kep6,kep7,kep8,kep9,kep10,kep11,kep12]; //fontos hogy mögötte legyen
var elso = true;
var elozo;
var alap;
var pontok = 0;

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



function kattintasra() {
    $(this).attr("src", "kepek/...");
    $(this).attr("alt", "valami");
}