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

    $('.project-3-absolute').on('click', ()=>{

        $('.project-3-hidden').css({display: 'block'});
        
        });
        
        $('.project-3-hidden-div').on('click', ()=>{
        
            $('.project-3-hidden').css({display: 'none'});
        
        });

  // Testing Here


        $('.project-3-absolute').on('click', ()=>{

            $('.project-3-hidden').animate({
                opactiy: 0.25,
                height: 'toggle',
                left: '50'
            }, 5000, ()=>{
                
            });
            
            });
            
            $('.project-3-hidden-div').on('click', ()=>{
            
                $('.project-3-hidden').css({display: 'none'});
            
            });

 // Testing Here


});