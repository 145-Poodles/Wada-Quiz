let health, level = 0;

// Button that listens for clicks to initiate game.
let startGame = document.querySelector('.begin');

// HTML elements for displaying the questions in.
let body = $('body');
let question = document.querySelector('.question');
let choices = $('.choices');

// Paths for answer feedback.
let correct = '../images/correct.png;'
let wrong = '../images/red.png';

// If the player has used a button, disable it so
// that he cant use it twice in a row by mistake
let chosenAnAnswer = false;

function pickAnswer() {
    let that = $(this);
    if (that.text() == levels[level].answer) {
        body.append('<img class="correct" src="./images/correct.png"/>');
        let correctImage = $('.correct');

        // Disable the button after its clicked
        $(that).off();
        chosenAnAnswer = true;
        setTimeout(function() {
            correctImage.remove();
            chosenAnAnswer = false;
        }, 700);
    } else {
        body.append('<img class="wrong" src="./images/wrong.png"/>');
        let wrongImage = $('.wrong');
        $(that).off();
        chosenAnAnswer = true;
        setTimeout(function() {
            wrongImage.remove();
            chosenAnAnswer = false;
        }, 700);
    }
}

$(document).ready(function() {
    $(startGame).on('click', function() {
        // Pick the question and choices object from the objects script
        question.textContent = `${levels[level].question}`;
        for (let i = 0; i < levels[level].choices.length; i++) {
            choices.append(`<p>${levels[level].choices[i]}</p>`);
        }
        // Change the background and move the question prompt to the display.
        $('article').css({ 'z-index': 1000, 'background': `url(${levels[level].backgroundPath})`});
        $('article>.prompt').css({'background': 'url("./images/lobby.png") no-repeat'});

        // Enable the button at first before disabling it after a click
        $('.choices > p').on('click', pickAnswer);
    });
    if (chosenAnAnswer) {
        $('.choices > p').off();
    } else {
        $('.choices > p').on('click', pickAnswer);
    }
    // for (let i = 0; i < choicesButtons.length; i++) {
    //     choicesButtons[i].addEventListener('click', function() {
    //         if (choicesButtons[i].textContent == levels[level].answer) {
    //             body.append('<img class="right" src="../images/correct.png"/>');
    //             let correctImage = querySelector('.right');
    //             console.log('ey');
    //             setTimeout(function() {
    //                 correctImage.remove();
    //             }, 1000);
    //         } else {
    //             console.log('ey');
    //             body.append('<img class="wrong" src="../images/wrong.png"/>');
    //             let wrongImage = querySelector('.wrong');
    //             setTimeout(function() {
    //                 wrongImage.remove();
    //             }, 1000);
    //         }
    //     });
    // }
});
