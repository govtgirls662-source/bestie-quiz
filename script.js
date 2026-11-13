let score = 0;

// START QUIZ BUTTON
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {
        window.location.href = "love.html";
    });
}


// CHECK ANSWER
function checkAnswer(button, isCorrect, questionNumber) {

    const feedback = document.getElementById("feedback" + questionNumber);
    const nextButton = document.getElementById("next" + questionNumber);

    // Disable all options after selecting an answer
    document.querySelectorAll("#question" + questionNumber + " .option")
        .forEach(option => {
            option.disabled = true;
        });

    // Show feedback
    if (isCorrect) {
        feedback.textContent = "Correct! You know me so well! ♡";
        feedback.style.color = "green";
        score++;
    } else {
        feedback.textContent = "Oops! Wrong answer! ♡";
        feedback.style.color = "red";
    }

    // Show Next Question button
    nextButton.style.display = "block";
}


// MOVE TO NEXT QUESTION
function nextQuestion(questionNumber) {

    // Hide current question
    document.getElementById("question" + questionNumber).style.display = "none";
    if (questionNumber < 10) {

        // Show next question
        document.getElementById("question" + (questionNumber + 1)).style.display = "block";

    } else {

        // Go to result page
        window.location.href = "result.html?score=" + score;

    }
}