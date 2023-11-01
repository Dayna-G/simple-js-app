let pokemonList =[ 
{name:'Bulbasaur', height:'3', types:['grass','poison']},
{name:'Charmander', height:'2', type:['fire']},
{name:'Squirtle', height:'1', type:['water']},
];

for(var i = 0; i < pokemonList.length; i++){
  document.write('<p>' + pokemonList[i].name + '</p>')

}
