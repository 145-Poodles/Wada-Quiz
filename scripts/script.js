var health = 3;
var ready = false;
var heartWidth = $('.hearts').width();
var removeWidth = 80;
$(document).ready(function() {
    if ($(window).height() <= 700) {
        $('.stars').hide();
        $('body').css('padding-top', '30px');
        $('.more').css('bottom', '10px');
    };
    $('.blue-border').attr('src', './images/ready.png');
    $('header>p:last-of-type').click(function() {
        ready = true;
        if (ready) {
            document.addEventListener('keydown', function(e) {
                $('#answer').css({
                    'background': '#18184a',
                    'color': 'white'
                });
            });
            $('.healthBar>p').html('0/20');
            $('.blue-border').attr('src', './images/bg-2.jpg');
            $('header').remove();
            $('.first, .healthBar').show();
            $('.first>#answers>p').not(document.getElementById('answer')).click(function() {
                health -= 1;
                $('.hearts').css({
                    width: removeWidth
                });
                if (health == 1) {
                    $('.hearts').css({
                        width: removeWidth - 40
                    });
                };
                $('.wrong').fadeIn(100);
                setTimeout(function() {
                    $('.wrong').fadeOut(100);
                }, 500);
                if (health <= 0) {
                    $('#wrapper>img:nth-of-type(2)').show();
                    $('.memoca, .dolphi, article, .blue-border').hide();
                    $('body').css('background', 'url("./images/red-tile.png")');
                    $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                    $('#wrapper>.lost').css('display', 'block');
                    $('.stars').css('background', 'url("./images/red-stars.png")');
                    $('.logo').attr('src', './images/red-logo.png');
                    $('.more').css('background', 'red');
                    $('.healthBar').remove();
                };
            });
            $('.first>#answers>#answer').click(function() {
                $('.healthBar>p').html('1/20');
                $('.first').remove();
                $('.second').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.second>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.second>#answers>#answer').click(function() {
                $('.healthBar>p').html('2/20');
                $('.second').remove();
                $('.third').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.third>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.third>#answers>#answer').click(function() {
                $('.healthBar>p').html('3/20');
                $('.third').remove();
                $('.fourth').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.fourth>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.fourth>#answers>#answer').click(function() {
                $('.healthBar>p').html('4/20');
                $('.fourth').remove();
                $('.fifth').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.fifth>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.fifth>#answers>#answer').click(function() {
                $('.healthBar>p').html('5/20');
                $('.fifth').remove();
                $('.sixth').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.sixth>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.sixth>#answers>#answer').click(function() {
                $('.healthBar>p').html('6/20');
                $('.sixth').remove();
                $('.seven').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.seven>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.seven>#answers>#answer').click(function() {
                $('.healthBar>p').html('7/20');
                $('.seven').remove();
                $('.eight').show();
                $('.correct').fadeIn(100);
                $('.blue-border').attr('src', './images/smug.png');
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.eight>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.eight>#answers>#answer').click(function() {
                $('.healthBar>p').html('8/20');
                $('.eight').remove();
                $('.nine').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.nine>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.nine>#answers>#answer').click(function() {
                $('.healthBar>p').html('9/20');
                $('.nine').remove();
                $('.ten').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.ten>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.ten>#answers>#answer').click(function() {
                $('.healthBar>p').html('10/20');
                $('.ten').remove();
                $('.eleven').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.eleven>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.eleven>#answers>#answer').click(function() {
                $('.healthBar>p').html('11/20');
                $('.eleven').remove();
                $('.twelve').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.twelve>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.twelve>#answers>#answer').click(function() {
                $('.healthBar>p').html('12/20');
                $('.twelve').remove();
                $('.thirteen').show();
                $('.correct').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.thirteen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.thirteen>#answers>#answer').click(function() {
                $('.healthBar>p').html('13/20');
                $('.thirteen').remove();
                $('.fourteen').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.fourteen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.fourteen>#answers>#answer').click(function() {
                $('.healthBar>p').html('14/20');
                $('.fourteen').remove();
                $('.fifteen').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.blue-border').attr('src', './images/The_greatest_moment.png');
                $('.fifteen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.fifteen>#answers>#answer').click(function() {
                $('.healthBar>p').html('15/20');
                $('.fifteen').remove();
                $('.sixteen').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.sixteen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.sixteen>#answers>#answer').click(function() {
                $('.healthBar>p').html('16/20');
                $('.sixteen').remove();
                $('.seventeen').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.seventeen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.seventeen>#answers>#answer').click(function() {
                $('.healthBar>p').html('17/20');
                $('.seventeen').remove();
                $('.eighteen').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.eighteen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.eighteen>#answers>#answer').click(function() {
                $('.healthBar>p').html('18/20');
                $('.eighteen').remove();
                $('.nineteen').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.nineteen>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.nineteen>#answers>#answer').click(function() {
                $('.healthBar>p').html('19/20');
                $('.nineteen').remove();
                $('.twenty').show();
                $('.correct').fadeIn(100);
                setTimeout(function() {
                    $('.correct').fadeOut(100);
                }, 500);
                $('.twenty>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
            $('.twenty>#answers>#answer').click(function() {
                $('.healthBar>p').html('20/20');
                $('.twenty').remove();
                $('.twentyOne').show();
                $('.healthBar').remove();
                $('.blue-border').attr('src', './images/bg-1.jpg');
                $('.twentyOne>#answers>p').not(document.getElementById('answer')).click(function() {
                    health -= 1;
                    $('.hearts').css({
                        width: removeWidth
                    });
                    if (health == 1) {
                        $('.hearts').css({
                            width: removeWidth - 40
                        });
                    };
                    $('.wrong').fadeIn(100);
                    setTimeout(function() {
                        $('.wrong').fadeOut(100);
                    }, 500);
                    if (health <= 0) {
                        $('#wrapper>img:nth-of-type(2)').show();
                        $('.memoca, .dolphi, article, .blue-border').hide();
                        $('body').css('background', 'url("./images/red-tile.png")');
                        $('#wrapper>img:nth-of-type(1)').removeClass('blue-border').addClass('red-border');
                        $('#wrapper>.lost').css('display', 'block');
                        $('.stars').css('background', 'url("./images/red-stars.png")');
                        $('.logo').attr('src', './images/red-logo.png');
                        $('.more').css('background', 'red');
                        $('.healthBar').remove();
                    };
                });
            });
        };
    });
});