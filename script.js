const display = document.querySelector('#display');

async function fetchData() {
  console.log('This is fetchData function');

  // Setter opp en variabel som henter data fra en URL
  const data = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  console.log(data);

  // Setter opp en variabel som gjør dataen vi hentet lesbar
  const dataParsed = data.json();
  console.log(dataParsed);

  // Siden vi bruker to funksjoner må bi returnere variabelen vi vil ta med videre
  return dataParsed;
}

async function displayData() {
  // Siden vi bruker to funksjoner må vi ta imot den første funksjonen først
  const response = await fetchData();
  console.log(response);
  console.log(response.results[0]);
  console.log(response.results[0].name)



  // Setter opp en variabel som forkorter koden vi må skrive
  const catFact = response.results;

  // Setter opp en forEach som "looper" gjennom (index) og gjør koden i (curly-brackets) like mange ganger som der er object i array
 catFact.forEach((item) => {
    const displayItem = document.createElement("li");
    displayItem.textContent = item.name;
    display.appendChild(displayItem);
  });
}

displayData();
