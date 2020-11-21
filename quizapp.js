// CREATOR : "thatdevHassan"
// version : 1.0.0


// importing packages
var read = require("readline-sync");
var chalk = require("chalk");

var score = 0;

////////function
function credentials(){
  var name = read.question("Enter you name? ");
  var age = read.question("Enter you age: ");


}




//////// function
function greet(){
  var greeting = `Welcome! pueblos(peoples)
  This javascript MCQS will test your knowledge! `
  console.log(greeting);

  var starterpack = `you can use the following commands:
  -s to start
  -q to quit`
  console.log(starterpack);
}





////////// function 
function rules(command){
  if (command === "-q"){
    console.log(chalk.red(`Exiting..... DONE!`))
    process.exit()
    }
    else if(command === "-s"){
    console.log(chalk.green("Starting......"))
    console.log("\n")
    credentials();
    looping();
    }else{
      console.log(chalk.red("Enter the right command"))
    }
}





/////// main funciton (5)
function quiz(question,rightAnswer){

  var userAnswer = read.question(question)
  
  if (rightAnswer === userAnswer) {
      console.log(chalk.green("WOW!! Write answer! "));
      score +=1
      console.log("Score: "+ score)
  
  }else{
      console.log(chalk.red.bold("lol you are a pro noob :)"));
  }
}


var main = [
  {question:`How many primitive datatypes are there in JavaScript:
  a.) 5 
  b.) 6 
  c.) 7
  d.) 8 
  ` ,
  answer:"b"},

  {question:`what is True about javascript?
  a.) compiled 
  b.) both
  c.) interpreted 
  d.) None of the above 
  ` ,
  answer:"c"},
  
  {question:`Is Null an object in javascript?            
  a.) No! No! 
  b.) Yes!
  c.) IDK 
  d.) None of the above
 `,
  answer:"b"},


  {question:`Total number of keywords in Javascript?            
  a.) 60 
  b.) 62
  c.) 63 
  d.) 64
 `,
  answer:"c"},


    {question:`Who built Javascript?            
  a.) Guido Van Rossum 
  b.) Kevin Mitnick
  c.) Linus Trovald
  d.) Brendan Eich
 `,
  answer:"d"}

]


//adding highscore feature

var highscore ={
    name: "Tanay",
    score: main.length-1
  }



////////// percentage function

function percentage(){

  console.log(chalk.green("Total percentage is: ") + chalk.red(score/main.length*100 +"%"));
  //adding logic
  console.log("Total correct " + score )

  if (score > highscore.score){
    console.log(chalk.green(`You just BROKE the record holded by ${highscore.name}`))
    console.log(`Highest score was ${highscore.score} by ${highscore.name}`)


  }else{
    console.log("you are close to breaking a record!")
    console.log(`Highest score is ${highscore.score} by ${highscore.name}`)
  }

}


// //// function to loop
function looping(){
  var i = 0;

  for (i; i<main.length; i++){
    quiz(chalk.yellow(main[i].question),main[i].answer)
    console.log("\n")
  }
}




/*

"Below is the logic section"

*/
greet()
rules(read.question("Enter the command: "))
console.log("\n")
percentage()