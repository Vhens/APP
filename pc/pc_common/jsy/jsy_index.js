$(function(){
    banner('.swiper-container');
     var topSlider=new Swiper('.swiper-container1', {
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: 3000,
            loop: true,
            slidesPerView : 5,
            spaceBetween : 20,
            prevButton:'.swiper-button-prev',
            nextButton:'.swiper-button-next',
            autoplayDisableOnInteraction: true
        });
     /**
      * tab
      */
     $("#nav-memu").find('.nav-memu-item').hover(function(){
        var _this=$(this);
        _this.find('.nav-sub-memu').addClass('cur-nav').parent().siblings().children().removeClass('cur-nav');
         _this.find('.nav-memu-page').stop(true,true).slideDown(400);
     },function(){
        var _this=$(this);
       _this.find('.nav-sub-memu').removeClass('cur-nav');
       _this.find('.nav-memu-page').stop(true,true).slideUp("fast");
     });
     $('.nav-sub-item').hover(function(){
        $(this).children().addClass('cur-sub-nav').parent().siblings().children().removeClass('cur-sub-nav');
     })
});
function banner(className) {
     var topSlider=new Swiper(className, {
            pagination : '.swiper-pagination',
            paginationHide :true,
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: 3000,
            loop: true,
            autoplayDisableOnInteraction: true
        });
}