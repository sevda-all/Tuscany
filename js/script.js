
jQuery(window).scroll(function () {
    var $sections = $('section');
    $sections.each(function (i, el) {
        var top = $(el).offset().top - 250;
        var bottom = top + $(el).height();
        var scroll = $(window).scrollTop();
        var id = $(el).attr('id');
        if (scroll > top && scroll < bottom) {
            $('a.active').removeClass('active');
            $('a[href="#' + id + '"]').addClass('active');
        }
    })
});

$("nav").on("click", "a", function (event) {

    event.preventDefault();

    var id = $(this).attr('href'),

        top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 800);
});