$(document).ready(function() {
    var error = false;  

    // menu functions
    show_hide_menu();

    $('.navbar-btn').on('click', function() {
        if ($('.menu').is(':hidden')) {
            $('.menu').slideDown('slow');
        } else {
            $('.menu').slideUp('slow');
        }
    });

    $(window).resize(function() {
        show_hide_menu();
    });

});

function logIt() {
    console.log('setTimeout called');
}

function clearErrors() {
    $('#myModal #contact-alert').addClass('hidden');
    $('#contact-form>div.has-error').removeClass('has-error');
    $('#send-it').prop('disabled', false);
    $('.progress').addClass('hidden');
}

function removeAnimation() {
    $('#myModal #contact-alert').removeClass('shake animated');
}

function sentSuccess() {
    $('#myModal #contact-alert').addClass('hidden');
    $('#myModal').modal('hide');
}

function showSuccess() {
    $('#msg-success').addClass('in');
}

function hideSentSuccess() {
    $('#msg-success').removeClass('in');
}

function showError() {
    $('#msg-error').addClass('in');
}

function hideError() {
    $('#msg-error').removeClass('in');
}


function show_hide_menu() {
    var windowWidth = $(window).width();

    if (windowWidth >= 480) {
        $('.menu').show();
    } else {
        $('.menu').hide();
    }
}

function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (365 * 24* (60* (60 * 1000))));
    document.cookie = key + '=' + value + ';expires=' + expires.toUTCString();
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}

function switch_stylesheet() {
    $('link[rel=stylesheet]').remove();
    var cookie_value = getCookie('style');
    if (cookie_value === 0 || cookie_value === undefined) {
        $('head').append('<link rel="stylesheet" type="text/css" href="/css/light.css">');
        setCookie('style', 0);
    } else {
        $('head').append('<link rel="stylesheet" type="text/css" href="/css/app.css">');
        setCookie('style', 1);
    }
}

function add_css() {
    $('head').append('<link rel="stylesheet" type="text/css" href="/css/minimal.min.css">');
}