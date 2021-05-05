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
var kep13 = {
    eleresiUt: "kepek/hatoldal.png",
    alt: "hatoldal"
};



var kepek= [kep1, kep2, kep3, kep4, kep5, kep6, kep7, kep8, kep9, kep10, kep11, kep12]; //fontos hogy mögötte legyen
var tomb = [];
var elso = true;
var elozo;
var alap;
var pontok = 0;
var lepesSzamlalo = 0;

$(function () {
    modositasok();
    kezd();
    $("button").click(kezd);
});
function modositasok() {
    for (var i = 0; i < kepek.length; i++) {

        var elem = '<img id="' + i + '">';
        $("section").append(elem);
    }
    var kepElemTomb = $("section img");
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).attr("src", kepek[i].eleresiUt);
        kepElemTomb.eq(i).attr("alt", kepek[i].alt);
    }
}

function kattintasra() {
    kepek;
}

function kezd() {
    for (var i = 0; i < kepek.length; i++) {
        $("section img").eq(i).attr("src", kep13.eleresiUt);
    }
    $("section img").click(ellenoriz);
    kever();
}
function kever() {
    elso = true;
    pontok = 0;
    lepesSzamlalo = 0;
    kepek.sort(function () {
        return 0.5 - Math.random();
    });

}

function ellenoriz() {
//    console.log($(this).attr("id"));//ki iratom a consolra az id-t amire kattintok

    fordit($(this).attr("id"));
//    console.log("asd");
//    console.log(  $( $("section img").eq(elozo)).attr("src"));
//    console.log( ( $("section img").eq(alap)).attr("src"));
    lepesSzamlalo++;
    /*Ha elso igaz akkor előszőr megnézi hogy a két kép egyezik e és ha igen akkor a pontokat növeli
     különben ha nem egyezik be állítunk egy időzítőt hogy foduljon vissza és ebben hívjuk (a setTimeoutban) a visszafordít fügvényt és  paramétereket átadjuk(eloz,alap)*/
    if (elso) {
        if ($("section img").eq(elozo).attr("src") === $("section img").eq(alap).attr("src")) {
            pontok++;
        } else {
            visszafordit(elozo, alap);
//            setTimeout(visszafordit, 500, elozo, alap);//elozo,alap-->át adjuk paraméterkélnt a fügvénynek

        }
    }
}


function fordit(id) {
    $("section img").eq(id).attr("src", kepek[id].eleresiUt);
//    elso = !elso;//ha az elso true volt akkor az első legyen false
    $("section img").eq(id).unbind("click");//leiratkozik a kattintós eseményt az adott id elemekről
    if (elso) {
        elozo = id;
        elso = false;
    } else {
        elso = true;
        alap = id;
    }

}

function visszafordit(id1, id2) {
    setTimeout(
            function idozetes(id1,id2) {
                $("section img").eq(id1).attr("src", kep13.eleresiUt);
                $("section img").eq(id2).attr("src", kep13.eleresiUt);
                $("section img").eq(id1).click(ellenoriz);//vissza állítja a kattintás érzékelőjét
                $("section img").eq(id2).click(ellenoriz);
            },500,id1,id2);

}
