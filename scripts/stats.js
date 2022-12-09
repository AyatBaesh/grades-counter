let chosenGrade = document.querySelector("#grade-to-check");

function getNumberOfGrades(grades) {

    return grades.length;
}

function getAverageGrade(grades) {
    let result = 0;
    for(let i in grades){
        result += parseInt(grades[i],10);
    }
    return result/grades.length;
}

function highestGrade(grades) {
    // ALGORITHM OF FINDING MAX VALUE OF AN ARRAY WITHOUT USING MATH FUNCTION
    // let maxGrade = 0;
    // for(let i in grades){
    //     if(parseInt(grades[i],10) >= maxGrade){
    //         maxGrade = parseInt(grades[i],10);
    //     }
    // }
    // console.log(`grades = ${grades}, maxGrade = ${maxGrade}`);
    
    return parseInt(Math.max(...grades),10);
}

function tooEasy(grades){
    let result = 0;
    for(let i in grades){
        if(parseInt(grades[i],10) === 20){
            result+=1;
        }
    }
    
    if(grades.length%2 === 0){
    return result >= grades.length/2;
    }else{
        return result >= (grades.length + 1)/2;
    }
}

function amountOfGrades(grades){
    let result = parseInt(chosenGrade.value,10);
    let gradesAmount = 0;
    for(let i in grades){
        if(result === parseInt(grades[i],10) ){
            gradesAmount+=1;
        }
    }
    return gradesAmount;
}

function resultsToCSV(testResults){
    let CSVResults = testResults.map(function(element){
        return element.join(", ")
    })
    // return testResults.join(", ")
}

export {getNumberOfGrades, getAverageGrade, highestGrade, tooEasy, amountOfGrades, resultsToCSV };