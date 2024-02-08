// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";

let results = null;


async function getPokemon(url, doThis) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doThis(data);
  }
}
async function getPokemonList(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        doStuffList(data);
    }
}

function doStuff(data) {
  let output = document.querySelector("#output");
  results = data;
  const html = `<h2>${results.name}</h2>
                <img src="${results.sprites.front_default}" alt="${results.name} sprite">`;
  output.innerHTML = html;
//console.log("first: ", results);
}
function doStuffList(data) {
    let listElement = document.querySelector("#outputList");
    console.log(data);
    let pokeList = data.results;
    pokeList.forEach(pokemon => {
        const html = `<li>${pokemon.name}</li>`;
        listElement.innerHTML += html;
    });
}

function sortPokemon(list) {
    list.sort
}

getPokemon(url, doStuff);
getPokemonList(urlList, doStuffList);
