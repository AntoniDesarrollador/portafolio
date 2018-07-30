
$('.owl-carousel').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            autoWidth: false,
            responsiveClass:true,
            navText: ['<i class="fas fa-arrow-circle-left" title="anterior"></i>', '<i class="fas fa-arrow-circle-right" title="Siguiente"</i>'],
            responsive: {
                0: {
                    items: 1,
                    nav:true
                },
                500: {
                    items: 2,
                    margin: 20
                    
                },
                800: {
                    items: 3,
                    margin: 20
                },
                1000: {
                    items: 4,
                    margin: 20
                }

            }
        });
           
