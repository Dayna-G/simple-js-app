  let pokemonRepository = (function () {
  let modalContainer = document.querySelector('#modal-container');
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  
  let pokemonList = []; 

function showModal(title, text, img) {
  modalContainer.innerHTML = '';
  let modal = document.createElement('div');
  modal.classList.add('modal');

  let closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  let titleElement = document.createElement('h1');
  titleElement.innerText = title;

  let contentElement = document.createElement('p');
  contentElement.innerText = text;

  let imageElement = document.createElement("img");
  imageElement.setAttribute("src", img);
  imageElement.setAttribute("width", "304");
  imageElement.setAttribute("height", "228");
  imageElement.setAttribute("alt", "The Pokemon");

  modal.appendChild(closeButtonElement);
  modal.appendChild(titleElement);
  modal.appendChild(contentElement);
  modal.appendChild(imageElement);
  modalContainer.appendChild(modal);
  
  modalContainer.classList.add('is-visible');
}

function hideModal() {
  modalContainer.classList.remove('is-visible');
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();  
  }
});

modalContainer.addEventListener('click', (e) => {

  let target = e.target;
  if (target === modalContainer) {
    hideModal();
  }
});

//document.querySelector('#show-modal').addEventListener('click', () => {
 // showModal('Modal title', 'This is the modal content!');
//});

function add(pokemon) {
    if (
      typeof pokemon === "object" &&
      "name" in pokemon,
      "detailsUrl" in pokemon
     ) {
  pokemonList.push(pokemon);
} else {
console.log("pokemon is not correct");  
  }
}  

function showDetails(item) {
  pokemonRepository.loadDetails(item).then(function () {
    console.log(item);
    showModal(item.name, "height: "+item.height, item.imageUrl)
  }).catch(function (error) {
    console.error(error);
  });
}

function addListItem (pokemon){
  let pokemonList = document.querySelector(".pokemon-list");
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerText = pokemon.name;
  button.classList.add("button-class");
  pokemonList.appendChild(listItem);
  listItem.appendChild(button);
  button.addEventListener("click", () => showDetails(pokemon));

}
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      //console.log(pokemon);
      add(pokemon);
      
    });
  });
}
function loadDetails (item){
  let url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = details.types;
  }).catch(function (error) {
    console.error(error);
  });
}
function add(pokemon) {
  pokemonList.push(pokemon);
}
//function showDetails (pokemon) {
  //showModal(pokemon.name, pokemon.name + pokemon.height, pokemon.img )
//};
  
return {
    getAll: function () {
      return pokemonList;
    },
    add,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails,
  }
})();
pokemonRepository.loadList().then(function () {
pokemonRepository.getAll().forEach(function(pokemon){
pokemonRepository.addListItem(pokemon);
});
});
