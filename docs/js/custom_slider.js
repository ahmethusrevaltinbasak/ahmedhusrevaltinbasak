$(document).ready(function(){
    $(".owl-carousel").owlCarousel(
        {
            loop:true,
            items:1,
            autoplay:true,
            autoplayTimeout:3000,
            autoplayHoverPause:true,
        }
    );

    $('.sliderImage').on('click', function(event){
        var $this = $(this);
        console.log('Clicked');
        console.log($this[0]);
        console.log($this[0].src);
        console.log(event)
    });
});
