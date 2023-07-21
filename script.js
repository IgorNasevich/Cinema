let card5 = document.getElementById("5-card");
let card6 = document.getElementById("6-card");

const PCScreen = 0;
const TabletScreen = 1;
const MobileScreen = 2;
let currentScreen = -1;

window.onresize = function(){
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
    let button1 = document.getElementsByClassName("buy-button")[0];
    document.getElementsByClassName("buy-button")[0].remove();
    document.getElementsByClassName("review")[0].after(button1);
    //change film name
    document.getElementsByClassName("film-name")[0].innerText = "Операция «Фортуна»: Искусство побеждать";
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
    document.getElementsByClassName("film-info__name")[0].innerText = "Аватар: Путь воды";
    document.getElementsByClassName("film-info__name")[1].innerText = "Мой домашний крокодил";
    document.getElementsByClassName("film-info__name")[2].innerText = "Амстердам";
    document.getElementsByClassName("film-info__name")[3].innerText = "Знакомство родителей";

    //return HorDevs
    if(document.getElementById("hd2") === false){

    }


}

    function setPCLayout () {
    //return image
    document.getElementById("main-image").setAttribute("src", "assets/images/main-image.png" );
    //return button
    let button1 = document.getElementsByClassName("buy-button")[0];
    document.getElementsByClassName("buy-button")[0].remove();
    document.getElementsByClassName("current-film-image")[0].after(button1);
    //return film name
    document.getElementsByClassName("film-name")[0].innerText = "Элвис";
    //return 2 last cards
    document.getElementById("4-card").after(card5);
    document.getElementById("5-card").after(card6);
    //return card pictures
    document.getElementById("1-card").firstElementChild.setAttribute("src", "assets/images/1-card.png");
    document.getElementById("2-card").firstElementChild.setAttribute("src", "assets/images/2-card.png");
    document.getElementById("3-card").firstElementChild.setAttribute("src", "assets/images/3-card.png");
    document.getElementById("4-card").firstElementChild.setAttribute("src", "assets/images/4-card.png");
    //return cards names
    document.getElementsByClassName("film-info__name")[0].innerText = "Меган";
    document.getElementsByClassName("film-info__name")[1].innerText = "Быстрее пули";
    document.getElementsByClassName("film-info__name")[2].innerText = "Земун";
    document.getElementsByClassName("film-info__name")[3].innerText = "Элвис";
}


function setMobileLayout () {

    let horizDev = document.getElementById("hd2");
    if(document.getElementById("hd2") !== false){
        document.getElementById("hd2").remove();
        document.getElementById("hd1").remove();
    }
    document.getElementById("main-image").setAttribute("src", "assets/images/main-image-small-size.png" );
    let button1 = document.getElementsByClassName("buy-button")[0];
    document.getElementsByClassName("buy-button")[0].remove();
    document.getElementsByClassName("review")[0].after(button1);
    //change film name
    document.getElementsByClassName("film-name")[0].innerText = "Операция «Фортуна»: Искусство побеждать";
    //delete 2 last cards;
    //change card pictures
    document.getElementById("1-card").firstElementChild.setAttribute("src", "assets/images/1-card-tablet.png");
    document.getElementById("2-card").firstElementChild.setAttribute("src", "assets/images/2-card-tablet.png");
    document.getElementById("3-card").firstElementChild.setAttribute("src", "assets/images/3-card-tablet.png");
    document.getElementById("4-card").firstElementChild.setAttribute("src", "assets/images/4-card-tablet.png");
    //change cards names
    document.getElementsByClassName("film-info__name")[0].innerText = "Аватар: Путь воды";
    document.getElementsByClassName("film-info__name")[1].innerText = "Мой домашний крокодил";
    document.getElementsByClassName("film-info__name")[2].innerText = "Амстердам";
    document.getElementsByClassName("film-info__name")[3].innerText = "Знакомство родителей";
}

// window.onresize = function(){
//     let newScreen;
//     if(document.documentElement.clientWidth <= 1180){
//        newScreen = TabletScreen;
//     }
//     else {
//         newScreen = PCScreen;
//     }

//     if(currentScreen !== newScreen){
//         currentScreen = newScreen;
//         if(currentScreen === PCScreen){
//             setPCLayout();
//         }
//         if(currentScreen === TabletScreen){
//             setTabletLayout();
//         }
//     }
// }