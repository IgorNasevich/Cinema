let card5 = document.getElementById("5-card");
let card6 = document.getElementById("6-card");

let horizDev1 = document.getElementById("hd1");
let horizDev2 = document.getElementById("hd2");


const PCScreen = 0;
const TabletScreen = 1;
const MobileScreen = 2;
let currentScreen = -1;

window.onresize = updateLayout;
updateLayout();



function updateLayout(){
    let newScreen;
    if(document.documentElement.clientWidth <= 1180 && document.documentElement.clientWidth > 835){
       newScreen = TabletScreen;
    }
    else if (document.documentElement.clientWidth <= 834){
        newScreen = MobileScreen;
    }
    else if(document.documentElement.clientWidth > 1180){
        newScreen = PCScreen;
    }

    if(currentScreen !== newScreen){
        removeHorDevs();
        currentScreen = newScreen;
        if(currentScreen === PCScreen){
            setPCLayout();
        }
        if(currentScreen === TabletScreen){
            setTabletLayout();
        }
        if(currentScreen === MobileScreen){
            setMobileLayout();
        }
    }
}

function setTabletLayout () {

    //change image
    document.getElementById("main-image").setAttribute("src", "assets/images/middle-size-main-image.png");
    //replace button
    let button1 = document.querySelectorAll(".buy-button")[0];
    document.querySelectorAll(".buy-button")[0].remove();
    document.querySelectorAll(".review")[0].after(button1);
    //change film name
    document.querySelectorAll(".film-name")[0].innerText = "Операция «Фортуна»: Искусство побеждать";
    //delete 2 last cards;
    if(document.getElementById("5-card")===true){
        document.getElementById("6-card").remove();
        document.getElementById("5-card").remove();
    }

    //change card pictures
    document.getElementById("1-card").firstElementChild.setAttribute("src", "assets/images/1-card-tablet.png");
    document.getElementById("2-card").firstElementChild.setAttribute("src", "assets/images/2-card-tablet.png");
    document.getElementById("3-card").firstElementChild.setAttribute("src", "assets/images/3-card-tablet.png");
    document.getElementById("4-card").firstElementChild.setAttribute("src", "assets/images/4-card-tablet.png");
    //change cards names
    document.querySelectorAll(".film-info__name")[0].innerText = "Аватар: Путь воды";
    document.querySelectorAll(".film-info__name")[1].innerText = "Мой домашний крокодил";
    document.querySelectorAll(".film-info__name")[2].innerText = "Амстердам";
    document.querySelectorAll(".film-info__name")[3].innerText = "Знакомство родителей";

    //return HorDevs
    horizDev1.setAttribute("id","hd1");
    horizDev2.setAttribute("id","hd2");
    document.getElementById("film-info-items").after(horizDev1);
    document.getElementById("actors").after(horizDev2);



}

    function setPCLayout () {
    //return HorDevs
        document.getElementById("film-info-items").after(horizDev1);
        document.getElementById("actors").after(horizDev2);
    //return image
    document.getElementById("main-image").setAttribute("src", "assets/images/main-image.png" );
    //return button
    let button1 = document.querySelectorAll(".buy-button")[0];
    document.querySelectorAll(".buy-button")[0].remove();
    document.querySelectorAll(".current-film-image")[0].after(button1);
    //return film name
    document.querySelectorAll(".film-name")[0].innerText = "Элвис";
    //return 2 last cards
    document.getElementById("4-card").after(card5);
    document.getElementById("5-card").after(card6);
    //return card pictures
    document.getElementById("1-card").firstElementChild.setAttribute("src", "assets/images/1-card.png");
    document.getElementById("2-card").firstElementChild.setAttribute("src", "assets/images/2-card.png");
    document.getElementById("3-card").firstElementChild.setAttribute("src", "assets/images/3-card.png");
    document.getElementById("4-card").firstElementChild.setAttribute("src", "assets/images/4-card.png");
    //return cards names
    document.querySelectorAll(".film-info__name")[0].innerText = "Меган";
    document.querySelectorAll(".film-info__name")[1].innerText = "Быстрее пули";
    document.querySelectorAll(".film-info__name")[2].innerText = "Земун";
    document.querySelectorAll(".film-info__name")[3].innerText = "Элвис";
}


function setMobileLayout () {

    //change main image
    document.getElementById("main-image").setAttribute("src", "assets/images/main-image-small-size.png" );
    //replace button
    let button1 = document.querySelectorAll(".buy-button")[0];
    document.querySelectorAll(".buy-button")[0].remove();
    document.querySelectorAll(".review")[0].after(button1);
    //change film name
    document.querySelectorAll(".film-name")[0].innerText = "Операция «Фортуна»: Искусство побеждать";
    //delete 2 last cards;
    //change card pictures
    document.getElementById("1-card").firstElementChild.setAttribute("src", "assets/images/1-card-tablet.png");
    document.getElementById("2-card").firstElementChild.setAttribute("src", "assets/images/2-card-tablet.png");
    document.getElementById("3-card").firstElementChild.setAttribute("src", "assets/images/3-card-tablet.png");
    document.getElementById("4-card").firstElementChild.setAttribute("src", "assets/images/4-card-tablet.png");
    //change cards names
    document.querySelectorAll(".film-info__name")[0].innerText = "Аватар: Путь воды";
    document.querySelectorAll(".film-info__name")[1].innerText = "Мой домашний крокодил";
    document.querySelectorAll(".film-info__name")[2].innerText = "Амстердам";
    document.querySelectorAll(".film-info__name")[3].innerText = "Знакомство родителей";
    //add 6 horDevs

    horizDev1.removeAttribute('id');
    horizDev2.removeAttribute('id');
    document.getElementById("1-card").after(horizDev1);
    document.getElementById("2-card").after(horizDev2);
    document.getElementById("3-card").after(horizDev1.cloneNode(true));
    document.getElementById("4-card").after(horizDev1.cloneNode(true));
    document.getElementById("5-card").after(horizDev1.cloneNode(true));
    document.getElementById("6-card").after(horizDev1.cloneNode(true));
}



function removeHorDevs(){
    array = document.querySelectorAll(".horizontal-divider");
    for (let index = 0; index < array.length; index++) {
        array[index].remove();
    }

}