#! /usr/bin/env node                
//(shabang)   ! also known as bang
// MY FIRST PROJECT IS SIMPLE CALCULATOR IN TYPESCRIPT,node.js                                                 19march24
import inquirer from "inquirer";
import chalk from "chalk";
const answer = await inquirer.prompt([
    { message: chalk.yellow.bold("Enter first number"), type: "number", name: "firstNumber" },
    { message: chalk.yellow.bold("Enter second number"), type: "number", name: "secondNumber" },
    {
        message: chalk.magenta("select one operator from the list"),
        type: "list",
        name: "operators",
        choices: ["ADDITION", "SUBTRACTION", "DIVISION", "MULTIPLICATION", "Exponentiation", "Modulus"],
    },
]);
//console.log(answer);
//Conditional statements 
if (answer.operators === "ADDITION") {
    console.log(chalk.green.bold(answer.firstNumber + answer.secondNumber));
}
else if (answer.operators === "SUBTRACTION") {
    console.log(chalk.green.bold(answer.firstNumber - answer.secondNumber));
}
else if (answer.operators === "MULTIPLICATION") {
    console.log(chalk.green.bold(answer.firstNumber * answer.secondNumber));
}
else if (answer.operators === "DIVISION") {
    console.log(chalk.green.bold(answer.firstNumber / answer.secondNumber));
}
else if (answer.operators === "Exponentiation") {
    console.log(chalk.green.bold(answer.firstNumber ** answer.secondNumber));
}
else if (answer.operators === "Modulus") {
    console.log(chalk.green.bold(answer.firstNumber % answer.secondNumber));
}
else {
    console.log(chalk.red.bold("Oops! please select valid operator"));
}
