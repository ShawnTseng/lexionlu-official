$(function () {
    $('.main-banner').backstretch([
    "images/banner/1.jpg",
    "images/banner/2.jpg",
    "images/banner/3.jpg",
    "images/banner/4.jpg",
    "images/banner/5.jpg",
    "images/banner/6.jpg",
    "images/banner/7.jpg",
    "images/banner/8.jpg"
    ], { duration: 5000, fade: 250 });
    $('.slider').backstretch([
   "images/Portfolio/Key/a.jpg",
   "images/Portfolio/Key/b.jpg",
   "images/Portfolio/Key/c.jpg",
   "images/Portfolio/Key/d.jpg",
   "images/Portfolio/Key/e.jpg",
   "images/Portfolio/Key/f.jpg",
   "images/Portfolio/Key/g.jpg",
   "images/Portfolio/Key/h.jpg",
   "images/Portfolio/Key/j.jpg",
   "images/Portfolio/Key/k.jpg",
   "images/Portfolio/Key/l.jpg",
   "images/Portfolio/Key/m.jpg",
   "images/Portfolio/Key/n.jpg",
   "images/Portfolio/Key/o.jpg",
   "images/Portfolio/Key/p.jpg",
   "images/Portfolio/Key/r.jpg"
    ], { duration: 5000, fade: 250});
    $(".company > .tabs > a").click(function () {
        tabs($(this), $(".company > .sections > .section"));
        return false;
    });

    $(".company .dots span").live('click', function () {
        tabs($(this), $(".company .leaders .leader-item"));
        return false;
    });

    $(".clients .dots span").live('click', function () {
        tabs($(this), $(".clients .sections .section"));
        return false;
    });

    $('.portfolio .dots span').click(function (e) {
        ind = $(this).index();
        $('.portfolio .slider').backstretch("show", ind);
        $('.portfolio .dots span').removeClass('active');
        $(this).addClass('active');
    });
    $('.portfolio .slider').on("backstretch.show", function (e, instance, index) {
        shows(index, $('.portfolio .slider .item'));
        $('.portfolio .dots span').removeClass('active');
        $('.portfolio .dots span').eq(index).addClass('active');
    });
    $('.main-banner').on("backstretch.show", function (e, instance, index) {
        shows(index, $('.descriptions .des'));
    });
    $('.fancybox').fancybox({
        minWidth: '100%',
        minHeight: '100%',
        padding: 0,
    });

    $('.lightbox-content .thums img').click(function () {
        lightimage($(this));
    });

    $(".services > .tabs > a").click(function () {
        tabs($(this), $(".services > .sections > .section"));
        $('.services-intro').hide();
        $('.services .sections').fadeIn();

        return false;
    });
    $(".services > .sections > .section > .tabs a").click(function () {
        tabs($(this), $(".services > .sections > .section > .sections > .section"));
        $('.services-intro').hide();
        $('.services .sections').fadeIn();

        return false;
    });

    $('.menu a, .scroller').click(function () {
        scroller($(this));
        return false;
    });
});


function tabs(trigger, target) {
    var index = trigger.index();
    var parent = trigger.parent();
    var targetParent = target.parent();
    $('.active', parent).removeClass("active");
    trigger.addClass("active");
    $(target.filter(':visible'), targetParent).fadeOut(function () {
        target.eq(index).fadeIn();
    });

}

function shows(index, show) {
    par1 = show.parent();
    show.filter(':visible').hide();
    show.eq(index).fadeIn();
}

function lightimage(index) {
    var par = index.parents('.lightbox-content');
    $('.images img:visible', par).fadeOut(function () {
        $('.images img', par).eq(index.index()).fadeIn();
    });
}

function scroller(a) {
    var h = $('.header-container').height();
    var s = a.attr("href");
    var targets = $(s);
    $('.menu a.active').removeClass("active");
    $('.menu a').eq(targets.index()).addClass("active");
    $('html,body').animate({
        scrollTop: targets.offset().top - h
    }, 1000);
    return false;
}
