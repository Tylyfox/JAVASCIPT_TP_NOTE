//objet carte
const objet =
{
        id:1,
        label: 'Pikachu-V',
        image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/86.jpg',
        price: 11.50,
        description: "Plus la puissance électrique de Pikachu est élevée, plus les poches de ses joues sont extensibles.",
        disponibilite: true,
        quantity: 200,
        largeur: 6.3,
        hauteur: 8.8,
        volume: 0.33,
    };

//création de la card
let cardCreate = `         
    <img src="${objet.image}"
        class="card-img-top" alt="${objet.label}">
     
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> <h5 class="card-title fs-2">${objet.label}</h5></li>
        <li class="list-group-item fs-5">Prix</li>
        <li class="list-group-item">${objet.price} €</li>
        <li class="list-group-item fs-5">Quantité</li>
        <li class="list-group-item">${objet.quantity} </li>
        <li class="list-group-item fs-5">Disponible</li>
        <li class="list-group-item">${objet.disponibilite?'OUI':'NON'} </li>
        <li class="list-group-item fs-5">Largeur</li>
        <li class="list-group-item">${objet.largeur} cm</li>
        <li class="list-group-item fs-5">Hauteur</li>
        <li class="list-group-item">${objet.hauteur} cm</li>
        <li class="list-group-item fs-5">Volume</li>
        <li class="list-group-item">${objet.volume} m3</li>
        <li class="list-group-item fs-5">Description</li>
        <li class="list-group-item">${objet.description}</li>
  </ul>
`;
//affiche la card dans details.html
let divCard = document.getElementById("card");
divCard.innerHTML = cardCreate;


//création du formulaire
let formCreate = `
    <h5 class="card-title text-center mb-3 mt-3">Modification de la carte</h5>   
<form method="get" action="#" >
  <div class="mb-3">
    <label class="form-label">Titre de la carte</label>
    <input class="form-control bg-danger text-light" type="text" placeholder="label" id="label1">
  </div>
  <div class="mb-3 ">
    <label class="form-label">Prix en euros</label>
    <input class="form-control bg-danger text-light" type="text" placeholder="price" id="prix1">
  </div>
  <div class="mb-3">
    <label class="form-label">Quantité</label>
    <input class="form-control bg-danger text-light" type="text" placeholder="quantity" id="quantity1">
  </div>
  <div class="mb-3">
    <label class="form-label">Largeur en cm</label>
    <input class="form-control bg-danger text-light" type="text" placeholder="largeur" id="largeur1">
  </div>
  <div class="mb-3">
    <label class="form-label">Hauteur en cm</label>
    <input class="form-control bg-danger text-light" type="text" placeholder="hauteur" id="hauteur1">
  </div>
  <div class="mb-3">
    <label class="form-label">Volume en m3</label>
    <input class="form-control bg-danger text-light" type="text" placeholder="volume" id="volume1">
  </div>
  <div class="mb-3">
    <label class="form-label">Description</label>
    <textarea class="form-control bg-danger text-light" rows="3" placeholder="description" id="description1"></textarea>
  </div>
</form>
<button type="button" class="btn btn-primary" id="btn">Modifier la carte</button>
`;

//affiche le formulaire dans details.html
let divForm = document.getElementById('form');
divForm.innerHTML = formCreate;


//conditions avec onkeyup changement de la couleur de fond et du text.

let label  = document.getElementById('label1');
let prix = document.getElementById('prix1');
let quantity = document.getElementById('quantity1');
let largeur = document.getElementById('largeur1');
let hauteur = document.getElementById('hauteur1');
let volume = document.getElementById('volume1');
let description = document.getElementById('description1')

