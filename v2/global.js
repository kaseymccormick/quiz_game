//to get css to load first doing window.onload
window.onload = function(){
  // All the rest of your Javascript code
 //< put that on the outside of EVERYTHING

var questions = ["Which is not true about Dr. Suess?", "What phrase is from Green Eggs and Ham? ", "Which Dr. Suess story does not have a movie?", "Which is not a Dr. Suess book?"];

var question = document.getElementById("question");
question.innerText = (questions[0]);

var optOne = document.getElementById("first");
optOne.innerText = ("A. Given name is Theodore Geisel");

var optTwo = document.getElementById("second");
optTwo.innerText = ("B. Political Cartoonist");

var optThree = document.getElementById("third");
optThree.innerText = ("C. Born March 2nd");

var optFour = document.getElementById("fourth");
optFour.innerText = ("D. Has two children");


}