// fetching data in dom 
// querySelector, querySelectorALL, getElementbyId, getElementbyClassName

console.log("dom ")
console.log(document) // is a ref to whole page. 

// function addTodo(){
//     const inputdata = document.querySelector("#inputBox").value
//     console.log(inputdata);
// }

// document.getElementById("btnOne").addEventListener("click", () => {
//     const inputdata = document.getElementById("inputBox").value
//     console.log(inputdata);
// })


// updating element 

let ctr = 0
function counterC () {
    const number = document.querySelectorAll("h4")[1]
    // console.log(number.innerHTML)
    number.innerHTML = `${ctr++} go to gym`
    
}


// setInterval(() => {
//     counterC()
// }, 1000);


// delete element 

// removechild

// function deletetodo(index) {
//     const el = document.querySelector("h4" + index)
//     el.removeChild()
// }



// createElement
let ctrOn = 0
function addTodo() {
   
   
   const data = document.querySelector("input").value
const divElement = document.createElement("h4")
divElement.setAttribute("id", ctrOn)

const todoAppend = document.getElementById("todoId")
    divElement.innerHTML = `<div>${data}</div><button onClick ="clearTodo(+ ctrOn + )">delete</button>`
    todoAppend.appendChild(divElement)

    ctrOn = ctrOn + 1
}


// function clearTodo() {
//     const elem
    
    
// }