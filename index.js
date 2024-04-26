import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number: ", type: "number", name: "firstNumber" },
    { message: "Enter second number: ", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action.",
        type: "list",
        name: "opertaor",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    }
]);
if (answer.opertaor === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.opertaor === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.opertaor === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.opertaor === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please enter valid a operator.");
}
