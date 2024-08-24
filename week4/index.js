// import chalk from "chalk";

// console.log(chalk.blue("node package manager"));
// console.log(chalk.red.bold("node package manager"));
// console.log(chalk.green("node package manager"));

// // external library vs internal library (fs, path, http )
// // learn about package.json file 
// // ^ to get latest update 
// // command line interface of your own 

const fs = require("fs")
// use the commander npm package to make own cli 
const { Command } = require('commander');
const program = new Command();
const path = require("path")

program
  .name('read-file')
  .description('CLI to read the file ')
  .version('0.8.0');

program.command('read')
  .description('read what is inside a file ')
  .argument('<file>', 'file to read')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if(err) {
        console.log("There might be an error of ", err)
      } else {
        console.log(data)
      }
    })
  });


program.command("create")
  .description("create a file")
  .argument('<fileName>', 'the name of the file')
  .argument('[string]', "text")
  .action((fileName, string) => {
    const data = string !== undefined ? string : " "
    fs.appendFile(fileName, data,  (err) => {
      if(err) throw err
      console.log(`${fileName} is created`)

    })
  })


program.command("write")
  .description('To write inside a file')
  .argument('<fileName>', 'file name where we have to write')
  .argument('<text>', 'text to write')
  .action((fileName, text) => {
    fs.writeFile(fileName, text, (err)=> {
      if(err) throw err
      console.log('saved !')
    })
  })


program.command("delete")
  .description("to delete a file")
  .argument('<filePath>', "path of the file ")
  .action((filePath) => {
    fs.unlink(filePath, (err)=> {
      if(err) throw err
      console.log(`${filePath} deleted sucessfully`)
    })
})


program.command("erase")
  .description('erase everything')
  .argument('<fileName>', 'erase everything inside the file')
  .action(fileName => {
    fs.readFile(fileName, "utf-8", (err, data)=>{
      if(err) throw err

      fs.writeFile(fileName, ' ', (err)=>{
        if(err) throw err
        console.log(`${fileName} is erased successfully`);
        
      })
    })
  })


program.command('mkdir')
  .description('create a diractory')
  .argument('<dirName>', 'diractory name')
  .action((dirName) => {
    fs.mkdir(path.join(__dirname, dirName), (err) => {
      if(err) throw err
      console.log(`${dirName} diractory created successfully`);
      
    })
  })


program.parse();