label.onkeyup = () => {
   label.value !== "" ? label.className = "form-control bg-success text-light" : label.className = "form-control bg-danger text-light"
};
prix.onkeyup = () => {
    prix.value !== "" ? prix.className = "form-control bg-success text-light":  prix.className = "form-control bg-danger text-light"
};
quantity.onkeyup = () => {
    quantity.value !== "" ? quantity.className = "form-control bg-success text-light": quantity.className = "form-control bg-danger text-light"
};
largeur.onkeyup = () => {
    largeur.value !== "" ? largeur.className = "form-control bg-success text-light" : largeur.className = "form-control bg-danger text-light"
};
hauteur.onkeyup = () => {
    hauteur.value !== "" ? hauteur.className = "form-control bg-success text-light" : hauteur.className = "form-control bg-danger text-light"
};
volume.onkeyup = () => {
    volume.value !== "" ? volume.className = "form-control bg-success text-light" : volume.className = "form-control bg-danger text-light"
};
description.onkeyup = () => {
    description.value !== "" ? description.className = "form-control bg-success text-light" : description.className = "form-control bg-danger text-light"
};

//lorsque que l'on clique sur le bouton modification de la carte
let btn = document.getElementById('btn');
btn.onclick = () => {
    let label1 = document.getElementById('label1').value;
    let prix1 = document.getElementById('prix1').value;
    let quantity1 = document.getElementById('quantity1').value;
    let largeur1 = document.getElementById('largeur1').value;
    let hauteur1 = document.getElementById('hauteur1').value;
    let volume1 = document.getElementById('volume1').value;
    let description1 = document.getElementById('description1').value;

    //condition si tout le formulaire est rempli ou s'il n'est pas rempli
    if(label1 && prix1 && quantity1 && largeur1 && hauteur1 && volume1 && description1 !== ""){
    objet.label = label1;
    objet.price = parseFloat(prix1);
    objet.quantity = parseInt(quantity1);
    objet.largeur = parseInt(largeur1);
    objet.hauteur = parseInt(hauteur1);
    objet.volume = parseFloat(volume1);
    objet.description = description1;


    //création de la card
    let cardCreate2 = `         
    <img src="${objet.image}"
        class="card-img-top" alt="${objet.label}">
    <ul class="list-group list-group-flush">
        <li class="list-group-item"> <h5 class="card-title fs-2">${objet.label}</h5></li>
        <li class="list-group-item fs-5">Prix</li>
        <li class="list-group-item">${objet.price} €</li>
        <li class="list-group-item fs-5">Quantité</li>
        <li class="list-group-item">${objet.quantity} </li>
        <li class="list-group-item fs-5">Disponible</li>
        <li class="list-group-item">${objet.disponibilite?'OUI':'NON'} </li>
        <li class="list-group-item fs-5">Largeur</li>
        <li class="list-group-item">${objet.largeur} cm</li>
        <li class="list-group-item fs-5">Hauteur</li>
        <li class="list-group-item">${objet.hauteur} cm</li>
        <li class="list-group-item fs-5">Volume</li>
        <li class="list-group-item">${objet.volume} m3</li>
        <li class="list-group-item fs-5">Description</li>
        <li class="list-group-item">${objet.description}</li>
  </ul>
    `;
//remplace la card dans details.html
    let divCard = document.getElementById("card");
    divCard.innerHTML = cardCreate2;
    } else {
    //affiche un message d'erreur qui demande de remplir tout le formulaire
        let maModalError = `
        <!-- Modal error -->
        <div class="modal-content bg-danger" id="modal-content">
          <span class="close">&times;</span>
          <p>MERCI DE REMPLIR TOUT LE FORMULAIRE</p>
        </div>`;
      let modalError = document.getElementById('modalError');
      modalError.innerHTML =maModalError;
      modalError.style.display = "block";
      let span = document.getElementsByClassName("close")[0];
    span.onclick = () => {
        modalError.style.display = "none";
      }
      // quand on clique en dehors de la modal ferme le modal
      window.onclick = (event) => {
        if (event.target == modalError) {
            modalError.style.display = "none";
        }
      } 
    }
};