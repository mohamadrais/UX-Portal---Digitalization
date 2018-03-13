$(document).ready(function() {

            onScrollAnimationFade();

            /* Every time the window is scrolled ... */
            $(window).scroll(function() {
                /* Check the location of each desired element */
                onScrollAnimationFade();
            });

        });

        $(document).ready(function() {
            //Scrollspy offset
            $("body").scrollspy({
                target: ".scrollable",
                offset: 200
            });

            var prev = "";
            $('.scrollable').on('activate.bs.scrollspy', function() {
                //get current class of active li
                var id =  $(this).find('li.active a').attr('class');

                $('.downloadables').find('nav ul li.'+id).addClass("active");

                //checking to remove preveious active li
                if (prev == "") {
                    prev = id;
                }
                else{
                    $('.downloadables').find('nav ul li.'+prev).removeClass("active");
                    prev = id;
                }

            })
                // Add smooth scrolling on all links inside the navbar
            $(".scrollable a").on('click', function(event) {
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
                    }, 800, function() {
                        // Add hash (#) to URL when done scrolling (default click behavior)
                        window.location.hash = hash;
                    });
                } // End if

            });
        });

        function onScrollAnimationFade() {
            $('.hideme,.downloadables').each(function(i) {

                var bottom_of_object = $(this).offset().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
				
				bottom_of_window = bottom_of_window + 200;  

                /* If the object is completely visible in the window, fade it it */
                if (bottom_of_window > bottom_of_object) {
                    $(this).animate({ 'opacity': '1' }, 500);
                }
            });
        }