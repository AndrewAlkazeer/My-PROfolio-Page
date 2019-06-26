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

$(window).on('load', function(){

   $(".first-page-container-div-1").delay(200).slideDown('slow');
   $(".first-page-container-div-2").delay(500).slideDown('slow');
   $(".first-page-container-div-3").delay(800).slideDown('slow');
   $(".first-page-container-div-4").delay(1100).slideDown('slow');
   $('.first-page-h1').delay(1500).animate({left: '60%'}, 500).animate({left: '50%'}, 1000);


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