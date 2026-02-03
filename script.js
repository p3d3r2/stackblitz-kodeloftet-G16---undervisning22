const display = document.querySelector('#display');

async function fetchData() {
  console.log('This is fetchData function');

  try {
    const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');

    // Sjekker om fetch faktisk fungerte
    if (!data.ok) {
      throw new Error('Noe gikk galt med API-kallet');
    }

    const dataParsed = await data.json();
    return dataParsed;

  } catch (error) {
    console.error(error);
    return null; // Viktig for videre sjekk
  }
}

async function displayData() {
  const response = await fetchData();

  // Hvis fetch feilet
  if (!response) {
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'Kunne ikke hente data fra API.';
    display.appendChild(errorMsg);
    return;
  }

  const pokemonList = response.results;

  // Hvis API-et returnerer tom liste
  if (pokemonList.length === 0) {
    const noResults = document.createElement('p');
    noResults.textContent = 'Ingen resultater funnet.';
    display.appendChild(noResults);
  } else {
    pokemonList.forEach((item) => {
      const displayItem = document.createElement("li");
      displayItem.textContent = item.name;
      display.appendChild(displayItem);
    });
  }
}

displayData();
