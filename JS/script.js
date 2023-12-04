
let pokemonRepository = (function (){
let pokemonList =[ 
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
}

]

pokemonList.forEach(function (pokemon){
let isBig = pokemon.big ? 'Wow that is big!' : ' ';
  console.log(' ' + pokemon.name + ' ' + pokemon.height+ ' ' + isBig );

function getAll () {
    return pokemonList;
}
  function add (pokemon) {
    pokemonList.push(pokemon);
  }

  return {
  getAll: getAll,
  add: add
} 
})
}
)();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name:'Pikachu'});
console.log(pokemonRepository.getAll());