const produit = [
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
},
{
    id:2,
    label: 'Mew VMAX',
    image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/268.jpg',
    price: 150.00,
    description: "À l'aide d'un microscope, on peut distinguer le pelage extrêmement court, fin et délicat de ce Pokémon.",
    disponibilite: true,
    quantity: 10,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.33,
},
{
    id:3,
    label: 'Lainergie',
    image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/280.jpg',
    price: 45.00,
    description: "Sa peau lisse et élastique étant isolante, on peut la caresser sans risquer de se prendre une décharge électrique. ",
    disponibilite: true,
    quantity: 20,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.33,
},
{
    id:4,
    label: 'Genesect-V',
    image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/254.jpg',
    price: 25.50,
    description: "Un Pokémon Insecte des temps anciens modifié par la Team Plasma. Le canon dans son dos a été grandement amélioré.",
    disponibilite: true,
    quantity: 20,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.33,
},
{
    id:5,
    label: 'Arcanin',
    image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/33.jpg',
    price: 2.00,
    description: "Ce Pokémon est admiré depuis toujours pour sa beauté. Il court avec tellement de légèreté qu'on dirait qu'il vole",
    disponibilite: true,
    quantity: 500,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.27,
},
{
    id:6,
    label: 'Stari',
    image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/52.jpg',
    price: 0.99,
    description: "Etant capable de se régénérer en une demi-journée seulement, il ne craint aucune blessure",
    disponibilite: true,
    quantity: 1200,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.27,
},
{
    id:7,
    label: 'Sabelette',
    image: 'https://www.pokecardex.com/assets/images/sets/FST/HD/131.jpg',
    price: 1.00,
    description: "Lorsque sa peau est saturée d'humidité, il se dirige vers un volcan et se sèche à la chaleur du magma.",
    disponibilite: true,
    quantity: 1100,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.27,
},
{
    id:8,
    label: 'Dracaufeu',
    image: 'https://www.pokecardex.com/assets/images/sets/CEL/HD/27.jpg',
    price: 451.00,
    description: "Il peut fendre la roche de son souffle brûlant. Il est souvent la cause de nombreux incendits.",
    disponibilite: false,
    quantity: 0,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.33,
},
{
    id:9,
    label: 'Magicarpe Brillant',
    image: 'https://www.pokecardex.com/assets/images/sets/CEL/HD/35.jpg',
    price: 499.99,
    description: "Un pokémon faible et pathétique. Il lui arrive de temps en temps de parvenir à sauter assez haut, mais il ne monte jamais au-delà de 2 m",
    disponibilite: true,
    quantity: 4,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.33,
},
{
    id:10,
    label: 'Hugette',
    image: 'https://www.mypokecard.com/fr/Galerie/my/galery/RcHSM6XAALJP.jpg',
    price: 500000.0,
    description: "Un pokémon remarquable et extrèmement rare qui fait du développement Web/Web mobile. Sa spécialité, mettre tout en rose",
    disponibilite: true,
    quantity: 1,
    largeur: 6.3,
    hauteur: 8.8,
    volume: 0.12,
},
];
//Vérification du nombre de caractères dans les description des objets
let tailleDescription = 
    produit.map((attribut)=>{
     return attribut.description.length;
    });
console.log(tailleDescription);


//tri des objets en fonction de la quantité (quantité étant un nombre entier)
produit.sort((a, b) => a.price- b.price);

//création des cartes dans le html
let CardCreate = 
produit.map((attribut) => {
let maCard = `
<div class="card mt-5 p-2" style="width: 18rem;">
            <img src="${attribut.image}"
                class="card-img-top" alt="${attribut.label}">
            <div class="card-body">
                
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><h5 class="card-title text-center fs-2">${attribut.label}</h5></li>
                    <li class="list-group-item text-center fs-5">Description</li>
                    <li class="list-group-item text-justify">${attribut.description}</li>
                </ul>
                <div class="d-grid gap-2">
                <button type="button" class="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal${attribut.id}">
                    Afficher le détail
                </button>
                </div>
            </div>
</div>
`
return maCard;
});
//affiche les carte dans home.html
let divCard = document.getElementById("card");
divCard.innerHTML = CardCreate.join(" ");

//création de la modal
let modalCreate = 
produit.map((attribut) => {
let maModal = `
<div class="modal fade" id="exampleModal${attribut.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title fs-2" >${attribut.label}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
        <img src="${attribut.image}"
        class="card-img-top" alt="${attribut.label}">
    <ul class="list-group list-group-flush text-center">
        <li class="list-group-item"></li>
        <li class="list-group-item fs-5">Prix à l'unité</li>
        <li class="list-group-item">${attribut.price} €</li>
        <li class="list-group-item  fs-5">Quantité</li>
        <li class="list-group-item">${attribut.quantity} </li>
        <li class="list-group-item fs-5">Disponible</li>
        <li class="list-group-item">${attribut.disponibilite?'OUI':'NON'}</li>
        <li class="list-group-item fs-5">Largeur</li>
        <li class="list-group-item">${attribut.largeur} cm</li>
        <li class="list-group-item fs-5">Hauteur</li>
    <li class="list-group-item">${attribut.hauteur} cm</li>
    <li class="list-group-item fs-5">Volume</li>
    <li class="list-group-item">${attribut.volume} m3</li>
    
    <li class="list-group-item fs-5">Description</li>
    <li class="list-group-item">${attribut.description}</li>
  </ul>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
    </div>
</div>
</div>
`    
return maModal;
});
//affichage des modals dans home.html
let divModal = document.getElementById("modal");
divModal.innerHTML = modalCreate.join(" ");