$(function() {

    // Variables
    var navbarLink = $('.navbar .navbar-nav .nav-item a');

    // Add active class on navbar link
    navbarLink.on('click', function() {
      var $this = $(this);
        $this.parent('.nav-item').addClass('active').siblings().removeClass('active');
        $('body, html').animate({
          scrollTop: $($this.data('navigate')).offset().top - $this.parents('.navbar.fixed-top').innerHeight()
        }, 1000);
        return false;
    });

    // Show scroll top button
    $(window).scroll(function() {
        if($(this).scrollTop() > 800) {
            $('.scroll-top-button').css('right', '20px');
        } else {
            $('.scroll-top-button').css('right', '-200px');
        }
       /* navbarLink.each(function () {
            var $this = $(this);
            if ($($this.data('navigate')).offset().top <= ($(window).scrollTop() + $('.navbar.fixed-top').innerHeight() + 20)) {
              $this.parents('li').addClass('active').siblings().removeClass('active');
            }
        });*/
    });

    // Make scrollTop zero when click on the scrollTop button
    $('.scroll-top-button').on('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });

    // Calculate the reset date for the next event
    function makeTimer() {

        var endTime = new Date("April 27, 2022 17:25:00 PDT");			
        var endTime = (Date.parse(endTime)) / 1000;

        var now = new Date();
        var now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400); 
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        $("#days").html(days + "<span>أيام</span>");
        $("#hours").html(hours + "<span>ساعات</span>");
        $("#minutes").html(minutes + "<span>دقائق</span>");
        $("#seconds").html(seconds + "<span>ثوان</span>");		

    }
    setInterval(function() { makeTimer(); }, 1000);

    // Add background to navbar when the scrollTop greater than zero
    function checkScrollTop() {
        if($(this).scrollTop() > 0) {
            $('.navbar.fixed-top').addClass('fixed-background');
        } else {
            $('.navbar.fixed-top').removeClass('fixed-background');
        }
    }
    if ($(window).width() > 991) {
        checkScrollTop();
        $(window).scroll(function() {
            checkScrollTop();
        });
    }

    // Trigger counterup plugin
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // Trigger magnificPopup plugin
    $('.gallary .gallary-item').each(function() {
	    $(this).magnificPopup({
	        delegate: 'a', 
	        type: 'image',
	        gallery: {
	          enabled:true
	        },
	    });
    });

    //Trigger slick slider
    $('.client-slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

});