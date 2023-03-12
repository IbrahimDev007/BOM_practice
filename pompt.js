
// added function to add 200muse prompt 
function add200() {
    let userInput = prompt("Please enter a number:");
    let number = parseInt(userInput);

    if (!isNaN(number)) {
        let result = number + 200;
        alert("The result is: " + result);
    } else {
        alert("Please enter a valid number.");
    }
}
//clear local storage
const clearStore=()=>{
    localStorage.clear()
}
//set localstorage data
const setkey=()=>{
  const nameValue=document.getElementById('userName').value;
  const ageValue=document.getElementById('userAge').value;
  localStorage.setItem('name',nameValue);
  localStorage.setItem('age',ageValue);
}
// remove key data 
const removeKey=()=>{
localStorage.removeItem('name')
localStorage.removeItem('age')
}

// set as object 
const setObj=()=>{
    const nameValue=document.getElementById('userName').value;
    const ageValue=document.getElementById('userAge').value;
   const obj={
    name:nameValue,
    age:ageValue
   }
localStorage.setItem('obj',JSON.stringify(obj));

  }
// Counter with local Storage 

const count=()=>{
let num=localStorage.getItem('number');
num++;
localStorage.setItem('number',num);
document.getElementById('num').innerText=localStorage.getItem('number');
}
// show count 
 const show=()=>{
    document.getElementById('num').innerText=localStorage.getItem('number');
 }
const reSet=()=>{
    localStorage.setItem('number',0)
    document.getElementById('num').innerText=localStorage.getItem('number');
}
 show();