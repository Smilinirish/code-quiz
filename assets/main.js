var startButton = document.querySelector(".start");
var timerCountEl = document.querySelector(".timerCount");
var questionEl = document.querySelector(".question");
var answer1El = document.querySelector("answer1");
var timerCount = 10;
var timerCount2;
var question1 = {
    question: "Which of the following is NOT a primitive data type",
    answers: {
        a: "String",
        b: "Number",
        c: "Boolean",
        d: "Function",
    },
    correctAnswer: "Function"
}
var question2 = {
    question: "asdf",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var question3 = {
    question: "asdf",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var question4 = {
    question: "asdf",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var question5 = {
    question: "asdf",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var question6 = {
    question: "asdf",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var questions = [question1, question2, question3, question4, question5, question6];

console.log()



function startGame() {
    timerCount = 10
    SetPage();
    // setTime();
    setQuestion();
    storeAnswer();
}


function setTime() {
    var timeInterval1 = setInterval(function () {
        timerCount--;
        timerCountEl.textContent = timerCount;

        if (timerCount === 0) {
            clearInterval(timeInterval1);
            document.getElementById("questionAnswer").style.visibility = "hidden";
            prompt("Your Scoreed " + timerCount + " points. Please enter your initials");
        }
    }, 1000)
}
function SetPage() {
    document.getElementById("Start").style.visibility = "hidden";
    document.getElementById("question").style.visibility = "visible";
    document.getElementById("answer1").style.visibility = "visible";
    document.getElementById("answer2").style.visibility = "visible";
    document.getElementById("answer3").style.visibility = "visible";
    document.getElementById("answer4").style.visibility = "visible";
}

function setQuestion() {
    document.getElementById("question").textContent = question1.question;
    document.getElementById("answer1").textContent = question1.answers.a;
    document.getElementById("answer2").textContent = question1.answers.b;
    document.getElementById("answer3").textContent = question1.answers.c;
    document.getElementById("answer4").textContent = question1.answers.d;
}

function storeAnswer() {

}

// function answerCheck() {
//     answer1El.addEventListener("click", function () {
//         if (answer1El.textContent === question1.answers) {
//             document.querySelector("correctIncorect").textContent = "correct"
//         }
//         else {
//             document.querySelector("correctIncorect").textContent = "incorrect"
//         }
//     })
// }

startButton.addEventListener("click", startGame);
