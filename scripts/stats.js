function getNumberOfGrades(grades) {
    console.log(`grades length = ${grades.length}`)
    return grades.length;
}


function getFirstGrade(grades) {
    return grades[0];
}


function getLastGrade(grades) {
    return grades[grades.length - 1];
}
export {getNumberOfGrades, getFirstGrade, getLastGrade };