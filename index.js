#! /usr/bin/env Node
import inquirer from "inquirer";
const country = {
    USD: 1,
    PKR: 280,
    INR: 74,
    KRW: 1280,
    JPY: 234,
};
let currency = await inquirer.prompt([{
        name: "first",
        message: "select from",
        type: "list",
        choices: ["PKR", "INR", "KRW", "USD", "JPY"]
    },
    {
        name: "second",
        type: "list",
        message: "choose to",
        choices: ["PKR", "INR", "KRW", "USD", "JPY"]
    },
    {
        name: "amount",
        type: "input",
        message: "write amount"
    }
]);
let fromvalue = country[currency.first];
let tovalue = country[currency.second];
let amt = currency.amount;
let basevalue = amt / fromvalue;
let convertedvalue = basevalue * tovalue;
console.log(convertedvalue.toFixed(2));
