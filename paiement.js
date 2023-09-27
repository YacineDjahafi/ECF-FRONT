function paiement(){
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".footer").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Paiement";
    document.querySelector(".showPaiement").style.display = "block";
}

function check() {
    if(document.querySelector("#conditions").checked == true){
        document.querySelector(".linkConditions").removeAttribute("disabled")
     }
   else if(document.querySelector("#conditions").checked == false){
        document.querySelector(".linkConditions").setAttribute("disabled", true)
    }
}

// TEST POUR RECUPERER LE NOM, PRIX, ET QUANTITE EN FOREACH
/* let container = document.querySelector(".facturation");
ticketList.forEach(ticket =>{
    let facturation = document.createElement("div")
    facturation.classList.add('flex', 'newdiv')
    let hr = document.createElement("hr")
    facturation.innerHTML = `
    <p>`+ticket.nom+`</p> <span>`+ticket.prix / 100`</span>   <span>+" x " `` " €"</span>

    `
    container.appendChild(facturation);
    container.appendChild(hr);
})
 */






function paiementCB(){
    document.querySelector(".showAcheter").style.display = "none";
    document.querySelector(".showPaiement").style.display = "none";
    document.querySelector(".onglet").innerHTML = "Paiement";
}