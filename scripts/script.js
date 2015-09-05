var health = 3;
$(document).ready(function() {
    $('.first').show();
    $('.first>#answers>p').not(document.getElementById('answer')).click(function() {
        health -= 1;
        $('.wrong').fadeIn(100);
        setTimeout(function() {
            $('.wrong').fadeOut(100);
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
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.second>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.third>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.fourth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.fifth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.sixth>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.sixth>#answers>#answer').click(function() {
        $('.sixth').remove();
        $('.seven').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.seven>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.seven>#answers>#answer').click(function() {
        $('.seven').remove();
        $('.eight').show();
        $('.correct').fadeIn(100);
        $('.blue-border').attr('src', './images/smug.png');
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.eight>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.eight>#answers>#answer').click(function() {
        $('.eight').remove();
        $('.nine').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.nine>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.nine>#answers>#answer').click(function() {
        $('.nine').remove();
        $('.ten').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.ten>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.ten>#answers>#answer').click(function() {
        $('.ten').remove();
        $('.eleven').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.eleven>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.eleven>#answers>#answer').click(function() {
        $('.eleven').remove();
        $('.twelve').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.twelve>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.twelve>#answers>#answer').click(function() {
        $('.twelve').remove();
        $('.thirteen').show();
        $('.correct').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.thirteen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.thirteen>#answers>#answer').click(function() {
        $('.thirteen').remove();
        $('.fourteen').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.fourteen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.fourteen>#answers>#answer').click(function() {
        $('.fourteen').remove();
        $('.fifteen').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.blue-border').attr('src', './images/The_greatest_moment.png');
        $('.fifteen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.fifteen>#answers>#answer').click(function() {
        $('.fifteen').remove();
        $('.sixteen').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.sixteen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.sixteen>#answers>#answer').click(function() {
        $('.sixteen').remove();
        $('.seventeen').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.seventeen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.seventeen>#answers>#answer').click(function() {
        $('.seventeen').remove();
        $('.eighteen').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.eighteen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.eighteen>#answers>#answer').click(function() {
        $('.eighteen').remove();
        $('.nineteen').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.nineteen>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.nineteen>#answers>#answer').click(function() {
        $('.nineteen').remove();
        $('.twenty').show();
        $('.correct').fadeIn(100);
        setTimeout(function() {
            $('.correct').fadeOut(100);
        }, 500);
        $('.twenty>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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
    $('.twenty>#answers>#answer').click(function() {
        $('.twenty').remove();
        $('.twentyOne').show();
        $('.blue-border').attr('src', './images/bg-1.jpg');
        $('.twentyOne>#answers>p').not(document.getElementById('answer')).click(function() {
            health -= 1;
            $('.wrong').fadeIn(100);
            setTimeout(function() {
                $('.wrong').fadeOut(100);
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