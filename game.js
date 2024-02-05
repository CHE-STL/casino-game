// let age = prompt("There is an age restriction on the Casino what is your age ?")
//   if (age < 24){
//     age = alert("You DO NOT meet the age requirement for the Casino. If you choose to proceed the developer of this game will not be responsible for any obtrusive content")
//    }else{ age= alert(" Enjoy the virtual casino")} 


const firstRoll=  Math.floor(Math.random()*6)+1
const secondRoll = Math.floor(Math.random()*6)+1
const box1 = document.getElementById("rll1")
const btn1 = document.getElementById("btn1")
 const tScore = document.getElementById("totalScore")
const reaction = document.getElementById("end")

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
     btn2.addEventListener ('click',result,)

  function outcome(){
    if (  firstRoll+secondRoll >6 && firstRoll+ secondRoll < 8){
      reaction.innerHTML = ("WINNER!!!")
    }else if (firstRoll+secondRoll>10 && firstRoll+secondRoll<12 ){
      reaction.innerHTML = ("WINNER!!!") 
    }else if (firstRoll+secondRoll> 1 && firstRoll+secondRoll< 4){
      reaction.innerHTML = ("YOU LOSE!!!")
    }else if  (firstRoll+secondRoll> 11 && firstRoll+secondRoll< 13){
      reaction.innerHTML = ("YOU LOSE!!!")
  }else (reaction.innerHTML= ("ROLL AGAIN"))
 }

btn2.addEventListener('click',outcome)

    
//    console.log(secondRoll)

//    const result= (firstRoll + secondRoll)
//    console.log(totalScore)
//    if (result>6 && result<8 ){
//    console.log("WINNER!!!")

  



