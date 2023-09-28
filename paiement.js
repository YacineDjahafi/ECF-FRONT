// PAGE 2
function paiement() {
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Paiement";
    document.querySelector(".showPaiement").style.display = "block";


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


    /* // TEST POUR RECUPERER LE NOM, PRIX, ET QUANTITE EN FOREACH
    let totContainer = document.querySelector(".facturation");
    ticketList.forEach(ticket =>{
        let facturation = document.createElement("div")
        facturation.classList.add('flex', 'newdiv')
        let hr = document.createElement("hr")
        facturation.innerHTML = `
        <p>`+ticket.nom+`</p> <span>`+ticket.prix /100+`</span>   <span> x `+quantitesParTicket[ticket.id]+` €</span>
    
        `
        totContainer.appendChild(facturation);
        totContainer.appendChild(hr);
    }) */

}

function check() {
    if (document.querySelector("#conditions").checked == true) {
        document.querySelector(".linkConditions").removeAttribute("disabled")
    }
    else if (document.querySelector("#conditions").checked == false) {
        document.querySelector(".linkConditions").setAttribute("disabled", true)
    }
}

function paiementCB() {
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".showPaiement").style.display = "none";
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Paiement";
    document.querySelector(".showCB").style.display = "block";
}