$(document).ready(function(){
    $('.logo-area').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true,
        pauseOnHover: true,
        responsive: [{
            
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  
                }
              },
              {
                breakpoint: 520,
                settings: {
                  slidesToShow: 3,
                  
                }

            
        
            

        
        }]
    });
})