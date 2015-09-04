$(document).ready(function() {
        $('.first').show();
        $('.first>#answers>.answer').click(function() {
            $('.first').hide();
            $('.second').show();
        });
        $('.second>#answers>.answer').click(function() {
            $('.second').hide();
            $('.third').show();
           $('#wrapper>img').attr('src', 'images/met-2.png');
        });
        $('.third>#answers>.answer').click(function() {
            $('.third').hide();
            $('.fourth').show();
        });
        $('.fourth>#answers>.answer').click(function() {
            $('.fourth').hide();
            $('.fifth').show();
        });
        $('.fifth>#answers>.answer').click(function() {
            $('.fifth').hide();
            $('.sixth').show();
           $('#wrapper>img').attr('src', 'images/met-1.png');
        });
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