var questions = document.getElementById("questions");
var choices = Array.from(document.getElementsByClassName("choice-text"));
var currentQuestion = {};
var acceptingAswers = true;
var score = 0;
var questionCounter = 0;
var availableQuestion = [];
var correctBonus = 10;
var maxQuestions = 3;
var questionCounterText = document.getElementById("questionCounter");
var scoreText = document.getElementById("score");


var questions = [
    {
        question: "Who was the last player to retire as a Spurs ?",
        choice1: "Tony Parker",
        choice2: "Manu G.",
        choice3: "Tim Duncan",
        choice4: "Bowen",
        answer: 1
    },
    {
        question: "How many seasons has Gregg Popovich coached the Spurs ?",
        choice1: "18",
        choice2: "23",
        choice3: "31",
        choice4: "22",
        answer: 4
    },
    {
        question: "How many titles do the San Antonio Spurs have ?",
        choice1: "4",
        choice2: "7",
        choice3: "5",
        choice4: "2",
        answer: 3
    }
];

startGame = function() {
    
questionCounter = 0;
score = 0;
availableQuestions = [...questions];

getNewQuestion();
};

getNewQuestion = function() {
    if(availableQuestions.length === 0 || questionCounter > maxQuestions){
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign("/end.html");
    }
    //will need a question counter to change as i go through questions.
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" +maxQuestions;
    var questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(function(choice) {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
 availableQuestions.splice(questionIndex, 1);
 acceptingAswers = true;
 };

 choices.forEach(function(choice) {
    choice.addEventListener("click", function(e){
        if(!acceptingAswers) return;

        acceptingAnswers = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"];

        var classToApply = "incorrect";
         if(selectedAnswer == currentQuestion.answer){
             classToApply= "correct";
         }
             if (classToApply==="correct"){
                 incrementScore(correctBonus);
         }
         selectedChoice.parentElement.classList.add(classToApply);
         // remove needs to be in the set timeout function and also get new question "works together good".//
         setTimeout(function(){
        selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();

         },1000);
    });

 });
incrementScore = function(num){
    score += num;
    scoreText.innerText =score;

}
startGame();