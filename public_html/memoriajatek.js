
var index = 0;

var kep1 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep2 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep3 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep4 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep5 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep6 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep7 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep8 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep9 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep10 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep11 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};
var kep12 = {
    eleresiUt: "kepek/yoda.jpg",
    alt: "baby yoda"
};


var kepek = [kep1, kep2, kep3, kep4, kep5, kep6, kep7, kep8, kep9, kep10, kep11, kep12]; //fontos hogy mögötte legyen
var elso = true;
var elozo;
var alap;
var pontok = 0;

$(function () {
//    $("article").html("Helo");
//    $("article").append("<img>");
////    $("article img").attr("src", "kepek/...");
//    $("article img").eq(0).attr("src", kepek[0].eleresiUt);
////    $("article img").attr("alt", "valami");
//    $("article img").eq(0).attr("alt", kepek[0].alt);
//    $("article").append("<img>");
//    $("article img").eq(1).attr("src", kepek[1].eleresiUt);
//    $("article img").eq(1).attr("alt", kepek[1].alt);
//    $("article img").click(kattintasra);

<<<<<<< HEAD
    modositasok();
=======
$("button").click(kezd);
>>>>>>> 65162467587aee5dd00a8722c6faed9fb2f80d13
});
function modositasok() {
    for (var i = 0; i < kepek.length; i++) {
        $("#jatekter img").append(i);
    }

    var kepElemTomb = $("section div img");
    var leirasElemTomb = $("section div");

    for (var i = 0; i < kepElemTomb.length; i++) {
//        console.log(kepTomb[i].eleresiut);
        kepElemTomb.eq(i).attr("src", kepek[i].eleresiUt);
        leirasElemTomb.eq(i).html(kepek[index].alt);
    }

//kattintás eseménykezelő a kisképre
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb[i].click(kepCsere);
    }
}

function kattintasra() {
    $(this).attr("src", "kepek/...");
    $(this).attr("alt", "valami");
}
function kezd(){
    
}