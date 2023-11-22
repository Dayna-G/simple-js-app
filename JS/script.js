
//let pokemonRepository = (function (pokemon){
let pokemonList =[ 
{name:'Bulbasaur', height:'3', big: true , types:['grass','poison']},
{name:'Charmander', height:'2', big: false , type:['fire']},
{name:'Squirtle', height:'1', big: false, type:['water']},
];

pokemonList.forEach(function (pokemon){
let isBig = pokemon.big ? 'Wow that is big' : ' ';
  document.write('<p>' + ' ' + pokemon.name + ' ' + pokemon.height+ ' ' + isBig + '</p>');

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }
 
  return {
    add: add,
    getAll: getAll
  }
});



pokemonRepository.getAll();