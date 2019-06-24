$(document).ready(()=>{


$('.project-1-absolute').on('click', ()=>{

$('.project-1-hidden').css({display: 'block', transition: '2s'});

});

$('.project-1-hidden-div').on('click', ()=>{

    $('.project-1-hidden').css({display: 'none', transition: '2s'});

});

$('.project-2-absolute').on('click', ()=>{

    $('.project-2-hidden').css({display: 'block', transition: '2s'});
    
    });
    
    $('.project-2-hidden-div').on('click', ()=>{
    
        $('.project-2-hidden').css({display: 'none', transition: '2s'});
    
    });

    $('.project-3-absolute').on('click', ()=>{

        $('.project-3-hidden').css({display: 'block', transition: '2s'});
        
        });
        
        $('.project-3-hidden-div').on('click', ()=>{
        
            $('.project-3-hidden').css({display: 'none', transition: '2s'});
        
        });


});