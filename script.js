// defines needed global variables
var timerInterval, winnerScores;
var x = 0;
var score = 0;
var secondsLeft = 40;
var olEl = document.querySelector("#multipleChoice");
var scoreEl = document.querySelector("#scoreBoard");
var timeEl = document.querySelector("#time");
var h2El = document.querySelector("#question");
var h3El = document.querySelector("#scores");
var startBtn = document.querySelector("#startBtn");
var submissionForm = document.querySelector("#yourName");
var playAgain = document.querySelector("#playAgain");
var viewHighScores = document.querySelector("#viewHighScores");
var highScoreBoard = document.querySelector("#highScoreCount");
var highScores = [];
var myObj = {};
var nameInput = document.querySelector("#name");
var questionsArray = [
  {
    question: "When was the last time the Mariners went to the playoffs?",
    choices: ["1995", "2017", "2001", "2011"],
    answer: "2001",
  },

  {
    question: "Which Mariner has NOT been inducted into the Hall of Fame?",
    choices: ["Ichiro Suzuki","Edgar Martinez","Randy Johnson","Rickey Henderson",],
    answer: "Ichiro Suzuki",
  },

  {
    question: "Who is the current manager of the Mariners?",
    choices: ["Lou Pinella","Dick Williams","Lloyd McLendon","Scott Servais"],
    answer: "Scott Servais",
  },

  {
    question:"How many pitchers did the Mariners use in a combined no-hitter against the Los Angeles Dodgers on June 8, 2012?",
    choices: ["4", "5", "6", "7"],
    answer: "6",
  },

  {
    question: "In 2020, which Mariner was named AL Rookie of the Year?",
    choices: ["Ty France", "Kyle Lewis", "Dylan Moore", "Mitch Haniger"],
    answer: "Kyle Lewis",
  },
];

// clears screen from unneeded HTML elements
playAgain.setAttribute("style", "display:none");
submissionForm.setAttribute("style", "display:none");

// stores information into the local storage and and then outputs it onto the page
function finalHighScores(){
    localStorage.setItem("highScoreLeaders", JSON.stringify(highScores));
    winnerScores = JSON.parse(localStorage.getItem("highScoreLeaders"));
    highScores = winnerScores;
    for (let i = 0; i < highScores.length; i++) {
        var myScoringName = highScores[i].name;
        var myScoringScore = highScores[i].score;
        var liScores = document.createElement("li");
        liScores.textContent = myScoringName + ": " + myScoringScore;
        highScoreBoard.appendChild(liScores);   
    }
}

// saves users name and score
submissionForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var nameText = nameInput.value.trim();
  if (nameText === "") {
    alert("Please enter your name");
    return;
  } else {
    highScores = JSON.parse(localStorage.getItem("highScoreLeaders")) || [];
    myObj["name"] = nameText;
    myObj["score"] = score;
    highScores.push(myObj);
    finalHighScores();
  }
});

// clearing the page and showing the submission form
function displayScore() {
  clearInterval(timerInterval);
  h2El.textContent = "High Scores";
  h3El.textContent = "Your score: " + score;
  scoreEl.textContent = " ";
  olEl.textContent = " ";
  submissionForm.setAttribute("style", "display:inline");
  playAgain.setAttribute("style", "display:inline");
}

function userChoice() {
  // checks the user's answers and takes action depending on answer
  if (this.innerHTML !== questionsArray[x].answer) {
    secondsLeft -= 5;
  } else {
    score += 20;
    scoreEl.textContent = "Score: " + score;
  }
  // will either display next question or clear interval and go to score page depending on what question the user is on
  if (x < questionsArray.length - 1) {
    x++;
    quizQuestions();
  } else {
    displayScore();
  }
}

// calls quiz questions from array and displays them to page along with appended corresponding multiple choice answers
function quizQuestions() {
    startBtn.setAttribute("style", "display:none");
    h2El.textContent = questionsArray[x].question;
    olEl.innerHTML = " ";
    for (let i = 0; i < questionsArray[x].choices.length; i++) {
        var quizChoice = questionsArray[x].choices[i];
        var liEl = document.createElement("li");
        liEl.classList.add("interactive");
        liEl.textContent = quizChoice;
        liEl.addEventListener("click", userChoice);
        olEl.append(liEl);
    }
}

// starts quiz with button click
document.querySelector("#startBtn").addEventListener("click", function () {
  timerInterval = setInterval(function () {
    if (secondsLeft > 0) {
      secondsLeft--;
      timeEl.textContent = "Timer: " + secondsLeft + " seconds left";
    } else if (secondsLeft <= 0) {
      displayScore();
    }
  }, 1000);
  quizQuestions();
});

// button to view highscore standings
viewHighScores.addEventListener("click", function(){
    clearInterval(timerInterval);
    h2El.textContent = "High Scores";
    scoreEl.textContent = " ";
    olEl.textContent = " ";
    playAgain.setAttribute("style", "display:inline");
    if(JSON.parse(localStorage.getItem("highScoreLeaders")!==null)){ 
        winnerScores = JSON.parse(localStorage.getItem("highScoreLeaders"));
        highScores = winnerScores;
        for (let i = 0; i < highScores.length; i++) {
            var myScoringName = highScores[i].name;
            var myScoringScore = highScores[i].score;
            var liScores = document.createElement("li");
            liScores.textContent = myScoringName + ": " + myScoringScore;
            highScoreBoard.appendChild(liScores);   
        }
    }
});

// button that will refresh the page so user can play again
playAgain.addEventListener("click", function () {
  window.location.reload();
});