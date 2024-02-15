const dexElement = document.querySelector("#dex");
let dexIndex = 0;
let nameIndex = 1;
let spriteIndex = 2;
let entryIndex = 3;
let colorIndex = 4;

var pokemonList = [];
/* Display Pokemon */
const displayPokemon = async (pokemon) => {
    for (const poke of pokemon) {
        const articleElement = document.createElement("article");
        const pokeName = document.createElement("h3");
        const capitalized =
            poke[nameIndex].charAt(0).toUpperCase()
            + poke[nameIndex].slice(1)
        pokeName.innerText = `#${poke[dexIndex]}: ${capitalized}`;
        const dexEntry = document.createElement("p");
        dexEntry.innerText = poke[entryIndex];
        const pokeImg = document.createElement("img");
        pokeImg.src = poke[spriteIndex];

        dexElement.appendChild(articleElement);
        articleElement.appendChild(pokeImg);
        articleElement.appendChild(pokeName);
        articleElement.appendChild(dexEntry);
    };
}
/* Get Dex Entry */
const getDexEntry = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        const entries = data.flavor_text_entries;
        let entry = "";
        for (let x of entries) {
            if (x.language.name === "en" && x.version.name === "diamond") {
                entry = x.flavor_text;
                break;
            }
            else {
                entry = "Dex entry could not be retrieved.";
            }
        }
        return entry;
    }
}
/* Get Color */
const getColor = async (url) => {
    const response = await fetch(url);
    if (response.ok) {
        data = await response.json();
        return data.color.name;
    }
}
/* Get Sprite */
const getSprite = async (name) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    if (response.ok) {
        pokemon = await response.json();
        let sprite = pokemon.sprites.front_default;
        return sprite;
    }
}
/* Retrieve List of Sinnoh Pokemon */
const getPokemonList = async () => {
    const response = await fetch("https://pokeapi.co/api/v2/pokedex/5");
    if (response.ok) {
        rawDex = await response.json();
        const sinnohDex = rawDex.pokemon_entries;
        for (let pokemon of sinnohDex) {
            let sprite = await getSprite(pokemon.pokemon_species.name); 
            let entry = await getDexEntry(pokemon.pokemon_species.url);
            let color = await getColor(pokemon.pokemon_species.url);// Adding these all as elements in the list, to make filtering easier
            pokemonList.push([pokemon.entry_number, pokemon.pokemon_species.name, sprite, entry, color]);
        };
        displayPokemon(pokemonList)
    }  
}

// Sorting Pokemon

const reset = (element) => {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}

const filterPokemon = (pokemon) => {
    reset(dexElement);
    const filter = document.getElementById("filtered").value;
    switch (filter) {
        case "name": // Alphabetic Filter
            var alphabet = pokemon.sort(function(a,b){ return a[nameIndex] > b[nameIndex] ? 1 : -1; });
            displayPokemon(alphabet);
            break;
        case "color": // Coloring Filter
            var color = pokemon.sort(function(a,b){ return a[colorIndex] > b[colorIndex] ? 1 : -1; });
            displayPokemon(color);
            break;
        case "all": // Dex Number Filter
            var dexNumber = pokemon.sort(function(a,b){ return a[dexIndex] > b[dexIndex] ? 1 : -1; })
            displayPokemon(dexNumber);
            break;
        case "favorite": // Bonus for fun :)
            var myFavorites = ["piplup","luxray","beautifly","pachurisu","buizel","floatzel","ambipom",
            "buneary","lopunny","gengar","glameow","medicham","toxicroak","uxie","manaphy"];
            const favs = pokemon.filter((poke) => {
                return myFavorites.some((fav) => {
                    return poke[nameIndex] === fav;
                });
            });
            displayPokemon(favs);
            break;
        default:
            displayPokemon(pokemon);
    }
}
/* Event Listener */
document.getElementById("filtered").addEventListener("change", () => {filterPokemon(pokemonList)});

getPokemonList();