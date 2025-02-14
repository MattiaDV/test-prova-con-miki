//prova funzione filtri
let activeFilters = 0;
let inactiveFilters = 0;
let allFilters = activeFilters + inactiveFilters;
let sta = localStorage.getItem("st") || "all";
document.getElementById('allFilters').innerHTML = `All(${allFilters})`;
document.getElementById('activeFilters').innerHTML = `Active(${activeFilters})`;
document.getElementById('inactiveFilters').innerHTML = `Inactive(${inactiveFilters})`;
document.getElementById('st').innerHTML = `status: ${sta}`;
function changeStatus(change){
    if(sta!==change){
        localStorage.setItem('st',change);
    }
    return sta;
}







let createPart = document.getElementById('jsCreatePart');

let videoPart = document.createElement('iframe');
videoPart.id = "videoLoad";
videoPart.classList.add("videoLoaded");
videoPart.width = 400;
videoPart.height = 320;
videoPart.setAttribute("src", "https://www.youtube.com/embed/NLi2v-Gq-5A");
videoPart.setAttribute("frameborder", "0");
videoPart.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");
videoPart.setAttribute("allowfullscreen", "");

createPart.appendChild(videoPart);



let microCard = document.getElementById('microCardLike');

let likeC = document.createElement('div');
likeC.style.width = "45px";
likeC.style.height = "45px";
likeC.id = "likeButton";
likeC.style.borderRadius = "50%";
likeC.style.background = "#CCC";
likeC.onclick = function() {
    addRemoveLike();
}

let like = -1;

function addRemoveLike() {
    like = like * -1;

    if (like == 1) {
        document.getElementById('likeButton').style.background = "red";
    } else {
        document.getElementById('likeButton').style.background = "#CCC";
    }
}

microCard.appendChild(likeC);