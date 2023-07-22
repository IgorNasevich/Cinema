let card5 = document.getElementById("5-card");
let card6 = document.getElementById("6-card");

let horizDev1 = document.getElementById("hd1");
let horizDev2 = document.getElementById("hd2");

let newElem = document.createElement("div");


let subBut = document.querySelector(".buy-button_subscribe");
let footerText = document.querySelector(".logo-and-button__text");


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

    //footer
    subBut.remove();
    footerText.remove();
    document.querySelector(".footer-logo").after(footerText);
    document.querySelector(".logo-and-button__text").after(subBut);
    newElem.remove();
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

    //footer
    subBut.remove();
    footerText.remove();
    document.querySelector(".footer-logo").after(footerText);
    document.querySelector(".logo-and-button__text").after(subBut);
    newElem.remove()

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


    //replace footer button and text

    subBut.remove();
    footerText.remove();
    document.querySelector(".payment-methods").before(subBut);
    document.querySelector(".topics").after(footerText);

    //add 8 horDevs
    horizDev1.removeAttribute('id');
    horizDev2.removeAttribute('id');
    document.getElementById("1-card").after(horizDev1);
    document.getElementById("2-card").after(horizDev2);
    document.getElementById("3-card").after(horizDev1.cloneNode(true));
    document.getElementById("4-card").after(horizDev1.cloneNode(true));
    document.getElementById("5-card").after(horizDev1.cloneNode(true));
    document.getElementById("6-card").after(horizDev1.cloneNode(true));
    document.querySelector(".topics").after(horizDev1.cloneNode(true));
    document.querySelector(".payment-methods").before(horizDev1.cloneNode(true));

    //footer subscription and cross-button
    newElem.setAttribute('class', 'subs');
    newElem.innerHTML = '<p class="subs__subs-text">Подписка</p><button class="subs__subs-button"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none"><rect width="30" height="30" rx="15" fill="white" fill-opacity="0.15"/><path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M11.2428 10.7572C10.8523 11.1477 10.8523 11.7809 11.2428 12.1714L14.0712 14.9998L11.2426 17.8284C10.8521 18.2189 10.8521 18.8521 11.2426 19.2426C11.6332 19.6332 12.2663 19.6332 12.6568 19.2426L15.4854 16.414L18.3139 19.2425C18.7044 19.633 19.3376 19.633 19.7281 19.2425C20.1186 18.852 20.1186 18.2188 19.7281 17.8283L16.8996 14.9998L19.7279 12.1716C20.1184 11.781 20.1184 11.1479 19.7279 10.7573C19.3374 10.3668 18.7042 10.3668 18.3137 10.7573L15.4854 13.5856L12.657 10.7572C12.2665 10.3667 11.6333 10.3667 11.2428 10.7572Z" fill="white"/></svg></button>'
    document.querySelector(".logo-and-button__text").before(newElem);
}



function removeHorDevs(){
    array = document.querySelectorAll(".horizontal-divider");
    for (let index = 0; index < array.length; index++) {
        array[index].remove();
    }

}