let ticketList = [
    {
    id : 0,
    nom : "Voyage Aix en Bus",
    description : "Valable 60 minutes",
    // A diviser par 100
    prix : 120
    },
    {
    id : 1,
    nom : "10 Voyages Aix en Bus",
    description : "Valable 60 minutes <br> Multi-validable" ,
    // A diviser par 100
    prix : 900
    },
    {
    id : 2,
    nom : "Voyage Bus de l'Etang",
    description : "Valable 60 minutes",
    // A diviser par 100
    prix : 120
    },
    {
    id : 3,
    nom : "10 Voyages Bus de l'Etang",
    description : "Valable 60 minutes <br> Multi-validable",
    // A diviser par 100
    prix : 900
    },
    {
    id : 4,
    nom : "LeCar+ L50",
    description : "1 voyage valable sur toutes les lignes Cartreize sauf 40 et 91 <br> Correspondance 90 minutes",
    // A diviser par 100
    prix : 700
    },
    {
    id : 5,
    nom : "10 Voyages LeCAR+ L50",
    description : "10 voyages valables sur toutes les lignes Cartreize sauf 40 et 91 <br> Correspondance 90 minutes",
    // A diviser par 100
    prix : 5600
    },

];

let container = document.querySelector(".container");

ticketList.forEach(ticket => {
    let newTicket = document.createElement("div")
    newTicket.classList.add('flex', 'newdiv')
    let hr = document.createElement("hr")
    newTicket.innerHTML = 
    `<svg class="svg" xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"/></svg>
    <div class="text">
        <p class="nom">`+ticket.nom+`</p>
        <p class="description">`+ticket.description+`</p>
    </div>
    <div>
        <div class="compteur flex">
            <button onclick="minusOne(`+ticket.id+`)" class="moinsUn">-</button>
            <p class="totCompteur" id="compteur`+ticket.id+`">0</p>
            <button onclick="addOne(`+ticket.id+`)" class="plusUn">+</button>
        </div>
        <p class="prix">`+ticket.prix/100+ '€'+`</p>
    </div>`
    
    container.appendChild(newTicket);
    container.appendChild(hr);
});


// console.log(ticketList[0])