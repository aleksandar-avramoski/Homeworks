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
      
    let typePressed = false;
    let brandPressed = false;  
    let gasTypePressed = false;

    //Sort by Type
    document.getElementById("typeBtn").addEventListener("click", () => {
        let carTypeList = document.querySelector(".carTypeList");
        
        if (!typePressed) {
            document.getElementById("typeBtn").textContent = "▲";
            
            let ul = document.createElement('ul');   
            ul.className = "carTypeList";   
        
            for (let carType of carTypes) {
                let li = document.createElement("li");
                let button = document.createElement('button');

                button.className = "carTypeBtn";
                button.textContent = carType;

                button.addEventListener("click", (e) => {
                    document.getElementsByTagName('tbody')[0].innerHTML = "";
                    
                    for (let car of cars) {
                        if (car.type === e.target.textContent) {
                            assigningInfoInsideTable(car);
                        }
                    }

                    ul.remove();

                    document.getElementById("typeBtn").textContent = "▼";
                    
                    typePressed = false;
                    
                });
                  
                li.appendChild(button); 
                ul.appendChild(li); 
            }
    
            document.getElementById("type").appendChild(ul);

        } else {
            document.getElementById("typeBtn").textContent = "▼";
            carTypeList.remove();
        }

        typePressed = !typePressed;
    });

    //Sort by Brand
    document.getElementById("brandBtn").addEventListener('click', () => {
        let carBrandList = document.querySelector(".carBrandList");

        if (!brandPressed) {
          document.getElementById("brandBtn").textContent = "▲";

          let ul = document.createElement("ul");
          ul.className = "carBrandList";

          for (let carBrand of carBrands) {
            let li = document.createElement("li");
            let button = document.createElement("button");

            button.className = "carBrandBtn";
            button.textContent = carBrand;

            button.addEventListener("click", (e) => {
              document.getElementsByTagName("tbody")[0].innerHTML = "";

              for (let car of cars) {
                if (car.brand === e.target.textContent) {
                  assigningInfoInsideTable(car);
                }
              }

              ul.remove();

              document.getElementById("brandBtn").textContent = "▼";

              brandPressed = false;
            });

            li.appendChild(button);
            ul.appendChild(li);
          }

          document.getElementById("brand").appendChild(ul);

        } else {
          document.getElementById("brandBtn").textContent = "▼";
          carBrandList.remove();
        }

        brandPressed = !brandPressed;
    })

    //Sort by Model
    document.getElementById('modelInput').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            let found = false;

            for (let car of cars) {
                if (car.model.toLowerCase() === event.target.value.toLowerCase()) {
                    document.getElementById("ifModelExists").style.display = "none";
                    document.getElementsByTagName("tbody")[0].innerHTML = "";
                    assigningInfoInsideTable(car);
                    found = true;
                    break;
                } 
            }

            if (!found) {
                document.getElementById("ifModelExists").style.display = "block";
                document.getElementById("ifModelExists").textContent = "No data found";
            }
            
            event.target.value = "";
        }
    });

    //Sort by number of Doors
    document.getElementById('doorsInput').addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            let numDoors = parseInt(event.target.value);

            if (numDoors > 5 || numDoors < 2 || isNaN(numDoors)) {
              document.getElementById("ifNumOfDoorsExist").style.display = "block";
              document.getElementById("ifNumOfDoorsExist").textContent = "2-5 doors available";
            
            } else {
                document.getElementById("ifNumOfDoorsExist").style.display = "none";
                document.getElementsByTagName("tbody")[0].innerHTML = "";

                for (let car of cars) {
                    if (car.doors === numDoors) {
                        assigningInfoInsideTable(car);
                    } 
                }
            }

            event.target.value = "";
        }
    })

    //Sort by Gas type
    document.getElementById("gasTypeBtn").addEventListener('click', () => {
        let carGasTypeList = document.querySelector(".carGasTypeList");

        if (!gasTypePressed) {
          document.getElementById("gasTypeBtn").textContent = "▲";

          let ul = document.createElement("ul");
          ul.className = "carGasTypeList";

          for (let gasType of gasTypes) {
            let li = document.createElement("li");
            let button = document.createElement("button");

            button.className = "carGasTypeBtn";
            button.textContent = gasType;

            button.addEventListener("click", (e) => {
              document.getElementsByTagName("tbody")[0].innerHTML = "";

              for (let car of cars) {
                if (car.gasType === e.target.textContent) {
                  assigningInfoInsideTable(car);
                }
              }

              ul.remove();

              document.getElementById("gasTypeBtn").textContent = "▼";

              gasTypePressed = false;
            });

            li.appendChild(button);
            ul.appendChild(li);
          }

          document.getElementById("gasType").appendChild(ul);

        } else {
          document.getElementById("gasTypeBtn").textContent = "▼";
          carGasTypeList.remove();
        }

        gasTypePressed = !gasTypePressed;
    });

    //Sort by Color
    document.getElementById('colorInput').addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
          let found = false;
          
          document.getElementById("ifColorExists").style.display = "none";
          document.getElementsByTagName("tbody")[0].innerHTML = "";

          for (let car of cars) {
            if (car.color.toLowerCase() === event.target.value.toLowerCase()) {
              assigningInfoInsideTable(car);
              found = true;
            }
          }

          if (!found) {
            document.getElementById("ifColorExists").style.display = "block";
            document.getElementById("ifColorExists").textContent =  "No data found";
          }

          event.target.value = "";
        } 
    });

    //Sort by Production year
    document.querySelectorAll('input[name="oldOrNew"]').forEach((radio) => {
        radio.addEventListener("change", function() {
            let value;

            if (this.value === "new") {
                value = true;
            } else if (this.value === "old") {
                value = false;
            } else {
                value = null;
            }

            document.getElementsByTagName("tbody")[0].innerHTML = "";

            for (let car of cars) {
                if (value === null || car.isNew === value) {
                    assigningInfoInsideTable(car);
                }
            }
        });
    });

    //Sort by Horsepower range
    document.getElementById("horsepowerInput").addEventListener('keypress', (event) => {
        if (event.key === "Enter") {
            let horsepower = Number(event.target.value);

            document.getElementById("ifHorsepowerExists").style.display = "none";
            document.querySelector("tbody").innerHTML = ""; 

            if (horsepower >= 80 && horsepower <= 300) {
              for (let car of cars) {
                if (car.horsepower <= horsepower) {
                  assigningInfoInsideTable(car);
                }
              }

            } else {
              document.getElementById("ifHorsepowerExists").style.display = "block";
              document.getElementById("ifHorsepowerExists").textContent = "80 - 300 horsepowers";
            }

            event.target.value = "";
        }
    });
}

