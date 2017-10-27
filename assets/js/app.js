$('#backtotop').click(function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, 500);
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 60) {
        $('.back-to-top').slideDown();
    } else {
        $('.back-to-top').slideUp();
    }
});


