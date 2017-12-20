let goodPoints = 0, badPoints = 0, level = 0;

// Button that listens for clicks to initiate game.
let startGame = document.querySelector('.begin');

// HTML elements for displaying the questions in.
let body = $('body');
let question = document.querySelector('.question');
let score = document.querySelector('.score');
let mistakes = document.querySelector('.mistakes');
let promptQuestion = $('.prompt > h2');
let choices = $('.choices');
let quiz = $('.quiz');
let prompt = $('.prompt');

function pickAnswer() {
    let that = $(this);
    if (that.text() == levels[level].answer) {
        // Display the popup for picking the right answer.
        body.append('<img class="correct" src="./images/correct.png"/>');
        let correctImage = $('.correct');

        // Go to the next questions index in the questions object.
        level++;
        goodPoints++;

        /* Reset the values inside the dom elements
        after the question is answered correctly
        to the new ones. */
        promptQuestion.empty();
        choices.empty();
        updateQuestion();

        setTimeout(function() {
            correctImage.fadeOut(300, function() {
                this.remove();
            });
        }, 700);
    } else {
        // Increment the mistakes when the
        // answer is wrong.
        badPoints++;

        // Display the popup for picking the wrong answer.
        body.append('<img class="wrong" src="./images/wrong.png"/>');
        let wrongImage = $('.wrong');

        // Disable the button after its clicked
        $(that).off();
        setTimeout(function() {
            wrongImage.fadeOut(300, function() {
                this.remove();
            });
        }, 700);
    }
}

function updateQuestion() {
    // Updating the counters
    score.textContent = `Score: ${goodPoints}`;
    mistakes.textContent = `Mistakes: ${badPoints}`;

    /* Acquire question headings, choices and backdrop
    from the array of objects that contain the questions
    in the questions.js */
    quiz.css({'background': `url(${levels[level].backgroundPath}`});
    question.textContent = `${levels[level].question}`;

    if (typeof levels[level].choices === 'undefined') {
        score.remove();
        mistakes.remove();
        choices.append(`Thank you for playing my quiz <3! You have got a total of <strong>${goodPoints}</strong> points\n
            and <strong>${badPoints}</strong> mistake/s. I hope you learned a lot!`).css(
                { 'font-size': '19px', 'text-align': 'center' });
    } else {
        for (i = 0; i < levels[level].choices.length; i++) {
            choices.append(`<p>${levels[level].choices[i]}</p>`);
        }
    }

    // If there are only two answers to pick from,
    // I change their css to fit properly in the prompt.
    if (choices.children().length == 2) {
        $('.choices > p').css({
            'margin': '0px 3px',
            'padding': '5px',
            'width': '259px'
        });
    } else if (choices.children().length == 4) {
        $('.choices > p').css({
            'margin': '0px 3px',
            'padding': '5px',
            'width': '120px'
        });
    }
    // Make sure the event listeners stays up-to-date
    // with the new information imported above.
    $('.choices > p').on('click', pickAnswer);
}

$(document).ready(function() {
    $(startGame).on('click', function() {
        // Pick the question and choices object from the objects script.
        updateQuestion();

        // Initiate the scores window
        $('.scores').css({'display': 'block'});

        // Change the background and move the question prompt to the display.
        quiz.css({ 'z-index': 1000, 'background': `url(${levels[level].backgroundPath})`});
        prompt.css({'background': 'url("./images/lobby.png") no-repeat'});
    });
});
