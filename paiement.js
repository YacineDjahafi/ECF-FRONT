// PAGE 2
function paiement() {
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Paiement";
    document.querySelector(".showPaiement").style.display = "block";
    document.querySelector(".buttonPre").style.display = "block";
    document.querySelector(".precedent").setAttribute("onclick", "acheter()");
    document.querySelector(".showCB").style.display = "none";
    document.querySelector(".mesTitres").style.display = "none";


    let quantite = [];
    let i = 0;
    numbers.forEach(number => {
        quantite.push([number.innerText, i])
        i++
        // console.log(quantite);
    });
    // Créez un objet pour stocker la quantité achetée pour chaque ticket
    let quantitesParTicket = [];
    quantite.forEach(number => {
        ticketList.forEach(ticket => {
            // On compare les deux id
            if (ticket.id === number[1]) {
                const qttAchetee = parseInt(number[0], 10);
                // Vérifiez si la quantité est supérieure à zéro avant de l'ajouter à l'objet
                if (qttAchetee > 0) {
                    quantitesParTicket[ticket.id] = qttAchetee;
                }
                // console.log(qttAchetee);
            }
        });
    });

    // TEST POUR RECUPERER LE NOM, PRIX, ET QUANTITE EN FOREACH
    let totContainer = document.querySelector(".facturation");
    ticketList.forEach(ticket => {
        if (quantitesParTicket.hasOwnProperty(ticket.id) && quantitesParTicket[ticket.id] > 0) {
            let facturation = document.createElement("div")
            facturation.classList.add('flex', 'payDiv')
            let hr = document.createElement("hr")
            facturation.innerHTML = `
        <p class="nomTicket">`+ ticket.nom + `</p> <span class="prixTicket">` + ticket.prix / 100 + ` € x` + quantitesParTicket[ticket.id] + `</span>`
            totContainer.appendChild(facturation);
            totContainer.appendChild(hr);
        }
    })


}

function check() {
    if (document.querySelector("#conditions").checked == true) {
        document.querySelector(".linkConditions").removeAttribute("disabled")
    }
    else if (document.querySelector("#conditions").checked == false) {
        document.querySelector(".linkConditions").setAttribute("disabled", true)
    }
}

// Page 3
function paiementCB() {
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".showPaiement").style.display = "none";
    // document.querySelector("body").style.backgroundColor = "#d4d4d477";
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Paiement";
    document.querySelector(".showCB").style.display = "block";
    document.querySelector(".precedent").setAttribute("onclick", "paiement()");
    document.querySelector(".mesTitres").style.display = "none";
}

// Lorsque l'on valide le paiement page 3
// On arrive sur la page des tickets
function addTickets(){
    
    document.querySelector(".showPaiement").style.display = "none";
    document.querySelector(".footer").style.display = "flex";
    document.querySelector(".showCB").style.display = "none";
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Mes titres";
    document.querySelector(".mesTitres").style.display = "none";
}

// Page 1
function acheter(){
    document.querySelector(".showAcheter").style.display = "block";
    document.querySelector(".footer").style.display = "flex";
    document.querySelector(".onglet").innerHTML = "Acheter";
    document.querySelector(".showPaiement").style.display = "none";
    document.querySelector(".showCB").style.display = "none";
    document.querySelector(".buttonPre").style.display = "none";
    
    document.querySelector(".mesTitres").style.display = "none";

}

function titres(){

}