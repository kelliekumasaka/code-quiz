// defined needed global variables
var timerInterval;
var x = 0;
var score = 0;
var secondsLeft = 50;
var olEl = document.querySelector("#multipleChoice");
var scoreEl = document.querySelector("#scoreBoard")
var timeEl = document.querySelector("#time");
var h2El = document.querySelector("#question");
var h3El = document.querySelector("#scores")
var startBtn = document.querySelector("#startBtn")
var questionsArray = [   
    {question: "When was the last time the Mariners went to the playoffs?",
    choices: ["1995", "2017","2001","2011"],
    answer:"2001"
    },

    {question:"Which Mariner has NOT been inducted into the Hall of Fame?", 
    choices: ["Ichiro Suzuki","Edgar Martinez", "Randy Johnson","Rickey Henderson"],
    answer:"Ichiro Suzuki"
    },

    {question: "Who is the current manager of the Mariners?",
    choices: ["Lou Pinella","Dick Williams","Lloyd McLendon","Scott Servais"],
    answer:"Scott Servais"
    },

    {question:"How many pitchers did the Mariners use in a combined no-hitter against the Los Angeles Dodgers on June 8, 2012?",
    choices: ["4","5","6","7"],
    answer: "6"
    },

    {question: "In 2020, which Mariner was named AL Rookie of the Year?",
    choices: ["Ty France","Kyle Lewis","Dylan Moore","Mitch Haniger"],
    answer: "Kyle Lewis"
    },
]

function userChoice(){
    // checks the user's answers and takes action depending on answer
    if (this.innerHTML !== questionsArray[x].answer){
        secondsLeft-=5;
    }else{
        score+=20; 
        console.log(score);
        scoreEl.textContent = "Score: " + score;
    }
    // will either display next question or clear interval and go to score page depending on what question the user is on
    if (x < questionsArray.length-1) {
        x++;
        quizQuestions();
    }else{
        clearInterval(timerInterval);
        displayScore();
    }
}

// TODO: function displayScore -->  prompt("Please enter your initials") --> localStorage.set userInitials and localStorage.get userScore and userInitials --> and winnersAndLosers()
function displayScore(){
    console.log("hello");
    h2El.textContent = "High Scores";
    h3El.textContent = "Your score: " + score;
    scoreEl.textContent = ' ';
    
}

// TODO: function winnersAndLosers --> if userScore > pastUserScore[0] then prepend() --> else for loop until find pastUserScore that is lower and prepend()

// TODO: create restart button that clears screen and runs timer and quiz again

// calls quiz questions from array and displays them to page along with appended corresponding multiple choice answers
function quizQuestions(){
    h2El.textContent=questionsArray[x].question;
    olEl.innerHTML = " ";        
    for (let i = 0; i < questionsArray[x].choices.length; i++) {
        var quizChoice = questionsArray[x].choices[i];
        var liEl = document.createElement("li");            
        liEl.textContent = quizChoice;
        liEl.addEventListener("click", userChoice);
        olEl.append(liEl);
    }
}

// starts quiz with button click
document.querySelector("#startBtn").addEventListener("click", function(){
    timerInterval = setInterval(function() {
        if (secondsLeft > 0){    
            secondsLeft--;
            timeEl.textContent = "Timer: " + secondsLeft + " seconds left";
        }
        else if (secondsLeft<=0){
            clearInterval(timerInterval);
            displayScore();
        }
    }, 1000);
    quizQuestions();
}
)