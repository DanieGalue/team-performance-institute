function initOwlCarousel(){
    $('#carousel-cases-studies').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true,
        navText: ['','<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            992:{
                items:2,
                nav:true,
            },
        }
    });
    $('#carousel-featured-courses').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        //autoplay:true,
        /*autoplayTimeout:5000,
        autoplayHoverPause:true,*/
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
            },
            1200:{
                items:2,
                stagePadding: 100,
            },
        }
    });
    $('#carousel-testimonials').owlCarousel({
        loop:true,
        margin:30,
        autoplay:true,
        autoplayTimeout:7000,
        autoplayHoverPause:true,
        navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true,
            },
            768:{
                items:1,
                nav:true,
            },
            992:{
                items:1,
                nav:false,
                stagePadding: 150,
            },
        }
    });
}