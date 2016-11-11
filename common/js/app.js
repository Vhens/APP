
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
<<<<<<< HEAD
};
//@koala-prepend '../yuebang/yb_brand_business.js'
=======
}
/**
 * VIP
 */
//@koala-prepend '../yuebang/yb_vip.js'
>>>>>>> refs/remotes/origin/master

