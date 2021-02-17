// Accordion

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};

$(document).ready(function () { // Start Coding Here

    // ScrollSpy

    $('.section').headerhighlight({
        elementsChanging: $('.nav-link'),
        currentClass: 'nav-active',
        offset: 0
    });

    // Smooth Scroll

    $("header ul li a").click(function () {
        var target = $(this).attr("href");

        $("body", "html").animate({
            scrollTop: $(target).offset().top
        }, 1000)
    });

    // Header Change

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i >= 200) {
            $(".pre-header").slideUp(function () {
                $(".mini").addClass("top");
            });
            $("header").addClass("scroll-header");
            $(".top i").css("visibility", "visible");

        } else {
            $(".pre-header").slideDown(function () {
                $(".mini").removeClass("top");
            });
            $("header").removeClass("scroll-header");
            $(".top i").css("visibility", "hidden");
        }

    });

    // To Top

    $(".top i").click(function () {
        $("body", "html").animate({
            scrollTop: 0
        }, 1000)
    });

    // Mini

    $(".list").click(function () {
        $("header ul").toggleClass("mini");
    });

    // CountTo

    $(window).scroll(function () {
        var i = $(this).scrollTop()

        if (i <= 2300) {
            $('.timer').countTo({
                onUpdate: true
            });
        };
    });

    // Portfolio

    $(function () {
        var filterList = {
            init: function () {
                $('#portfoliolist').mixItUp({
                    selectors: {
                        target: '.portfolio',
                        filter: '.filter'
                    },
                    load: {
                        filter: '.web'
                    }
                });
            }
        };
        filterList.init();
    });

    // Clients

    $('#basicSlider').multislider({
        continuous: true,
        duration: 2000
    });

}); // End Code