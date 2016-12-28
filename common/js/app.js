
$(function(){
    banner('.swiper-container');
    /**
 *星星
 */
    $('.star').raty({
        readOnly :true,
        starOn:'http://cdn.bootcss.com/raty/2.7.1/images/star-on.png',
        starOff:'http://cdn.bootcss.com/raty/2.7.1/images/star-off.png',
        score: function() {
          return $(this).attr('data-score');
        }
    });
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
//@koala-prepend '../yuebang/yb_brand_business.js'
//@koala-prepend '../yuebang/yb_business-friend.js'
//@koala-prepend 'photoswipe.js'
//@koala-prepend 'upload.js'
/**
 * VIP
 */
//@koala-prepend '../yuebang/yb_vip.js'
//@koala-prepend '../yuebang/yb_release.js'
//@koala-prepend '../yuebang/yb_brand_business.js'
//@koala-prepend '../yuebang/yb_brand_business.js'


