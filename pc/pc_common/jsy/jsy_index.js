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