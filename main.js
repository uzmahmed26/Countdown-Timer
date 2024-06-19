#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { differenceInSeconds } from "date-fns";
console.log(chalk.green.bold("\t \n Welcome to Uzma Ahmed\n "));
let response = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: chalk.red.bold("\tPlease Enter the amount of second:"),
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.green.bold("\tPlease enter a valid number");
            }
            else if (input > 60) {
                return chalk.yellowBright.bold("\tPlease enter a number less than 60");
            }
            else {
                return true;
            }
        }
    }
]);
let input = response.userInput; //  store user input in input variable
function startTime(val) {
    /// val is parameter which user input
    let intTime = new Date().setSeconds(new Date().getSeconds() + val);
    let intervalTime = new Date(intTime);
    setInterval((() => {
        let currTime = new Date();
        let timeDiff = differenceInSeconds(intervalTime, currTime);
        if (timeDiff <= 0) {
            console.log(chalk.green.bold("\t \nTime is up"));
            process.exit();
        }
        let min = Math.floor((timeDiff % (3600 * 24)) / 3600);
        let sec = Math.floor(timeDiff % 60);
        ////min convert in to string and sec in to string
        ///padstart use for fill 0 in empty spaces
        console.log(chalk.magenta.bold(`\t ${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`));
    }), 1000);
}
startTime(input);
