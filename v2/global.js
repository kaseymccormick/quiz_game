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


// i'd like to  make this a false so can use falsey logic later but it's a tangled web at the moment//
function is_correct_answer(answer_text){
  if (answer_text === "d")
 
  return true 
    // i want to do return var correct=true but it breaks the code above
  
}

var correct = "true" // trying to see if can set variable to true force the thing to work

function update_question_result(correct){
  if ( correct === "true"){ //unexpected identifier likely correct
  var result = document.getElementById("question_result");
  result.innerText = ("Correct!");

}else{

  var result = document.getElementById("question_result");
  result.innerText = ("Sorry, guess different next time.");
}
}

function process_answer_submission(){
  var user_answer = given_answer();
  update_question_result(is_correct_answer(user_answer));
}

var optFour = document.getElementById("fourth");
optFour.innerText = ("D. Has two children");
<button id="submitter" onclick="process_answer_submission()">Try it</button>
    <button id="submitter">
    </button>

Now we want that function to run whenever button#submitter is clicked. You might need to do some research to figure this out. Hint: What you're trying to do here is attach an "event handler" to the button. The "event" is "click". So you're trying to define how the button handles being clicked. Specifically, you're trying to say that the behavior of the button, when it's clicked, should be as described in the process_answer_submission function.

tried below
given_answer()
"D"
var answer_text = given_answer().toLowerCase();
undefined
answer_text
"d"
is_correct_answer(answer_text)
true
correct
undefined
correct = "true"
"true"
update_question_result(correct)
undefined
document.getElementById("submitter")
<button id=​"submitter">​
    ​</button>​
bttn = document.getElementById("submitter")
<button id=​"submitter">​
    ​</button>​
bttn.innerHTML = <button id="submitter" onclick="process_answer_submission()">Try it</button>
VM884:2 Uncaught SyntaxError: Unexpected token <
    at Object.InjectedScript._evaluateOn (<anonymous>:895:140)
    at Object.InjectedScript._evaluateAndWrap (<anonymous>:828:34)
    at Object.InjectedScript.evaluate (<anonymous>:694:21)InjectedScript._evaluateOn @ VM486:895InjectedScript._evaluateAndWrap @ VM486:828InjectedScript.evaluate @ VM486:694
bttn.innerHTML = onclick="process_answer_submission()"
"process_answer_submission()"

errored. out of capacity getting sleep.

///////EVERYTHING below KILLS the above///////////////////////////////

// if (condition) {
//     var grade = ("correct")
//   block of code to be executed if the condition is true
// } else {
//     var grade =("incorrect")
//     block of code to be executed if the condition is false
// }
//
//
// //http://stackoverflow.com/questions/11034997/how-can-i-conditionally-define-a-function-in-javascript//
// if ( is_correct_answer ) {
//   function is_correct_answer(answer_text){
//     if (answer_text !== "d")
//
//     return false
//
//   };
// }
//
//
// if (false) {
//     var foo = function () {
//         alert("Foo");
//     };
// }
// foo(); //TypeError: undefined is not a function
//
// // the below kills the above var opt etc from working. i've tried it here and above the is_correct_answer function. still kills the above. kills it inside of the scope of onload above is_correct_answer. Kills inside the scope but in this spot too. :(
// // if false(y) go to else
// // if is_correct_answer(answer_text)
// // {
// //     var response = ("correct!");
// // }
// // else
// // {
// //   var response = ("not the correct answer");
// // }
// //
// // }//
         