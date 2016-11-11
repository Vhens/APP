$(function(){
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
//@koala-prepend 'common.js'
//@koala-prepend 'notice.js'
