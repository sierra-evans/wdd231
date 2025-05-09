// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
let results = null;
const urlList = "https://pokeapi.co/api/v2/pokemon";

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

function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `
        <h2>${results.name}</h2>
        <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`
    outputElement.innerHTML = html;
    console.log("first: ", results);
}

// async function getPokemonList(url) {
//     const response = await fetch(url);
//     if (response.ok) {
//         const data = await response.json();
//         doStuffList(data);
//     }
// }

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    pokeList.forEach(element => {
        const html = `
        <li>${element.name}</li>`
        pokeListElement.innerHTML += html;
    });
}

function compare(a, b) {
    if (a.name < b.name) {
        return -1;
    } else if (a.name > b.name) {
        return 1;
    } else return 0;
}

function sortPokemon(list) {
    let sortedList = list.sort(compare);
    return sortedList;
}

getPokemon(url, doStuff);
console.log("second: ", results);
getPokemon(urlList, doStuffList);