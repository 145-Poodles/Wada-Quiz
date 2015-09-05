var health = 2;
$(document).ready(function() {
    $('.first').show();
    $('.first>#answers>p').not(document.getElementById('answer')).click(function() {
        health -= 1;
        if (health <= 0) {
            $('#wrapper>img:nth-of-type(2)').show();
        };
    });
    $('.first>#answers>#answer').click(function() {
        $('.first').remove();
        $('.second').show();
        $('.second>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
            };
        });
    });
    $('.second>#answers>#answer').click(function() {
        $('.second').remove();
        $('.third').show();
        $('.third>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
            };
        });
    });
    $('.third>#answers>#answer').click(function() {
        $('.third').remove();
        $('.fourth').show();
        $('.fourth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
            };
        });
    });
    $('.fourth>#answers>#answer').click(function() {
        $('.fourth').remove();
        $('.fifth').show();
        $('.fifth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
            };
        });
    });
    $('.fifth>#answers>#answer').click(function() {
        $('.fifth').remove();
        $('.sixth').show();
        $('.sixth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
            };
        });
    });
    // $('article>#answers>p').not(document.getElementById('answer')).click(function() {
    //     health -= 1;
    //     console.log(health);
    //     if (health <= 0) {
    //         $('#wrapper>img:nth-of-type(2)').show();
    //     };
    // });


});
// var QACount = 1;
// $(document).ready(function() {
//     if (QACount == 1) {
//         $('.first').show();
//         $('.first>#answers>.answer').click(function() {
//             $('.first').hide();
//             $('.second').show();
//             QACount += 1;
//             console.log(QACount);
//             if (QACount == 2) {
//                 $('.second>#answers>.answer').click(function() {
//                     $('.second').hide();
//                     $('.third').show();
//                     QACount += 1;
//             console.log(QACount);
//                 });
//             };
//             if (QACount == 3) {
//                 $('.third>#answers>.answer').click(function() {
//                     $('.third').hide();
//                     $('.fourth').show();
//                     QACount += 1;
//             console.log(QACount);
//                 });
//             };
//             if (QACount == 4) {
//                 console.log('You win!');
//                 $('#wrapper>img').attr('src', 'images/met-1.png');
//             };
//         });
//     };
// });