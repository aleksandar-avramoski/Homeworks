function studentNames(firstNames, lastNames) {
    let fullNames = [];

    for (let i = 0; i < firstNames.length; i++) {
        fullNames.push(i + 1 + ". " + firstNames[i] + " " + lastNames[i]);
    }

    return fullNames;
}

let namesOfStudents = ["Aleksandar", "Aleks", "Bob"];
let lastNamesOfStudents = ["Avramoski", "Gregory", "Jill"];
console.log(studentNames(namesOfStudents, lastNamesOfStudents));