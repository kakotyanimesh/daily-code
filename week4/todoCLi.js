const { Command } = require('commander');
const { error, log } = require('console');
const fs = require("fs")
const program = new Command();
const todoList = []

// const addTodo = (data) => {
//   const data = JSON.stringify(str) + '\n'
//   fs.appendFile(`todoList.json`, data, (err) => {
//   if(err) throw err
//   console.log(`${str} is added !`);  
// })
// }

program
  .name('todo cli ')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('add')
  .description('To add todo in our app')
  .argument('<string>', 'todo name')
  .action((str) => {
    if(str.trim().length === 0) {  // str.trim() returns a string so we cant use it directly
        console.log('input is empty');
        return
    } else {
      const data = JSON.stringify(str) + '\n'
      fs.writeFileSync(`todoList.json`, data, (err) => {
      if(err) throw err
      console.log(`${str} is added !`);  
    })
        
    }
    
  });

program.parse();
