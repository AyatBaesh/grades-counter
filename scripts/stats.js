//parseFloat(variable) = parses given variable and returns floating number(autoremoves all trailing zeros)

//parseInt(variable,radix) = parses given variable and converts it to number in given radix(numeration system, default = 10 = decimal)

//variable.toFixed(x) = rounds variable to fixed symbol after a comma example: let x =1.236; x.toFixed(2) = 1.24;

//Math.max(... array) = searching max value in given array. Manual algorithm is: assign the first element of the array to the max variable,
// then iterate through the array and compare it to the others. If bigger element found - reassign max variable.



function getNumberOfGrades(grades) {
    return grades.length;
}

function getAverageGrade(grades) {
    let result = 0;
    for(let i in grades){
        result += parseInt(grades[i],10);
    }
    let averageGrade = result/grades.length;
    return parseFloat(averageGrade.toFixed(1));
}

function highestGrade(grades) {
    return parseInt(Math.max(...grades),10);
}

function tooEasy(grades){//test considered too easy if  50% or more students scored max grade
    let maxGradesAmount = 0;
    for(let i in grades){//counting the amount of max grades scored
        if(parseInt(grades[i],10) === 20){
            maxGradesAmount+=1;
        }
    }
    
    if(grades.length%2 === 0){
        return maxGradesAmount >= grades.length/2;
    }else{//in case of odd amount of students
        return maxGradesAmount >= (grades.length + 1)/2;
    }
}

function amountOfGrades(grades,chosenGrade){//counting the total amount of scored chosen grades
    let chosenGradeValue = parseInt(chosenGrade.value,10);
    let gradesAmount = 0;
    for(let i in grades){
        if(chosenGradeValue === parseInt(grades[i],10) ){
            gradesAmount+=1;
        }
    }
    return gradesAmount;
}

function resultsToCSV(names,grades){// outputting summarized results list in the following form: studentName1 - studentGrade1, studentName2 - studentGrade2...
    let resultsList='';
    for(let i in names){
        resultsList += `${names[i]} - ${grades[i]}, `;
    }
    return resultsList;
}

export {getNumberOfGrades, getAverageGrade, highestGrade, tooEasy, amountOfGrades, resultsToCSV };//exports all functions to main.js