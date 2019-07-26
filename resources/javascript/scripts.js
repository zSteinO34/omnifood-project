$(document).ready(function() {

    /* Sticky Navigation Bar */
    $('.js-section-features').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
     }, {
            offset: '60px'
        });

    /* Scroll on buttons */
    $('.js-scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js-section-plans').offset().top}, 1500);
    });

    $('.js-scroll-to-start').click(function () {
        $('html, body').animate({ scrollTop: $('.js-section-features').offset().top }, 1000);
    });

    /* Navigation Scrolling */
    $("a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    /* Animation on scroll */
    $('.js-wp-1').waypoint(function(direction) {
        $('.js-wp-1').addClass('animated fadeIn');
    }, {
            offset: '50%'
    });

    $('.js-wp-4').waypoint(function (direction) {
        $('.js-wp-4').addClass('animated swing');
    }, {
            offset: '50%'
        });

        /* Mobile Navigation */
    $('.js-mobile-nav').click(function() {
        var nav = $('.js-main-nav');
        nav.slideToggle(200);
    });

});