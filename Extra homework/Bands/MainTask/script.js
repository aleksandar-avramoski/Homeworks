getInfoForBands("https://raw.githubusercontent.com/sedc-codecademy/sedc6-frontend-exam/master/band-data.json");

//Info for bands
function getInfoForBands(api) {
  fetch(api)

  .then(response => response.json())

  .then(data => infoForBandsShownInTheTable(data));
}

//Info for bands shown in the table
function infoForBandsShownInTheTable(data) {
    let alphabet = ["A", "B", "C", "D", 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    let bands = [];

    for (let letter of alphabet) {
      bands.push(data.filter(band => band.name.charAt(0) === letter));
    }

    let bandGroups = []
    let bandGroups1 = [];
    
    for (let bandGroup of bands) {
        for (let bandName of bandGroup) {
            bandGroups.push(bandName);
            bandGroups1.push(bandName);
        }
    }

    bandGroups1.sort((a, b) => b.albums.length - a.albums.length);

    let bandGroupSortedByAlbums = [...bandGroups1];

    for (let band of bandGroups) {
      printingBandsInTheTable(band)
    }  

    let sortByBandName = document.getElementById("bandNameBtn");

    //Sort by band name
    sortByBandName.addEventListener("click", () => {
        
        sortByBandName.disabled = true;

        let sortFromAtoZ = document.createElement("button");
        sortFromAtoZ.textContent = "Sort from A to Z";
        sortFromAtoZ.classList.add("additionalButton");

        let sortFromZtoA = document.createElement("button");
        sortFromZtoA.textContent = "Sort from Z to A";
        sortFromZtoA.classList.add("additionalButton");

        sortFromAtoZ.addEventListener("click", () => {
            clearTable();
              
            for (let band of bandGroups) {
                printingBandsInTheTable(band);
            }

            sortFromAtoZ.style.display = "none";
            sortFromZtoA.style.display = "none";

            sortByBandName.disabled = false;
        });

        sortFromZtoA.addEventListener("click", () => {
            clearTable();
              
            for (let band of [...bandGroups].reverse()) {
                printingBandsInTheTable(band);
            }

            sortFromAtoZ.style.display = 'none';
            sortFromZtoA.style.display = 'none';

            sortByBandName.disabled = false;
        });

        document.getElementById("bandName").appendChild(sortFromAtoZ);
        document.getElementById("bandName").appendChild(sortFromZtoA);
        }
    );

    let albumsBtn = document.getElementById("albumsBtn");

    //Sort by album count
    albumsBtn.addEventListener('click', () => {
        
      albumsBtn.disabled = true; 

      let sortFromHighToLow = document.createElement("button");
      sortFromHighToLow.textContent = "Sort from highest to lowest";
      sortFromHighToLow.classList.add("additionalButton");

      let sortFromLowToHigh = document.createElement("button");
      sortFromLowToHigh.textContent = "Sort from lowest to highest";
      sortFromLowToHigh.classList.add("additionalButton");

      sortFromHighToLow.addEventListener("click", () => {
        clearTable();

        for (let band of bandGroupSortedByAlbums) {
          printingBandsInTheTable(band);
        }

        sortFromHighToLow.style.display = "none";
        sortFromLowToHigh.style.display = "none";

        albumsBtn.disabled = false;
      });

      sortFromLowToHigh.addEventListener("click", () => {
        clearTable();

        for (let band of [...bandGroupSortedByAlbums].reverse()) {
          printingBandsInTheTable(band);
        }

        sortFromHighToLow.style.display = "none";
        sortFromLowToHigh.style.display = "none";

        albumsBtn.disabled = false;
      });

      document.getElementById("albums").appendChild(sortFromHighToLow);
      document.getElementById("albums").appendChild(sortFromLowToHigh);
  });
}

//Clear table
function clearTable() {
  let tableBody = document.querySelector("tbody"); 
  if (tableBody) {
    tableBody.innerHTML = "";
  }
}

//Print bands in the table
function printingBandsInTheTable(band) {
    let table = document.getElementById("bandTable");
    let tBody = document.querySelector('tbody');

    let tr = document.createElement("tr");

    let tdIndex = document.createElement("td");
    tdIndex.textContent = table.rows.length;
    tr.appendChild(tdIndex);

    let tdName = document.createElement("td");
    tdName.textContent = band.name;
    tr.appendChild(tdName);

    let tdIsActive = document.createElement("td");
    if (band.active) {
      tdIsActive.textContent = "✅";
    } else {
      tdIsActive.textContent = "❌";
    }
    
    tr.appendChild(tdIsActive);

    let tdTags = document.createElement("td");
    tdTags.innerHTML = band.tags.join("<br>");
    tr.appendChild(tdTags);

    let tdMembers = document.createElement("td");
    let currentMembers = band.members
      .filter((member) => !member.former)
      .map((member) => member.name)
      .join("<br>");

    tdMembers.innerHTML = currentMembers;
    tr.appendChild(tdMembers);

    let tdAlbums = document.createElement("td");
    tdAlbums.textContent = band.albums.length;
    tr.appendChild(tdAlbums);

    tBody.appendChild(tr);
    table.appendChild(tBody);
}