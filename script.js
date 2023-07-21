let card5 = document.getElementById("5-card");
let card6 = document.getElementById("6-card");

window.onresize = function(){
    if(document.documentElement.clientWidth <= 1180){
        //change image
        document.getElementById("main-image").setAttribute("src", "/assets/images/middle-size-main-image.png");
        //replace button
            let button1 = document.getElementsByClassName("buy-button")[0];
            document.getElementsByClassName("buy-button")[0].remove();
            document.getElementsByClassName("review")[0].after(button1);
        //change film name
        document.getElementsByClassName("film-name")[0].innerText = "Операция «Фортуна»: Искусство побеждать";
        //delete 2 last cards;
        if(document.getElementById("5-card")!==false){
            document.getElementById("5-card").remove();
            document.getElementById("6-card").remove();
        }
        //change card pictures
        document.getElementById("1-card").firstElementChild.setAttribute("src", "/assets/images/1-card-tablet.png");
        document.getElementById("2-card").firstElementChild.setAttribute("src", "/assets/images/2-card-tablet.png");
        document.getElementById("3-card").firstElementChild.setAttribute("src", "/assets/images/3-card-tablet.png");
        document.getElementById("4-card").firstElementChild.setAttribute("src", "/assets/images/4-card-tablet.png");
        //change cards names
        document.getElementsByClassName("film-info__name")[0].innerText = "Аватар: Путь воды";
        document.getElementsByClassName("film-info__name")[1].innerText = "Мой домашний крокодил";
        document.getElementsByClassName("film-info__name")[2].innerText = "Амстердам";
        document.getElementsByClassName("film-info__name")[3].innerText = "Знакомство родителей";



    }
    else {
        //return image
        document.getElementById("main-image").setAttribute("src", "/assets/images/main-image.png" );
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
        document.getElementById("1-card").firstElementChild.setAttribute("src", "/assets/images/1-card.png");
        document.getElementById("2-card").firstElementChild.setAttribute("src", "/assets/images/2-card.png");
        document.getElementById("3-card").firstElementChild.setAttribute("src", "/assets/images/3-card.png");
        document.getElementById("4-card").firstElementChild.setAttribute("src", "/assets/images/4-card.png");
        //return cards names
        //change cards names
        document.getElementsByClassName("film-info__name")[0].innerText = "Меган";
        document.getElementsByClassName("film-info__name")[1].innerText = "Быстрее пули";
        document.getElementsByClassName("film-info__name")[2].innerText = "Земун";
        document.getElementsByClassName("film-info__name")[3].innerText = "Элвис";
    }
}


