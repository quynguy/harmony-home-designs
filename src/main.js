console.log("main.js is being executed");


$(document).ready(function() {

    $('.fa-bars').click(function(){
        console.log("bars icon clicked");
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
    });

    $('.count').each(function(){
        var $this = $(this),
        countTo = $this.attr('data-count');
        $({ countNum : $this.text() }).animate({
            countNum : countTo
        },
        {
            duration: 5000,
            step: function(){
                $this.text(Math.floor(this.countNum));
        },
            complete : function(){
                $this.text(this.countNum + '+');
        }
    }
        )
    })

    $('.project').magnificPopup({
        delegate: 'a',
        type: 'image', 
        gallery: {
            enabled: true
        }
    })

    $('.carousel').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 4000,
        prevArrow: false,
        nextArrow: false,
        responsive: [
          {
            breakpoint: 360,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]   
      });


    $('.about-item').wrap('<div class="card"></div>');

     $('.about-card-group').css({
    'display': 'flex',
    'justify-content': 'space-between'
    });


    $('.about-team-card').wrap('<div class="team"></div>');
    function adjustTeamWrapper() {
        var screenWidth = $(window).width();
        var cardWidth = $('.about-team-card').width();
        var parentWidth = $('.about-team-card').parent().width();
        var cardWidthPercentage = (cardWidth / parentWidth) * 100;
        console.log('Screen width:', screenWidth);
        if (screenWidth >= 360 && screenWidth <= 480) {
            console.log('Setting display to block');
            $('.team-wrapper').css('display', 'block');
            $('.about-team-card').css('width', '100%'); // Adjust width to 100%
            console.log('About-team-card width:', cardWidthPercentage + '%');
        } else {
            console.log('Setting display to flex');
            $('.team-wrapper').css({
                'display': 'flex',
                'justify-content': 'space-between'
            });
            // Reset the width of the about-team-card to its default value (unset)
            $('.about-team-card').css('width', ''); 
        }
    }

    adjustTeamWrapper();

    $(window).resize(adjustTeamWrapper); 
    console.log("Adjust Team Wrapper function is called after window resize event.");

    
});


