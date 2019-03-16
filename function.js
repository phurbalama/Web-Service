/* 01.Function.js */

const grade1 = function(score,extraCredit) {
    let status = "failing ";
    score += extraCredit;

    if (score >= 65){
        status = "passing";
    }
    return status;
}

//this is the same as the statement above but with different syntax
//using arrow function it is creating grade 2 function
//const grade2 = score =>{} for one parameter
//two parameter = (score,extraCredit)
const grade2 = (score,extraCredit) => {
    let status = "failing";
    score+=extraCredit;
    if (score >= 65){
        status = "passing";
    }
    return status;
} 


console.log({grade1: grade1(36,10)});
console.log({grade2 : grade2(36,10)});