const { rejects } = require("assert");
const { resolve } = require("path");

const user = new Map()

// map.set("key-name", "value")

user.set("name", "animesh")
user.set("age", 21)

console.log(user.get("name")) // animesh
console.log(user.has("age")); // has used to check for keys not for values


const fs = require("fs")
async function cohortNotes(filepath){
    try {
        const notes = await new Promise((res, rej) => {
            fs.readFile(filepath, "utf-8", (err, data) => {
                if(err) rej(err)
                else res(data)
            })
        })
        console.log(notes);
    } catch (error) {
        console.log(`i don't think there will be any error but phir bhi ${error}`);
        
    }
    
}

cohortNotes("a.txt")