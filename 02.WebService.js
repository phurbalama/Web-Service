/* fileName: 02.WebService.js
Step 1: install express (npm i express) npm = (no packet management)
Step 2: node 02.WebService.js 
Step 3: http://localhost:9215/grade?score=100&extra=20    (?) indicates input will be coming next.. 
*/

//equivalent to import from java or include from c++.. Imports express module
const express = require("express"); 
const app = express(); //executes express() and puts it in variable app

const grade = (score,extraCredit) => {
    let status = "failing";
    score+=extraCredit;
    if (score >= 65){
        status = "passing";
    }
    return status;
} 

//goes into grade module in the web server using .get method which takes grade, function
//function without the name is anonymous function
//request inputs the information and response outputs it to the world
app.get('/grade', function(req, res) {
    let testScore = req.query["score"];             //using .query score is being requested 
    let score = parseFloat(testScore);              //converts testScore string into Float 
    let extraCredit = req.query["extra"];
    //conditional operator that checks if extraCredit is null then assigns to 0 else assigns extraCredit
    extraCredit = extraCredit == null ? 0 : parseFloat(extraCredit);  

    let status = grade(score,extraCredit);
    res.json({name: "lama,phurba",testScore,extraCredit,status});      //outputs my string in json format
});

//listens to the port number 9215 using .listen method
const server = app.listen(9215,()=>{
    console.log({server: "Server Bound"});
});

//using web browser you can type (http://localhost:9215/grade) to get the response information from the server