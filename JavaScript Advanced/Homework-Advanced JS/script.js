getApi("https://raw.githubusercontent.com/aleksandar-avramoski/Homeworks/refs/heads/main/Homework-Advanced%20JS/cars.json");

//Getting API
function getApi(api) {
  fetch(api)
  .then(response => response.json())
  .then(data => infoInsideTable(data));           
}

//Info inside table
function infoInsideTable(data) {
    let cars = [];

    data.forEach(element => {
      cars.push(element);
    });

    for (let car of cars) {
      assigningInfoInsideTable(car);
    }

    let carTypes = cars
      .map((car) => car.type)
      .filter((type, index, arr) => arr.indexOf(type) === index);

    let carBrands = cars
        .map((car) => car.brand)
        .filter((brand, index, arr) => arr.indexOf(brand) === index);

    let gasTypes = cars 
        .map(car => car.gasType)
        .filter((gasType, index, arr) => arr.indexOf(gasType) === index);

    let typeSelect = document.getElementById("typeSelect"); 
    let brandSelect = document.getElementById("brandSelect");
    let gasTypeSelect = document.getElementById("gasTypeSelect");

    typeSelect.innerHTML = `<option value="">All types</option>`;
    brandSelect.innerHTML = `<option value="">All brands</option>`
    gasTypeSelect.innerHTML = `<option value="">All gas types</option>`;

    //Car Types
    for (let carType of carTypes) {
      typeSelect.innerHTML += `<option value="${carType}">${carType}</option>`;
    }

    //Car Brands
    for (let carBrand of carBrands) {
      brandSelect.innerHTML += `<option value="${carBrand}">${carBrand}</option>`;
    }

    //Car Gas Types
    for (let gasType of gasTypes) {
      gasTypeSelect.innerHTML += `<option value="${gasType}">${gasType}</option>`;
    }                                                              

    //Search
    document.getElementById("searchBtn").addEventListener('click', () => {
      document.querySelector('tbody').innerHTML = "";

      let typeInput = document.getElementById("typeSelect").value;
      let brandInput = document.getElementById("brandSelect").value;
      let modelInput = document.getElementById("modelInput").value;
      let doorsInput = parseInt(document.getElementById("doorsInput").value);
      let gasInput = document.getElementById("gasTypeSelect").value;
      let colorInput = document.getElementById("colorInput").value;
      let newCarInput = document.getElementById("newCar").checked;
      let oldCarInput = document.getElementById("oldCar").checked;
      let hpInput = document.getElementById("hpInput").value;
      hpInput = hpInput === "" ? null : parseInt(hpInput);

      //Filtered cars
      let filteredCars = cars.filter(
        (car) =>
          (typeInput === "" || car.type.toLowerCase() === typeInput.toLowerCase()) &&
          (brandInput === "" || car.brand.toLowerCase() === brandInput.toLowerCase()) &&
          (modelInput === "" || car.model.toLowerCase() === modelInput.toLowerCase()) &&
          (isNaN(doorsInput) || car.doors === doorsInput) &&
          (gasInput === "" || car.gasType.toLowerCase() === gasInput.toLowerCase()) &&
          (colorInput === "" || car.color.toLowerCase() === colorInput.toLowerCase()) &&
          (newCarInput ? car.isNew === true : true ) &&
          (oldCarInput ? car.isNew === false : true) &&
          (hpInput === null || car.horsepower <= hpInput)
      );

      if (filteredCars.length === 0) {
        document.getElementById("noData").style.display = "block";
      } else {
        document.getElementById("noData").style.display = "none";

        for (let car of filteredCars) {
          assigningInfoInsideTable(car);
        }
      }
  
    }); 
    
    document.getElementById('resetBtn').addEventListener('click', () => {
      document.querySelector('tbody').innerHTML = "";

      document.getElementById("typeSelect").value = "";
      document.getElementById("brandSelect").value = "";
      document.getElementById("modelInput").value = "";
      document.getElementById("gasTypeSelect").value = "";
      document.getElementById("colorInput").value = "";
      document.getElementById("newCar").checked = false;
      document.getElementById("oldCar").checked = false;
      document.getElementById("hpInput").value = "";
      document.getElementById("doorsInput").value = "";

      for (let car of cars) {
        assigningInfoInsideTable(car);
      }
    });
};      

//Assigning info inside table
function assigningInfoInsideTable(car) {
  let addInfo = `
    <tr>
      <td>${car.type}</td>
      <td>${car.brand}</td>
      <td>${car.model}</td>
      <td>${car.doors}</td>
      <td>${car.gasType}</td>
      <td>${car.color}</td>
      <td>${(car.isNew ? "✅" : "❌")}</td>
      <td>${car.horsepower}</td>
    </tr>
  `;

  let tbody = document.querySelector("tbody");
  tbody.innerHTML += addInfo;
}
