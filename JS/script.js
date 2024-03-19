//prettier output
let pokemonRepository = (function () {
  let pokemonList = [];
  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=20";

  //Updated showModal
  function showModal(item) {
    let modalTitle = $(".modal-title");
    let modalBody = $(".modal-body #pokemon-details");
    modalTitle.empty();
    modalBody.empty();

    let nameElement = $("<h1>" + item.name + "</h1>");
    let imageElementFront = $(
      '<img class="modal-img" style="width: 50%">',
    ).attr("src", item.imageUrlFront);
    let imageElementBack = $('<img class="modal-img" style="width:50%">').attr(
      "src",
      item.imageUrlBack,
    );
    let heightElement = $("<p>" + "Height:" + item.height + "</p>");

    modalTitle.append(nameElement);
    modalBody.append(imageElementFront);
    modalBody.append(imageElementBack);
    modalBody.append(heightElement);
  }
  //updated Add
  function add(pokemon) {
    pokemonList.push(pokemon);
  }
  //updated getAll
  function getAll() {
    return pokemonList;
  }
  //updated LoadList
  function loadList() {
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((pokemon) => {
          let pokemonDetails = {
            name: pokemon.name,
            detailsUrl: pokemon.url,
          };
          add(pokemonDetails);
        });
      })
      .catch((error) => console.error(error));
  }
  //Updated loadDetails
  function loadDetails(pokemon) {
    return fetch(pokemon.detailsUrl)
      .then((response) => response.json())
      .then((details) => {
        pokemon.imageUrlFront = details.sprites.front_default;
        pokemon.imageUrlBack = details.sprites.back_default;
        pokemon.height = details.height;
      })
      .catch((error) => console.error(error));
  }
  //Updated ShowDetails
  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
      showModal(pokemon);
    });
  }

  //updated return
  return {
    add: add,
    getAll: getAll,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
  };
})();
pokemonRepository.loadList().then(function () {
  let pokemonList = pokemonRepository.getAll();
  pokemonList.forEach(function (pokemon) {
    let listItem = document.createElement("li");
    listItem.classList.add("list-group-item");
    listItem.innerText = pokemon.name;

    listItem.addEventListener("click", function () {
      pokemonRepository.showDetails(pokemon);
      $("#exampleModal").modal("show");
    });
    $(".list-group").append(listItem);
  });
});
