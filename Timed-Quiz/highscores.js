var highScoresList = document.getElementById('highScoresList')
var highScores = JSON.parse(localStorage.getitem("highScores")) || [];

highScores.map(function(score) {
    return '<li class="high-scores">${score.name}-${score.score}</li>';
})
.join("")