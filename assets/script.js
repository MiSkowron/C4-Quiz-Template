var quizTimer = 11;
var quizScore = 0;
var quizBtn = document.querySelector('#startQuiz');
var timer = document.querySelector('#quizTimer');
var score = document.querySelector('#quizScore');
var question = document.querySelector('#Question');
var answer1 = document.querySelector('#a1');
var answer2 = document.querySelector('#a2');
var answer3 = document.querySelector('#a3');
var answer4 = document.querySelector('#a4');
var info = document.querySelector('#info');
var infoRight = document.querySelector('#infoRight');
var infoWrong = document.querySelector('#infoWrong');
var lastScore = document.querySelector('#lastScore');
// onclick quiz will start
function quizStart() {

    var quizTimer = 11;

var quizInterval = setInterval(function() {
    
    if (quizTimer <= 0){
        quizEnd()
}
// if time expires or Q5 is answered quiz will end
function quizEnd(){
    clearInterval(quizInterval);
        infoRight.textContent = "";
        infoWrong.textContent = "";
        info.textContent = "Quiz Over. Your score was " + quizScore + "!"; 
        alert("Time's up!");
        alert("You scored " + quizScore +"!");
        var saveScore = prompt('Please enter your initials to save your score.');
        window.localStorage.setItem(saveScore, quizScore);
        window.localStorage.getItem(saveScore, quizScore);
        lastScore.textContent = "Last score was: " + saveScore + "   " + quizScore;

}

quizTimer--;
timer.textContent = quizTimer;
}, 1000);
score.textContent = quizScore;

displayQuestion1();
}

function displayQuestion1() {
    question.textContent = '1. This is a test question'
    answer1.textContent = 'A. This is a test answer'
    answer2.textContent = 'B. This is a test answer'
    answer3.textContent = 'C. This is the correct test answer'
    answer4.textContent = 'D. This is a test answer'
// incorrect answers will subtract 5s from timer and display "incorrect" status
    answer1.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        displayQuestion2();
    });
    
    answer2.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        displayQuestion2();
    });
    // correct answers will add 10 to score and display "corret" status
    answer3.addEventListener('click',function() {
        quizScore = quizScore +10;
        infoRight.textContent = "Correct";
        score.textContent = quizScore;
        displayQuestion2();
    });
    
    answer4.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        displayQuestion2();
    });
}
// each question is a function to be called after answering the previous question 
function displayQuestion2(){
    question.textContent = '2. This is another test question'
    answer1.textContent = 'A. This is a test answer'
    answer2.textContent = 'B. This is the correct test answer'
    answer3.textContent = 'C. This is another test answer'
    answer4.textContent = 'D. This is another test answer'

    answer1.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion3();
    });
    
    answer2.addEventListener('click',function() {
        quizScore = quizScore +10;
        infoRight.textContent = "Correct";
        infoWrong.textContent = "";
        score.textContent = quizScore;
        displayQuestion3();
    });
    
    answer3.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion3();
    });
    
    answer4.addEventListener('click',function() {
        quizTimer = quizTimer -1;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion3();
    });

}

function displayQuestion3(){
    question.textContent = '3. This is another test question'
    answer1.textContent = 'A. This is another test answer'
    answer2.textContent = 'B. This is another test answer'
    answer3.textContent = 'C. This is another test answer'
    answer4.textContent = 'D. This is the correct test answer'

    answer1.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion4();
    });
    
    answer2.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion4();
    });
    
    answer3.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion4();
    });
    
    answer4.addEventListener('click',function() {
        quizScore = quizScore +10;
        infoRight.textContent = "Correct";
        infoWrong.textContent = "";
        score.textContent = quizScore;
        displayQuestion4();
    });
}

function displayQuestion4(){
    question.textContent = '4. This is another test question'
    answer1.textContent = 'A. This is the correct test answer'
    answer2.textContent = 'B. This is another test answer'
    answer3.textContent = 'C. This is another test answer'
    answer4.textContent = 'D. This is another test answer'

    answer1.addEventListener('click',function() {
        quizScore = quizScore +10;
        infoRight.textContent = "Correct";
        infoWrong.textContent = "";
        score.textContent = quizScore;
        displayQuestion5();
    });
    
    answer2.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion5();
    });
    
    answer3.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion5();
    });
    
    answer4.addEventListener('click',function() {
        quizTimer = quizTimer -5;
        quizScore = quizScore;
        infoWrong.textContent = "Incorrect";
        infoRight.textContent = "";
        displayQuestion5();
    }); 
}

function displayQuestion5(){
    question.textContent = '5. This is another test question'
    answer1.textContent = 'A. This is the correct test answer'
    answer2.textContent = 'B. This is another test answer'
    answer3.textContent = 'C. This is another test answer'
    answer4.textContent = 'D. This is another test answer'

    answer1.addEventListener('click',function() {
        quizScore = quizScore +10;
        infoRight.textContent = "Correct";
        score.textContent = quizScore;
        quizTimer = 0;
        quizEnd()
    });
    
    answer2.addEventListener('click',function() {
        quizTimer = 0;
        infoWrong.textContent = "Incorrect";
        quizEnd()
        
    });
    
    answer3.addEventListener('click',function() {
        quizTimer = 0;
        infoWrong.textContent = "Incorrect";
        quizEnd()
        
    });
    
    answer4.addEventListener('click',function() {
        quizTimer = 0;
        infoWrong.textContent = "Incorrect";
        quizEnd()
        
    }); 
}


    quizBtn.addEventListener('click', quizStart);




