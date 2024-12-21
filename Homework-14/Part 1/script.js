let allHeadings1 = document.getElementsByTagName('h1');
let allHeadings3 = document.getElementsByTagName('h3');
let allParagraphs = document.getElementsByTagName('p');

for (let h1 of allHeadings1) {
    h1.innerText = "All h1 changed";
}

for (let h3 of allHeadings3) {
    h3.innerText = "All h3 changed";
}

for (let p of allParagraphs) {
    p.innerText = "All paragraphs changed";
}