
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
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({name:'Pikachu'});
console.log(pokemonRepository.getAll());
console.log(pokemonRepository.getAll());

<
pokemonRepository.getAll().forEach( function (property) {
  console.log(property)
  if (property.height > 3){
    document.write(property.name + '' + ', Height:' + property.height + '- WOW thats big! <hr />')
  } else {
    document.write(property.name + '' + ', height:' + property.height + '<hr />' )
  }
});
