let health, level = 0;

// Button that listens for clicks to initiate game.
let startGame = document.querySelector('.begin');

// HTML elements for displaying the questions in.
let body = $('body');
let question = document.querySelector('.question');
let promptQuestion = $('.prompt > h2');
let choices = $('.choices');

function pickAnswer() {
    let that = $(this);
    if (that.text() == levels[level].answer) {
        body.append('<img class="correct" src="./images/correct.png"/>');
        let correctImage = $('.correct');
        // Go to the next questions index in the questions object.
        level++;

        /* Reset the values inside the dom elements
        after the question is answered correctly
        to the new ones. */
        promptQuestion.empty();
        choices.empty();
        updateQuestion();

        setTimeout(function() {
            correctImage.fadeOut(300);
        }, 700);
    } else {
        body.append('<img class="wrong" src="./images/wrong.png"/>');
        let wrongImage = $('.wrong');

        // Disable the button after its clicked
        $(that).off();
        setTimeout(function() {
            wrongImage.fadeOut(300);
        }, 700);
    }
}

function updateQuestion() {
    /* Acquire question headings, choices and backdrop
    from the array of objects that contain the questions
    in the questions.js */
    $('article').css({'background': `url(${levels[level].backgroundPath}`});
    question.textContent = `${levels[level].question}`;
    for (let i = 0; i < levels[level].choices.length; i++) {
        choices.append(`<p>${levels[level].choices[i]}</p>`);
    }

    // If there are only two answers to pick from,
    // I change their css to fit properly in the prompt.
    if ($('.choices').children().length == 2) {
        $('.choices > p').css({
            'margin': '0px 3px',
            'padding': '5px',
            'width': '259px'
        });
    } else if ($('.choices').children().length == 4) {
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

        // Change the background and move the question prompt to the display.
        $('article').css({ 'z-index': 1000, 'background': `url(${levels[level].backgroundPath})`});
        $('.prompt').css({'background': 'url("./images/lobby.png") no-repeat'});
    });
});
