//variable.innerHTML = allows to add HTML code to the existing HTML element assigned to the variable

import {getNumberOfGrades, getAverageGrade, highestGrade, tooEasy, amountOfGrades, resultsToCSV } from "./stats.js"//used to import functions from another js file

let grades = [];//grades array
let names = [];//names array
// let testResults = [];
let tbodyGrades = document.querySelector("#tbodyGrades");//grades table body, used to fill in required amount of table data with needed variables
let tbodyResults = document.querySelector("#tbodyResults");//names table body, used to fill in required amount of table data with needed variables
let gradesForm = document.querySelector("#grades-form");//whole input form, used to refresh after input submitted
let gradeInput = document.querySelector("#grade");
let nameInput = document.querySelector("#student-name");
let gradesAmount = document.querySelector("#grade-to-check");
let chosenGrade = document.querySelector("#grade-to-check");

function renderGrades(grades){//function to update grades table data
    tbodyGrades.innerHTML =  `<tr> 
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getAverageGrade(grades)}</td>
        <td>${highestGrade(grades)}</td>
        </tr>`
}
function renderResults(names,grades){//function to update results table data
    tbodyResults.innerHTML =  `<tr> 
    <td>${tooEasy(grades)}</td>
    <td>${amountOfGrades(grades,chosenGrade)}</td>
    <td>${resultsToCSV(names,grades)}</td>
    </tr>`
}

gradesAmount.addEventListener("change", () =>{
    renderResults(names,grades);
});
gradesForm.addEventListener('submit', event => {
    event.preventDefault();//prevents data refreshing after submitting
    grades.push(gradeInput.value);//adding grade to grades[]
    names.push(nameInput.value);//adding  name to names[]
    nameInput.value = "";//refreshing name input field
    gradeInput.value="";//refreshing grade input field
    renderGrades(grades);//adding submitted data to the grades table
    renderResults(names,grades);//adding submitted data to the results table
});

