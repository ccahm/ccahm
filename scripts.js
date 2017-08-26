var SITE_NAME = "Chittor College of Airport and Hotel Management";

(function($) {
    var APP = (function() {
        return {
            init: function() {
                console.log("APP Loaded");
                this.slider();
                this.gallery();
            },

            slider: function() {
                var path = "/images/slides/";
                var count = 6;
                var sliderId = "#slider-gallery";
                $slider = $(sliderId),
                    $sliderIndicator = $slider.find(".carousel-indicators"),
                    $sliderContainer = $slider.find('.carousel-inner');
                for (var i = 1; i <= count; i++) {
                    var image = path + "00" + i + ".jpg";
                    (function(path, idx) {
                        var $indicator = $("<li/>").attr({
                            "data-target": sliderId,
                            "data-slide-to": i - 1
                        });
                        var $slide = $("<div/>").addClass('item').append($("<img />").attr({
                            src: image,
                            alt: SITE_NAME,
                        }));
                        if (idx === 1) {
                            $slide.addClass('active');
                            $indicator.addClass('active');
                        }
                        $indicator.appendTo($sliderIndicator);
                        $slide.appendTo($sliderContainer);
                        console.log($indicator, $slide);
                    })(image, i)
                }
            },

            gallery: function() {
                var path = "/images/gallery/";
                var count = 19;
                var galleryGrid = "#gallery .grid";
                $slider = $(galleryGrid);
                for (var i = 1; i <= count; i++) {
                    var image = path + (i < 10 ? "00" : "0") + i + ".jpg";
                    (function(path, idx) {
                        // var imgLink = $("<a/>").attr({ href: image, "data-lightbox": "CCA" }).append(  )
                        var $slide = $("<a/>").attr({ href: image, "data-lightbox": "CCA" }).addClass('grid-item img-gallery').append($("<img />").attr({
                            src: image,
                            alt: SITE_NAME,
                        }));
                        $slide.appendTo($slider);
                    })(image, i)

                    if (i === count - 1) {
                        setTimeout(function() {
                            $('.grid').masonry({
                                // options
                                itemSelector: '.grid-item',
                                percentPosition: true,
                                gutter: 10
                            });
                        }, 100)

                    }
                }
            }
        }
    })().init();


    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

})(jQuery)