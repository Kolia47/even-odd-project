#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
const answers = await inquirer.prompt([{
    type: "number",
    name: "number",
    message: "Enter a number",
}]);
if (answers.number % 2 == 0) {
    console.log(chalk.blue (answers.number + " its even number"))
}else if (answers.number % 2 == 1) {
    console.log(chalk.green (answers.number + " its odd number"))
}else {
    console.log(chalk.red ("its not a number"));
}
