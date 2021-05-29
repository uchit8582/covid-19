

 var preloader = document.getElementById('loading');
 function loadfun(){
     preloader.style.display = 'none';
 }




$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');

        $('.navbar').toggleClass('nav-toggle');
    });

   


    $(window).on('load scroll',function(){

        $('#menu').removeClass('fa-times');
            $('.navbar').removeClass('nav-toggle');

            if($(window).scrollTop() > 0){
                $('header').addClass('sticky');
            }

            else{

                $('header').removeClass('sticky');

            }

            $('a[href="#"]').on('click',function(e){
                $('html,body').animate({
                    scrollTop : $($(this).attr('href')).offset().top,

                },
                    500,
                    'linear'
                );
            })

    });


});