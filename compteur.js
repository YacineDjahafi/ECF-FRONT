// Compteur et bouton
let count = 0;
function addOne(id) {
    let counter = document.querySelector("#compteur" + id);
    counter.innerText++;
    update();
}

// METTRE CONDITION < 0

function minusOne(id) {
    let counter = document.querySelector("#compteur" + id);
    if (counter.innerText > 0) {
        counter.innerText--;
    }
    else {
        counter.innerText = 0;
    }
    update();
}

// PRIX ET QUANTITE
let numbers = document.querySelectorAll(".totCompteur")
function update() {
    let quantite = [];
    let i = 0;

    // ACTUALISER POUR LES NOMBRES < 0 avec if etc .

    numbers.forEach(number => {
        quantite.push([number.innerText, i])
        i++
    });


    let j = 0;
    let prixTotal = 0;
    let quantiteTotal = 0;
    quantite.forEach(number => {
        ticketList.forEach(ticket => {
            if (ticket.id === number[1]) {
                prixTotal += ticket.prix / 100 * parseInt(number[0], 10);
                j++
            }
        });
        quantiteTotal += parseInt(number[0], 10);
    });

    // Créez un objet pour stocker la quantité achetée pour chaque ticket
    let quantitesParTicket = {};
    quantite.forEach(number => {
        ticketList.forEach(ticket => {
            // On compare les deux id
            if (ticket.id === number[1]) {
                if (quantitesParTicket[ticket.id]) {
                    quantitesParTicket[ticket.id] = parseInt(number[0], 10)
                }

            }
        });
    });

    let panier = document.querySelector(".panier")
    if (prixTotal > 0) {
        panier.style.display = "block"
    }
    else {
        panier.style.display = "none"
    }

    let montant = document.querySelector(".montant")
    montant.innerText = prixTotal + " €"
    let montantP = document.querySelector(".montantPaiement")
    montantP.innerText = prixTotal + " €"
    let montantCB = document.querySelector(".montantCB")
    montantCB.innerText = prixTotal + " €"

    let panierQuantite = document.querySelector(".quantite")
    panierQuantite.innerText = "(" + quantiteTotal + ")"
}



