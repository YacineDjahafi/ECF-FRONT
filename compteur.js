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

    let quantite = [
    ];

    let i = 0;

    // ACTUALISER POUR LES NOMBRES < 0 avec if etc .

    numbers.forEach(number => {
        // FILTRER, récupérer entier positif
        quantite.push([number.innerText, i])
        i++
    });
    // console.log(quantite);


    // TOTAL (croisement des deux tableaux)
    let j = 0;
    let prixTotal = 0;
    let quantiteTotal = 0;

    quantite.forEach(number => {

        ticketList.forEach(ticket => {
            // On compare les deux id
            // number[1] car l'id est le deuxième champ
            if (ticket.id === number[1]) {
                prixTotal += ticket.prix / 100 * number[0];
                // ARRONDIR LE TOTAL A 1 virgule
                j++
            }
        });
    });
    console.log(prixTotal)

    let panier = document.querySelector(".panier")
    if (prixTotal > 0) {
        panier.style.display = "block"
    }
    else {
        panier.style.display = "none"
    }

    let montant = document.querySelector(".montant")
    montant.innerText = prixTotal + " €"

    let panierQuantite = document.querySelector("quantite")
    // panierQuantite.innerText = 
}



