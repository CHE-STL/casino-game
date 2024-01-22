let age = prompt("There is an age restriction on the Casino what is your age ?")
  if (age < 24){
    age = alert("YOU DO NOT MEET THE AGE REQUIREMENT LEAVE NOW !!!")
   }else{ age= alert(" Enjoy the virtual casino")} 



function die1(){const firstRoll=  Math.floor(Math.random()*6)+1
  document.getElementById(die1)
 console.log('You have rolled a,',{firstRoll} )
 
  }

    
   
    const secondRoll = Math.floor(Math.random()*6)+1
   console.log(secondRoll)

   const totalScore = (firstRoll + secondRoll)
   console.log(totalScore)
   if (totalScore >6 && totalScore <8 ){
   console.log("WINNER!!!")
}else if (totalScore >10 && totalScore <12 ){
    console.log("WINNER!!!") 
}else if (totalScore > 1 && totalScore < 4){
    console.log("YOU LOSE!!!")
} else if  (totalScore > 11 && totalScore < 13){
    console.log ("YOU LOSE!!!")
}
  



