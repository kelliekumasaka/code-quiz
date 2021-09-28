var timerInterval;
var secondsLeft = 30;
var olEl = document.querySelector("#multipleChoice")
var timeEl = document.querySelector("#time");
var h2El = document.querySelector("#question");
var questionsArray = [   
    {question: "When was the last time the Mariners went to the playoffs?",
    choiceOne: "1995",
    choiceTwo: "2017",
    choiceThree: "2001",
    choiceFour: "2011",
    },

    {question:"Which Mariner has NOT been inducted into the Hall of Fame?", 
    choiceOne: "Ichiro Suzuki",
    choiceTwo: "Edgar Martinez", 
    choiceThree: "Randy Johnson",
    choiceFour: "Rickey Henderson"
    },

    {question: "Who is the current manager of the Mariners?",
    choiceOne: "Lou Pinella",
    choiceTwo:"Dick Williams",
    choiceThree:"Lloyd McLendon",
    choiceFour:"Scott Servais"
    },

    {question:"How many pitchers did the Mariners use in a combined no-hitter against the Los Angeles Dodgers on June 8, 2012?",
    choiceOne:"4",
    choiceTwo:"5",
    choiceThree:"6",
    choiceFour:"7"
    },

    {question: "In 2020, which Mariner was named AL Rookie of the Year?",
    choiceOne:"Ty France",
    choiceTwo:"Kyle Lewis",
    choiceThree:"Dylan Moore",
    choiceFour:"Mitch Haniger"
    },
]
// TODO: timer begins at 30s and counts down per 1000ms --> if userAnswer is incorrect will subtract 5s  --> if questions finish timer ends run displayScore --> OR if timer ends run displayScore 

// TODO: function displayScore -->  prompt("Please enter your initials") --> localStorage.set userInitials and localStorage.get userScore and userInitials --> and winnersAndLosers()
function displayScore(){

}

// TODO: function winnersAndLosers --> if userScore > pastUserScore[0] then prepend() --> else for loop until find pastUserScore that is lower and prepend()

// TODO: function quizQuestions --> calls the questionArray objects and run answerCheck function --> if correct
function quizQuestions(){
    for (let i=0; i < questionsArray.length; i++){
        var questionsOfQuestions = questionsArray[i].question;
        document.querySelector('#question').textContent=questionsOfQuestions;
    }
    for (let i = 0; i < questionsArray.length; i++) {
        var questionChoiceOne = questionsArray[i].choiceOne;
        var li1 = document.createElement("li");
        li1.textContent = questionChoiceOne;
        olEl.append(li1);
    }
    for (let i = 0; i < questionsArray.length; i++) {
        var questionChoiceTwo = questionsArray[i].choiceTwo;
        var li2 = document.createElement("li");
        li2.textContent = questionChoiceTwo
        olEl.append(li2);
    }

}


// TODO: start button click to begin quizQuestions and timer
document.querySelector("#startBtn").addEventListener("click", function(){
    timerInterval = setInterval(function() {
        if (secondsLeft > 0){    
            secondsLeft--;
            timeEl.textContent = "Timer: " + secondsLeft + " seconds left";
        }
        else if (secondsLeft ===0){
            displayScore();
        }
    }, 1000);
}
)
document.querySelector("#startBtn").addEventListener("click", function(){
    quizQuestions();
})