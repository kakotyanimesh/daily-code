// import chalk from "chalk";

// console.log(chalk.blue("node package manager"));
// console.log(chalk.red.bold("node package manager"));
// console.log(chalk.green("node package manager"));

// // external library vs internal library (fs, path, http )
// // learn about package.json file 
// // ^ to get latest update 
// // command line interface of your own 

const fs = require("fs")
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('count the lines ')
  .argument('<file>', 'count')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log("error", err);
            
        } else {
            const lines = data.split("\n").length
            console.log(`the total lines are ${lines} `)
        }
    })
  });

// command for count words   
program.command('countWords')
  .description('count the lines ')
  .argument('<file>', 'count')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log("error", err);
            
        } else {
            const words = data.split(" ").length
            console.log(`the total words are ${words} `)
        }
    })
  });

program.parse();


