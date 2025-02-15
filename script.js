//prova funzione filtri
/* let activeFilters = 0;
let inactiveFilters = 0;
let allFilters = activeFilters + inactiveFilters;
let sta = localStorage.getItem('st') || 'all';
document.getElementById('allFilters').innerHTML = `All(${allFilters})`;
document.getElementById('activeFilters').innerHTML = `Active(${activeFilters})`;
document.getElementById('inactiveFilters').innerHTML = `Inactive(${inactiveFilters})`;
document.getElementById('st').innerHTML = `status: ${sta}`;
function changeStatus(change){
    if(sta!==change){
        localStorage.setItem('st',change);
    }
    return sta;
} */

let connector = document.querySelectorAll('.connector');
let allC = document.getElementById('allFilters');
let inaC = document.getElementById('inactiveFilters');
let actC = document.getElementById('activeFilters');
let myConnector = document.getElementById('noConnection');
let act = 0;
let ina = 0; 
let conn = document.getElementById('connectionYet');

// PER FARLO PASSARE
for (let c of connector) {
    c.addEventListener('click', function() {
        act = 0;
        ina = 0;

        // Se l'elemento è attivo, rimuovi il clone
        if (c.classList.contains('active')) {
            c.classList.remove('active');
            c.classList.add('inactive');

            // Trova e rimuovi il clone esistente
            let existingClone = document.querySelector('.connector-ac');
            if (existingClone) existingClone.remove();

        } else {
            c.classList.remove('inactive');
            c.classList.add('active');

            // Clona l'elemento originale
            var originalElement = document.querySelector('.single-connector');
            var clonedElement = originalElement.cloneNode(true);

            // Assegna la classe 'connector-ac' al clone
            clonedElement.classList.add('connector-ac');

            // Aggiungi il clone al DOM
            myConnector.appendChild(clonedElement);
        }

        // Aggiorna contatori di attivi e inattivi
        for (let c of connector) {
            if (c.classList.contains('active')) {
                act++;
            } else if (c.classList.contains('inactive')) {
                ina++;
            }
        }

        // Mostra o nascondi la connessione
        if (act == 0) {
            conn.style.display = "flex";
        } else {
            conn.style.display = "none";
        }

        // Aggiorna il contatore degli attivi e inattivi
        actC.innerHTML = "Active(" + act + ")";
        inaC.innerHTML = "Inactive(" + ina + ")";
    });
}


for (let c of connector) {
    if (c.classList.contains('active')) {
        let acCon = document.createElement('div');
        acCon.classList.add('connector-ac');
        acCon.classList.add("active");
        myConnector.appendChild(acCon);
    }
}

allC.innerHTML = "All(" + connector.length + ")";

for (let c of connector) {
    if (c.classList.contains('active')) {
        act++;
    } else if (c.classList.contains('inactive')) {
        ina++;
    }
}

actC.innerHTML = "Active(" + act + ")";
inaC.innerHTML = "Inactive(" + ina + ")";

actC.addEventListener('click', function()  {
    for (let c of connector) {
        if (c.classList.contains('active')) {
            c.style.display = "block";
        } else {
            c.style.display = "none";
        }
    }
})

inaC.addEventListener('click', function()  {
    for (let c of connector) {
        if (c.classList.contains('active')) {
            c.style.display = "none";
        } else {
            c.style.display = "block";
        }
    }
})

allC.addEventListener('click', function()  {
    for (let c of connector) {
        c.style.display = "block";
    }
})







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