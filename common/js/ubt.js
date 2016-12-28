$(function(){
    banner('.swiper-container');
})
 /**
  * 轮播图
  * @type {Swiper}
  */
function banner(className) {
     var topSlider=new Swiper(className, {
            slidesPerView: 1,
            centeredSlides: true,
            autoplay: 3000,
            loop: true,
            scrollbar:'.swiper-scrollbar',
            autoplayDisableOnInteraction: true
        });
}
//@koala-prepend '../ubt/ubt_shoplist.js'
//@koala-prepend 'tab.js'
//@koala-prepend '../ubt/ubt_good_detail.js'
//@koala-prepend 'upload.js'