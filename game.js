// let age = prompt("There is an age restriction on the Casino what is your age ?")
//   if (age < 24){
//     age = alert("You DO NOT meet the age requirement for the Casino. If you choose to proceed the developer of this game will not be responsible for any obtrusive content")
//    }else{ age= alert(" Enjoy the virtual casino")} 


const firstRoll=  Math.floor(Math.random()*6)+1
const secondRoll = Math.floor(Math.random()*6)+1
const box1 = document.getElementById("rll1")
const btn1 = document.getElementById("btn1")
 const tScore = document.getElementById("totalScore")
function die1(){
  box1.innerHTML =  firstRoll
 }
  
btn1.addEventListener('click', die1)

const box2 = document.getElementById("rll2")
const btn2 = document.getElementById("btn2") 

function die2(){
  box2.innerHTML = secondRoll 
  }
  btn2.addEventListener ('click',die2,)

  function result (){
    tScore.innerHTML = firstRoll+secondRoll
   }
     btn2.addEventListener ('click',result)
  //     let result = (+die1()) + (+die2())
//      console.log ({result})
   

  
    
//    console.log(secondRoll)

//    const totalScore = (firstRoll + secondRoll)
//    console.log(totalScore)
//    if (totalScore >6 && totalScore <8 ){
//    console.log("WINNER!!!")
// }else if (totalScore >10 && totalScore <12 ){
//     console.log("WINNER!!!") 
// }else if (totalScore > 1 && totalScore < 4){
//     console.log("YOU LOSE!!!")
// } else if  (totalScore > 11 && totalScore < 13){
//     console.log ("YOU LOSE!!!")
// }
  



