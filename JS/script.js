  let pokemonRepository = (function () {
  //let modalContainer = document.querySelector('#modal-container');
  let pokemonList = []; 
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";
  

  function showModal (item) {
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body #pokemon-details");
    modalTitle.empty();
    modalBody.empty();
    
    let nameElement = $("<h1>" + item.name + "</h1>" );
    let imageElementFront = $('<img class="modal-img" style="width: 50%">').attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">').attr("src", item.imageUrlBack);
    let heightElement = $("<p>" + "Height:" + item.height + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
  }
  
  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll(){
    return pokemonList;
  }

  function loadList(){
    return fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        data.results.forEach(pokemon => {
          let pokemonDetails ={
            name: pokemon.name,
            detailsUrl: pokemon.url
          };
          add(pokemonDetails);
        });
      })
      .catch(error => console.error(error));
  }
  
function loadDetails(pokemon){
  return fetch(pokemon.detailsUrl)
      .then(response => response.json())
      .then(details => { 
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
      })
      .catch(error => console.error(error));
}

function showDetails(pokemon){
  loadDetails(pokemon).then(function(){
  showModal(pokemon);
  });
}


 /* //updated getall
  function getAll(){
    return pokemonList;
  }
  //updated add function
  function add(pokemon){
pokemonList.push(pokemon);
  }

  //updated addlistItem
  function addListItem(pokemon){
    let pokemonList=
  document.querySelector('.list-group');
  let li = document.querySelector('li');
  li.classList.add('list-group-item')
  pokemonList.appendChild(li);
  }
  let button = document.createElement("button")
  button.innerHTML = pokemon.name;
  li.appendChild(button);
  button.classList.add('btn', 'btn-success');

  button.setAttribute('data-target', '#exampleModal');
  button.setAttribute('data-toggle', 'modal');
}

function addEventListenerToButton(button, pokemon){
  button.addEventlistener('click', functon(){
    showDetails(pokemon);
  })
}
  addEventListenerToButton(button, pokemon)

function loadList() {
  return fetch (apiUrl).then(function(json){
    json.results.foreach(function(item) {
      let pokemon = {
      name: item.name,
      detailsUrl: item.url
    };
    add(pokemon);
  });
}).catch(function(e){
  console.error(e);
})
}
//updated showDetails
function showDetails(pokemon){
  loadDetails(pokemon).then(function () {
    showModal(pokemon.name, pokemon.height)
  });

//updated HideModal
function hideModal(){
  let modalContainer = document.querySelector("#modal-container");
  modalContainer.classList.remove("is-visable");
}
window.addEventListener("keydown", (e) => {
  let modalContainer = document.querySelector("#modal-container");
  if(e.key === "Escape"&& modalContainer.classList.contains("is-visable")) {
    hideModal();
  }
});
//updated showModal
function showModal(title, text){
  const name = document.querySelector("#bootstrapModalLabel");
  const height = document.querySelector("#modal-height");

  listItem.appendChild(button);
  ulItem.appened(listItem);
  button.addEventListener('Click', function () {
showDetails(pokemon)
  });
}

/*function showModal(title, text, img) {
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
  showModal('Modal title', 'This is the modal content!');
});

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

}*/
//updated loadList
/*function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    //json.results.forEach(function (item) {
      let pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      //console.log(pokemon);
      add(pokemon);
      
    });
  };

/*function loadDetails (item){
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
//function add(pokemon) {
  //pokemonList.push(pokemon);
//}
//function showDetails (pokemon) {
  //showModal(pokemon.name, pokemon.name + pokemon.height, pokemon.img )
//};*/
  //updated return 
return {
  add: add,
  getAll: getAll,
  loadList: loadList,
  loadDetails: loadDetails,
  showDetails: showDetails
  };

})();
pokemonRepository.loadList().then(function () {
let pokemonList = pokemonRepository.getAll();
pokemonList.forEach(function(pokemon){
//pokemonRepository.addListItem(pokemon);
let listItem = document.createElement("li");
listItem.classList.add("list-group-item");
listItem.innerText = pokemon.name;

listItem.addEventListener("click", function() {
  pokemonRepository.showDetails(pokemon);
  $("#exampleModal").modal("show");
});
$(".list-group").append(listItem);
});
});
