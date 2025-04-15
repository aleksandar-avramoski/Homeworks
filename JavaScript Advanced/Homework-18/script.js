callApi("https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json");

function callApi(api) {
    fetch(api)

      .then((response) => response.json())

      .then(function (data) {
        studentsWithAnAverageGradeHigherThan3(data);
        femaleStudentNamesWithAnAverageGradeOf5(data);
        maleStudentsFullNamesWhoLiveInSkopjeAndAreOver18YearsOld(data);
        averageGradesOfAllFemaleStudentsOverTheAgeOf24(data);
        maleStudentsWithNameStartingWithBandAverageGradeOver2(data);
      }); 
}

//Students with an average grade higher than 3
function studentsWithAnAverageGradeHigherThan3(data) {
    let studentsWithGradeHigherThan3 = data
    .filter(student => student.averageGrade > 3)
    .map(student => student.firstName + " " + student.lastName);
    
    console.log("All students with an average grade higher than 3:", studentsWithGradeHigherThan3);
}

//Female students with an average grade of 5
function femaleStudentNamesWithAnAverageGradeOf5(data) {
    let femaleStudentsWithGradeOf5 = data
      .filter((student) => student.gender === "Female" && student.averageGrade === 5)
      .map((student) => student.firstName);

    console.log("All female student names with an average grade of 5:", femaleStudentsWithGradeOf5);
}

//Male students living in Skopje and over 18 years old
function maleStudentsFullNamesWhoLiveInSkopjeAndAreOver18YearsOld(data) {
    let maleStudentsWhoLiveInSkopjeAndAreOver18YearsOld = data
    .filter(student => student.city === "Skopje" && student.gender === "Male" && student.age > 18)
    .map(student => student.firstName + " " + student.lastName);

    console.log("All male student full names who live in Skopje and are over 18 years old:", maleStudentsWhoLiveInSkopjeAndAreOver18YearsOld);
}

//Average grade of female students over 24 years old 
function averageGradesOfAllFemaleStudentsOverTheAgeOf24(data) {
    let averageGradesOfFemaleStudentsOver24 = data
    .filter(student => student.gender === "Female" && student.age > 24)
    //.map(student => student.averageGrade);

    let totalGrade = averageGradesOfFemaleStudentsOver24.reduce((sum, student) => sum + student.averageGrade, 0);
    let averageGrade = totalGrade / averageGradesOfFemaleStudentsOver24.length;

    console.log("The average grades of all female students over the age of 24:", averageGrade.toFixed(2));
}

//Male students with names starting with 'B' and average grade over 2
function maleStudentsWithNameStartingWithBandAverageGradeOver2(data) {
    let maleStudentsStartingWithBandAverageGradeOver2 = data
    .filter(student => student.gender === "Male" && student.firstName.startsWith("B") && student.averageGrade > 2)
    .map(student => student.firstName + " " + student.lastName);

    console.log("All male students with a name starting with B and average grade over 2:", maleStudentsStartingWithBandAverageGradeOver2);
}