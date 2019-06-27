
$(document).ready(()=>{


$('.project-1-absolute').on('click', ()=>{

$('.project-1-hidden').css({display: 'block'});

});

$('.project-1-hidden-div').on('click', ()=>{

    $('.project-1-hidden').css({display: 'none'});

});

$('.project-2-absolute').on('click', ()=>{

    $('.project-2-hidden').css({display: 'block'});
    
    });
    
    $('.project-2-hidden-div').on('click', ()=>{
    
        $('.project-2-hidden').css({display: 'none'});
    
    });
/*
    $('.project-3-absolute').on('click', ()=>{

        $('.project-3-hidden').css({display: 'block'});
        
        });
        
        $('.project-3-hidden-div').on('click', ()=>{
        
            $('.project-3-hidden').css({display: 'none'});
        
        });
*/


$(window).on('load', ()=>{

   $(".first-page-container-div-1").delay(200).animate({top: '50%'}, 500);
   $(".first-page-container-div-2").delay(500).animate({top: '50%'}, 500);
   $(".first-page-container-div-3").delay(800).animate({top: '50%'}, 500);
   $(".first-page-container-div-4").delay(1100).animate({top: '50%'}, 500);
   $('.first-page-h1').delay(1500).animate({left: '60%'}, 500).animate({left: '50%'}, 1000);
   //$('.first-page-line').delay(1500).animate({left: '40%'}, 500).animate({left: '50%'}, 1000);
   $('.first-page-div-developer-h1').delay(3000).fadeIn('slow');
   $('.first-page-contact-div-i').delay(3500).fadeIn('slow');


});



  // Testing Here


        $('.project-3-absolute').on('click', ()=>{

            $('.project-3-hidden').fadeToggle( "slow", "linear" );
                
            });
            
            
            $('.project-3-hidden-div').on('click', ()=>{
            
                $('.project-3-hidden').fadeToggle( "slow", "linear" );
            
            });

 // Testing Here


});