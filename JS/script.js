let pokemonList =[ 
{name:'Bulbasaur', height:'3', types:['grass','poison']},
{name:'Charmander', height:'2', type:['fire']},
{name:'Squirtle', height:'1', type:['water']},
];

for(var i = 0; i < pokemonList.length; i++){
  document.write('<p>' + pokemonList[i].name + '</p>')
  
  if(pokemonList[i].height <10 && pokemonList[i].height >2  ){
    document.write('<p>(height: ' + pokemonList[i].height + ') That is Big!</p>' );
  } else if(pokemonList[i].height <3) {('<p> (height: ' + pokemonList[i].height + ' )</p>')
}

}
