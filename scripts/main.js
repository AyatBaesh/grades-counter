import {getNumberOfGrades, getAverageGrade, highestGrade, tooEasy, amountOfGrades, resultsToCSV } from "./stats.js"

let grades = [];
let names = [];
let testResults = [[]];
let tbodyGrades = document.querySelector("#tbodyGrades");
let tbodyResults = document.querySelector("#tbodyResults");
let gradesForm = document.getElementById("grades-form");
let gradeInput = document.querySelector("#grade");
let nameInput = document.querySelector("#student-name");
let gradesAmount = document.querySelector("#grade-to-check")

function renderGrades(grades){//function to update table data
    tbodyGrades.innerHTML =  `<tr> 
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getAverageGrade(grades)}</td>
        <td>${highestGrade(grades)}</td>
        </tr>`
}
function renderResults(testResults,grades){
    tbodyResults.innerHTML =  `<tr> 
    <td>${tooEasy(grades)}</td>
    <td>${amountOfGrades(grades)}</td>
    <td>${resultsToCSV(testResults)}</td>
    </tr>`
}

gradesAmount.addEventListener("change", () =>{
    renderResults(testResults,grades,names);
});
gradesForm.addEventListener('submit', event => {//adding new grade to the grades[] and calling render() to update the table
    event.preventDefault();//prevents data refreshing
    grades.push(gradeInput.value);
    names.push(nameInput.value);
    testResults.push([nameInput.value, gradeInput.value]);
    // testResults.pop();
    nameInput.value = "";
    gradeInput.value="";
    console.log(`testResults = ${testResults}`)
    renderGrades(grades);
    renderResults(testResults,grades,names);
    console.log(`grades = ${grades}`);

})

