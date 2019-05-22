$(document).ready(function () {
    var state = false,
        links = $(".navbar-responsive__link");
    $("#nav-icon3").click(function () {
        $(this).toggleClass("open");
        if (!state) {
            $(".navbar-responsive").css("transform", "translate3d(0,0,0)");
            state = true;
            $(".body-class").addClass("block-scroll");
        } else {
            $(".navbar-responsive").css(
                "transform",
                "translate3d(-100%,0,0)"
            );
            state = false;
            $(".body-class").removeClass("block-scroll");
        }
    });
    $.each(links, function (index, value) {
        value.addEventListener("click", function () {
            if (!state) {
                $(".navbar-responsive").css("transform", "translate3d(0,0,0)");
                state = true;
            } else {
                $(".navbar-responsive").css(
                    "transform",
                    "translate3d(-100%,0,0)"
                );
                state = false;
            }
            $("#nav-icon3").removeClass("open");
        });
    });

    $(window).scroll(function () {
        var sc = $(window).scrollTop();
        if (sc > 100) {
            $(".logo").addClass("logo-scroll");
            $("#main-navbar").addClass("navbar-scroll");
        } else {
            $(".logo").removeClass("logo-scroll");
            $("#main-navbar").removeClass("navbar-scroll");
        }
    });
    $('.table-responsive').delay(600).animate({
        scrollLeft: $('#demo').css('left')
    }, 800, function () {

        $('.table-responsive').animate({
            scrollLeft: 0
        }, 500);
    });
});