//Assigning info inside table
function assigningInfoInsideTable(car) {
    let table = document.getElementById('cars-table');
    let tbody = document.getElementsByTagName('tbody')[0];
    let tr = document.createElement('tr');

    //Car Type
    let tdType = document.createElement('td');
    tdType.textContent = car.type;
    tr.appendChild(tdType);

    //Car Brand
    let tdBrand = document.createElement('td');
    tdBrand.textContent = car.brand;
    tr.appendChild(tdBrand);

    //Car Model
    let tdModel = document.createElement('td');
    tdModel.textContent = car.model;
    tr.appendChild(tdModel);

    //Car num of Doors
    let tdDoors = document.createElement("td");
    tdDoors.textContent = car.doors;
    tr.appendChild(tdDoors);

    //Car Gas Type
    let tdGasType = document.createElement("td");
    tdGasType.textContent = car.gasType;
    tr.appendChild(tdGasType);

    //Car color
    let tdColor = document.createElement("td");
    tdColor.textContent = car.color;
    tr.appendChild(tdColor);

    //Is new
    let tdIsNew = document.createElement("td");
    if (car.isNew) {
        tdIsNew.textContent = "✅";
    } else {
        tdIsNew.textContent = "❌";
    }
    tr.appendChild(tdIsNew);

    //Car Horsepower
    let tdHorsepower = document.createElement("td");
    tdHorsepower.textContent = car.horsepower;
    tr.appendChild(tdHorsepower);

    tbody.appendChild(tr);
    table.appendChild(tbody);
}


