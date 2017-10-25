$(document).ready(function(){

    // 
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

    $('#menu_icon').click(function(){
        $('.hidden_navi').slideToggle();
    });

    $(".visible").click(function(){
        var img_src = $(this).attr("src");
        $(".display_img img").attr("src", img_src);
    });

});