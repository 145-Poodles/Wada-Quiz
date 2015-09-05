var health = 2;
$(document).ready(function() {
    $('.first').show();
    $('.first>#answers>p').not(document.getElementById('answer')).click(function() {
        health -= 1;
        $('.wrong').show();
        setTimeout(function() {
            $('.wrong').hide();
        }, 500);
        if (health <= 0) {
            $('#wrapper>img:nth-of-type(2)').show();
            $('.memoca').hide();
            $('.dolphi').hide();
            $('article').hide();
            $('.blue-border').hide();
            $('body').css('background', 'url("./images/red-tile.png")');
            $('#wrapper>img:nth-of-type(1)').removeClass('blue-border');
            $('#wrapper>img:nth-of-type(1)').addClass('red-border');
            $('#wrapper>.lost').css('display', 'block');
            $('.stars').css('background', 'url("./images/red-stars.png")');
            $('.logo').attr('src', './images/red-logo.png');
        };
    });
    $('.first>#answers>#answer').click(function() {
        $('.first').remove();
        $('.second').show();
        $('.correct').show();
        setTimeout(function() {
            $('.correct').hide();
        }, 500);
        $('.second>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').show();
            setTimeout(function() {
                $('.wrong').hide();
            }, 500);
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
                $('.memoca').hide();
                $('.dolphi').hide();
                $('article').hide();
                $('.blue-border').hide();
                $('body').css('background', 'url("./images/red-tile.png")');
                $('#wrapper>img:nth-of-type(1)').removeClass('blue-border');
                $('#wrapper>img:nth-of-type(1)').addClass('red-border');
                $('#wrapper>.lost').css('display', 'block');
                $('.stars').css('background', 'url("./images/red-stars.png")');
                $('.logo').attr('src', './images/red-logo.png');
            };
        });
    });
    $('.second>#answers>#answer').click(function() {
        $('.second').remove();
        $('.third').show();
        $('.correct').show();
        setTimeout(function() {
            $('.correct').hide();
        }, 500);
        $('.third>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').show();
            setTimeout(function() {
                $('.wrong').hide();
            }, 500);
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
                $('.memoca').hide();
                $('.dolphi').hide();
                $('article').hide();
                $('.blue-border').hide();
                $('body').css('background', 'url("./images/red-tile.png")');
                $('#wrapper>img:nth-of-type(1)').removeClass('blue-border');
                $('#wrapper>img:nth-of-type(1)').addClass('red-border');
                $('#wrapper>.lost').css('display', 'block');
                $('.stars').css('background', 'url("./images/red-stars.png")');
                $('.logo').attr('src', './images/red-logo.png');
            };
        });
    });
    $('.third>#answers>#answer').click(function() {
        $('.third').remove();
        $('.fourth').show();
        $('.correct').show();
        setTimeout(function() {
            $('.correct').hide();
        }, 500);
        $('.fourth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').show();
            setTimeout(function() {
                $('.wrong').hide();
            }, 500);
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
                $('.memoca').hide();
                $('.dolphi').hide();
                $('article').hide();
                $('.blue-border').hide();
                $('body').css('background', 'url("./images/red-tile.png")');
                $('#wrapper>img:nth-of-type(1)').removeClass('blue-border');
                $('#wrapper>img:nth-of-type(1)').addClass('red-border');
                $('#wrapper>.lost').css('display', 'block');
                $('.stars').css('background', 'url("./images/red-stars.png")');
                $('.logo').attr('src', './images/red-logo.png');
            };
        });
    });
    $('.fourth>#answers>#answer').click(function() {
        $('.fourth').remove();
        $('.fifth').show();
        $('.correct').show();
        setTimeout(function() {
            $('.correct').hide();
        }, 500);
        $('.fifth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').show();
            setTimeout(function() {
                $('.wrong').hide();
            }, 500);
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
                $('.memoca').hide();
                $('.dolphi').hide();
                $('article').hide();
                $('.blue-border').hide();
                $('body').css('background', 'url("./images/red-tile.png")');
                $('#wrapper>img:nth-of-type(1)').removeClass('blue-border');
                $('#wrapper>img:nth-of-type(1)').addClass('red-border');
                $('#wrapper>.lost').css('display', 'block');
                $('.stars').css('background', 'url("./images/red-stars.png")');
                $('.logo').attr('src', './images/red-logo.png');
            };
        });
    });
    $('.fifth>#answers>#answer').click(function() {
        $('.fifth').remove();
        $('.sixth').show();
        $('.correct').show();
        setTimeout(function() {
            $('.correct').hide();
        }, 500);
        $('.sixth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').show();
            setTimeout(function() {
                $('.wrong').hide();
            }, 500);
            if (health <= 0) {
                $('#wrapper>img:nth-of-type(2)').show();
                $('.memoca').hide();
                $('.dolphi').hide();
                $('article').hide();
                $('.blue-border').hide();
                $('body').css('background', 'url("./images/red-tile.png")');
                $('#wrapper>img:nth-of-type(1)').removeClass('blue-border');
                $('#wrapper>img:nth-of-type(1)').addClass('red-border');
                $('#wrapper>.lost').css('display', 'block');
                $('.stars').css('background', 'url("./images/red-stars.png")');
                $('.logo').attr('src', './images/red-logo.png');
            };
        });
    });
});