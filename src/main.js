console.log("main.js is being executed");


$(document).ready(function() {
    $('.fa.fa-bars').click(function(){
        console.log("bars icon clicked");
        $(this).toggleClass('fa-times');
    });

});