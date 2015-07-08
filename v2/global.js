//to get css to load first doing window.onload
//anoynomous function that only runs once, there's no other way to call it it doesn't have a 'proper' name
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


function given_answer(){
  return document.getElementById("answer").value;
}

var answer_text = given_answer().toLowerCase();
 
console.log(answer_text)



function is_correct_answer(answer_text){
  if (answer_text !== "d")
 
  return false 
  
}

// the below kills the above var opt etc from working. i've tried it here and above the is_correct_answer function. still kills the above. kills it inside of the scope of onload above is_correct_answer. Kills inside the scope but in this spot too. :(
// if false(y) go to else
// if is_correct_answer(answer_text)
// {
//     var response = ("correct!");
// }
// else
// {
//   var response = ("not the correct answer");
// }
//
// }
    


     