$(document).ready(function(){
    $('.logo-area').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 400,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            
                breakpoint: 768,
                settings: {
                  slidesToShow: 4,
                  
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