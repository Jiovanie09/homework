var username = document.getElementById("username");
var saveScoreBtn = document.getElementById("saveScorebtn");
var finalScore = document.getElementById("finalScore");
var mostRecentScore=localStorage.getItem("mostRecentScore");

var highScores = JSON.parse(localStorage.getItem("highScores") || []

var maxHighScores = 5;
console.log(highScores);
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", function(){
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = function(e){
    e.preventDefault();

    var score = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    };


    highScores.push(score);
    
    highScores.sort((a, b) => b.score - a.score);
    
 highScores.splice(5);

 localStorage.setItem("highScores", JSON.stringify(highScores));
window.location.assign("/");
 
};