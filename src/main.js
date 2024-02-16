console.log("main.js is being executed");


$(document).ready(function() {
    $('.fa.fa-bars').click(function(){
        console.log("bars icon clicked");
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('.fa.fa-bars').removeClass('fa-times');
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
});