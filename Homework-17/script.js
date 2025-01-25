let clickMeBtn = document.getElementById('btn');
let nextBtn = document.getElementById("nextBtn");
let previousBtn = document.getElementById("previousBtn");
let table = document.getElementById("table");

let planets = [];

clickMeBtn.addEventListener('click', function() {
  callApi("https://swapi.py4e.com/api/planets/?page=1");

  clickMeBtn.style.display = "none";
  nextBtn.style.display = "block";
});

nextBtn.addEventListener('click', function() {
  callApi("https://swapi.py4e.com/api/planets/?page=2");

  nextBtn.style.display = "none";
  previousBtn.style.display = "block";
});

previousBtn.addEventListener('click', function() {
  callApi("https://swapi.py4e.com/api/planets/?page=1");

  previousBtn.style.display = "none";
  nextBtn.style.display = "block";
});

function callApi(url) {
    fetch(url)

    .then((response) => {
      return response.json();
    })

    .then((data) => {
      
      planets = [];
      clearTable();

      data.results.forEach((planet) => {
        planets.push({
          name: planet.name,
          climate: planet.climate,
          gravity: planet.gravity,
          population: planet.population,
        });
      });

      addInfoInsideTable(planets);
    });
}

function addInfoInsideTable(planets) {
  planets.forEach((planet) => {
    let row = document.createElement("tr");

    row.innerHTML = `
                    <td>${planet.name}</td>
                    <td>${planet.population}</td>
                    <td>${planet.climate}</td>
                    <td>${planet.gravity}</td>
                `;

    table.appendChild(row);
  });
}

function clearTable() {
  while (table.rows.length > 1) {
    table.deleteRow(1);
  }
}