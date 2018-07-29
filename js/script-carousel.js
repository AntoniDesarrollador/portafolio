$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    stagePadding: 0,
    autoWidth: false,

    navText: ['<i class="fas fa-arrow-circle-left" title="anterior"></i>', '<i class="fas fa-arrow-circle-right" title="Siguiente"</i>'],
    resposive: {
        0: {
            items:1
        },
        500:{
            items:2,
            margin:20,
            statePadding:10
        },
        800:{
            items:3,
            margin:20,
            statePadding:10
        },
        1000: {
            items:4,
            margin:20,
            statePadding:10
        }
                                
    }
})
