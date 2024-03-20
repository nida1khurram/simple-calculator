#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first Number", type: "number", name: "firstNumber" },
  { message: "Enter Second Number", type: "number", name: "secondNumber" },
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name: "operator",
    choices: ["Addition", "subtraction", "multiplication", "division"],
  },
]);
//conditional statement
if(answer.operator === "Addition"){
    console.log("Your value is", answer.firstNumber + answer.secondNumber );
}else if(answer.operator === "subtraction"){
    console.log("Your value is", answer.firstNumber - answer.secondNumber );
}else if(answer.operator === "multiplication"){
    console.log("Your value is", answer.firstNumber * answer.secondNumber );
}else if(answer.operator === "division"){
    console.log("Your value is", answer.firstNumber / answer.secondNumber );
}else{
    console.log("select valid operator");
}