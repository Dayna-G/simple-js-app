
let pokemonRepository = (function (){
let repository =[ 
{
  name:'Bulbasaur', 
  height: 3, 
  big: true, 
  types:['grass','poison']
},
{
  name:'Charmander', 
  height: 2, 
  big: false , 
  type:['fire']
},
{
  name:'Squirtle', 
  height: 1, 
  big: false, 
  type:['water']
},
];
  
function add(pokemon) {
    if (
      typeof pokemon === 'object' &&
      "name" in pokemon &&
      "height" in pokemon &&
      "types" in pokemon
) {
  repository.push(pokemon);
} else {
console.log("pokemon is not correct");  
  }
}  
function getAll () {
    return repository;
}
function showDetails (pokemon) {
  console.log(pokemon)
}
function addListItem (pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
let listpokemon = document.createElement('li');
let button = document.createElement('button');


button.innerText = pokemon.name;
button.classList.add("button-class");
listpokemon.appendChild(button);
pokemonList.appendChild(listpokemon);
button.addEventListener('showDetails');
button.addEventListener('click', function (e){
  showDetails(pokemon);
})
}

  return {
  getAll: getAll,
  add: add,
  addListItem: addListItem,
  showDetails: showDetails,
  };
})();


pokemonRepository.add({ name: "Pikachu", height: 0.3, types: ["electric"] });

console.log(pokemonRepository.getAll());
pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});



