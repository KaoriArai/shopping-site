$(document).ready(function(){
    $('#cover_area').owlCarousel(
        {
            loop: true,
            nav: false,
            dots:true,
            items: 1,
            autoplay: false
        }
    );

    $('.side_link_title').click(function(){
        $(this).toggleClass("openlink");
        $('.side_link_contens').slideToggle();
    });
    $('.side_cate_title').click(function(){
        $(this).toggleClass("openlink");
        $('.side_cate_contens').slideToggle();
    });

});