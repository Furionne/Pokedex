{
  const poke_container = document.getElementById('poke_container');
  const pokemons_number = 151;
  const colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5',
  }


  const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
      await getPokemon(i);
    }
  }

  const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createPokemonCard(pokemon);
  }

  const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');
    const { id, name, sprites, types } = pokemon;
    const type = types[0].type.name;
    const pokeInnerHTML = `
  <div class="img-container">
    <img src="${sprites.front_default}" alt="${name}" />
  </div>
  <div class="info">
    <span class="number">${id}</span>
    <h3 class="name">${name}</h3>
    <small class="type">Type: <span>${type}</span></small>
  </div>
  `;
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
  }


  fetchPokemons();
}


let elements = document.querySelector(".elements");
let dataaa = document.querySelector(".dataaa");
let pokeSearch = document.getElementById("pokeSearch");
let dataStore = [];

getdata();

function getdata() {
  fetch(
    'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0'
  )
    .then((response) => {
      const data = response.json();
      return data;
    })
    .then((data) => {
      dataStore = data.results;
      dataaa.innerHTML = getHTML(data.results);
    });
}

function getHTML(data) {
  return data.map(({ name }) => generateHTML(name)).join('');
}

function generateHTML(name) {
  return `<div class="pieceofdata"><h1 class= "name"> ${name}</h1></div>`;
}
// a ref

function noResultHTML() {
  return `<div class="pieceofdata"><h1 class= "name"></h1> <h1 class="name">No Results Found</h1>
        </div>`;
}

pokeSearch.addEventListener('keyup', function (e) {
  e.preventDefault();
  const currentword = e.target.value;
  const filteredData = dataStore.filter(o => o.name.includes(currentword));
  dataaa.innerHTML = filteredData.length ? getHTML(filteredData) : noResultHTML();
});


































// {
//   const matches = [];
//   const scoredMatches = [];

//   //traverse all api's, save matches
//   for (const [pokeapi, apiInfo] of Obeject.entries(pokeapi)) {
//     delete apiInfo.definitions
//     delete apiInfo.paths

//     const apiText = JSON.stringify(apiInfo)

//     const nameMatch = pokeapi.match(keywords);
//     const apiInfoMatch = apiText.match(keywords);

//     if (nameMatch || apiInfoMatch) matches.push({ pokeapi, apiInfo })

//     matches.forEach(api => {
//       const { pokeapi, apiInfo } = api
//       const searchText = pokeapi + ' ' + JSON.stringify(apiInfo)
//       const score = searchText.match(new RegExp(keywords, 'mig')).length
//       const apiDescription =
//         apiInfo.info && apiInfo.info.description
//           ? apiInfo.info.description
//           : pokeapi
//       scoredMatches.push({ pokeapi, apiDescription, score })
//     })
//   }


  // listpok.filter((pokemon) => RegExp(`\\${name.tolowerCase()}.*`\).test(pokemon.name.tolowerCase()));
  // input.addEventListener("keydown", (event) => {
  //   // filter
  //   // render new list
  // })



  // const getPokemon = async id => {
  //     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  //     const res = await fetch(url);
  //     const pokemon = await res.json();
  //
  //   }
