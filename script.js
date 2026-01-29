const display = document.querySelector('#display');

async function fetchData() {
  console.log('This is fetchData function');

  const data = await fetch('https://catfact.ninja/facts');
  return;
}

async function displayData() {
  const response = await fetchData();
  console.log(response);
}

displayData();
