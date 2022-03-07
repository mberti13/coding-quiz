var score = 0;
var time = 60;
var questions = [
    {
    number: 1,
    title: "Inside which HTML element do we put the JavaScript",
    choices: ["<javascript>","<js>", "<script>","<scripting>"],
    answer: "<script>"
},
{
    number: 2,
    title: "What is the correct JavaScript syntax to write 'Hello World'?",
    choices: ["response.write('Hello World')","'Hello World'", "document.write('Hello World')","('Hello World')"],
    answer: "document.write('Hello World')"
},
{
    number: 3,
    title: "How do you create a function?",
    choices: ["call myFunction()","myFunction()", "call function myFunction","Call.myFunction()"],
    answer: "myFunction()"
},
{
    number: 4,
    title: "How do you write a conditional statement for executing some statements only if 'i' is equal to 5?",
    choices: ["if i==5 then","if i=5", "if i=5 then","if (i==5)"],
    answer: "if (i==5)"
}
]
var questionIndex = 0;
var questionNumber = document.querySelector("#progressText");
var questionEl = document.querySelector("#question");
var choiceAEl = document.querySelector("#choice1");
var choiceBEl = document.querySelector("#choice2");
var choiceCEl = document.querySelector("#choice3");
var choiceDEl = document.querySelector("#choice4");
var timer = document.querySelector("#timer");
var listName = document.querySelector("#name-list");
var listScore = document.querySelector("#score-list");
var timerInterval = setInterval(function(){
    time--;
    timer.textContent = time + " seconds remaining";
    if(time < 1){
        saveScore();

    }
},1000)

//Sets Question for user to answer
var setQuestion = function(){
    questionNumber.textContent = "Question #" + questions[questionIndex].number;
    questionEl.textContent = questions[questionIndex].title;
    choiceAEl.textContent = questions[questionIndex].choices[0];
    choiceBEl.textContent = questions[questionIndex].choices[1];
    choiceCEl.textContent = questions[questionIndex].choices[2];
    choiceDEl.textContent = questions[questionIndex].choices[3];
    choiceAEl.addEventListener("click", checkAnswer)
    choiceBEl.addEventListener("click", checkAnswer)
    choiceCEl.addEventListener("click", checkAnswer)
    choiceDEl.addEventListener("click", checkAnswer)
}

// Progress Bar Movement
var i= 0;
    function progressBar(){
    if(i===0){
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 1;
        var id = setInterval(frame, 600 )
        function frame(){
            if(width>=100){
                clearInterval(id);
                i = 0;
            }else{
                width++
                elem.style.width = width + "%";
            }
        }
    }
}

//Verifies Answer chosen is correct
var checkAnswer = function(event){
    var correctAnswer = questions[questionIndex].answer;
    var userAnswer = event.target.innerText;
    if(correctAnswer === userAnswer){
        alert("You are correct!");
        score ++;
        
    }else{
        alert("You are incorrect!");
    }
    questionIndex ++;
    if(questionIndex < questions.length){
        setQuestion();
        questionNumber++;
    }else{
        saveScore();

    }
}
// Saves Score and Name to localStorage
var saveScore = function(){
    clearInterval(timerInterval);
    var playerName = prompt("What is your name?");
    if(!playerName){
        alert("You didn't enter a name!");
    }
    alert("Game Over! You ended with a score of " + score + " " + playerName);
    var playerData = JSON.parse(localStorage.getItem("playerData")) || [];
    var playerScoreData = {
        name: playerName,
        score: score
    };
    playerData.push(playerScoreData);
    localStorage.setItem("playerData", JSON.stringify(playerScoreData)) || [];

    viewScores();
    
}

var viewScores = function(){
    if(confirm("Would you like to view High Scores?")== true){
        window.location.href="highscore.html";
    }else{
        alert("Thanks for playing! Come back soon!");
    }
};
//Create Order for Score List

setQuestion();
progressBar();
