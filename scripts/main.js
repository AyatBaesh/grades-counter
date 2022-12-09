import {getNumberOfGrades, getFirstGrade, getLastGrade } from "./stats.js"

let grades = [];
let tbody = document.querySelector("#tbody");
let gradesForm = document.getElementById("grades-form");
let input = document.querySelector("#grade");

function render(grades){//function to update table data
    tbody.innerHTML =  `<tr> 
        <td>${getNumberOfGrades(grades)}</td>
        <td>${getFirstGrade(grades)}</td>
        <td>${getLastGrade(grades)}</td>`
    }

gradesForm.addEventListener('submit', event => {//adding new grade to the grades[] and calling render() to update the table
    event.preventDefault();//prevents data refreshing
    grades.push(input.value);
    input.value="";
    render(grades);
    // console.log(`grades = ${grades}`);

})

