#! /usr/bin/env node
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import inquirer from "inquirer";
console.log(chalk.red("*******************************************")); //ckalk animation start
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function welcome() {
    const rainbowTitle = chalkAnimation.rainbow('WelCome To Calculator Project');
    await sleep();
    //   rainbowTitle.stop();
}
;
await welcome();
console.log(chalk.red("*******************************************")); // chalk animation end
let condition = true;
while (condition) {
    const answer = await inquirer.prompt([
        { message: "Please Enter first Number", type: "number", name: "firstNumber" },
        { message: "Please Enter Second Number", type: "number", name: "secondNumber" },
        {
            message: "select one of the operators to perform operation",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    //conditional statement
    if (answer.operator === "Addition") {
        console.log(chalk.green.underline("Your Addition result is", answer.firstNumber + answer.secondNumber));
        console.log(chalk.yellow("*******************************************"));
    }
    else if (answer.operator === "Subtraction") {
        console.log(chalk.yellow.underline("Your Subtraction result is", answer.firstNumber - answer.secondNumber));
        console.log(chalk.red("*******************************************"));
    }
    else if (answer.operator === "Multiplication") {
        console.log(chalk.magenta.underline("Your Multiplication result is", answer.firstNumber * answer.secondNumber));
        console.log(chalk.whiteBright("*******************************************"));
    }
    else if (answer.operator === "Division") {
        console.log(chalk.red.underline("Your Division result is", answer.firstNumber / answer.secondNumber));
        console.log(chalk.green("*******************************************"));
    }
    else {
        console.log("select valid operator");
    }
    ;
    let con = await inquirer.prompt({
        name: "continue",
        type: "confirm",
        message: "Do you wnat to continue ?",
        default: "false",
    });
    condition = con.continue;
}
;
console.log(chalk.green("*******************************************")); //ckalk animation
const thankYou = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
async function bye() {
    const rainbowTitle2 = chalkAnimation.rainbow('Thank You & Have a Good Day!');
    await thankYou();
    rainbowTitle2.stop();
}
;
await bye();
console.log(chalk.green("*******************************************"));
