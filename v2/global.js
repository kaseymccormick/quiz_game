var questions = ["Which is not true about Dr. Suess's?", "What phrase is from Green Eggs and Ham? ", "Which Dr. Suess story does not have a movie?", "Which is not a Dr. Suess book?"];
var score = 0

console.log(questions[0]);
console.log("A. Given name is Theodore Geisel"); 
console.log("B. Political Cartoonist");
console.log("C. Born March 2nd");
console.log("D. Has two children");

var answer_temp = prompt("The letter of the answer is?").toLowerCase(); 
console.log("user answered " + answer_temp)
if (answer_temp === "d"){
  alert("correct!")
  ++score
}
  else{
    console.log("Sorry that's not the answer.");
}


console.log(questions[1]);
console.log("A. Why do you sit there like that?");
console.log("B. I would not, could not, in a car.");
console.log("C. How I wish we had something to do!");
console.log("D. We did nothing at all");

var answer_temp = prompt("The letter of the answer is?").toLowerCase(); 
console.log("user answered " + answer_temp)
if (answer_temp === "b"){
  alert("correct!");
  ++score
}
  else{
    console.log("Sorry that's not the answer.");
}


console.log(questions[2]);
console.log("A. The Cat in The Hat.");
console.log("B. Green Eggs and Ham.");
console.log("C. Horton Hears A Who.");
console.log("D. The Lorax.");

var answer_temp = prompt("The letter of the answer is?").toLowerCase(); 
console.log("user answered " + answer_temp)
if (answer_temp === "b"){
  alert("correct!");
  ++score
}
  else{
    console.log("Sorry that's not the answer.");
}


console.log(questions[3]);
console.log("A. The Sneeches");
console.log("B. Horton Hears a Who");
console.log("C. The Zax");
console.log("D. If you give a mouse a cookie.");

var answer_temp = prompt("The letter of the answer is?").toLowerCase(); 
console.log("user answered " + answer_temp)
if (answer_temp === "d"){
  alert("correct!");
  ++score
}
  else{
    console.log("Sorry that's not the answer.");
}

alert("you answered " + score + " out of " + questions.length + " right for score of " +(score/questions.length * 100) + "%");







