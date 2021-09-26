console.log('hello')
var timerInterval;
var secondsLeft = 31
var timeEl = document.querySelector("#time")

// TODO: timer begins at 30s and counts down per 1000ms --> if userAnswer is incorrect will subtract 10s  --> if questions finish timer ends run displayScore --> OR if timer ends run displayScore 

// TODO: function displayScore -->  prompt("Please enter your initials") --> localStorage.set userInitials and localStorage.get userScore and userInitials --> and winnersAndLosers()
// TODO: function winnersAndLosers --> if userScore > pastUserScore[0] then prepend() --> else for loop until find pastUserScore that is lower and prepend()

// TODO: function quizQuestions --> change h2 to questionTitle and createElement("li") for each question option per question --> ol.append("li")x4 --> click events

// TODO: start button click to begin quizQuestions and timer
document.querySelector("#startBtn").addEventListener("click", function(){
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft + " seconds left"
    }, 1000);
    quizQuestions();
}
)