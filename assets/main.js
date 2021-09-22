var startButton = document.querySelector(".start");
var timerCountEl = document.querySelector(".timerCount");
var questionEl = document.querySelector(".question");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var timerCount = 60;
var userAnswer;
var finalScore = document.querySelector(".Score");
var main = document.getElementById("main");
var i = 0;
var userInt;
var timeInterval1;
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
    question: "Boolien stores what type of data",
    answers: {
        a: "String",
        b: "numbers",
        c: "true/false",
        d: "object",
    },
    correctAnswer: "true/false"
}
var question3 = {
    question: "functions are wrapped in which of the following",
    answers: {
        a: "[  ]",
        b: "{  }",
        c: '"  "',
        d: "(  )",
    },
    correctAnswer: "{ }"
}
var question4 = {
    question: "which of the following is the notation for is exactly equal to",
    answers: {
        a: "==",
        b: "||",
        c: "!==",
        d: "===",
    },
    correctAnswer: "==="
}
var question5 = {
    question: "Question 5",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var question6 = {
    question: "Question 6",
    answers: {
        a: "a",
        b: "b",
        c: "c",
        d: "d",
    },
    correctAnswer: "a"
}
var questions = [question1, question2, question3, question4, question5, question6];

function startGame() {
    document.getElementById("Start").style.visibility = "hidden";
    document.getElementById("answerChoices").style.visibility = "visible";
    setTime();
    setQuestion();
}
function setTime() {
        timeInterval1 = setInterval(function () {
        timerCount--;
        timerCountEl.textContent = timerCount;
        checkGame();
    }, 1000)
    return
}
function setQuestion() {
    document.getElementById("question").textContent = questions[i].question;
    document.getElementById("answer1").textContent = questions[i].answers.a;
    document.getElementById("answer2").textContent = questions[i].answers.b;
    document.getElementById("answer3").textContent = questions[i].answers.c;
    document.getElementById("answer4").textContent = questions[i].answers.d;
}
function answerCheck() {
    if (i < 6) {

        if (userAnswer === questions[i].correctAnswer) {
            document.getElementById("correctIncorect").textContent = "Correct✅";
            i++;
            checkGame()
            console.log(i);
        }
        else {
            document.getElementById("correctIncorect").textContent = "Incorect❌";
            i++;
            timerCount = timerCount - 10;
            console.log(i);
            checkGame()
        }
        setQuestion();
    }
    return
}
function storeAnswer1() {
    userAnswer = document.getElementById("answer1").textContent;
    answerCheck();
}
function storeAnswer2() {
    userAnswer = document.getElementById("answer2").textContent;
    answerCheck();
}
function storeAnswer3() {
    userAnswer = document.getElementById("answer3").textContent;
    answerCheck();
}
function storeAnswer4() {
    userAnswer = document.getElementById("answer4").textContent;
    answerCheck();
}
function checkGame(){
    if (timerCount <= 0 || i === 5) {
        clearInterval(timeInterval1);
        if (timerCount < 0) {
            timerCount = 0
        }
        main.remove();
        document.getElementById("gameOver").style.visibility = "visible";
        finalScore.textContent = "Final Score " +timerCount;
    }
}
startButton.addEventListener("click", startGame);
answer1El.addEventListener("click", storeAnswer1);
answer2El.addEventListener("click", storeAnswer2);
answer3El.addEventListener("click", storeAnswer3);
answer4El.addEventListener("click", storeAnswer4);
